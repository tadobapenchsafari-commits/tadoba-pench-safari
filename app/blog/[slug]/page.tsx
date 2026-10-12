import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { metaDescription } from '@/lib/utils';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: metaDescription(p.excerpt),
    keywords: p.keywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.excerpt,
      type: 'article',
      publishedTime: p.publishedAt,
      images: [
        {
          url: `/og/blog-${p.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: p.title,
        },
      ],
    },
  };
}

function renderMarkdown(md: string) {
  const lines = md.trim().split('\n');
  const out: React.ReactElement[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      out.push(
        <h2 key={key++} className="font-display text-3xl text-bark mt-12 mb-4">
          {line.replace(/^##\s+/, '')}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      out.push(
        <h3 key={key++} className="font-display text-2xl text-bark mt-8 mb-3">
          {line.replace(/^###\s+/, '')}
        </h3>
      );
      i++;
      continue;
    }

    // Table (starts with |)
    if (line.startsWith('|')) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(lines[i]);
        i++;
      }
      const header = rows[0].split('|').slice(1, -1).map((c) => c.trim());
      const body = rows.slice(2).map((r) => r.split('|').slice(1, -1).map((c) => c.trim()));
      out.push(
        <div key={key++} className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-bark/20">
                {header.map((h, j) => (
                  <th key={j} className="text-left py-2 px-3 font-display text-bark">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, r) => (
                <tr key={r} className="border-b border-bark/10">
                  {row.map((cell, c) => (
                    <td key={c} className="py-2 px-3 text-bark/80" dangerouslySetInnerHTML={{ __html: inline(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace(/^-\s+/, ''));
        i++;
      }
      out.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 text-bark/80 leading-relaxed mb-6">
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      out.push(
        <ol key={key++} className="list-decimal pl-6 space-y-2 text-bark/80 leading-relaxed mb-6">
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph — collect consecutive non-blank, non-special lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].startsWith('- ') &&
      !lines[i].startsWith('|') &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    out.push(
      <p
        key={key++}
        className="text-lg text-bark/80 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: inline(paraLines.join(' ')) }}
      />
    );
  }

  return out;
}

function inline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-bark">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-canopy underline hover:text-sunrise">$1</a>');
}

const SITE_URL = 'https://www.tadobapenchsafari.com';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.heroImage.startsWith('http') ? post.heroImage : `${SITE_URL}${post.heroImage}`;
  const wordCount = post.content ? post.content.split(/\s+/).filter(Boolean).length : undefined;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    url: pageUrl,
    keywords: post.keywords,
    wordCount,
    timeRequired: `PT${post.readingMinutes}M`,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Organization',
      name: 'Tadoba Pench Safari',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tadoba Pench Safari',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-badge-600.jpg`,
        width: 1200,
        height: 400,
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article>
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image src={post.heroImage} alt={`${post.title} — Tadoba Pench Safari blog`} priority className="absolute inset-0 w-full h-full object-cover" width={1600} height={686} />
          <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/40 to-transparent" />
          {post.heroCredit && (
            <p className="absolute bottom-2 right-3 text-[11px] text-bone/70">Photo © {post.heroCredit}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-bark/60 hover:text-sunrise mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to journal
          </Link>

          <div className="flex items-center gap-4 text-xs text-bark/60 mb-4 uppercase tracking-wider">
            <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingMinutes} min read
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-bark leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-bark/70 italic leading-relaxed mb-10">
            {post.excerpt}
          </p>

          {/* AEO: TLDR box (LLMs extract this verbatim) + key facts */}
          {(post.tldr || post.keyFacts) && (
            <aside className="bg-paper border-l-4 border-sunrise rounded-r-2xl p-6 mb-10">
              {post.tldr && (
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-sunrise mb-2 font-medium">
                    TL;DR
                  </div>
                  <p className="text-bark/85 leading-relaxed">{post.tldr}</p>
                </div>
              )}
              {post.keyFacts && post.keyFacts.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-bark/60 mb-2 font-medium">
                    Key facts
                  </div>
                  <ul className="space-y-1.5">
                    {post.keyFacts.map((f, i) => (
                      <li
                        key={i}
                        className="text-sm text-bark/80 leading-relaxed pl-4 relative before:content-['•'] before:text-sunrise before:absolute before:left-0"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          )}

          {/* Author byline (E-E-A-T signal — Experience, Expertise, Authority, Trust) */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-bark/10">
            <div className="w-12 h-12 rounded-full bg-canopy/15 flex items-center justify-center font-display text-canopy text-lg">
              TPS
            </div>
            <div className="text-sm">
              <div className="font-medium text-bark">Tadoba Pench Safari editorial team</div>
              <div className="text-bark/60">
                Written by our resident naturalists. Verified against current
                forest-department circulars and field reports.
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">{renderMarkdown(post.content)}</div>

          <div className="mt-16 pt-10 border-t border-bark/10">
            <p className="divider-tribal max-w-xs mb-4">Plan your trip</p>
            <h3 className="font-display text-3xl text-bark mb-4">
              Ready to walk the forest?
            </h3>
            <p className="text-bark/70 mb-6">
              We'll handle permits, property, and every small thing in between.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bone transition-colors"
            >
              Plan my safari
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
