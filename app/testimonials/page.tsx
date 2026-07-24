import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TestimonialsSection } from '@/components/marketing/testimonials-section';
import {
  testimonials,
  realTestimonials,
  aggregateRating,
} from '@/data/testimonials';

// This page 404s (and stays out of the sitemap and footer) until 3+ real
// testimonials exist in data/testimonials.ts — Google's threshold for
// AggregateRating rich results. Add the quotes there and this page, its
// sitemap entry, and the footer "Reviews" link all activate automatically.

export const metadata: Metadata = {
  title: 'Guest Reviews & Testimonials',
  description:
    'What travellers say about their Tadoba and Pench tiger safaris with us — real, first-party reviews from hosted guests.',
  alternates: { canonical: '/testimonials' },
};

const SITE_URL = 'https://www.tadobapenchsafari.com';

export default function TestimonialsPage() {
  const real = realTestimonials();
  const agg = aggregateRating(real);
  if (!agg) notFound();

  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Tadoba Pench Safari',
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: agg.ratingValue,
      reviewCount: agg.reviewCount,
      bestRating: agg.bestRating,
    },
    review: real.slice(0, 10).map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
      datePublished: `${t.travelMonth}-15`,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/testimonials` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="bg-canopy text-bone pt-32 pb-20 grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="divider-tribal text-bone/70 max-w-xs mb-6">
            <span>Reviews</span>
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Guests who walked the forest with us.
          </h1>
          <p className="text-lg text-bone/85 max-w-2xl mt-6">
            {agg.ratingValue} ★ average across {agg.reviewCount} first-party
            reviews from hosted guests.
          </p>
        </div>
      </section>
      <TestimonialsSection
        testimonials={testimonials}
        heading="What guests say"
        subheading="Every review below is from a guest who actually travelled with us."
        bg="bg-bone"
        showAllLink={false}
      />
    </>
  );
}
