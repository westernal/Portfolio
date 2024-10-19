/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com", "westernal.me"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

const nextConfig = {
  experimental: {
    appDir: true,
  },
};
