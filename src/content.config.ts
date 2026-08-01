import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const loose = z.object({}).passthrough();

const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: z.object({
    name: z.string(), name_ar: z.string(), code: z.string(),
    metaphor: z.string().optional(), order: z.number().default(99),
    lang: z.enum(['en','ar']), dir: z.string().optional(),
    logo: z.string().optional(), short: z.string().optional(),
    description: z.string().optional()
  }).passthrough()
});

const strands = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/strands' }),
  schema: z.object({
    series: z.string(), name: z.string(), name_ar: z.string().optional().default(''),
    order: z.number().default(99), lang: z.enum(['en','ar']),
    stage: z.string().optional().default(''),
    digital: z.record(z.string()).optional().default({}),
    systemic_problem: z.string().optional().default(''),
    description: z.string().optional()
  }).passthrough()
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    strand: z.string(), number: z.number(), of: z.number(),
    lang: z.enum(['en','ar']),
    title: z.string().optional().default(''),
    status: z.string().optional().default(''),
    slogan: z.string().optional().default(''),
    age: z.string().optional().default(''), grade: z.string().optional().default(''),
    pages: z.union([z.string(), z.number()]).optional().default(''),
    format: z.string().optional().default(''), binding: z.string().optional().default(''),
    isbn: z.string().optional().default(''),
    cover: z.string().optional().default(''),
    description: z.string().optional().default(''),
    contents: z.array(z.union([z.string(), loose])).optional().default([])
  }).passthrough()
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(), seo_title: z.string().optional(),
    seo_description: z.string().optional().default(''),
    section: z.string(), audience: z.string(),
    date: z.coerce.date(), lang: z.enum(['en','ar']),
    image: z.string().optional().default(''),
    image_alt: z.string().optional().default(''),
    trainer_url: z.string().optional().default('')
  }).passthrough()
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(), date: z.coerce.date(), lang: z.enum(['en','ar']),
    summary: z.string().optional().default(''),
    link: z.string().optional().default('')
  }).passthrough()
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: loose
});

export const collections = { series, strands, books, articles, news, pages };
