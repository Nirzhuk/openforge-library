/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production'

const imagesProdLoader = isDev ? {} : {
  images: { //https://github.com/vercel/next.js/issues/21079
    loader: "imgix",
    path: "https://noop/"
  }
}
module.exports = {
  reactStrictMode: true,
  // Use the prefix in production and not development.
  assetPrefix: isDev ? '' : '/openforge-library/',
  basePath: isDev ? '' : '/openforge-library',
}