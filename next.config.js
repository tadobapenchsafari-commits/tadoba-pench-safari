/** @type {import('next').NextConfig} */
const nextConfig = {
  // All site imagery is self-hosted under /public/images. No external image
  // domains are allowed — keeps OG previews, SERP thumbnails, and Vercel
  // image optimisation entirely within our own infrastructure.
  images: {
    remotePatterns: [],
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
