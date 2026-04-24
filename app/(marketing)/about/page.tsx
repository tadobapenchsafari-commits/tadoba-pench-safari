import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About — Tadoba Pench Safari',
  description: 'A safari team born and raised in the forests of central India.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-bark text-bone py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">Our story</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Born in these forests, <span className="italic text-sunrise">shaped by them.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none text-bark/80 space-y-6">
          <p className="text-xl leading-relaxed">
            We started with a small jeep, a deep knowledge of the Tadoba buffer,
            and a belief that a safari is only as good as the person reading the forest.
          </p>
          <p>
            Over the years, our small team has grown into a trusted operator across
            Tadoba and Pench, with tie-ups at over a dozen of the region's finest
            lodges. What hasn't changed is the way we work: handpicked properties,
            honest advice, and naturalists who know the difference between a fresh
            pugmark and yesterday's.
          </p>
          <p>
            Whether you're a first-time visitor hoping to see a tiger, a
            photographer chasing a specific shot, or a family looking for a safe,
            memorable holiday, we'll meet you where you are and take you into the
            forest the way it deserves to be seen.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="divider-tribal justify-center max-w-xs mx-auto mb-4">
            Ready for the forest?
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-bark mb-8">
            Let's plan your safari.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bark hover:text-bone transition-colors"
          >
            Start here <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
