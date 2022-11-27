

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
  vueI18n: {"fallbackLocale":"it","messages":{"en":{"message":{"find_out_more":"➕ Find out more","event_date":"November 26th, 2022","event_time":"16:30h","copyright_notice":"© 2022. Association One Light, One Child","charity_event":"Charity event.","all_income_to_charity":"All net earnings will be donated to {link} to serve nutritious school meals to children living in some of the world’s poorest countries. The promise of a good meal attracts these hungry children into the classroom, giving them the energy to learn and hope for a better future.","home":"Home","about":"About","sign_up":"🫶 Donate","about_intro":"We are a group of exchange students with the aim of improving our world. For this purpose, we have created the Association One Light, One Child, to organise the charity hike of the same name.","members":"Members","itinerary":"Itinerary","departure":"Departure","arrival":"Arrival","marys_meals_intro":"","marys_meals_description":"Mary's Meals is an NGO which provides school meals to children living in some of the world’s poorest countries. We will donate all of our earnings to them. Specifically, for every 20,40 CHF raised, they can feed a child for an entire school year, about 9 months.","project":"Project","project_intro":"We work to create better living conditions for children in need","project_description":"On November 26th, we are organizing a walk on Monte San Salvatore with the motto \"One Light, One Child.\" We would like to walk together with participants to the top of the mountain via one of the paths from the base, having each person bring a light. The idea is that each light would represent one of the children for whom we would raise funds. To be more precise, for every 20 francs raised we can feed one child for about 9 months (the entire school year). Therefore, we would like to get as much community involvement as possible.","general_conditions_participation":"General conditions of participation","data_protection":"Data protection","content_only_in_italian":"This content is only available in italian.","comment_departure_bus_stop":"3 minute walk from the bus stop “Pazzallo, Paese”","departure_place":"End of Via Funicolare","arrival_place":"Top of Monte San Salvatore","got_it":"✅ Got it","information":"Information","warning_redirect_marysmeals":"On the next website, please choose to go to the Spanish website.","warning":"Warning!","price":"Price","free":"Free","donate_as_much_as_you_want":"You can donate as much as you want, but it is optional!","contact":"💬 Contact","reach_out_to_us":"Reach out to us by any of the following channels","join_whatsapp_group":"To get real-time information about the event, join our WhatsApp group!","join":"Join us!","event_finished":"The event is now finished.","thanks_for_participating":"Thanks a lot for your participation!","thanks_body":"With your collaboration, we have been able to help Mary's Meals provide food for more than 22 children! This is a great achievement."}},"it":{"message":{"find_out_more":"➕ Scopri di più","event_date":"26 novembre, 2022","event_time":"16:30h","copyright_notice":"© 2022. Association One Light, One Child","charity_event":"Evento di beneficenza.","all_income_to_charity":"Tutti i guadagni netti saranno devoluti a {link} per servire pasti scolastici nutrienti ai bambini che vivono in alcuni dei paesi più poveri del mondo. La promessa di un buon pasto attira questi bambini affamati in classe, dando loro l’energia per imparare e sperare in un futuro migliore.","home":"Home","about":"Chi siamo","sign_up":"🫶 Donare","about_intro":"Siamo un gruppo di studenti di scambio, con l'obiettivo di migliorari il nostro mondo. A questo scopo, abbiamo creato l'Associazione One Light, One Child, per organizzare la camminata di beneficenza con lo stesso nome.","members":"Membri","itinerary":"Percorso","departure":"Partenza","arrival":"Arrivo","marys_meals_intro":"","marys_meals_description":"Mary's Meals è una ONG che fornisce pasti scolastici ai bambini che vivono in alcuni dei Paesi più poveri del mondo. Doneremo a loro tutti i nostri guadagni. In particolare, per ogni 20,40 CHF raccolti, è possibile sfamare un bambino per un intero anno scolastico, circa 9 mesi.","project":"Progetto","project_intro":"Lavoriamo per creare migliori condizioni di vita per i bambini in difficoltà","project_description":"Il 26 Novembre, organizziamo una camminata sul Monte San Salvatore con il motto \"One Light, One Child”. Vorremmo camminare insieme ai partecipanti fino in cima alla montagna attraverso uno dei sentieri che parte dalla base, facendo portare da ciascuno una luce. L'idea è che ogni luce rappresenti uno dei bambini per i quali raccoglieremmo fondi. Per essere più precisi, per ogni 20 franchi raccolti possiamo sfamare un bambino per circa 9 mesi (l’intero anno scolastico). Per questo motivo vorremmo ottenere il maggior coinvolgimento possibile da parte della comunità.","general_conditions_participation":"Condizioni generali di partecipazione","data_protection":"Protezione dei dati","content_only_in_italian":"Questo contenuto è disponibile solo in italiano.","comment_departure_bus_stop":"3 minuti a piedi dalla fermata del bus “Pazzallo, Paese”","departure_place":"Fine di Via Funicolare","arrival_place":"Cima del Monte San Salvatore","got_it":"✅ Ho capito","information":"Informazione","warning_redirect_marysmeals":"Nella prossima pagina, scegli di andare sul sito spagnolo.","warning":"Attenzione!","price":"Prezzo","free":"Gratis","donate_as_much_as_you_want":"Potete donare quanto volete, ma è facoltativo!","contact":"💬 Contatto","reach_out_to_us":"Contattateci attraverso uno dei seguenti canali","join_whatsapp_group":"Per ricevere informazioni in tempo reale sull'evento, iscriviti al nostro gruppo WhatsApp!","join":"Unisciti!","event_finished":"L'evento è finito.","thanks_for_participating":"Grazzie mille per la vostra partecipazione!","thanks_body":"Grazie alla vostra collaborazione, siamo riusciti ad aiutare Mary's Meals a fornire cibo a più di 22 bambini! È un grandissimo risultato."}}}},
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
