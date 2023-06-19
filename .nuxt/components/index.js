export const BasicAlert = () => import('../../components/BasicAlert.vue' /* webpackChunkName: "components/basic-alert" */).then(c => wrapFunctional(c.default || c))
export const CancelTicketForm = () => import('../../components/CancelTicketForm.vue' /* webpackChunkName: "components/cancel-ticket-form" */).then(c => wrapFunctional(c.default || c))
export const CardDashBoard = () => import('../../components/CardDashBoard.vue' /* webpackChunkName: "components/card-dash-board" */).then(c => wrapFunctional(c.default || c))
export const Carousel3d = () => import('../../components/Carousel3d.vue' /* webpackChunkName: "components/carousel3d" */).then(c => wrapFunctional(c.default || c))
export const DiaConfirm = () => import('../../components/DiaConfirm.vue' /* webpackChunkName: "components/dia-confirm" */).then(c => wrapFunctional(c.default || c))
export const DiaImage = () => import('../../components/DiaImage.vue' /* webpackChunkName: "components/dia-image" */).then(c => wrapFunctional(c.default || c))
export const DialogClassicMessage = () => import('../../components/DialogClassicMessage.vue' /* webpackChunkName: "components/dialog-classic-message" */).then(c => wrapFunctional(c.default || c))
export const ImageDialog = () => import('../../components/ImageDialog.vue' /* webpackChunkName: "components/image-dialog" */).then(c => wrapFunctional(c.default || c))
export const LoadingIndicator = () => import('../../components/LoadingIndicator.vue' /* webpackChunkName: "components/loading-indicator" */).then(c => wrapFunctional(c.default || c))
export const MyChart = () => import('../../components/MyChart.vue' /* webpackChunkName: "components/my-chart" */).then(c => wrapFunctional(c.default || c))
export const NewComing = () => import('../../components/NewComing.vue' /* webpackChunkName: "components/new-coming" */).then(c => wrapFunctional(c.default || c))
export const Notification = () => import('../../components/Notification.vue' /* webpackChunkName: "components/notification" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const OrderDetail = () => import('../../components/OrderDetail.vue' /* webpackChunkName: "components/order-detail" */).then(c => wrapFunctional(c.default || c))
export const ProductCard = () => import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const RiderFormCopy = () => import('../../components/RiderForm-copy.vue' /* webpackChunkName: "components/rider-form-copy" */).then(c => wrapFunctional(c.default || c))
export const RiderForm = () => import('../../components/RiderForm.vue' /* webpackChunkName: "components/rider-form" */).then(c => wrapFunctional(c.default || c))
export const Settlement = () => import('../../components/Settlement.vue' /* webpackChunkName: "components/settlement" */).then(c => wrapFunctional(c.default || c))
export const SusscessDialog = () => import('../../components/SusscessDialog.vue' /* webpackChunkName: "components/susscess-dialog" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const Wallet = () => import('../../components/Wallet.vue' /* webpackChunkName: "components/wallet" */).then(c => wrapFunctional(c.default || c))
export const OrderSumaryCard = () => import('../../components/orderSumaryCard.vue' /* webpackChunkName: "components/order-sumary-card" */).then(c => wrapFunctional(c.default || c))
export const AccountingApPayment = () => import('../../components/accounting/ApPayment.vue' /* webpackChunkName: "components/accounting-ap-payment" */).then(c => wrapFunctional(c.default || c))
export const AccountingGeneralLedgerForm = () => import('../../components/accounting/GeneralLedgerForm.vue' /* webpackChunkName: "components/accounting-general-ledger-form" */).then(c => wrapFunctional(c.default || c))
export const CardCampaignCard = () => import('../../components/card/campaignCard.vue' /* webpackChunkName: "components/card-campaign-card" */).then(c => wrapFunctional(c.default || c))
export const CardForm = () => import('../../components/card/cardForm.vue' /* webpackChunkName: "components/card-form" */).then(c => wrapFunctional(c.default || c))
export const CampaignForm = () => import('../../components/campaign/CampaignForm.vue' /* webpackChunkName: "components/campaign-form" */).then(c => wrapFunctional(c.default || c))
export const DashboardCardOnTop = () => import('../../components/dashboard/CardOnTop.vue' /* webpackChunkName: "components/dashboard-card-on-top" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
