import { Test, TestingModule } from '@nestjs/testing';
import { PartController } from '../part.controller';
import { PartService } from '../part.service';
import { controller_expected_1, packaging_1 } from './fixtures';

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
      
      const received = await partController.getPart(partNumber);
      expect(received).toStrictEqual(controller_expected_1);
    });
  });
});
