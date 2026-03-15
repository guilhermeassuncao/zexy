import { getCollection } from "astro:content";

const site = "https://zexy.com.br";

function toUrl(pathname: string) {
  return new URL(pathname, site).toString();
}

function formatDate(date: Date) {
  return date.toISOString();
}

export async function GET() {
  const [offers, news] = await Promise.all([getCollection("offers"), getCollection("news")]);

  const staticPages = ["/", "/games", "/animes", "/series", "/ofertas"];

  const urls = [
    ...staticPages.map((pathname) => ({
      loc: toUrl(pathname)
    })),
    ...news.map((entry) => ({
      loc: toUrl(`/${entry.data.category}/${entry.slug.split("/").at(-1) ?? entry.slug}`),
      lastmod: formatDate(entry.data.updatedAt ?? entry.data.publishedAt)
    })),
    ...offers.map((entry) => ({
      loc: toUrl(`/${entry.data.category}/${entry.slug}`),
      lastmod: formatDate(entry.data.updatedAt ?? entry.data.publishedAt)
    }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>${item.lastmod ? `
    <lastmod>${item.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
