/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        search: "",
      },
    ],
  },
};

const nextConfig = {
  experimental: {
    appDir: true,
  },
};
