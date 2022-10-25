/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/backend/:name',
        destination: 'http://localhost:5000/api/:name',
      },
    ]
  },
}

module.exports = nextConfig
