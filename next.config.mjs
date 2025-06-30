// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['157.230.240.97'],
    // domains: ['*'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
