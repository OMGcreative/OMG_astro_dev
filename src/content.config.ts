import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        number: z.string(),
        category: z.string(),
        title: z.string(),
        description: z.string(),
        posterUrl: z.string().optional(),
        videoUrl: z.string().optional(),
        logoSrc: z.string().optional(),
        order: z.number().optional(),
        tags: z.array(z.string()).optional(),
        brand: z.string().optional(),
        client: z.string().optional(),
        gallery: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'projects': projectsCollection,
};
