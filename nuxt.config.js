import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s - cogni_flow',
    title: 'cogni_flow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/sass/index.sass',
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/pwa',
  ],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  vuetify: {
    customVariables: [],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {
    transpile: [/typed-vuex/]
  },
}
