/** SITE_URL is a public origin used in generated metadata, never a secret. */
export function parseSiteUrl(value: string): URL {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("SITE_URL must be an absolute HTTP or HTTPS origin");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username || url.password || url.pathname !== "/" || url.search || url.hash
  ) {
    throw new Error("SITE_URL must be an HTTP or HTTPS origin without credentials, a path, query, or fragment");
  }
  return url;
}
