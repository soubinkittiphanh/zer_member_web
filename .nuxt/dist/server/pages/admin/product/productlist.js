exports.ids = [84,9,16,17,37,38,83,103];
exports.modules = {

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

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
var componentNormalizer = __webpack_require__(12);

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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 295:
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      imagesPreviewURL: [],
      files: []
    };
  },
  methods: {
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input
      this.files = payload;
      if (file) {
        console.log('FILE LEN: ' + file.length);
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size)
          });
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null;
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 20000000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(271)["URL"]))

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=template&id=7fa244e4&







var DiaImagevue_type_template_id_7fa244e4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v(" Image preview ")]), _vm._v(" "), _c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.iUrl || 'No image'
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "color": "blue darken-1"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.$emit('closeDia');
      }
    }
  }, [_vm._v("\n      ປິດ\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=template&id=7fa244e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=script&lang=js&
/* harmony default export */ var DiaImagevue_type_script_lang_js_ = ({
  props: ['iUrl']
});
// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiaImagevue_type_script_lang_js_ = (DiaImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./components/DiaImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaImagevue_type_script_lang_js_,
  DiaImagevue_type_template_id_7fa244e4_render,
  staticRenderFns,
  false,
  null,
  null,
  "2d8e45e3"
  
)

/* harmony default export */ var DiaImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
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

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _util_myUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _pages_product_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(343);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  middleware: 'auths',
  mixins: [_pages_product_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"]],
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    host() {
      return Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* hostName */ "g"])();
    }
  },
  mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id);
    this.pro_id = this.headerId;
    this.formData.pro_id = this.headerId;
    console.log('Mounted: ');
    this.fetchProId(this.headerId);
    this.fetchCategory();
    this.fetchOutlet();
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id);
    console.log('PRO DEFUALT ID: ' + this.pro_id);
    return /^\d+$/.test(data.params.id);
  },
  data() {
    return {
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
      rules: {
        nameRule: [v => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ', v => v && v.length <= 150 || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ'],
        priceRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        minRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        costPrice: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        retailRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + " Each: " + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || "ຂະຫນາດເກີນ";
        }]
      },
      preview: false,
      previewSrc: null,
      title: 'Update product',
      valid: false,
      category: [],
      formData: {
        // outlet:1,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        pro_outlet: 1,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1
      },
      outlet: [],
      isLoading: false,
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null
      // formData: {}
    };
  },

  methods: {
    validateLocal() {
      console.log('VALIDATING...');
      this.$refs.formLocal.validate();
    },
    async fetchCategory() {
      this.isLoading = true;
      await this.$axios.get('category_f').then(res => {
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    async fetchOutlet() {
      this.isLoading = true;
      await this.$axios.get('outlet').then(res => {
        console.log('=>outlet' + res.data);
        this.outlet = res.data.map(el => {
          return {
            outlet_id: el.id,
            outlet_name: el.name,
            outlet_tel: el.tel
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    },
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input
      this.files = payload;
      if (file) {
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size)
          });
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null;
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
      this.deleteFileFrServ(idx);
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 20000000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    },
    async fetchProId(id) {
      this.isLoading = true;
      console.log('FECT ID:' + id);
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        console.log('Product ID ' + res.data);
        const el = res.data[0];
        console.log("===> Min stock", el.minStock);
        const image = res.data[0].img_name == null ? [] : res.data.map(el => {
          return {
            name: el.img_name,
            path: el.img_path
          };
        });
        this.formData = {
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status === 1 || false,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          outlet: el.outlet,
          minStock: el.minStock,
          barCode: el.barCode,
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          pro_image: image
        };
        console.log('IMAGE COUNT: ' + this.formData.pro_image.length);
      }).catch(er => {
        console.log('Error: ' + er);
        this.message = er;
      });
      this.isLoading = false;
    },
    async deleteFileFrServ(idx) {
      //   v && this.deleteFileFrServ'

      Object(_util_myUtil__WEBPACK_IMPORTED_MODULE_0__[/* confirmSwal */ "a"])(this.$swal, 'warning', async () => {
        console.log("Delete record function");
        this.isLoading = true;
        await this.$axios.post('/unlink_file', {
          img_name: this.formData.pro_image[idx].name
        }).then(res => {
          res.data === 'Transaction completed' && this.formData.pro_image.splice(idx, 1);
          // this.message = res.data
          Object(_util_myUtil__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "c"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          this.message = er.error;
        });
        this.isLoading = false;
      });
    },
    async uploadFilesLocal() {
      console.log("===> Upload data");
      if (!this.$refs.formLocal.validate()) {
        return;
      }
      this.isLoading = true;
      const formData = new FormData();
      formData.append('FORM', JSON.stringify(this.formData));
      if (this.files) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      await this.$axios.post('uploadmulti_update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.$emit('close-dialog');
        this.$emit('refresh');
        Object(_util_myUtil__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "c"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        // this.message = res.data
      }).catch(er => {
        // this.message = er.response.data
        Object(_util_myUtil__WEBPACK_IMPORTED_MODULE_0__[/* swalError2 */ "b"])(this.$swal, "Error", er.response.data);
      });
      this.isLoading = false;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(271)["URL"]))

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("75161fa9", content, true, context)
};

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/mixins/ImagePreviewMixin.vue?vue&type=script&lang=js&
var ImagePreviewMixinvue_type_script_lang_js_ = __webpack_require__(298);

// CONCATENATED MODULE: ./pages/admin/product/mixins/ImagePreviewMixin.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ImagePreviewMixinvue_type_script_lang_js_ = (ImagePreviewMixinvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/admin/product/mixins/ImagePreviewMixin.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ImagePreviewMixinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39a945b2"
  
)

/* harmony default export */ var ImagePreviewMixin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5739cdbd", content, true, context)
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dfde11f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dfde11f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dfde11f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dfde11f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dfde11f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 341:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(311);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=template&id=c35dc16a&scoped=true&
























var ProductFormCreatevue_type_template_id_c35dc16a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px",
      "persistent": ""
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
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
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "outlet_name",
      "item-value": "outlet_id",
      "items": _vm.outlet,
      "label": "ຮ້ານ*"
    },
    model: {
      value: _vm.formData.outlet,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "outlet", $$v);
      },
      expression: "formData.outlet"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "value": _vm.formData.pro_id || '1XXX',
      "counter": 10,
      "label": "ໄອດີສິນຄ້າ",
      "disabled": "",
      "required": ""
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 50,
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ*",
      "type": "number",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "number",
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ*",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "number",
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາສົ່ງ %",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "rules": _vm.rules.imageRule,
      "multiple": "",
      "accept": "image/png, image/jpeg, image/bmp",
      "placeholder": "Pick an avatar",
      "prepend-icon": "mdi-camera",
      "label": "ຮູບພາບຫລາຍພາບ"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "number",
      "rules": _vm.rules.minRule,
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "required": ""
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "barcode",
      "required": ""
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບເຄື່ອງ*"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍນັບສາງ*"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "outlined": "",
      "name": "input-7-4",
      "counter": "100",
      "label": "ຄຳອະທິບາຍ",
      "value": "abc"
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1)], 1), _vm._v(" "),  false ? undefined : _vm._e(), _vm._v(" "), _c('div', [_c(VList["a" /* default */], {
    attrs: {
      "three-line": ""
    }
  }, [_vm._l(_vm.imagesPreviewURL, function (item, index) {
    return [_c(VListItem["a" /* default */], {
      key: index
    }, [_c(VListItemAvatar["a" /* default */], {
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
      domProps: {
        "innerHTML": _vm._s(item.NAME)
      }
    }), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
      domProps: {
        "innerHTML": _vm._s(item.isvalid)
      }
    })], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "text": "",
        "color": "blue darken-1"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.deleteFile(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
      key: index + item.NAME
    })];
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": _vm.uploadFiles
    }
  }, [_vm._v("\n        Save\n      ")])], 1)], 1), _vm._ssrNode(" "), _c('nuxt-child')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=template&id=c35dc16a&scoped=true&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(116);

