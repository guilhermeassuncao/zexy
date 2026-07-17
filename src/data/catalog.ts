/**
 * Dados do portal de consoles (PlayStation / Xbox).
 *
 * Ofertas, notícias e guias vêm de arquivos markdown em
 * src/content/{offers,noticias,guides} (content collections do Astro) —
 * edite conteúdo lá, sem tocar em código. Todas as listagens usam os loaders
 * abaixo, que ordenam pelos .md mais recentes (data e, no empate, mtime do
 * arquivo). Ofertas e notícias têm página de detalhe por categoria.
 */
import { getCollection } from "astro:content";
import { stat } from "node:fs/promises";
import { resolve } from "node:path";

export type Platform = "playstation" | "xbox" | "nintendo";

export type Store = "amazon" | "mercado-livre" | "shopee";

export type NoticiaCategory = "playstation" | "xbox" | "nintendo" | "geral";

/** Converte um texto em slug seguro para URL (ex.: "Controles" → "controles"). */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type Offer = {
  id: string;
  name: string;
  platform: Platform;
  category: string;
  categorySlug: string;
  store: Store;
  image: string;
  imageAlt: string;
  originalPrice?: number;
  currentPrice: number;
  discountPercentage?: number;
  affiliateUrl: string;
  updatedAt: Date;
  featured?: boolean;
  /** Página de detalhe: /ofertas/<categoria>/<slug> */
  href: string;
};

export type Noticia = {
  id: string;
  title: string;
  category: NoticiaCategory;
  publishedAt: Date;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  author: string;
  /** Página de detalhe: /noticias/<categoria>/<slug> */
  href: string;
};

export type ConsoleSpec = {
  id: string;
  name: string;
  platform: Platform;
  tagline: string;
  focus: string;
  controller: string;
  physicalMedia: string;
  resolution: string;
  storage: string;
  subscription: string;
  priceRange: string;
  idealFor: string;
};

export type CategoryItem = {
  id: string;
  label: string;
  description: string;
  href: string;
};

export type Guide = {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  readingTime: string;
  href: string;
};

// mtime do arquivo .md no disco: usado como desempate para que o último
// arquivo adicionado apareça no topo mesmo com datas iguais (comportamento
// da listagem original do Zexy, que ordenava pelos .md mais recentes).
async function fileMtime(collection: string, entryId: string): Promise<number> {
  try {
    const stats = await stat(resolve(process.cwd(), "src/content", `${collection}/${entryId}`));
    return stats.mtimeMs;
  } catch {
    return 0;
  }
}

/** Carrega as ofertas dos .md, das mais recentes (updatedAt, depois mtime do arquivo). */
export async function getOffers(): Promise<Offer[]> {
  const entries = await getCollection("offers");
  const withMeta = await Promise.all(
    entries.map(async (entry) => {
      const categorySlug = slugify(entry.data.category);
      const offer: Offer = {
        id: entry.slug,
        ...entry.data,
        categorySlug,
        href: `/ofertas/${categorySlug}/${entry.slug}`
      };
      return { offer, date: entry.data.updatedAt.getTime(), mtime: await fileMtime("offers", entry.id) };
    })
  );
  return withMeta
    .sort((a, b) => b.date - a.date || b.mtime - a.mtime || b.offer.id.localeCompare(a.offer.id))
    .map(({ offer }) => offer);
}

/** Carrega as notícias dos .md, das mais recentes (publishedAt, depois mtime do arquivo). */
export async function getNoticias(): Promise<Noticia[]> {
  const entries = await getCollection("noticias");
  const withMeta = await Promise.all(
    entries.map(async (entry) => {
      const noticia: Noticia = {
        id: entry.slug,
        title: entry.data.title,
        category: entry.data.category,
        publishedAt: entry.data.publishedAt,
        image: entry.data.image,
        alt: entry.data.alt ?? entry.data.title,
        description: entry.data.description ?? "",
        tags: entry.data.tags ?? [],
        author: entry.data.author ?? "Equipe Zexy",
        href: `/noticias/${entry.data.category}/${entry.slug}`
      };
      return { noticia, date: entry.data.publishedAt.getTime(), mtime: await fileMtime("noticias", entry.id) };
    })
  );
  return withMeta
    .sort((a, b) => b.date - a.date || b.mtime - a.mtime || b.noticia.id.localeCompare(a.noticia.id))
    .map(({ noticia }) => noticia);
}

