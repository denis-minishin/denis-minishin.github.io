import type { Metadata } from "next";
import type { Locale } from "./dates";
import { RESUME_DATA_RU } from "@/data/resume-data-ru";
import { RESUME_DATA_EN } from "@/data/resume-data-en";
import { parseSiteUrl } from "@/lib/site-url";

const configuredUrl = process.env.SITE_URL || "https://denis-minishin.ru";
export const siteUrl = parseSiteUrl(configuredUrl);

export function resumeMetadata(locale: Locale): Metadata {
  const data = locale === "ru" ? RESUME_DATA_RU : RESUME_DATA_EN;
  const path = locale === "ru" ? "/" : "/en/";
  const title = `${data.name} | ${data.about}`;
  const description = data.summary[0];
  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: path,
      languages: { ru: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: { title, description, url: path, type: "website", locale: locale === "ru" ? "ru_RU" : "en_US" },
    icons: {
      icon: [
        { url: "/images/favicon-light.png", media: "(prefers-color-scheme: light)" },
        { url: "/images/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
      ],
    },
  };
}