// EXTERNAL MODULE: ./pages/admin/product/mixins/ImagePreviewMixin.vue + 1 modules
var ImagePreviewMixin = __webpack_require__(324);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=script&lang=js&
// import ImagePreviewMixin from '../m/mixins/ImagePreviewMixin.vue'



/* harmony default export */ var ProductFormCreatevue_type_script_lang_js_ = ({
  middleware: 'auths',
  mixins: [ImagePreviewMixin["default"]],
  data() {
    return {
      preview: false,
      previewSrc: null,
      dialog: false,
      dialogMessage: false,
      message: '',
      isloading: false,
      valid: true,
      name: '',
      title: 'Create product',
      rules: {
        nameRule: [v => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ', v => v && v.length <= 150 || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ'],
        priceRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        minRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        costPrice: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        retailRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + " Each: " + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || "ຂະຫນາດເກີນ";
        }]
      },
      category: [],
      formData: {
        outlet: 1,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        pro_outlet: 1,
        pro_cost_price: 0,
        createdAt: null,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1
      },
      outlet: []
    };
  },
  mounted() {
    this.fetchCategory();
    this.fetchOutlet();
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    },
    formData(obj) {
      console.log('Watch fromData' + obj);
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async fetchCategory() {
      this.isloading = true;
      await this.$axios.get('category_f').then(res => {
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isloading = false;
    },
    async fetchOutlet() {
      this.isloading = true;
      await this.$axios.get('outlet').then(res => {
        console.log('=>outlet' + res.data);
        this.outlet = res.data.map(el => {
          return {
            outlet_id: el.id,
            outlet_name: el.name,
            outlet_tel: el.tel
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isloading = false;
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return;
      }
      console.log('Outlet: ' + this.formData.outlet);
      this.isloading = true;
      const formData = new FormData();
      formData.append('FORM', JSON.stringify(this.formData));
      this.files.forEach(element => {
        formData.append('files', element);
      });
      await this.$axios.post('uploadmulti', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.isloading = false;
        Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        this.$emit('refresh');
        this.$emit('close-dialog');
        // this.message = res.data
      }).catch(er => {
        this.isloading = false;
        Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", er);
        // this.message = er.response.data
      });
    },

    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductFormCreatevue_type_script_lang_js_ = (ProductFormCreatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormCreatevue_type_script_lang_js_,
  ProductFormCreatevue_type_template_id_c35dc16a_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "c35dc16a",
  "1a7aefca"
  
)

/* harmony default export */ var ProductFormCreate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(293).default,LoadingIndicator: __webpack_require__(115).default,DiaImage: __webpack_require__(310).default})


/***/ }),

/***/ 342:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(311);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=template&id=44cf9046&
























var ProductFormvue_type_template_id_44cf9046_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isLoading,
      callback: function ($$v) {
        _vm.isLoading = $$v;
      },
      expression: "isLoading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
    ref: "formLocal",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validLocal,
      callback: function ($$v) {
        _vm.validLocal = $$v;
      },
      expression: "validLocal"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "outlet_name",
      "item-value": "outlet_id",
      "items": _vm.outlet,
      "label": "ຮ້ານ*"
    },
    model: {
      value: _vm.formData.outlet,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "outlet", $$v);
      },
      expression: "formData.outlet"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "disabled": !!_vm.formData.pro_id,
      "label": "ໄອດີສິນຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_id,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_id", $$v);
      },
      expression: "formData.pro_id"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 50,
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ*",
      "type": "number",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "number",
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ*",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "number",
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາສົ່ງ %",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "rules": _vm.rules.imageRule,
      "multiple": "",
      "accept": "image/png, image/jpeg, image/bmp",
      "placeholder": "Pick an avatar",
      "prepend-icon": "mdi-camera",
      "label": "ຮູບພາບຫລາຍພາບ"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "number",
      "rules": _vm.rules.minRule,
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "required": ""
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "barcode",
      "required": ""
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບເຄື່ອງ*"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍນັບສາງ*"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "outlined": "",
      "name": "input-7-4",
      "counter": "100",
      "label": "ຄຳອະທິບາຍ",
      "value": "abc"
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1)], 1), _vm._v(" "), _c('div', _vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c(VCard["a" /* default */], {
      key: idx,
      staticClass: "pa-md-6 mx-lg-auto"
    }, [_c(VRow["a" /* default */], {
      attrs: {
        "justify": "space-around"
      }
    }, [_c(VListItemAvatar["a" /* default */], {
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.previewImg(`${_vm.host}/uploads/${img.name}`);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": `${_vm.host}/uploads/${img.name}`
      }
    })], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "text": "",
        "color": "blue darken-1"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.deleteFileFrServ(idx);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])], 1)], 1);
  }), 1), _vm._v(" "), _c('div', [_c(VList["a" /* default */], {
    attrs: {
      "three-line": ""
    }
  }, [_vm._l(_vm.imagesPreviewURL, function (item, index) {
    return [_c(VListItem["a" /* default */], {
      key: index
    }, [_c(VListItemAvatar["a" /* default */], {
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
      domProps: {
        "innerHTML": _vm._s(item.NAME)
      }
    }), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
      domProps: {
        "innerHTML": _vm._s(item.isvalid)
      }
    })], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "text": "",
        "color": "blue darken-1"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.deleteFileFrServ(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
      key: index + item.NAME
    })];
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
      "click": _vm.uploadFilesLocal
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=template&id=44cf9046&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=script&lang=js&
var ProductFormvue_type_script_lang_js_ = __webpack_require__(316);

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductFormvue_type_script_lang_js_ = (ProductFormvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./components/product/ProductForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormvue_type_script_lang_js_,
  ProductFormvue_type_template_id_44cf9046_render,
  staticRenderFns,
  false,
  null,
  null,
  "5abafb82"
  
)

/* harmony default export */ var ProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(115).default,DiaImage: __webpack_require__(310).default})


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(350);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/index.vue?vue&type=template&id=6dfde11f&
















var productvue_type_template_id_6dfde11f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          class: {
            'on-hover': hover
          },
          attrs: {
            "elevation": hover ? 16 : 2
          }
        }, [_c('router-link', {
          attrs: {
            "to": `/movie/${_vm.movie.id}`
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "src": _vm.posterPath,
            "alt": ""
          }
        })], 1)], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c('h1', {
    staticClass: "grey--text text-darken-3 mt-5"
  }, [_vm._v(_vm._s(this.movie.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "2"
    }
  }, [_c(VRating["a" /* default */], {
    attrs: {
      "value": _vm.movie.vote_average / 2,
      "color": "amber",
      "dense": "",
      "half-increments": "",
      "readonly": "",
      "size": "14"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "3"
    }
  }, [_c('span', {
    staticClass: "gray--text ml-n7"
  }, [_vm._v("\n                            " + _vm._s(_vm.movie.vote_average * 10) + "% | " + _vm._s(_vm.movie.release_date) + "\n                        ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "7"
    }
  }, [_c('div', {
    staticClass: "subtitle-2 grey--text ml-n16"
  }, _vm._l(_vm.movie.genres, function (item, index) {
    return _c('span', {
      key: index,
      staticClass: "ml-1"
    }, [_vm._v("\n                                " + _vm._s(item.name) + "\n                                "), _vm.movie.genres.length - 1 != index ? _c('span', [_vm._v(",")]) : _vm._e()]);
  }), 0)])], 1), _vm._v(" "), _c('p', {
    staticClass: "mt-5 grey--text text--darken-3 subheader"
  }, [_vm._v(_vm._s(this.movie.overview))]), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', {
    staticClass: "mt-5 grey--text text--darken-3"
  }, [_vm._v("Featured Cast")]), _vm._v(" "), _vm._l(_vm.movie.credits.crew, function (crew, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-5"
    }, [index < 2 ? _c('div', {}, [_c('h3', [_vm._v(_vm._s(crew.name))]), _vm._v(" "), _c('span', {
      staticClass: "grey--text"
    }, [_vm._v(_vm._s(crew.job))])]) : _vm._e()]);
  })], 2), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "persistent": "",
      "max-width": "800px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "tile": "",
            "color": "error"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.openYouTubeModel.apply(null, arguments);
            }
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
          attrs: {
            "left": ""
          }
        }, [_vm._v("mdi-play")]), _vm._v("Play\n                        ")], 1)];
      }
    }]),
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_vm._v(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(this.movie.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": ""
    }
  }, [_c('div', {
    staticClass: "iframe-container"
  }, [!_vm.isVideo ? _c('img', {
    attrs: {
      "src": _vm.mediaURL
    }
  }) : _vm._e(), _vm._v(" "), _vm.isVideo ? _c('iframe', {
    attrs: {
      "allowfullscreen": "",
      "src": _vm.mediaURL
    }
  }) : _vm._e()])])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = _vm.flase;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "tile": "",
      "color": "error"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-heart")]), _vm._v("Favorite\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._v(" "), _c('Cast', {
    attrs: {
      "casts": _vm.movie.credits.cast
    }
  }), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._v(" "), _c('Images', {
    attrs: {
      "images": _vm.movie.images.backdrops
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product/index.vue?vue&type=template&id=6dfde11f&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/product/index.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  productvue_type_template_id_6dfde11f_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "de43dc5c"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(314);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "H"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return {
        ..._VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },
    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(bytes, this.base === 1024));
    },
    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "H"])(this.internalValue);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }
    },
    isDirty() {
      return this.internalArrayValue.length > 0;
    },
    isLabelActive() {
      return this.isDirty;
    },
    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(size, this.base === 1024)})`;
      });
    },
    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },
    hasChips() {
      return this.chips || this.smallChips;
    }
  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])('readonly is not supported on <v-file-input>', this);
      },
      immediate: true
    },
    value(v) {
      const value = this.multiple ? v : v ? [v] : [];
      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "k"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }
  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },
    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },
    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControl.call(this);
      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__[/* mergeStyles */ "d"])(render.data.style, {
          display: 'none'
        });
      }
      return render;
    },
    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },
    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },
    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },
    genSelections() {
      const children = [];
      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }
      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },
    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genTextFieldSlot.call(this);
      node.data.on = {
        ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },
    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },
    onKeyDown(e) {
      this.$emit('keydown', e);
    },
    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
  }
}));

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_c35dc16a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_c35dc16a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_c35dc16a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_c35dc16a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_c35dc16a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grey[data-v-c35dc16a],.text-h5[data-v-c35dc16a]{font-family:\"Noto Sans Lao\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* createRange */ "i"])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));

/***/ }),

/***/ 366:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=template&id=15c17112&












var cardFormvue_type_template_id_15c17112_render = function render() {
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
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.locationList,
      "label": "Source location*"
    },
    model: {
      value: _vm.srcLocationId,
      callback: function ($$v) {
        _vm.srcLocationId = $$v;
      },
      expression: "srcLocationId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
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

// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=template&id=15c17112&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(18);

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
      isSubmitting: false,
      locationList: [],
      srcLocationId: 1
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
  created() {
    this.loadLocation();
  },
  methods: {
    async loadLocation(item) {
      this.isloading = true;
      await this.$axios.get(`api/location/find`).then(res => {
        this.locationList = res.data.map(el => el);
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Operation fail ' + er.Error);
      });
      this.isloading = false;
    },
    async stockSubmit() {
      if (this.$refs.myform.validate() && !this.isSubmitting) {
        this.isSubmitting = true;
        const stockData = {
          inputter: this.user.id,
          product_id: this.productId,
          stockCardQty: this.stockQty,
          totalCost: this.stockCost,
          productId: this.id,
          srcLocationId: this.srcLocationId
        };
        console.log("Pre fly ", stockData);
        // return
        await this.$axios.post('/api/card/bulkCreate', stockData).then(res => {
          console.log(res.data);
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          // this.fetchData() // UPDATE PRODUCT UI
          this.$emit('reload');
          this.$emit('close-dialog');
        }).catch(error => {
          console.log(error);
          Object(common["j" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_cardFormvue_type_script_lang_js_ = (cardFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./components/card/cardForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_cardFormvue_type_script_lang_js_,
  cardFormvue_type_template_id_15c17112_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ff06782"
  
)

/* harmony default export */ var cardForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(115).default})


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(290);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/productlist.vue?vue&type=template&id=40167139&














var productlistvue_type_template_id_40167139_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<h1>" + _vm._ssrEscape("PRODUCT LIST " + _vm._s(_vm.barcode)) + "</h1> "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px"
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
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
      "max-width": "600px"
    },
    model: {
      value: _vm.isstock,
      callback: function ($$v) {
        _vm.isstock = $$v;
      },
      expression: "isstock"
    }
  }, [_c('card-form', {
    key: _vm.stockFormKey,
    attrs: {
      "product-id": _vm.selectedProductId,
      "id": _vm.selectedId,
      "cost": _vm.selectedProductCost,
      "product-name": _vm.selectedProductName
    },
    on: {
      "close-dialog": function ($event) {
        _vm.isstock = false;
      },
      "reload": _vm.rebuildStock
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px"
    },
    model: {
      value: _vm.editProductForm,
      callback: function ($$v) {
        _vm.editProductForm = $$v;
      },
      expression: "editProductForm"
    }
  }, [_c('product-form', {
    key: _vm.productFormKey,
    attrs: {
      "header-id": _vm.selectedProductId,
      "isEdit": _vm.editProductForm
    },
    on: {
      "close-dialog": function ($event) {
        _vm.editProductForm = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px"
    },
    model: {
      value: _vm.productFormCreate,
      callback: function ($$v) {
        _vm.productFormCreate = $$v;
      },
      expression: "productFormCreate"
    }
  }, [_c('product-form-create', {
    on: {
      "close-dialog": function ($event) {
        _vm.productFormCreate = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "6",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ຊອກຫາ",
      "single-line": "",
      "hide-detailsx": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.rebuildStock
    }
  }, [_c('span', {
    staticClass: "mdi mdi-update"
  }), _vm._v("\n            Refresh\n          ")])], 1)], 1)], 1), _vm._v(" "), _vm.loaddata ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.loaddata,
      "items-per-page": _vm.pageLine
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          attrs: {
            "flat": ""
          }
        }, [_c(components_VToolbar["a" /* VToolbarTitle */], [_vm._v("ສິນຄ້າທັງຫມົດ: " + _vm._s(_vm.loaddata.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "primary",
          attrs: {
            "size": "large",
            "variant": "outlined",
            "rounded": ""
          },
          on: {
            "click": function ($event) {
              _vm.productFormCreate = true;
            }
          }
        }, [_c('span', {
          staticClass: "mdi mdi-note-plus-outline"
        }), _vm._v("\n            ສ້າງສິນຄ້າໃຫມ່\n          ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "primary",
          attrs: {
            "size": "large",
            "variant": "outlined",
            "rounded": ""
          },
          on: {
            "click": _vm.importStock
          }
        }, [_c('span', {
          staticClass: "mdi mdi-note-plus-outline"
        }), _vm._v("\n            Impor stock\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: `item.functionEdit`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-pencil-square-o"
        })])];
      }
    }, {
      key: `item.functionStock`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.triggerCardForm(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-cart-plus"
        })])];
      }
    }, {
      key: `item.functionStockView`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editStock(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-eye"
        })])];
      }
    }, {
      key: `item.pro_cost_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_cost_price)) + "\n\n      ")];
      }
    }, {
      key: `item.pro_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_price)) + "\n\n      ")];
      }
    }, {
      key: `item.pro_card_count`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n\n        " + _vm._s(item.pro_card_count) + "\n\n\n      ")];
      }
    }, {
      key: `item.minStock`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.minStock)) + "\n      ")];
      }
    }, {
      key: `item.status`,
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          staticClass: "ma-2",
          attrs: {
            "color": _vm.verifyStockStatus(item.minStock, item.pro_card_count).includes(`In`) ? `green` : _vm.verifyStockStatus(item.minStock, item.pro_card_count).includes(`Out`) ? `red` : `orange`,
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.verifyStockStatus(item.minStock, item.pro_card_count)) + "\n        ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/product/productlist.vue?vue&type=template&id=40167139&

// EXTERNAL MODULE: ./components/product/ProductForm.vue + 3 modules
var ProductForm = __webpack_require__(342);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(18);

// EXTERNAL MODULE: ./components/product/ProductFormCreate.vue + 4 modules
var ProductFormCreate = __webpack_require__(341);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/productlist.vue?vue&type=script&lang=js&




/* harmony default export */ var productlistvue_type_script_lang_js_ = ({
  components: {
    ProductForm: ProductForm["default"],
    ProductFormCreate: ProductFormCreate["default"]
  },
  middleware: 'auths',
  data() {
    return {
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      barcode: '',
      timer: null,
      headers: [{
        text: 'key',
        align: 'center',
        value: 'id'
      }, {
        text: 'ໄອດີ',
        align: 'center',
        value: 'pro_id'
      }, {
        text: 'ຊື່ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      },
      // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
      {
        text: 'ຫມວດສິນຄ້າ',
        align: 'center',
        value: 'pro_category_desc'
      }, {
        text: 'ລາຄາ',
        align: 'center',
        value: 'pro_price'
      },
      // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
      {
        text: 'minStock',
        align: 'center',
        value: 'minStock'
      }, {
        text: 'Stock',
        align: 'center',
        value: 'pro_card_count'
      }, {
        text: 'Status',
        align: 'center',
        value: 'status'
      }, {
        text: 'cost',
        align: 'center',
        value: 'pro_cost_price'
      }, {
        text: 'ເພີ່ມສະຕັອກ',
        align: 'center',
        value: 'functionStock',
        sortable: false
      }, {
        text: 'ເບິ່ງສະຕັອກ',
        align: 'center',
        value: 'functionStockView',
        sortable: false
      }, {
        text: 'ແກ້ໄຂ',
        align: 'center',
        value: 'functionEdit',
        sortable: false
      }]
    };
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    }
  },
  async mounted() {
    await this.fetchData();
    await this.loadCardCategory();
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    async importStock() {
      const stockImportList = [{
        'inputter': 1000,
        'product_id': 1001,
        'stockCardQty': 4,
        'totalCost': 320000,
        'productId': 1,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1002,
        'stockCardQty': 1,
        'totalCost': 230000,
        'productId': 2,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1003,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 3,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1004,
        'stockCardQty': 1,
        'totalCost': 457000,
        'productId': 4,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1005,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 5,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1006,
        'stockCardQty': 2,
        'totalCost': 358000,
        'productId': 6,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1007,
        'stockCardQty': 2,
        'totalCost': 348000,
        'productId': 7,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1008,
        'stockCardQty': 2,
        'totalCost': 400000,
        'productId': 8,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1009,
        'stockCardQty': 2,
        'totalCost': 380000,
        'productId': 9,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1010,
        'stockCardQty': 2,
        'totalCost': 577000,
        'productId': 10,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1011,
        'stockCardQty': 2,
        'totalCost': 636000,
        'productId': 11,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1012,
        'stockCardQty': 2,
        'totalCost': 636000,
        'productId': 12,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1013,
        'stockCardQty': 6,
        'totalCost': 307000,
        'productId': 13,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1014,
        'stockCardQty': 6,
        'totalCost': 307000,
        'productId': 14,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1015,
        'stockCardQty': 9,
        'totalCost': 307000,
        'productId': 15,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1016,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 16,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1017,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 17,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1018,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 18,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1019,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 19,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1020,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 20,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1021,
        'stockCardQty': 2,
        'totalCost': 250000,
        'productId': 21,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1022,
        'stockCardQty': 4,
        'totalCost': 655000,
        'productId': 22,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1023,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 23,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1024,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 24,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1025,
        'stockCardQty': 3,
        'totalCost': 0,
        'productId': 25,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1026,
        'stockCardQty': 9,
        'totalCost': 0,
        'productId': 26,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1027,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 27,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1028,
        'stockCardQty': 2,
        'totalCost': 240000,
        'productId': 28,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1029,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 29,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1030,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 30,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1031,
        'stockCardQty': 1,
        'totalCost': 520000,
        'productId': 31,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1032,
        'stockCardQty': 4,
        'totalCost': 355000,
        'productId': 32,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1033,
        'stockCardQty': 1,
        'totalCost': 587000,
        'productId': 33,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1034,
        'stockCardQty': 18,
        'totalCost': 0,
        'productId': 34,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1035,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 35,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1036,
        'stockCardQty': 2,
        'totalCost': 447000,
        'productId': 36,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1037,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 37,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1038,
        'stockCardQty': 2,
        'totalCost': 385000,
        'productId': 38,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1039,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 39,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1040,
        'stockCardQty': 36,
        'totalCost': 0,
        'productId': 40,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1041,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 41,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1042,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 42,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1043,
        'stockCardQty': 6,
        'totalCost': 254000,
        'productId': 43,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1044,
        'stockCardQty': 24,
        'totalCost': 0,
        'productId': 44,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1045,
        'stockCardQty': 36,
        'totalCost': 283000,
        'productId': 45,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1046,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 46,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1047,
        'stockCardQty': 1,
        'totalCost': 925000,
        'productId': 47,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1048,
        'stockCardQty': 1,
        'totalCost': 925000,
        'productId': 48,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1049,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 49,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1050,
        'stockCardQty': 2,
        'totalCost': 450000,
        'productId': 50,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1051,
        'stockCardQty': 1,
        'totalCost': 475000,
        'productId': 51,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1052,
        'stockCardQty': 1,
        'totalCost': 400000,
        'productId': 52,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1053,
        'stockCardQty': 1,
        'totalCost': 400000,
        'productId': 53,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1054,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 54,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1055,
        'stockCardQty': 2,
        'totalCost': 705000,
        'productId': 55,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1056,
        'stockCardQty': 10,
        'totalCost': 0,
        'productId': 56,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1057,
        'stockCardQty': 1,
        'totalCost': 741000,
        'productId': 57,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1058,
        'stockCardQty': 1,
        'totalCost': 705000,
        'productId': 58,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1059,
        'stockCardQty': 1,
        'totalCost': 708000,
        'productId': 59,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1060,
        'stockCardQty': 4,
        'totalCost': 567000,
        'productId': 60,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1061,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 61,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1062,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 62,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1063,
        'stockCardQty': 2,
        'totalCost': 735000,
        'productId': 63,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1064,
        'stockCardQty': 1,
        'totalCost': 512000,
        'productId': 64,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1065,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 65,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1066,
        'stockCardQty': 1,
        'totalCost': 320000,
        'productId': 66,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1067,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 67,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1068,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 68,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1069,
        'stockCardQty': 2,
        'totalCost': 795000,
        'productId': 69,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1070,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 70,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1071,
        'stockCardQty': 10,
        'totalCost': 0,
        'productId': 71,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1072,
        'stockCardQty': 1,
        'totalCost': 225000,
        'productId': 72,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1073,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 73,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1074,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 74,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1075,
        'stockCardQty': 4,
        'totalCost': 300000,
        'productId': 75,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1076,
        'stockCardQty': 2,
        'totalCost': 362000,
        'productId': 76,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1077,
        'stockCardQty': 1,
        'totalCost': 358000,
        'productId': 77,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1078,
        'stockCardQty': 1,
        'totalCost': 358000,
        'productId': 78,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1079,
        'stockCardQty': 6,
        'totalCost': 414000,
        'productId': 79,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1080,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 80,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1081,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 81,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1082,
        'stockCardQty': 20,
        'totalCost': 0,
        'productId': 82,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1083,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 83,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1084,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 84,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1085,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 85,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1086,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 86,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1087,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 87,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1088,
        'stockCardQty': 2,
        'totalCost': 342000,
        'productId': 88,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1089,
        'stockCardQty': 2,
        'totalCost': 400000,
        'productId': 89,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1090,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 90,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1091,
        'stockCardQty': 1,
        'totalCost': 335000,
        'productId': 91,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1092,
        'stockCardQty': 4,
        'totalCost': 328000,
        'productId': 92,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1093,
        'stockCardQty': 0,
        'totalCost': 285000,
        'productId': 93,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1094,
        'stockCardQty': 2,
        'totalCost': 580000,
        'productId': 94,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1095,
        'stockCardQty': 6,
        'totalCost': 263000,
        'productId': 95,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1096,
        'stockCardQty': 18,
        'totalCost': 330000,
        'productId': 96,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1097,
        'stockCardQty': 4,
        'totalCost': 320000,
        'productId': 97,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1098,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 98,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1099,
        'stockCardQty': 60,
        'totalCost': 0,
        'productId': 99,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1100,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 100,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1101,
        'stockCardQty': 20,
        'totalCost': 0,
        'productId': 101,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1102,
        'stockCardQty': 6,
        'totalCost': 290000,
        'productId': 102,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1103,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 103,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1104,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 104,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1105,
        'stockCardQty': 2,
        'totalCost': 307000,
        'productId': 105,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1106,
        'stockCardQty': 2,
        'totalCost': 533000,
        'productId': 106,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1107,
        'stockCardQty': 4,
        'totalCost': 360000,
        'productId': 107,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1108,
        'stockCardQty': 6,
        'totalCost': 240000,
        'productId': 108,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1109,
        'stockCardQty': 4,
        'totalCost': 240000,
        'productId': 109,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1110,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 110,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1111,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 111,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1112,
        'stockCardQty': 2,
        'totalCost': 725000,
        'productId': 112,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1113,
        'stockCardQty': 10,
        'totalCost': 370000,
        'productId': 113,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1114,
        'stockCardQty': 36,
        'totalCost': 125000,
        'productId': 114,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1115,
        'stockCardQty': 36,
        'totalCost': 0,
        'productId': 115,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1116,
        'stockCardQty': 4,
        'totalCost': 537000,
        'productId': 116,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1117,
        'stockCardQty': 2,
        'totalCost': 480000,
        'productId': 117,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1118,
        'stockCardQty': 4,
        'totalCost': 219000,
        'productId': 118,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1119,
        'stockCardQty': 2,
        'totalCost': 239000,
        'productId': 119,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1120,
        'stockCardQty': 1,
        'totalCost': 1231000,
        'productId': 120,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1121,
        'stockCardQty': 1,
        'totalCost': 934000,
        'productId': 121,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1122,
        'stockCardQty': 1,
        'totalCost': 900000,
        'productId': 122,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1123,
        'stockCardQty': 1,
        'totalCost': 600000,
        'productId': 123,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1124,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 124,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1125,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 125,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1126,
        'stockCardQty': 1,
        'totalCost': 785000,
        'productId': 126,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1127,
        'stockCardQty': 1,
        'totalCost': 985000,
        'productId': 127,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1128,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 128,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1129,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 129,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1130,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 130,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1131,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 131,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1132,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 132,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1133,
        'stockCardQty': 1,
        'totalCost': 507000,
        'productId': 133,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1134,
        'stockCardQty': 1,
        'totalCost': 616000,
        'productId': 134,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1135,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 135,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1136,
        'stockCardQty': 1,
        'totalCost': 400000,
        'productId': 136,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1137,
        'stockCardQty': 2,
        'totalCost': 374000,
        'productId': 137,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1138,
        'stockCardQty': 2,
        'totalCost': 374000,
        'productId': 138,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1139,
        'stockCardQty': 2,
        'totalCost': 374000,
        'productId': 139,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1140,
        'stockCardQty': 2,
        'totalCost': 384000,
        'productId': 140,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1141,
        'stockCardQty': 2,
        'totalCost': 420000,
        'productId': 141,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1142,
        'stockCardQty': 2,
        'totalCost': 390000,
        'productId': 142,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1143,
        'stockCardQty': 2,
        'totalCost': 383000,
        'productId': 143,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1144,
        'stockCardQty': 2,
        'totalCost': 440000,
        'productId': 144,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1145,
        'stockCardQty': 2,
        'totalCost': 715000,
        'productId': 145,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1146,
        'stockCardQty': 2,
        'totalCost': 527000,
        'productId': 146,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1147,
        'stockCardQty': 2,
        'totalCost': 710000,
        'productId': 147,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1148,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 148,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1149,
        'stockCardQty': 2,
        'totalCost': 378000,
        'productId': 149,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1150,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 150,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1151,
        'stockCardQty': 2,
        'totalCost': 307000,
        'productId': 151,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1152,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 152,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1153,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 153,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1154,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 154,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1155,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 155,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1156,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 156,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1157,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 157,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1158,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 158,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1159,
        'stockCardQty': 2,
        'totalCost': 396000,
        'productId': 159,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1160,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 160,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1161,
        'stockCardQty': 20,
        'totalCost': 0,
        'productId': 161,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1162,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 162,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1163,
        'stockCardQty': 48,
        'totalCost': 0,
        'productId': 163,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1164,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 164,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1165,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 165,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1166,
        'stockCardQty': 18,
        'totalCost': 0,
        'productId': 166,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1167,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 167,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1168,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 168,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1169,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 169,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1170,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 170,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1171,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 171,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1172,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 172,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1173,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 173,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1174,
        'stockCardQty': 24,
        'totalCost': 0,
        'productId': 174,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1175,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 175,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1176,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 176,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1177,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 177,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1178,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 178,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1179,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 179,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1180,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 180,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1181,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 181,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1182,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 182,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1183,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 183,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1184,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 184,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1185,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 185,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1186,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 186,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1187,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 187,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1188,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 188,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1189,
        'stockCardQty': 2,
        'totalCost': 525000,
        'productId': 189,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1190,
        'stockCardQty': 2,
        'totalCost': 959000,
        'productId': 190,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1191,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 191,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1192,
        'stockCardQty': 2,
        'totalCost': 238500,
        'productId': 192,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1193,
        'stockCardQty': 4,
        'totalCost': 250000,
        'productId': 193,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1194,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 194,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1195,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 195,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1196,
        'stockCardQty': 1,
        'totalCost': 636000,
        'productId': 196,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1197,
        'stockCardQty': 1,
        'totalCost': 636000,
        'productId': 197,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1198,
        'stockCardQty': 1,
        'totalCost': 700000,
        'productId': 198,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1199,
        'stockCardQty': 1,
        'totalCost': 800000,
        'productId': 199,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1200,
        'stockCardQty': 1,
        'totalCost': 775000,
        'productId': 200,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1201,
        'stockCardQty': 1,
        'totalCost': 850000,
        'productId': 201,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1202,
        'stockCardQty': 1,
        'totalCost': 795000,
        'productId': 202,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1203,
        'stockCardQty': 1,
        'totalCost': 1300000,
        'productId': 203,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1204,
        'stockCardQty': 6,
        'totalCost': 1700000,
        'productId': 204,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1205,
        'stockCardQty': 1,
        'totalCost': 1150000,
        'productId': 205,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1206,
        'stockCardQty': 2,
        'totalCost': 1100000,
        'productId': 206,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1207,
        'stockCardQty': 2,
        'totalCost': 1092500,
        'productId': 207,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1208,
        'stockCardQty': 2,
        'totalCost': 2345000,
        'productId': 208,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1209,
        'stockCardQty': 1,
        'totalCost': 845000,
        'productId': 209,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1210,
        'stockCardQty': 1,
        'totalCost': 993000,
        'productId': 210,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1211,
        'stockCardQty': 1,
        'totalCost': 1033000,
        'productId': 211,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1212,
        'stockCardQty': 1,
        'totalCost': 954000,
        'productId': 212,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1213,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 213,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1214,
        'stockCardQty': 1,
        'totalCost': 965000,
        'productId': 214,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1215,
        'stockCardQty': 1,
        'totalCost': 834000,
        'productId': 215,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1216,
        'stockCardQty': 1,
        'totalCost': 1172300,
        'productId': 216,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1217,
        'stockCardQty': 1,
        'totalCost': 577000,
        'productId': 217,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1218,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 218,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1219,
        'stockCardQty': 1,
        'totalCost': 616000,
        'productId': 219,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1220,
        'stockCardQty': 1,
        'totalCost': 487500,
        'productId': 220,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1221,
        'stockCardQty': 1,
        'totalCost': 948000,
        'productId': 221,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1222,
        'stockCardQty': 0,
        'totalCost': 620500,
        'productId': 222,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1223,
        'stockCardQty': 4,
        'totalCost': 600000,
        'productId': 223,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1224,
        'stockCardQty': 10,
        'totalCost': 616000,
        'productId': 224,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1225,
        'stockCardQty': 36,
        'totalCost': 530000,
        'productId': 225,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1226,
        'stockCardQty': 1,
        'totalCost': 420000,
        'productId': 226,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1227,
        'stockCardQty': 1,
        'totalCost': 557000,
        'productId': 227,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1228,
        'stockCardQty': 1,
        'totalCost': 497000,
        'productId': 228,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1229,
        'stockCardQty': 1,
        'totalCost': 378100,
        'productId': 229,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1230,
        'stockCardQty': 8,
        'totalCost': 270000,
        'productId': 230,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1231,
        'stockCardQty': 8,
        'totalCost': 338200,
        'productId': 231,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1232,
        'stockCardQty': 4,
        'totalCost': 497000,
        'productId': 232,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1233,
        'stockCardQty': 2,
        'totalCost': 290000,
        'productId': 233,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1234,
        'stockCardQty': 2,
        'totalCost': 457000,
        'productId': 234,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1235,
        'stockCardQty': 2,
        'totalCost': 457000,
        'productId': 235,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1236,
        'stockCardQty': 2,
        'totalCost': 440000,
        'productId': 236,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1237,
        'stockCardQty': 2,
        'totalCost': 330000,
        'productId': 237,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1238,
        'stockCardQty': 2,
        'totalCost': 513000,
        'productId': 238,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1239,
        'stockCardQty': 1,
        'totalCost': 446000,
        'productId': 239,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1240,
        'stockCardQty': 1,
        'totalCost': 417000,
        'productId': 240,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1241,
        'stockCardQty': 2,
        'totalCost': 397000,
        'productId': 241,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1242,
        'stockCardQty': 12,
        'totalCost': 490000,
        'productId': 242,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1243,
        'stockCardQty': 1,
        'totalCost': 642000,
        'productId': 243,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1244,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 244,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1245,
        'stockCardQty': 1,
        'totalCost': 450000,
        'productId': 245,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1246,
        'stockCardQty': 1,
        'totalCost': 650000,
        'productId': 246,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1247,
        'stockCardQty': 2,
        'totalCost': 315000,
        'productId': 247,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1248,
        'stockCardQty': 6,
        'totalCost': 200000,
        'productId': 248,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1249,
        'stockCardQty': 12,
        'totalCost': 185000,
        'productId': 249,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1250,
        'stockCardQty': 12,
        'totalCost': 185000,
        'productId': 250,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1251,
        'stockCardQty': 8,
        'totalCost': 540000,
        'productId': 251,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1252,
        'stockCardQty': 4,
        'totalCost': 540000,
        'productId': 252,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1253,
        'stockCardQty': 8,
        'totalCost': 500000,
        'productId': 253,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1254,
        'stockCardQty': 2,
        'totalCost': 500000,
        'productId': 254,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1255,
        'stockCardQty': 6,
        'totalCost': 420000,
        'productId': 255,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1256,
        'stockCardQty': 1,
        'totalCost': 540000,
        'productId': 256,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1257,
        'stockCardQty': 1,
        'totalCost': 610000,
        'productId': 257,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1258,
        'stockCardQty': 8,
        'totalCost': 470000,
        'productId': 258,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1259,
        'stockCardQty': 8,
        'totalCost': 410000,
        'productId': 259,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1260,
        'stockCardQty': 4,
        'totalCost': 325000,
        'productId': 260,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1261,
        'stockCardQty': 2,
        'totalCost': 360000,
        'productId': 261,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1262,
        'stockCardQty': 2,
        'totalCost': 340000,
        'productId': 262,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1263,
        'stockCardQty': 2,
        'totalCost': 220000,
        'productId': 263,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1264,
        'stockCardQty': 6,
        'totalCost': 210000,
        'productId': 264,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1265,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 265,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1266,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 266,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1267,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 267,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1268,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 268,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1269,
        'stockCardQty': 6,
        'totalCost': 140000,
        'productId': 269,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1270,
        'stockCardQty': 6,
        'totalCost': 140000,
        'productId': 270,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1271,
        'stockCardQty': 6,
        'totalCost': 140000,
        'productId': 271,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1272,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 272,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1273,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 273,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1274,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 274,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1275,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 275,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1276,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 276,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1277,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 277,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1278,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 278,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1279,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 279,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1280,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 280,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1281,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 281,
        'srcLocation': 1
      }];
      this.isloading = true;
      for (const iterator of stockImportList) {
        let isError = false;
        await this.$axios.post('/api/card/bulkCreate', iterator).then(res => {
          console.log(res.data);
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(error => {
          console.log(error);
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
          isError = true;
          this.isloading = false;
        });
        if (isError) break;
        this.isloading = false;
      }
    },
    handleKeyDown(event) {
      if (this.timer) {
        clearInterval(this.timer);
      }
      if (event.key == 'Enter') {
        if (this.barcode) {
          console.log("Do something we got barcode");
        }
        this.barcode = '';
        return;
      }
      if (event.key != 'Shift') {
        this.barcode += event.key;
      }
      this.timer = setInterval(() => this.barcode = '', 20);
      console.log(`Key is pressing ${event.key}`);
    },
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock';
      return statusStock;
    },
    triggerCardForm(payload) {
      this.stockFormKey += 1;
      this.selectedProductId = payload.pro_id;
      this.selectedId = payload.id;
      this.selectedProductCost = payload.pro_cost_price;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
    },
    async fetchData() {
      this.isloading = true;
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
      await this.$axios.get('product_f').then(res => {
        this.loaddata = res.data.map(el => {
          console.log(el.pro_id);
          return {
            id: el.id,
            pro_id: el.pro_id,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            pro_desc: el.pro_desc,
            pro_status: el.pro_status,
            pro_category: el.pro_category,
            pro_category_desc: el.pro_category + ' - ' + el.categ_name,
            pro_card_count: el.card_count,
            pro_cost_price: el.cost_price,
            pro_outlet: el.outlet,
            pro_outlet_name: el.outlet_name,
            minStock: el.minStock,
            functionEdit: el.pro_id,
            functionStock: el.pro_id,
            functionStockView: el.pro_id,
            status: el.pro_id
          };
        });
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    },
    editItem(item) {
      this.productFormKey += 1;
      this.selectedProductId = item.pro_id;
      this.editProductForm = true;
      // const obj=JSON.stringify(idx)
      // this.$router.push(`/admin/product/${idx.pro_id}`)
    },

    editStock(idx) {
      console.log('ID ' + idx.pro_id);
      console.log('NAME ' + idx.pro_name);
      console.log('OBJ ' + Object.keys(idx));
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`);
    },
    attachFile(payload) {
      this.carddata.length = 0;
      const file = payload; // in case vuetify file input
      // this.files = payload
      const reader = new FileReader();
      if (file) {
        console.log('FILE LEN: ' + file);
        reader.onload = res => {
          this.content = res.target.result;
          console.log('Data content => : ' + this.content);
          const arr = this.content.replace(/\r\n/g, '\n').split('\n'); // filter text line by line
          const tempCardData = arr.filter(el => el !== '' && el.length >= 10); // filter only useable value and trim out null line
          let i = 0;
          tempCardData.forEach(element => {
            // loop and push to real datacart
            i++;
            console.log(`Data loop ${i} ${element}`);
            this.carddata.push(element.replace('	', '|').replace('	', '|').split("'").pop()); // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop());
          });
          console.log('CARD DATA: ' + this.carddata);
        };
        reader.onerror = err => console.log(err);
        reader.readAsText(file);
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
    },

    loadCardCategory() {
      this.isloading = true;
      this.$axios.get('stockcate_f').then(res => {
        this.cardType = res.data.map(el => {
          return {
            card_type_code: el.card_type_code,
            card_type_name: el.card_type_name
          };
        });
        this.selectedCardType = this.cardType[0].card_type_code;
        console.log('CARD LEN: ' + this.cardType.length);
        console.log('CARD LEN: ' + this.cardType[0].card_type_code);
        this.isloading = false;
      }).catch(er => {
        console.log('Error: ' + er);
        this.isloading = false;
      });
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true;
        await this.$axios.put("/api/product/stockcount").then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.fetchData();
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isloading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/product/productlist.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_productlistvue_type_script_lang_js_ = (productlistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/admin/product/productlist.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_productlistvue_type_script_lang_js_,
  productlistvue_type_template_id_40167139_render,
  staticRenderFns,
  false,
  null,
  null,
  "60100ecd"
  
)

/* harmony default export */ var productlist = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(115).default,DialogClassicMessage: __webpack_require__(293).default,CardForm: __webpack_require__(366).default,ProductForm: __webpack_require__(342).default,ProductFormCreate: __webpack_require__(341).default})


/***/ })

};;
//# sourceMappingURL=productlist.js.map