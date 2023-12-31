import {
  AggregatedPart,
  ArrowPartResponse,
  Packaging,
  PartResponses,
  PartialAggregatedPart,
  TTIPartResponse,
} from '@types';
export const packaging_1 = new Set<Packaging>([
  {
    type: 'Bulk',
    minimumOrderQuantity: 42,
    quantityAvailable: 226274,
    unitPrice: 0.12,
    supplier: 'TTI',
    priceBreaks: [
      {
        breakQuantity: 100,
        unitPrice: 0.065,
        totalPrice: 100 * 0.065,
      },
      {
        breakQuantity: 250,
        unitPrice: 0.064,
        totalPrice: 250 * 0.064,
      },
    ],
    manufacturerLeadTime: `${10 * 7}`,
  },
  {
    type: 'EACH',
    minimumOrderQuantity: 1,
    quantityAvailable: 200000,
    unitPrice: 0.0545,
    supplier: 'Arrow',
    manufacturerLeadTime: `${8 * 7}`,
    priceBreaks: [
      {
        breakQuantity: 1,
        unitPrice: 0.0773,
        totalPrice: 0.0773,
      },
      {
        breakQuantity: 857,
        unitPrice: 0.0725,
        totalPrice: 857 * 0.0725,
      },
      {
        breakQuantity: 4468,
        unitPrice: 0.0651,
        totalPrice: 4468 * 0.0651,
      },
      {
        breakQuantity: 15221,
        unitPrice: 0.0545,
        totalPrice: 15221 * 0.0545,
      },
    ],
  },
  {
    type: 'EACH',
    minimumOrderQuantity: 1,
    quantityAvailable: 200000,
    unitPrice: 0.0545,
    supplier: 'Arrow',
    manufacturerLeadTime: `${8 * 7}`,
    priceBreaks: [
      {
        breakQuantity: 1,
        unitPrice: 0.0773,
        totalPrice: 1 * 0.0773,
      },
      {
        breakQuantity: 857,
        unitPrice: 0.0725,
        totalPrice: 857 * 0.0725,
      },
      {
        breakQuantity: 4468,
        unitPrice: 0.0651,
        totalPrice: 4468 * 0.0651,
      },
      {
        breakQuantity: 15221,
        unitPrice: 0.0545,
        totalPrice: 15221 * 0.0545,
      },
    ],
  },
  {
    type: 'EACH',
    minimumOrderQuantity: 1,
    quantityAvailable: 1,
    unitPrice: 0.114,
    supplier: 'Arrow',
    priceBreaks: [
      {
        breakQuantity: 1,
        unitPrice: 0.114,
        totalPrice: 1 * 0.114,
      },
      {
        breakQuantity: 580,
        unitPrice: 0.107,
        totalPrice: 580 * 0.107,
      },
      {
        breakQuantity: 3027,
        unitPrice: 0.0961,
        totalPrice: 3027 * 0.0961,
      },
      {
        breakQuantity: 5000,
        unitPrice: 0.0828,
        totalPrice: 5000 * 0.0828,
      },
      {
        breakQuantity: 11000,
        unitPrice: 0.0795,
        totalPrice: 11000 * 0.0795,
      },
      {
        breakQuantity: 12458,
        unitPrice: 0.0666,
        totalPrice: 12458 * 0.0666,
      },
      {
        breakQuantity: 22000,
        unitPrice: 0.0638,
        totalPrice: 22000 * 0.0638,
      },
      {
        breakQuantity: 200000,
        unitPrice: 0.061,
        totalPrice: 200000 * 0.061,
      },
    ],
    manufacturerLeadTime: `${10 * 7}`,
  },
  {
    type: 'EACH',
    minimumOrderQuantity: 1,
    quantityAvailable: 200000,
    unitPrice: -1,
    supplier: 'Arrow',
    priceBreaks: [],
  },
  {
    type: 'EACH',
    minimumOrderQuantity: 1,
    quantityAvailable: 200000,
    unitPrice: 0.0545,
    supplier: 'Arrow',
    priceBreaks: [
      {
        breakQuantity: 1,
        unitPrice: 0.0773,
        totalPrice: 1 * 0.0773,
      },
      {
        breakQuantity: 857,
        unitPrice: 0.0725,
        totalPrice: 857 * 0.0725,
      },
      {
        breakQuantity: 4468,
        unitPrice: 0.0651,
        totalPrice: 4468 * 0.0651,
      },
      {
        breakQuantity: 15221,
        unitPrice: 0.0545,
        totalPrice: 15221 * 0.0545,
      },
    ],
    manufacturerLeadTime: `${8 * 7}`,
  },
]);
export const controller_expected_1: AggregatedPart = {
  name: '0510210200',
  description:
    'Conn Housing RCP 2 POS 1.25mm Crimp ST Cable Mount Natural PicoBlade™ Bag',
  manufacturerLeadTime: 8 * 7,
  manufacturerName: 'Molex',
  totalStock: 385887 + 226274,
  productDoc: 'https://www.molex.com/pdm_docs/sd/510210200_sd.pdf',
  productUrl:
    'https://www.tti.com/content/ttiinc/en/apps/part-detail.html?partsNumber=0510210200&mfgShortname=MOL&utm=CAV016&channel=link&source=VISUAL%20COMMUNICATIONS%20CO&campaigns=tti-api',
  productImageUrl:
    'https://www.mouser.com/images/molex/images/51021_SPL.jpg',
  packaging: [...packaging_1],
  specifications: [
    {
      key: 'category',
      value: 'Headers & Wire Housings',
    },
    {
      key: 'eccn',
      value: 'EAR99',
    },
    {
      key: 'leadInTerminals',
      value: 'No',
    },
    {
      key: 'reachSubstanceName',
      value: 'N/A',
    },
    {
      key: 'htsCode',
      value: '8538.90.81.80',
    },
    {
      key: 'SVHC',
      value: 'No',
    },
    {
      key: 'euRohs',
      value: 'Compliant',
    },
    {
      key: 'chinaRohs',
      value: 'Compliant',
    },
    {
      key: 'partClassification',
      value: 'C',
    },
    {
      key: 'exportControlClassificationNumberUS',
      value: 'EAR99',
    },
    {
      key: 'exportControlClassificationNumberWAS',
      value: 'NLR',
    },
    {
      key: 'countryOfOrigin',
      value: 'Republic of Korea',
    },
    {
      key: 'dateCode',
      value: '2232+',
    },
  ] as any as JSON,
  sourceParts: ['TTI', 'Arrow'],
}
export const partsResponse_service_1: PartResponses = {
  ['TTI']: {
    parts: [
      {
        ttiPartNumber: '12345',
        manufacturerPartNumber: '12345',
        manufacturerCode: 'MOL',
        manufacturer: 'MOLARS',
        salesMinimum: 2,
        salesMultiple: 5,
        partSearchId: 'adfasdfas',
        availableToSell: 500,
        buyUrl: 'partsResponse_service_1.buyurl',
        datasheetURL: 'partsResponse_service_1.datasheeturl',
        description: 'A tooth',
        pricing: {
          vipPrice: '0.50',
          quantityPriceBreaks: [
            {
              quantity: 1,
              price: '0.3',
            },
            {
              quantity: 50,
              price: '0.2',
            },
          ],
        },
        packaging: 'Mouth',
        leadTime: '3 weeks',
        partNCNR: 'No',
        hts: '127.4.64.122',
        category: 'Chewing devices',
        imageURL: 'partsResponse_service_1.imageurl',
        exportInformation: {
          eccn: 'Yes',
          hts: 'Yes',
          taric: 'Yes',
        },
        environmentalInformation: {
          rohsStatus: 'Yes',
          leadInTerminals: 'Yes',
          reachSVHC: 'Yes',
          reachSubstanceName: 'Carbon',
        },
        roHsStatus: 'Yes',
      },
      {
        ttiPartNumber: '12345',
        manufacturerPartNumber: '12345',
        manufacturerCode: 'MOL',
        manufacturer: 'MOLARS',
        salesMinimum: 3,
        salesMultiple: 5,
        partSearchId: 'adfasdfas',
        availableToSell: 1000,
        buyUrl: 'partsResponse_service_1.buyurl',
        datasheetURL: 'partsResponse_service_1.datasheeturl',
        description: 'A tooth',
        pricing: {
          vipPrice: '0.70',
          quantityPriceBreaks: [
            {
              quantity: 1,
              price: '0.6',
            },
            {
              quantity: 75,
              price: '0.5',
            },
          ],
        },
        packaging: 'Mouth',
        leadTime: '2 weeks',
        partNCNR: 'No',
        hts: '127.4.64.122',
        category: 'Chewing devices',
        imageURL: 'partsResponse_service_1.imageurl',
        exportInformation: {
          eccn: 'Yes',
          hts: 'Yes',
          taric: 'Yes',
        },
        environmentalInformation: {
          rohsStatus: 'Yes',
          leadInTerminals: 'Yes',
          reachSVHC: 'Yes',
          reachSubstanceName: 'Carbon',
        },
        roHsStatus: 'Yes',
      },
    ],
    currencyCode: 'USD',
    partSearchId: 'abdafsaf',
    recordCount: 2,
  },
  ['Arrow']: {
    status: 'Success',
    requestedQuantity: '3',
    results: 1,
    pages: 1,
    totalRecords: 1,
    currentPage: 1,
    pricingResponse: [
      {
        itemId: 7777,
        warehouseId: 666666,
        warehouseCode: 'ABC',
        arrowReel: true,
        responseState: 'SUCCESS',
        currency: 'USD',
        documentId: '55555',
        resalePrice: '0.9',
        fohQuantity: '4000',
        description: 'Back tooth',
        partNumber: '12345',
        tariffValue: '0',
        tariffApplicable: 'No',
        minOrderQuantity: 1,
        multOrderQuantity: 3,
        manufacturer: 'MOLARS',
        mfrCode: 'MOL',
        supplier: 'Molars',
        htsCode: '',
        pkg: 'BOX',
        spq: 20,
        pricingTier: [
          {
            minQuantity: '5000',
            maxQuantity: '10000',
            resalePrice: '0.1',
          },
        ],
        urlData: [
          {
            type: 'Image Small',
            value: 'partsResponse_service_1.smallimageurl',
          },
          {
            type: 'Image Large',
            value: 'partsResponse_service_1.largeimageurl',
          },
          {
            type: 'Datasheet',
            value: 'partsResponse_service_1.datasheeturl',
          },
          {
            type: 'Part Details',
            value: 'partsResponse_service_1.detailsurl',
          },
        ],
        leadTime: {
          supplierLeadTime: 1,
          supplierLeadTimeDate: 'Today',
          arrowLeadTime: 1,
        },
        arwPartNum: {
          isExactMatch: true,
          name: '12345',
        },
        suppPartNum: {
          isExactMatch: true,
          name: '12345',
        },
        bufferQuantity: 67,
        euRohs: 'Yes',
        chinaRohs: 'Yes',
        quotable: true,
        purchasable: true,
        arrowInitiated: false,
        nonCancelableNonReturnable: false,
        taxonomy: 'Tooth and mouth apparati',
        partClassification: 'W',
        partBuyCurrency: 'USD',
        exportControlClassificationNumberUS: 'R',
        exportControlClassificationNumberWAS: 'W',
        lifeCycleStatus: 'ACTIVE',
        countryOfOrigin: 'CAN',
        dateCode: '234+',
        franchised: 'Yes',
        SVHC: {
          svhcOverThreshold: 'Yes',
        },
      },
    ],
  },
};
export const expected_service_1: AggregatedPart = {
  name: '12345',
  description: 'Back tooth',
  totalStock: 500 + 1000 + 4000,
  manufacturerLeadTime: 7,
  manufacturerName: 'MOLARS',
  packaging: [
    {
      manufacturerLeadTime: '21',
      minimumOrderQuantity: 2,
      priceBreaks: [
        {
          breakQuantity: 1,
          totalPrice: 0.3,
          unitPrice: 0.3,
        },
        {
          breakQuantity: 50,
          totalPrice: 10,
          unitPrice: 0.2,
        },
      ],
      quantityAvailable: 500,
      supplier: 'TTI',
      type: 'Mouth',
      unitPrice: 0.5,
    },
    {
      manufacturerLeadTime: '14',
      minimumOrderQuantity: 3,
      priceBreaks: [
        {
          breakQuantity: 1,
          totalPrice: 0.6,
          unitPrice: 0.6,
        },
        {
          breakQuantity: 75,
          totalPrice: 37.5,
          unitPrice: 0.5,
        },
      ],
      quantityAvailable: 1000,
      supplier: 'TTI',
      type: 'Mouth',
      unitPrice: 0.7,
    },
    {
      manufacturerLeadTime: '7',
      minimumOrderQuantity: 1,
      priceBreaks: [
        {
          breakQuantity: 5000,
          totalPrice: 500,
          unitPrice: 0.1,
        },
      ],
      quantityAvailable: 20,
      supplier: 'Arrow',
      type: 'BOX',
      unitPrice: 0.9,
    },
  ],
  productDoc: 'partsResponse_service_1.datasheeturl',
  productUrl: 'partsResponse_service_1.buyurl',
  productImageUrl: 'partsResponse_service_1.imageurl',
  specifications: [
    {
      key: 'category',
      value: 'Chewing devices',
    },
    {
      key: 'eccn',
      value: 'Yes',
    },
    {
      key: 'leadInTerminals',
      value: 'Yes',
    },
    {
      key: 'reachSubstanceName',
      value: 'Carbon',
    },
    {
      key: 'htsCode',
      value: undefined,
    },
    {
      key: 'SVHC',
      value: 'Yes',
    },
    {
      key: 'taric',
      value: 'Yes',
    },
    {
      key: 'euRohs',
      value: 'Yes',
    },
    {
      key: 'chinaRohs',
      value: 'Yes',
    },
    {
      key: 'partClassification',
      value: 'W',
    },
    {
      key: 'exportControlClassificationNumberUS',
      value: 'R',
    },
    {
      key: 'exportControlClassificationNumberWAS',
      value: 'W',
    },
    {
      key: 'countryOfOrigin',
      value: 'CAN',
    },
    {
      key: 'dateCode',
      value: '234+',
    },
  ] as any as JSON,
  sourceParts: ['TTI', 'Arrow'],
};
export const partsResponse_service_2: PartResponses = {
  ['TTI']: {
    parts: [
      {
        ttiPartNumber: '12345',
        manufacturerPartNumber: '12345',
        manufacturerCode: 'MOL',
        manufacturer: 'MOLARS',
        salesMinimum: 2,
        salesMultiple: 5,
        partSearchId: 'adfasdfas',
        availableToSell: 500,
        buyUrl: 'partsResponse_service_1.buyurl',
        datasheetURL: 'partsResponse_service_1.datasheeturl',
        description: 'A tooth',
        pricing: {
          vipPrice: '0.50',
          quantityPriceBreaks: [
            {
              quantity: 1,
              price: '0.3',
            },
            {
              quantity: 50,
              price: '0.2',
            },
          ],
        },
        packaging: 'Mouth',
        leadTime: '3 weeks',
        partNCNR: 'No',
        hts: '127.4.64.122',
        category: 'Chewing devices',
        imageURL: 'partsResponse_service_1.imageurl',
        exportInformation: {
          eccn: 'Yes',
          hts: 'Yes',
          taric: 'Yes',
        },
        environmentalInformation: {
          rohsStatus: 'Yes',
          leadInTerminals: 'Yes',
          reachSVHC: 'Yes',
          reachSubstanceName: 'Carbon',
        },
        roHsStatus: 'Yes',
      },
      {
        ttiPartNumber: '12345',
        manufacturerPartNumber: '12345',
        manufacturerCode: 'MOL',
        manufacturer: 'MOLARS',
        salesMinimum: 3,
        salesMultiple: 5,
        partSearchId: 'adfasdfas',
        availableToSell: 1000,
        buyUrl: 'partsResponse_service_1.buyurl',
        datasheetURL: 'partsResponse_service_1.datasheeturl',
        description: 'A tooth',
        pricing: {
          vipPrice: '0.70',
          quantityPriceBreaks: [
            {
              quantity: 1,
              price: '0.6',
            },
            {
              quantity: 75,
              price: '0.5',
            },
          ],
        },
        packaging: 'Mouth',
        leadTime: '2 weeks',
        partNCNR: 'No',
        hts: '127.4.64.122',
        category: 'Chewing devices',
        imageURL: 'partsResponse_service_1.imageurl',
        exportInformation: {
          eccn: 'Yes',
          hts: 'Yes',
          taric: 'Yes',
        },
        environmentalInformation: {
          rohsStatus: 'Yes',
          leadInTerminals: 'Yes',
          reachSVHC: 'Yes',
          reachSubstanceName: 'Carbon',
        },
        roHsStatus: 'Yes',
      },
    ],
    currencyCode: 'USD',
    partSearchId: 'abdafsaf',
    recordCount: 2,
  },
};
export const expected_service_2: AggregatedPart = {
  name: '12345',
  description: 'A tooth',
  totalStock: 1000 + 500,
  manufacturerLeadTime: 14,
  manufacturerName: 'MOLARS',
  packaging: [
    {
      manufacturerLeadTime: '21',
      minimumOrderQuantity: 2,
      priceBreaks: [
        {
          breakQuantity: 1,
          totalPrice: 0.3,
          unitPrice: 0.3,
        },
        {
          breakQuantity: 50,
          totalPrice: 10,
          unitPrice: 0.2,
        },
      ],
      quantityAvailable: 500,
      supplier: 'TTI',
      type: 'Mouth',
      unitPrice: 0.5,
    },
    {
      manufacturerLeadTime: '14',
      minimumOrderQuantity: 3,
      priceBreaks: [
        {
          breakQuantity: 1,
          totalPrice: 0.6,
          unitPrice: 0.6,
        },
        {
          breakQuantity: 75,
          totalPrice: 37.5,
          unitPrice: 0.5,
        },
      ],
      quantityAvailable: 1000,
      supplier: 'TTI',
      type: 'Mouth',
      unitPrice: 0.7,
    },
  ],
  productDoc: 'partsResponse_service_1.datasheeturl',
  productUrl: 'partsResponse_service_1.buyurl',
  productImageUrl: 'partsResponse_service_1.imageurl',
  specifications: [
    {
      key: 'category',
      value: 'Chewing devices',
    },
    {
      key: 'eccn',
      value: 'Yes',
    },
    {
      key: 'leadInTerminals',
      value: 'Yes',
    },
    {
      key: 'reachSubstanceName',
      value: 'Carbon',
    },
    {
      key: 'htsCode',
      value: '127.4.64.122',
    },
    {
      key: 'rohsStatus',
      value: 'Yes',
    },
    {
      key: 'SVHC',
      value: 'Yes',
    },
    {
      key: 'taric',
      value: 'Yes',
    },
  ] as any as JSON,
  sourceParts: ['TTI'],
};
export const partsResponse_service_3: PartResponses = {
  ['Arrow']: {
    status: 'Success',
    requestedQuantity: '3',
    results: 1,
    pages: 1,
    totalRecords: 1,
    currentPage: 1,
    pricingResponse: [
      {
        itemId: 7777,
        warehouseId: 666666,
        warehouseCode: 'ABC',
        arrowReel: true,
        responseState: 'SUCCESS',
        currency: 'USD',
        documentId: '55555',
        resalePrice: '0.9',
        fohQuantity: '4000',
        description: 'Back tooth',
        partNumber: '12345',
        tariffValue: '0',
        tariffApplicable: 'No',
        minOrderQuantity: 1,
        multOrderQuantity: 3,
        manufacturer: 'MOLARS',
        mfrCode: 'MOL',
        supplier: 'Molars',
        htsCode: '',
        pkg: 'BOX',
        spq: 20,
        pricingTier: [
          {
            minQuantity: '5000',
            maxQuantity: '10000',
            resalePrice: '0.1',
          },
        ],
        urlData: [
          {
            type: 'Image Small',
            value: 'partsResponse_service_1.smallimageurl',
          },
          {
            type: 'Image Large',
            value: 'partsResponse_service_1.largeimageurl',
          },
          {
            type: 'Datasheet',
            value: 'partsResponse_service_1.datasheeturl',
          },
          {
            type: 'Part Details',
            value: 'partsResponse_service_1.detailsurl',
          },
        ],
        leadTime: {
          supplierLeadTime: 1,
          supplierLeadTimeDate: 'Today',
          arrowLeadTime: 1,
        },
        arwPartNum: {
          isExactMatch: true,
          name: '12345',
        },
        suppPartNum: {
          isExactMatch: true,
          name: '12345',
        },
        bufferQuantity: 67,
        euRohs: 'Yes',
        chinaRohs: 'Yes',
        quotable: true,
        purchasable: true,
        arrowInitiated: false,
        nonCancelableNonReturnable: false,
        taxonomy: 'Tooth and mouth apparati',
        partClassification: 'W',
        partBuyCurrency: 'USD',
        exportControlClassificationNumberUS: 'R',
        exportControlClassificationNumberWAS: 'W',
        lifeCycleStatus: 'ACTIVE',
        countryOfOrigin: 'CAN',
        dateCode: '234+',
        franchised: 'Yes',
        SVHC: {
          svhcOverThreshold: 'Yes',
        },
      },
    ],
  },
};
export const expected_service_3: AggregatedPart = {
  name: '12345',
  description: 'Back tooth',
  totalStock: 4000,
  manufacturerLeadTime: 7,
  manufacturerName: 'MOLARS',
  packaging: [
    {
      manufacturerLeadTime: '7',
      minimumOrderQuantity: 1,
      priceBreaks: [
        {
          breakQuantity: 5000,
          totalPrice: 500,
          unitPrice: 0.1,
        },
      ],
      quantityAvailable: 20,
      supplier: 'Arrow',
      type: 'BOX',
      unitPrice: 0.9,
    },
  ],
  productDoc: 'partsResponse_service_1.datasheeturl',
  productUrl: 'partsResponse_service_1.detailsurl',
  productImageUrl: 'partsResponse_service_1.smallimageurl',
  specifications: [
    {
      key: 'htsCode',
      value: undefined,
    },
    {
      key: 'euRohs',
      value: 'Yes',
    },
    {
      key: 'chinaRohs',
      value: 'Yes',
    },
    {
      key: 'partClassification',
      value: 'W',
    },
    {
      key: 'exportControlClassificationNumberUS',
      value: 'R',
    },
    {
      key: 'exportControlClassificationNumberWAS',
      value: 'W',
    },
    {
      key: 'category',
      value: 'Tooth and mouth apparati',
    },
    {
      key: 'SVHC',
      value: 'Yes',
    },
    {
      key: 'countryOfOrigin',
      value: 'CAN',
    },
    {
      key: 'dateCode',
      value: '234+',
    },
  ] as any as JSON,
  sourceParts: ['Arrow'],
};

