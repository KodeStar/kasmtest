/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Test',
    description: 'The official store for Kasm supported applications.',
    icon: '/img/logo.svg',
    listUrl: 'https://kodestar.github.io/kasmtest/1.0/list.json',
    contactUrl: 'https://kasmweb.com/support',
    schema: '1.0',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasmtest/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
