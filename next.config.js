module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['https://dzherelo.one'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
    localeDetection: false,
  },
  env:{}
}
