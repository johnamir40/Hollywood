/**
 * billboard controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::billboard.billboard');

import { factories } from "@strapi/strapi";

type Coordinates = { lat: number; lng: number };
const cache = new Map<string, { value: Coordinates | null; expires: number }>();
const pending = new Map<string, Promise<Coordinates | null>>();

// Accept only Google Maps URLs. Never follow arbitrary external redirects.
function mapsUrl(raw: string): URL | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" || url.username || url.password || url.port)
      return null;
    if (url.hostname === "maps.app.goo.gl") return url;
    if (url.hostname === "goo.gl" && url.pathname.startsWith("/maps/"))
      return url;
    if (
      ["www.google.com", "google.com", "maps.google.com"].includes(
        url.hostname,
      ) &&
      (url.pathname.startsWith("/maps") || url.hostname === "maps.google.com")
    )
      return url;
  } catch {
    /* Invalid URL: keep the existing map fallback. */
  }
  return null;
}

function extractCoordinates(url: URL): Coordinates | null {
  let text: string;
  try {
    text = decodeURIComponent(url.href);
  } catch {
    return null;
  }
  // !3d / !4d identify the selected place, unlike @lat,lng (camera position).
  let match = text.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  if (!match) {
    const query =
      url.searchParams.get("query") || url.searchParams.get("q") || "";
    match = query.match(/^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/);
  }
  if (!match) return null;
  const lat = Number(match[1]);
  const lng = Number(match[2]);
  return Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    Math.abs(lat) <= 90 &&
    Math.abs(lng) <= 180
    ? { lat, lng }
    : null;
}

async function followShortLink(raw: string): Promise<Coordinates | null> {
  let url = mapsUrl(raw);
  const signal = AbortSignal.timeout(4000);
  for (let hop = 0; url && hop < 4; hop++) {
    const coordinates = extractCoordinates(url);
    if (coordinates) return coordinates;
    // Full links without a selected point are not geocoded or guessed.
    if (!["maps.app.goo.gl", "goo.gl"].includes(url.hostname)) return null;
    const response = await fetch(url.href, {
      method: "HEAD",
      redirect: "manual",
      signal,
    });
    if (![301, 302, 303, 307, 308].includes(response.status)) return null;
    const target = response.headers.get("location");
    if (!target) return null;
    url = mapsUrl(new URL(target, url).href);
  }
  return url ? extractCoordinates(url) : null;
}

async function resolveCoordinates(raw: unknown): Promise<Coordinates | null> {
  if (typeof raw !== "string" || raw.length > 8192) return null;
  const key = raw.trim();
  if (!mapsUrl(key)) return null;
  const hit = cache.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;
  if (pending.has(key)) return pending.get(key)!;
  const task = (async () => {
    let value: Coordinates | null = null;
    try {
      value = await followShortLink(key);
    } catch {
      /* Preserve API availability. */
    }
    if (cache.size >= 1000) cache.delete(cache.keys().next().value!);
    cache.set(key, { value, expires: Date.now() + (value ? 86400000 : 60000) });
    return value;
  })();
  pending.set(key, task);
  try {
    return await task;
  } finally {
    pending.delete(key);
  }
}

async function enrich(billboard: any) {
  if (!billboard || typeof billboard !== "object") return billboard;
  return {
    ...billboard,
    coordinates: await resolveCoordinates(billboard.googleMapsUrl),
  };
}

export default factories.createCoreController(
  "api::billboard.billboard",
  () => ({
    async find(ctx) {
      // Keep Strapi's permissions, validation, sanitization and pagination.
      const result = await super.find(ctx);
      const data = [];
      // Bound the number of simultaneous requests to Google.
      for (let i = 0; i < result.data.length; i += 4) {
        data.push(
          ...(await Promise.all(result.data.slice(i, i + 4).map(enrich))),
        );
      }
      return { ...result, data };
    },
    async findOne(ctx) {
      const result = await super.findOne(ctx);
      return { ...result, data: await enrich(result.data) };
    },
  }),
);
