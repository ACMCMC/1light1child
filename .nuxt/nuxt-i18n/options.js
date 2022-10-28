

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
  vueI18n: {"fallbackLocale":"it","messages":{"en":{"message":{"find_out_more":"Find out more","event_date":"November 26th, 2022","copyright_notice":"© 2022. Association One Light, One Child","all_income_to_charity":"Charity event. All net earnings will be donated to <a href=\"https://www.marysmeals.org/\">Mary’s Meals</a> to serve nutritious school meals to children living in some of the world’s poorest countries. The promise of a good meal attracts these hungry children into the classroom, giving them the energy to learn and hope for a better future."}},"it":{"message":{"find_out_more":"Scopri di più","event_date":"26 novembre, 2022","copyright_notice":"© 2022. Association One Light, One Child","all_income_to_charity":"Evento di beneficenza. Tutti i guadagni netti saranno devoluti a {link} per servire pasti scolastici nutrienti ai bambini che vivono in alcuni dei paesi più poveri del mondo. La promessa di un buon pasto attira questi bambini affamati in classe, dando loro l’energia per imparare e sperare in un futuro migliore."}}}},
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
