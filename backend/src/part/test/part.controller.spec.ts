import { Test, TestingModule } from '@nestjs/testing';
import { PartController } from '../part.controller';
import { PartService } from '../part.service';
import { AggregatedPart } from 'src/types';
import { packaging_1 } from './fixtures';

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
      const partNumber = '0510210200';
      const expected: AggregatedPart = {
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
      };
      const received = await partController.getPart(partNumber);
      expect(received).toStrictEqual(expected);
    });
  });
});
