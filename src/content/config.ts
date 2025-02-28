import { defineCollection, z } from 'astro:content';

export const collections = {
  'blog': defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
    }),
  }),
}; 