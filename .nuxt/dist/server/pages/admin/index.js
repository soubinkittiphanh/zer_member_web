exports.ids = [41,9];
exports.modules = {

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export swalError */
/* unused harmony export swalErrorNoTrace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return swalError2; });
/* unused harmony export swalCancle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return swalSuccess; });
/* unused harmony export customSwalSuccess */
/* unused harmony export closeSwal */
/* unused harmony export swalLoading */
/* unused harmony export swalConfirm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFormatNum; });
/* unused harmony export swalSuccessBackToMenu */
/* unused harmony export customSwalSuccessBackToMenu */
/* unused harmony export swalWarning */
/* unused harmony export swalWarningWithHTML */
/* unused harmony export swalWarningTraceId */
/* unused harmony export swalMsg */
/* unused harmony export toastNotification */
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const swalError = (swal, title, message, trandId) => {
  swal({
    icon: 'error',
    title: title,
    // text: message || "ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    html: `
                  <span>
                    <span style="font-weight: bold;">Trace ID:</span><span style="color: red"> ${trandId}</span> <br />
                    <span style="font-weight: bold;">Message:</spn><span style="color: red"> ${message}</span>
                  </span>
                `
  });
};
const swalErrorNoTrace = (swal, title, message) => {
  swal({
    icon: 'error',
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const swalError2 = (swal, title, message) => {
  swal({
    icon: 'error',
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const swalCancle = swal => {
  swal({
    icon: 'info',
    title: 'ຍົກເລີກ!',
    text: 'ການຍົເລີກສຳເລັດ',
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const swalSuccess = (swal, title, text) => {
  swal({
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const customSwalSuccess = (swal, title, text) => {
  swal({
    icon: 'success',
    title: title,
    html: text,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const closeSwal = swal => {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.hideLoading();
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
};
const swalLoading = (swal, title, text, icon) => {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    title: title,
    text: text,
    // html: html,
    icon: icon,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    onBeforeOpen: () => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
    }
  });
};
const swalConfirm = (swal, title, text, icon, cancelButtonText, confirmButtonText) => {
  return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    title: title,
    text: text,
    icon: icon,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    showCancelButton: true,
    cancelButtonText: cancelButtonText || 'ບໍ່',
    confirmButtonText: confirmButtonText || 'ຕົກລົງ'
  });
};
const getFormatNum = val => {
  return new Intl.NumberFormat().format(val);
};
const swalSuccessBackToMenu = (swal, message, transt24Id, status) => {
  return swal({
    title: 'ແຈ້ງເຕືອນ',
    icon: 'success',
    html: `<span>
                <span style="font-weight: bold;">ເລກທຸລະກຳ:</span><span style="color: orangered"> ${transt24Id}</span><br/>
                <span style="font-weight: bold;">ສະຖານະທຸລະກຳ:</spn>
                <span style="color: ${status === 'AUTHORISE' ? 'green' : 'red'}"> ${message}</span>
            </span>
    `,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    confirmButtonText: 'ກັບສູ່ເມນູຕ່າງໆ'
  });
};
const customSwalSuccessBackToMenu = (swal, message) => {
  return swal({
    title: 'ແຈ້ງເຕືອນ',
    icon: 'success',
    html: message,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    confirmButtonText: 'ກັບສູ່ເມນູຕ່າງໆ'
  });
};
const swalWarning = (swal, title, message) => {
  swal({
    icon: 'warning',
    title: title,
    text: message || 'ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ',
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const swalWarningWithHTML = (swal, title, message, amountA, amountB) => {
  swal({
    icon: 'warning',
    title: title,
    text: message || 'ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ',
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    html: `
                  <span>
                    <span style="font-weight: bold;">ຈຳນວນຊຳລະຈາກກົມໂຍທາ:</span><span style="color: darkorange"> ${amountA} ບໍ່ກົງກັບ</span> <br />
                    <span style="font-weight: bold;">ຍອດຊຳລະຈາກກົມອາກອນ:</spn><span style="color: darkorange"> ${amountB}</span>
                  </span>
                `
  });
};
const swalWarningTraceId = (swal, title, message, trandId) => {
  swal({
    icon: 'warning',
    title: title,
    // text: message || "ມີບາງຢ່່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    html: `
                  <span>
                    <span style="font-weight: bold;">Trace ID:</span><span style="color: darkorange"> ${trandId}</span> <br />
                    <span style="font-weight: bold;">Message:</spn><span style="color: darkorange"> ${message}</span>
                  </span>
                `
  });
};
const swalMsg = (swal, icon, title, message) => {
  swal({
    icon: icon,
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  });
};
const toastNotification = (swal, icon, title, message, callbackFunc) => {
  swal({
    toast: true,
    position: 'bottom-end',
    timerProgressBar: true,
    icon: icon,
    title: title,
    text: message,
    showConfirmButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false
  }).then(result => {
    if (result.isConfirmed) {
      callbackFunc();
    }
  });
};

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(100);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];
function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = def();
    return props;
  }, {});
}
const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);
const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);
const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);
const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },
  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(100);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.

  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('layout'));

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(251);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/CardOnTop.vue?vue&type=template&id=fadf1d36&





var CardOnTopvue_type_template_id_fadf1d36_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "368",
      "min-height": "100",
      "color": _vm.color
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "py-0"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "align": "center",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "text-h7",
    attrs: {
      "cols": "6",
      "text-color": "white"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.title) + " ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right text-h7",
    attrs: {
      "cols": "6",
      "text-color": "white"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.value) + "\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/dashboard/CardOnTop.vue?vue&type=template&id=fadf1d36&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/CardOnTop.vue?vue&type=script&lang=js&
/* harmony default export */ var CardOnTopvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: 0
    },
    color: {
      type: String,
      default: "#26c6da"
    }
  },
  data() {
    return {
      expand: false
    };
  }
});
// CONCATENATED MODULE: ./components/dashboard/CardOnTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_CardOnTopvue_type_script_lang_js_ = (CardOnTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// CONCATENATED MODULE: ./components/dashboard/CardOnTop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_CardOnTopvue_type_script_lang_js_,
  CardOnTopvue_type_template_id_fadf1d36_render,
  staticRenderFns,
  false,
  null,
  null,
  "76445517"
  
)

/* harmony default export */ var CardOnTop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(251);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=7d3b84ed&






var adminvue_type_template_id_7d3b84ed_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isloading ? _c('div', [_vm._ssrNode("<h1>Dash board</h1> "), _c(VCard["a" /* default */], {
    staticClass: "mb-3"
  }, [_c(components_VCard["c" /* VCardText */], [_c(VLayout["a" /* default */], {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "3",
      "sm": "3"
    }
  }, [_c('card-on-top', {
    attrs: {
      "title": _vm.options.labels[0],
      "value": _vm.numberFormatter(_vm.series[0])
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3",
      "sm": "3"
    }
  }, [_c('card-on-top', {
    attrs: {
      "title": _vm.options.labels[1],
      "value": _vm.numberFormatter(_vm.series[1])
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3",
      "sm": "3"
    }
  }, [_c('card-on-top', {
    attrs: {
      "title": _vm.options.labels[2],
      "value": _vm.numberFormatter(_vm.series[2])
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3",
      "sm": "3"
    }
  }, [_c('card-on-top', {
    attrs: {
      "title": _vm.options.labels[3],
      "value": _vm.numberFormatter(_vm.series[3])
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], [_c(VLayout["a" /* default */], {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4",
      "sm": "6"
    }
  }, [_c('apexchart', {
    attrs: {
      "options": _vm.barOptions,
      "series": _vm.barSeries
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4",
      "sm": "6"
    }
  }, [_c('apexchart', {
    attrs: {
      "options": _vm.barOptionsForDailyStat,
      "series": _vm.barSeriesForDailyStat
    }
  })], 1)], 1)], 1)], 1)], 1)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=7d3b84ed&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(249);

// EXTERNAL MODULE: ./components/dashboard/CardOnTop.vue + 4 modules
var CardOnTop = __webpack_require__(329);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
// import MyChart from '~/components/MyChart.vue';


/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  components: {
    CardOnTop: CardOnTop["default"]
  },
  data() {
    return {
      saleValue: 0,
      isloading: false,
      series: [0, 0],
      options: {
        chart: {
          type: 'donut'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['CASH', 'COD'],
        title: {
          text: 'ອໍເດີ ປະເພດ'
        },
        annotations: {
          points: []
        }
      },
      peeair: {
        series: [],
        options: {
          colors: ['#FF4560', '#775DD0']
        }
      },
      barSeries: [],
      barOptions: {
        title: {
          text: 'ສິນຄ້າຂາຍດີ',
          align: 'center',
          style: {
            fontSize: '16px'
          }
        },
        labels: [],
        chart: {
          type: 'pie',
          width: '100%',
          height: '400px'
        }
      },
      barSeriesForDailyStat: [{
        data: []
      }],
      barOptionsForDailyStat: {
        colors: [],
        chart: {
          type: 'line'
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          },
          dataLabels: {
            style: {
              fontSize: '12px'
            },
            formatter: function (val) {
              return val.toFixed(2);
            }
          }
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: 'Sales (in thousands)'
          }
        },
        title: {
          text: 'ສະຖິຕິການຂາຍໃນເດືອນ'
        }
      }
    };
  },
  computed: {},
  async created() {
    console.log("Created");
    this.init();
  },
  async mounted() {
    await this.loadDailySaleStatistic();
    await this.loadTopSale();
    await this.paymentGroup();
    console.log("Mounted");
  },
  methods: {
    numberFormatter(value) {
      return Object(myUtil["a" /* getFormatNum */])(value);
    },
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    async loadTopSale() {
      this.isloading = false;
      await this.$axios.get('api/topsale/?top=' + 10).then(res => {
        console.log("Data ", res.data[0]);
        res.data.map(el => {
          this.barSeries.push(+el.sale_count);
          this.barOptions.labels.push(el.pro_name + ' ' + Object(myUtil["a" /* getFormatNum */])(el.total_sale));
        });
      }).catch(err => {
        this.isloading = true;
        console.log('error', err);
      });
    },
    async loadDailySaleStatistic() {
      this.isloading = false;
      await this.$axios.get('api/dailySaleReport').then(res => {
        console.log("Data ", res.data[0]);
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          console.log("Color: ", this.getRandomColor);
          this.barOptionsForDailyStat.colors.push(this.getRandomColor);
        }
        res.data.map(el => {
          console.log("EL count ", el.sale_count);
          this.barSeriesForDailyStat[0].data.push(el.total_sale);
          this.barOptionsForDailyStat.xaxis.categories.push(el.txn_date_short);
          // this.barOptionsForDailyStat.yaxis.title.text('Sales (in thousands)')
          //                         yaxis: {
          //     title: {
          //       text: 'Sales (in thousands)'
          //     }
          //   },
        });
        // this.isloading = true
      }).catch(err => {
        this.isloading = true;
        console.log('error', err);
      });
    },
    async paymentGroup() {
      this.isloading = false;
      await this.$axios.get('api/cod_n_cash_report').then(res => {
        this.series = res.data.series;
        this.options.labels = res.data.labels;
        // res.data.map((el) => {
        //     if(!el.payment_status && el.payment_code.includes('COD')){
        //         this.series[1] ++
        //         this.series[0] ++
        //     } else {
        //         this.series[0] ++
        //     }
        //     this.saleValue+=el.cart_total
        // })
        this.isloading = true;
      }).catch(err => {
        this.isloading = true;
        console.log('error', err);
      });
    },
    init() {
      console.log("Init function");
      // this.series = [100, 55, 99, 948, 5, 7, 9, 4, 7, 99];
      // this.options = {
      //     title: {
      //         text: 'PeeAir 4',
      //         align: 'center',
      //         style: {
      //             fontSize: '16px',
      //         },
      //     },

      //     chart: {
      //         height: 350,
      //         type: 'line',
      //     },
      //     stroke: {
      //         width: [0, 4]
      //     }, title: {
      //         text: 'Traffic Sources'
      //     }, dataLabels: {
      //         enabled: true,
      //         enabledOnSeries: [1]
      //     },
      //     labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      //     xaxis: {
      //         type: 'datetime'
      //     },
      //     yaxis: [{
      //         title: {
      //             text: 'Website Blog',
      //         },

      //     }, {
      //         opposite: true,
      //         title: {
      //             text: 'Social Media'
      //         }
      //     }]

      // }
      const series2 = [66, 33];
      this.peeair.options = {
        title: {
          text: 'GreenWood',
          align: 'center',
          style: {
            fontSize: '16px'
          }
        },
        labels: [` COD ${series2[0]} ບິນ `, ` ORDER ${series2[1]} ບິນ`],
        chart: {
          type: 'pie',
          width: '100%',
          height: '400px'
        }
      };
      this.peeair.series = series2;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// CONCATENATED MODULE: ./pages/admin/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  adminvue_type_template_id_7d3b84ed_render,
  staticRenderFns,
  false,
  null,
  null,
  "2ed95b9c"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map