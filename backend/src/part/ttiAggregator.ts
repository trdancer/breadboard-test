import {
  Packaging,
  PartAggregator,
  PartialAggregatedPart,
  PriceBreak,
  TTIPart,
  TTIPartResponse,
  TTIPricingBreak,
} from '@types';
import { SUPPLIER_NAMES } from '../helpers/constants';
import { parseLeadTimeDays } from '../helpers/utils';
import { InternalServerErrorException } from '@nestjs/common';
export default class TTIAggregator implements PartAggregator {
  partsResponse: TTIPartResponse;
  constructor(partsResponse: TTIPartResponse) {
    this.partsResponse = partsResponse;
  }
  aggregatePartResponse(partNumber: string): PartialAggregatedPart {
    const partialAggregatedPart: PartialAggregatedPart = {
      name: partNumber,
      description: '',
      totalStock: 0,
      manufacturerLeadTime: 999999999999999,
      manufacturerName: '',
      packaging: new Set<Packaging>(),
      productDoc: '',
      productUrl: '',
      productImageUrl: '',
      specifications: {},
      sourcePart: SUPPLIER_NAMES.TTI,
    };

    // TTI seems to index its data by any matching part number
    // So if there are characters in between any of the part's numbers
    // It will be returned in the API response.
    // So we filter those out here

    // The reason why these even exist is
    // because Molex modified their part numbering system overtime,
    // resulting in an extension from 5 digits (51021)
    // to 10 digits (0510210200).
    // Some parts have part "expansions" from a base, signified with
    // 4 digits after the first 5, separated by a dash (51021-0200)
    // For example there are also parts 51021-1000 and 51021-0600
    // In this scenario the last digits represent how many connectors this part has mod 100
    // 1000 = 10, 600 = 6 etc.
    // see this forum question: https://forum.digikey.com/t/molex-part-numbering-format/749

    // we know the non-dashed numbered part is the one we really want
    // for two reasons:
    // 1: part numbers are highly specific, so if the api client asks for a part "abc",
    //    we give them part "abc"
    // 2: the arrow response contains data only from 0510210200, so there is reason
    //    to believe this is the "intended" part when querying for "0510210200"
    const filteredTTIParts = this.partsResponse.parts.filter(
      (part) => part.ttiPartNumber == partNumber,
    );

    // set fields that are consistent across all part objects,
    // so choose the first part as the data source for consistency

    if (filteredTTIParts.length > 0) {
      partialAggregatedPart.description = filteredTTIParts[0].description;
      partialAggregatedPart.manufacturerName = filteredTTIParts[0].manufacturer;

      partialAggregatedPart.productDoc = filteredTTIParts[0].datasheetURL;
      partialAggregatedPart.productUrl = filteredTTIParts[0].buyUrl;
      partialAggregatedPart.productImageUrl = filteredTTIParts[0].imageURL;

      // set specifications
      partialAggregatedPart.specifications.category =
        filteredTTIParts[0].category;
      partialAggregatedPart.specifications.eccn =
        filteredTTIParts[0].exportInformation.eccn;
      partialAggregatedPart.specifications.leadInTerminals =
        filteredTTIParts[0].environmentalInformation.leadInTerminals;
      partialAggregatedPart.specifications.reachSubstanceName =
        filteredTTIParts[0].environmentalInformation.reachSubstanceName;
      partialAggregatedPart.specifications.htsCode = filteredTTIParts[0].hts;
      partialAggregatedPart.specifications.rohsStatus =
        filteredTTIParts[0].environmentalInformation.rohsStatus;
      partialAggregatedPart.specifications.SVHC =
        filteredTTIParts[0].environmentalInformation.reachSVHC;
    }

    filteredTTIParts.forEach((part) => {
      // availability info
      try {
        const parsedLeadTime = parseLeadTimeDays(part.leadTime);
        partialAggregatedPart.manufacturerLeadTime = Math.min(
          partialAggregatedPart.manufacturerLeadTime,
          parsedLeadTime,
        );
      } catch (err) {
        console.log(err);
        throw new InternalServerErrorException();
      }
      partialAggregatedPart.totalStock += part.availableToSell;

      if (
        !partialAggregatedPart.specifications?.taric &&
        part.exportInformation.taric
      ) {
        partialAggregatedPart.specifications.taric =
          part.exportInformation.taric;
      }
      // build packaging
      const packaging = this.buildPackaging(part);
      partialAggregatedPart.packaging.add(packaging);
    });
    return partialAggregatedPart;
  }
  buildPackaging(part: TTIPart): Packaging {
    const packaging: Packaging = {
      type: part.packaging,
      minimumOrderQuantity: part.salesMinimum,
      quantityAvailable: part.availableToSell,
      unitPrice: parseFloat(part.pricing.vipPrice),
      supplier: SUPPLIER_NAMES.TTI,
      priceBreaks: this.buildPricing(part.pricing.quantityPriceBreaks),
      manufacturerLeadTime: `${parseLeadTimeDays(part.leadTime)}`,
    };
    return packaging;
  }
  buildPricing(priceBreaks: TTIPricingBreak[]): PriceBreak[] {
    return priceBreaks.map(({ quantity, price }) => {
      const unitPrice = parseFloat(price);
      const priceBreak: PriceBreak = {
        breakQuantity: quantity,
        unitPrice,
        totalPrice: unitPrice * quantity,
      };
      return priceBreak;
    });
  }
}
