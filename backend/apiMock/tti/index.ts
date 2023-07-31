import { HttpStatus } from "@nestjs/common"
import ttiJson from "../data/tti.json"
import { TTIPartResponse } from "src/types"
export default class TTIAPI {
    partData:{
        [k:string]: TTIPartResponse,
    }
    constructor() {
        this.partData = {
            "0510210200": ttiJson as TTIPartResponse
        }
    }
    getPart(partNumber : string) : Promise<TTIPartResponse> {
        return new Promise<TTIPartResponse>((resolve, reject) => {
            const partResponse:TTIPartResponse|undefined = this.partData[partNumber] || undefined
            if (partResponse !== undefined) {
                return resolve(partResponse)
            } else {
                return reject({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `Part ${partNumber} could not be found in TTI's database.`
                })
            }
        })
    }
}