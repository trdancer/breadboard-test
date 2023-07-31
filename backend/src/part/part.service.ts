import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { 
  AggregatedPart, 
  PartResponses, 
  PartSpecifications
} from '@types';
import TTIAPI from '../../apiMock/tti';
import MyArrowAPI from '../../apiMock/arrow';
import { SUPPLIER_NAMES } from '../helpers/constants';
import TTIAggregator from './ttiAggregator';
import ArrowAggregator from './arrowAggregator';

@Injectable()
export class PartService {
  // the TTI and Arrow apis could be recreated with NestJS 
  // modules/providers, but because in the real world,
  // These would be external HTTP API calls, so we just instantiate 
  // an instance of each API mock here 
  // An provider or service could be made for each provider
  // but that would essentially duplicate the job of this service
  private ttiApi:TTIAPI
  private myArrowApi:MyArrowAPI
  constructor() {
    this.ttiApi = new TTIAPI()
    this.myArrowApi = new MyArrowAPI()
  }

  
  private aggregateParts(partsResponse:PartResponses, partNumber:string): AggregatedPart {
    // setup
    const arrowResponse = partsResponse["Arrow"]
    const ttiResponse = partsResponse["TTI"]
    const _TTIAggregator = new TTIAggregator(ttiResponse)
    const _ArrowAggregator = new ArrowAggregator(arrowResponse)
    const aggregators = [
      _TTIAggregator,
      _ArrowAggregator,
    ]
    const partialAggregatedParts = aggregators.map((ag) => {
      return ag.aggregatePartResponse(partNumber)
    })
    const aggregatedData = partialAggregatedParts.reduce((prevPart, cur) => {
      const commonFields = {
        totalStock: prevPart.totalStock + cur.totalStock,
        manufacturerLeadTime: Math.min(cur.manufacturerLeadTime, prevPart.manufacturerLeadTime),
        // Set the manufacturer if its not already set
        // Since the manufacturer for a given part is the same
        // across suppliers
        // We can just use either TTI/MyArrow data for this
        // ASSUMPTION: A given part is identified by a unique part number 
        // for a given manufacturer, and if a DIFFERENT manfacturer made the 
        // same physical part, it would have a different part number
        // So manufacturers all use different part numbers for similar parts
        manufacturerName: prevPart.manufacturerName || cur.manufacturerName,
        packaging: [...prevPart.packaging, ...cur.packaging],
        specifications: {
          ...prevPart.specifications,
          ...cur.specifications,
        },
        sourceParts: [...prevPart.sourceParts, cur.sourcePart],
      }
      if (cur.sourcePart == SUPPLIER_NAMES.TTI) {
        // set the fields received from TTI
        return {
          ...prevPart,
          ...commonFields,
          // Set the datasheet url using tti
          // After comparing the ones supplied from TTI/Arrow
          // TTI returns a more detailed "standard" datasheet
          productDoc: cur.productDoc,
          // Set the product buy url using tti
          // Because Arrow requires you to sign in to purchase,
          // whereas TTI does not
          // (Note MyArrow does allow you to purchase without using the "my.arrow" sign in
          // but that url is not provided here)
          productUrl: cur.productUrl,
          // Use the provided TTI image for the aggregate part image
          productImageUrl: cur.productImageUrl,
          // only set these if not previously set
          description: prevPart.description || cur.description,
          // only set these if not previously set
          name: prevPart.name || cur.name,
        }
      }
      else {
        // set the fields received from Arrow
        return {
          ...prevPart,
          ...commonFields,
          // Set the name from the Arrow data since TTI does not have an explicit name field
          name: cur.name,
          // Set the description from the Arrow data since it is more descriptive 
          // than TTI data
          description: cur.description,
          // only set these fields if not set previously
          productDoc: prevPart.productDoc || cur.productDoc,
          productUrl: prevPart.productUrl || cur.productUrl,
          productImageUrl: prevPart.productImageUrl ? prevPart.productImageUrl : cur.productImageUrl,
        }
      }
    }, {
      name: "",
      description: "",
      totalStock: 0,
      manufacturerLeadTime: 999999999999999,
      manufacturerName: "",
      productDoc: "",
      productUrl: "",
      productImageUrl: "",
      packaging: [],
      sourceParts: [],
      specifications: {} as PartSpecifications
    })
    // For the "specifications" field, I have picked the data fields from the 
    // data files and identified which ones represent specifications present in 
    // either but page's "technical specification table"
    // I interpreted the type constraint "JSON" to simply mean any generic object
    // meant to be ambiguous so the coder would have to figure out which data fields
    // to include, INSTEAD of it being a type class that implements JSON
    // Which is rather meaningless as a return type since the JSON type does not contain any data
    // but instead just defines functions, which are not serizable itself into JSON
    
    // I picked the shape of the specifications to be something usable by a web app to put into a table
    // and used the guide "a collection" to make it an array, rather than an object with key/value pairs
    // specifications [
    //  {
    //   key: "<specification-name>",
    //   value: "<specification-value>"
    //  }
    // ]
    // hacky way to cast the array to the generic JSON type
    const specifications = []
    Object.entries(aggregatedData.specifications).forEach(([k, v]) => {
      const obj = {
        key: k,
        value: v,
      }
      // this is the only duplicate of a different name
      // because the generic rohsstatus key encapsulates the same data
      // as the combined eurohs and chinarohs keys
      // so we only add this key if the others are not set
      if (k == "rohsStatus" && aggregatedData.specifications.euRohs && aggregatedData.specifications.chinaRohs) {
        return
      }
      specifications.push(obj)
    })
    // Set "static" fields i.e. fields that contain a single value rather than a collection\
    // Therefore we static determine what its value is based on returned data
    
    if (
      aggregatedData.description === "" || 
      aggregatedData.manufacturerName === "" ||
      aggregatedData.productDoc === "" ||
      aggregatedData.productUrl === "" ||
      aggregatedData.productImageUrl === ""
    ) {
      throw new InternalServerErrorException('Could not find enough data on this part')
    }

    const aggregatedPart:AggregatedPart = {
      name: aggregatedData.name,
      description: aggregatedData.description,
      totalStock: aggregatedData.totalStock,
      manufacturerLeadTime: aggregatedData.manufacturerLeadTime,
      manufacturerName: aggregatedData.manufacturerName,
      packaging: [...aggregatedData.packaging],
      productDoc: aggregatedData.productDoc,
      productUrl: aggregatedData.productUrl,
      productImageUrl: aggregatedData.productImageUrl,
      specifications: specifications as any as JSON,
      sourceParts: aggregatedData.sourceParts,
    }
    return aggregatedPart
  }

  async getPart(partNumber : string): Promise<AggregatedPart> {
    // separate the fetching of the part from each API
    // in a different block because a rejected promise from one will 
    // get ttiPart
    let retrievedParts:PartResponses = {} 
    try {
      const ttiPartResponse = await this.ttiApi.getPart(partNumber)
      retrievedParts["TTI"] = ttiPartResponse
    } catch (ttiErr) {
    console.log(ttiErr)   
    }
    // get arrow part
    try {
      const arrowPartResponse = await this.myArrowApi.getPart(partNumber)
      retrievedParts["Arrow"] = arrowPartResponse
    } catch (arrErr) {
      console.log(arrErr)
    }
    if (Object.keys(retrievedParts).length == 0) {
      throw new NotFoundException(
        'Part not found', 
        {
          cause: new Error(), 
          description: `Part ${partNumber} could not be found in any known supplier.`
        }
      )
    }
    const aggregatedPart:AggregatedPart = this.aggregateParts(retrievedParts, partNumber)
    console.log(aggregatedPart)
    return Promise.resolve<AggregatedPart>(aggregatedPart)
  }
}
