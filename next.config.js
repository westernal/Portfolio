/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  images: {
    domains: ["localhost", "res.cloudinary.com", "westernal.me"],
  },
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
};
