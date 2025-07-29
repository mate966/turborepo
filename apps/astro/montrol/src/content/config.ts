import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
    }),
});

const modules = defineCollection({
    type: 'data',
    schema: z.discriminatedUnion('type', [
        z.object({
            type: z.literal('hero'),
            title: z.string(),
            subtitle: z.string().optional(),
        }),
        z.object({
            type: z.literal('text'),
            text: z.string(),
        }),
        z.object({
            type: z.literal('cta'),
            title: z.string(),
            button: z.object({
                text: z.string(),
                url: z.string(),
            }),
        }),
    ]),
});

export const collections = {
    pages,
    modules,
};
