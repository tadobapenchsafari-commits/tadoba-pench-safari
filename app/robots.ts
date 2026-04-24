import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.tadobapenchsafari.com/sitemap.xml',
    host: 'https://www.tadobapenchsafari.com',
  };
}
