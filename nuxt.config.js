import translations from './i18n'

export default {

  mode: 'universal',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  env: {
    SHARK_ATE_CABLE: true,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Did the shark eat the cable?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Doctors Answer' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://nuxt-community.github.io/nuxt-i18n
    ['nuxt-i18n', {

    }],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },

  i18n: {
    langDir: 'i18n/',
    defaultLocale: 'en',
    locales: ['en', 'vi'].map(iso => ({ code: iso, file: `${iso}.js`})),
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
