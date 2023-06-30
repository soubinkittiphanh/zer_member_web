import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Website',
    // title: 'Jack42',
    title: 'PeeAir4',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/jack.jpeg' }
      { rel: 'icon', type: 'image/x-icon', href: '/peeair.jpeg' }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/ca11dcec40.js",
        rel: "stylesheet"
      },
      { src: '/fontawesome.js', defer: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/mycss.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
      // { src: '~/plugins/chart.js', ssr: false },
  plugins: [
    { src: '~/plugins/vue-sweetalert2', ssr: false },
    {
      src: '@/plugins/apex-chart.js',
      mode: 'client',
    },
    { src: '~/plugins/fontawesome.js', ssr: false },
    // { src: '~/plugins/vuelidate.js', mode: 'client' }
    // { src: '~/plugins/comma-thousand.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://nodejsclusters-124154-0.cloudclusters.net'// UAT API
    baseURL: 'https://nodejsclusters-99563-0.cloudclusters.net' //PRODUCTION PEEAIR4 API
    // baseURL: 'https://nodejsclusters-130797-0.cloudclusters.net' //PRODUCTION JACK42 API
    // baseURL: 'http://localhost:8080',
    // credentials: true,
    // headers: {
    //   common: {
    //     'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    //   }
    // },
    // proxy: true
    // baseURL: 'https://sitapionlinestore.herokuapp.com'
    // baseURL: 'https://nodejsclusters-99563-0.cloudclusters.net'
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          expires_in: 60,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'mem_auth', method: 'post' },
          logout: { url: 'logout', method: 'get' },
          user: { url: 'me', method: 'get' },
        }
      }
    },
    redirect: {
      login: '/admin/login',
      logout: false,
      callback: '/admin/login',
      home: '/admin/login',
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
