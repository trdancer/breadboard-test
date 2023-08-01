import ArrowAggregator from '../arrowAggregator';
import TTIAggregator from '../ttiAggregator';
import {
  arrow_aggregator_1,
  arrow_aggregator_expected_1,
  tti_aggregator_1,
  tti_aggregator_expected_1,
} from './fixtures';
describe('Aggregators', () => {
  describe('TTI Aggregator', () => {
    let ttiAggregator: TTIAggregator;
    it('Aggregates normal data', () => {
      ttiAggregator = new TTIAggregator(tti_aggregator_1);
      expect(ttiAggregator.aggregatePartResponse('12345')).toStrictEqual(
        tti_aggregator_expected_1,
      );
    });
    it('Builds pricing tiers', () => {
      expect(
        ttiAggregator.buildPricing(
          tti_aggregator_1.parts[0].pricing.quantityPriceBreaks,
        ),
      ).toStrictEqual([
        {
          breakQuantity: 1,
          unitPrice: 0.3,
          totalPrice: 1 * 0.3,
        },
        {
          breakQuantity: 50,
          unitPrice: 0.2,
          totalPrice: 50 * 0.2,
        },
      ]);
    });
  });
  describe('Arrow Aggregator', () => {
    let arrowAggregator: ArrowAggregator;
    it('Aggregates normal data', () => {
      arrowAggregator = new ArrowAggregator(arrow_aggregator_1);
      expect(arrowAggregator.aggregatePartResponse('12345')).toStrictEqual(
        arrow_aggregator_expected_1,
      );
    });
    it('Builds pricing tiers', () => {
      arrowAggregator = new ArrowAggregator(arrow_aggregator_1);
      expect(
        arrowAggregator.buildPricing(
          arrow_aggregator_1.pricingResponse[0].pricingTier,
        ),
      ).toStrictEqual([
        {
          breakQuantity: 5000,
          unitPrice: 0.1,
          totalPrice: 5000 * 0.1,
        },
      ]);
    });
  });
});
