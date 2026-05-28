import Link from 'next/link';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

function formatTravelMonth(yyyymm: string): string {
  const [y, m] = yyyymm.split('-').map(Number);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[(m - 1) % 12]} ${y}`;
}

export function TestimonialsSection({
  testimonials,
  heading = 'What guests say',
  subheading = 'Honest words from people who actually travelled with us.',
  bg = 'bg-paper',
  showAllLink = true,
  limit,
}: {
  testimonials: Testimonial[];
  heading?: string;
  subheading?: string;
  bg?: string;
  showAllLink?: boolean;
  limit?: number;
}) {
  if (testimonials.length === 0) return null;
  const display = typeof limit === 'number' ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="divider-tribal max-w-xs mb-4">Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl text-bark leading-tight">
              {heading}
            </h2>
            <p className="text-bark/70 mt-3">{subheading}</p>
          </div>
          {showAllLink && (
            <Link
              href="/testimonials"
              className="text-sm font-medium text-bark hover:text-sunrise"
            >
              All reviews →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <article className="bg-bone rounded-2xl p-7 flex flex-col h-full relative">
      {t.sample && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.15em] bg-rust/15 text-rust px-2 py-1 rounded-full">
          Sample
        </span>
      )}

      <Quote className="w-6 h-6 text-sunrise mb-4 opacity-60" />

      <p className="text-bark/85 leading-relaxed italic mb-6 flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < t.rating ? 'fill-sunrise text-sunrise' : 'text-bark/15'
            }`}
          />
        ))}
      </div>

      <div className="text-sm">
        <div className="font-display text-bark">{t.name}</div>
        <div className="text-bark/60 text-xs mt-0.5">
          {t.city} · Travelled {formatTravelMonth(t.travelMonth)}
        </div>
      </div>
    </article>
  );
}