export const arrow_aggregator_1: ArrowPartResponse = {
  status: 'Success',
  requestedQuantity: '3',
  results: 1,
  pages: 1,
  totalRecords: 1,
  currentPage: 1,
  pricingResponse: [
    {
      itemId: 7777,
      warehouseId: 666666,
      warehouseCode: 'ABC',
      arrowReel: true,
      responseState: 'SUCCESS',
      currency: 'USD',
      documentId: '55555',
      resalePrice: '0.9',
      fohQuantity: '4000',
      description: 'Back tooth',
      partNumber: '12345',
      tariffValue: '0',
      tariffApplicable: 'No',
      minOrderQuantity: 1,
      multOrderQuantity: 3,
      manufacturer: 'MOLARS',
      mfrCode: 'MOL',
      supplier: 'Molars',
      htsCode: '127.4.64.122',
      pkg: 'BOX',
      spq: 20,
      pricingTier: [
        {
          minQuantity: '5000',
          maxQuantity: '10000',
          resalePrice: '0.1',
        },
      ],
      urlData: [
        {
          type: 'Image Small',
          value: 'partsResponse_service_1.smallimageurl',
        },
        {
          type: 'Image Large',
          value: 'partsResponse_service_1.largeimageurl',
        },
        {
          type: 'Datasheet',
          value: 'partsResponse_service_1.datasheeturl',
        },
        {
          type: 'Part Details',
          value: 'partsResponse_service_1.detailsurl',
        },
      ],
      leadTime: {
        supplierLeadTime: 1,
        supplierLeadTimeDate: 'Today',
        arrowLeadTime: 1,
      },
      arwPartNum: {
        isExactMatch: true,
        name: '12345',
      },
      suppPartNum: {
        isExactMatch: true,
        name: '12345',
      },
      bufferQuantity: 67,
      euRohs: 'Yes',
      chinaRohs: 'Yes',
      quotable: true,
      purchasable: true,
      arrowInitiated: false,
      nonCancelableNonReturnable: false,
      taxonomy: 'Tooth and mouth apparati',
      partClassification: 'W',
      partBuyCurrency: 'USD',
      exportControlClassificationNumberUS: 'R',
      exportControlClassificationNumberWAS: 'W',
      lifeCycleStatus: 'ACTIVE',
      countryOfOrigin: 'CAN',
      dateCode: '234+',
      franchised: 'Yes',
      SVHC: {
        svhcOverThreshold: 'Yes',
      },
    },
  ],
};

