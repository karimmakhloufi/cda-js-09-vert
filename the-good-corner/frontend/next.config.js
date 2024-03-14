/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
};

module.exports = nextConfig;
