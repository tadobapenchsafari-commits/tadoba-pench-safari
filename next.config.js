/** @type {import('next').NextConfig} */
const nextConfig = {
  // All site imagery is self-hosted under /public/images. No external image
  // domains are allowed — keeps OG previews, SERP thumbnails, and Vercel
  // image optimisation entirely within our own infrastructure.
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
