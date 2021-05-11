export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DADAME - Professionisti del carretto siciliano ',
    htmlAttrs: {
      lang: 'it'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/icon/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/images/icon/apple-touch-icon.png' },
      { rel: 'icon', href: '/images/icon/favicon-32x32.png' },
      { rel: 'icon', href: '/images/icon/favicon-16x16.png' },
      { rel: 'manifest', href: '/images/icon/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@splidejs/splide/dist/css/themes/splide-default.min.css',
    '~assets/styles/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-splide.js',  mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile : [ 'vue-splide' ],
    // babel: {
    //   plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    // }
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const articlesRoutes = await $content().only(['slug']).fetch()

      return [  ...articlesRoutes.map(myroute => myroute.slug === '/index' ? '/' : '/blog/' + myroute.slug) ]
    },
    ignore: [
      '.nuxt', // buildDir
      'node_modules',
      'README.md'
    ],
    dir : '../server/public/',
    fallback: '404.html'
  }
}
