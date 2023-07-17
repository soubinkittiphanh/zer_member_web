exports.ids = [54,7,12,13];
exports.modules = {

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(335);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("03cbcf00", content, true, context)
};

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardOnTop_vue_vue_type_style_index_0_id_7da7ed0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardOnTop_vue_vue_type_style_index_0_id_7da7ed0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardOnTop_vue_vue_type_style_index_0_id_7da7ed0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardOnTop_vue_vue_type_style_index_0_id_7da7ed0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardOnTop_vue_vue_type_style_index_0_id_7da7ed0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".my-text-bold[data-v-7da7ed0d]{color:#000;font-weight:bolder}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(267);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/CardOnTop.vue?vue&type=template&id=7da7ed0d&scoped=true&






var CardOnTopvue_type_template_id_7da7ed0d_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "ma-0 pa-0"
  }, [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "mx-auto mr-0",
    attrs: {
      "height": "60",
      "width": "60",
      "color": _vm.color
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_vm._t("icon")], 2)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('p', {
    staticClass: "my-text-bold"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', {
    staticClass: "my-text-bold"
  }, [_vm._v(_vm._s(_vm.value))])])], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/dashboard/CardOnTop.vue?vue&type=template&id=7da7ed0d&scoped=true&

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
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/dashboard/CardOnTop.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(334)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_CardOnTopvue_type_script_lang_js_,
  CardOnTopvue_type_template_id_7da7ed0d_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "7da7ed0d",
  "76445517"
  
)

/* harmony default export */ var CardOnTop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(267);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/CardGrouping.vue?vue&type=template&id=64cde921&





var CardGroupingvue_type_template_id_64cde921_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "min-height": "100",
      "color": "transparent"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._t("slot1")], 2), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._t("slot2")], 2)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._t("slot3")], 2), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._t("slot4")], 2)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/dashboard/CardGrouping.vue?vue&type=template&id=64cde921&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/CardGrouping.vue?vue&type=script&lang=js&
/* harmony default export */ var CardGroupingvue_type_script_lang_js_ = ({
  data() {
    return {
      // expand: false,
    };
  }
});
// CONCATENATED MODULE: ./components/dashboard/CardGrouping.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_CardGroupingvue_type_script_lang_js_ = (CardGroupingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/dashboard/CardGrouping.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_CardGroupingvue_type_script_lang_js_,
  CardGroupingvue_type_template_id_64cde921_render,
  staticRenderFns,
  false,
  null,
  null,
  "4fd58af2"
  
)

/* harmony default export */ var CardGrouping = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(270);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/campaignCard.vue?vue&type=template&id=4ffc897b&





var campaignCardvue_type_template_id_4ffc897b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n            Campaign\n        ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm.campaignList ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.campaignList
    }
  }) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/campaignCard.vue?vue&type=template&id=4ffc897b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/campaignCard.vue?vue&type=script&lang=js&
