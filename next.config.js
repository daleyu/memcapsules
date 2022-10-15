/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/proxy",
        destination: "/proxy/name",
        permanent: false,
      },
      {
        source: "/compose/:composerId",
        destination: "/compose/:composerId/0",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
