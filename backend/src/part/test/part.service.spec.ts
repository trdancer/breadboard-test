import { Test, TestingModule } from '@nestjs/testing';
import { PartController } from '../part.controller';
import { PartService } from '../part.service';
import {
  partsResponse_service_1,
  partsResponse_service_2,
  partsResponse_service_3,
  expected_service_1,
  expected_service_2,
  expected_service_3,
} from './fixtures';

describe('PartController', () => {
  let partService: PartService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PartController],
      providers: [PartService],
    }).compile();

    partService = app.get<PartService>(PartService);
  });
  describe('Aggregate Responses', () => {
    it('Multiple responses', async () => {
      const aggregatedPart = partService.aggregateParts(
        partsResponse_service_1,
        '12345',
      );
      expect(aggregatedPart).toStrictEqual(expected_service_1);
    });
    it('Singular TTI response', async () => {
      const aggregatedPart = partService.aggregateParts(
        partsResponse_service_2,
        '12345',
      );
      expect(aggregatedPart).toStrictEqual(expected_service_2);
    });
    it('Singular Arrow responses', async () => {
      const aggregatedPart = partService.aggregateParts(
        partsResponse_service_3,
        '12345',
      );
      expect(aggregatedPart).toStrictEqual(expected_service_3);
    });
  });
});
