import { canonicalUrl } from "../lib/urls";
import { listArticleIds } from "../lib/content";

export const prerender = true;

const TODAY = new Date().toISOString().split("T")[0];

type SitemapEntry = {
  path: string;
  changefreq: string;
  priority: string;
};

export async function GET() {
  const staticEntries: SitemapEntry[] = [
    { path: "/",                      changefreq: "weekly",  priority: "1.0" },
    { path: "/about",                changefreq: "monthly", priority: "0.8" },
    { path: "/faq",                  changefreq: "monthly", priority: "0.8" },
    { path: "/label-checklist",      changefreq: "monthly", priority: "0.8" },
    { path: "/ingredient-context",   changefreq: "monthly", priority: "0.8" },
    { path: "/serving-size-context", changefreq: "monthly", priority: "0.7" },
  ];

  const articleEntries = listArticleIds().map((id) => ({
    path: `/articles/${id}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allEntries = [...staticEntries, ...articleEntries];

  const urls = allEntries
    .map(
      ({ path, changefreq, priority }) =>
        `<url>` +
        `<loc>${canonicalUrl(path)}</loc>` +
        `<lastmod>${TODAY}</lastmod>` +
        `<changefreq>${changefreq}</changefreq>` +
        `<priority>${priority}</priority>` +
        `</url>`
    )
    .join("");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls +
    `</urlset>`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
