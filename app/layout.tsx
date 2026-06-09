import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, Inter } from 'next/font/google';
import { Header } from '@/components/marketing/header';
import { Footer } from '@/components/marketing/footer';
import { WhatsAppFloat } from '@/components/marketing/whatsapp-float';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tadobapenchsafari.com'),
  title: {
    default: 'Tadoba & Pench Tiger Safari — 2026 Booking & Packages',
    template: '%s | Tadoba Pench Safari',
  },
  description:
    'Book premium tiger safari experiences in Tadoba and Pench. Curated resorts, expert naturalists, and end-to-end trip planning by local wildlife specialists.',
  keywords: [
    'tadoba safari booking',
    'pench safari booking',
    'tadoba tiger reserve',
    'pench national park',
    'tadoba resort',
    'pench resort',
    'india tiger safari',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.tadobapenchsafari.com',
    siteName: 'Tadoba Pench Safari',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Tadoba & Pench Tiger Safari — curated boutique safaris in central India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Search-engine ownership verification.
  //
  //  google:  Already verified via DNS (sc-domain property in Search Console),
  //           so no meta-tag verification is required. Left commented in case
  //           we ever switch to URL-prefix verification.
  //
  //  msvalidate.01:  Bing Webmaster Tools. To activate:
  //    1. Sign in at https://www.bing.com/webmasters
  //    2. Add the site as a URL prefix property
  //    3. Choose 'HTML Meta Tag' verification method
  //    4. Replace BING_VERIFICATION_PLACEHOLDER below with the content value
  //       from the meta tag Bing generates
  //    5. Deploy, then click 'Verify' in the Bing dashboard
  verification: {
    // google: 'PASTE_GSC_HTML_TAG_VALUE_HERE',
    // other: { 'msvalidate.01': 'PASTE_BING_VALUE_HERE' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
