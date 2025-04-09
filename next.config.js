/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "miro.medium.com",
      "media.licdn.com",
    ],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