export const noticiaCategoryLabels: Record<NoticiaCategory, string> = {
  playstation: "PlayStation",
  xbox: "Xbox",
  nintendo: "Nintendo",
  geral: "Geral"
};

/** Carrega os guias dos .md, dos mais recentes (publishedAt, depois mtime do arquivo). */
export async function getGuides(): Promise<Guide[]> {
  const entries = await getCollection("guides");
  const withMeta = await Promise.all(
    entries.map(async (entry) => ({
      entry,
      date: entry.data.publishedAt?.getTime() ?? 0,
      mtime: await fileMtime("guides", entry.id)
    }))
  );
  return withMeta
    .sort((a, b) => b.date - a.date || b.mtime - a.mtime || b.entry.slug.localeCompare(a.entry.slug))
    .map(({ entry }) => ({
      id: entry.slug,
      title: entry.data.title,
      excerpt: entry.data.excerpt,
      tag: entry.data.tag,
      readingTime: entry.data.readingTime,
      href: "/comparar"
    }));
}

export const storeLabels: Record<Store, string> = {
  amazon: "Amazon",
  "mercado-livre": "Mercado Livre",
  shopee: "Shopee"
};

export const platformLabels: Record<Platform, string> = {
  playstation: "PlayStation",
  xbox: "Xbox",
  nintendo: "Nintendo"
};

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatUpdatedAt(date: Date): string {
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo"
  });
}


export const consoleSpecs: ConsoleSpec[] = [
  {
    id: "ps5",
    name: "PlayStation 5",
    platform: "playstation",
    tagline: "Exclusivos e imersão",
    focus: "Exclusivos de peso e recursos do DualSense",
    controller: "DualSense (feedback háptico e gatilhos adaptáveis)",
    physicalMedia: "Sim, na versão com leitor",
    resolution: "Até 4K a 120 fps",
    storage: "SSD de 1 TB (expansível via NVMe)",
    subscription: "PlayStation Plus",
    priceRange: "R$ 4.300 – R$ 5.100",
    idealFor: "Quem prioriza exclusivos e mídia física"
  },
  {
    id: "ps5-pro",
    name: "PlayStation 5 Pro",
    platform: "playstation",
    tagline: "O PlayStation mais potente",
    focus: "GPU com 67% mais CUs, PSSR e ray tracing avançado",
    controller: "DualSense (feedback háptico e gatilhos adaptáveis)",
    physicalMedia: "Não, leitor de disco vendido à parte",
    resolution: "4K aprimorado a até 120 fps",
    storage: "SSD de 2 TB (expansível via NVMe)",
    subscription: "PlayStation Plus",
    priceRange: "R$ 6.500 – R$ 7.500",
    idealFor: "Entusiasta que quer o máximo em desempenho"
  },
  {
    id: "series-x",
    name: "Xbox Series X",
    platform: "xbox",
    tagline: "Potência bruta e Game Pass",
    focus: "O Xbox mais potente, com foco em Game Pass",
    controller: "Controle Sem Fio Xbox (botão Compartilhar e empunhadura texturizada)",
    physicalMedia: "Sim, na versão com leitor",
    resolution: "Até 4K a 120 fps",
    storage: "SSD de 1 TB (expansível via cartão)",
    subscription: "Xbox Game Pass",
    priceRange: "R$ 5.300 – R$ 6.500",
    idealFor: "Quem quer o topo do Xbox e catálogo por assinatura"
  },
  {
    id: "series-s",
    name: "Xbox Series S",
    platform: "xbox",
    tagline: "Entrada acessível na geração",
    focus: "Menor preço para entrar na geração atual",
    controller: "Controle Sem Fio Xbox (botão Compartilhar e empunhadura texturizada)",
    physicalMedia: "Não, 100% digital",
    resolution: "Até 1440p a 120 fps",
    storage: "SSD de 512 GB ou 1 TB",
    subscription: "Xbox Game Pass",
    priceRange: "R$ 2.700 – R$ 3.700",
    idealFor: "Quem busca custo-benefício e jogos digitais"
  },
  {
    id: "switch-2",
    name: "Nintendo Switch 2",
    platform: "nintendo",
    tagline: "Híbrido de nova geração",
    focus: "Exclusivos da Nintendo, portátil e dock em um só aparelho",
    controller: "Joy-Con 2 (magnéticos, com modo mouse)",
    physicalMedia: "Sim, cartuchos e mídia digital",
    resolution: "Até 4K na TV, 1080p portátil",
    storage: "256 GB (expansível via microSD Express)",
    subscription: "Nintendo Switch Online",
    priceRange: "R$ 4.500 – R$ 5.500",
    idealFor: "Quem quer exclusivos Nintendo e jogar em qualquer lugar"
  },
  {
    id: "switch-oled",
    name: "Nintendo Switch OLED",
    platform: "nintendo",
    tagline: "O híbrido acessível",
    focus: "Tela OLED de 7 polegadas e enorme catálogo consolidado",
    controller: "Joy-Con (destacáveis)",
    physicalMedia: "Sim, cartuchos e mídia digital",
    resolution: "Até 1080p na TV, 720p portátil",
    storage: "64 GB (expansível via microSD)",
    subscription: "Nintendo Switch Online",
    priceRange: "R$ 2.200 – R$ 2.800",
    idealFor: "Quem quer entrar no mundo Nintendo gastando menos"
  }
];

