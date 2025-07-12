/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  // any other config you use
  transpilePackages: ['@mellc-workspace/mellc-ui-ki'],
};

module.exports = nextConfig;
