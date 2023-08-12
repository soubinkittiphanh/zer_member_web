exports.ids = [21];
exports.modules = {

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu/index.vue?vue&type=template&id=613caf9e&





var menuvue_type_template_id_613caf9e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          attrs: {
            "elevation": hover ? 16 : 0,
            "outlined": ""
          },
          on: {
            "click": _vm.takeMeTo
          }
        }, [_c(components_VCard["c" /* VCardText */], {
          staticClass: "text-center"
        }, [_c('div', [_vm._t("iconSlot")], 2), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim primary--text"
        }, [_c(VChip["a" /* default */], {
          staticClass: "ma-2",
          staticStyle: {
            "background-color": "transparent",
            "outline": "1px solid gray"
          },
          attrs: {
            "variant": "outlined"
          }
        }, [_vm._v("\n                        " + _vm._s(_vm.title) + "\n                    ")])], 1)])], 1)];
      }
    }], null, true)
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/menu/index.vue?vue&type=template&id=613caf9e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu/index.vue?vue&type=script&lang=js&
// import MySvgIcon from '~/assets/icons/cashier.svg'
/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: 'menu-card',
  components: {
    // MySvgIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageSvg: __webpack_require__(139),
      imageSrc: __webpack_require__(138)
    };
  },
  methods: {
    takeMeTo() {
      this.$router.push(this.path);
    }
  }
});
// CONCATENATED MODULE: ./components/menu/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/menu/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_menuvue_type_script_lang_js_,
  menuvue_type_template_id_613caf9e_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2d5709b4"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=menu.js.map