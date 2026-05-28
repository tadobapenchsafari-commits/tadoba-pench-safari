import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { destinations } from '@/data/content';

const SITE_URL = 'https://www.tadobapenchsafari.com';

export const metadata = {
  title: 'Tadoba & Pench Tiger Reserves — Safari Destinations',
  description:
    'Plan a tiger safari in central India. Compare Tadoba Andhari Tiger Reserve and Pench National Park — terrain, sighting odds, gates, and best season.',
  alternates: { canonical: '/destinations' },
  openGraph: {
    title: 'Tadoba & Pench Tiger Reserves',
    description: 'Two central-India reserves, one combined safari ecosystem.',
    type: 'website' as const,
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Tadoba and Pench tiger reserves',
      },
    ],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${SITE_URL}/destinations` },
  ],
};

export default function DestinationsIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-bark text-bone py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">Two forests, one story</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Destinations <span className="italic text-sunrise">we know best.</span>
          </h1>
          <p className="text-lg text-bone/80 mt-6 max-w-2xl">
            We focus on two central-India tiger reserves — Tadoba Andhari in Maharashtra and
            Pench in Madhya Pradesh. Same airport (Nagpur), four hours apart, and together
            they give first-time visitors and seasoned wildlifers a complete safari.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={d.heroImage}
                alt={`${d.name} National Park — tiger safari and wildlife in central India`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-bone">
                <p className="text-sm tracking-[0.2em] uppercase text-sunrise mb-2">
                  {d.quickFacts[0].value}
                </p>
                <h2 className="font-display text-4xl md:text-5xl mb-3">{d.name}</h2>
                <p className="text-bone/85 mb-6 max-w-sm italic">{d.tagline}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                  Explore {d.name} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bark mb-4 leading-tight">
            Not sure which to pick?
          </h2>
          <p className="text-lg text-bark/75 mb-8">
            Read our honest comparison or just tell us your dates — we&apos;ll suggest the right
            reserve (or both, if a combo fits).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/tadoba-vs-pench-which-safari-is-right-for-you"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bark text-bone rounded-full font-medium hover:bg-sunrise hover:text-bark transition-colors"
            >
              Tadoba vs Pench — honest comparison
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-bark/30 text-bark rounded-full font-medium hover:bg-bark hover:text-bone transition-colors"
            >
              Plan my trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
