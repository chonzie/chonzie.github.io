// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  distDir: 'out',
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: ['localhost', 'chonzie.github.io']
  },
  
  // Static export settings
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Disable features that cause issues with static export
  experimental: {
    optimizeCss: false,
  },
  
  // Performance optimizations
  staticPageGenerationTimeout: 1000,
  generateEtags: false,
  poweredByHeader: false,
  compress: false,
  
  // Disable React Strict Mode to prevent double rendering in development
  reactStrictMode: false,
};

export default nextConfig;
