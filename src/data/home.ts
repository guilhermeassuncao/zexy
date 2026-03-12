export type Category = "games" | "animes" | "series";

export type FeaturedItem = {
  title: string;
  category: Category;
  image: string;
  size: "large" | "medium" | "small";
};

export type ProductItem = {
  title: string;
  image: string;
  alt: string;
  discount: string;
  callout: string;
  price: string;
  store: string;
};

export type NewsItem = {
  title: string;
  image: string;
  alt: string;
  category: Category;
  time: string;
};

export const navItems = [
  { label: "home", href: "#", color: "text-green", glow: "menu-link-glow-green", icon: "home" },
  { label: "games", href: "#", color: "text-red", glow: "menu-link-glow-red", icon: "games" },
  { label: "animes", href: "#", color: "text-purple", glow: "menu-link-glow-purple", icon: "animes" },
  { label: "series", href: "#", color: "text-orange", glow: "menu-link-glow-orange", icon: "series" },
  { label: "ofertas", href: "#ofertas", color: "text-blue", glow: "menu-link-glow-blue", icon: "offers" }
] as const;

export const featuredItems: FeaturedItem[] = [
  {
    title: "12 filmes de ficção que merecem uma chance",
    category: "games",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    size: "large"
  },
  {
    title: "Código-fonte de software da PF põe em xeque versão de Moraes",
    category: "animes",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    size: "medium"
  },
  {
    title: "O Agente Secreto e mais 8 filmes e séries em alta para assistir",
    category: "series",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    size: "medium"
  },
  {
    title: "Suplementos com alta nas buscas em 2026",
    category: "games",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    size: "small"
  },
  {
    title: "5 combinações para rotina de treino",
    category: "animes",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
    size: "small"
  }
];

export const offerCategories = ["Todos", "games", "animes", "series"];

export const products: ProductItem[] = [
  {
    title: "Kindle, 16GB",
    image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&w=900&q=80",
    alt: "Leitor digital em promoção",
    discount: "14% off",
    callout: "Aproveite já!",
    price: "R$ 559,00",
    store: "amazon.com.br"
  },
  {
    title: "Echo Spot",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=900&q=80",
    alt: "Caixa de som inteligente em promoção",
    discount: "19% off",
    callout: "Imperdível!",
    price: "R$ 469,00",
    store: "amazon.com.br"
  },
  {
    title: "Smartphone Galaxy S25+ 256GB",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone em promoção",
    discount: "45% off",
    callout: "Cupom GANHOU100",
    price: "R$ 4.409,10",
    store: "magazineluiza.com.br"
  },
  {
    title: "Smartphone POCO X Series",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone em promoção",
    discount: "34% off",
    callout: "Cupom GERAL34",
    price: "R$ 1.037,00",
    store: "magazineluiza.com.br"
  },
  {
    title: "Headset Gamer HyperX Cloud III",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Headset gamer em promoção",
    discount: "28% off",
    callout: "Só hoje",
    price: "R$ 399,90",
    store: "kabum.com.br"
  },
  {
    title: "Smartwatch Galaxy Watch 7 BT",
    image: "https://images.pexels.com/photos/5077040/pexels-photo-5077040.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Smartwatch em promoção",
    discount: "22% off",
    callout: "Frete grátis",
    price: "R$ 1.249,00",
    store: "amazon.com.br"
  },
  {
    title: "Teclado Mecânico RGB Red Switch",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Teclado mecânico em promoção",
    discount: "31% off",
    callout: "Cupom TEC31",
    price: "R$ 279,90",
    store: "terabyteshop.com.br"
  },
  {
    title: "Monitor Ultrawide 29\" Full HD IPS",
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Monitor ultrawide em promoção",
    discount: "17% off",
    callout: "Últimas unidades",
    price: "R$ 1.099,00",
    store: "mercadolivre.com.br"
  }
];

export const newsItems: NewsItem[] = [
  {
    title: "Palpites para Mirassol x Santos: Análises e Onde Assistir (10/03/2026)",
    image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Escudos do Mirassol e Santos em destaque",
    category: "games",
    time: "há 1 hora"
  },
  {
    title: "US$ 1,5 bilhão na mesa: A guerra pela inteligência dos carros autônomos já está nas ruas",
    image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Painel com tecnologia para carros autônomos",
    category: "animes",
    time: "há 9 horas"
  },
  {
    title: "One Piece, Scarpetta e mais! Os lançamentos de filmes e séries da semana (08/03)",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Elenco de série em foto promocional",
    category: "series",
    time: "há 11 horas"
  },
  {
    title: "Final do campeonato nacional de eSports bate recorde de audiência online",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Jogador com controle em campeonato de games",
    category: "games",
    time: "há 13 horas"
  },
  {
    title: "Temporada de abril ganha trailer com estreias aguardadas pelos fãs",
    image: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Cosplayers em evento de anime",
    category: "animes",
    time: "há 15 horas"
  },
  {
    title: "Nova minissérie policial entra no top 10 global em menos de 24 horas",
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Set de filmagem de série com iluminação profissional",
    category: "series",
    time: "há 18 horas"
  },
  {
    title: "Atualização de grande RPG libera mapa inédito e corrige bugs de desempenho",
    image: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Notebook gamer com teclado iluminado",
    category: "games",
    time: "há 20 horas"
  },
  {
    title: "Studio confirma continuação de sucesso shonen para o segundo semestre",
    image: "https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Ilustração digital de personagem de anime",
    category: "animes",
    time: "há 1 dia"
  },
  {
    title: "Série brasileira de suspense é renovada para a terceira temporada",
    image: "https://images.pexels.com/photos/7991315/pexels-photo-7991315.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Diretor orientando gravação de cena",
    category: "series",
    time: "há 1 dia"
  },
  {
    title: "Preço de consoles recua no varejo e movimenta busca por bundles no fim de semana",
    image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Pessoa jogando em console de última geração",
    category: "games",
    time: "há 2 dias"
  }
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { label: "X", href: "https://x.com", icon: "x" }
] as const;
