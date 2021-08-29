/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production'

console.log(isDev)
module.exports = {
  reactStrictMode: true,
  // Use the prefix in production and not development.
  assetPrefix: isDev ? '' : '/openforge-library/',
  basePath: isDev ? '' : '/openforge-library',
  images: { //https://github.com/vercel/next.js/issues/21079
    loader: "imgix",
    path: "https://noop/",
  }
}