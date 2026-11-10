import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import nextEnv from "@next/env";
import { parseSiteUrl } from "../src/lib/site-url.ts";

nextEnv.loadEnvConfig(process.cwd());
const siteUrl = parseSiteUrl(process.env.SITE_URL || "https://denis-minishin.ru");
const original = join("out", "business-info.html");
const directory = join("out", "business-info");
let html = await readFile(original, "utf8");

for (const [property, path] of [["og:url", "/business-info/"], ["og:image", "/images/business-info-cover.jpg"]]) {
  const pattern = new RegExp(`(<meta\\s+property="${property}"\\s+content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`Business card is missing ${property}`);
  html = html.replace(pattern, (_match, before, after) => `${before}${new URL(path, siteUrl)}${after}`);
}

// Keep the original .html URL and provide a directory URL for static hosts.
await mkdir(directory, { recursive: true });
await Promise.all([writeFile(original, html), writeFile(join(directory, "index.html"), html)]);
