import moment from "moment";

export const definePeriodRange = (startAt: string, endAt?: string | null): string => {
  const dates = [];
  const startYear = moment(startAt).year();
  const endYear = endAt ? moment(startAt).year() : null;

  dates.push(startYear);

  if (endYear && endYear !== startYear) {
    dates.push(endYear);
  }

  return dates.join(' - ');
};
