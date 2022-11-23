import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d58f8a2e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0777448c = () => interopDefault(import('../pages/conditions.vue' /* webpackChunkName: "pages/conditions" */))
const _2a91f8fc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _879cc890 = () => interopDefault(import('../pages/data-protection.vue' /* webpackChunkName: "pages/data-protection" */))
const _961fd4a4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _50da9132 = () => interopDefault(import('../pages/itinerary.vue' /* webpackChunkName: "pages/itinerary" */))
const _06606157 = () => interopDefault(import('../pages/marys-meals.vue' /* webpackChunkName: "pages/marys-meals" */))
const _aa5524ce = () => interopDefault(import('../pages/perform-redirect-marysmeals.vue' /* webpackChunkName: "pages/perform-redirect-marysmeals" */))
const _1fc60916 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _7a887ff6 = () => interopDefault(import('../pages/redirect-marysmeals.vue' /* webpackChunkName: "pages/redirect-marysmeals" */))
const _be8d6628 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))

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
    path: "/conditions",
    component: _0777448c,
    name: "conditions___it"
  }, {
    path: "/contact",
    component: _2a91f8fc,
    name: "contact___it"
  }, {
    path: "/data-protection",
    component: _879cc890,
    name: "data-protection___it"
  }, {
    path: "/en",
    component: _961fd4a4,
    name: "index___en"
  }, {
    path: "/itinerary",
    component: _50da9132,
    name: "itinerary___it"
  }, {
    path: "/marys-meals",
    component: _06606157,
    name: "marys-meals___it"
  }, {
    path: "/perform-redirect-marysmeals",
    component: _aa5524ce,
    name: "perform-redirect-marysmeals___it"
  }, {
    path: "/project",
    component: _1fc60916,
    name: "project___it"
  }, {
    path: "/redirect-marysmeals",
    component: _7a887ff6,
    name: "redirect-marysmeals___it"
  }, {
    path: "/signup",
    component: _be8d6628,
    name: "signup___it"
  }, {
    path: "/en/about",
    component: _d58f8a2e,
    name: "about___en"
  }, {
    path: "/en/conditions",
    component: _0777448c,
    name: "conditions___en"
  }, {
    path: "/en/contact",
    component: _2a91f8fc,
    name: "contact___en"
  }, {
    path: "/en/data-protection",
    component: _879cc890,
    name: "data-protection___en"
  }, {
    path: "/en/itinerary",
    component: _50da9132,
    name: "itinerary___en"
  }, {
    path: "/en/marys-meals",
    component: _06606157,
    name: "marys-meals___en"
  }, {
    path: "/en/perform-redirect-marysmeals",
    component: _aa5524ce,
    name: "perform-redirect-marysmeals___en"
  }, {
    path: "/en/project",
    component: _1fc60916,
    name: "project___en"
  }, {
    path: "/en/redirect-marysmeals",
    component: _7a887ff6,
    name: "redirect-marysmeals___en"
  }, {
    path: "/en/signup",
    component: _be8d6628,
    name: "signup___en"
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
