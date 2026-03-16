import site from "../../data/site.json";
import { listArticleIds } from "../lib/content";

export const prerender = true;

const BUILD_DATE = "2026-03-16";

export async function GET() {
  const base = site.domain; // already includes https://
  const staticPages: { path: string; changefreq: string; priority: string }[] = [
    { path: "/",                    changefreq: "weekly",  priority: "1.0" },
    { path: "/about/",              changefreq: "monthly", priority: "0.8" },
    { path: "/faq/",                changefreq: "monthly", priority: "0.8" },
    { path: "/label-checklist/",    changefreq: "monthly", priority: "0.8" },
    { path: "/ingredient-context/", changefreq: "monthly", priority: "0.8" },
  ];

  const articleEntries = listArticleIds().map((id) => ({
    path: `/articles/${id}/`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allEntries = [...staticPages, ...articleEntries];

  const urls = allEntries
    .map(
      ({ path, changefreq, priority }) =>
        `<url>` +
        `<loc>${base}${path}</loc>` +
        `<lastmod>${BUILD_DATE}</lastmod>` +
        `<changefreq>${changefreq}</changefreq>` +
        `<priority>${priority}</priority>` +
        `</url>`
    )
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
