import { defineCollection, z } from "astro:content";

const categorySchema = z.enum(["games", "animes", "series"]);

const offers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: categorySchema,
    publishedAt: z.coerce.date(),
    image: z.string(),
    alt: z.string(),
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
    image: z.string(),
    alt: z.string().optional()
  })
});

export const collections = { offers, news };
