exports.ids = [3];
exports.modules = {

/***/ 297:
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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(275);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(262);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/GeneralLedgerForm.vue?vue&type=template&id=160fe396&













var GeneralLedgerFormvue_type_template_id_160fe396_render = function render() {
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
  }, [_vm._v("ຄ່າໃຊ້ຈ່າຍ " + _vm._s(_vm.today))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
      value: _vm.postingReference,
      callback: function ($$v) {
        _vm.postingReference = $$v;
      },
      expression: "postingReference"
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
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.bookingDate,
      callback: function ($$v) {
        _vm.bookingDate = $$v;
      },
      expression: "bookingDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Legal last name*",
      "hint": "example of persistent helper text",
      "persistent-hint": "",
      "required": ""
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
      value: _vm.paymentDescription,
      callback: function ($$v) {
        _vm.paymentDescription = $$v;
      },
      expression: "paymentDescription"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.amount,
      expression: "amount",
      modifiers: {
        "number": true
      }
    }, {
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.amount
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.amount = _vm._n($event.target.value);
      },
      "blur": function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ຈຳນວນເງິນ*",
      "required": ""
    },
    model: {
      value: _vm.amount,
      callback: function ($$v) {
        _vm.amount = $$v;
      },
      expression: "amount"
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
      value: _vm.paymentDr.accountNumber,
      callback: function ($$v) {
        _vm.$set(_vm.paymentDr, "accountNumber", $$v);
      },
      expression: "paymentDr.accountNumber"
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
      value: _vm.paymentCr.accountNumber,
      callback: function ($$v) {
        _vm.$set(_vm.paymentCr, "accountNumber", $$v);
      },
      expression: "paymentCr.accountNumber"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": _vm.triggerDialog
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": _vm.createPayment
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/GeneralLedgerForm.vue?vue&type=template&id=160fe396&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(297);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/GeneralLedgerForm.vue?vue&type=script&lang=js&


/* harmony default export */ var GeneralLedgerFormvue_type_script_lang_js_ = ({
  paymentHeadId: {
    type: Number,
    default: ''
  },
  isEdit: {
    type: Boolean,
    default: false
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
      paymentDr: {
        "accountNumber": 5006,
        "bookingDate": "",
        "postingReference": "",
        "debit": 0,
        "credit": 0,
        "description": "Investment",
        // "descriptionLL": "ລົງທຶນ ຊື້ ເຄື່ອງມາຂາຍ ແບ້ 40 ຕຸ້ຍ 30 ໂອບີ 30",
        "source": "GL"
      },
      paymentCr: {
        "accountNumber": 1001,
        "bookingDate": "",
        "postingReference": "",
        "debit": 0,
        "credit": 0,
        "description": "Investment",
        // "descriptionLL": "ລົງທຶນ ຊື້ ເຄື່ອງມາຂາຍ ແບ້ 40 ຕຸ້ຍ 30 ໂອບີ 30",
        "source": "GL"
      }
    };
  },
  mounted() {
    this.loadAccount();
    const today = new Date().toISOString().substr(0, 10);
    this.bookingDate = today;
  },
  computed: {
    today() {
      const today = new Date().toLocaleDateString();
      console.log(today);
      return today;
    }
  },
  methods: {
    triggerDialog(v) {
      this.$emit('close', v);
    },
    async loadAccount() {
      this.isloading = true;
      const response = await this.$axios.get('/api/financial/chartAccount');
      response.data.forEach(element => {
        console.log("Account number => ", element["accountNumber"]);
        this.account.push({
          id: element["id"],
          desc: element["accountName"] + " - " + element["accountNumber"]
        });
      });
      this.isloading = false;
    },
    async createPayment() {
      if (this.isloading) return;
      this.isloading = true;
      let responseErrorList = null;
      try {
        this.paymentCr.bookingDate = this.bookingDate;
        this.paymentCr.description = this.paymentDescription;
        this.paymentCr.postingReference = this.postingReference;
        this.paymentCr.credit = this.amount;
        this.paymentDr.bookingDate = this.bookingDate;
        this.paymentDr.description = this.paymentDescription;
        this.paymentDr.postingReference = this.postingReference;
        this.paymentDr.debit = this.amount;
        const responseDr = await this.$axios.post("/api/financial/create", this.paymentDr);
        if (responseDr.data["accountNumber"]) {
          console.log("DR Transaction completed");
          console.log(responseDr.data);
        } else {
          responseErrorList.push({
            type: '',
            msg: 'Can not make dr'
          });
        }
        const responseCr = await this.$axios.post("/api/financial/create", this.paymentCr);
        if (responseCr.data["accountNumber"]) {
          console.log("CR Transaction completed");
          console.log(responseCr.data);
        } else {
          responseErrorList.push({
            type: '',
            msg: 'Can not make dr'
          });
        }
        if (!responseErrorList) {
          Object(myUtil["d" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        } else {
          Object(myUtil["c" /* swalError2 */])(this.$swal, "Error", responseErrorList[0].msg);
        }
      } catch (error) {
        responseErrorList.push({
          type: '',
          msg: 'Can not make dr'
        });
        console.log("Something wrong ===>");
        Object(myUtil["c" /* swalError2 */])(this.$swal, "Error", error.response.data.erors[0]['msg']);
      }
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/GeneralLedgerForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var accounting_GeneralLedgerFormvue_type_script_lang_js_ = (GeneralLedgerFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/accounting/GeneralLedgerForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounting_GeneralLedgerFormvue_type_script_lang_js_,
  GeneralLedgerFormvue_type_template_id_160fe396_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f4f73982"
  
)

/* harmony default export */ var GeneralLedgerForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(110).default})


/***/ })

};;
//# sourceMappingURL=accounting-general-ledger-form.js.map