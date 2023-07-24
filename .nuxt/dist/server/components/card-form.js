exports.ids = [9];
exports.modules = {

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
// Mixins



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__[/* provide */ "b"])('form')
/* @vue/component */).extend({
  name: 'v-form',
  provide() {
    return {
      form: this
    };
  },
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };
      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };
      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }
      return watchers;
    },
    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },
    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },
    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },
    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },
    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },
    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);
      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }
      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }
  },
  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }
}));

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=template&id=6d8690f6&











var cardFormvue_type_template_id_6d8690f6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isSubmitting,
      callback: function ($$v) {
        _vm.isSubmitting = $$v;
      },
      expression: "isSubmitting"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("ເພີ່ມສະຕັອກສິນຄ້າ " + _vm._s(_vm.productId) + " " + _vm._s(_vm.productName))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
    ref: "myform",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຈຳນວນ",
      "rules": _vm.numberRule,
      "hide-details": "auto"
    },
    model: {
      value: _vm.stockQty,
      callback: function ($$v) {
        _vm.stockQty = $$v;
      },
      expression: "stockQty"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຕົ້ນທຶນທັງຫໝົດ",
      "rules": _vm.numberRule,
      "hide-details": "auto"
    },
    model: {
      value: _vm.stockCost,
      callback: function ($$v) {
        _vm.stockCost = $$v;
      },
      expression: "stockCost"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                ປິດ\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.stockSubmit
    }
  }, [_vm._v("\n                ບັນທຶກ\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=template&id=6d8690f6&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=script&lang=js&

/* harmony default export */ var cardFormvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: Number,
      default: 0
    },
    productId: {
      type: Number,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    cost: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      stockQty: 1,
      stockCost: this.cost,
      isSubmitting: false
    };
  },
  computed: {
    numberRule() {
      return [v => !!v || 'ກະລຸນາ ໃສ່ຈຳນວນ ', v => /^[0-9]+$/.test(v) || 'ໃສ່ໄດ້ສະເພາະ ຕົວເລກ'];
    },
    user() {
      return this.$auth.user || '';
    }
  },
  methods: {
    async stockSubmit() {
      if (this.$refs.myform.validate() && !this.isSubmitting) {
        this.isSubmitting = true;
        const stockData = {
          inputter: this.user.id,
          product_id: this.productId,
          stocCardkQty: this.stockQty,
          totalCost: this.stockCost,
          productId: this.id
        };
        console.log("Pre fly ", stockData);
        // return
        await this.$axios.post('/api/card/bulkCreate', stockData).then(res => {
          console.log(res.data);
          Object(common["i" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          // this.fetchData() // UPDATE PRODUCT UI
          this.$emit('reload');
          this.$emit('close-dialog');
        }).catch(error => {
          console.log(error);
          Object(common["h" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_cardFormvue_type_script_lang_js_ = (cardFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/card/cardForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_cardFormvue_type_script_lang_js_,
  cardFormvue_type_template_id_6d8690f6_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ff06782"
  
)

/* harmony default export */ var cardForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=card-form.js.map