/** @type {import('next').NextConfig} */

const productionAPI = 'https://geluhorotancom-horotangelu17.b4a.run'
const developmentAPI = 'http://localhost:5000'

const apiDomain =
  process.env.NODE_ENV === 'production' ? productionAPI : developmentAPI

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiDomain}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
