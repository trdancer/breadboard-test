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

export class TTIPart {
    ttiPartNumber: string;
    manufacturerPartNumber: string;
    manufacturerCode: string;
    manufacturer: string;
    salesMinimum: number;
    salesMultiple: number;
    partSearchId: string;
    availableToSell: number;
    buyUrl: string;
    datasheetURL: string;
    description: string;
    pricing: TTIPricing;
    packaging: string;
    leadTime: string;
    partNCNR: string;
    hts: string;
    category: string;
    imageURL: string;
    exportInformation: {
        eccn: string,
        hts: string,
    };
    environmentalInformation: {
        rohsStatus: string;
        leadInTerminals: string;
        reachSVHC: string;
        reachSubstanceName: string;
    };
    roHsStatus: string;
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

export class ArrowPart {
  itemId: number;
  warehouseId: number;
  warehouseCode: string;
  arrowReel: false;
  responseState: string;
  currency: string;
  documentId: string;
  resalePrice: string;
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
  htsCode: string;
  pkg: string;
  spq: number;
  pricingTier: ArrowPricingTier[];
  urlData: ArrowUrlData[];
  leadTime: {
      supplierLeadTime: number,
      supplierLeadTimeDate: string,
      arrowLeadTime: number,
  };
  arwPartNum: ArrowPartNum;
  suppPartNum: ArrowPartNum;
  bufferQuantity: number
  euRohs: string;
  chinaRohs: string;
  quotable: boolean;
  purchasable: boolean;
  arrowInitiated: boolean;
  nonCancelableNonReturnable: boolean;
  taxonomy: string;
  partClassification: string;
  partBuyCurrency: string;
  exportControlClassificationNumberUS: string;
  exportControlClassificationNumberWAS: string;
  lifeCycleStatus: string;
  franchised: string;
  SVHC: {
      svhcOverThreshold: string,
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
export class PartResponse {
  response: TTIPartResponse | ArrowPartResponse;
  supplier: SupplierName;
}