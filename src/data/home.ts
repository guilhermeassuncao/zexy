export type Category = "games" | "animes" | "series";

export type FeaturedItem = {
  title: string;
  category: Category;
  image: string;
  size: "large" | "medium" | "small";
  href: string;
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
  excerpt: string;
};

export const navItems = [
  { label: "home", href: "/", color: "text-green", glow: "menu-link-glow-green", icon: "home" },
  { label: "games", href: "/games", color: "text-red", glow: "menu-link-glow-red", icon: "games" },
  { label: "animes", href: "/animes", color: "text-purple", glow: "menu-link-glow-purple", icon: "animes" },
  { label: "series", href: "/series", color: "text-orange", glow: "menu-link-glow-orange", icon: "series" },
  { label: "ofertas", href: "/ofertas", color: "text-blue", glow: "menu-link-glow-blue", icon: "offers" }
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { label: "X", href: "https://x.com", icon: "x" }
] as const;
