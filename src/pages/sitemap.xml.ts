import { getNoticias, getOffers } from "../data/catalog";

const site = "https://zexy.com.br";

function toUrl(pathname: string) {
  const normalized = pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
  return new URL(normalized, site).toString();
}

function formatDate(date: Date) {
  return date.toISOString();
}

export async function GET() {
  const [offers, noticias] = await Promise.all([getOffers(), getNoticias()]);

  const staticPages = ["/", "/playstation", "/nintendo", "/xbox", "/comparar", "/ofertas", "/noticias"];

  const urls: Array<{ loc: string; lastmod?: string }> = [
    ...staticPages.map((pathname) => ({ loc: toUrl(pathname) })),
    ...offers.map((offer) => ({
      loc: toUrl(offer.href),
      lastmod: formatDate(offer.updatedAt)
    })),
    ...noticias.map((noticia) => ({
      loc: toUrl(noticia.href),
      lastmod: formatDate(noticia.publishedAt)
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
