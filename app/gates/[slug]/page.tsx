import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Users, Camera, ArrowRight, Compass } from 'lucide-react';
import { gateDetails } from '@/data/gates-content';
import { gates, packages } from '@/data/content';
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

  // All current packages are Tadoba 3N tier options; show all three on every gate.
  const matchingPacks = packages.slice(0, 3);

  // Sibling gates at the same reserve (for cross-linking)
  const siblingGates = gates
    .filter((g) => g.destination === destination && g.slug !== slug)
    .slice(0, 4);

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
        <Image src={d.heroImage} alt={`${d.targetKeyword} — Tadoba Pench Safari`} priority className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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
              <MapPin className="w-5 h-5 text-canopy" /> Location<span className="sr-only"> — {d.targetKeyword}</span>
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
              <Clock className="w-5 h-5 text-canopy" /> Entry Schedule<span className="sr-only"> — {d.targetKeyword}</span>
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

        <h2 className="font-display text-3xl text-bark mb-6">Famous tigers &amp; wildlife<span className="sr-only"> at {d.targetKeyword}</span></h2>
        <ul className="list-disc pl-6 space-y-2 text-bark/80 leading-relaxed mb-12">
          {d.famousTigers.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="font-display text-2xl text-bark mb-4">Pick {d.targetKeyword.split(' ')[0]} Gate if…</h2>
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
            <h2 className="font-display text-2xl text-bark mb-4">Trade-offs<span className="sr-only"> at {d.targetKeyword}</span></h2>
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

        <h2 className="font-display text-3xl text-bark mb-6">Season-by-season notes<span className="sr-only"> — {d.targetKeyword}</span></h2>
        <div className="space-y-6 mb-16">
          {d.seasonalNotes.map((s) => (
            <div key={s.season} className="border-l-2 border-sunrise pl-6">
              <h3 className="font-display text-xl text-bark mb-1">{s.season}</h3>
              <p className="text-bark/80 leading-relaxed">{s.notes}</p>
            </div>
          ))}
        </div>

        <div className="bg-paper p-6 rounded-2xl mb-16">
          <h2 className="font-display text-2xl text-bark mb-3">Where to stay near {d.targetKeyword}</h2>
          <p className="text-bark/80 leading-relaxed">
            We have tie-ups with multiple vetted resorts within easy reach of
            this gate — across budget, mid, premium and luxury tiers. Tell us
            your dates, group size and budget on the{' '}
            <Link href="/contact" className="text-canopy underline">
              contact page
            </Link>
            {' '}and we&apos;ll recommend the right property for your trip.
          </p>
        </div>

        {/* Recommended packages — passes authority from gate pages to package pages */}
        {matchingPacks.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-3xl text-bark mb-2">
              Packages that visit {d.targetKeyword.split(' ')[0]} Gate
            </h2>
            <p className="text-bark/70 mb-8">
              Curated trips that include safaris at {d.targetKeyword.split(' ')[0]} or sibling gates of the same reserve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {matchingPacks.map((p) => (
                <Link
                  key={p.slug}
                  href={`/packages/${p.slug}`}
                  className="group bg-paper rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.heroImage} alt={`${p.name} — recommended package for ${d.targetKeyword} visitors`} sizes="(max-width: 768px) 100vw, 33vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={1600} height={1200} />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-bamboo uppercase tracking-wider mb-2">
                        {p.durationNights}N / {p.durationDays}D · {p.safariCount} safaris
                      </div>
                      <h3 className="font-display text-lg text-bark mb-2 leading-snug">
                        {p.name}
                      </h3>
                    </div>
                    <div className="font-display text-base text-canopy mt-3">
                      From {formatINR(p.priceFromINR)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Sibling gates — internal linking across the gate cluster */}
        {siblingGates.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-3xl text-bark mb-2">
              Other gates at {destination === 'pench' ? 'Pench' : 'Tadoba'}
            </h2>
            <p className="text-bark/70 mb-6">
              Compare with sibling gates to find the right zone for your trip.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {siblingGates.map((g) => (
                <Link
                  key={g.slug}
                  href={`/gates/${g.slug}`}
                  className="group flex items-center gap-2 bg-paper hover:bg-canopy hover:text-bone px-4 py-3 rounded-xl text-sm transition-colors"
                >
                  <Compass className="w-4 h-4 text-canopy group-hover:text-sunrise shrink-0" />
                  <span>{g.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <h2 className="font-display text-3xl text-bark mb-6">{d.targetKeyword.split(' ')[0]} Gate — frequently asked questions</h2>
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
