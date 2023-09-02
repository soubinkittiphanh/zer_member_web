import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42c0a0dc = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1447cf5c = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _33f9f657 = () => interopDefault(import('../pages/pos/index.vue' /* webpackChunkName: "pages/pos/index" */))
const _35489732 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _5a2985aa = () => interopDefault(import('../pages/admin/advertise/index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _c081733c = () => interopDefault(import('../pages/admin/ap/index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _6ceea838 = () => interopDefault(import('../pages/admin/ar/index.vue' /* webpackChunkName: "pages/admin/ar/index" */))
const _4dc0be2f = () => interopDefault(import('../pages/admin/bank/index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _30e59403 = () => interopDefault(import('../pages/admin/campaign/index.vue' /* webpackChunkName: "pages/admin/campaign/index" */))
const _65e188fc = () => interopDefault(import('../pages/admin/cancel_order/index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _1c2fbe71 = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _da94a204 = () => interopDefault(import('../pages/admin/client/index.vue' /* webpackChunkName: "pages/admin/client/index" */))
const _1c6f474a = () => interopDefault(import('../pages/admin/cod_order/index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _10ce75c4 = () => interopDefault(import('../pages/admin/currency/index.vue' /* webpackChunkName: "pages/admin/currency/index" */))
const _f13f2d5e = () => interopDefault(import('../pages/admin/customer/index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _4dd908a1 = () => interopDefault(import('../pages/admin/customer_request/index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _70c5e868 = () => interopDefault(import('../pages/admin/location/index.vue' /* webpackChunkName: "pages/admin/location/index" */))
const _54691328 = () => interopDefault(import('../pages/admin/login/index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _51a6edfd = () => interopDefault(import('../pages/admin/logout/index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _3a4e4f0d = () => interopDefault(import('../pages/admin/member/index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _5fc23412 = () => interopDefault(import('../pages/admin/minstock/index.vue' /* webpackChunkName: "pages/admin/minstock/index" */))
const _613d8598 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _23b030b0 = () => interopDefault(import('../pages/admin/ordersFromPos/index.vue' /* webpackChunkName: "pages/admin/ordersFromPos/index" */))
const _32dea7fc = () => interopDefault(import('../pages/admin/ordersFromPosCancel/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCancel/index" */))
const _bc74547e = () => interopDefault(import('../pages/admin/ordersFromPosCredit/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCredit/index" */))
const _3b04a9e9 = () => interopDefault(import('../pages/admin/ordersFromPosSummaryByCustomer/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosSummaryByCustomer/index" */))
const _7e434432 = () => interopDefault(import('../pages/admin/po/index.vue' /* webpackChunkName: "pages/admin/po/index" */))
const _03317a72 = () => interopDefault(import('../pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _8a051cfa = () => interopDefault(import('../pages/admin/productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _6b1838cf = () => interopDefault(import('../pages/admin/quotation/index.vue' /* webpackChunkName: "pages/admin/quotation/index" */))
const _38f40e0d = () => interopDefault(import('../pages/admin/quotationList/index.vue' /* webpackChunkName: "pages/admin/quotationList/index" */))
const _1b91bdb2 = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _79f169be = () => interopDefault(import('../pages/admin/report_card/index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _0f005c3d = () => interopDefault(import('../pages/admin/rider/index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _3b0e4e6f = () => interopDefault(import('../pages/admin/terminal/index.vue' /* webpackChunkName: "pages/admin/terminal/index" */))
const _a4e295c4 = () => interopDefault(import('../pages/admin/transfer/index.vue' /* webpackChunkName: "pages/admin/transfer/index" */))
const _6d29e62d = () => interopDefault(import('../pages/admin/txn/index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _1cb34022 = () => interopDefault(import('../pages/admin/txn_type/index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _b9218604 = () => interopDefault(import('../pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _19c77051 = () => interopDefault(import('../pages/admin/walletin/index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _e5ab9e90 = () => interopDefault(import('../pages/admin/walletout/index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _ab5ae102 = () => interopDefault(import('../pages/admin/customer_request/topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _e852f9ea = () => interopDefault(import('../pages/admin/customer_request/withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _38fd842d = () => interopDefault(import('../pages/admin/product/productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _0d56c4e2 = () => interopDefault(import('../pages/admin/advertise/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _78a0b872 = () => interopDefault(import('../pages/admin/product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _30dc45ce = () => interopDefault(import('../pages/admin/PDFInvoice/_id/index.vue' /* webpackChunkName: "pages/admin/PDFInvoice/_id/index" */))
const _a3d2a890 = () => interopDefault(import('../pages/admin/PDFQuotation/_id/index.vue' /* webpackChunkName: "pages/admin/PDFQuotation/_id/index" */))
const _8ba954a8 = () => interopDefault(import('../pages/admin/PDFTicket/_id/index.vue' /* webpackChunkName: "pages/admin/PDFTicket/_id/index" */))
const _2987d1cb = () => interopDefault(import('../pages/admin/PDFTransfer/_id/index.vue' /* webpackChunkName: "pages/admin/PDFTransfer/_id/index" */))
const _37040c5d = () => interopDefault(import('../pages/admin/product/_id/index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _ce81df78 = () => interopDefault(import('../pages/admin/stock/_id/index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _1abec91d = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _4600e75c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _42c0a0dc,
    name: "admin"
  }, {
    path: "/home",
    component: _1447cf5c,
    name: "home"
  }, {
    path: "/pos",
    component: _33f9f657,
    name: "pos"
  }, {
    path: "/product",
    component: _35489732,
    name: "product"
  }, {
    path: "/admin/advertise",
    component: _5a2985aa,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _c081733c,
    name: "admin-ap"
  }, {
    path: "/admin/ar",
    component: _6ceea838,
    name: "admin-ar"
  }, {
    path: "/admin/bank",
    component: _4dc0be2f,
    name: "admin-bank"
  }, {
    path: "/admin/campaign",
    component: _30e59403,
    name: "admin-campaign"
  }, {
    path: "/admin/cancel_order",
    component: _65e188fc,
    name: "admin-cancel_order"
  }, {
    path: "/admin/category",
    component: _1c2fbe71,
    name: "admin-category"
  }, {
    path: "/admin/client",
    component: _da94a204,
    name: "admin-client"
  }, {
    path: "/admin/cod_order",
    component: _1c6f474a,
    name: "admin-cod_order"
  }, {
    path: "/admin/currency",
    component: _10ce75c4,
    name: "admin-currency"
  }, {
    path: "/admin/customer",
    component: _f13f2d5e,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _4dd908a1,
    name: "admin-customer_request"
  }, {
    path: "/admin/location",
    component: _70c5e868,
    name: "admin-location"
  }, {
    path: "/admin/login",
    component: _54691328,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _51a6edfd,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _3a4e4f0d,
    name: "admin-member"
  }, {
    path: "/admin/minstock",
    component: _5fc23412,
    name: "admin-minstock"
  }, {
    path: "/admin/orders",
    component: _613d8598,
    name: "admin-orders"
  }, {
    path: "/admin/ordersFromPos",
    component: _23b030b0,
    name: "admin-ordersFromPos"
  }, {
    path: "/admin/ordersFromPosCancel",
    component: _32dea7fc,
    name: "admin-ordersFromPosCancel"
  }, {
    path: "/admin/ordersFromPosCredit",
    component: _bc74547e,
    name: "admin-ordersFromPosCredit"
  }, {
    path: "/admin/ordersFromPosSummaryByCustomer",
    component: _3b04a9e9,
    name: "admin-ordersFromPosSummaryByCustomer"
  }, {
    path: "/admin/po",
    component: _7e434432,
    name: "admin-po"
  }, {
    path: "/admin/product",
    component: _03317a72,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _8a051cfa,
    name: "admin-productInuse"
  }, {
    path: "/admin/quotation",
    component: _6b1838cf,
    name: "admin-quotation"
  }, {
    path: "/admin/quotationList",
    component: _38f40e0d,
    name: "admin-quotationList"
  }, {
    path: "/admin/report",
    component: _1b91bdb2,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _79f169be,
    name: "admin-report_card"
  }, {
    path: "/admin/rider",
    component: _0f005c3d,
    name: "admin-rider"
  }, {
    path: "/admin/terminal",
    component: _3b0e4e6f,
    name: "admin-terminal"
  }, {
    path: "/admin/transfer",
    component: _a4e295c4,
    name: "admin-transfer"
  }, {
    path: "/admin/txn",
    component: _6d29e62d,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _1cb34022,
    name: "admin-txn_type"
  }, {
    path: "/admin/user",
    component: _b9218604,
    name: "admin-user"
  }, {
    path: "/admin/walletin",
    component: _19c77051,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _e5ab9e90,
    name: "admin-walletout"
  }, {
    path: "/admin/customer_request/topup",
    component: _ab5ae102,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _e852f9ea,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/product/productlist",
    component: _38fd842d,
    name: "admin-product-productlist"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _0d56c4e2,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _78a0b872,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/PDFInvoice/:id",
    component: _30dc45ce,
    name: "admin-PDFInvoice-id"
  }, {
    path: "/admin/PDFQuotation/:id",
    component: _a3d2a890,
    name: "admin-PDFQuotation-id"
  }, {
    path: "/admin/PDFTicket/:id",
    component: _8ba954a8,
    name: "admin-PDFTicket-id"
  }, {
    path: "/admin/PDFTransfer/:id",
    component: _2987d1cb,
    name: "admin-PDFTransfer-id"
  }, {
    path: "/admin/product/:id",
    component: _37040c5d,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _ce81df78,
    name: "admin-stock-id"
  }, {
    path: "/product/:id",
    component: _1abec91d,
    name: "product-id"
  }, {
    path: "/",
    component: _4600e75c,
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