export const arrow_aggregator_expected_1: PartialAggregatedPart = {
  name: '12345',
  description: 'Back tooth',
  totalStock: 4000,
  manufacturerLeadTime: 7,
  manufacturerName: 'MOLARS',
  packaging: new Set<Packaging>([
    {
      type: 'BOX',
      minimumOrderQuantity: 1,
      quantityAvailable: 20,
      unitPrice: 0.9,
      supplier: 'Arrow',
      priceBreaks: [
        {
          breakQuantity: 5000,
          unitPrice: 0.1,
          totalPrice: 5000 * 0.1,
        },
      ],
      manufacturerLeadTime: `${7}`,
    },
  ]),
  productDoc: 'partsResponse_service_1.datasheeturl',
  productUrl: 'partsResponse_service_1.detailsurl',
  productImageUrl: 'partsResponse_service_1.smallimageurl',
  specifications: {
    euRohs: 'Yes',
    chinaRohs: 'Yes',
    category: 'Tooth and mouth apparati',
    partClassification: 'W',
    exportControlClassificationNumberUS: 'R',
    exportControlClassificationNumberWAS: 'W',
    countryOfOrigin: 'CAN',
    dateCode: '234+',
    htsCode: '127.4.64.122',
    SVHC: 'Yes',
  },
  sourcePart: 'Arrow',
};

