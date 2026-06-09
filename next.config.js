/** @type {import('next').NextConfig} */

// ---- Security headers ----
// Content-Security-Policy directives. Keep as a single string so we can edit
// them in one place. Allowances explained inline:
//   script-src  inline + eval is required by Next.js's runtime hydration
//               script. GA4 + Tag Manager hosts are listed explicitly. Inline
//               JSON-LD <script> tags (Organization, Product, BlogPosting,
//               FAQPage, BreadcrumbList etc.) also need 'unsafe-inline'.
//   style-src   Tailwind / next/font emit inline <style> tags at build time.
//   img-src     'self' + the Next image optimisation pipeline. data: covers
//               base64 placeholders, https: covers any future external
//               source if we ever re-introduce remote images.
//   connect-src GA4 hosts + Vercel Insights probes (analytics.google.com,
//               *.analytics.google.com, *.googletagmanager.com).
//   frame-src   'self' only — no third-party iframes embedded.
//   object-src  'none' — no <object>/<embed> on the site.
//   form-action 'self' — contact form posts to the same origin.
//   frame-ancestors 'self' — equivalent to X-Frame-Options: SAMEORIGIN
//                   for browsers that prefer CSP.
//   upgrade-insecure-requests  forces any accidental http:// asset to https.
const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  // Tells browsers to only send the path (not the query) as the referrer for
  // cross-origin requests — privacy-friendly default that still preserves
  // referrer attribution for first-party analytics.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

  // Stops browsers from MIME-sniffing — script.js stays a script, image.png
  // stays an image. Prevents a class of upload-based XSS attacks.
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // Legacy header (CSP's frame-ancestors directive supersedes it on modern
  // browsers) but still respected by older bots and audit tools.
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },

  // The CSP itself, joined from cspDirectives above.
  { key: 'Content-Security-Policy', value: cspDirectives },

  // Forces HTTPS for 2 years and asks browsers to preload that fact.
  // includeSubDomains covers www. and any future subdomain.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },

  // Locks down browser features we don't use. camera / microphone disabled
  // outright; geolocation only on our own origin (if we ever need it for a
  // 'show me nearby gates' feature). interest-cohort=() opts out of FLoC.
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()' },

  // Lets the browser warm up DNS for any cross-origin link the user might
  // click — small perf win on the WhatsApp / phone links.
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig = {
  // All site imagery is self-hosted under /public/images. No external image
  // domains are allowed — keeps OG previews, SERP thumbnails, and Vercel
  // image optimisation entirely within our own infrastructure.
  images: {
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        // Apply to every route — pages, static assets, API.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // Permanent (308) redirects for the seven legacy package slugs.
  // The site moved to a 3-tier model (Budget / Mid / Luxury) in May 2026;
  // these redirects keep any inbound links or indexed search results from
  // 404'ing while passing SEO equity to the closest current equivalent.
  async redirects() {
    return [
      { source: '/packages/tadoba-classic-3n',          destination: '/packages/tadoba-budget-3n', permanent: true },
      { source: '/packages/tadoba-pench-combo-5n',      destination: '/packages/tadoba-mid-3n',    permanent: true },
      { source: '/packages/photography-week-tadoba',    destination: '/packages/tadoba-luxury-3n', permanent: true },
      { source: '/packages/pench-weekend-2n',           destination: '/packages',                  permanent: true },
      { source: '/packages/pench-classic-3n',           destination: '/packages',                  permanent: true },
      { source: '/packages/pench-birding-wildlife-4n',  destination: '/packages',                  permanent: true },
      { source: '/packages/pench-family-adventure-3n',  destination: '/packages',                  permanent: true },
    ];
  },
};

module.exports = nextConfig;
