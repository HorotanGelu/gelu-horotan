/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  loaders: [
    {
      test: /\.html$/,
      loader: 'html-loader?attrs[]=video:src',
    },
    {
      test: /\.mp4$/,
      loader: 'url?limit=10000&mimetype=video/mp4',
    },
    {
      test: /\.webm$/,
      loader: 'url?limit=10000&mimetype=video/webm',
    },
  ],
}

module.exports = nextConfig
