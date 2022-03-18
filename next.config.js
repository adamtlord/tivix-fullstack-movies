/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org']
  },
  webpack5:false,
  env: {
    AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE: process.env.AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE,
    THEMOVIEDB_API_KEY: process.env.THEMOVIEDB_API_KEY,
    THEMOVIEDB_API_URL: process.env.THEMOVIEDB_API_URL,
    _LIVE_UPDATES: process.env._LIVE_UPDATES,
  }
}

module.exports = nextConfig
