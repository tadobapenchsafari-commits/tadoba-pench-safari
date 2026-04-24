import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Header } from '@/components/marketing/header';
import { Footer } from '@/components/marketing/footer';
import { WhatsAppFloat } from '@/components/marketing/whatsapp-float';
import './globals.css';

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
    default: 'Tadoba Pench Safari — Expert-led jungle safaris in central India',
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
      </body>
    </html>
  );
}
