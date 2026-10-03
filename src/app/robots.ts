export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = 'https://soullife-gaza.org';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/dev/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
