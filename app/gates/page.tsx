import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { gates } from '@/data/content';

const SITE_URL = 'https://www.tadobapenchsafari.com';

export const metadata = {
  title: 'All Safari Gates at Tadoba & Pench — 2026 Guide',
  description:
    'Every safari gate at Tadoba Andhari Tiger Reserve and Pench National Park — core zones, buffer zones, permits, sighting odds. Pick the right gate for your trip.',
  alternates: { canonical: '/gates' },
  openGraph: {
    title: 'All Safari Gates — Tadoba & Pench',
    description: 'Every gate at both reserves, with permits and 2026 sighting notes.',
    type: 'website' as const,
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'All safari gates at Tadoba and Pench',
      },
    ],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Gates', item: `${SITE_URL}/gates` },
  ],
};

export default function GatesIndex() {
  const tadobaGates = gates.filter((g) => g.destination === 'tadoba');
  const penchGates = gates.filter((g) => g.destination === 'pench');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-bark text-bone py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">Choose your gate</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            All safari gates, <span className="italic text-sunrise">honestly explained.</span>
          </h1>
          <p className="text-lg text-bone/80 mt-6 max-w-2xl">
            Tadoba has six core gates and four buffer gates. Pench has three working gates.
            Each one has its own permit allotment, sighting rhythm, and best-suited traveller —
            here&apos;s the full set.
          </p>
        </div>
      </section>

      <GateSection
        title="Tadoba Andhari Tiger Reserve"
        subtitle={`${tadobaGates.length} gates across Maharashtra`}
        gates={tadobaGates}
      />

      <GateSection
        title="Pench Tiger Reserve"
        subtitle={`${penchGates.length} gates across Madhya Pradesh`}
        gates={penchGates}
        bg="bg-paper"
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bark mb-4 leading-tight">
            Still deciding?
          </h2>
          <p className="text-lg text-bark/75 mb-8">
            Tell us your dates and party size — we&apos;ll recommend the gate (and resort) that
            fits your trip, then handle the permit, gypsy, and transfers end-to-end.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bark text-bone rounded-full font-medium hover:bg-sunrise hover:text-bark transition-colors"
          >
            Plan my safari <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function GateSection({
  title,
  subtitle,
  gates,
  bg = '',
}: {
  title: string;
  subtitle: string;
  gates: { slug: string; name: string; zone: string; description: string }[];
  bg?: string;
}) {
  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-sunrise mb-2">{subtitle}</p>
          <h2 className="font-display text-3xl md:text-4xl text-bark leading-tight">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gates.map((g) => (
            <Link
              key={g.slug}
              href={`/gates/${g.slug}`}
              className="group bg-bone p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 text-xs text-bamboo uppercase tracking-wider mb-2">
                <MapPin className="w-3 h-3" />
                {g.zone}
              </div>
              <h3 className="font-display text-2xl text-bark mb-3 group-hover:text-sunrise transition-colors">
                {g.name}
              </h3>
              <p className="text-sm text-bark/70 leading-relaxed mb-3">{g.description}</p>
              <span className="text-xs text-sunrise font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read 2026 guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
