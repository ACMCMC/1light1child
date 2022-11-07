

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"it","messages":{"en":{"message":{"find_out_more":"Find out more","event_date":"November 26th, 2022","copyright_notice":"© 2022. Association One Light, One Child","charity_event":"Charity event.","all_income_to_charity":"All net earnings will be donated to {link} to serve nutritious school meals to children living in some of the world’s poorest countries. The promise of a good meal attracts these hungry children into the classroom, giving them the energy to learn and hope for a better future.","home":"Home","about":"About","sign_up":"Sign up","about_intro":"We are a group of exchange students with the aim of improving our world. For this purpose, we have created the Association One Light, One Child, to organise the charity hike of the same name.","members":"Members"}},"it":{"message":{"find_out_more":"Scopri di più","event_date":"26 novembre, 2022","copyright_notice":"© 2022. Association One Light, One Child","charity_event":"Evento di beneficenza.","all_income_to_charity":"Tutti i guadagni netti saranno devoluti a {link} per servire pasti scolastici nutrienti ai bambini che vivono in alcuni dei paesi più poveri del mondo. La promessa di un buon pasto attira questi bambini affamati in classe, dando loro l’energia per imparare e sperare in un futuro migliore.","home":"Home","about":"Chi siamo","sign_up":"Iscrivermi","about_intro":"Siamo un gruppo di studenti di scambio, con l'obiettivo di migliorari il nostro mondo. A questo scopo, abbiamo creato l'Associazione One Light, One Child, per organizzare la camminata di beneficenza con lo stesso nome.","members":"Membri"}}}},
  vueI18nLoader: false,
  locales: ["en","it"],
  defaultLocale: "it",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en"},{"code":"it"}],
  localeCodes: ["en","it"],
  additionalMessages: [],
}

export const localeMessages = {}
