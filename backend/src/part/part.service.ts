import { Injectable, NotFoundException } from '@nestjs/common';
import { AggregatedPart, PartResponse } from '@types';
import TTIAPI from 'apiMock/tti';
import MyArrowAPI from 'apiMock/arrow';

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

  private aggregateParts(parts:PartResponse[]): AggregatedPart {
    return
  }

  async getPart(partNumber : string): Promise<AggregatedPart> {
    // separate the fetching of the part from each API
    // in a different block because a rejected promise from one will 
    // get ttiPart
    let retrievedParts:PartResponse[] = []
    try {
      const ttiPart = await this.ttiApi.getPart(partNumber)
      retrievedParts.push({
        response: ttiPart,
        supplier: "TTI",
      })
    } catch (ttiErr) {
      
    }
    // get arrow part
    try {
      const arrowPart = await this.myArrowApi.getPart(partNumber)
      retrievedParts.push({
        response: arrowPart,
        supplier: "Arrow",
      })
    } catch (arrErr) {

    }
    if (retrievedParts.length == 0) {
      throw new NotFoundException(
        'Part not found', 
        {
          cause: new Error(), 
          description: `Part ${partNumber} could not be found in any known supplier.`
        }
      )
    }
    const aggregatedPart:AggregatedPart = this.aggregateParts(retrievedParts)
    return aggregatedPart
  }
}
