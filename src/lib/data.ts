import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

const byLang = <T extends { data: { lang: string } }>(items: T[], lang: Lang) =>
  items.filter(i => i.data.lang === lang);

export const slugOf = (id: string) => id.split('/').pop()!.replace(/\.md$/, '');

export async function getSeries(lang: Lang) {
  const all = byLang(await getCollection('series'), lang);
  return all
    .map(s => ({ ...s, slug: slugOf(s.id) }))
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

export async function getStrands(lang: Lang, seriesSlug?: string) {
  const all = byLang(await getCollection('strands'), lang)
    .map(s => ({ ...s, slug: slugOf(s.id) }))
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  return seriesSlug ? all.filter(s => s.data.series === seriesSlug) : all;
}

export async function getBooks(lang: Lang, strandSlug?: string) {
  const all = byLang(await getCollection('books'), lang)
    .map(b => ({ ...b, slug: slugOf(b.id) }))
    .sort((a, b) => a.data.number - b.data.number);
  return strandSlug ? all.filter(b => b.data.strand === strandSlug) : all;
}

export async function getArticles(lang: Lang, section?: string) {
  const all = byLang(await getCollection('articles'), lang)
    .map(a => ({ ...a, slug: slugOf(a.id) }))
    .sort((a, b) => +b.data.date - +a.data.date);
  return section ? all.filter(a => a.data.section === section) : all;
}

export async function getNews(lang: Lang) {
  return byLang(await getCollection('news'), lang)
    .map(n => ({ ...n, slug: slugOf(n.id) }))
    .sort((a, b) => +b.data.date - +a.data.date);
}

export async function getPage(lang: Lang, name: string) {
  const all = await getCollection('pages');
  return all.find(p => p.id === `${lang}/${name}` || p.id === `${lang}/${name}.md`);
}

/** Издание опубликовано, если у него есть название или слоган и статус не «в разработке» */
export const isPublished = (d: any) =>
  d.status !== 'in-preparation' && Boolean(d.title || d.slogan);

/** Ярлык статуса: пустой статус = решение не принято */
export function statusOf(d: any, lang: Lang) {
  if (d.status === 'in-preparation') return { key: 'inPreparation' as const, pending: false };
  if (d.status === 'available') return { key: 'available' as const, pending: false };
  if (d.status === 'forthcoming') return { key: 'forthcoming' as const, pending: false };
  return { key: 'statusTbd' as const, pending: true };
}

/** «manara-web-lab» → «web-lab» */
export const strandPath = (strandSlug: string, seriesSlug: string) =>
  strandSlug.replace(new RegExp(`^${seriesSlug}-`), '');

export const bookCode = (seriesCode: string, strandName: string, n: number) =>
  `${seriesCode}-${strandName.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}-${String(n).padStart(2, '0')}`;
