import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { TrackedLink } from '@/components/marketing/tracked-link';
import { PlanMySafariForm } from '@/components/marketing/plan-safari-form';

// Partner resort page. Facts from the resort's own site and its Google
// listing (Aug 2026); update the rating line and rates if they change.
const SITE_URL = 'https://www.tadobapenchsafari.com';
const PAGE_URL = `${SITE_URL}/stays/tadoba-aranya-villa`;
const IMG = '/images/stays/tadoba-aranya-villa-';
const WA =
  'https://wa.me/918208090280?text=' +
  encodeURIComponent("Hi! I'd like a quote for Tadoba Aranya Villa + Kolara safaris. Dates: ");

export const metadata: Metadata = {
  title: 'Tadoba Aranya Villa Resort — Kolara Gate Stay + Safari Booking',
  description:
    'Tadoba Aranya Villa, minutes from Kolara gate: 12 rooms + family room, pool, machan, all meals included. Book your stay and Kolara safaris together.',
  alternates: { canonical: '/stays/tadoba-aranya-villa' },
  openGraph: {
    title: 'Tadoba Aranya Villa Resort — Kolara Gate, Tadoba',
    description: 'Minutes from Kolara gate. Pool, machan, all meals included. Stay + safari booked together.',
    type: 'website',
    images: [{ url: '/og/stay-tadoba-aranya-villa.jpg', width: 1200, height: 630, alt: 'Tadoba Aranya Villa Resort pool at dusk' }],
  },
};

const rooms = [
  { name: 'Deluxe Room', price: '₹7,000', unit: 'per room / night', note: '8 rooms · king bed · AC · marble floor, wood-panelled walls', img: 'deluxe-room-bed-wide-1280w.webp' },
  { name: 'Premium Super Deluxe', price: '₹8,500', unit: 'per room / night', note: '4 rooms · king bed + sofa-cum-bed · sleeps three · timber ceiling', img: 'premium-super-deluxe-room-tv-lounge-1280w.webp' },
  { name: 'Family Room', price: '₹3,200', unit: 'per bed / night', note: 'One room, eight beds (₹25,600 for the whole room) · families and groups', img: 'dining-hall-wide-1280w.webp', caption: 'Pictured: the dining hall, which seats forty' },
];

const faqs = [
  { q: 'How far is Tadoba Aranya Villa from Kolara gate?', a: 'A few minutes by road, so you are at the barrier before it opens for the morning safari. The resort packs breakfast for early departures.' },
  { q: 'Are meals included?', a: 'Yes. Breakfast, lunch and dinner are included in every room rate, with a packed breakfast for the morning safari. Vegetarian and Jain food is cooked to order.' },
  { q: 'How far is it from Nagpur?', a: 'About 120 km from Nagpur airport — roughly two and a half hours via the Umred–Chimur road. Kolara is the closest Tadoba gate to Nagpur.' },
  { q: 'Can you book Kolara safari permits with the stay?', a: 'Yes. We book gypsy safaris on the official Tadoba portal alongside your room, and plan the gate timings around the resort. Official core safari fees are ₹5,800–₹12,800 per jeep (up to 6 guests), depending on the day and how far ahead you book.' },
  { q: 'What are the room rates?', a: 'Deluxe ₹7,000 and Premium Super Deluxe ₹8,500 per room per night; the family room is ₹3,200 per bed (eight beds). All rates include all meals. Ask us for a combined stay + safari quote.' },
  { q: 'Is it good for groups?', a: 'Yes. The family room sleeps eight, the dining hall seats forty, and the whole property can be booked for groups and off-sites.' },
];

const hotelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Tadoba Aranya Villa Resort',
  description:
    'Resort near Kolara gate, Tadoba Andhari Tiger Reserve, with 12 rooms plus an eight-bed family room, a swimming pool, a machan and all meals included.',
  url: PAGE_URL,
  sameAs: ['https://www.tadobaaranyavilla.com'],
  image: [`${SITE_URL}${IMG}swimming-pool-gazebo-1920w.webp`, `${SITE_URL}${IMG}deluxe-room-bed-wide-1280w.webp`],
  address: { '@type': 'PostalAddress', addressLocality: 'Kolara, Chimur', addressRegion: 'Maharashtra', postalCode: '442903', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 20.394941, longitude: 79.3599673 },
  numberOfRooms: 13,
  priceRange: '₹3,200–₹8,500',
  amenityFeature: ['Swimming pool', 'All meals included', 'Air-conditioned rooms', 'Machan (watchtower)', 'Restaurant', 'Parking'].map((name) => ({
    '@type': 'LocationFeatureSpecification', name, value: true,
  })),
  containedInPlace: { '@type': 'TouristAttraction', name: 'Tadoba Andhari Tiger Reserve' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Kolara Gate', item: `${SITE_URL}/gates/kolara` },
    { '@type': 'ListItem', position: 3, name: 'Tadoba Aranya Villa Resort', item: PAGE_URL },
  ],
};

