"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  ageOn,
  currentDate,
  formatAge,
  formatBirthDate,
  formatMonth,
  formatWorkDuration,
  type Locale,
  type WorkPeriod,
  workMonths,
} from "@/lib/dates";

const TodayContext = createContext("");

export function TodayProvider({ initialDate, children }: { initialDate: string; children: React.ReactNode }) {
  const [today, setToday] = useState(initialDate);

  useEffect(() => {
    const update = () => setToday(currentDate());
    const initial = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 60_000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return <TodayContext.Provider value={today}>{children}</TodayContext.Provider>;
}

export function BirthInfo({ birthDate, locale }: { birthDate: string; locale: Locale }) {
  const today = useContext(TodayContext);
  return <span>{formatAge(ageOn(birthDate, today), locale)}, {locale === "ru" ? "родился" : "born on"} <time dateTime={birthDate}>{formatBirthDate(birthDate, locale)}</time></span>;
}

export function TotalExperience({ periods, locale }: { periods: readonly WorkPeriod[]; locale: Locale }) {
  const today = useContext(TodayContext);
  return <>{formatWorkDuration(workMonths(periods, today), locale)}</>;
}

export function ExperienceDates({ period, locale }: { period: WorkPeriod; locale: Locale }) {
  const today = useContext(TodayContext);
  return <>
    {formatMonth(period.start, locale)} – {period.end ? formatMonth(period.end, locale) : locale === "ru" ? "по наст. вр." : "Present"}
    <span className="text-muted-foreground opacity-75"><br />{formatWorkDuration(workMonths([period], today), locale)}</span>
  </>;
}
