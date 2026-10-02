import { programsData } from '@/data/programs';

export default function sitemap() {
  const baseUrl = 'https://soullife-gaza.org';
  const locales = ['ar', 'en'];
  const lastModified = new Date();

  const staticPages = [
    '',
    '/about',
    '/programs',
    '/team',
    '/committees',
    '/behind-the-scenes',
    '/library',
    '/gallery',
    '/voices',
    '/collaborate',
    '/contact',
  ];

  type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

  interface SitemapEntry {
    url: string;
    lastModified: Date;
    changeFrequency: ChangeFrequency;
    priority: number;
  }

  const routes: SitemapEntry[] = [];

  // Generate static pages for all locales
  for (const page of staticPages) {
    for (const locale of locales) {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: page === '' || page === '/programs' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === '/programs' || page === '/about' ? 0.8 : 0.6,
      });
    }
  }

  // Generate dynamic program pages for all locales
  for (const program of programsData) {
    for (const locale of locales) {
      routes.push({
        url: `${baseUrl}/${locale}/programs/${program.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  return routes;
}
