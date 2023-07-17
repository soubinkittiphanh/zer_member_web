exports.ids = [24];
exports.modules = {

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(266);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDetailPos.vue?vue&type=template&id=7588db67&







var OrderDetailPosvue_type_template_id_7588db67_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("ລາຍການສິນຄ້າ")])]), _vm._v(" "), _vm.entry ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.entry
    },
    scopedSlots: _vm._u([{
      key: `item.function`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "blue darken-1",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-wallet"
        })])];
      }
    }, {
      key: `item.price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.getFormatNum(item.price)) + "\n            ")];
      }
    }, {
      key: `item.discount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.getFormatNum(item.discount)) + "\n            ")];
      }
    }, {
      key: `item.total`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.getFormatNum(item.total)) + "\n            ")];
      }
    }], null, true)
  }) : _vm._e(), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v("\n                Close\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OrderDetailPos.vue?vue&type=template&id=7588db67&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDetailPos.vue?vue&type=script&lang=js&
/* harmony default export */ var OrderDetailPosvue_type_script_lang_js_ = ({
  props: {
    entry: {
      type: Object,
      default: ''
    }
  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    toggleDialog() {
      this.$emit('close-dialog');
    }
  },
  data() {
    return {
      search: '',
      headers: [{
        text: 'ສິນຄ້າ',
        align: 'center',
        value: 'product.pro_name'
      }, {
        text: 'ຈຳນວນ',
        align: 'center',
        value: 'quantity'
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'price',
        sortable: true
      }, {
        text: 'ສ່ວນຫລຸດ',
        align: 'end',
        value: 'discount',
        sortable: true
      }, {
        text: 'ລວມ',
        align: 'end',
        value: 'total',
        sortable: false
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/OrderDetailPos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OrderDetailPosvue_type_script_lang_js_ = (OrderDetailPosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/OrderDetailPos.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderDetailPosvue_type_script_lang_js_,
  OrderDetailPosvue_type_template_id_7588db67_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0c60578e"
  
)

/* harmony default export */ var OrderDetailPos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order-detail-pos.js.map