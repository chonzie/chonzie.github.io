// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/vietmoto' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vietmoto/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
