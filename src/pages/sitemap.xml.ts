import site from "../../data/site.json";
import { listArticleIds } from "../lib/content";

export const prerender = true;

const TODAY = new Date().toISOString().split("T")[0];
const base = site.domain; // already includes https://

type SitemapEntry = {
  path: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
};

export async function GET() {
  const staticEntries: SitemapEntry[] = [
    { path: "/",                        changefreq: "weekly",  priority: "1.0" },
    { path: "/about/",                  changefreq: "monthly", priority: "0.7" },
    { path: "/faq/",                    changefreq: "monthly", priority: "0.8" },
    { path: "/label-checklist/",        changefreq: "monthly", priority: "0.8" },
    { path: "/ingredient-context/",     changefreq: "monthly", priority: "0.7" },
    { path: "/serving-size-context/",   changefreq: "monthly", priority: "0.7" },
  ];

  const articleEntries: SitemapEntry[] = listArticleIds().map((id) => ({
    path: `/articles/${id}/`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const allEntries = [...staticEntries, ...articleEntries];

  const urls = allEntries
    .map((e) => {
      const lm = e.lastmod ?? TODAY;
      return (
        `<url>` +
        `<loc>${base}${e.path}</loc>` +
        `<lastmod>${lm}</lastmod>` +
        `<changefreq>${e.changefreq}</changefreq>` +
        `<priority>${e.priority}</priority>` +
        `</url>`
      );
    })
    .join("");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls +
    `</urlset>`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
