import type { Metadata } from 'next';

// page.tsx is a client component and can't export metadata, so it lives here.
// Without this, /contact inherited the homepage's title.
export const metadata: Metadata = {
  title: 'Contact Us & Safari Enquiries',
  description:
    'Plan your Tadoba or Pench tiger safari: call or WhatsApp +91 82080 90280, email info@tadobapenchsafari.com, or send your dates for a custom itinerary.',
  alternates: { canonical: '/contact' },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://www.tadobapenchsafari.com/contact',
  name: 'Contact Tadoba Pench Safari',
  mainEntity: {
    '@type': 'TravelAgency',
    name: 'Tadoba Pench Safari',
    url: 'https://www.tadobapenchsafari.com',
    telephone: '+91-82080-90280',
    email: 'info@tadobapenchsafari.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1105, Pioneer Tulip, Jaitala',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      postalCode: '440036',
      addressCountry: 'IN',
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      {children}
    </>
  );
}