export default function AranyaVillaPage() {
  return (
    <>
      {[hotelJsonLd, faqJsonLd, breadcrumbJsonLd].map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      <section className="relative min-h-[70vh] flex items-end overflow-hidden grain">
        <Image src={`${IMG}swimming-pool-gazebo-1920w.webp`} alt="Swimming pool and gazebo at Tadoba Aranya Villa Resort, near Kolara gate" priority sizes="100vw" width={1920} height={1440} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-bone">
          <p className="divider-tribal max-w-xs text-bone/70 mb-4"><span>Partner stay · Kolara Gate</span></p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-4">
            Tadoba Aranya Villa <span className="italic text-sunrise">Resort</span>
          </h1>
          <p className="text-lg md:text-xl text-bone/85 max-w-2xl mb-8">
            Minutes from Tadoba&apos;s Kolara gate. Twelve rooms and a family room, a pool, a machan at the edge of the teak — and all meals included. We book your stay and your safaris together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedLink event="resort_enquiry" params={{ resort: 'tadoba-aranya-villa', location: 'hero' }} href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-bone transition-colors">
              Get a stay + safari quote on WhatsApp
            </TrackedLink>
            <a href="#plan" className="inline-flex items-center justify-center px-8 py-4 bg-bone/10 backdrop-blur text-bone border border-bone/30 rounded-full font-medium hover:bg-bone/20 transition-colors">
              Send your dates
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-bark">
          {[
            ['Minutes', 'from Kolara gate'],
            ['12 + 1', 'rooms + 8-bed family room'],
            ['All meals', 'in every rate'],
            ['4.7 ★', '101 Google reviews (Aug 2026)'],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-3xl">{v}</div>
              <div className="text-sm text-bark/70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl text-bark mb-6">Why we put guests here</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ul className="space-y-4 text-bark/85">
            {[
              'Kolara is the closest Tadoba gate to Nagpur (about 120 km), and the resort is a few minutes from the barrier — no breakfast in a moving jeep.',
              'Packed pre-dawn breakfast for the morning safari, and cold rose-water towels when you get back.',
              'A pool with a shaded gazebo for the long gap between drives, and a two-storey machan on the property for sunset.',
              'Air-conditioned rooms — guests who came in peak May said it did not feel like May.',
              'The kitchen is what guests write about most: vegetarian and Jain cooked to order.',
            ].map((t) => (
              <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-canopy shrink-0 mt-0.5" />{t}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <Image src={`${IMG}machan-watchtower-960w.webp`} alt="Two-storey machan watchtower at Tadoba Aranya Villa" width={960} height={1280} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-xl w-full h-auto" />
            <Image src={`${IMG}garden-pathway-sunset-aerial-960w.webp`} alt="Garden pathway at sunset, Tadoba Aranya Villa" width={960} height={1280} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-xl w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-bark mb-2">Rooms &amp; rates</h2>
          <p className="text-bark/70 mb-8">Resort room rates, all meals included. Safaris are booked separately — ask us for one combined quote.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((r) => (
              <div key={r.name} className="bg-bone rounded-2xl overflow-hidden">
                <Image src={`${IMG}${r.img}`} alt={'caption' in r ? 'Dining hall at Tadoba Aranya Villa' : `${r.name} at Tadoba Aranya Villa`} width={1280} height={960} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-bark">{r.name}</h3>
                  <p className="text-bark mt-1"><span className="font-display text-2xl">{r.price}</span> <span className="text-sm text-bark/60">{r.unit}</span></p>
                  <p className="text-sm text-bark/70 mt-3">{r.note}</p>
                  {'caption' in r && <p className="text-xs text-bark/50 mt-2">{r.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl text-bark mb-4">Pair it with Kolara safaris</h2>
        <p className="text-bark/80 leading-relaxed max-w-3xl">
          Kolara is the quieter of Tadoba&apos;s two main core gates — fewer jeeps per slot and calmer sightings, which is why photographers prefer it. Three nights here with four safaris (Kolara, plus one Moharli or buffer drive for variety) is the stay we recommend most. Read the{' '}
          <Link href="/gates/kolara" className="text-canopy underline">Kolara gate guide</Link>, our{' '}
          <Link href="/blog/moharli-vs-kolara-gate-tadoba-honest-comparison" className="text-canopy underline">Moharli vs Kolara comparison</Link>, and{' '}
          <Link href="/blog/how-to-book-tadoba-safari-online" className="text-canopy underline">how safari booking works</Link>.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-display text-3xl text-bark mb-6">Tadoba Aranya Villa — questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-paper rounded-xl p-5">
              <summary className="faq-question font-medium text-bark cursor-pointer">{f.q}</summary>
              <p className="faq-answer text-bark/80 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div id="plan">
        <PlanMySafariForm context="a stay at Tadoba Aranya Villa (Kolara gate) with safaris" />
      </div>
    </>
  );
}
