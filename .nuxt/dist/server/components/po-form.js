exports.ids = [26];
exports.modules = {

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Directives
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }
  }
}));

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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ae7a972c", content, true)

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prevent */
/* harmony import */ var _components_VInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _rippleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var _comparable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
// Components
 // Mixins


 // Utilities


function prevent(e) {
  e.preventDefault();
}
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _rippleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _comparable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'selectable',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    id: String,
    inputValue: null,
    falseValue: null,
    trueValue: null,
    multiple: {
      type: Boolean,
      default: null
    },
    label: String
  },
  data() {
    return {
      hasColor: this.inputValue,
      lazyValue: this.inputValue
    };
  },
  computed: {
    computedColor() {
      if (!this.isActive) return undefined;
      if (this.color) return this.color;
      if (this.isDark && !this.appIsDark) return 'white';
      return 'primary';
    },
    isMultiple() {
      return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);
    },
    isActive() {
      const value = this.value;
      const input = this.internalValue;
      if (this.isMultiple) {
        if (!Array.isArray(input)) return false;
        return input.some(item => this.valueComparator(item, value));
      }
      if (this.trueValue === undefined || this.falseValue === undefined) {
        return value ? this.valueComparator(value, input) : Boolean(input);
      }
      return this.valueComparator(input, this.trueValue);
    },
    isDirty() {
      return this.isActive;
    },
    rippleState() {
      return !this.isDisabled && !this.validationState ? undefined : this.validationState;
    }
  },
  watch: {
    inputValue(val) {
      this.lazyValue = val;
      this.hasColor = val;
    }
  },
  methods: {
    genLabel() {
      const label = _components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.methods.genLabel.call(this);
      if (!label) return label;
      label.data.on = {
        // Label shouldn't cause the input to focus
        click: prevent
      };
      return label;
    },
    genInput(type, attrs) {
      return this.$createElement('input', {
        attrs: Object.assign({
          'aria-checked': this.isActive.toString(),
          disabled: this.isDisabled,
          id: this.computedId,
          role: type,
          type
        }, attrs),
        domProps: {
          value: this.value,
          checked: this.isActive
        },
        on: {
          blur: this.onBlur,
          change: this.onChange,
          focus: this.onFocus,
          keydown: this.onKeydown,
          click: prevent
        },
        ref: 'input'
      });
    },
    onClick(e) {
      this.onChange();
      this.$emit('click', e);
    },
    onChange() {
      if (!this.isInteractive) return;
      const value = this.value;
      let input = this.internalValue;
      if (this.isMultiple) {
        if (!Array.isArray(input)) {
          input = [];
        }
        const length = input.length;
        input = input.filter(item => !this.valueComparator(item, value));
        if (input.length === length) {
          input.push(value);
        }
      } else if (this.trueValue !== undefined && this.falseValue !== undefined) {
        input = this.valueComparator(input, this.trueValue) ? this.falseValue : this.trueValue;
      } else if (value) {
        input = this.valueComparator(input, value) ? null : value;
      } else {
        input = !input;
      }
      this.validate(true, input);
      this.internalValue = input;
      this.hasColor = input;
    },
    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    /** @abstract */
    onKeydown(e) {}
  }
}));

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(307);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(292);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(114);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },
    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },
    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }
  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },
    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', {
        ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },
    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__[/* VFabTransition */ "c"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },
    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },
    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },
    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].right && !this.isActive) this.onChange();
    }
  }
}));

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(268);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(267);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/po/PoForm.vue?vue&type=template&id=d9ea74a8&

















