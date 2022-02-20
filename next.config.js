/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  generateBuildId: () => 'build',
  compiler: {
    styledComponents: true,
  },
  experimental: {
    swcFileReading: false,
  },
}
