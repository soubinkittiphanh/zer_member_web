exports.ids = [20];
exports.modules = {

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/logout/index.vue?vue&type=template&id=76cf6e26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<span>Login out...</span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/logout/index.vue?vue&type=template&id=76cf6e26&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/logout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var logoutvue_type_script_lang_js_ = ({
  mounted() {
    this.logout();
    this.$router.push("/login");
  },

  methods: {
    logout() {
      this.$store.dispatch('logout');
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/logout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_logoutvue_type_script_lang_js_ = (logoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/admin/logout/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_logoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4889d5e7"
  
)

/* harmony default export */ var logout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map