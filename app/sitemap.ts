import type { MetadataRoute } from 'next';
import { destinations, packages, CONTENT_UPDATED } from '@/data/content';
import { blogPosts } from '@/data/blog';
import { gateDetails } from '@/data/gates-content';
import { originCities } from '@/data/origin-cities';
import { aggregateRating } from '@/data/testimonials';

const BASE_URL = 'https://www.tadobapenchsafari.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Real content date (bumped in data/content.ts), not build time — a
  // lastModified that changes every deploy is one Google learns to ignore.
  const now = new Date(CONTENT_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/packages`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/destinations`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/gates`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/legal/cancellation-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${BASE_URL}/packages/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const gateRoutes = Object.keys(gateDetails).map((slug) => ({
    url: `${BASE_URL}/gates/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const cityRoutes = originCities.map((c) => ({
    url: `${BASE_URL}/tadoba-safari-from-${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // /testimonials 404s until 3+ real reviews exist (see data/testimonials.ts),
  // so it only enters the sitemap once it actually renders.
  const testimonialRoutes: MetadataRoute.Sitemap = aggregateRating()
    ? [{ url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }]
    : [];

  return [
    ...staticRoutes,
    ...testimonialRoutes,
    ...destinationRoutes,
    ...packageRoutes,
    ...blogRoutes,
    ...gateRoutes,
    ...cityRoutes,
  ];
}
