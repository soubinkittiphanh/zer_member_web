(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{800:function(t,e,n){"use strict";n.r(e);var r=n(172),o=n(280),c=n(47),l=n(612),d=n(615),m=n(608),f=n(281),h=n(611),v=n(94),y=(n(30),n(181),n(24));n(105),n(64),n(23),n(48),n(4),n(33),n(60),n(39),n(8),n(74),n(84),n(51);function C(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var x={components:{CustomerForm:n(714).default},data:function(){return{userId:"",componentKey:1,selectedCustomerId:0,dialogCustomer:!1,customerList:[],search:"",isEdit:!1,isloading:!1,whatsappContactLink:"",headers:[{text:"ຊື່",align:"center",value:"name",sortable:!0},{text:"company",align:"center",value:"company"},{text:"email",align:"center",value:"email"},{text:"telephone",align:"center",value:"telephone"},{text:"ລາຍລະອຽດ",align:"end",value:"function",sortable:!1}]}},mounted:function(){this.loadData()},methods:{whatsappLink:function(t){var e=t.tel.trim(),n=e.substring(e.length-8);this.whatsappContactLink="https://api.whatsapp.com/send?phone=+85620".concat(n,"&text=").concat(encodeURIComponent("ສະບາຍດີ ລູກຄ້າ "))},handleEvent:function(){this.dialogCustomer=!1},editItem:function(t){this.componentKey+=1,this.selectedCustomerId=t,this.dialogCustomer=!0,this.isEdit=!1},createItem:function(){this.componentKey+=1,this.dialogCustomer=!0,this.isEdit=!0},loadData:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/client/find").then((function(e){t.customerList=[];var n,r=C(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.customerList.push(o)}}catch(t){r.e(t)}finally{r.f()}})).catch((function(t){console.log("Error ",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},k=n(44),component=Object(k.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e(m.a,{attrs:{"max-width":"1024"},model:{value:t.dialogCustomer,callback:function(e){t.dialogCustomer=e},expression:"dialogCustomer"}},[e("CustomerForm",{key:t.componentKey,attrs:{isEdit:!t.isEdit,customerId:t.selectedCustomerId},on:{"close-dialog":t.handleEvent,"reload-data":t.loadData}})],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e("div",{staticClass:"pa-2"},[e(h.a,{staticClass:"text-center"},[e(l.a,{attrs:{cols:"12","align-self":"center"}},[e("h4",[t._v("\n            ລາຍການ ລູກຄ້າ ທັງໝົດ\n          ")])])],1),t._v(" "),e(h.a,[e(l.a,{attrs:{cols:"6"}},[e(r.a,{staticClass:"primary",attrs:{block:"",size:"large",variant:"outlined"},on:{click:t.createItem}},[t._v("\n            ເພີ່ມລູກຄ້າ"),e("span",{staticClass:"mdi mdi-account-box"})])],1),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e(v.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(h.a,[e(l.a,{staticClass:"text-right"},[e(r.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined"},on:{click:t.loadData}},[t._v("\n            ດຶງລາຍງານ"),e("span",{staticClass:"mdi mdi-account-box"})])],1)],1)],1),t._v(" "),e(f.a),t._v(" "),e(c.c,[t.customerList?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.customerList},scopedSlots:t._u([{key:"item.function",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.editItem(o.id),t.wallet=!0}}},[e("i",{staticClass:"fa fa-pencil-square-o"})])]}},{key:"item.telephone",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.whatsappLink(o)}}},[t._v("\n            "+t._s(o.telephone)+"\n            "),e("a",{attrs:{href:t.whatsappContactLink,target:"_blank"}},[t._v("Whatsapp")])])]}}],null,!0)}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomerForm:n(714).default,LoadingIndicator:n(295).default})}}]);