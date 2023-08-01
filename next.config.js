/** @type {import('next').NextConfig} */
const nextConfig = {};
const nextTranslate = require("next-translate-plugin");
module.exports = nextTranslate({
  reactStrictMode: false,
  trailingSlash: true,
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  env: {
    END_POINT: process.env.BASE_API_URL_CLIENT,
    CLIENT_ID: process.env.CLIENT_ID,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.galaxycine.vn",
        port: "",
      },
      {
        protocol: "http",
        hostname: "staging.galaxycine.vn",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.galaxycine.vn",
        port: "",
      },
    ],
  },
});
