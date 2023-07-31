import { Test, TestingModule } from '@nestjs/testing';
import { PartController } from './part.controller';
import { PartService } from './part.service';
import { AggregatedPart, Packaging } from 'src/types';

describe('PartController', () => {
  let partController: PartController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PartController],
      providers: [PartService],
    }).compile();

    partController = app.get<PartController>(PartController);
  });

  describe('GET', () => {
    it('should return aggregated part', async () => {
      const partNumber = '0510210200'
      const packagingSet = new Set<Packaging>([
        {
          type: "Bulk",
          minimumOrderQuantity: 42,
          quantityAvailable: 226274,
          unitPrice: 0.12,
          supplier: "TTI",
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
            }
          ],
          manufacturerLeadTime: `${10 * 7}`,
        },
        {
          type: "EACH",
          minimumOrderQuantity: 1,
          quantityAvailable: 200000,
          unitPrice: 0.0545,
          supplier: "Arrow",
          manufacturerLeadTime: `${8 * 7}`,
          priceBreaks: [
            {
              breakQuantity: 1,
              unitPrice: 0.0773,
              totalPrice: 0.0773
            },
            {
              breakQuantity: 857,
              unitPrice: 0.0725,
              totalPrice: 857 * 0.0725 
            },
            {
              breakQuantity: 4468,
              unitPrice: 0.0651,
              totalPrice: 4468 * 0.0651
            },
            {
              breakQuantity: 15221,
              unitPrice: 0.0545,
              totalPrice: 15221 * 0.0545  
            }
          ]
        },
        {
          type: "EACH",
          minimumOrderQuantity: 1,
          quantityAvailable: 200000,
          unitPrice: 0.0545,
          supplier: "Arrow",
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
            }
          ]
        },
        {
          type: "EACH",
          minimumOrderQuantity: 1,
          quantityAvailable: 1,
          unitPrice: 0.114,
          supplier: "Arrow",
          priceBreaks: [
            {
              breakQuantity: 1,
              unitPrice: 0.114,
              totalPrice: 1 *  0.114,
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
            }
          ],
          manufacturerLeadTime: `${10 * 7}`,
        },
        {
          type: "EACH",
          minimumOrderQuantity: 1,
          quantityAvailable: 200000,
          unitPrice: -1,
          supplier: "Arrow",
          priceBreaks: [],
        },
        {
          type: "EACH",
          minimumOrderQuantity: 1,
          quantityAvailable: 200000,
          unitPrice: 0.0545,
          supplier: "Arrow",
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
            }
          ],
          manufacturerLeadTime: `${8 * 7}`,
        },
        
      ])
      const expected : AggregatedPart = {
        name: "0510210200",
        description: "Conn Housing RCP 2 POS 1.25mm Crimp ST Cable Mount Natural PicoBlade™ Bag",
        manufacturerLeadTime: 8 * 7,
        manufacturerName: "Molex",
        totalStock: 385887 + 226274,
        productDoc: "https://www.molex.com/pdm_docs/sd/510210200_sd.pdf",
        productUrl: "https://www.tti.com/content/ttiinc/en/apps/part-detail.html?partsNumber=0510210200&mfgShortname=MOL&utm=CAV016&channel=link&source=VISUAL%20COMMUNICATIONS%20CO&campaigns=tti-api",
        productImageUrl: "https://www.mouser.com/images/molex/images/51021_SPL.jpg",
        packaging: [...packagingSet],
        specifications: [
          {
            key: "category",
            value: "Headers & Wire Housings"
          },
          {
            key: "eccn",
            value: "EAR99"
          },
          {
            key: "leadInTerminals",
            value: "No"
          },
          {
            key: "reachSubstanceName",
            value: "N/A"
          },
          {
            key: "htsCode",
            value: "8538.90.81.80"
          },
          {
            key: "SVHC",
            value: "No"
          },
          {
            key: "euRohs",
            value: "Compliant"
          },
          {
            key: "chinaRohs",
            value: "Compliant"
          },
          {
            key: "partClassification",
            value: "C"
          },
          {
            key: "exportControlClassificationNumberUS",
            value: "EAR99"
          },
          {
            key: "exportControlClassificationNumberWAS",
            value: "NLR"
          },
          {
            key: "countryOfOrigin",
            value: "Republic of Korea"
          },
          {
            key: "dateCode",
            value: "2232+"
          }
        ] as any as JSON,
        sourceParts: ["TTI", "Arrow",]
      }
      const received = await partController.getPart(partNumber)
      expect(received).toStrictEqual(expected);
    });
  });
});
