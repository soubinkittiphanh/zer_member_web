exports.ids = [2];
exports.modules = {

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, vnode) {
    el.addEventListener("input", function (event) {
      // Remove any non-numeric characters
      let value = event.target.value.replace(/[^0-9]/g, "");
      // Format the value with comma-separated thousands
      value = parseInt(value, 10).toLocaleString("en-US");
      // Update the input value
      if (value === 'NaN') value = '0';
      vnode.componentInstance.$emit("input", value);
    });
  }
});

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ArReceivable.vue?vue&type=template&id=3b882cbf&













var ArReceivablevue_type_template_id_3b882cbf_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    attrs: {
      "justify": "center"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        props
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "color": "primary"
          }
        }, 'v-btn', props, false), [_vm._v("\n            Open Dialog\n        ")])];
      }
    }])
  }, [_vm._v(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("ລາຍຮັບ " + _vm._s(_vm.today))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເລກເອກະສານອ້າງອີງ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.receiveNumber,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "receiveNumber", $$v);
      },
      expression: "form.header.receiveNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີ*",
      "hint": "ເດຶອນ/ວັນ/ປີ 12/31/2023"
    },
    model: {
      value: _vm.form.header.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "bookingDate", $$v);
      },
      expression: "form.header.bookingDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຊຶ ບໍ່ລິສັດ ຫລື ຜູ້ຮັບ ການຊຳລະ*",
      "hint": "ຊື່ບຸກຄົນ,ບໍລິສັດ ຫລື ຜູ້ຮັບການຊຳລະ",
      "persistent-hint": "",
      "required": ""
    },
    model: {
      value: _vm.form.header.payee,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "payee", $$v);
      },
      expression: "form.header.payee"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເນື້ອໃນການຊຳລະ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "notes", $$v);
      },
      expression: "form.header.notes"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ຈຳນວນເງິນ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.totalAmount,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "totalAmount", $$v);
      },
      expression: "form.header.totalAmount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.currencyList,
      "label": "ສະກຸນເງິນ*"
    },
    model: {
      value: _vm.form.header.currency,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "currency", $$v);
      },
      expression: "form.header.currency"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ອັດຕາແລກປ່ຽນ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.rate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "rate", $$v);
      },
      expression: "form.header.rate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.paymentType,
      "label": "ປະເພດການຊຳລະ *"
    },
    model: {
      value: _vm.form.header.paymentMethod,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "paymentMethod", $$v);
      },
      expression: "form.header.paymentMethod"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "desc",
      "item-value": "id",
      "items": _vm.account,
      "label": "ບັນຊີແຍກປະເພດ DR ACCOUNT*"
    },
    model: {
      value: _vm.form.header.drAccount,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "drAccount", $$v);
      },
      expression: "form.header.drAccount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "desc",
      "item-value": "id",
      "items": _vm.account,
      "label": "ບັນຊີແຍກປະເພດ CR ACCOUNT*"
    },
    model: {
      value: _vm.form.header.crAccount,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "crAccount", $$v);
      },
      expression: "form.header.crAccount"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": _vm.submitData
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue?vue&type=template&id=3b882cbf&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(287);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ArReceivable.vue?vue&type=script&lang=js&


/* harmony default export */ var ArReceivablevue_type_script_lang_js_ = ({
  props: {
    receiveHeaderId: {
      type: Number,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  data() {
    return {
      account: [],
      drAccount: "",
      crAccount: "",
      amount: '',
      isloading: false,
      bookingDate: '',
      paymentDescription: '',
      postingReference: '',
      paymentType: ['Cash', 'Check', 'Credit Card', 'Bank transfer'],
      currencyList: ['LAK', 'USD', 'THB'],
      form: {
        header: {
          bookingDate: '',
          receiveNumber: 'REF12345',
          payee: 'ຮ້ານຄ້າທົ່ວໄປ',
          paymentMethod: 'Cash',
          currency: 'LAK',
          rate: 1,
          totalAmount: '1,000',
          notes: 'Receive for services rendered',
          // locking_session_id: 'abc123',
          update_user: 1,
          drAccount: 15,
          crAccount: 1,
          isActive: true
        },
        line: {}
      }
    };
  },
  mounted() {
    this.loadAccount();
    const today = new Date().toISOString().substr(0, 10);
    // const today = new Date().toISOString().substr(0, 10);
    // const today = new Date().toLocaleDateString();
    this.bookingDate = today;
    this.form.header.bookingDate = today;
    if (this.isEdit) {
      console.log("Load payment header");
      this.loadReceiveById();
    }
  },
  computed: {
    today() {
      const today = new Date().toLocaleDateString();
      console.log(today);
      return today;
    }
  },
  methods: {
    async loadAccount() {
      this.isloading = true;
      const response = await this.$axios.get('/api/financial/chartAccount');
      response.data.forEach(element => {
        this.account.push({
          id: element["id"],
          desc: element["accountName"] + " - " + element["accountNumber"]
        });
      });
      this.isloading = false;
    },
    async loadReceiveById() {
      this.isloading = true;
      await this.$axios.get(`/api/finanicial/ar/header/find/${this.receiveHeaderId}`).then(response => {
        this.form.header = response.data;
        this.form.header.bookingDate = response.data['bookingDate'].split('T')[0];
        this.form.header.totalAmount = this.getFormatNum(this.form.header.totalAmount);
      }).catch(error => {
        Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
      });
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    async submitData() {
      if (this.isloading) return;
      this.isloading = true;
      if (this.isEdit) {
        await this.$axios.put(`/api/finanicial/ar/header/update/${this.receiveHeaderId}`, this.form.header).then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.$emit('reload');
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
      } else {
        await this.$axios.post("/api/finanicial/ar/header/create", this.form.header).then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.$emit('reload');
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data.errors[0].msg);
        });
      }
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue?vue&type=script&lang=js&
 /* harmony default export */ var accounting_ArReceivablevue_type_script_lang_js_ = (ArReceivablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounting_ArReceivablevue_type_script_lang_js_,
  ArReceivablevue_type_template_id_3b882cbf_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "17b283b3"
  
)

/* harmony default export */ var ArReceivable = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(110).default})


/***/ })

};;
//# sourceMappingURL=accounting-ar-receivable.js.map