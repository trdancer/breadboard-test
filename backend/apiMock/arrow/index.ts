import { HttpStatus } from "@nestjs/common"
import myArrowJson from "./myarrow.json"
import { ArrowPart, ArrowPartResponse } from "src/types"
export default class MyArrowAPI {
    partData = {
        "0510210200": myArrowJson.pricingResponse
    }
    getPart(partNumber : string) : Promise<ArrowPartResponse> {
        return new Promise<ArrowPartResponse>((resolve, reject) => {
            const part:[ArrowPart]|undefined = this.partData[partNumber] || undefined
            if (part !== undefined) {
                return resolve({
                    status: myArrowJson.status,
                    requestedQuantity: myArrowJson.requestedQuantity,
                    results: myArrowJson.results,
                    pages: myArrowJson.pages,
                    totalRecords: myArrowJson.totalRecords,
                    currentPage: myArrowJson.currentPage,
                    pricingResponse: part,
                })
            } else {
                return reject({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `Part ${partNumber} could not be found in MyArrow's database.`
                })
            }
        })
    }
}