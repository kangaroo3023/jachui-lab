/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'ads-partners.coupang.com' },
      { protocol: 'https', hostname: 'image*.coupangcdn.com' },
      { protocol: 'https', hostname: 'thumbnail.coupangcdn.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'static.coupangcdn.com' },
    ],
  },
};

export default nextConfig;
