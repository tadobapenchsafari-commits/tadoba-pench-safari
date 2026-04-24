import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Tadoba & Pench Safari Blog',
  description:
    'Field notes, booking guides, and naturalist-written articles about Tadoba, Pench, and central India tiger safaris.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="max-w-3xl mb-16">
        <p className="divider-tribal max-w-xs mb-4">From the field</p>
        <h1 className="font-display text-5xl md:text-6xl text-bark leading-tight mb-6">
          Journal
        </h1>
        <p className="text-lg text-bark/70 leading-relaxed">
          Honest writing about Tadoba, Pench, and the craft of planning a safari
          worth remembering — by the people who spend most of their year in
          these forests.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogPosts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
              <Image
                src={p.heroImage}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-bark/60 mb-3 uppercase tracking-wider">
              <span>{new Date(p.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {p.readingMinutes} min read
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-bark leading-tight mb-3 group-hover:text-sunrise transition-colors">
              {p.title}
            </h2>
            <p className="text-bark/70 leading-relaxed mb-4">{p.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-bark group-hover:gap-4 transition-all">
              Read the story <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
