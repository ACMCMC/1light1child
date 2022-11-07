import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d58f8a2e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _961fd4a4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _50da9132 = () => interopDefault(import('../pages/itinerary.vue' /* webpackChunkName: "pages/itinerary" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d58f8a2e,
    name: "about___it"
  }, {
    path: "/en",
    component: _961fd4a4,
    name: "index___en"
  }, {
    path: "/itinerary",
    component: _50da9132,
    name: "itinerary___it"
  }, {
    path: "/en/about",
    component: _d58f8a2e,
    name: "about___en"
  }, {
    path: "/en/itinerary",
    component: _50da9132,
    name: "itinerary___en"
  }, {
    path: "/",
    component: _961fd4a4,
    name: "index___it"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
