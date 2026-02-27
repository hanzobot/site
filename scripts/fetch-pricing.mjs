import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '..', 'data', 'pricing.json');

const BASE = 'https://pricing.hanzo.ai/v1/pricing';
const ENDPOINTS = {
  plans:   `${BASE}/cloud/plans`,
  regions: `${BASE}/cloud/regions`,
  storage: `${BASE}/cloud/storage`,
  summary: `${BASE}/summary`,
};

const TIMEOUT_MS = 10_000;

async function fetchJSON(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`${url} returned ${res.status}`);
  return res.json();
}

export default async function fetchPricing() {
  console.log('[fetch-pricing] fetching from pricing.hanzo.ai ...');

  try {
    const results = {};
    for (const [key, url] of Object.entries(ENDPOINTS)) {
      const data = await fetchJSON(url);
      results[key] = data;
      console.log(`[fetch-pricing]   ${key}: ok`);
    }

    // Flatten nested wrappers: { plans: { plans: [...] } } -> { plans: [...] }
    if (results.plans?.plans) results.plans = results.plans.plans;
    if (results.regions?.regions) results.regions = results.regions.regions;

    results.fetchedAt = new Date().toISOString();

    writeFileSync(OUT, JSON.stringify(results, null, 2) + '\n');
    console.log(`[fetch-pricing] wrote ${OUT}`);
    return results;
  } catch (err) {
    console.warn(`[fetch-pricing] API unreachable: ${err.message}`);
    if (existsSync(OUT)) {
      console.warn('[fetch-pricing] keeping existing pricing.json as fallback');
    } else {
      console.error('[fetch-pricing] no fallback pricing.json exists -- build may use stale data');
    }
    return null;
  }
}

// Allow standalone execution: node scripts/fetch-pricing.mjs
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  fetchPricing();
}
