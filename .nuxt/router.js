import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dc33ff90 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _303d5658 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _3217bed0 = () => interopDefault(import('../pages/admin/advertise/index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _03626bfc = () => interopDefault(import('../pages/admin/ap/index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _5530e549 = () => interopDefault(import('../pages/admin/bank/index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _792df616 = () => interopDefault(import('../pages/admin/cancel_order/index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _12a2c88b = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _1744ff20 = () => interopDefault(import('../pages/admin/cod_order/index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _7dd3736b = () => interopDefault(import('../pages/admin/customer/index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _46d54e8a = () => interopDefault(import('../pages/admin/customer_request/index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _873f9adc = () => interopDefault(import('../pages/admin/login/index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _3da9b697 = () => interopDefault(import('../pages/admin/logout/index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _265117a7 = () => interopDefault(import('../pages/admin/member/index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _4d404e32 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _d0f075d0 = () => interopDefault(import('../pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _b1ff8bc6 = () => interopDefault(import('../pages/admin/productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _438c2c7e = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _0f35f164 = () => interopDefault(import('../pages/admin/report_card/index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _14d5cf3a = () => interopDefault(import('../pages/admin/rider/index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _7deb73d3 = () => interopDefault(import('../pages/admin/txn/index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _13264a3c = () => interopDefault(import('../pages/admin/txn_type/index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _103a7a6b = () => interopDefault(import('../pages/admin/walletin/index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _651869de = () => interopDefault(import('../pages/admin/walletout/index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _390edf99 = () => interopDefault(import('../pages/admin/customer_request/topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _4ff7f69e = () => interopDefault(import('../pages/admin/customer_request/withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _e1828b5a = () => interopDefault(import('../pages/admin/product/productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _796796a9 = () => interopDefault(import('../pages/admin/advertise/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _a2fbc93e = () => interopDefault(import('../pages/admin/product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _676ed7fa = () => interopDefault(import('../pages/admin/product/_id/index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _70ad496a = () => interopDefault(import('../pages/admin/stock/_id/index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _01538543 = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _563e5d10 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _dc33ff90,
    name: "admin"
  }, {
    path: "/product",
    component: _303d5658,
    name: "product"
  }, {
    path: "/admin/advertise",
    component: _3217bed0,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _03626bfc,
    name: "admin-ap"
  }, {
    path: "/admin/bank",
    component: _5530e549,
    name: "admin-bank"
  }, {
    path: "/admin/cancel_order",
    component: _792df616,
    name: "admin-cancel_order"
  }, {
    path: "/admin/category",
    component: _12a2c88b,
    name: "admin-category"
  }, {
    path: "/admin/cod_order",
    component: _1744ff20,
    name: "admin-cod_order"
  }, {
    path: "/admin/customer",
    component: _7dd3736b,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _46d54e8a,
    name: "admin-customer_request"
  }, {
    path: "/admin/login",
    component: _873f9adc,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _3da9b697,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _265117a7,
    name: "admin-member"
  }, {
    path: "/admin/orders",
    component: _4d404e32,
    name: "admin-orders"
  }, {
    path: "/admin/product",
    component: _d0f075d0,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _b1ff8bc6,
    name: "admin-productInuse"
  }, {
    path: "/admin/report",
    component: _438c2c7e,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _0f35f164,
    name: "admin-report_card"
  }, {
    path: "/admin/rider",
    component: _14d5cf3a,
    name: "admin-rider"
  }, {
    path: "/admin/txn",
    component: _7deb73d3,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _13264a3c,
    name: "admin-txn_type"
  }, {
    path: "/admin/walletin",
    component: _103a7a6b,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _651869de,
    name: "admin-walletout"
  }, {
    path: "/admin/customer_request/topup",
    component: _390edf99,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _4ff7f69e,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/product/productlist",
    component: _e1828b5a,
    name: "admin-product-productlist"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _796796a9,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _a2fbc93e,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/:id",
    component: _676ed7fa,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _70ad496a,
    name: "admin-stock-id"
  }, {
    path: "/product/:id",
    component: _01538543,
    name: "product-id"
  }, {
    path: "/",
    component: _563e5d10,
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
