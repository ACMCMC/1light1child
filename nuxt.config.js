export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'One Light, One Child',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Join us on a solidarity hike in Lugano on November 26th! All earnings will be given to charity purposes to feed children in need.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Londrina+Solid&display=swap'
      },
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/sitemap',
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
            home: 'Home',
            about: 'About',
            sign_up: 'Sign up',
            about_intro: 'We are a group of exchange students with the aim of improving our world. For this purpose, we have created the Association One Light, One Child, to organise the charity hike of the same name.',
            members: 'Members',
            itinerary: 'Itinerary',
            departure: 'Departure',
            arrival: 'Arrival',
          }
        },
        it: {
          message: {
            find_out_more: 'Scopri di più',
            event_date: '26 novembre, 2022',
            copyright_notice: '© 2022. Association One Light, One Child',
            charity_event: 'Evento di beneficenza.',
            all_income_to_charity: 'Tutti i guadagni netti saranno devoluti a {link} per servire pasti scolastici nutrienti ai bambini che vivono in alcuni dei paesi più poveri del mondo. La promessa di un buon pasto attira questi bambini affamati in classe, dando loro l’energia per imparare e sperare in un futuro migliore.',
            home: 'Home',
            about: 'Chi siamo',
            sign_up: 'Iscrivermi',
            about_intro: 'Siamo un gruppo di studenti di scambio, con l\'obiettivo di migliorari il nostro mondo. A questo scopo, abbiamo creato l\'Associazione One Light, One Child, per organizzare la camminata di beneficenza con lo stesso nome.',
            members: 'Membri',
            itinerary: 'Percorso',
            departure: 'Partenza',
            arrival: 'Arrivo',
          }
        }
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: 'https://1light1child.cf',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  }
}
