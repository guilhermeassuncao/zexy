import { defineCollection, z } from "astro:content";

const platformSchema = z.enum(["playstation", "xbox", "nintendo"]);
const storeSchema = z.enum(["amazon", "mercado-livre", "shopee"]);

// Notícias do portal de consoles. O corpo do markdown é o conteúdo do post.
const noticiaCategorySchema = z.enum(["playstation", "xbox", "nintendo", "geral"]);

const noticias = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: noticiaCategorySchema,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string(),
    alt: z.string().optional(),
    description: z.string().max(200).optional(),
    tags: z.array(z.string()).min(1).max(8).optional(),
    author: z.string().optional()
  })
});

// Ofertas de produtos (consoles/acessórios). Cada arquivo .md é uma oferta.
const offers = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    platform: platformSchema,
    category: z.string(),
    store: storeSchema,
    image: z.string(),
    imageAlt: z.string(),
    originalPrice: z.number().optional(),
    currentPrice: z.number(),
    discountPercentage: z.number().optional(),
    affiliateUrl: z.string(),
    updatedAt: z.coerce.date(),
    featured: z.boolean().optional()
  })
});

// Guias de compra. O corpo do markdown é o conteúdo do guia.
const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tag: z.string(),
    readingTime: z.string(),
    publishedAt: z.coerce.date().optional()
  })
});

export const collections = { noticias, offers, guides };
