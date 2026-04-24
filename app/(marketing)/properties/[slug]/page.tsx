import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, MapPin, Check, ArrowRight } from 'lucide-react';
import { properties, destinations, gates } from '@/data/content';
import { formatINR } from '@/lib/utils';

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.name, description: p.shortDescription };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const destination = destinations.find((d) => d.slug === p.destination);
  const gate = gates.find((g) => g.slug === p.nearestGate);

  return (
    <>
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:p-4 h-[60vh] md:h-[70vh]">
          <div className="relative md:col-span-2 rounded-xl overflow-hidden">
            <Image src={p.heroImage} alt={p.name} fill priority className="object-cover" />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2">
            {p.images.slice(0, 2).map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden">
                <Image src={img} alt={`${p.name} ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className="uppercase tracking-wider text-bamboo">{p.tier.toLowerCase()}</span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-sunrise text-sunrise" /> {p.starRating}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-bark leading-tight mb-4">
              {p.name}
            </h1>
            <div className="flex items-center gap-2 text-bark/70 mb-8">
              <MapPin className="w-4 h-4" />
              {destination?.name} · {p.distanceFromGateMeters}m from {gate?.name}
            </div>
            <p className="text-lg text-bark/80 leading-relaxed mb-10">
              {p.shortDescription}
            </p>

            <h2 className="font-display text-2xl text-bark mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {p.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm text-bark/80">
                  <Check className="w-4 h-4 text-canopy" /> {a}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit bg-paper p-8 rounded-2xl">
            <div className="text-xs uppercase tracking-wider text-bark/60 mb-1">From</div>
            <div className="font-display text-4xl text-canopy mb-6">
              {formatINR(p.priceFromINR)}
              <span className="text-sm text-bark/60 font-body">/night</span>
            </div>
            <Link
              href="/contact"
              className="block w-full text-center bg-sunrise text-bark py-3 rounded-full font-medium hover:bg-rust hover:text-bone transition-colors"
            >
              Check availability
            </Link>
            <a
              href="https://wa.me/919999999999"
              className="block w-full text-center mt-3 border border-bark/20 py-3 rounded-full font-medium hover:bg-bark hover:text-bone transition-colors"
            >
              WhatsApp us
            </a>
            <p className="text-xs text-bark/60 mt-4 text-center">
              No payment required to inquire
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
