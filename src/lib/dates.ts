export type Locale = "ru" | "en";

export interface WorkPeriod {
  start: string; // YYYY-MM
  end: string | null;
}

export function currentDate(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Krasnoyarsk",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value;
  return `${value("year")}-${value("month")}-${value("day")}`;
}

function monthIndex(value: string): number {
  const match = /^(\d{4})-(0[1-9]|1[0-2])(?:-\d{2})?$/.exec(value);
  if (!match) throw new Error(`Invalid date: ${value}`);
  return Number(match[1]) * 12 + Number(match[2]) - 1;
}

export function ageOn(birthDate: string, today: string): number {
  const birthYear = Number(birthDate.slice(0, 4));
  const year = Number(today.slice(0, 4));
  return year - birthYear - (today.slice(5, 10) < birthDate.slice(5, 10) ? 1 : 0);
}

export function formatAge(age: number, locale: Locale): string {
  if (locale === "en") return `${age} ${age === 1 ? "year" : "years"}`;
  const form = new Intl.PluralRules("ru").select(age);
  const unit = form === "one" ? "год" : form === "few" ? "года" : "лет";
  return `${age} ${unit}`;
}

export function formatBirthDate(value: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function formatMonth(value: string, locale: Locale): string {
  const index = monthIndex(value);
  const date = new Date(Date.UTC(Math.floor(index / 12), index % 12, 1));
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date).replace(/\s+г\.$/u, "");
}

export function workMonths(periods: readonly WorkPeriod[], today: string): number {
  const current = monthIndex(today);
  const ranges = periods
    .map(({ start, end }) => ({
      start: monthIndex(start),
      end: end ? Math.min(monthIndex(end), current) : current,
    }))
    .filter(({ start, end }) => start <= end)
    .sort((a, b) => a.start - b.start);

  const merged: { start: number; end: number }[] = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && range.start <= last.end + 1) {
      last.end = Math.max(last.end, range.end);
    } else {
      merged.push({ ...range });
    }
  }
  return merged.reduce((sum, { start, end }) => sum + end - start + 1, 0);
}

export function formatWorkDuration(months: number, locale: Locale): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const rules = new Intl.PluralRules(locale);
  const unit = (value: number, kind: "year" | "month") => {
    if (locale === "en") return `${value} ${kind}${value === 1 ? "" : "s"}`;
    const forms = kind === "year" ? ["год", "года", "лет"] : ["месяц", "месяца", "месяцев"];
    const category = rules.select(value);
    return `${value} ${forms[category === "one" ? 0 : category === "few" ? 1 : 2]}`;
  };
  return [years ? unit(years, "year") : "", remainingMonths || !years ? unit(remainingMonths, "month") : ""]
    .filter(Boolean)
    .join(", ");
}
