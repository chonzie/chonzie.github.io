// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  // Optional: Add this if you're using client-side routing
  // trailingSlash: true,
};

module.exports = nextConfig;
