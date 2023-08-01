import { parseLeadTimeDays } from '../utils';

describe('Utils', () => {
  describe('parseLeadTimeDays', () => {
    it('parses days', () => {
      const leadTime = '28 days';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28);
    });
    it('parses day (singular)', () => {
      const leadTime = '28 day';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28);
    });
    it('parses weeks', () => {
      const leadTime = '28 Weeks';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28 * 7);
    });
    it('parses months', () => {
      const leadTime = '28 months';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28 * 7 * 4);
    });
    it('parses years', () => {
      const leadTime = '28 years';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28 * 365);
    });
    it('defaults to weeks when not given', () => {
      const leadTime = '28';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28 * 7);
    });
    it('throws an error when unrecognized format', () => {
      const leadTime = '28 Eons';
      try {
        parseLeadTimeDays(leadTime);
        fail('Parsed eons correctly');
      } catch (err) {}
    });
    it('Handles all caps', () => {
      const leadTime = '28 DAYS';
      const result = parseLeadTimeDays(leadTime);
      expect(result).toEqual(28);
    });
  });
});
