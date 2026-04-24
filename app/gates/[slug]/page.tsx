import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Users, Camera, ArrowRight } from 'lucide-react';
import { gateDetails } from '@/data/gates-content';
import { gates, properties } from '@/data/content';
import { formatINR } from '@/lib/utils';

export function generateStaticParams() {
  return Object.keys(gateDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = gateDetails[slug];
  if (!d) return {};
  return {
    title: `${d.targetKeyword}: Permits, Timings, Sightings (2026 Guide)`,
    description: d.metaDescription,
    keywords: [d.targetKeyword.toLowerCase(), `${slug} gate`, `${slug} safari`, `${slug} tadoba permit`, `${slug} pench permit`],
    alternates: { canonical: `/gates/${slug}` },
    openGraph: {
      title: `${d.targetKeyword}: Complete 2026 Guide`,
      description: d.metaDescription,
      images: [{ url: d.heroImage }],
    },
  };
}

export default async function GatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = gateDetails[slug];
  if (!d) notFound();

  const baseGate = gates.find((g) => g.slug === slug);
  const destination = baseGate?.destination;
  const nearbyProps = properties.filter((p) => d.nearbyPropertySlugs.includes(p.slug));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative min-h-[60vh] flex items-end overflow-hidden grain">
        <Image src={d.heroImage} alt={`${d.targetKeyword} — Tadoba Pench Safari`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/60 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-bone">
          <p className="divider-tribal max-w-xs text-bone/70 mb-4">
            {destination === 'pench' ? 'Pench Tiger Reserve' : 'Tadoba Andhari Tiger Reserve'}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-4">
            {d.targetKeyword}
          </h1>
          <p className="text-lg text-bone/85 max-w-2xl italic">
            2026 guide — permits, timings, famous tigers, and how to plan.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-bark/80 leading-relaxed mb-12">{d.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="font-display text-2xl text-bark mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-canopy" /> Location
            </h2>
            <dl className="space-y-2 text-bark/80">
              {d.location.distanceFromNagpur && (
                <div>
                  <dt className="inline font-medium text-bark">From Nagpur: </dt>
                  <dd className="inline">{d.location.distanceFromNagpur}</dd>
                </div>
              )}
              {d.location.distanceFromChandrapur && (
                <div>
                  <dt className="inline font-medium text-bark">From Chandrapur: </dt>
                  <dd className="inline">{d.location.distanceFromChandrapur}</dd>
                </div>
              )}
              {d.location.distanceFromJabalpur && (
                <div>
                  <dt className="inline font-medium text-bark">From Jabalpur: </dt>
                  <dd className="inline">{d.location.distanceFromJabalpur}</dd>
                </div>
              )}
              <div>
                <dt className="inline font-medium text-bark">Nearest village: </dt>
                <dd className="inline">{d.location.nearestVillage}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="font-display text-2xl text-bark mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-canopy" /> Entry Schedule
            </h2>
            <dl className="space-y-2 text-bark/80">
              <div>
                <dt className="font-medium text-bark">Morning safari</dt>
                <dd>{d.entrySchedule.morningSlot}</dd>
              </div>
              <div>
                <dt className="font-medium text-bark">Evening safari</dt>
                <dd>{d.entrySchedule.eveningSlot}</dd>
              </div>
              <p className="text-sm text-bark/60 italic mt-3">{d.entrySchedule.note}</p>
            </dl>
          </div>
        </div>

        <div className="bg-paper p-6 rounded-2xl mb-16 flex items-start gap-4">
          <Users className="w-6 h-6 text-canopy flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl text-bark mb-2">Daily permits</h3>
            <p className="text-bark/80">{d.dailyPermits}</p>
          </div>
        </div>

        <h2 className="font-display text-3xl text-bark mb-6">Famous tigers & wildlife</h2>
        <ul className="list-disc pl-6 space-y-2 text-bark/80 leading-relaxed mb-12">
          {d.famousTigers.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="font-display text-2xl text-bark mb-4">Pick this gate if…</h2>
            <ul className="space-y-2 text-bark/80">
              {d.bestFor.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-canopy mt-1">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-bark mb-4">Trade-offs</h2>
            <ul className="space-y-2 text-bark/80">
              {d.tradeOffs.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-rust mt-1">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-display text-3xl text-bark mb-6">Season-by-season notes</h2>
        <div className="space-y-6 mb-16">
          {d.seasonalNotes.map((s) => (
            <div key={s.season} className="border-l-2 border-sunrise pl-6">
              <h3 className="font-display text-xl text-bark mb-1">{s.season}</h3>
              <p className="text-bark/80 leading-relaxed">{s.notes}</p>
            </div>
          ))}
        </div>

        {nearbyProps.length > 0 && (
          <>
            <h2 className="font-display text-3xl text-bark mb-6">Resorts near this gate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {nearbyProps.map((p) => (
                <Link
                  key={p.slug}
                  href={`/properties/${p.slug}`}
                  className="group bg-paper rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.heroImage}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-bark mb-1">{p.name}</h3>
                    <p className="text-sm text-bark/60 mb-2">
                      {p.distanceFromGateMeters}m from gate · {p.tier.toLowerCase()}
                    </p>
                    <p className="font-display text-canopy">
                      From {formatINR(p.priceFromINR)}
                      <span className="text-xs text-bark/60">/night</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 className="font-display text-3xl text-bark mb-6">Frequently asked questions</h2>
        <div className="space-y-6 mb-16">
          {d.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-lg text-bark mb-2">{f.q}</h3>
              <p className="text-bark/80 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-paper p-8 rounded-2xl text-center">
          <Camera className="w-8 h-8 text-canopy mx-auto mb-4" />
          <h3 className="font-display text-2xl text-bark mb-3">
            Ready to book a {d.targetKeyword.split(' ')[0]} Gate safari?
          </h3>
          <p className="text-bark/70 mb-6 max-w-xl mx-auto">
            We handle permits, gypsy, guide, and resort — so you arrive with a confirmed itinerary, not a long WhatsApp thread.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bone transition-colors"
          >
            Plan my safari <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
