import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const loose = z.object({}).passthrough();

// Редактор пишет null в поля, которые оставили пустыми. Приводим null к значению по умолчанию,
// иначе сборка падает на первой же такой записи.
const nn = <T extends z.ZodTypeAny>(schema: T, dflt: any) =>
  z.preprocess(v => (v === null || v === undefined ? dflt : v), schema) as unknown as T;

const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: z.object({
    name: z.string(), name_ar: z.string(), code: z.string(),
    metaphor: z.string().optional(), order: z.number().default(99),
    lang: z.enum(['en','ar']).optional(), dir: z.string().optional(),
    logo: z.string().optional(), short: z.string().optional(),
    description: z.string().optional()
  }).passthrough()
});

const strands = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/strands' }),
  schema: z.object({
    series: z.string(), name: z.string(), name_ar: z.string().optional().default(''),
    order: z.number().default(99), lang: z.enum(['en','ar']).optional(),
    stage: nn(z.string().optional().default(''), ''),
    digital: nn(z.record(z.string()).optional().default({}), {}),
    systemic_problem: nn(z.string().optional().default(''), ''),
    description: z.string().optional()
  }).passthrough()
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    strand: z.string(), number: z.number(), of: z.number(),
    lang: z.enum(['en','ar']).optional(),
    title: nn(z.string().optional().default(''), ''),
    status: nn(z.string().optional().default(''), ''),
    slogan: nn(z.string().optional().default(''), ''),
    age: nn(z.string().optional().default(''), ''), grade: nn(z.string().optional().default(''), ''),
    pages: nn(z.union([z.string(), z.number()]).optional().default(''), ''),
    format: nn(z.string().optional().default(''), ''), binding: nn(z.string().optional().default(''), ''),
    isbn: nn(z.string().optional().default(''), ''),
    cover: nn(z.string().optional().default(''), ''),
    spreads: nn(z.array(z.union([z.string(), loose])).optional().default([]), []),
    description: nn(z.string().optional().default(''), ''),
    contents: nn(z.array(z.union([z.string(), loose])).optional().default([]), [])
  }).passthrough()
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(), seo_title: z.string().optional(),
    seo_description: z.string().optional().default(''),
    section: z.string(), audience: z.string(),
    date: z.coerce.date(), lang: z.enum(['en','ar']).optional(),
    image: nn(z.string().optional().default(''), ''),
    image_alt: nn(z.string().optional().default(''), ''),
    trainer_url: nn(z.string().optional().default(''), '')
  }).passthrough()
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(), date: z.coerce.date(), lang: z.enum(['en','ar']).optional(),
    summary: nn(z.string().optional().default(''), ''),
    link: nn(z.string().optional().default(''), '')
  }).passthrough()
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: loose
});

export const collections = { series, strands, books, articles, news, pages };
