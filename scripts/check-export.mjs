import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import nextEnv from "@next/env";
import { parseSiteUrl } from "../src/lib/site-url.ts";

nextEnv.loadEnvConfig(process.cwd());
const output = "out";
const siteUrl = parseSiteUrl(process.env.SITE_URL || "https://denis-minishin.ru");

for (const [file, language, path] of [["index.html", "ru", "/"], ["en/index.html", "en", "/en/"]]) {
  const html = readFileSync(join(output, file), "utf8");
  assert.match(html, new RegExp(`<html lang="${language}"`), `${file}: incorrect language`);
  assert.ok(html.includes(`rel="canonical" href="${new URL(path, siteUrl)}"`), `${file}: incorrect canonical URL`);
  const links = [...html.matchAll(/href="(\/files\/portfolio\/[^"]+\.pdf)"/g)].map((match) => match[1]);
  assert.ok(links.length >= 15, `${file}: missing portfolio links`);
  for (const link of links) {
    assert.ok(existsSync(join(output, decodeURIComponent(link).slice(1))), `${file}: missing ${link}`);
  }
}

const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8");
for (const path of ["/", "/en/"]) assert.ok(sitemap.includes(`<loc>${new URL(path, siteUrl)}</loc>`));
assert.ok(existsSync(join(output, "images", "7330010.jpg")), "missing profile image");
assert.ok(existsSync(join(output, "business-info.html")), "missing business card page");
assert.ok(existsSync(join(output, "business-info", "index.html")), "missing clean business card URL");
const businessCard = readFileSync(join(output, "business-info.html"), "utf8");
assert.equal(businessCard, readFileSync(join(output, "business-info", "index.html"), "utf8"), "business card URLs differ");
assert.ok(businessCard.includes(`property="og:url" content="${new URL("/business-info/", siteUrl)}"`), "incorrect business card URL");
assert.ok(businessCard.includes(`property="og:image" content="${new URL("/images/business-info-cover.jpg", siteUrl)}"`), "incorrect business card image URL");
assert.ok(readFileSync(join(output, "CNAME"), "utf8").trim(), "missing Pages custom domain");
console.log("Static export: both languages, canonical URLs, portfolio files, image, business card and CNAME are present.");