var PoFormvue_type_template_id_d9ea74a8_render = function render() {
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
      "max-width": "800"
    },
    model: {
      value: _vm.showAddRowDialog,
      callback: function ($$v) {
        _vm.showAddRowDialog = $$v;
      },
      expression: "showAddRowDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("ເພີ່ມລາຍການໃຫມ່")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "addRowForm"
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "pro_name",
      "item-value": "id",
      "items": _vm.productList,
      "label": "ເລືອກສິນຄ້າ *",
      "rules": _vm.productIdRules
    },
    model: {
      value: _vm.newRow.productId,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "productId", $$v);
      },
      expression: "newRow.productId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "label": "ລາຄາຕໍ່ຫນ່ວຍ",
      "required": "",
      "rules": _vm.priceRules
    },
    model: {
      value: _vm.newRow.price,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "price", _vm._n($$v));
      },
      expression: "newRow.price"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ຈຳນວນ",
      "required": "",
      "rules": _vm.qtyRules
    },
    model: {
      value: _vm.newRow.qty,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "qty", _vm._n($$v));
      },
      expression: "newRow.qty"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.currencyList,
      "label": "ສະກຸນ *",
      "rules": _vm.currencyIdRules
    },
    model: {
      value: _vm.newRow.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "currencyId", $$v);
      },
      expression: "newRow.currencyId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "label": "ອັດຕາແລກປ່ຽນ",
      "rules": _vm.rateRules,
      "required": ""
    },
    model: {
      value: _vm.newRow.rate,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "rate", _vm._n($$v));
      },
      expression: "newRow.rate"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "label": "ລວມ",
      "rules": _vm.totalRules,
      "required": ""
    },
    model: {
      value: _vm.newRow.total,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "total", _vm._n($$v));
      },
      expression: "newRow.total"
    }
  })], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.addRow
    }
  }, [_vm._v("ເພີ່ມ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary"
    },
    on: {
      "click": function ($event) {
        _vm.showAddRowDialog = false;
      }
    }
  }, [_vm._v("ປິດ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
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
      "label": "Vendor",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.form.header.vendor,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "vendor", $$v);
      },
      expression: "form.header.vendor"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Remark",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.form.header.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "notes", $$v);
      },
      expression: "form.header.notes"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
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
      "type": "date",
      "label": "ວັນທີສັ່ງ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.form.header.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "bookingDate", $$v);
      },
      expression: "form.header.bookingDate"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີຮັບເຄື່ອງ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.form.header.deliveryDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "deliveryDate", $$v);
      },
      expression: "form.header.deliveryDate"
    }
  }), _vm._v(" "), _c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "true-value": true,
      "false-value": false
    },
    model: {
      value: _vm.form.header.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "isActive", $$v);
      },
      expression: "form.header.isActive"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        _vm.showAddRowDialog = true;
      }
    }
  }, [_vm._v("ເພີ່ມລາຍການ")]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "items": _vm.lines
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('tr', [_c('td', [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "item-text": "pro_name",
            "item-value": "id",
            "items": _vm.productList,
            "rules": _vm.productIdRules,
            "label": "ເລືອກສິນຄ້າ *"
          },
          model: {
            value: item.productId,
            callback: function ($$v) {
              _vm.$set(item, "productId", $$v);
            },
            expression: "item.productId"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "ລາຄາ",
            "rules": _vm.priceRules
          },
          model: {
            value: item.price,
            callback: function ($$v) {
              _vm.$set(item, "price", _vm._n($$v));
            },
            expression: "item.price"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "ຈຳນວນ",
            "rules": _vm.qtyRules
          },
          model: {
            value: item.qty,
            callback: function ($$v) {
              _vm.$set(item, "qty", _vm._n($$v));
            },
            expression: "item.qty"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "item-text": "code",
            "item-value": "id",
            "items": _vm.currencyList,
            "label": "ສະກຸນ *",
            "rules": _vm.currencyIdRules
          },
          model: {
            value: item.currencyId,
            callback: function ($$v) {
              _vm.$set(item, "currencyId", $$v);
            },
            expression: "item.currencyId"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "step": "0.01",
            "min": "0",
            "label": "ອັດຕາແລກປ່ຽນ",
            "rules": _vm.rateRules
          },
          model: {
            value: item.rate,
            callback: function ($$v) {
              _vm.$set(item, "rate", _vm._n($$v));
            },
            expression: "item.rate"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "step": "0.01",
            "min": "0",
            "label": "ລວມ",
            "rules": _vm.totalRules
          },
          model: {
            value: item.total,
            callback: function ($$v) {
              _vm.$set(item, "total", _vm._n($$v));
            },
            expression: "item.total"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "blue-darken-1",
            "variant": "text"
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_vm._v("\n                                    ລົບ\n                                ")])], 1)])];
      }
    }])
  })], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
      "click": _vm.submit
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/po/PoForm.vue?vue&type=template&id=d9ea74a8&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(113);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/po/PoForm.vue?vue&type=script&lang=js&


