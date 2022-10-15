/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return {
      source: "/proxy",
      destination: "/proxy/name",
      permanent: false,
    };
  },
};

module.exports = nextConfig;
