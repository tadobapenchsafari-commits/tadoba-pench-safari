import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { properties } from '@/data/content';
import { formatINR } from '@/lib/utils';

export const metadata = {
  title: 'All Properties — Boutique lodges in Tadoba & Pench',
  description:
    'Browse hand-picked safari lodges and resorts across Tadoba and Pench. Luxury, premium, mid-range, and budget options.',
};

export default function PropertiesPage() {
  return (
    <>
      <section className="bg-canopy text-bone py-24 grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">
            Hand-picked lodges
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Every lodge, <span className="italic text-sunrise">personally inspected.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <Link
              key={p.slug}
              href={`/properties/${p.slug}`}
              className="group bg-paper rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.heroImage}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-bone/95 text-bark text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-sunrise text-sunrise" />
                  {p.starRating}
                </div>
                <div className="absolute top-4 left-4 bg-bark/70 text-bone text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {p.tier.toLowerCase()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-bamboo uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3" />
                  {p.destination} · {p.distanceFromGateMeters}m
                </div>
                <h3 className="font-display text-xl text-bark mb-2">{p.name}</h3>
                <p className="text-sm text-bark/60 line-clamp-2 mb-4">
                  {p.shortDescription}
                </p>
                <div className="font-display text-lg text-canopy pt-4 border-t border-bark/10">
                  {formatINR(p.priceFromINR)}
                  <span className="text-xs text-bark/60">/night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
