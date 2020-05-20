import translations from './i18n'

export default {

  mode: 'universal',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  env: {
    SHARK_ATE_CABLE: true,
    GITHUB_REPO_HOMEPAGE: process.env.GITHUB_REPO_HOMEPAGE,
  },

  head: {
    title: 'Did the shark eat the cable?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Did the shark eat the cable?' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css' },
    ],
    script: [
      {
        body: true,
        src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ec4d9631b651a11',
      },
    ],
  },

  loading: false,

  css: [
    '~/assets/scss/main.scss',
  ],

  plugins: [
  ],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  modules: [
    // Doc: https://nuxt-community.github.io/nuxt-i18n
    ['nuxt-i18n', {
      seo: true,
      baseUrl: process.env.APP_URL || 'http://localhost',
    }],
  ],

  build: {
    extend (config, ctx) {
    },
  },

  i18n: {
    langDir: 'i18n/',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
      {
        code: 'vi',
        iso: 'vi-VN',
        file: 'vi.js',
      },
    ],
    loadLanguagesAsync: true,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
      messages: translations,
    },
    strategy: 'prefix',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
  },
}
