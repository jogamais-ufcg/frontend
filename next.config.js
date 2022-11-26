/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports =
  process.env.NODE_ENV === 'production' ? withPWA(nextConfig) : nextConfig;
