import site from "../../data/site.json";

const domain = site.domain.replace(/\/$/, "");

/**
 * Site-wide canonical URL (no trailing slash on paths; home is bare domain).
 */
export function canonicalUrl(path?: string | null): string {
  let p = path ?? "/";
  if (!p.startsWith("/")) p = `/${p}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "/") return domain;
  return `${domain}${p}`;
}
