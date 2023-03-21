import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d92f0542 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _e568de0e = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _13393737 = () => interopDefault(import('../pages/admin/advertise/index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _f57ceefc = () => interopDefault(import('../pages/admin/bank/index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _9265b178 = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _21fdd224 = () => interopDefault(import('../pages/admin/customer/index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _06142318 = () => interopDefault(import('../pages/admin/customer_request/index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _a7c320e0 = () => interopDefault(import('../pages/admin/logout/index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _d6745ec0 = () => interopDefault(import('../pages/admin/member/index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _8895f1aa = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _10aba982 = () => interopDefault(import('../pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _1574f316 = () => interopDefault(import('../pages/admin/productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _4caea2ba = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _2ddaec0b = () => interopDefault(import('../pages/admin/report_card/index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _5be5f50c = () => interopDefault(import('../pages/admin/txn/index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _915eae16 = () => interopDefault(import('../pages/admin/txn_type/index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _97364db8 = () => interopDefault(import('../pages/admin/walletin/index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _4639e245 = () => interopDefault(import('../pages/admin/walletout/index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _596f7552 = () => interopDefault(import('../pages/admin/customer_request/topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _c0992f50 = () => interopDefault(import('../pages/admin/customer_request/withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _cee0b18c = () => interopDefault(import('../pages/admin/product/productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _ad7f423c = () => interopDefault(import('../pages/admin/advertise/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _e79cc44c = () => interopDefault(import('../pages/admin/product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _2a24e2ac = () => interopDefault(import('../pages/admin/product/_id/index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _51cec1d1 = () => interopDefault(import('../pages/admin/stock/_id/index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _54b5f7df = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _d92f0542,
    name: "admin"
  }, {
    path: "/login",
    component: _e568de0e,
    name: "login"
  }, {
    path: "/admin/advertise",
    component: _13393737,
    name: "admin-advertise"
  }, {
    path: "/admin/bank",
    component: _f57ceefc,
    name: "admin-bank"
  }, {
    path: "/admin/category",
    component: _9265b178,
    name: "admin-category"
  }, {
    path: "/admin/customer",
    component: _21fdd224,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _06142318,
    name: "admin-customer_request"
  }, {
    path: "/admin/logout",
    component: _a7c320e0,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _d6745ec0,
    name: "admin-member"
  }, {
    path: "/admin/orders",
    component: _8895f1aa,
    name: "admin-orders"
  }, {
    path: "/admin/product",
    component: _10aba982,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _1574f316,
    name: "admin-productInuse"
  }, {
    path: "/admin/report",
    component: _4caea2ba,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _2ddaec0b,
    name: "admin-report_card"
  }, {
    path: "/admin/txn",
    component: _5be5f50c,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _915eae16,
    name: "admin-txn_type"
  }, {
    path: "/admin/walletin",
    component: _97364db8,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _4639e245,
    name: "admin-walletout"
  }, {
    path: "/admin/customer_request/topup",
    component: _596f7552,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _c0992f50,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/product/productlist",
    component: _cee0b18c,
    name: "admin-product-productlist"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _ad7f423c,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _e79cc44c,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/:id",
    component: _2a24e2ac,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _51cec1d1,
    name: "admin-stock-id"
  }, {
    path: "/",
    component: _54b5f7df,
    name: "index"
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
