(window.webpackJsonp=window.webpackJsonp||[]).push([[77,17,23,24,31,32,33],{691:function(t,e,n){var content=n(705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("03cbcf00",content,!0,{sourceMap:!1})},704:function(t,e,n){"use strict";n(691)},705:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".my-text-bold[data-v-7da7ed0d]{color:#000;font-weight:bolder}",""]),r.locals={},t.exports=r},714:function(t,e,n){"use strict";n.r(e);var r=n(288),o=n(28),c=n(292),l=n(645),d=(n(33),n(191),n(43),n(59),n(7),n(12),n(13),n(55),n(38),n(65),n(51),n(64),n(88),n(61),n(29)),f=n(2),m=(n(10),n(81),n(9),n(5),n(8),n(27),n(40),n(112),n(686)),h=n(62),v=n(687),y=n(309),S=n(46);function _(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={components:{ProductForm:m.default,ProductFormCreate:v.default},middleware:"auths",data:function(){var t;return t={productFormCreate:!1,productFormKey:1,isstock:!1,selectedProductId:"",selectedProductCost:0,selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",editProductForm:!1},Object(f.a)(t,"selectedProductId",null),Object(f.a)(t,"stockFormKey",1),Object(f.a)(t,"headers",[{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຮ້ານ",align:"center",value:"pro_outlet_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"ສະຕັອກຂັ້ນຕ່ຳ",align:"center",value:"minStock"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"Status",align:"center",value:"status"},{text:"cost",align:"center",value:"pro_cost_price"}]),t},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(S.c)(["findAllTerminal","findSelectedTerminal","currentSelectedLocation","findAllLocation"])),watch:{message:function(t){this.dialogMessage=null!=t}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:return e.next=4,t.loadCardCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return Object(h.e)(t)},verifyStockStatus:function(t,e){return 0==e?"Out of stock":t<e?"In stock":"Low stock"},triggerCardForm:function(t){this.stockFormKey+=1,this.selectedProductId=t.pro_id,this.selectedProductCost=t.pro_cost_price,this.selectedProductName=t.pro_name,this.isstock=!0},fetchData:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CARD SELECTE ".concat(t.currentSelectedLocation.id)),t.isloading=!0,e.next=4,t.$axios.get("product_f/".concat(t.currentSelectedLocation.id)).then((function(e){t.loaddata=[];var n,r=_(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.minStock>o.card_count&&t.loaddata.push({pro_id:o.pro_id,pro_name:o.pro_name,pro_price:o.pro_price,pro_desc:o.pro_desc,pro_status:o.pro_status,pro_category:o.pro_category,pro_category_desc:o.pro_category+" - "+o.categ_name,pro_card_count:o.card_count,pro_cost_price:o.cost_price,pro_outlet:o.outlet,pro_outlet_name:o.outlet_name,minStock:o.minStock,functionEdit:o.pro_id,functionStock:o.pro_id,functionStockView:o.pro_id,status:o.pro_id})}}catch(t){r.e(t)}finally{r.f()}})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.productFormKey+=1,this.selectedProductId=t.pro_id,this.editProductForm=!0},editStock:function(t){console.log("ID "+t.pro_id),console.log("NAME "+t.pro_name),console.log("OBJ "+Object.keys(t)),this.$router.push("/admin/stock/".concat(t.pro_id))},attachFile:function(t){var e=this;this.carddata.length=0;var n=t,r=new FileReader;n&&(console.log("FILE LEN: "+n),r.onload=function(t){e.content=t.target.result,console.log("Data content => : "+e.content);var n=e.content.replace(/\r\n/g,"\n").split("\n").filter((function(t){return""!==t&&t.length>=10})),i=0;n.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),e.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+e.carddata)},r.onerror=function(t){return console.log(t)},r.readAsText(n))},loadCardCategory:function(){var t=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(e){t.cardType=e.data.map((function(t){return{card_type_code:t.card_type_code,card_type_name:t.card_type_name}})),t.selectedCardType=t.cardType[0].card_type_code,console.log("CARD LEN: "+t.cardType.length),console.log("CARD LEN: "+t.cardType[0].card_type_code),t.isloading=!1})).catch((function(e){console.log("Error: "+e),t.isloading=!1}))},rebuildStock:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading){e.next=5;break}return t.isloading=!0,e.next=4,t.$axios.post("/api/card/rebuildStock").then((function(e){Object(y.c)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.fetchData()})).catch((function(e){Object(y.b)(t.$swal,"Error",e.response.data)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},D=w,j=n(45),component=Object(j.a)(D,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(r.a,[e(o.d,[t._v("\n      ສິ້ນຄ້າໃກ້ໝົດ\n    ")]),t._v(" "),t.loaddata?e(l.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata,"items-per-page":t.pageLine},scopedSlots:t._u([{key:"item.pro_cost_price",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.formatNumber(n.pro_cost_price))+"\n\n      ")]}},{key:"item.pro_price",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.formatNumber(n.pro_price))+"\n\n      ")]}},{key:"item.pro_card_count",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.formatNumber(n.pro_card_count))+"\n\n      ")]}},{key:"item.status",fn:function(n){var r=n.item;return[e(c.a,{staticClass:"ma-2",attrs:{color:t.verifyStockStatus(r.minStock,r.pro_card_count).includes("In")?"green":t.verifyStockStatus(r.minStock,r.pro_card_count).includes("Out")?"red":"orange","text-color":"white"}},[t._v("\n          "+t._s(t.verifyStockStatus(r.minStock,r.pro_card_count))+"\n        ")])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,n){"use strict";n.r(e);var r=n(286),o=n(288),c=n(28),l=n(641),d=n(156),f=n(640),m={name:"menu-card",props:{title:{type:String,default:""},path:{type:String,default:""},icon:{type:String,default:""},total:{type:String,default:""}},data:function(){return{imageSrc:n(399)}},methods:{takeMeTo:function(){this.$router.push(this.path)}}},h=n(45),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{outlined:"","max-height":"80"}},[e(c.c,[e("div",[e(f.a,{attrs:{align:"center"}},[e(l.a,{staticStyle:{"text-align":"left"},attrs:{cols:"3"}},[e(r.a,{attrs:{color:"primary",size:"50"}},[e(d.a,{attrs:{dark:"",size:"30"}},[t._v("\n                            "+t._s(t.icon)+"\n                        ")])],1)],1),t._v(" "),e(l.a,{staticClass:"pt-0",staticStyle:{"text-align":"right"},attrs:{cols:"9"}},[e(f.a,[e(l.a,{attrs:{cols:"12"}},[t._v(t._s(t.title))]),t._v(" "),e(l.a,{staticStyle:{"font-size":"larger","font-weight":"bold","font-family":"Arial, Helvetica, sans-serif"},attrs:{cols:"12"}},[t._v(" "+t._s(t.total)+" ")])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},759:function(t,e,n){"use strict";n.r(e);var r=n(288),o=n(28),c=n(641),l=n(636),d=n(640),f={props:{title:{type:String,default:""},value:{type:String,default:0},color:{type:String,default:"#26c6da"}},data:function(){return{expand:!1}}},m=(n(704),n(45)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"ma-0 pa-0"},[e("div",[e(d.a,[e(c.a,{attrs:{cols:"6"}},[e(r.a,{staticClass:"mx-auto mr-0",attrs:{height:"60",width:"60",color:t.color}},[e(o.c,{staticClass:"text-center"},[t._t("icon")],2)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"6"}},[e("p",{staticClass:"my-text-bold"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"my-text-bold"},[t._v(t._s(t.value))])])],1)],1)])}),[],!1,null,"7da7ed0d",null);e.default=component.exports},760:function(t,e,n){"use strict";n.r(e);var r=n(288),o=n(28),c=n(641),l=n(640),d={data:function(){return{}}},f=n(45),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{staticClass:"mx-auto",attrs:{"min-height":"100",color:"transparent"}},[e(o.c,[e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot1")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot2")],2)],1),t._v(" "),e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot3")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot4")],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},761:function(t,e,n){"use strict";n.r(e);var r=n(288),o=n(28),c=n(645),l=(n(33),n(191),n(29));n(40),n(55),n(5),n(38),n(65),n(51),n(7),n(64),n(88),n(61),n(112);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={data:function(){return{campaignList:[],search:"",headers:[{text:"ຊື່ Campaign",align:"center",value:"title",sortable:!0},{text:"ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ວັນທີເລີ່ມ",align:"center",value:"start"},{text:"ວັນທີສິ້ນສຸດ",align:"center",value:"end"},{text:"ເຂົ້າເຖິງ",align:"center",value:"reach"},{text:"ຄອມເມັ້ນ",align:"center",value:"comments"},{text:"Result",align:"center",value:"results"},{text:"ປິດການຂາຍ",align:"center",value:"closed"},{text:"ຍອດທີ່ຈ່າຍໄປ",align:"center",value:"budgetSpend"}]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadCampaignData();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadCampaignData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/api/campaign/find_summary").then((function(e){t.campaignList=e.data.rows.map((function(t){return t}));var n,r=d(t.campaignList);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.start=o.start.split("T")[0],o.end=o.end.split("T")[0]}}catch(t){r.e(t)}finally{r.f()}t.headers.length=0})).catch((function(t){console.log("Error ",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},h=n(45),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,[e(o.d,[t._v("\n            Campaign\n        ")]),t._v(" "),e(o.c,[t.campaignList?e(c.a,{attrs:{headers:t.headers,search:t.search,items:t.campaignList}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},762:function(t,e,n){"use strict";n.r(e);var r=n(183),o=n(288),c=n(28),l=n(292),d=n(619),f=n(291),m=n(642),h=n(635),v=n(634),y=(n(38),n(7),n(64),n(10),n(9),n(5),n(12),n(8),n(13),n(2)),S=(n(43),n(59),n(46));function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"menu-card",components:{},props:{title:{type:String,default:""},path:{type:String,default:""},icon:{type:String,default:""}},data:function(){return{imageSvg:n(400),imageSrc:n(399),terminalDialog:!1,terminalSelected:this.findSelectedTerminal||1}},computed:x({},Object(S.c)(["findAllTerminal","findSelectedTerminal"])),methods:x(x({},Object(S.b)(["setSelectedTerminal"])),{},{takeMeTo:function(){this.path.includes("/pos")&&!this.findSelectedTerminal?(this.terminalDialog=!0,console.log("PATH ".concat(this.path))):this.$router.push(this.path)},takeToPOS:function(){this.setSelectedTerminal(this.terminalSelected),this.terminalDialog=!1,this.$router.push(this.path)}})},w=n(45),component=Object(w.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{scrollable:"","max-width":"1200",persistent:""},model:{value:t.terminalDialog,callback:function(e){t.terminalDialog=e},expression:"terminalDialog"}},[e(o.a,[e(c.d,[t._v("ເລືອກ Terminal")]),t._v(" "),e(f.a),t._v(" "),e(c.c,{staticStyle:{height:"300px"}},[e(v.a,{attrs:{column:""},model:{value:t.terminalSelected,callback:function(e){t.terminalSelected=e},expression:"terminalSelected"}},t._l(t.findAllTerminal,(function(t){return e(h.a,{key:t.id,attrs:{label:t.name+" - "+t.description,value:t.id}})})),1)],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.takeToPOS}},[t._v("\n                    ເລືອກ\n                ")])],1)],1)],1),t._v(" "),e(m.a,{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[e(o.a,{attrs:{elevation:r?16:0,outlined:""},on:{click:t.takeMeTo}},[e(c.c,{staticClass:"text-center"},[e("div",[t._t("iconSlot")],2),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[e(l.a,{staticClass:"ma-2",staticStyle:{"background-color":"transparent",outline:"1px solid gray"},attrs:{variant:"outlined"}},[t._v("\n                        "+t._s(t.title)+"\n                    ")])],1)])],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},777:function(t,e,n){t.exports=n.p+"img/cashier_2.208aede.svg"},778:function(t,e,n){t.exports=n.p+"img/invoice.45f420f.svg"},779:function(t,e,n){t.exports=n.p+"img/pay-card.8fb80cc.svg"},780:function(t,e,n){t.exports=n.p+"img/stock.b6becdb.svg"},781:function(t,e,n){t.exports=n.p+"img/responsive.bfad449.svg"},782:function(t,e,n){t.exports=n.p+"img/patient.1cdc99c.svg"},783:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLjYzLDE0LjFDMTIuMjMsMTAuNTggMTYuMzgsOS4wMyAxOS45LDEwLjYzQzIzLjQyLDEyLjIzIDI0Ljk3LDE2LjM4IDIzLjM3LDE5LjlDMjIuMjQsMjIuNCAxOS43NSwyNCAxNywyNEMxNC4zLDI0IDExLjgzLDIyLjQ0IDEwLjY3LDIwSDFWMThDMS4wNiwxNi44NiAxLjg0LDE1LjkzIDMuMzQsMTUuMThDNC44NCwxNC40MyA2LjcyLDE0LjA0IDksMTRDOS41NywxNCAxMC4xMSwxNC4wNSAxMC42MywxNC4xVjE0LjFNOSw0QzEwLjEyLDQuMDMgMTEuMDYsNC40MiAxMS44MSw1LjE3QzEyLjU2LDUuOTIgMTIuOTMsNi44NiAxMi45Myw4QzEyLjkzLDkuMTQgMTIuNTYsMTAuMDggMTEuODEsMTAuODNDMTEuMDYsMTEuNTggMTAuMTIsMTEuOTUgOSwxMS45NUM3Ljg4LDExLjk1IDYuOTQsMTEuNTggNi4xOSwxMC44M0M1LjQ0LDEwLjA4IDUuMDcsOS4xNCA1LjA3LDhDNS4wNyw2Ljg2IDUuNDQsNS45MiA2LjE5LDUuMTdDNi45NCw0LjQyIDcuODgsNC4wMyA5LDRNMTcsMjJBNSw1IDAgMCwwIDIyLDE3QTUsNSAwIDAsMCAxNywxMkE1LDUgMCAwLDAgMTIsMTdBNSw1IDAgMCwwIDE3LDIyTTE2LDE0SDE3LjVWMTYuODJMMTkuOTQsMTguMjNMMTkuMTksMTkuNTNMMTYsMTcuNjlWMTRaIiAvPjwvc3ZnPg=="},876:function(t,e,n){"use strict";n.r(e);var r=n(183),o=n(288),c=n(28),l=n(641),d=n(619),f=n(291),m=n(635),h=n(634),v=n(640),y=(n(38),n(7),n(64),n(12),n(13),n(55),n(65),n(51),n(33),n(88),n(61),n(29)),S=n(2),_=(n(112),n(320),n(5),n(9),n(105),n(87),n(40),n(8),n(27),n(396),n(66),n(10),n(62)),x=n(759),O=n(760),w=n(761),D=n(714),j=n(715),M=n(46),T=n(385);function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(S.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={components:{CardOnTop:x.default,CampaignCard:w.default,CardGrouping:O.default,MenuOverview:j.default,MinStockCard:D.default},middleware:"auths",data:function(){return{terminalDialog:!1,terminalSelected:null,barOptionsForMonthlyStat:{colors:[],chart:{type:"line",height:"auto"},plotOptions:{bar:{borderRadius:4,horizontal:!0},dataLabels:{style:{fontSize:"12px"},formatter:function(t){return t.toFixed(2)}}},dataLabels:{enabled:!0},xaxis:{categories:[],style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}},yaxis:{title:{text:"Sales (in thousands)"},labels:{formatter:function(t){return t.toLocaleString()}}},title:{text:"ສະຖິຕິການຂາຍໃນປີ",style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}}},barSeriesForMonthlyStat:[{data:[]}],menus:[{title:"POS",svgIcon:n(777),path:"/pos"},{title:"Invoice",svgIcon:n(778),path:"/admin/ordersFromPos"},{title:"ລູກຫນີ້",svgIcon:n(779),path:"/admin/ordersFromPosCredit"},{title:"Stock",svgIcon:n(780),path:"/admin/product/productlist"},{title:"ລາຍການ ການຂາຍ",svgIcon:n(781),path:"/admin/ordersFromPos"},{title:"Customer",svgIcon:n(782),path:"/admin/client"},{title:"ຄົ້ນຫາອິນວອຍຄ້າງຈ່າຍ",svgIcon:n(783),path:"/admin/ordersFromPosSummaryByCustomer"}],yearlySale:[],menusOverview:[{title:"ຍອດຂາຍມື້ນິ (KIP)",icon:"mdi-calendar",path:"",total:"0"},{title:"ຍອດຂາຍເດືອນນີ້ - ( "+(new Date).toDateString().split(" ")[1]+"/"+(new Date).toDateString().split(" ")[3]+" ) KIP",icon:"mdi-calendar",path:"",total:"0"},{title:"ຍອດຂາຍໝົດປີ - "+(new Date).toDateString().split(" ")[3]+" KIP",icon:"mdi-calendar",path:"",total:"0"}],saleValue:0,items:[{name:"Item #1",id:1},{name:"Item #2",id:2},{name:"Item #3",id:3}],minstockComponentsKey:1,isloading:!1,dailyState:!1,series:[0,0],options:{chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],labels:["CASH","COD"],title:{text:"ອໍເດີ ປະເພດ"},annotations:{points:[]}},peeair:{series:[],options:{colors:["#FF4560","#775DD0"]}},pieChartOption:{title:Object(S.a)({text:"ໝວດສິນຄ້າຂາຍດີ",align:"center",style:{fontSize:"16px"}},"style",{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}),labels:[],barSeries:[],chart:{type:"pie",height:"auto"}},barSeriesForDailyStat:[{data:[]}],barOptionsForDailyStat:{colors:[],chart:{type:"line",height:"auto"},plotOptions:{bar:{borderRadius:4,horizontal:!0},dataLabels:{style:{fontSize:"12px"},formatter:function(t){return t.toFixed(2)}}},dataLabels:{enabled:!0},xaxis:{categories:[],style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}},yaxis:{title:{text:"Sales (in thousands)"},labels:{formatter:function(t){return t.toLocaleString()}}},title:{text:"ສະຖິຕິການຂາຍໃນເດືອນ",style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}}}}},created:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.findSelectedTerminal||(t.terminalSelected=1,t.terminalDialog=!0),e.next=3,t.loadSaleStatistic();case 3:t.generateDailyStatisticSale(),t.init();case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadTopSale();case 2:return e.next=4,t.paymentGroup();case 4:case"end":return e.stop()}}),e)})))()},computed:A(A({},Object(M.c)(["findAllTerminal","findSelectedTerminal","currentSelectedLocation","findAllLocation"])),{},{totalSaleYTD:function(){var t=this.yearlySale.reduce((function(t,e){return t+e.total-e.discount}),0);return console.log("YTD SALE ".concat(t)),Object(_.e)(t)},totalSaleMTD:function(){console.log("====> TD ".concat(_.l.split("-")[1]));var t=this.yearlySale.filter((function(t){return t.bookingDate.split("-")[1]==_.l.split("-")[1]})).reduce((function(t,e){return t+e.total-e.discount}),0);return console.log("MTD SALE ".concat(t)),Object(_.e)(t)},txnSaleMTD:function(){return this.yearlySale.filter((function(t){return t.bookingDate.split("-")[1]==_.l.split("-")[1]})).reduce((function(t,e){var n=e.bookingDate,r=t.findIndex((function(t){return t.date===n}));return-1===r?t.push({date:n,transactions:[e],totalSale:e.total-e.discount}):(t[r].transactions.push(e),t[r].totalSale+=e.total-e.discount),t}),[])},totalSaleTD:function(){var t=this.yearlySale.filter((function(t){return t.bookingDate==_.l})).reduce((function(t,e){return t+e.total-e.discount}),0);return console.log("TD SALE ".concat(t)),Object(_.e)(t)}}),methods:A(A({},Object(M.b)(["setSelectedTerminal","setSelectedLocation","initProduct"])),{},{chooseTerminal:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSelectedTerminal(t.terminalSelected),console.log("LOCATION LIST ".concat(t.findAllLocation.length)),(n=t.findAllLocation.find((function(e){return e.id==t.findAllTerminal.find((function(e){return e.id==t.terminalSelected})).locationId})))||console.log("LOCATION IS !TRUE"),console.log("LOCATION IS ".concat(n)),console.log("LOCATION FOUND ".concat(n.id)),t.setSelectedLocation(n),console.log("Location id ".concat(n.id)),t.minstockComponentsKey+=1,t.terminalDialog=!1,e.next=12,t.loadProduct(n.id);case 12:case"end":return e.stop()}}),e)})))()},loadProduct:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isloading=!0,e.productList=[],n.next=4,e.$axios.get("product_f/".concat(t)).then((function(t){e.initProduct(t.data)})).catch((function(t){console.log("Data: "+t)}));case 4:e.isloading=!1;case 5:case"end":return n.stop()}}),n)})))()},numberFormatter:function(t){return Object(_.e)(t)},getRandomColor:function(){for(var t="#",i=0;i<6;i++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},loadTopSale:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/topsaleMinimart/?top=5").then((function(e){var n=T.b(t.$refs.chart),option={title:{text:"ສິນຄ້າຂາຍດີຕາມໝວດ",subtext:"-",left:"center",textStyle:{fontFamily:"noto sans lao"}},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};console.log("Data ",e.data[0]),e.data.map((function(t){var e={name:t.categ_name+" "+Object(_.e)(t.total_sale),value:+t.sale_count};option.series[0].data.push(e)})),n.setOption(option)})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},loadSaleStatistic:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(_.c)(),t.isloading=!0,e.next=4,t.$axios.get("api/sale/sumsaleYearly",{params:{date:n}}).then((function(e){t.yearlySale=[];var n,r=k(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.yearlySale.push(o)}}catch(t){r.e(t)}finally{r.f()}t.menusOverview[2].total=t.totalSaleYTD,t.menusOverview[1].total=t.totalSaleMTD,t.menusOverview[0].total=t.totalSaleTD,console.log("Lend of sale yearly "+t.yearlySale.length),t.monthGroupSale()})).catch((function(t){console.log("error",t)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},generateDailyStatisticSale:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isloading=!0,n=k(t.txnSaleMTD);try{for(n.s();!(r=n.n()).done;)o=r.value,t.barOptionsForDailyStat.colors.push(t.getRandomColor),t.barSeriesForDailyStat[0].data.push(o.totalSale),t.barOptionsForDailyStat.xaxis.categories.push(o.date)}catch(t){n.e(t)}finally{n.f()}t.dailyState=!0,t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},monthGroupSale:function(){var t={};this.yearlySale.forEach((function(e){var n=new Date(e.bookingDate),r=n.getMonth()+1,o=n.getFullYear(),c="".concat(o,"-").concat(r.toString().padStart(2,"0"));t[c]||(t[c]={total:0,transactions:[]}),t[c].total+=e.total-e.discount,t[c].transactions.push(e),console.log("datat add===>")})),console.log("====> my chart"+t);for(var e=0,n=Object.keys(t);e<n.length;e++){var r=n[e];console.log("*****ETERATOR*****"+r),this.barOptionsForMonthlyStat.colors.push(this.getRandomColor),this.barSeriesForMonthlyStat[0].data.push(t[r].total),this.barOptionsForMonthlyStat.xaxis.categories.push(r)}return t},paymentGroup:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/cod_n_cash_report").then((function(e){t.series=e.data.series,t.options.labels=e.data.labels})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},init:function(){console.log("Init function");var t=[66,33];this.peeair.options={title:{text:"GreenWood",align:"center",style:{fontSize:"16px"}},labels:[" COD ".concat(t[0]," ບິນ ")," ORDER ".concat(t[1]," ບິນ")],chart:{type:"pie",width:"100%",height:"400px"}},this.peeair.series=t}})},E=n(45),component=Object(E.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ma-0",staticStyle:{background:"#EFF2F9"}},[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(d.a,{attrs:{scrollable:"","max-width":"1200",persistent:""},model:{value:t.terminalDialog,callback:function(e){t.terminalDialog=e},expression:"terminalDialog"}},[e(o.a,[e(c.d,[t._v("ເລືອກ Terminal")]),t._v(" "),e(f.a),t._v(" "),e(c.c,{staticStyle:{height:"300px"}},[e(h.a,{attrs:{column:""},model:{value:t.terminalSelected,callback:function(e){t.terminalSelected=e},expression:"terminalSelected"}},t._l(t.findAllTerminal,(function(t){return e(m.a,{key:t.id,attrs:{label:t.name+" - "+t.description,value:t.id}})})),1)],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.chooseTerminal}},[t._v("\n                    ເລືອກ\n                ")])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(o.a,{staticClass:"pa-4",staticStyle:{"background-color":"transparent"}},[e(c.d,{staticStyle:{"font-weight":"bold","font-family":"Arial, Helvetica, sans-serif"}},[t._v("\n                SHORTCUT \n            ")]),t._v(" "),e(v.a,[e(l.a,{attrs:{cols:12}},[e("div",{staticClass:"row"},t._l(t.menus,(function(n,r){return e("div",{key:r,staticClass:"col-12 col-md-4 col-sm-6 col-xs-6 text-center"},[e("Menu",{attrs:{title:n.title,icon:n.icon,path:n.path},scopedSlots:t._u([{key:"iconSlot",fn:function(){return[e("img",{attrs:{src:n.svgIcon,height:"80"}})]},proxy:!0}],null,!0)})],1)})),0)])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(o.a,{staticClass:"pa-1",staticStyle:{"background-color":"transparent"}},[e(c.d,{staticStyle:{"font-weight":"bold","font-family":"Arial, Helvetica, sans-serif"}},[t._v("\n                OVERVIEW \n            ")]),t._v(" "),e(v.a,[e(l.a,{attrs:{cols:12}},[e("div",{staticClass:"row"},t._l(t.menusOverview,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-md-4 col-sm-6 col-xs-6"},[e("MenuOverview",{attrs:{title:t.title,icon:t.icon,path:t.path,total:t.total}})],1)})),0)])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-2 pa-0"},[e(v.a,{staticClass:"p-0"},[e(l.a,{attrs:{cols:"6"}}),t._v(" "),e(l.a,{attrs:{cols:"3"}}),t._v(" "),e(l.a,{attrs:{cols:"3"}})],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(v.a,[e(l.a,{attrs:{cols:"6",md:"6",sm:"6",xl:"6"}},[e(o.a,[e("div",{ref:"chart",staticStyle:{width:"100%",height:"400px"}})])],1),t._v(" "),t.dailyState?e(l.a,{attrs:{cols:"6",md:"6",sm:"6",xl:"6"}},[e(o.a,[e("apexchart",{attrs:{options:t.barOptionsForDailyStat,series:t.barSeriesForDailyStat}})],1)],1):t._e()],1)],1),t._v(" "),t.dailyState?e("div",{staticClass:"mb-1"},[e(v.a,[e(l.a,{attrs:{cols:"6",md:"6",sm:"6",xl:"6"}},[e(o.a,[e("apexchart",{attrs:{options:t.barOptionsForMonthlyStat,series:t.barSeriesForMonthlyStat}})],1)],1)],1)],1):t._e(),t._v(" "),e("div",{key:t.minstockComponentsKey},[t.currentSelectedLocation?e("MinStockCard"):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default,Menu:n(762).default,MenuOverview:n(715).default,MinStockCard:n(714).default})}}]);