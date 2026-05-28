import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { testimonials, aggregateRating } from '@/data/testimonials';
import { TestimonialCard } from '@/components/marketing/testimonials-section';

const SITE_URL = 'https://www.tadobapenchsafari.com';

export const metadata = {
  title: 'Guest Reviews & Testimonials — Tadoba Pench Safari',
  description:
    'Read what our guests say about their Tadoba and Pench safari trips — honest, first-person reviews from travellers we have hosted.',
  alternates: { canonical: '/testimonials' },
  openGraph: {
    title: 'Guest Reviews — Tadoba Pench Safari',
    description: 'First-person reviews from travellers we have hosted.',
    type: 'website' as const,
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Guest reviews — Tadoba Pench Safari',
      },
    ],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/testimonials` },
  ],
};

export default function TestimonialsPage() {
  const agg = aggregateRating();
  const hasReal = testimonials.some((t) => !t.sample);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-bark text-bone py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">In their words</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Guest <span className="italic text-sunrise">reviews.</span>
          </h1>
          <p className="text-lg text-bone/80 mt-6 max-w-2xl">
            First-person reviews from travellers we have actually hosted. We do not buy reviews
            and we do not republish third-party ones — everything here was sent to us by the
            person who wrote it.
          </p>
          {agg && (
            <p className="text-sm text-bone/70 mt-4">
              {agg.ratingValue.toFixed(1)} / {agg.bestRating} stars · based on {agg.reviewCount} guest reviews
            </p>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!hasReal && (
          <div className="bg-paper border border-rust/20 rounded-2xl p-6 mb-10 text-sm text-bark/80">
            <strong className="text-rust">Sample preview.</strong> The cards below are{' '}
            placeholders that show the design. Real testimonials from past guests will replace
            them shortly.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bark mb-4 leading-tight">
            Travelled with us recently?
          </h2>
          <p className="text-lg text-bark/75 mb-8">
            Drop us a line with your experience — your words help future travellers decide
            whether a Tadoba or Pench safari is right for them.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bark text-bone rounded-full font-medium hover:bg-sunrise hover:text-bark transition-colors"
          >
            Share your experience <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
