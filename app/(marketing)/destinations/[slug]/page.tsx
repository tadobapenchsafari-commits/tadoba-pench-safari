import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinations, packages, gates } from '@/data/content';
import { formatINR } from '@/lib/utils';

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) return {};
  return {
    title: `${d.name} Safari — ${d.tagline}`,
    description: d.description.slice(0, 160),
    alternates: { canonical: `/destinations/${d.slug}` },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) notFound();

  const destGates = gates.filter((g) => g.destination === d.slug);
  const destPacks = packages.filter((p) => p.destination === d.slug);

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden grain">
        <Image src={d.heroImage} alt={d.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <p className="divider-tribal max-w-xs text-bone/70 mb-4">
            {d.quickFacts[0].value}
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-bone leading-none mb-4">
            {d.name}
          </h1>
          <p className="text-xl text-bone/85 max-w-2xl italic">{d.tagline}</p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-canopy text-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {d.quickFacts.map((f) => (
            <div key={f.label}>
              <div className="text-xs uppercase tracking-wider text-bone/60 mb-1">
                {f.label}
              </div>
              <div className="font-display text-2xl text-sunrise">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="divider-tribal max-w-xs mb-6">About {d.name}</p>
        <p className="text-lg text-bark/80 leading-relaxed">{d.description}</p>
      </section>

      {/* Gates */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="divider-tribal max-w-xs mb-4">Safari gates</p>
            <h2 className="font-display text-4xl text-bark">
              Where to enter the forest
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destGates.map((g) => (
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
                  2026 guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation approach */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="divider-tribal max-w-xs mb-4">Where to stay</p>
          <h2 className="font-display text-4xl text-bark mb-4">
            Curated tie-up resorts across every gate
          </h2>
          <p className="text-lg text-bark/70 leading-relaxed">
            We are a travel agent — we don&apos;t run one resort and push
            everyone into it. Instead, we have tie-ups with premium, mid-tier,
            and budget properties near every major gate in {d.name}. Once
            we know your dates, group size, and budget, we recommend the
            property that genuinely fits — and handle the booking end-to-end.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-paper p-6 rounded-2xl">
            <div className="font-display text-3xl text-canopy mb-2">15+</div>
            <div className="text-sm text-bark/70">Tie-up resorts across {d.name}</div>
          </div>
          <div className="bg-paper p-6 rounded-2xl">
            <div className="font-display text-3xl text-canopy mb-2">Every tier</div>
            <div className="text-sm text-bark/70">Budget, mid, premium &amp; luxury</div>
          </div>
          <div className="bg-paper p-6 rounded-2xl">
            <div className="font-display text-3xl text-canopy mb-2">All gates</div>
            <div className="text-sm text-bark/70">Never a long drive to the park</div>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bone transition-colors"
        >
          Get a tailored recommendation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Packages */}
      {destPacks.length > 0 && (
        <section className="bg-paper py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="divider-tribal max-w-xs mb-4">Ready-to-book journeys</p>
              <h2 className="font-display text-4xl text-bark">
                Packages for {d.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destPacks.map((p) => (
                <Link
                  key={p.slug}
                  href={`/packages/${p.slug}`}
                  className="group bg-bone rounded-2xl overflow-hidden hover:shadow-xl flex"
                >
                  <div className="relative w-2/5 aspect-[4/5] overflow-hidden flex-shrink-0">
                    <Image
                      src={p.heroImage}
                      alt={p.name}
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
                      <p className="text-sm text-bark/60 line-clamp-3">
                        {p.shortDescription}
                      </p>
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
    </>
  );
}
