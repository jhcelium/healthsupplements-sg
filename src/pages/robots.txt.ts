import site from "../../data/site.json";

export const prerender = true;

export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`;
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
