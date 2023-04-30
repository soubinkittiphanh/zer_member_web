export { default as Carousel3d } from '../../components/Carousel3d.vue'
export { default as DiaConfirm } from '../../components/DiaConfirm.vue'
export { default as DiaImage } from '../../components/DiaImage.vue'
export { default as DialogClassicMessage } from '../../components/DialogClassicMessage.vue'
export { default as ImageDialog } from '../../components/ImageDialog.vue'
export { default as LoadingIndicator } from '../../components/LoadingIndicator.vue'
export { default as NewComing } from '../../components/NewComing.vue'
export { default as Notification } from '../../components/Notification.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as Settlement } from '../../components/Settlement.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Wallet } from '../../components/Wallet.vue'

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
