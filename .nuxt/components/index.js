export const DiaConfirm = () => import('../../components/DiaConfirm.vue' /* webpackChunkName: "components/dia-confirm" */).then(c => wrapFunctional(c.default || c))
export const DiaImage = () => import('../../components/DiaImage.vue' /* webpackChunkName: "components/dia-image" */).then(c => wrapFunctional(c.default || c))
export const DialogClassicMessage = () => import('../../components/DialogClassicMessage.vue' /* webpackChunkName: "components/dialog-classic-message" */).then(c => wrapFunctional(c.default || c))
export const ImageDialog = () => import('../../components/ImageDialog.vue' /* webpackChunkName: "components/image-dialog" */).then(c => wrapFunctional(c.default || c))
export const LoadingIndicator = () => import('../../components/LoadingIndicator.vue' /* webpackChunkName: "components/loading-indicator" */).then(c => wrapFunctional(c.default || c))
export const Notification = () => import('../../components/Notification.vue' /* webpackChunkName: "components/notification" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const Wallet = () => import('../../components/Wallet.vue' /* webpackChunkName: "components/wallet" */).then(c => wrapFunctional(c.default || c))

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
