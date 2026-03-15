import type { Category, FeaturedItem } from "./home";

export type PageKey = Category | "ofertas";

type HeroStat = {
  label: string;
  value: string;
};

export type PageContent = {
  slug: `/${PageKey}`;
  title: string;
  subtitle: string;
  description: string;
  icon: "games" | "animes" | "series" | "offers";
  accentClass: string;
  accentPanelClass: string;
  heroStats: HeroStat[];
  featuredTitle: string;
};

export const pageContent: Record<PageKey, PageContent> = {
  games: {
    slug: "/games",
    title: "games",
    subtitle: "Radar gamer com lançamentos, campeonatos e setup em promoção.",
    description:
      "Uma vitrine com o mesmo clima da home, mas focada em tudo que está puxando conversa no universo gamer agora.",
    icon: "games",
    accentClass: "text-red",
    accentPanelClass: "border-red/40 bg-red/10",
    heroStats: [
      { label: "estreias", value: "08" },
      { label: "campeonatos", value: "03 ao vivo" },
      { label: "descontos", value: "até 41%" }
    ],
    featuredTitle: "destaques de games"
  },
  animes: {
    slug: "/animes",
    title: "animes",
    subtitle: "Estreias, trailers e maratonas em um recorte mais afiado.",
    description:
      "A mesma base visual da home, agora puxando o foco para temporada, fandom e produtos que conversam com esse público.",
    icon: "animes",
    accentClass: "text-purple",
    accentPanelClass: "border-purple/40 bg-purple/10",
    heroStats: [
      { label: "estreias", value: "11" },
      { label: "trailers", value: "05 novos" },
      { label: "combos", value: "até 30%" }
    ],
    featuredTitle: "destaques de animes"
  },
  series: {
    slug: "/series",
    title: "series & filmes",
    subtitle: "Guia rápido para escolher melhor a próxima maratona.",
    description:
      "Aqui o recorte é mais editorial: destaques, catálogo quente e ofertas úteis para montar uma maratona sem sair do clima da home.",
    icon: "series",
    accentClass: "text-orange",
    accentPanelClass: "border-orange/40 bg-orange/10",
    heroStats: [
      { label: "estreias", value: "06" },
      { label: "top 10", value: "04 trocas" },
      { label: "assinaturas", value: "até 45%" }
    ],
    featuredTitle: "destaques de series & filmes"
  },
  ofertas: {
    slug: "/ofertas",
    title: "ofertas",
    subtitle: "Selecao enxuta para gastar melhor e perder menos tempo.",
    description:
      "Uma página de compras com o DNA da home: vitrines grandes no topo, cortes por interesse e uma base editorial para contextualizar o que vale abrir.",
    icon: "offers",
    accentClass: "text-blue",
    accentPanelClass: "border-blue/40 bg-blue/10",
    heroStats: [
      { label: "ofertas", value: "16 curadas" },
      { label: "cupons", value: "07 ativos" },
      { label: "faixa", value: "R$ 189 a R$ 4.4k" }
    ],
    featuredTitle: "vitrine da semana"
  }
};