export const tti_aggregator_1: TTIPartResponse = {
  parts: [
    {
      ttiPartNumber: '12345',
      manufacturerPartNumber: '12345',
      manufacturerCode: 'MOL',
      manufacturer: 'MOLARS',
      salesMinimum: 2,
      salesMultiple: 5,
      partSearchId: 'adfasdfas',
      availableToSell: 500,
      buyUrl: 'partsResponse_service_1.buyurl',
      datasheetURL: 'partsResponse_service_1.datasheeturl',
      description: 'A tooth',
      pricing: {
        vipPrice: '0.50',
        quantityPriceBreaks: [
          {
            quantity: 1,
            price: '0.3',
          },
          {
            quantity: 50,
            price: '0.2',
          },
        ],
      },
      packaging: 'Mouth',
      leadTime: '3 weeks',
      partNCNR: 'No',
      hts: '127.4.64.122',
      category: 'Chewing devices',
      imageURL: 'partsResponse_service_1.imageurl',
      exportInformation: {
        eccn: 'Yes',
        hts: 'Yes',
        taric: 'Yes',
      },
      environmentalInformation: {
        rohsStatus: 'Yes',
        leadInTerminals: 'Yes',
        reachSVHC: 'Yes',
        reachSubstanceName: 'Carbon',
      },
      roHsStatus: 'Yes',
    },
    {
      ttiPartNumber: '12345',
      manufacturerPartNumber: '12345',
      manufacturerCode: 'MOL',
      manufacturer: 'MOLARS',
      salesMinimum: 3,
      salesMultiple: 5,
      partSearchId: 'adfasdfas',
      availableToSell: 1000,
      buyUrl: 'partsResponse_service_1.buyurl',
      datasheetURL: 'partsResponse_service_1.datasheeturl',
      description: 'A tooth',
      pricing: {
        vipPrice: '0.70',
        quantityPriceBreaks: [
          {
            quantity: 1,
            price: '0.6',
          },
          {
            quantity: 75,
            price: '0.5',
          },
        ],
      },
      packaging: 'Mouth',
      leadTime: '2 weeks',
      partNCNR: 'No',
      hts: '127.4.64.122',
      category: 'Chewing devices',
      imageURL: 'partsResponse_service_1.imageurl',
      exportInformation: {
        eccn: 'Yes',
        hts: 'Yes',
        taric: 'Yes',
      },
      environmentalInformation: {
        rohsStatus: 'Yes',
        leadInTerminals: 'Yes',
        reachSVHC: 'Yes',
        reachSubstanceName: 'Carbon',
      },
      roHsStatus: 'Yes',
    },
  ],
  currencyCode: 'USD',
  partSearchId: 'abdafsaf',
  recordCount: 2,
};

