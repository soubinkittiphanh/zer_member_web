(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{871:function(t,e,n){"use strict";n.r(e);var r=n(643),o=n(728),c=n(183),l=n(288),d=n(28),f=n(641),m=n(645),h=n(619),v=n(291),x=n(640),O=n(85),y=n(638),j=n(102),_=n(666),w=(n(33),n(191),n(55),n(38),n(65),n(51),n(7),n(64),n(88),n(61),n(10),n(9),n(12),n(8),n(13),n(2)),k=n(24),L=n(29),I=(n(112),n(22),n(113),n(40),n(87),n(5),n(27),n(678),n(653)),N=n(46),R=n(62);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function C(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var S={props:{headerId:{type:Number,default:0},isQuotation:{type:Boolean,default:!1},isUpdate:{type:Boolean,default:!1}},directives:{commaThousand:I.a},created:function(){var t=this;return Object(L.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadLocation();case 2:if(!t.isUpdate){e.next=10;break}return console.log("View old record"),t.isloading=!0,e.next=7,t.loadTransaction();case 7:t.isloading=!1,e.next=15;break;case 10:n=(new Date).toISOString().substr(0,10),t.transaction.bookingDate=n,t.transaction.srcLocationId=1,t.transaction.desLocationId=1,t.newRow();case 15:case"end":return e.stop()}}),e)})))()},methods:{preview:function(){this.isQuotation;window.open("/admin/PDFTransfer/".concat(this.headerId),"_blank")},handleKeyDown:function(t){"Tab"===t.key&&(console.log("Tab key pressed"),this.newRow())},deleteItem:function(t){var e=this;return Object(L.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.transaction.lines.splice(e.transaction.lines.indexOf(t),1),console.log("Line has no id");case 2:case"end":return n.stop()}}),n)})))()},loadLocation:function(t){var e=this;return Object(L.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("api/location/find").then((function(t){e.locationList=t.data.map((function(t){return t}))})).catch((function(t){Object(R.j)(e.$swal,"Error","Operation fail "+t.Error)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},quantityChange:function(data){console.log("Qty change");var t=this.transaction.lines.indexOf(data),e=Object(R.i)(this.transaction.lines[t].quantity,",",""),n=Object(R.i)(this.transaction.lines[t].unitRate,",",""),r=Object(R.i)(this.transaction.lines[t].discount,",",""),o=Object(R.i)(this.transaction.lines[t].price,",","");this.transaction.lines[t].total=n*e*o-r},unitRateChange:function(data){console.log("Unit rate change");var t=this.transaction.lines.indexOf(data),e=Object(R.i)(this.transaction.lines[t].quantity,",",""),n=Object(R.i)(this.transaction.lines[t].unitRate,",",""),r=Object(R.i)(this.transaction.lines[t].discount,",",""),o=Object(R.i)(this.transaction.lines[t].price,",","");this.transaction.lines[t].total=n*e*o-r},discountChange:function(data){console.log("Discount change");var t=this.transaction.lines.indexOf(data),e=Object(R.i)(this.transaction.lines[t].quantity,",",""),n=Object(R.i)(this.transaction.lines[t].unitRate,",",""),r=Object(R.i)(this.transaction.lines[t].discount,",",""),o=Object(R.i)(this.transaction.lines[t].price,",","");this.transaction.lines[t].total=n*e*o-r},unitChange:function(data){console.log("Unit change");var t=this.unitList.find((function(t){return t.id==data.unitId}));if(null!=t){var e=this.transaction.lines.indexOf(data);this.transaction.lines[e].unitRate=t.unitRate;var n=Object(R.i)(this.transaction.lines[e].quantity,",",""),r=Object(R.i)(this.transaction.lines[e].discount,",",""),o=Object(R.i)(this.transaction.lines[e].price,",","");this.transaction.lines[e].total=t.unitRate*n*o-r}},productChange:function(data){console.log("Product change");var t=this.productList.find((function(t){return t.id==data.productId}));if(null!=t){var e=this.transaction.lines.indexOf(data);this.transaction.lines[e].price=t.pro_price;var n=Object(R.i)(this.transaction.lines[e].quantity,",",""),r=Object(R.i)(this.transaction.lines[e].discount,",",""),o=Object(R.i)(this.transaction.lines[e].price,",",""),c=Object(R.i)(this.transaction.lines[e].unitRate,",","");this.transaction.lines[e].total=c*n*o-r}else console.log("Product is not define")},newRow:function(){this.transaction.lines.push({quantity:0,unitRate:1,price:0,discount:0,total:0,isActive:!0,productId:0,unitId:1})},loadTransaction:function(){var t=this;return Object(L.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("api/".concat(t.apiLine,"/find/").concat(t.headerId)).then((function(e){t.transaction=e.data,console.log("Data ",e.data)})).catch((function(e){Object(R.j)(t.$swal,"Error","Could no load data "+e.Error)}));case 2:case"end":return e.stop()}}),e)})))()},post:function(){this.errorLineNumber=null;var t,e=C(this.transaction.lines);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(this.errorLineNumber=this.transaction.lines.indexOf(n),!this.validateLine(n,this.errorLineNumber+1))return void(this.sheet=!0);n.total=n.quantity*n.unitRate*n.price-n.discount}}catch(t){e.e(t)}finally{e.f()}console.log("******** No error found process posting ********"),this.errorLineNumber=null},validateLine:function(t,e){var n=t.quantity,r=t.unitRate,o=t.price,c=t.discount,l=t.total,d=t.productId,f=t.unitId;return c=parseInt(c),r=parseInt(r),n=parseInt(n),!Number.isFinite(n)||Number(n)<=0?(this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ").concat(n,"********"),!1):!Number.isFinite(r)||Number(r)<=0?(this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ").concat(r,"********"),!1):(console.log("Type of price ",Object(k.a)(o)," [price] ",o),!Number.isFinite(o)||Number(o)<=0?(this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ").concat(o,"********"),!1):(console.log("Type of discount1 ",Object(k.a)(c)),Number.isFinite(c)?!Number.isFinite(l)||Number(l)<=0?(this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ຍອດລວມ ຕ້ອງໃຫຍ່ກ່ອນ 0 current value is ").concat(l,"********"),!1):Number.isFinite(d)?!!Number.isFinite(f)||(this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ຫົວຫນ່ວຍບໍ່ຖືກຕ້ອງ  current value is ").concat(f,"********"),!1):(this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ສິນຄ້າບໍ່ຖືກຕ້ອງ  current value is ").concat(d,"********"),!1):(console.log("Type of discount2 ",Object(k.a)(c)),this.validateErrorMessage="******** Error ລາຍການທີ #".concat(e," ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ").concat(c,"********"),!1)))},validateHeader:function(){return this.headerError=!0,this.sheet=!0,0==this.transaction.lines.length?(this.validateErrorMessage="******** Error Header ບໍ່ມີລາຍການສິນຄ້າ ********",!1):(this.sheet=!1,this.headerError=!1,!0)},getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},toggleDialog:function(){this.$emit("close-dialog")},postToInvoice:function(){var t=this;return Object(L.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isloading&&t.validateHeader()){e.next=2;break}return e.abrupt("return");case 2:t.isloading=!0,t.errorLineNumber=null,n=[],r=C(t.transaction.lines),e.prev=6,r.s();case 8:if((o=r.n()).done){e.next=21;break}if(c=o.value,t.errorLineNumber=t.transaction.lines.indexOf(c),t.validateLine(c,t.errorLineNumber+1)){e.next=15;break}return t.sheet=!0,t.isloading=!1,e.abrupt("return");case 15:c.discount=parseInt(Object(R.i)(c.discount,",","")),c.quantity=parseInt(Object(R.i)(c.quantity,",","")),c.unitRate=parseInt(Object(R.i)(c.unitRate,",","")),n.push(c);case 19:e.next=8;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),r.e(e.t0);case 26:return e.prev=26,r.f(),e.finish(26);case 29:for(l=0,d=n;l<d.length;l++)d[l].id=null;return console.log("******** No error found process posting ********"),t.errorLineNumber=null,t.transaction.userId=t.user.id,t.transaction.total=t.grandTotal,t.transaction.referenceNo=t.headerId,t.transaction.lines=n,console.log("Amount total ".concat(t.transaction.total)),e.next=39,t.$axios.post("api/sale/create",t.transaction).then((function(e){t.$emit("reload"),Object(R.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){console.error(e),Object(R.j)(t.$swal,"Error",e.response.data);var n=e.response.data.split("#")[1];null!=n&&(t.validateErrorMessage="********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********",t.errorLineNumber=t.transaction.lines.indexOf(t.transaction.lines.find((function(t){return t.productId==n}))),t.sheet=!0),console.log("Error ===>: "+e)}));case 39:t.isloading=!1;case 40:case"end":return e.stop()}}),e,null,[[6,23,26,29]])})))()},postTransaction:function(){var t=this;return Object(L.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isloading&&t.validateHeader()){e.next=2;break}return e.abrupt("return");case 2:if(t.transaction.srcLocationId!=t.transaction.desLocationId){e.next=4;break}return e.abrupt("return",Object(R.j)(t.$swal,"Error","Source and destination location must be different"));case 4:t.isloading=!0,t.errorLineNumber=null,n=C(t.transaction.lines),e.prev=7,n.s();case 9:if((r=n.n()).done){e.next=21;break}if(o=r.value,t.errorLineNumber=t.transaction.lines.indexOf(o),t.validateLine(o,t.errorLineNumber+1)){e.next=16;break}return t.sheet=!0,t.isloading=!1,e.abrupt("return");case 16:o.discount=parseInt(Object(R.i)(o.discount,",","")),o.quantity=parseInt(Object(R.i)(o.quantity,",","")),o.unitRate=parseInt(Object(R.i)(o.unitRate,",",""));case 19:e.next=9;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),n.e(e.t0);case 26:return e.prev=26,n.f(),e.finish(26);case 29:if(console.log("******** No error found process posting ********"),t.errorLineNumber=null,t.transaction.userId=t.user.id,t.transaction.total=t.grandTotal,console.log("Amount total ".concat(t.transaction.total)),!t.isUpdate){e.next=39;break}return e.next=37,t.$axios.put("api/".concat(t.apiLine,"/update/").concat(t.headerId),t.transaction).then((function(e){t.$emit("reload"),Object(R.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){console.error(e),Object(R.j)(t.$swal,"Error",e.response.data);var n=e.response.data.split("#")[1];if(null!=n){var r=t.productList.find((function(t){return t.id==n}));t.validateErrorMessage="********  ສິນຄ້າ ".concat(r.pro_name," ໃນສ້າງບໍ່ພຽງພໍ ********"),t.errorLineNumber=t.transaction.lines.indexOf(t.transaction.lines.find((function(t){return t.productId==n}))),t.sheet=!0}console.log("Error ===>: "+e)}));case 37:e.next=41;break;case 39:return e.next=41,t.$axios.post("api/".concat(t.apiLine,"/create"),t.transaction).then((function(e){t.$emit("reload"),Object(R.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){console.error(e),Object(R.j)(t.$swal,"Error",e.response.data);var n=e.response.data.split("#")[1];null!=n&&(t.validateErrorMessage="********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********",t.errorLineNumber=t.transaction.lines.indexOf(t.transaction.lines.find((function(t){return t.productId==n}))),t.sheet=!0),console.log("Error ===>: "+e)}));case 41:t.isloading=!1;case 42:case"end":return e.stop()}}),e,null,[[7,23,26,29]])})))()}},computed:$($({},Object(N.c)(["findAllProduct","findAllClient","findAllPayment","findAllUnit","findAllCurrency"])),{},{clientList:function(){return this.findAllClient},user:function(){return this.$auth.user||""},apiLine:function(){return"transfer"},productList:function(){return this.findAllProduct},paymentList:function(){return this.findAllPayment},unitList:function(){return this.findAllUnit},currencyList:function(){return this.findAllCurrency},numberRule:function(){return[function(t){return null!=t&&""!==t||"Field is required"},function(t){return/^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(t)||"Rate must be a number with up to 2 decimal places"}]},grandTotal:function(){return this.transaction.lines.reduce((function(t,e){return t+e.total}),0)-Object(R.i)(this.transaction.discount,",","")}}),data:function(){return{search:"",numberCommaRule:function(t){return/^[0-9,]*$/.test(t)||"Only numbers and commas are allowed"},locationList:[],headerError:!1,customerDialog:!1,validateErrorMessage:"",sheet:!1,errorLineNumber:null,isloading:!1,transaction:{srcLocationId:1,desLocationId:1,referenceNo:"",lines:[]},headers:[{text:"#",align:"start",value:""},{text:"ສິນຄ້າ",align:"start",value:"product.pro_name"},{text:"ຈຳນວນ",align:"end",value:"quantity"},{text:"ຫົວຫນ່ວຍ",align:"end",value:"unitId",sortable:!0},{text:"unit rate",align:"end",value:"unitRate",sortable:!0},{text:"ລາຄາ",align:"end",value:"price",sortable:!0},{text:"ສ່ວນຫລຸດ",align:"end",value:"discount",sortable:!0},{text:"ລວມ",align:"end",value:"total",sortable:!1},{text:"delete",align:"end",value:"id",sortable:!1}]}}},A=n(45),component=Object(A.a)(S,(function(){var t=this,e=t._self._c;return e("div",[e(h.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(h.a,{attrs:{"max-width":"1024"},model:{value:t.customerDialog,callback:function(e){t.customerDialog=e},expression:"customerDialog"}},[e("customer-list",{on:{"close-dialog":function(e){t.customerDialog=!1}}})],1),t._v(" "),e(o.a,{attrs:{inset:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[e(O.a,{staticClass:"text-center",attrs:{height:"200px"}},[e(c.a,{staticClass:"mt-6",attrs:{text:"",color:"error"},on:{click:function(e){t.sheet=!t.sheet}}},[t._v("\n                close\n            ")]),t._v(" "),e("div",{staticClass:"my-3"},[t._v("\n                "+t._s(t.validateErrorMessage)+"\n            ")])],1)],1),t._v(" "),e(l.a,[e(d.b,[e(x.a,[e(f.a,{attrs:{cols:"6"}}),t._v(" "),e(f.a,{staticStyle:{"text-align":"right"},attrs:{cols:"6"}},[e(c.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.preview}},[e("span",{staticClass:"mdi mdi-printer-outline"}),t._v("Print\n                    ")])],1)],1)],1),t._v(" "),e(v.a),t._v(" "),e(d.c,[e(l.a,{style:t.headerError?"outline:1px solid red":""},[t._v("\n                "+t._s(t.isQuotation?"Quotation #":"Invoice #")+"\n                "+t._s(t.transaction.id)+"\n                "),e(d.c,[e("div",[e(x.a,[e(f.a,{attrs:{cols:"4"}},[e(x.a,[e(f.a,{attrs:{cols:"12"}},[e(j.a,{attrs:{type:"date",label:"ວັນທີ*",hint:"ເດຶອນ/ວັນ/ປີ 12/31/2023"},model:{value:t.transaction.bookingDate,callback:function(e){t.$set(t.transaction,"bookingDate",e)},expression:"transaction.bookingDate"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12"}},[e(j.a,{attrs:{label:"ReferenceNo"},model:{value:t.transaction.referenceNo,callback:function(e){t.$set(t.transaction,"referenceNo",e)},expression:"transaction.referenceNo"}})],1)],1)],1),t._v(" "),e(f.a,{attrs:{cols:"4"}},[e(x.a,[e(f.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{"item-text":"name","item-value":"id",items:t.locationList,label:"Source location*"},model:{value:t.transaction.srcLocationId,callback:function(e){t.$set(t.transaction,"srcLocationId",e)},expression:"transaction.srcLocationId"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{"item-text":"name","item-value":"id",items:t.locationList,label:"Dest location*"},model:{value:t.transaction.desLocationId,callback:function(e){t.$set(t.transaction,"desLocationId",e)},expression:"transaction.desLocationId"}})],1)],1)],1),t._v(" "),e(f.a,{staticStyle:{"text-align":"end"},attrs:{cols:"4"}},[e(x.a,[e(f.a,{attrs:{cols:"12"}},[e(_.a,{attrs:{label:"Notes"},model:{value:t.transaction.remark,callback:function(e){t.$set(t.transaction,"remark",e)},expression:"transaction.remark"}})],1),t._v(" "),t.transaction.user?e(f.a,{attrs:{cols:"12"}},[t._v("ຜູ້ລົງ: "+t._s(t.transaction.user.cus_id)+"\n                                    ")]):t._e(),t._v(" "),t.transaction.user?e(f.a,{attrs:{cols:"12"}},[t._v("ຊື່: "+t._s(t.transaction.user.cus_name))]):t._e(),t._v(" "),e(f.a,{attrs:{cols:"12"}},[e(j.a,{attrs:{disabled:""},scopedSlots:t._u([{key:"label",fn:function(){return[e("span",{staticStyle:{color:"black","font-weight":"bold"}},[t._v(t._s("Total Amount:\n                                                    ".concat(t.getFormatNum(t.grandTotal))))])]},proxy:!0}])})],1)],1)],1)],1)],1)])],1),t._v(" "),e(v.a),t._v(" "),t.transaction.lines?e(m.a,{attrs:{headers:t.headers,search:t.search,items:t.transaction.lines},scopedSlots:t._u([{key:"item",fn:function(n){var o=n.item;return[e("tr",{style:t.errorLineNumber==t.transaction.lines.indexOf(o)?"outline: 1px solid red":""},[e("td",{class:t.errorLineNumber==t.transaction.lines.indexOf(o)?"error":""},[t._v("\n                            "+t._s(t.transaction.lines.indexOf(o)+1)+"\n                        ")]),t._v(" "),e("td",[e(r.a,{attrs:{"item-text":"pro_name","item-value":"id",items:t.productList,label:"ສິນຄ້າ*"},on:{input:function(e){return t.productChange(o)}},model:{value:o.productId,callback:function(e){t.$set(o,"productId",e)},expression:"item.productId"}})],1),t._v(" "),e("td",[e(j.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{label:"ຈຳນວນ",rules:[t.numberCommaRule]},on:{input:function(e){return t.quantityChange(o)}},model:{value:o.quantity,callback:function(e){t.$set(o,"quantity",e)},expression:"item.quantity"}})],1),t._v(" "),e("td",[e(r.a,{attrs:{"item-text":"name","item-value":"id",items:t.unitList,label:"ຫົວຫນ່ວຍ*"},on:{input:function(e){return t.unitChange(o)}},model:{value:o.unitId,callback:function(e){t.$set(o,"unitId",e)},expression:"item.unitId"}})],1),t._v(" "),e("td",[e(j.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{label:"ຈນ ຕໍ່ ຫົວຫນ່ວຍ",rules:[t.numberCommaRule]},on:{input:function(e){return t.unitRateChange(o)}},model:{value:o.unitRate,callback:function(e){t.$set(o,"unitRate",e)},expression:"item.unitRate"}})],1),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("\n                            "+t._s(t.getFormatNum(o.price))+"\n                        ")]),t._v(" "),e("td",[e(j.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{rules:[t.numberCommaRule],label:"ສ່ວນຫລຸດ"},on:{input:function(e){return t.discountChange(o)}},model:{value:o.discount,callback:function(e){t.$set(o,"discount",e)},expression:"item.discount"}})],1),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("\n                            "+t._s(t.getFormatNum(o.total))+"\n                        ")]),t._v(" "),e("td",[e(c.a,{attrs:{color:"error",text:""},on:{click:function(e){return t.deleteItem(o)},keydown:t.handleKeyDown}},[e("i",{staticClass:"fas fa-trash"})])],1)])]}}],null,!1,2946179411)}):t._e(),t._v(" "),0==t.transaction.lines.length?e("tr",[e("td",[e(c.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.newRow}},[e("span",{staticClass:"mdi mdi-plus"})])],1)]):t._e()],1),t._v(" "),e(d.a,[e(y.a),t._v(" "),e(c.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.toggleDialog}},[t._v("\n                Close\n            ")]),t._v(" "),t.isUpdate?t._e():e(c.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.postTransaction}},[t._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default,CustomerList:n(243).default})}}]);