// href aponta para /ofertas já filtrado por plataforma + categoria
// (a página de ofertas lê ?platform= e ?category= da URL).
export const playstationCategories: CategoryItem[] = [
  { id: "ps-consoles", label: "Consoles", description: "PS5 Slim, Digital e Pro em um só radar de preços.", href: "/ofertas?platform=playstation&category=Consoles" },
  { id: "ps-controles", label: "Controles", description: "DualSense e DualSense Edge nas cores disponíveis.", href: "/ofertas?platform=playstation&category=Controles" },
  { id: "ps-armazenamento", label: "Armazenamento", description: "Expansões NVMe testadas e compatíveis com PS5.", href: "/ofertas?platform=playstation&category=Armazenamento" },
  { id: "ps-headsets", label: "Headsets", description: "Áudio 3D para aproveitar o Tempest Engine.", href: "/ofertas?platform=playstation&category=Headsets" },
  { id: "ps-acessorios", label: "Acessórios", description: "Bases, câmeras, capas e controles de mídia.", href: "/ofertas?platform=playstation&category=Acessórios" },
  { id: "ps-todas", label: "Ver tudo", description: "Todas as ofertas do ecossistema PlayStation.", href: "/ofertas?platform=playstation" }
];

export const xboxCategories: CategoryItem[] = [
  { id: "xb-consoles", label: "Consoles", description: "Series X e Series S nas versões com e sem leitor.", href: "/ofertas?platform=xbox&category=Consoles" },
  { id: "xb-controles", label: "Controles", description: "Controles Xbox Series em todas as edições.", href: "/ofertas?platform=xbox&category=Controles" },
  { id: "xb-game-pass", label: "Game Pass", description: "Assinaturas e cartões-presente pelo menor valor.", href: "/ofertas?platform=xbox&category=Game%20Pass" },
  { id: "xb-armazenamento", label: "Armazenamento", description: "Cartões de expansão e SSDs certificados.", href: "/ofertas?platform=xbox&category=Armazenamento" },
  { id: "xb-headsets", label: "Headsets", description: "Headsets com e sem fio compatíveis com Xbox.", href: "/ofertas?platform=xbox&category=Headsets" },
  { id: "xb-todas", label: "Ver tudo", description: "Todas as ofertas do ecossistema Xbox.", href: "/ofertas?platform=xbox" }
];

export const nintendoCategories: CategoryItem[] = [
  { id: "nt-consoles", label: "Consoles", description: "Switch 2 e OLED no mesmo radar de preços.", href: "/ofertas?platform=nintendo&category=Consoles" },
  { id: "nt-joycon", label: "Joy-Con", description: "Pares de Joy-Con 2 em todas as cores.", href: "/ofertas?platform=nintendo&category=Joy-Con" },
  { id: "nt-pro", label: "Controle Pro", description: "O controle tradicional para jogar na dock.", href: "/ofertas?platform=nintendo&category=Controle%20Pro" },
  { id: "nt-microsd", label: "microSD", description: "Cartões microSD Express testados para o Switch 2.", href: "/ofertas?platform=nintendo&category=microSD" },
  { id: "nt-acessorios", label: "Acessórios", description: "Cases, docks alternativas e mais.", href: "/ofertas?platform=nintendo&category=Acessórios" },
  { id: "nt-todas", label: "Ver tudo", description: "Todas as ofertas do ecossistema Nintendo.", href: "/ofertas?platform=nintendo" }
];

