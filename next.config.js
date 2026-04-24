/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'commons.wikimedia.org' },
      { protocol: 'https', hostname: 'www.tadobaaranyavilla.com' },
      { protocol: 'https', hostname: 'tadobaaranyavilla.com' },
      { protocol: 'https', hostname: 'junglehometadoba.com' },
      { protocol: 'https', hostname: 'www.junglehometadoba.com' },
    ],
  },
};

module.exports = nextConfig;