/* harmony default export */ var campaignCardvue_type_script_lang_js_ = ({
  data() {
    return {
      campaignList: [],
      search: '',
      headers: [{
        text: 'ຊື່ Campaign',
        align: 'center',
        value: 'title',
        sortable: true
      }, {
        text: 'ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      }, {
        text: 'ວັນທີເລີ່ມ',
        align: 'center',
        value: 'start'
      }, {
        text: 'ວັນທີສິ້ນສຸດ',
        align: 'center',
        value: 'end'
      }, {
        text: 'ເຂົ້າເຖິງ',
        align: 'center',
        value: 'reach'
      }, {
        text: 'ຄອມເມັ້ນ',
        align: 'center',
        value: 'comments'
      }, {
        text: 'Result',
        align: 'center',
        value: 'results'
      }, {
        text: 'ປິດການຂາຍ',
        align: 'center',
        value: 'closed'
      }, {
        text: 'ຍອດທີ່ຈ່າຍໄປ',
        align: 'center',
        value: 'budgetSpend'
      }]
    };
  },
  async mounted() {
    await this.loadCampaignData();
  },
  methods: {
    async loadCampaignData() {
      this.isloading = true;
      await this.$axios.get("/api/campaign/find_summary").then(response => {
        this.campaignList = response.data.rows.map(el => {
          return el;
        });
        for (const iterator of this.campaignList) {
          iterator.start = iterator.start.split('T')[0];
          iterator.end = iterator.end.split('T')[0];
        }
        this.headers.length = 0;
        // for (const iterator of response.data.fieldList) {
        //     this.headers.push(
        //         {
        //             text: iterator,
        //             align: 'end',
        //             value: iterator,
        //             sortable: true,
        //         },
        //     )
        // }
      }).catch(error => {
        console.log("Error ", error);
      });
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/card/campaignCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_campaignCardvue_type_script_lang_js_ = (campaignCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/card/campaignCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_campaignCardvue_type_script_lang_js_,
  campaignCardvue_type_template_id_4ffc897b_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0ef4adea"
  
)

/* harmony default export */ var campaignCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(267);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard/index.vue?vue&type=template&id=686ed109&









var dashboardvue_type_template_id_686ed109_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" <h1>Dash board</h1> "), _vm._ssrNode("<div class=\"mb-2 pa-0\">", "</div>", [_c(VRow["a" /* default */], {
    staticClass: "p-0"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('card-grouping', {
    scopedSlots: _vm._u([{
      key: "slot1",
      fn: function () {
        return [_c('card-on-top', {
          attrs: {
            "title": _vm.options.labels[0],
            "value": _vm.numberFormatter(_vm.series[0]),
            "color": "#E6F7FF"
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c(VIcon["a" /* default */], {
                attrs: {
                  "color": "#51A5EB"
                }
              }, [_vm._v("mdi-receipt-text")])];
            },
            proxy: true
          }])
        })];
      },
      proxy: true
    }, {
      key: "slot2",
      fn: function () {
        return [_c('card-on-top', {
          attrs: {
            "title": _vm.options.labels[1],
            "value": _vm.numberFormatter(_vm.series[1]),
            "color": "#FEF0ED"
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c(VIcon["a" /* default */], {
                attrs: {
                  "color": "#F7C3B8"
                }
              }, [_vm._v("mdi mdi-truck-cargo-container")])];
            },
            proxy: true
          }])
        })];
      },
      proxy: true
    }, {
      key: "slot3",
      fn: function () {
        return [_c('card-on-top', {
          attrs: {
            "title": _vm.options.labels[2],
            "value": _vm.numberFormatter(_vm.series[2]),
            "color": "#E7F1F2"
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c(VIcon["a" /* default */], {
                attrs: {
                  "color": "#518F8A"
                }
              }, [_vm._v("mdi mdi-currency-usd")])];
            },
            proxy: true
          }])
        })];
      },
      proxy: true
    }, {
      key: "slot4",
      fn: function () {
        return [_c('card-on-top', {
          attrs: {
            "title": _vm.options.labels[3],
            "value": _vm.numberFormatter(_vm.series[3]),
            "color": "#FBE8EA"
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c(VIcon["a" /* default */], {
                attrs: {
                  "color": "#C37D85"
                }
              }, [_vm._v("mdi mdi-file-document-refresh")])];
            },
            proxy: true
          }])
        })];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VCard["a" /* default */], {
    on: {
      "click": function ($event) {
        return _vm.$router.push('/admin/minstock');
      }
    }
  }, [_c(components_VCard["d" /* VCardTitle */], [_vm._v("ລາຍການສິນຄ້າ ໃຫ້ໝົດ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], _vm._l(_vm.minProductList, function (item) {
    return _c(VChip["a" /* default */], {
      key: item.pro_id,
      staticClass: "ma-2",
      attrs: {
        "color": "red",
        "text-color": "white"
      }
    }, [_vm._v("\n                            " + _vm._s(item.pro_name) + " - \n                            "), _c('span', {
      staticClass: "mdi mdi-tag-multiple-outline"
    }), _vm._v(" "), _c(VIcon["a" /* default */], {
      staticStyle: {
        "font-weight": "bold"
      },
      attrs: {
        "start": "",
        "icon": "mdi-label"
      }
    }, [_vm._v(" " + _vm._s(item.pro_card_count))])], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-1\">", "</div>", [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4",
      "md": "6",
      "sm": "12",
      "xl": "12"
    }
  }, [_c(VCard["a" /* default */], [_c('apexchart', {
    attrs: {
      "options": _vm.pieChartOption,
      "series": _vm.pieChartOption.barSeries
    }
  })], 1)], 1), _vm._v(" "), _vm.dailyState ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8",
      "md": "6",
      "sm": "12",
      "xl": "12"
    }
  }, [_c(VCard["a" /* default */], [_c('apexchart', {
    attrs: {
      "options": _vm.barOptionsForDailyStat,
      "series": _vm.barSeriesForDailyStat
    }
  })], 1)], 1) : _vm._e()], 1)], 1), _vm._ssrNode(" "), _c('campaignCard')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/dashboard/index.vue?vue&type=template&id=686ed109&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(113);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(17);

// EXTERNAL MODULE: ./components/dashboard/CardOnTop.vue + 4 modules
var CardOnTop = __webpack_require__(342);

