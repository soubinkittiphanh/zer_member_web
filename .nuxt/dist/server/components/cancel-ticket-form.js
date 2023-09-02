exports.ids = [6];
exports.modules = {

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(289);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CancelTicketForm.vue?vue&type=template&id=735971cb&









var CancelTicketFormvue_type_template_id_735971cb_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_vm._v("\n        ຍົກເລີກບິນ\n        "), _c(VForm["a" /* default */], {
    ref: "myform",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "ເລກທີອໍເດີ ",
      "required": ""
    },
    model: {
      value: _vm.form.orderId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "orderId", $$v);
      },
      expression: "form.orderId"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.cancelList,
      "label": "ເລືອກການຍົກເລີກ *"
    },
    model: {
      value: _vm.form.status,
      callback: function ($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເຫດຜົນການຍົກເລີກ"
    },
    model: {
      value: _vm.form.reason,
      callback: function ($$v) {
        _vm.$set(_vm.form, "reason", $$v);
      },
      expression: "form.reason"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                ຍົກເລີກ\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.submitForm(true);
      }
    }
  }, [_vm._v("\n                ບັນທຶກ\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CancelTicketForm.vue?vue&type=template&id=735971cb&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CancelTicketForm.vue?vue&type=script&lang=js&

/* harmony default export */ var CancelTicketFormvue_type_script_lang_js_ = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      require: false
    }
  },
  data() {
    return {
      isSubmitting: false,
      form: {
        orderId: this.id,
        status: 2,
        userId: '',
        reason: ''
      },
      cancelList: [{
        id: 2,
        name: 'cancel'
      }, {
        id: 3,
        name: 'return'
      }]
    };
  },
  computed: {
    codeRule() {
      return [v => !!v || 'ກະລຸນາ ໃສ່ຕົວຫຍໍ້ ສາຂາ ', v => v && v.length >= 2 || 'ຕົວຫຍໍ້ສາຂາຕ້ອງ 3 ຕົວຂື້ນໄປ'];
    },
    nameRule() {
      return [v => !!v || 'ກະລຸນາ ຊື່ ສາຂາ '];
    },
    numberRule() {
      return [v => /^[0-9]*$/.test(v) || !v || 'ໃສ່ໄດ້ສະເພາະ ຕົວເລກ'];
    }
  },
  mounted() {
    this.loadBranch();
  },
  computed: {
    user() {
      return this.$auth.user || '';
    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.myform.validate() && !this.isSubmitting) {
        this.isSubmitting = true;
        // Form is valid, submit it
        if (this.isEdit) {
          await this.$axios.put(`branch/update/${this.id}`, this.form).then(response => {
            if (response.status == 200) {
              Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
              // Reload data
              this.refreshData();
            } else {
              Object(common["j" /* swalError2 */])(this.$swal, "Error", response.data);
            }
          }).catch(error => {
            Object(common["j" /* swalError2 */])(this.$swal, "Error", error.response.data.errors[0]['msg']);
          });
        } else {
          // orderId, status, userId, reason
          this.form.userId = this.user.id;
          console.log("Form: ", this.form);
          // return;
          await this.$axios.put("/api/changeOrderStatus", this.form).then(response => {
            if (response.status == 200) {
              Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
              // Reload data
              this.refreshData();
            } else {
              Object(common["j" /* swalError2 */])(this.$swal, "Error", response.data);
            }
          }).catch(error => {
            Object(common["j" /* swalError2 */])(this.$swal, "Error", error.response.data.errors[0]['msg']);
          });
        }
      } else {
        // Form is invalid, do not submit
        return;
      }
      this.isSubmitting = false;
    },
    async loadBranch() {
      if (this.id && this.isEdit) {
        this.isSubmitting = true;
        await this.$axios.get(`branch/find/${this.id}`).then(response => {
          // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          this.form = response.data;
        }).catch(error => {
          Object(common["j" /* swalError2 */])(this.$swal, "Error", error.response.data.errors[0]['msg']);
        });
        this.isSubmitting = false;
      }
    },
    refreshData() {
      this.$emit('refresh');
    }
  }
});
// CONCATENATED MODULE: ./components/CancelTicketForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CancelTicketFormvue_type_script_lang_js_ = (CancelTicketFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./components/CancelTicketForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CancelTicketFormvue_type_script_lang_js_,
  CancelTicketFormvue_type_template_id_735971cb_render,
  staticRenderFns,
  false,
  null,
  null,
  "f914fd46"
  
)

/* harmony default export */ var CancelTicketForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(115).default})


/***/ })

};;
//# sourceMappingURL=cancel-ticket-form.js.map