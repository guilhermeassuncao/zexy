import { getCollection, type CollectionEntry } from "astro:content";
import type { Category, FeaturedItem, NewsItem, ProductItem } from "./home";
import type { PageKey } from "./pages";

export type ContentScope = "home" | PageKey;

export type OfferListItem = ProductItem & {
  category: Category;
  href: string;
  publishedAt: Date;
};

export type NewsListItem = NewsItem & {
  href: string;
  publishedAt: Date;
};

type OffersListing = {
  title: string;
  categories?: string[];
  items: OfferListItem[];
};

type NewsListing = {
  title: string;
  items: NewsListItem[];
};

type FeaturedListing = {
  title: string;
  items: FeaturedItem[];
};

const offerFilterCategoriesByScope: Partial<Record<ContentScope, string[]>> = {
  home: ["Todos", "games", "animes", "series & filmes"],
  ofertas: ["Todos", "games", "animes", "series & filmes"]
};

const offerLimitByScope: Record<ContentScope, number> = {
  home: 8,
  games: 4,
  animes: 4,
  series: 4,
  ofertas: 16
};

const newsLimitByScope: Record<Exclude<ContentScope, "ofertas">, number> = {
  home: 10,
  games: 4,
  animes: 4,
  series: 4
};

const newsTitleByScope: Record<Exclude<ContentScope, "ofertas">, string> = {
  home: "notícias",
  games: "últimas de games",
  animes: "últimas de animes",
  series: "últimas de series & filmes"
};

const featuredTitleByScope: Record<Exclude<ContentScope, "ofertas">, string> = {
  home: "destaques",
  games: "destaques de games",
  animes: "destaques de animes",
  series: "destaques de series & filmes"
};

const featuredSizeOrder: FeaturedItem["size"][] = ["large", "medium", "medium", "small", "small"];

function interleaveFeaturedItems<T>(first: T[], second: T[]) {
  const mixed: T[] = [];
  const maxLength = Math.max(first.length, second.length);

  for (let index = 0; index < maxLength; index += 1) {
    if (first[index]) mixed.push(first[index]);
    if (second[index]) mixed.push(second[index]);
  }

  return mixed;
}

function sortByNewest<T extends { data: { publishedAt: Date } }>(items: T[]) {
  return items.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

function toOfferListItem(entry: CollectionEntry<"offers">): OfferListItem {
  return {
    title: entry.data.title,
    image: entry.data.image,
    alt: entry.data.alt,
    discount: entry.data.discount,
    callout: entry.data.callout,
    price: entry.data.price,
    store: entry.data.store,
    category: entry.data.category,
    href: `/${entry.data.category}/${entry.slug}`,
    publishedAt: entry.data.publishedAt
  };
}

function toNewsListItem(entry: CollectionEntry<"news">): NewsListItem {
  const excerptSource =
    entry.body
      .split("\n\n")
      .map((part) => part.replace(/[#*_`>\[\]\(\)-]/g, "").replace(/\s+/g, " ").trim())
      .find(Boolean) ?? "";

  const excerpt = excerptSource.length > 220 ? `${excerptSource.slice(0, 217).trimEnd()}...` : excerptSource;

  return {
    title: entry.data.title,
    image: entry.data.image,
    alt: entry.data.alt,
    category: entry.data.category,
    time: entry.data.timeLabel,
    excerpt,
    href: `/${entry.data.category}/${entry.slug}`,
    publishedAt: entry.data.publishedAt
  };
}

export async function getOffersListing(scope: ContentScope): Promise<OffersListing> {
  const entries = await getCollection("offers", ({ data }) => {
    if (scope === "home" || scope === "ofertas") return true;
    return data.category === scope;
  });

  const items = sortByNewest(entries).slice(0, offerLimitByScope[scope]).map(toOfferListItem);

  return {
    title: scope === "ofertas" ? "" : "ofertas",
    categories: offerFilterCategoriesByScope[scope],
    items
  };
}

export async function getNewsListing(scope: Exclude<ContentScope, "ofertas">): Promise<NewsListing> {
  const entries = await getCollection("news", ({ data }) => {
    if (scope === "home") return true;
    return data.category === scope;
  });

  const items = sortByNewest(entries).slice(0, newsLimitByScope[scope]).map(toNewsListItem);

  return {
    title: newsTitleByScope[scope],
    items
  };
}

export async function getFeaturedListing(scope: Exclude<ContentScope, "ofertas">): Promise<FeaturedListing> {
  const [offers, news] = await Promise.all([
    getCollection("offers", ({ data }) => {
      if (scope === "home") return true;
      return data.category === scope;
    }),
    getCollection("news", ({ data }) => {
      if (scope === "home") return true;
      return data.category === scope;
    })
  ]);

  const latestOffers = sortByNewest(offers).map((entry) => ({
    title: entry.data.title,
    category: entry.data.category,
    image: entry.data.image,
    href: `/${entry.data.category}/${entry.slug}`,
    publishedAt: entry.data.publishedAt
  }));

  const latestNews = sortByNewest(news).map((entry) => ({
    title: entry.data.title,
    category: entry.data.category,
    image: entry.data.image,
    href: `/${entry.data.category}/${entry.slug}`,
    publishedAt: entry.data.publishedAt
  }));

  const items = interleaveFeaturedItems(latestNews, latestOffers)
    .slice(0, 5)
    .map((item, index) => ({
      title: item.title,
      category: item.category,
      image: item.image,
      href: item.href,
      size: featuredSizeOrder[index] ?? "small"
    }));

  return {
    title: featuredTitleByScope[scope],
    items
  };
}
