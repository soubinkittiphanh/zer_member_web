exports.ids = [42];
exports.modules = {

/***/ 283:
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(262);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Settlement.vue?vue&type=template&id=967eb5b4&











var Settlementvue_type_template_id_967eb5b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n      ຊຳລະບິນ " + _vm._s(this.orderId + '-' + this.lockingSessionId || 'null') + " ຍອດ:\n      " + _vm._s(_vm.formatNum(this.amount)) + " ")]), _vm._v(" "), _c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.idRules,
      "label": "ໄອດີ ຜູ້ລົງ",
      "required": "",
      "disabled": ""
    },
    model: {
      value: _vm.userName,
      callback: function ($$v) {
        _vm.userName = $$v;
      },
      expression: "userName"
    }
  }), _vm._v(" "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.loaddata,
      "item-value": item => item.txn_id,
      "item-text": item => item.txn_id + ' - ' + item.txn_name,
      "append-outer-icon": "mdi-cash-check",
      "menu-props": "auto",
      "hide-details": "",
      "label": "ປະເພດການຊຳລະ",
      "single-line": "",
      "rules": _vm.rule.txnRule
    },
    on: {
      "change": _vm.selectChange
    },
    model: {
      value: _vm.form_data.txn_type,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "txn_type", $$v);
      },
      expression: "form_data.txn_type"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.amountRules,
      "label": `ຈຳນວນເງິນ: ` + _vm.formatNum(_vm.paymentAmount),
      "required": ""
    },
    model: {
      value: _vm.paymentAmount,
      callback: function ($$v) {
        _vm.paymentAmount = $$v;
      },
      expression: "paymentAmount"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.numberRule,
      "label": `ຄ່າທຳນຽມ COD: ` + _vm.formatNum(_vm.codFee),
      "required": ""
    },
    model: {
      value: _vm.codFee,
      callback: function ($$v) {
        _vm.codFee = _vm._n($$v);
      },
      expression: "codFee"
    }
  })], 1), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        ປິດ\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.submitDatas
    }
  }, [_vm._v(" ບັນທຶກ ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Settlement.vue?vue&type=template&id=967eb5b4&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Settlement.vue?vue&type=script&lang=js&

/* harmony default export */ var Settlementvue_type_script_lang_js_ = ({
  //   There are several types available for Vue.js props:

  // 1. `String`: Expects a string value.
  // 2. `Number`: Expects a numeric value.
  // 3. `Boolean`: Expects a boolean value.
  // 4. `Array`: Expects an array value.
  // 5. `Object`: Expects an object value.
  // 6. `Function`: Expects a function value.
  // 7. `Symbol`: Expects a symbol value.
  // 8. `Date`: Expects a date value.
  // 9. `RegExp`: Expects a regular expression value.

  // You can also create custom types by passing a validator function to the `validator` property of the prop object.
  props: {
    amount: {
      type: Number,
      require: true,
      default: 0
    },
    orderId: {
      type: Number,
      require: true
    },
    lockingSessionId: {
      type: String,
      require: true
    }
  },
  computed: {
    userId() {
      return this.$auth.user.id;
    },
    userName() {
      return this.$auth.user.name;
    },
    numberRule() {
      return [value => value !== undefined && value !== null && value !== '' || 'Field is required', value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'];
    }
  },
  data() {
    return {
      loaddata: [],
      isloading: false,
      valid: true,
      message: null,
      dialogMessage: false,
      paymentAmount: this.amount,
      codFee: 0,
      form_data: {
        txn_his_id: 1000,
        txn_id: 1000,
        txn_type: "TRANSFER",
        txn_his_amount: 10000,
        user_id: this.userId,
        user_balance: this.cusBalance,
        txn_his_inputter: this.$store.getters.loggedInUser.id,
        txn_his_date: '2021-09-25 00:00:00'
      },
      rule: {
        idRules: [v => !!v || 'ໄອດີ is required'],
        amountRules: [v => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        amountCODRules: [v => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        txnRule: [v => !!v || 'ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required']
      }
    };
  },
  async created() {
    await this.fetchData();
    this.codFee = +0;
    console.log("Assign amount: ", this.paymentAmount);
  },
  watch: {
    userId(v) {
      this.form_data.user_id = v;
    },
    amount(newAmount) {
      console.log("New amount: ", newAmount);
      this.paymentAmount = newAmount;
    }
  },
  methods: {
    selectChange(v) {
      console.log('SELECT: ' + v);
      this.form_data.txn_id = v;
    },
    async submitDatas() {
      this.isloading = true;
      console.log("AMOUNT: ", this.amount);
      if (!this.$refs.form.validate()) {
        console.log("From validate is verified");
        this.isloading = false;
        return;
      }
      //  if (1===1) return ;
      const paymentPayload = {
        lockingSessionId: this.lockingSessionId,
        paymentCode: this.form_data.txn_type,
        codFee: this.codFee,
        orderId: this.orderId,
        userId: this.userId,
        amount: this.paymentAmount
      };
      const urlpath = '/order_cod_settle';
      await this.$axios.post(urlpath, {
        ...paymentPayload
      }).then(res => {
        this.message = res.data;
        console.log("this.message", this.message);
        if (this.message.includes("completed")) {
          // ******* reload data if transaction completed ********
          console.log("RELOAD DATA TRIGGER");
          this.refreshData(true);
          return Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          //  
        }

        return Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
      }).catch(er => {
        this.message = 'Error: ' + er;
      });
      this.isloading = false;

      // this.fetchData()
    },

    async fetchData() {
      await this.$axios.get('payment').then(res => {
        this.loaddata = res.data.map(el => {
          console.log(el.txn_id);
          return {
            txn_id: el.payment_code,
            txn_type: el.payment_code,
            txn_name: el.payment_name
          };
        });
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    formatNum(v) {
      return new Intl.NumberFormat().format(v);
    },
    refreshData(v) {
      this.$emit('reload', v);
    }
  }
});
// CONCATENATED MODULE: ./components/Settlement.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Settlementvue_type_script_lang_js_ = (Settlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Settlement.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Settlementvue_type_script_lang_js_,
  Settlementvue_type_template_id_967eb5b4_render,
  staticRenderFns,
  false,
  null,
  null,
  "52a9b4cd"
  
)

/* harmony default export */ var Settlement = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(110).default})


/***/ })

};;
//# sourceMappingURL=settlement.js.map