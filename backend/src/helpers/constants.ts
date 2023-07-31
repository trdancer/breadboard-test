import { SupplierName } from "src/types"

export const SUPPLIER_APIS = {
    TTI: "https://backend-takehome.s3.us-east-1.amazonaws.com/tti.json",
    MYARROW: "https://backend-takehome.s3.us-east-1.amazonaws.com/myarrow.json"
}
interface SupplierNameUtil {
    TTI: SupplierName,
    MYARROW: SupplierName,
}
export const SUPPLIER_NAMES :  SupplierNameUtil = {
    TTI: "TTI",
    MYARROW: "Arrow"
}
