import { HttpStatus } from "@nestjs/common"
import myArrowJson from "../data/myarrow.json"
import { ArrowPartResponse } from "src/types"
export default class MyArrowAPI {
    partData:{
        [k:string]: ArrowPartResponse
    } 
    constructor(){
        this.partData = {
            "0510210200": myArrowJson as ArrowPartResponse
        }
    }
    getPart(partNumber : string) : Promise<ArrowPartResponse> {
        return new Promise<ArrowPartResponse>((resolve, reject) => {
            const partResponse:ArrowPartResponse|undefined = this.partData[partNumber] || undefined
            if (partResponse !== undefined) {
                return resolve(partResponse)
            } else {
                return reject({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `Part ${partNumber} could not be found in MyArrow's database.`
                })
            }
        })
    }
}