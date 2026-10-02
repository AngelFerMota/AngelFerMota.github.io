import assert from "node:assert/strict";
import { setTimeout as delay } from "node:timers/promises";
const origin = "https://angelfermota.github.io";
const revision = process.env.GITHUB_SHA;
assert(
  revision && /^[a-f0-9]{40}$/.test(revision),
  "Expected a Git commit revision",
);
async function get(path) {
  const url = new URL(path, origin);
  assert.equal(url.origin, origin, "Only portfolio resources are checked");
  url.searchParams.set("revision", revision);
  const response = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    cache: "no-store",
  });
  assert(response.ok, `${url.pathname} returned ${response.status}`);
  return response;
}
let html;
for (let attempt = 0; attempt < 18; attempt++) {
  try {
    const candidate = await (await get("/")).text();
    if (
      candidate.includes(
        `<meta name="portfolio-revision" content="${revision}">`,
      )
    ) {
      html = candidate;
      break;
    }
  } catch (error) {
    console.log(`Waiting for publication (${error.message})`);
  }
  if (attempt < 17) await delay(10000);
}
assert(
  html,
  "The published page is not the expected portfolio revision. Check Pages source and deployment.",
);
assert(
  html.includes("<app-root") && html.includes('id="hero-title"'),
  "Prerendered portfolio is missing",
);
const assets = [...html.matchAll(/<(script|link)\b[^>]*>/g)].flatMap(
  ([tag, type]) => {
    if (type === "link" && !tag.includes('rel="stylesheet"')) return [];
    const path = tag.match(/(?:src|href)="([^"]+)"/)?.[1];
    return path ? [path] : [];
  },
);
assert(assets.length >= 2, "Production CSS and JavaScript are missing");
await Promise.all(
  assets.map(async (path) => {
    assert(
      (await (await get(path)).arrayBuffer()).byteLength > 0,
      `Empty asset: ${path}`,
    );
  }),
);
const cv = Buffer.from(
  await (await get("/files/cv-angel-fernandez-mota.pdf")).arrayBuffer(),
);
assert.equal(cv.subarray(0, 4).toString(), "%PDF");
console.log(
  `Verified portfolio revision ${revision}, ${assets.length} production assets and CV.`,
);
