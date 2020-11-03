require('dotenv').config()
export default {
  target: 'static',
  // ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
   // custom set up router
  router: {

  },
  loading: {
    // color: 'blue',
    // height: '5px'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
     // 项目里要使用的 normalize.css 文件
    //  '@/assets/css/reset.less',
     '@/assets/css/normalize.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  server:{
    host: '127.0.0.1',
    port: 8888,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/proxy'
  ],
  // axios: {
  //   proxy: true,
  // },
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:7001',
  //   }
  // }
}
