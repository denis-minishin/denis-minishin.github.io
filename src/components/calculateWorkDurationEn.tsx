import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

interface WorkExperienceProps {
  start: string;
  end: string | null;
}

const calculateWorkDurationEn = ({ start, end }: WorkExperienceProps): string => {
  const startDate = parseISO(formatDateString(start));
  const endDate = end ? parseISO(formatDateString(end)) : new Date();

  const diffInMonths = monthDiff(startDate, endDate) + 1; // Include the month of starting work
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years === 0) {
    return `${formatMonthLabel(months)}`;
  } else if (years !== 0 && months === 0) {
    return `${formatYearLabel(years)}`;
  } else {
    return `${formatYearLabel(years)}, ${formatMonthLabel(months)}`;
  }
};

const formatDateString = (dateString: string): string => {
  const [month, year] = dateString.split(' ');
  return `${year}-${formatMonth(month)}-01`;
};

const formatMonth = (month: string): string => {
  const monthMap: { [key: string]: number } = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };
  return String(monthMap[month]).padStart(2, '0');
};

const formatMonthLabel = (months: number): string => {
  return `${months} ${formatMonthCase(months)}`;
};

const formatYearLabel = (years: number): string => {
  return `${years} ${formatYearCase(years)}`;
};

const formatMonthCase = (months: number): string => {
  const cases = ['month', 'months'];
  return months === 1 ? cases[0] : cases[1];
};

const formatYearCase = (years: number): string => {
  const cases = ['year', 'years'];
  return years === 1 ? cases[0] : cases[1];
};

const monthDiff = (dateFrom: Date, dateTo: Date): number => {
  let months;
  months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
  months -= dateFrom.getMonth();
  months += dateTo.getMonth();
  return months <= 0 ? 0 : months;
};

export const calculateTotalWorkExperienceEn = (workExperiences: readonly WorkExperienceProps[]): string => {
  let totalMonths = 0;

  workExperiences.forEach((work) => {
    const startDate = parseISO(formatDateString(work.start));
    const endDate = work.end ? parseISO(formatDateString(work.end)) : new Date();
    totalMonths += monthDiff(startDate, endDate) + 1;
  });

  const totalYears = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (totalYears === 0) {
    return `${formatMonthLabel(months)}`;
  } else if (totalYears !== 0 && months === 0) {
    return `${formatYearLabel(totalYears)}`;
  } else {
    return `${formatYearLabel(totalYears)}, ${formatMonthLabel(months)}`;
  }
};

export default calculateWorkDurationEn;