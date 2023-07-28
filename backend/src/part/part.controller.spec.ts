import { Test, TestingModule } from '@nestjs/testing';
import { PartController } from './part.controller';
import { PartService } from './part.service';
import { AggregatedPart } from 'src/types';

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
    it('should return "Hello World!"', () => {
      const partNumber = '123'
      const expected : AggregatedPart = {

      }
      expect(partController.getPart(partNumber)).toBe(expected);
    });
  });
});
