import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const html = readFileSync(new URL("../public/business-info.html", import.meta.url), "utf8");
const start = html.indexOf("function buildAllRequisites() {");
const end = html.indexOf("document.getElementById('btn-copy-all')", start);
if (start < 0 || end < 0) throw new Error("Business card copy function not found");
const source = html.slice(start, end).trim();

function row(label, display, copyValue = "") {
  const key = { textContent: label };
  const value = { textContent: display, getAttribute: () => copyValue };
  return { querySelector: (selector) => selector === ".k" ? key : value };
}

test("copy all uses current page details and the selected bank", () => {
  const company = row("Название", "Актуальное название");
  const bankA = { querySelectorAll: () => [row("Счёт", "формат A", "account-A")] };
  const bankB = { querySelectorAll: () => [row("Счёт", "формат B", "account-B")] };
  let activeBank = bankA;
  const sections = [
    { classList: { contains: () => false }, querySelector: (selector) => selector === "h2" ? { textContent: "Компания" } : null, querySelectorAll: () => [company] },
    { classList: { contains: () => false }, querySelector: (selector) => selector === "h2" ? { textContent: "Банк" } : activeBank },
    { classList: { contains: () => true }, querySelector: () => ({ textContent: "ОКВЭД" }), querySelectorAll: () => [{ textContent: "71.12" }, { textContent: "62.01" }] },
  ];
  const buildAllRequisites = runInNewContext(`(${source})`, { document: { querySelectorAll: () => sections } });

  const first = buildAllRequisites();
  assert.match(first, /Актуальное название/);
  assert.match(first, /account-A/);
  assert.doesNotMatch(first, /account-B/);
  assert.match(first, /71\.12, 62\.01/);

  activeBank = bankB;
  assert.match(buildAllRequisites(), /account-B/);
  assert.doesNotMatch(buildAllRequisites(), /account-A/);
});