// EXTERNAL MODULE: ./components/dashboard/CardGrouping.vue + 4 modules
var CardGrouping = __webpack_require__(343);

// EXTERNAL MODULE: ./components/card/campaignCard.vue + 4 modules
var campaignCard = __webpack_require__(344);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard/index.vue?vue&type=script&lang=js&





/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  components: {
    CardOnTop: CardOnTop["default"],
    CampaignCard: campaignCard["default"],
    CardGrouping: CardGrouping["default"]
  },
  middleware: 'auths',
  data() {
    return {
      saleValue: 0,
      // minProductList: [{
      //     pro_name:'',
      //     pro_id:1
      // }],
      items: [{
        name: 'Item #1',
        id: 1
      }, {
        name: 'Item #2',
        id: 2
      }, {
        name: 'Item #3',
        id: 3
      }],
      minProductList: [],
      isloading: false,
      dailyState: false,
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
      pieChartOption: {
        // plotOptions: {
        //     pie: {
        //         customScale: 0.9
        //     }
        // },
        title: {
          text: 'ສິນຄ້າຂາຍດີ',
          align: 'center',
          style: {
            fontSize: '16px'
          }
        },
        labels: [],
        barSeries: [],
        theme: {
          monochrome: {
            enabled: true,
            color: '#01532B'
          }
        },
        chart: {
          type: 'pie',
          width: '100%',
          height: '400px'
        }
      },
      barSeriesForDailyStat: [{
        data: []
      }],
      //ກາບຍອດຂາຍແຕ່ລະມື ເປັນ ຮູບທຽນ
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
  async created() {
    await this.loadDailySaleStatistic();
    this.init();
    await this.minStockProduct();
  },
  async mounted() {
    await this.loadTopSale();
    await this.paymentGroup();
  },
  methods: {
    numberFormatter(value) {
      return Object(myUtil["b" /* getFormatNum */])(value);
    },
    async minStockProduct() {
      this.isloading = true;
      await this.$axios.get('product_f').then(res => {
        this.minProductList = [];
        for (const iterator of res.data) {
          if (iterator['minStock'] > iterator['card_count']) {
            this.minProductList.push({
              pro_id: iterator.pro_id,
              pro_name: iterator.pro_name,
              pro_price: iterator.pro_price,
              pro_desc: iterator.pro_desc,
              pro_status: iterator.pro_status,
              pro_category: iterator.pro_category,
              pro_category_desc: iterator.pro_category + ' - ' + iterator.categ_name,
              pro_card_count: iterator.card_count,
              pro_cost_price: iterator.cost_price,
              pro_outlet: iterator.outlet,
              pro_outlet_name: iterator.outlet_name,
              minStock: iterator.minStock,
              function: iterator.pro_id
            });
          }
        }
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
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
      this.isloading = true;
      await this.$axios.get('api/topsale/?top=' + 5).then(res => {
        console.log("Data ", res.data[0]);
        res.data.map(el => {
          this.pieChartOption.barSeries.push(+el.sale_count);
          this.pieChartOption.labels.push(el.categ_name + ' ' + Object(myUtil["b" /* getFormatNum */])(el.total_sale));
        });
      }).catch(err => {
        console.log('error', err);
      });
      this.isloading = false;
    },
    async loadDailySaleStatistic() {
      this.isloading = true;
      await this.$axios.get('api/dailySaleReport').then(res => {
        console.log("Data ", res.data[0]);
        for (const iterator of res.data) {
          // this.barOptionsForDailyStat.colors.push(this.getRandomColor) // ******* Original
          this.barOptionsForDailyStat.colors.push('#01532B'); // ******* Original

          this.barSeriesForDailyStat[0].data.push(iterator.total_sale);
          this.barOptionsForDailyStat.xaxis.categories.push(iterator.txn_date_short);
        }
      }).catch(err => {
        console.log('error', err);
      });
      this.dailyState = true;
      this.isloading = false;
    },
    async paymentGroup() {
      this.isloading = true;
      await this.$axios.get('api/cod_n_cash_report').then(res => {
        this.series = res.data.series;
        this.options.labels = res.data.labels;
      }).catch(err => {
        console.log('error', err);
      });
      this.isloading = false;
    },
    init() {
      console.log("Init function");
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
// CONCATENATED MODULE: ./pages/admin/dashboard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/dashboard/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_dashboardvue_type_script_lang_js_,
  dashboardvue_type_template_id_686ed109_render,
  staticRenderFns,
  false,
  null,
  null,
  "4eb1be77"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=index.js.map