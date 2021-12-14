/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  generateBuildId: () => 'build',
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@assets/styles/main.scss";`,
  },
}
