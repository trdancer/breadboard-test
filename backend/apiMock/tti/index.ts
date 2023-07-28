import { HttpStatus } from "@nestjs/common"
import ttiJson from "./tti.json"
import { TTIPart, TTIPartResponse } from "src/types"
export default class TTIAPI {
    partData = {
        "0510210200": ttiJson.parts
    }
    getPart(partNumber : string) : Promise<TTIPartResponse> {
        return new Promise<TTIPartResponse>((resolve, reject) => {
            const part:[TTIPart]|undefined = this.partData[partNumber] || undefined
            if (part !== undefined) {
                return resolve({
                    currencyCode: ttiJson.currencyCode,
                    partSearchId: ttiJson.partSearchId,
                    recordCount: ttiJson.recordCount,
                    parts: part,
                })
            } else {
                return reject({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `Part ${partNumber} could not be found in TTI's database.`
                })
            }
        })
    }
}