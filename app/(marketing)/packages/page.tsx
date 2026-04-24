import Link from 'next/link';
import Image from 'next/image';
import { packages } from '@/data/content';
import { formatINR } from '@/lib/utils';

export const metadata = {
  title: 'Safari Packages — Curated journeys in Tadoba & Pench',
  description: 'Ready-to-book safari packages for every traveler.',
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-bark text-bone py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">
            Curated journeys
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Thoughtful packages, <span className="italic text-sunrise">honest pricing.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((p) => (
            <Link
              key={p.slug}
              href={`/packages/${p.slug}`}
              className="group bg-paper rounded-2xl overflow-hidden hover:shadow-xl flex flex-col md:flex-row"
            >
              <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                <Image
                  src={p.heroImage}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-bamboo uppercase tracking-wider mb-2">
                    {p.durationNights}N / {p.durationDays}D · {p.safariCount} safaris
                  </div>
                  <h3 className="font-display text-2xl text-bark mb-3">{p.name}</h3>
                  <p className="text-sm text-bark/70 line-clamp-3 mb-6">
                    {p.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-bark/10">
                  <div className="text-xs text-bark/50 uppercase tracking-wide">From</div>
                  <div className="font-display text-2xl text-canopy">
                    {formatINR(p.priceFromINR)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