/* harmony default export */ var PoFormvue_type_script_lang_js_ = ({
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
  data() {
    return {
      productList: [],
      currencyList: [],
      showAddRowDialog: false,
      dialog: false,
      title: 'ສ້າງ ໃບສັ່ງຊື້',
      valid: false,
      isLoading: false,
      form: {
        header: {
          bookingDate: '',
          deliveryDate: '',
          vendor: 'Acme Inc.',
          notes: 'Please deliver to loading dock B.',
          isActive: true,
          locking_session_id: ''
        }
      },
      rules: {
        required: v => !!v || "This field is required",
        dateAfter: date => v => date ? new Date(v) >= new Date(date) || "Date must be after start date" : true,
        dateAfterToday: v => new Date(v) >= new Date() || "Date must be after today",
        number: v => !isNaN(parseFloat(v)) && isFinite(v) || "Value must be a number"
      },
      headers: [{
        text: "ສິນຄ້າ",
        value: "date"
      }, {
        text: "ລາຄາຕໍ່ຫນ່ວຍ",
        value: "reach"
      }, {
        text: "ຈຳນວນ",
        value: "results"
      }, {
        text: "ສະກຸນ",
        value: "reach"
      }, {
        text: "ອັດຕາແລກປ່ຽນ",
        value: "comments"
      }, {
        text: "ລວມ",
        value: "purchaseQty"
      }
      // { text: "Cost Per Customer", value: "costPerCustomer" },
      // { text: "Budget Spend", value: "budgetSpend" }
      ],

      lines: [],
      lineError: [],
      newRow: {
        rate: 1,
        qty: 1,
        price: 25.0,
        total: 250.0,
        isActive: true,
        currencyId: 1,
        productId: 2,
        locking_session_id: ''
      }
    };
  },
  mounted() {
    // this.loadAccount()

    const today = new Date().toISOString().substr(0, 10);
    this.form.header.bookingDate = today;
    this.form.header.deliveryDate = today;
    this.loadPurchaseOrder();
    this.loadProduct();
    this.loadCurrency();
  },
  computed: {
    dateRules() {
      return [value => !!value || 'Field is required', value => /^(\d{4})-(\d{2})-(\d{2})$/.test(value) || 'Invalid date format (YYYY-MM-DD)'];
    },
    rateRules() {
      return [value => !!value || 'Rate is required', value => /^[0-9]+(\.[0-9]{1,2})?$/.test(value) || 'Rate must be a number with up to 2 decimal places'];
    },
    qtyRules() {
      return [value => !!value || 'Quantity is required', value => /^\d+$/.test(value) || 'Quantity must be a whole number'];
    },
    priceRules() {
      return [value => !!value || 'Price is required', value => /^\d+(\.\d{1,2})?$/.test(value) || 'Price must be a number with up to 2 decimal places'];
    },
    totalRules() {
      return [value => !!value || 'Total is required', value => /^\d+(\.\d{1,2})?$/.test(value) || 'Total must be a number with up to 2 decimal places'];
    },
    currencyIdRules() {
      return [value => !!value || 'Currency ID is required', value => /^\d+$/.test(value) || 'Currency ID must be a whole number'];
    },
    productIdRules() {
      return [value => !!value || 'Product ID is required', value => /^\d+$/.test(value) || 'Product ID must be a whole number'];
    }
  },
  methods: {
    deleteItem(item) {
      const index = this.lines.indexOf(item);
      if (index > -1) {
        if (this.isEdit && item.id) {
          Object(myUtil["a" /* confirmSwal */])(this.$swal, 'warning', async () => {
            console.log("Delete record function");
            this.isLoading = true;
            await this.$axios.delete(`/api/po/line/find/${item.id}`).then(response => {
              console.log("response=>", response.data);
              if (response.data.includes('successfully')) {
                this.lines.splice(index, 1);
              }
            }).catch(error => {
              Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
            });
            this.isLoading = false;
          });
        } else {
          this.lines.splice(index, 1);
        }
      }
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    validateLine() {
      this.lines.forEach((item, index) => {
        const {
          rate,
          qty,
          price,
          total,
          isActive,
          currencyId,
          productId
        } = item;
        console.log("===>Rate ", rate);
        if (!rate || !Number.isFinite(rate)) {
          this.lineError.push(` Rate must be a number`);
        }
        if (!qty || !Number.isInteger(qty)) {
          this.lineError.push(` Quantity must be an integer`);
        }
        if (!price || !Number.isFinite(price)) {
          this.lineError.push(` Price must be a number`);
        }
        if (!total || !Number.isFinite(total)) {
          this.lineError.push(` Total must be a number`);
        }
        if (typeof isActive !== 'boolean') {
          this.lineError.push(` isActive must be a boolean`);
        }
        if (!currencyId || !Number.isInteger(currencyId)) {
          this.lineError.push(` Currency ID must be an integer`);
        }
        if (!productId || !Number.isInteger(productId)) {
          this.lineError.push(` Product ID must be an integer`);
        }
      });
    },
    async loadPurchaseOrder() {
      this.isLoading = true;
      if (this.isEdit) {
        await this.$axios.get(`/api/po/find/${this.campaignId}`).then(response => {
          this.form.header = response.data;
          this.form.header.start = response.data['start'].split('T')[0];
          this.form.header.end = response.data['end'].split('T')[0];
          this.campaignEntry.length = 0;
          for (const iterator of response.data.entries) {
            let entry = iterator;
            entry['date'] = iterator['date'].split('T')[0];
            this.campaignEntry.push(entry);
          }
        }).catch(error => {
          console.log("Load cammpaign error", error);
        });
      }
      this.isLoading = false;
    },
    async submit() {
      // handle form submission here
      if (!this.isLoading) {
        this.isLoading = true;
        if (this.lines.length == 0) {
          this.isLoading = false;
          return Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ບໍ່ມີລາຍການ ກະລຸນາເພີ່ມຢ່າງນ້ອຍ 1 ລາຍການ");
        }
        this.validateLine();
        if (this.lineError.length > 0) {
          Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", `ກະລຸນາ ກວດຂໍ້ມູນຄືນໃຫ້ຖືກຕ້ອງ ${this.lineError} `);
          this.isLoading = false;
          return this.lineError.length = 0;
        }
        this.form.header.lines = this.lines;
        // ********* update entry *********
        if (this.isEdit && this.headerId) {
          console.log("====> update campaign");
          await this.$axios.put(`/api/po/update/${this.headerId}`, this.form.header).then(res => {
            if (res.status == 200) {
              Object(myUtil["d" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
            } else {
              Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data);
            }
          }).catch(error => {
            Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
          });
          // ********* create entry *********
        } else {
          // this.isLoading = false;
          // return console.log("Form ===> ", this.form.header);
          await this.$axios.post("/api/po/create", this.form.header).then(res => {
            if (res.status == 200) {
              Object(myUtil["d" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
            } else {
              Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data);
            }
          }).catch(error => {
            // swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data.errors[0]['msg'])
            Object(myUtil["c" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
          });
        }
        this.isLoading = false;
      }
      this.close();
    },
    addRow() {
      if (this.$refs.addRowForm.validate()) {
        this.lines.push(this.newRow);
        this.newRow = {
          rate: 2.5,
          qty: 10,
          price: 25.0,
          total: 250.0,
          isActive: true
          //   locking_session_id: 'abc123'
        };

        this.showAddRowDialog = false;
      }
    },
    async loadProduct() {
      this.isLoading = true;
      await this.$axios.get('product_mobile_f').then(res => {
        this.productList = res.data.map(el => {
          return el;
        });
        console.log("all data1: ", this.productList[0].img_path);
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isLoading = false;
    },
    async loadCurrency() {
      this.isLoading = true;
      await this.$axios.get('api/currency/find').then(res => {
        this.currencyList = res.data.map(el => {
          return el;
        });
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isLoading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/po/PoForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var po_PoFormvue_type_script_lang_js_ = (PoFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/po/PoForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  po_PoFormvue_type_script_lang_js_,
  PoFormvue_type_template_id_d9ea74a8_render,
  staticRenderFns,
  false,
  null,
  null,
  "3ec1b3bf"
  
)

/* harmony default export */ var PoForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=po-form.js.map