export const tti_aggregator_expected_1: PartialAggregatedPart = {
  name: '12345',
  description: 'A tooth',
  totalStock: 1000 + 500,
  manufacturerLeadTime: 14,
  manufacturerName: 'MOLARS',
  packaging: new Set<Packaging>([
    {
      manufacturerLeadTime: '21',
      minimumOrderQuantity: 2,
      priceBreaks: [
        {
          breakQuantity: 1,
          totalPrice: 0.3,
          unitPrice: 0.3,
        },
        {
          breakQuantity: 50,
          totalPrice: 10,
          unitPrice: 0.2,
        },
      ],
      quantityAvailable: 500,
      supplier: 'TTI',
      type: 'Mouth',
      unitPrice: 0.5,
    },
    {
      manufacturerLeadTime: '14',
      minimumOrderQuantity: 3,
      priceBreaks: [
        {
          breakQuantity: 1,
          totalPrice: 0.6,
          unitPrice: 0.6,
        },
        {
          breakQuantity: 75,
          totalPrice: 37.5,
          unitPrice: 0.5,
        },
      ],
      quantityAvailable: 1000,
      supplier: 'TTI',
      type: 'Mouth',
      unitPrice: 0.7,
    },
  ]),
  productDoc: 'partsResponse_service_1.datasheeturl',
  productUrl: 'partsResponse_service_1.buyurl',
  productImageUrl: 'partsResponse_service_1.imageurl',
  specifications: {
    htsCode: '127.4.64.122',
    category: 'Chewing devices',
    eccn: 'Yes',
    taric: 'Yes',
    rohsStatus: 'Yes',
    leadInTerminals: 'Yes',
    SVHC: 'Yes',
    reachSubstanceName: 'Carbon',
  },
  sourcePart: 'TTI',
};
