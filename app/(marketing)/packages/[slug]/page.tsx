import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { packages } from '@/data/content';
import { formatINR } from '@/lib/utils';

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = packages.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.name, description: p.shortDescription };
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  const p = packages.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <>
      <section className="relative min-h-[55vh] flex items-end overflow-hidden grain">
        <Image src={p.heroImage} alt={p.name} fill priority className="object-cover" />
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
            <a
              href="https://wa.me/919999999999"
              className="block w-full text-center mt-3 border border-bark/20 py-3 rounded-full font-medium hover:bg-bark hover:text-bone transition-colors"
            >
              Customize on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
