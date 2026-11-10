import test from "node:test";
import assert from "node:assert/strict";
import { ageOn, currentDate, formatAge, formatMonth, formatWorkDuration, workMonths } from "../src/lib/dates.ts";

test("age changes on the birthday and uses the correct Russian word", () => {
  assert.equal(ageOn("1998-09-16", "2026-09-15"), 27);
  assert.equal(ageOn("1998-09-16", "2026-09-16"), 28);
  assert.equal(formatAge(21, "ru"), "21 год");
  assert.equal(formatAge(22, "ru"), "22 года");
  assert.equal(formatAge(25, "ru"), "25 лет");
  assert.equal(formatAge(1, "en"), "1 year");
});

test("the current day follows Krasnoyarsk time around midnight", () => {
  assert.equal(currentDate(new Date("2026-09-15T16:59:59Z")), "2026-09-15");
  assert.equal(currentDate(new Date("2026-09-15T17:00:00Z")), "2026-09-16");
});

test("overlapping jobs count a calendar month only once", () => {
  const periods = [
    { start: "2022-12", end: null },
    { start: "2021-04", end: "2022-12" },
    { start: "2020-06", end: "2020-07" },
  ];
  assert.equal(workMonths(periods, "2023-01-15"), 24);
  assert.equal(workMonths([{ start: "2025-01", end: null }], "2024-12-31"), 0);
  assert.equal(workMonths([{ start: "2023-01", end: "2024-12" }], "2023-03-01"), 3);
});

test("month and duration formatting follow the chosen language", () => {
  assert.equal(formatMonth("2022-12", "ru"), "декабрь 2022");
  assert.equal(formatMonth("2022-12", "en"), "December 2022");
  assert.equal(formatWorkDuration(14, "ru"), "1 год, 2 месяца");
  assert.equal(formatWorkDuration(25, "en"), "2 years, 1 month");
  assert.throws(() => formatMonth("2022-13", "en"), /Invalid date/);
});
