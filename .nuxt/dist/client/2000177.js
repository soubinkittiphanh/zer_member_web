(window.webpackJsonp=window.webpackJsonp||[]).push([[102,45],{666:function(t,e,r){var content=r(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("43114049",content,!0,{sourceMap:!1})},681:function(t,e,r){"use strict";r(666)},682:function(t,e,r){var n=r(14)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},694:function(t,e,r){var content=r(751);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0b79b7d7",content,!0,{sourceMap:!1})},729:function(t,e,r){"use strict";r.r(e);var n=r(281),o=r(39),c=r(612),l=r(217),d=(r(23),r(10),r(8),r(9),r(4),r(12),r(7),r(13),r(1)),f=(r(20),r(49)),y=r(64);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"product-card-pos",props:{imagePath:{type:String,default:""},productName:{type:String,default:""},product:{type:Object,default:null},stock:{type:Number,default:0}},computed:{host:function(){return Object(y.g)()}},methods:m(m({},Object(f.b)(["addProduct"])),{},{formatNumber:function(t){return Object(y.e)(t)}})},w=(r(681),r(36)),component=Object(w.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.hover;return[e(n.a,{attrs:{elevation:c?16:0,outlined:""},on:{click:function(e){return t.addProduct(t.product)}}},[e(l.a,{attrs:{"max-height":"200px",src:"".concat(t.host,"/uploads/").concat(t.imagePath),"lazy-src":"".concat(t.host,"/uploads/").concat(t.imagePath)}}),t._v(" "),e(o.c,{staticClass:"text-start"},[e("div",{staticClass:"font-weight-meduim primary--text"},[t._v("\n                    "+t._s(t.productName)+" \n                ")]),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[t._v(" Stock: "+t._s(t.stock)+" ")]),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[t._v(" ລາຄາ: "+t._s(t.formatNumber(t.product.pro_price)))])])],1)]}}])})],1)}),[],!1,null,"353e2350",null);e.default=component.exports},750:function(t,e,r){"use strict";r(694)},751:function(t,e,r){var n=r(14)((function(i){return i[1]}));n.push([t.i,".v-card--reveal{align-items:center;bottom:0;justify-content:center;opacity:.5;position:absolute;width:100%}",""]),n.locals={},t.exports=n},834:function(t,e,r){"use strict";r.r(e);var n=r(281),o=r(611),c=r(610),l=(r(10),r(8),r(12),r(7),r(13),r(48),r(32),r(59),r(47),r(29),r(75),r(84),r(56),r(1)),d=r(24),f=(r(9),r(4),r(37),r(55),r(88),r(54),r(105),r(49));function y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={layout:"pos",middleware:"auths",data:function(){return{barcode:"",timer:null,tab:null,searh:"",productSelectedList:[],isloading:!1,productList:[],categoryList:[],pageLine:30,search:"",paymentList:[],productSelectedFromBarcode:null}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:return e.next=4,t.loadCategory();case 4:return e.next=6,t.loadPayment();case 6:window.addEventListener("keydown",t.handleKeyDown);case 7:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){window.removeEventListener("keydown",this.handleKeyDown)},computed:v(v({},Object(f.c)({searchKeyword:"searchKeyword",currenctSelectedCategoryId:"currenctSelectedCategoryId"})),{},{filterProduct:function(){var t=this;return console.log("+++caegory ",this.currenctSelectedCategoryId),this.searchKeyword?9999==this.currenctSelectedCategoryId?this.productList.filter((function(e){return e.pro_name.toLowerCase().includes(t.searchKeyword)})):this.productList.filter((function(e){return e.pro_category===t.currenctSelectedCategoryId&&e.pro_name.toLowerCase().includes(t.searchKeyword)})):(console.log("Return all"),9999!=this.currenctSelectedCategoryId?(console.log("Filter by category only"),this.productList.filter((function(e){return e.pro_category===t.currenctSelectedCategoryId}))):(console.log("All no filter case"),this.productList))}}),methods:v(v({},Object(f.b)(["addProduct"])),{},{findProductFromBarcode:function(t){this.productSelectedFromBarcode=this.productList.find((function(e){return e.barCode==t})),this.productSelectedFromBarcode&&(this.addProduct(this.productSelectedFromBarcode),this.productSelectedFromBarcode=null)},handleKeyDown:function(t){var e=this;if(this.timer&&clearInterval(this.timer),"Enter"==t.key)return this.barcode&&(console.log("Do something we got barcode"),this.findProductFromBarcode(this.barcode)),void(this.barcode="");"Shift"!=t.key&&(this.barcode+=t.key),this.timer=setInterval((function(){return e.barcode=""}),20),console.log("Key is pressing ".concat(t.key))},fetchData:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,t.productList=[],e.next=4,t.$axios.get("product_f").then((function(e){var r,n=y(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;t.productList.push(o)}}catch(t){n.e(t)}finally{n.f()}})).catch((function(e){t.message=e,swalError2(t.$swal,"Error",e)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},loadCategory:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,t.categoryList=[],e.next=4,t.$axios.get("/category_f").then((function(e){console.log("Data: "+e.data);var r,n=y(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;console.log("CATEGOR",o),t.categoryList.push(o)}}catch(t){n.e(t)}finally{n.f()}})).catch((function(e){swalError2(t.$swal,"Error",e)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},loadPayment:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,t.paymentList=[],e.next=4,t.$axios.get("/api/paymentMethod/find").then((function(e){var r,n=y(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;console.log("Payment",o),t.paymentList.push(o)}}catch(t){n.e(t)}finally{n.f()}})).catch((function(e){swalError2(t.$swal,"Error",e)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()}})},O=(r(750),r(36)),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-6"},[e(n.a,{staticClass:"pa-4"},[t.filterProduct.length>0?e(c.a,[e(o.a,{attrs:{cols:12}},[e("div",{staticClass:"row"},t._l(t.filterProduct,(function(t,r){return e("div",{key:r,staticClass:"col-12 col-md-3 col-sm-6 col-xs-6 text-center"},[e("product-card-pos",{attrs:{product:t,productName:t.pro_name,imagePath:t.img_name,stock:t.card_count}})],1)})),0)])],1):e(c.a,[e("div",{staticClass:"error"},[t._v("\n                ບໍ່ພົບຂໍ້ມູນ\n            ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCardPos:r(729).default})}}]);