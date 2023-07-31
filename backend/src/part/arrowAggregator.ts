import { Packaging, PartAggregator, PartialAggregatedPart, PriceBreak, ArrowPart, ArrowPartResponse, ArrowPricingTier } from "@types";
import { SUPPLIER_NAMES } from "../helpers/constants";
import { parseLeadTimeDays } from "../helpers/utils";

export default class ArrowAggregator implements PartAggregator<ArrowPartResponse> {
    partsResponse: ArrowPartResponse
    constructor(partsResponse:ArrowPartResponse) {
        this.partsResponse = partsResponse
    }
    aggregatePartResponse(partNumber: string): PartialAggregatedPart {
        const partialAggregatedPart:PartialAggregatedPart = {
            name: "",
            description: "",
            totalStock: 0,
            manufacturerLeadTime: 999999999999999,
            manufacturerName: "",
            packaging: new Set<Packaging>(),
            productDoc: "",
            productUrl: "",
            productImageUrl: "",
            specifications: {},
            sourcePart: SUPPLIER_NAMES.MYARROW,
        }
        // set the "static" fields (non-collection or derived/calculated fields)
        if (this.partsResponse.totalRecords > 0 && this.partsResponse.pricingResponse.length > 0) {
      
            // All the following fields are the same value across
            // all returned parts from Myarrow
            // so we pick the values from the first part
            
            partialAggregatedPart.name = this.partsResponse.pricingResponse[0].arwPartNum.name
            partialAggregatedPart.description = this.partsResponse.pricingResponse[0].description
            partialAggregatedPart.manufacturerName = this.partsResponse.pricingResponse[0].manufacturer
            
            // set specifications found in MyArrow part data
            partialAggregatedPart.specifications.htsCode = this.partsResponse.pricingResponse[0].htsCode || undefined
            partialAggregatedPart.specifications.euRohs = this.partsResponse.pricingResponse[0].euRohs || undefined
            partialAggregatedPart.specifications.chinaRohs = this.partsResponse.pricingResponse[0].chinaRohs || undefined
            partialAggregatedPart.specifications.partClassification = this.partsResponse.pricingResponse[0].partClassification || undefined
            partialAggregatedPart.specifications.exportControlClassificationNumberUS = this.partsResponse.pricingResponse[0].exportControlClassificationNumberUS || undefined
            partialAggregatedPart.specifications.exportControlClassificationNumberWAS = this.partsResponse.pricingResponse[0].exportControlClassificationNumberWAS || undefined
            
            partialAggregatedPart.specifications.SVHC = this.partsResponse.pricingResponse[0].SVHC.svhcOverThreshold || undefined
        }
        this.partsResponse.pricingResponse.forEach((part) => {
            console.log('processing arrow part...')
            
            // availability info
            if (part.leadTime) {
                //assume that lead time is stated in weeks since it is stored as a number without a label
                partialAggregatedPart.manufacturerLeadTime = Math.min(partialAggregatedPart.manufacturerLeadTime, part.leadTime.supplierLeadTime * 7)
            }
            partialAggregatedPart.totalStock += parseInt(part.fohQuantity)

            // set specifications that might only be available in some parts
            if (part.countryOfOrigin && !partialAggregatedPart.specifications.countryOfOrigin) {
              partialAggregatedPart.specifications.countryOfOrigin = part.countryOfOrigin
            }
            if (part.dateCode && !partialAggregatedPart.specifications.dateCode) {
              partialAggregatedPart.specifications.dateCode = part.dateCode
            }
            // part url data
            part.urlData.forEach(url => {
              switch (url.type) {
                // use the small image because in most cases
                // a web browser would display just the thumbnail
                case "Image Small":
                  partialAggregatedPart.productImageUrl = url.value
                case "Datasheet":
                  partialAggregatedPart.productDoc = url.value
                case "Part Details":
                  partialAggregatedPart.productUrl = url.value
                default: 
                  return
              }
            })
            
            // get packaging
            const packaging:Packaging = this.buildPackaging(part)
            partialAggregatedPart.packaging.add(packaging)
        })
        return partialAggregatedPart
    }

    buildPackaging(part: ArrowPart): Packaging {
        // we can derive a basic pricing tier if only the resale price is given by assuming a flat pricing tier for all quantities
        // at the parts resale price 
        // if resale price and pricingtiers dont exist than we cannot make any price breaks
        const priceBreaks = part.pricingTier ? this.buildPricing(part.pricingTier) : (part.resalePrice ? [{
            breakQuantity: 1,
            unitPrice: parseFloat(part.resalePrice),
            totalPrice: 1 * parseFloat(part.resalePrice),
          }] : [])
        const packaging:Packaging = {
            type: part.pkg,
            minimumOrderQuantity: part.minOrderQuantity,
            quantityAvailable: part.spq,
            // since this field is rquired but resale price is optional
            // and the only source of unit price,
            // we set it to -1 indicating an error of some type
            unitPrice: parseFloat(part.resalePrice) || -1,
            supplier: SUPPLIER_NAMES.MYARROW,
            priceBreaks,   
        }
        if (part.leadTime) {
            packaging.manufacturerLeadTime = `${parseLeadTimeDays(part.leadTime.supplierLeadTime.toString())}`
        }
        return packaging
    }

    buildPricing(tiers: ArrowPricingTier[]): PriceBreak[] {
        return tiers.map(({minQuantity, resalePrice}) => {
            const breakQuantity = parseInt(minQuantity)
            const unitPrice = parseFloat(resalePrice) 
            const priceBreak:PriceBreak = {
              breakQuantity,
              unitPrice,
              totalPrice: breakQuantity * unitPrice,
            }
            return priceBreak
        })
    }
}