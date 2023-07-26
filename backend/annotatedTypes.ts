export class AggregatedPart {
  name: string; // part name
  // myarrow: pricingResponse[i].arwPartNum.name OR pricingResponse.suppPartNum.name
  // tti: does not exist in tti
  description: string; // part description
  // myarrow: pricingResponse[i].description
  // tti: parts[i].description
  totalStock: number; // aggregate of total quantity free on hand (foh)/ available
  // sum of
  // myarrow: pricingResponse[i].fohQuantity
  // tti: parts[i].availableToSell
  manufacturerLeadTime: number; // shortest lead time in days
  // min of:
  // myArrow: pricingResponse[i].leadTime.supplierLeadTime (int)
  // tti: parts[i].leadTime (string e.g "10 weeks")
  manufacturerName: string; // manufacturer for part
  // myArrow: pricingResponse[i].manufacturer
  // tti: parts[i].manufacturer
  // Note manufacturer should always be the same for a given part number so it 
  // doesn't reallllyyyy matter where we take this from
  packaging: Packaging[]; // collection of various packages available
  // see Packaging
  productDoc: string; // url to datasheet
  // myArrow: pricingResponse[i].urlData[j].type == "Datasheet"
  // tti: parts[i].dataheetURL
  productUrl: string; // url to actual product on website
  // myArrow: pricingResponse[i].urlData[j].type == "Part Details"
  // tti: parts[i].buyUrl
  productImageUrl: string; // url to product image
  // myArrow: pricingResponse[i].urlData[j].type == "Image Small"
  // tti: parts[i].imageURL
  specifications: JSON; // part name collection of specifications if any, [] if none
  // myArrow: parts[i].euRohs, 
  // chinaRohs, 
  // lifeCycleStatus, 
  // exportControlClassificationNumberUS, 
  // exportControlClassificationNumberWAS,
  // htsCode
  // taxonomy
  // partClassification
  // SVHC.shcOverThreshold

  // tti: myArrow: parts[i].partNCNR
  // hts
  // category
  // exportInformation
  //    eccn
  // environmentalInformation
  //    rohsStatus OR just parts[i].rohsStatus
  //    leadInTerminals
  //    reachSVHC
  sourceParts: SupplierName[]; // collection of suppliers from where data was aggregated
  // derived from what data sources the part data is retrieved from
  // only include suppliers that return > 0 parts from the API
}


export type SupplierName = "Arrow" | "TTI" ;
// derived from what data source retrieved from



export class Packaging {
  type: string; // package type (bulk, reel, cut-tape, unspecified, etc)
  // myArrow: pricingResponse[i].pkg
  // tti: parts[i].packaging
  minimumOrderQuantity: number; // minimum quantity required to purchase from this package
  // myArrow: pricingResponse[i].minOrderQuantity
  // tti: parts[i].salesMinimum
  quantityAvailable: number; // available stock for this package
  // myArrow: pricingResponse[i].spq OR pricingResponse[i].fohQuantity
  // tti: parts[i].availableToSell
  unitPrice: number; // unit price for this package
  // myArrow: pricingResponse[i].resalePrice
  // tti: parts[i].pricing.vipPrice
  supplier: SupplierName; // name of supplier
  // derived from what API retrieved from
  priceBreaks: PriceBreak[]; // collection of pricing tiers for this package
  // see PriceBreak
  manufacturerLeadTime?: string; // lead time in days
  // myArrow: pricingResponse[i].leadTime.supplierLeadTime
  // tti: parts[i].leadTime (string e.g "10 weeks")
}


export class PriceBreak {
  breakQuantity: number; // minimum quantity in order to reach pricing tier
  // myArrow: pricingResponse[i].pricingTier[j].minQuantity
  // tti: parts[i].pricing.quantityPriceBreaks[j].quantity
  unitPrice: number; // price per unit at this tier
  // myArrow: pricingResponse[i].pricingTier[j].resalePrice
  // tti: parts[i].pricing.quantityPriceBreaks[j].price
  totalPrice: number; // breakQuantity * unitPrice
}
