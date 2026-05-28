import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { packages } from '@/data/content';
import { formatINR } from '@/lib/utils';
import { TrackedLink } from '@/components/marketing/tracked-link';
import { TestimonialsSection } from '@/components/marketing/testimonials-section';
import {
  testimonialsForPackage,
  aggregateRating,
} from '@/data/testimonials';

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = packages.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.shortDescription,
    alternates: { canonical: `/packages/${p.slug}` },
    openGraph: {
      title: p.name,
      description: p.shortDescription,
      type: 'website',
      images: [
        {
          url: `/og/package-${p.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${p.name} — Tadoba Pench Safari`,
        },
      ],
    },
  };
}

const SITE_URL = 'https://www.tadobapenchsafari.com';

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = packages.find((x) => x.slug === slug);
  if (!p) notFound();

  const pageUrl = `${SITE_URL}/packages/${p.slug}`;
  const imageUrl = p.heroImage.startsWith('http') ? p.heroImage : `${SITE_URL}${p.heroImage}`;

  // Locations for the trip — combo package covers both reserves
  const tadobaLocation = {
    '@type': 'TouristAttraction',
    name: 'Tadoba Andhari Tiger Reserve',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Maharashtra',
      addressLocality: 'Chandrapur',
    },
  };
  const penchLocation = {
    '@type': 'TouristAttraction',
    name: 'Pench Tiger Reserve',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Madhya Pradesh',
      addressLocality: 'Seoni',
    },
  };
  const isCombo = p.slug === 'tadoba-pench-combo-5n';
  const locations = isCombo
    ? [tadobaLocation, penchLocation]
    : p.destination === 'pench'
    ? [penchLocation]
    : [tadobaLocation];

  // Reviews tied to this package (sample testimonials are filtered out for schema)
  const packageReviews = testimonialsForPackage(p.slug).filter((t) => !t.sample);
  const packageAggregate = aggregateRating(packageReviews);

  const productJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.shortDescription,
    image: [imageUrl],
    brand: { '@type': 'Brand', name: 'Tadoba Pench Safari' },
    category: 'Wildlife Safari Tour Package',
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'INR',
      price: p.priceFromINR,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'TravelAgency',
        name: 'Tadoba Pench Safari',
        url: SITE_URL,
      },
    },
  };

  if (packageAggregate) {
    productJsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: packageAggregate.ratingValue,
      reviewCount: packageAggregate.reviewCount,
      bestRating: packageAggregate.bestRating,
    };
    productJsonLd.review = packageReviews.slice(0, 5).map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
      datePublished: `${t.travelMonth}-15`,
    }));
  }

  // All testimonials for this package (incl. samples) get shown on the page
  const pageTestimonials = testimonialsForPackage(p.slug);

  const tripJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: p.name,
    description: p.shortDescription,
    image: imageUrl,
    url: pageUrl,
    touristType: 'Wildlife enthusiast, tiger safari traveller',
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: p.inclusions.length,
      itemListElement: p.inclusions.map((inc, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: inc,
      })),
    },
    subjectOf: locations,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: p.priceFromINR,
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Tadoba Pench Safari',
      url: SITE_URL,
      telephone: '+91-82080-90280',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Packages', item: `${SITE_URL}/packages` },
      { '@type': 'ListItem', position: 3, name: p.name, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative min-h-[55vh] flex items-end overflow-hidden grain">
        <Image src={p.heroImage} alt={`${p.name} — ${p.destination === 'pench' ? 'Pench Tiger Reserve' : 'Tadoba Andhari Tiger Reserve'} safari package with ${p.safariCount} jeep safaris`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <p className="text-sm tracking-[0.2em] uppercase text-sunrise mb-3">
            {p.durationNights}N / {p.durationDays}D · {p.safariCount} safaris
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-bone leading-tight max-w-3xl mb-4">
            {p.name}
          </h1>
          <p className="text-lg text-bone/85 max-w-2xl">{p.shortDescription}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-bark mb-6">What's included</h2>
            <ul className="space-y-3 mb-10">
              {p.inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-bark/80">
                  <Check className="w-5 h-5 text-canopy shrink-0 mt-0.5" />
                  {inc}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit bg-paper p-8 rounded-2xl">
            <div className="text-xs uppercase tracking-wider text-bark/60 mb-1">
              Starting from
            </div>
            <div className="font-display text-4xl text-canopy mb-6">
              {formatINR(p.priceFromINR)}
            </div>
            <Link
              href="/contact"
              className="block w-full text-center bg-sunrise text-bark py-3 rounded-full font-medium hover:bg-rust hover:text-bone transition-colors"
            >
              Book this package
            </Link>
            <TrackedLink
              event="whatsapp_click"
              params={{ location: 'package_detail', package: p.slug }}
              href="https://wa.me/918208090280"
              className="block w-full text-center mt-3 border border-bark/20 py-3 rounded-full font-medium hover:bg-bark hover:text-bone transition-colors"
            >
              Customize on WhatsApp
            </TrackedLink>
          </aside>
        </div>
      </section>

      {pageTestimonials.length > 0 && (
        <TestimonialsSection
          testimonials={pageTestimonials}
          heading={`What guests of the ${p.name} say`}
          subheading="Recent travellers who booked this exact package."
          bg="bg-paper"
          showAllLink={false}
        />
      )}
    </>
  );
}
