import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Compass, Star, Clock, Users, Shield } from 'lucide-react';
import { destinations, properties, packages } from '@/data/content';
import { formatINR } from '@/lib/utils';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Tadoba Pench Safari',
  url: 'https://www.tadobapenchsafari.com',
  telephone: '+91-82080-90280',
  email: 'info@tadobapenchsafari.com',
  description:
    'Premium tiger safari experiences in Tadoba and Pench with curated resorts, expert naturalists, and end-to-end trip planning.',
  areaServed: [
    { '@type': 'Place', name: 'Tadoba Andhari Tiger Reserve, Maharashtra, India' },
    { '@type': 'Place', name: 'Pench Tiger Reserve, Madhya Pradesh, India' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time to visit Tadoba for tiger sightings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'April, May, and early June have the highest tiger sighting rates (80–95% across a four-safari package) because tigers concentrate around shrinking waterholes. November to February is more comfortable weather-wise, with sighting rates around 55–70%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book a Tadoba safari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core zone permits open 120 days in advance and peak-season slots sell out within 15–45 minutes. For March–June travel, the permit should be secured by January.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Tadoba or Pench better for a tiger safari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tadoba has a higher tiger density and better single-sighting odds. Pench offers more wildlife variety (leopards, wild dogs, sloth bears) and a quieter forest experience. For a 4–5 day trip, a combined Tadoba + Pench itinerary works best.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Tadoba safari cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A core-zone safari permit is roughly ₹2,500–3,500 per jeep (up to 6 guests), plus guide fees. Full packages including resort stay, safaris, meals, and transfers typically start from ₹15,000 per person for 2 nights.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Tadoba safaris open year-round?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tadoba core zones are closed every Tuesday year-round and completely shut from 1 July to 30 September for the monsoon. Buffer zones stay open during the monsoon.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden grain">
        <Image
          src="https://images.unsplash.com/photo-1615812214207-34e3be6812df?w=2400&q=80"
          alt="Bengal tiger in Tadoba forest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/30 via-bark/40 to-bark/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
          <div className="max-w-3xl">
            <p className="divider-tribal text-bone/70 max-w-xs mb-8">
              <span>Est. 2018</span>
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-bone leading-[0.95] mb-6">
              Walk the forest
              <br />
              <span className="italic text-sunrise">with those who know it best.</span>
            </h1>
            <p className="text-lg md:text-xl text-bone/85 max-w-xl leading-relaxed mb-10">
              Boutique safari experiences in Tadoba and Pench — curated by local
              wildlife specialists who have spent decades reading the forest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bone transition-colors"
              >
                Plan Your Safari
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/918208090280"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bone/10 backdrop-blur text-bone border border-bone/30 rounded-full font-medium hover:bg-bone/20 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-bark/40 backdrop-blur-md border-t border-bone/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value="94%" label="Tiger sighting rate" />
            <Stat value="12+" label="Resort partnerships" />
            <Stat value="4,500+" label="Guests hosted" />
            <Stat value="4.9 ★" label="Google rating" />
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mb-14">
          <p className="divider-tribal max-w-xs mb-4">Two forests, one story</p>
          <h2 className="font-display text-4xl md:text-5xl text-bark leading-tight">
            Choose where your
            <br />
            <span className="italic">wild journey</span> begins.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={d.heroImage}
                alt={d.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-bone">
                <p className="text-sm tracking-[0.2em] uppercase text-sunrise mb-2">
                  {d.quickFacts[0].value}
                </p>
                <h3 className="font-display text-4xl md:text-5xl mb-3">{d.name}</h3>
                <p className="text-bone/85 mb-6 max-w-sm italic">{d.tagline}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="divider-tribal max-w-xs mb-4">Curated journeys</p>
              <h2 className="font-display text-4xl md:text-5xl text-bark leading-tight">
                Thoughtful packages,
                <br />
                <span className="italic">honest pricing.</span>
              </h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-medium text-bark hover:text-sunrise"
            >
              View all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p) => (
              <Link
                key={p.slug}
                href={`/packages/${p.slug}`}
                className="group bg-bone rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-bone/95 backdrop-blur text-bark text-xs font-medium px-3 py-1 rounded-full">
                    {p.durationNights}N / {p.durationDays}D
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-bark leading-tight mb-2">
                    {p.name}
                  </h3>
                  <p className="text-sm text-bark/60 mb-4 line-clamp-2">
                    {p.shortDescription}
                  </p>
                  <div className="flex items-end justify-between pt-4 border-t border-bark/10">
                    <div>
                      <div className="text-xs text-bark/50 uppercase tracking-wide">From</div>
                      <div className="font-display text-xl text-canopy">
                        {formatINR(p.priceFromINR)}
                      </div>
                    </div>
                    <Compass className="w-5 h-5 text-sunrise group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="divider-tribal max-w-xs mb-4">Where you stay matters</p>
            <h2 className="font-display text-4xl md:text-5xl text-bark leading-tight">
              Boutique lodges,
              <br />
              <span className="italic">hand-picked by us.</span>
            </h2>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-bark hover:text-sunrise"
          >
            View all properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 6).map((p) => (
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
                <div className="absolute top-4 right-4 bg-bone/95 backdrop-blur text-bark text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-sunrise text-sunrise" />
                  {p.starRating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-bamboo uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3" />
                  {p.destination} · {p.distanceFromGateMeters}m from gate
                </div>
                <h3 className="font-display text-xl text-bark mb-2">{p.name}</h3>
                <p className="text-sm text-bark/60 line-clamp-2 mb-4">
                  {p.shortDescription}
                </p>
                <div className="flex items-end justify-between pt-4 border-t border-bark/10">
                  <div>
                    <div className="text-xs text-bark/50 uppercase tracking-wide">From</div>
                    <div className="font-display text-lg text-canopy">
                      {formatINR(p.priceFromINR)}<span className="text-xs text-bark/60">/night</span>
                    </div>
                  </div>
                  <span className="text-xs text-bark/50 uppercase tracking-wider">
                    {p.tier.toLowerCase()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-canopy text-bone py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="divider-tribal justify-center max-w-xs mx-auto mb-4 text-bone/70">
              Why travelers trust us
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Not a booking portal.
              <br />
              <span className="italic text-sunrise">Safari specialists.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Feature
              icon={<Compass className="w-6 h-6" />}
              title="Local-born guides"
              desc="Our naturalists grew up in these forests. They know the territories, the tigers, and when to wait."
            />
            <Feature
              icon={<Star className="w-6 h-6" />}
              title="Hand-picked lodges"
              desc="We personally inspect every property. No empty promises, no surprise disappointments."
            />
            <Feature
              icon={<Shield className="w-6 h-6" />}
              title="Flexible cancellation"
              desc="Plans change. Our fair policies protect your deposit when they do."
            />
            <Feature
              icon={<Users className="w-6 h-6" />}
              title="End-to-end care"
              desc="From airport pickup to permits to farewell dinner — one team, one point of contact."
            />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="divider-tribal justify-center max-w-xs mx-auto mb-4">
            Ready when you are
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-bark leading-tight mb-6">
            The forest is calling.
            <br />
            <span className="italic text-sunrise">Will you answer?</span>
          </h2>
          <p className="text-lg text-bark/70 mb-10 max-w-2xl mx-auto">
            Tell us when you want to travel, who's coming along, and what you
            hope to see. We'll craft the rest.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-bark text-bone rounded-full font-medium hover:bg-sunrise hover:text-bark transition-colors"
          >
            Start planning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-bone">
      <div className="font-display text-2xl md:text-3xl text-sunrise">{value}</div>
      <div className="text-xs tracking-wider uppercase text-bone/70">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="w-12 h-12 rounded-full bg-bone/10 flex items-center justify-center text-sunrise mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-sm text-bone/75 leading-relaxed">{desc}</p>
    </div>
  );
}
