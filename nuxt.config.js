export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '1light1child',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: {
        en: {
          message: {
            find_out_more: 'Find out more',
            event_date: 'November 26th, 2022',
            copyright_notice: '© 2022. Association One Light, One Child',
            charity_event: 'Charity event.',
            all_income_to_charity: 'All net earnings will be donated to {link} to serve nutritious school meals to children living in some of the world’s poorest countries. The promise of a good meal attracts these hungry children into the classroom, giving them the energy to learn and hope for a better future.',
          }
        },
        it: {
          message: {
            find_out_more: 'Scopri di più',
            event_date: '26 novembre, 2022',
            copyright_notice: '© 2022. Association One Light, One Child',
            charity_event: 'Evento di beneficenza.',
            all_income_to_charity: 'Tutti i guadagni netti saranno devoluti a {link} per servire pasti scolastici nutrienti ai bambini che vivono in alcuni dei paesi più poveri del mondo. La promessa di un buon pasto attira questi bambini affamati in classe, dando loro l’energia per imparare e sperare in un futuro migliore.',
          }
        }
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
