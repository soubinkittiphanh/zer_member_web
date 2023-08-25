import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f4190a6 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _fb64be52 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _86ba6d9c = () => interopDefault(import('../pages/pos/index.vue' /* webpackChunkName: "pages/pos/index" */))
const _7572f6e6 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _a7842ff6 = () => interopDefault(import('../pages/admin/advertise/index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _0f7f0467 = () => interopDefault(import('../pages/admin/ap/index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _394869e9 = () => interopDefault(import('../pages/admin/ar/index.vue' /* webpackChunkName: "pages/admin/ar/index" */))
const _66ede218 = () => interopDefault(import('../pages/admin/bank/index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _7dddfa48 = () => interopDefault(import('../pages/admin/campaign/index.vue' /* webpackChunkName: "pages/admin/campaign/index" */))
const _180344c1 = () => interopDefault(import('../pages/admin/cancel_order/index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _692824b6 = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _fea63afa = () => interopDefault(import('../pages/admin/client/index.vue' /* webpackChunkName: "pages/admin/client/index" */))
const _6e83a9a5 = () => interopDefault(import('../pages/admin/cod_order/index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _5dc6dc09 = () => interopDefault(import('../pages/admin/currency/index.vue' /* webpackChunkName: "pages/admin/currency/index" */))
const _574e60d4 = () => interopDefault(import('../pages/admin/customer/index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _5d7d59e6 = () => interopDefault(import('../pages/admin/customer_request/index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _848362a6 = () => interopDefault(import('../pages/admin/location/index.vue' /* webpackChunkName: "pages/admin/location/index" */))
const _300d3e47 = () => interopDefault(import('../pages/admin/login/index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _3f9e2182 = () => interopDefault(import('../pages/admin/logout/index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _28458292 = () => interopDefault(import('../pages/admin/member/index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _1d174c3c = () => interopDefault(import('../pages/admin/minstock/index.vue' /* webpackChunkName: "pages/admin/minstock/index" */))
const _4f34b91d = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _ff84b6fa = () => interopDefault(import('../pages/admin/ordersFromPos/index.vue' /* webpackChunkName: "pages/admin/ordersFromPos/index" */))
const _295e189d = () => interopDefault(import('../pages/admin/ordersFromPosCancel/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCancel/index" */))
const _36d97b48 = () => interopDefault(import('../pages/admin/ordersFromPosCredit/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCredit/index" */))
const _23f9fb92 = () => interopDefault(import('../pages/admin/po/index.vue' /* webpackChunkName: "pages/admin/po/index" */))
const _57be90e6 = () => interopDefault(import('../pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _ae16b5f0 = () => interopDefault(import('../pages/admin/productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _85a6c9ac = () => interopDefault(import('../pages/admin/quotation/index.vue' /* webpackChunkName: "pages/admin/quotation/index" */))
const _69ec6a30 = () => interopDefault(import('../pages/admin/quotationList/index.vue' /* webpackChunkName: "pages/admin/quotationList/index" */))
const _3fa356a8 = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _cf12bd4e = () => interopDefault(import('../pages/admin/report_card/index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _69422418 = () => interopDefault(import('../pages/admin/rider/index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _eff29698 = () => interopDefault(import('../pages/admin/terminal/index.vue' /* webpackChunkName: "pages/admin/terminal/index" */))
const _0af1c93a = () => interopDefault(import('../pages/admin/transfer/index.vue' /* webpackChunkName: "pages/admin/transfer/index" */))
const _153c2e70 = () => interopDefault(import('../pages/admin/txn/index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _69aba667 = () => interopDefault(import('../pages/admin/txn_type/index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _66bfd696 = () => interopDefault(import('../pages/admin/walletin/index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _4182d9da = () => interopDefault(import('../pages/admin/walletout/index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _8c123e78 = () => interopDefault(import('../pages/admin/customer_request/topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _62b820b4 = () => interopDefault(import('../pages/admin/customer_request/withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _69d97df0 = () => interopDefault(import('../pages/admin/product/productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _71582f54 = () => interopDefault(import('../pages/admin/advertise/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _1486e2cc = () => interopDefault(import('../pages/admin/product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _cf9888c4 = () => interopDefault(import('../pages/admin/PDFInvoice/_id/index.vue' /* webpackChunkName: "pages/admin/PDFInvoice/_id/index" */))
const _848a0606 = () => interopDefault(import('../pages/admin/PDFQuotation/_id/index.vue' /* webpackChunkName: "pages/admin/PDFQuotation/_id/index" */))
const _4c411287 = () => interopDefault(import('../pages/admin/PDFTicket/_id/index.vue' /* webpackChunkName: "pages/admin/PDFTicket/_id/index" */))
const _e5bc7834 = () => interopDefault(import('../pages/admin/PDFTransfer/_id/index.vue' /* webpackChunkName: "pages/admin/PDFTransfer/_id/index" */))
const _558943f8 = () => interopDefault(import('../pages/admin/product/_id/index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _2a591ac2 = () => interopDefault(import('../pages/admin/stock/_id/index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _750090f8 = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _66a204ad = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3f4190a6,
    name: "admin"
  }, {
    path: "/home",
    component: _fb64be52,
    name: "home"
  }, {
    path: "/pos",
    component: _86ba6d9c,
    name: "pos"
  }, {
    path: "/product",
    component: _7572f6e6,
    name: "product"
  }, {
    path: "/admin/advertise",
    component: _a7842ff6,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _0f7f0467,
    name: "admin-ap"
  }, {
    path: "/admin/ar",
    component: _394869e9,
    name: "admin-ar"
  }, {
    path: "/admin/bank",
    component: _66ede218,
    name: "admin-bank"
  }, {
    path: "/admin/campaign",
    component: _7dddfa48,
    name: "admin-campaign"
  }, {
    path: "/admin/cancel_order",
    component: _180344c1,
    name: "admin-cancel_order"
  }, {
    path: "/admin/category",
    component: _692824b6,
    name: "admin-category"
  }, {
    path: "/admin/client",
    component: _fea63afa,
    name: "admin-client"
  }, {
    path: "/admin/cod_order",
    component: _6e83a9a5,
    name: "admin-cod_order"
  }, {
    path: "/admin/currency",
    component: _5dc6dc09,
    name: "admin-currency"
  }, {
    path: "/admin/customer",
    component: _574e60d4,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _5d7d59e6,
    name: "admin-customer_request"
  }, {
    path: "/admin/location",
    component: _848362a6,
    name: "admin-location"
  }, {
    path: "/admin/login",
    component: _300d3e47,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _3f9e2182,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _28458292,
    name: "admin-member"
  }, {
    path: "/admin/minstock",
    component: _1d174c3c,
    name: "admin-minstock"
  }, {
    path: "/admin/orders",
    component: _4f34b91d,
    name: "admin-orders"
  }, {
    path: "/admin/ordersFromPos",
    component: _ff84b6fa,
    name: "admin-ordersFromPos"
  }, {
    path: "/admin/ordersFromPosCancel",
    component: _295e189d,
    name: "admin-ordersFromPosCancel"
  }, {
    path: "/admin/ordersFromPosCredit",
    component: _36d97b48,
    name: "admin-ordersFromPosCredit"
  }, {
    path: "/admin/po",
    component: _23f9fb92,
    name: "admin-po"
  }, {
    path: "/admin/product",
    component: _57be90e6,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _ae16b5f0,
    name: "admin-productInuse"
  }, {
    path: "/admin/quotation",
    component: _85a6c9ac,
    name: "admin-quotation"
  }, {
    path: "/admin/quotationList",
    component: _69ec6a30,
    name: "admin-quotationList"
  }, {
    path: "/admin/report",
    component: _3fa356a8,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _cf12bd4e,
    name: "admin-report_card"
  }, {
    path: "/admin/rider",
    component: _69422418,
    name: "admin-rider"
  }, {
    path: "/admin/terminal",
    component: _eff29698,
    name: "admin-terminal"
  }, {
    path: "/admin/transfer",
    component: _0af1c93a,
    name: "admin-transfer"
  }, {
    path: "/admin/txn",
    component: _153c2e70,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _69aba667,
    name: "admin-txn_type"
  }, {
    path: "/admin/walletin",
    component: _66bfd696,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _4182d9da,
    name: "admin-walletout"
  }, {
    path: "/admin/customer_request/topup",
    component: _8c123e78,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _62b820b4,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/product/productlist",
    component: _69d97df0,
    name: "admin-product-productlist"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _71582f54,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _1486e2cc,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/PDFInvoice/:id",
    component: _cf9888c4,
    name: "admin-PDFInvoice-id"
  }, {
    path: "/admin/PDFQuotation/:id",
    component: _848a0606,
    name: "admin-PDFQuotation-id"
  }, {
    path: "/admin/PDFTicket/:id",
    component: _4c411287,
    name: "admin-PDFTicket-id"
  }, {
    path: "/admin/PDFTransfer/:id",
    component: _e5bc7834,
    name: "admin-PDFTransfer-id"
  }, {
    path: "/admin/product/:id",
    component: _558943f8,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _2a591ac2,
    name: "admin-stock-id"
  }, {
    path: "/product/:id",
    component: _750090f8,
    name: "product-id"
  }, {
    path: "/",
    component: _66a204ad,
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
