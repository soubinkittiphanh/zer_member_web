exports.ids = [50,16];
exports.modules = {

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(266);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&








var DialogClassicMessagevue_type_template_id_3accbb34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v(" ຂໍ້ຄວາມ ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v(" ຕົກລົງ ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js&
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js_ = ({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog');
    }
  }
});
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js_ = (DialogClassicMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js_,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "0398c521"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 275:
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

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(275);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(303);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/category/index.vue?vue&type=template&id=1aa187c4&

















var categoryvue_type_template_id_1aa187c4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<span class=\"text-h5\">ລາຍການ ປະເພດສິນຄ້າ</span> "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.dialogForm,
      callback: function ($$v) {
        _vm.dialogForm = $$v;
      },
      expression: "dialogForm"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("ຈັດການປະເພດສິນຄ້າ")])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
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
      "disabled": "",
      "rules": _vm.rule['cat_id'],
      "label": "ໄອດີໝວດສິນຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.form_data.categ_id,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "categ_id", $$v);
      },
      expression: "form_data.categ_id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rule['cat_name'],
      "label": "ຊື່ປະເພດສິນຄ້າ*",
      "required": ""
    },
    model: {
      value: _vm.form_data.categ_name,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "categ_name", $$v);
      },
      expression: "form_data.categ_name"
    }
  }), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "outlined": "",
      "name": "input-7-4",
      "counter": "100",
      "label": "ໝາຍເຫດ"
    },
    model: {
      value: _vm.form_data.categ_desc,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "categ_desc", $$v);
      },
      expression: "form_data.categ_desc"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialogForm = false;
      }
    }
  }, [_vm._v("\n          ປິດ\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.submitDatas
    }
  }, [_vm._v("\n          ບັນທຶກ\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "width": "500",
      "persistent": ""
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ຊອກຫາ",
      "single-line": "",
      "hide-details": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _vm.loadData ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.loadData,
      "items-per-page": 5,
      "search": _vm.search
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          attrs: {
            "flat": ""
          }
        }, [_c(components_VToolbar["a" /* VToolbarTitle */], [_vm._v("ຈຳນວນ ປະເພດສິນຄ້າທັງຫມົດ: " + _vm._s(_vm.loadData.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "mb-2",
          attrs: {
            "color": "primary",
            "dark": ""
          },
          on: {
            "click": function ($event) {
              _vm.dialogForm = true;
              _vm.isedit = false;
            }
          }
        }, [_vm._v("\n            ສ້າງໃຫມ່\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: `item.categ_function`,
      fn: function ({
        item
      }) {
        return [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item);
              _vm.isedit = true;
            }
          }
        }, [_vm._v("\n          mdi-pencil\n        ")])];
      }
    }, {
      key: `item.categ_wallet`,
      fn: function ({
        item
      }) {
        return [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": ""
          },
          on: {
            "click": function ($event) {
              _vm.wallet(item);
              _vm.isedit = true;
            }
          }
        }, [_vm._v("\n          mdi-pencil\n        ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/category/index.vue?vue&type=template&id=1aa187c4&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/category/index.vue?vue&type=script&lang=js&

/* harmony default export */ var categoryvue_type_script_lang_js_ = ({
  middleware: 'auths',
  data: () => ({
    isloading: false,
    isedit: false,
    singleSelect: false,
    selected: [],
    dialog: false,
    dialogForm: false,
    message: '',
    valid: true,
    search: '',
    rule: {
      cat_id: [v => !!v || 'ໄອດິຫມວດ ແມ່ນ ຕ້ອງໃສ່'],
      cat_name: [v => !!v || 'ຊຶ້ຫມວດສິນຄ້າ ແມ່ນ ຕ້ອງໃສ່']
    },
    form_data: {
      categ_id: '1XXXX',
      categ_name: null,
      categ_desc: '',
      createdAt: null
    },
    headers: [{
      text: 'ລະຫັດຫມວດຫມູ່',
      align: 'center',
      sortable: false,
      value: 'categ_id'
    }, {
      text: 'ຊື່ຫມວດຫມູ່',
      align: 'center',
      value: 'categ_name'
    }, {
      text: 'ຫມາຍເຫດ',
      align: 'center',
      value: 'categ_desc'
    }, {
      text: 'ຟັງຊັ່ນ',
      align: 'end',
      value: 'categ_function',
      sortable: false
    }],
    loadData: []
  }),
  watch: {
    message(val) {
      // llll
      if (val != null) {
        this.dialog = true;
        return;
      }
      this.dialog = false;
    },
    isedit(val) {
      if (!val) {
        this.form_data = {
          categ_id: '1XXXX',
          categ_name: null,
          categ_desc: '',
          createdAt: null
        };
      }
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      // this.$refs.form.reset()
      this.form_data.categ_name = '';
      this.form_data.categ_desc = '';
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async submitDatas() {
      if (!this.$refs.form.validate() || this.isloading) {
        this.isloading = false;
        return;
      }
      this.isloading = true;
      const urlpath = '/api/category/';
      if (this.isedit) {
        await this.$axios.put(urlpath + 'update/' + this.form_data.categ_id, this.form_data).then(res => {
          this.dialogForm = false;
          Object(myUtil["d" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          // this.message = res.data
          // this.reset()
        }).catch(er => {
          Object(myUtil["c" /* swalError2 */])(this.$swal, "Error", er);
          // this.message = 'Error: ' + er
        });

        this.isloading = false;
      } else {
        await this.$axios.post(urlpath + 'create', this.form_data).then(res => {
          // this.message = res.data
          this.dialogForm = false;
          Object(myUtil["d" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          // this.reset()
        }).catch(er => {
          Object(myUtil["c" /* swalError2 */])(this.$swal, "Error", er);
          // this.message = 'Error: ' + er
        });

        this.isloading = false;
      }
      this.fetchData();
    },
    async fetchData() {
      this.isloading = true;
      await this.$axios.get('/category_f').then(res => {
        console.log('Data: ' + res.data);
        this.loadData = res.data.map(el => {
          console.log('EL: ' + el.categ_id);
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc,
            categ_function: el.categ_id
          };
        });
      }).catch(er => {
        // console.log('Data: ' + er)
        Object(myUtil["c" /* swalError2 */])(this.$swal, "Error", er);
      });
      this.isloading = false;
    },
    editItem(val) {
      console.log('SHOULD BE ID: ' + val.categ_function);
      const filtData = this.loadData.find(el => el.categ_id === val.categ_function);
      this.form_data = filtData;
      this.dialogForm = true;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/category/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_categoryvue_type_script_lang_js_ = (categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/category/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_categoryvue_type_script_lang_js_,
  categoryvue_type_template_id_1aa187c4_render,
  staticRenderFns,
  false,
  null,
  null,
  "89cde05e"
  
)

/* harmony default export */ var category = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(272).default,LoadingIndicator: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=index.js.map