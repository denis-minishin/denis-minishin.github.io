import test from "node:test";
import assert from "node:assert/strict";
import { parseSiteUrl } from "../src/lib/site-url.ts";

test("SITE_URL accepts public HTTP origins and rejects credentials or paths", () => {
  assert.equal(parseSiteUrl("https://example.com").origin, "https://example.com");
  assert.equal(parseSiteUrl("http://localhost:3000/").origin, "http://localhost:3000");
  for (const value of ["not-a-url", "ftp://example.com", "https://user:secret@example.com", "https://example.com/subdir", "https://example.com/?secret=x", "https://example.com/#fragment"]) {
    assert.throws(() => parseSiteUrl(value), /SITE_URL/);
  }
});
