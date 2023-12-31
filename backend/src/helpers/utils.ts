export const parseLeadTimeDays = (leadTime: string): number => {
  const leadTimeLower = leadTime.toLowerCase();
  const pat =
    /(?<amount>[0-9]+) ?(?<measure>week(s)?|day(s)?|month(s)?|year(s)?)?/;
  const m = leadTimeLower.match(pat);
  if (!m) {
    throw new Error(`Could not parse lead time ${leadTime}`);
  }
  // get named group
  const amount = parseInt(m.groups.amount);
  switch (m.groups.measure) {
    case 'day':
    case 'days':
      return amount;
    case 'week':
    case 'weeks':
      return 7 * amount;
    case 'month':
    case 'months':
      // approximately 3.5 weeks in a month
      // so we round up
      return 4 * 7 * amount;
    case 'year':
    case 'years':
      return 365 * amount;
    // If no measure is specified, assume weeks
    default:
      return 7 * amount;
  }
};
