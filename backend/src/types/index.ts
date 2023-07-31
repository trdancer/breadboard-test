import { SUPPLIER_NAMES } from "src/helpers/constants";

export class AggregatedPart {
  name: string; // part name
  description: string; // part description
  totalStock: number; // aggregate of total quantity free on hand (foh)/ available
  manufacturerLeadTime: number; // shortest lead time in days
  manufacturerName: string; // manufacturer for part
  packaging: Packaging[]; // collection of various packages available
  productDoc: string; // url to datasheet
  productUrl: string; // url to actual product on website
  productImageUrl: string; // url to product image
  specifications: JSON; // part name collection of specifications if any, [] if none
  sourceParts: SupplierName[]; // collection of suppliers from where data was aggregated
}


export type SupplierName = "Arrow" | "TTI" ;




export class Packaging {
  type: string; // package type (bulk, reel, cut-tape, unspecified, etc)
  minimumOrderQuantity: number; // minimum quantity required to purchase from this package
  quantityAvailable: number; // available stock for this package
  unitPrice: number; // unit price for this package 
  supplier: SupplierName; // name of supplier
  priceBreaks: PriceBreak[]; // collection of pricing tiers for this package
  manufacturerLeadTime?: string; // lead time in days
}


export class PriceBreak {
  breakQuantity: number; // minimum quantity in order to reach pricing tier
  unitPrice: number; // price per unit at this tier
  totalPrice: number; // breakQuantity * unitPrice
}

export class TTIPartResponse {
  parts: TTIPart[];
  currencyCode: string;
  partSearchId: string;
  recordCount: number;
}

// fields labelled "specification" are related to
// the part itself, found on that respective manufacturers
// product page
export class TTIPart {
    ttiPartNumber: string;
    manufacturerPartNumber: string;
    manufacturerCode: string;
    manufacturer: string;
    salesMinimum: number;
    salesMultiple: number;
    partSearchId?: string;
    availableToSell: number;
    buyUrl: string;
    datasheetURL: string;
    description: string;
    pricing: TTIPricing;
    packaging: string;
    leadTime: string;
    partNCNR: string;
    hts: string; //specification, only used if no arrow data, redundant
    category: string; // specification, what type of product this is
    imageURL: string;
    exportInformation: {
        eccn: string, //specification, export info
        hts: string, //specification, export info (redundant with hts field)
        taric?: string, //specification, export info
    };
    environmentalInformation: {
        rohsStatus: string; //specification, environmental info (only used if no arrow data, redundant)
        leadInTerminals: string; //specification, environmental info (Pb the element)
        reachSVHC: string; //specification, environmental info (only used if no arrow data, redundant)
        reachSubstanceName: string; //specification, environmental info 
    };
    roHsStatus: string; //specification, environmental info, redundant with other fields and arrow data
}
export class TTIPricing {
  vipPrice: string;
  quantityPriceBreaks: TTIPricingBreak[];
}

export class TTIPricingBreak {
  quantity: number;
  price: string;
}

export class ArrowPartResponse {
  status: string;
  requestedQuantity: string;
  results: number;
  pages: number;
  totalRecords: number;
  currentPage: number;
  pricingResponse: ArrowPart[]
}

// fields labelled "specification" are related to
// the part itself, found on that respective manufacturers
// product page
export class ArrowPart {
  itemId: number;
  warehouseId: number;
  warehouseCode: string;
  arrowReel: boolean;
  responseState: string;
  currency: string;
  documentId: string;
  resalePrice?: string;
  fohQuantity: string;
  description: string;
  partNumber: string;
  tariffValue: string;
  tariffApplicable: string;
  minOrderQuantity: number;
  multOrderQuantity: number;
  manufacturer: string;
  mfrCode: string;
  supplier: string;
  htsCode: string; // specification
  pkg: string; // listed in specification but information already covered by packaging in AggregatedPart
  spq: number;
  pricingTier?: ArrowPricingTier[];
  urlData: ArrowUrlData[];
  leadTime?: {
      supplierLeadTime: number,
      supplierLeadTimeDate: string,
      arrowLeadTime: number,
  };
  arwPartNum: ArrowPartNum;
  suppPartNum: ArrowPartNum;
  bufferQuantity: number
  euRohs: string; //specification
  chinaRohs: string; //specification
  quotable: boolean;
  purchasable: boolean;
  arrowInitiated: boolean;
  nonCancelableNonReturnable: boolean;
  taxonomy: string;
  partClassification: string; //specification
  partBuyCurrency: string;
  exportControlClassificationNumberUS: string; //specification
  exportControlClassificationNumberWAS: string; //specification
  lifeCycleStatus: string;
  countryOfOrigin?: string; // specification
  dateCode?: string; // specification (date manufactured)
  franchised: string;
  SVHC: {
      svhcOverThreshold: string, //specification (different than rohs)
  };
}
export class ArrowPricingTier {
  minQuantity: string;
  maxQuantity: string;
  resalePrice: string;
}
export class ArrowUrlData {
  type: string;
  value: string;
}
export class ArrowPartNum {
  isExactMatch: boolean;
  name: string;
}
// Cannot use value from constants because typescript doesnt 
// like computed properties as keys
// also cant 
export class PartResponses {
  "TTI"?: TTIPartResponse;
  "Arrow"?: ArrowPartResponse;
}
export type PartResponse = TTIPartResponse | ArrowPartResponse
export type Part = TTIPart | ArrowPart
export type Tier = TTIPricingBreak | ArrowPricingTier
 // For the "specifications" field, I have picked the data fields from the 
// data files and identified which ones represent specifications present in 
// either but page's "technical specification table"
// I interpreted the type constraint "JSON" to simply mean any generic object
// meant to be ambiguous so the coder would have to figure out which data fields
// to include, INSTEAD of it being a type class that implements JSON
// Which is rather meaningless as a return type since the JSON type does not contain any data
// but instead just defines functions, which are not serizable itself into JSON
export class PartSpecifications {
  htsCode?: string;
  euRohs?: string;
  rohsStatus?: string;
  chinaRohs?: string;
  partClassification?: string;
  exportControlClassificationNumberUS?: string;
  exportControlClassificationNumberWAS?: string;
  countryOfOrigin?: string;
  dateCode?: string;
  SVHC?: string;
  category?: string;
  eccn?: string;
  taric?: string;
  leadInTerminals?: string;
  reachSubstanceName?: string
}
export class PartialAggregatedPart {
  name?: string;
  description?: string;
  totalStock?: number;
  manufacturerLeadTime?: number;
  manufacturerName?: string;
  packaging?: Set<Packaging>;
  productDoc?: string;
  productUrl?: string;
  productImageUrl?: string;
  specifications?: PartSpecifications;
  sourcePart: SupplierName;
}

export interface PartAggregator<PartResponse> {
  partsResponse: PartResponse
  aggregatePartResponse(partNumber:string):PartialAggregatedPart;
  buildPackaging(part:Part):Packaging
  buildPricing(tiers:Tier[]):PriceBreak[]
}