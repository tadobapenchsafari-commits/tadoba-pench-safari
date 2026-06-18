import { Sparkles } from 'lucide-react';

export type QuickAnswer = { q: string; a: string };

/**
 * Visible 'At a glance' answer box.
 *
 * AEO pattern (Answer Engine Optimization): renders 3-6 short Q&A pairs as
 * an always-expanded card near the top of the page. Each answer is a single
 * sentence or two of extractable fact. LLM crawlers (ChatGPT, Perplexity,
 * Claude, Google AI Overviews) lift these directly when summarising the
 * page.
 *
 * NB: this component does NOT emit FAQPage JSON-LD — that schema lives on
 * the bottom-of-page FAQ section. Having two FAQPage blocks on one page
 * is permitted but Google's rich result picks one. Keeping schema on the
 * deeper FAQ block avoids ambiguity; Quick Answers exist purely as
 * extractable, indexable rendered text.
 */
export function QuickAnswers({
  items,
  heading = 'At a glance',
  bg = 'bg-paper',
}: {
  items: QuickAnswer[];
  heading?: string;
  bg?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className={`${bg} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sunrise mb-5">
          <Sparkles className="w-4 h-4" />
          {heading}
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {items.map((it, i) => (
            <div key={i}>
              <dt className="font-display text-lg text-bark mb-1.5 leading-snug">
                {it.q}
              </dt>
              <dd className="text-bark/75 leading-relaxed text-[15px]">
                {it.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
