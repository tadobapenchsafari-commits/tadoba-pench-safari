import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plane, Car, Train, Clock } from 'lucide-react';
import type { OriginCity } from '@/data/origin-cities';
import { packages } from '@/data/content';
import { formatINR } from '@/lib/utils';
import { TrackedLink } from './tracked-link';

const SITE_URL = 'https://www.tadobapenchsafari.com';

export function CityLanding({ city: c }: { city: OriginCity }) {
  const pageUrl = `${SITE_URL}/tadoba-safari-from-${c.slug}`;
  const recommendedPacks = c.recommendedPackages
    .map((slug) => packages.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: `Tadoba Safari from ${c.name}`, item: pageUrl },
    ],
  };

  const tripJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `Tadoba Safari from ${c.name}`,
    description: c.intro.split('\n')[0],
    url: pageUrl,
    image: `${SITE_URL}/images/hero-tiger-tadoba.jpg`,
    touristType: `Tiger safari traveller from ${c.name}, ${c.state}`,
    departureLocation: {
      '@type': 'City',
      name: c.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: c.name,
        addressRegion: c.state,
        addressCountry: 'IN',
      },
    },
    subjectOf: {
      '@type': 'TouristAttraction',
      name: 'Tadoba Andhari Tiger Reserve',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chandrapur',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Tadoba Pench Safari',
      url: SITE_URL,
      telephone: '+91-82080-90280',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }}
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden grain">
        <Image
          src="/images/hero-tiger-tadoba.jpg"
          alt={`Tadoba safari guide for travellers from ${c.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-bone">
          <p className="divider-tribal max-w-xs text-bone/70 mb-4">
            <span>From {c.name}</span>
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-4">
            Tadoba Safari from <span className="italic text-sunrise">{c.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-bone/85 max-w-2xl">
            Flight time {c.flight.durationHrs}h · {c.drive.distanceKm} km by road · Best trip:{' '}
            {c.bestTripLength}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {c.intro
          .split('\n')
          .filter(Boolean)
          .map((para, i) => (
            <p key={i} className="text-lg text-bark/85 leading-relaxed mb-5">
              {para}
            </p>
          ))}
      </section>

      {/* TRANSPORT */}
      <section className="bg-paper py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="divider-tribal max-w-xs mb-4">How to get there</p>
            <h2 className="font-display text-4xl text-bark leading-tight">
              Three ways from {c.name} to Tadoba
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TransportCard
              icon={<Plane className="w-6 h-6" />}
              mode="Fly"
              primary={`${c.flight.durationHrs} hours`}
              detail={c.flight.routeNote}
            />
            <TransportCard
              icon={<Car className="w-6 h-6" />}
              mode="Drive"
              primary={`${c.drive.distanceKm} km · ~${c.drive.durationHrs}h`}
              detail={c.drive.routeNote}
            />
            <TransportCard
              icon={<Train className="w-6 h-6" />}
              mode="Train"
              primary={`~${c.train.durationHrs}h`}
              detail={c.train.routeNote}
            />
          </div>
        </div>
      </section>

      {/* SUGGESTED TRIP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-canopy text-bone rounded-3xl p-10 md:p-14">
          <div className="flex items-center gap-2 text-sunrise text-xs uppercase tracking-[0.2em] mb-3">
            <Clock className="w-4 h-4" />
            Suggested trip length
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
            {c.bestTripLength}
          </h2>
          <p className="text-lg text-bone/85 max-w-2xl mb-8">{c.bestTripReason}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bone transition-colors"
          >
            Plan this trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* RECOMMENDED PACKAGES */}
      {recommendedPacks.length > 0 && (
        <section className="bg-paper py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="divider-tribal max-w-xs mb-4">Recommended for {c.name}</p>
              <h2 className="font-display text-4xl text-bark leading-tight">
                Packages we suggest
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedPacks.map((p) => (
                <Link
                  key={p.slug}
                  href={`/packages/${p.slug}`}
                  className="group bg-bone rounded-2xl overflow-hidden hover:shadow-xl flex"
                >
                  <div className="relative w-2/5 aspect-[4/5] overflow-hidden shrink-0">
                    <Image
                      src={p.heroImage}
                      alt={`${p.name} — recommended Tadoba safari package for travellers from ${c.name}`}
                      fill
                      sizes="(max-width: 768px) 40vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-bamboo uppercase tracking-wider mb-2">
                        {p.durationNights}N / {p.durationDays}D · {p.safariCount} safaris
                      </div>
                      <h3 className="font-display text-xl text-bark mb-2">{p.name}</h3>
                      <p className="text-sm text-bark/60 line-clamp-3">{p.shortDescription}</p>
                    </div>
                    <div className="font-display text-lg text-canopy mt-4">
                      From {formatINR(p.priceFromINR)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CITY TIPS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="divider-tribal max-w-xs mb-4">Local tips</p>
          <h2 className="font-display text-4xl text-bark leading-tight">
            From {c.name}, specifically
          </h2>
        </div>
        <ul className="space-y-5">
          {c.cityTips.map((t, i) => (
            <li key={i} className="flex gap-4 text-bark/85">
              <span className="font-display text-2xl text-sunrise shrink-0 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="leading-relaxed">{t}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="divider-tribal max-w-xs mb-4">FAQ</p>
            <h2 className="font-display text-4xl text-bark leading-tight">
              Questions {c.name} travellers ask
            </h2>
          </div>
          <div className="space-y-6">
            {c.faqs.map((f, i) => (
              <details key={i} className="bg-bone rounded-2xl p-6 group">
                <summary className="font-display text-lg text-bark cursor-pointer list-none flex justify-between items-start gap-4">
                  <span>{f.q}</span>
                  <span className="text-sunrise text-2xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-bark/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-bark mb-5 leading-tight">
            Ready to plan from {c.name}?
          </h2>
          <p className="text-lg text-bark/75 mb-8">
            Tell us your dates and we&apos;ll put together a complete itinerary — permits,
            transfers, resort, and the safaris best suited for {c.name}-based travellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bark text-bone rounded-full font-medium hover:bg-sunrise hover:text-bark transition-colors"
            >
              Plan your trip <ArrowRight className="w-4 h-4" />
            </Link>
            <TrackedLink
              event="whatsapp_click"
              params={{ location: 'city_page', city: c.slug }}
              href="https://wa.me/918208090280"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-bark/30 text-bark rounded-full font-medium hover:bg-bark hover:text-bone transition-colors"
            >
              Chat on WhatsApp
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}

function TransportCard({
  icon,
  mode,
  primary,
  detail,
}: {
  icon: React.ReactNode;
  mode: string;
  primary: string;
  detail: string;
}) {
  return (
    <div className="bg-bone p-6 rounded-2xl">
      <div className="w-12 h-12 rounded-full bg-canopy/10 flex items-center justify-center text-canopy mb-4">
        {icon}
      </div>
      <div className="text-xs uppercase tracking-wider text-bark/50 mb-1">{mode}</div>
      <div className="font-display text-2xl text-bark mb-3">{primary}</div>
      <p className="text-sm text-bark/70 leading-relaxed">{detail}</p>
    </div>
  );
}

export function cityMetadata(c: OriginCity) {
  return {
    title: `Tadoba Safari from ${c.name} — 2026 Booking Guide`,
    description: `Plan a Tadoba tiger safari from ${c.name}: direct flights to Nagpur in ${c.flight.durationHrs}h, ${c.drive.distanceKm} km drive route, train options, recommended ${c.bestTripLength} itinerary, and curated package picks.`,
    alternates: { canonical: `/tadoba-safari-from-${c.slug}` },
    openGraph: {
      title: `Tadoba Safari from ${c.name}`,
      description: `Direct flights, drive routes, and trip planning — Tadoba from ${c.name}.`,
      type: 'website' as const,
      images: [
        {
          url: `/og/city-${c.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Tadoba Safari from ${c.name} — booking guide`,
        },
      ],
    },
  };
}
