export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s LideraT ',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/css/main.css'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/slide-menu.js', mode: 'client'},
    {src: '~/plugins/vue-screen.js', mode: 'client'},
    {src: '~/plugins/vue-agile.js', mode: 'client'},
    { src: '~/plugins/meta-seo.js' },
    {src: '~/plugins/vue-timeline.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-compress',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/svg'
  ],
  optimizedImages: {
    optimizeImages: true,
    handleImages: ['jpeg', 'png', 'webp', 'gif']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true
      }
    ],
    '@nuxt/content',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192
        },
        brotli: {
          threshold: 8192
        }
      }
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pageTransition: {
    name: 'fade'
  }
}
