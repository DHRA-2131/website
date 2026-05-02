import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        author: z.object({
            name: z.string().optional(),
            github: z.string(),
        }).or(z.string()),
        thumbnail: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()),
        draft: z.boolean().optional(),
    })
});

const learn = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        links: z.record(z.string()).optional(),
        draft: z.boolean().optional(),
    })
});

const programming = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        links: z.record(z.string()).optional(),
        draft: z.boolean().optional(),
    })
})


export const collections = {
    learn,
    programming,
    blog,
};
