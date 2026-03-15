import { defineCollection, z } from "astro:content";

const categorySchema = z.enum(["games", "animes", "series"]);

const offers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: categorySchema,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string(),
    alt: z.string(),
    description: z.string().max(180).optional(),
    tags: z.array(z.string()).min(1).max(8).optional(),
    discount: z.string(),
    callout: z.string(),
    price: z.string(),
    store: z.string()
  })
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: categorySchema,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string(),
    alt: z.string().optional(),
    description: z.string().max(180).optional(),
    tags: z.array(z.string()).min(1).max(8).optional(),
    author: z.string().optional()
  })
});

export const collections = { offers, news };
