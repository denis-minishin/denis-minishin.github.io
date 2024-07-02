import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

interface WorkExperienceProps {
  start: string;
  end: string | null;
}

const calculateWorkDurationRu = ({ start, end }: WorkExperienceProps): string => {
  const startDate = parseISO(formatDateString(start));
  const endDate = end ? parseISO(formatDateString(end)) : new Date();

  const diffInMonths = monthDiff(startDate, endDate) + 1; // Учитываем месяц приема на работу
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years === 0) {
    return `${formatMonthLabel(months)}`;
  } else if (years != 0 && months === 0) {
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
    январь: 1,
    февраль: 2,
    март: 3,
    апрель: 4,
    май: 5,
    июнь: 6,
    июль: 7,
    август: 8,
    сентябрь: 9,
    октябрь: 10,
    ноябрь: 11,
    декабрь: 12,
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
  const cases = ['месяц', 'месяца', 'месяцев'];
  return cases[
    (months % 100 > 4 && months % 100 < 20) || (months % 10 > 4 && months % 10 <= 9) || months % 10 === 0
      ? 2
      : months % 10 === 1
        ? 0
        : 1
  ];
};

const formatYearCase = (years: number): string => {
  const cases = ['год', 'года', 'лет'];
  return cases[
    (years % 100 > 4 && years % 100 < 20) || (years % 10 > 4 && years % 10 <= 9) || years % 10 === 0
      ? 2
      : years % 10 === 1
        ? 0
        : 1
  ];
};

const monthDiff = (dateFrom: Date, dateTo: Date): number => {
  let months;
  months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
  months -= dateFrom.getMonth();
  months += dateTo.getMonth();
  return months <= 0 ? 0 : months;
};

export const calculateTotalWorkExperienceRu = (workExperiences: readonly WorkExperienceProps[]): string => {
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
  } else if (totalYears != 0 && months === 0) {
    return `${formatYearLabel(totalYears)}`;
  } else {
    return `${formatYearLabel(totalYears)}, ${formatMonthLabel(months)}`;
  }
};

export default calculateWorkDurationRu;