(window.webpackJsonp=window.webpackJsonp||[]).push([[46,9],{631:function(e,t,n){"use strict";n(298);var r=n(299);t.a=Object(r.a)("layout")},632:function(e,t,n){"use strict";n(30),n(79);t.a={bind:function(e,t,n){e.addEventListener("input",(function(e){var t=e.target.value.replace(/[^0-9]/g,"");"NaN"===(t=parseInt(t,10).toLocaleString("en-US"))&&(t="0"),n.componentInstance.$emit("input",t)}))}}},711:function(e,t,n){"use strict";n.r(t);var r=n(613),o=n(172),c=n(280),l=n(47),d=n(612),m=n(606),f=n(608),h=n(611),v=n(610),y=n(94),x=n(24),k=(n(105),n(20),n(4),n(7),n(632)),w=n(297),_={props:{paymentHeadId:{type:Number,default:""},isEdit:{type:Boolean,default:!1}},directives:{commaThousand:k.a},data:function(){return{account:[],drAccount:"",crAccount:"",amount:"",isloading:!1,bookingDate:"",paymentDescription:"",postingReference:"",paymentType:["Cash","Check","Credit Card","Bank transfer"],currencyList:["LAK","USD","THB"],form:{header:{bookingDate:"",paymentNumber:"REF12345",payee:"ຮ້ານຄ້າທົ່ວໄປ",paymentMethod:"Cash",currency:"LAK",rate:1,totalAmount:"1,000",notes:"Payment for services rendered",update_user:1,drAccount:15,crAccount:1,isActive:!0},line:{}}}},mounted:function(){this.loadAccount();var e=(new Date).toISOString().substr(0,10);this.bookingDate=e,this.form.header.bookingDate=e,this.isEdit&&(console.log("Load payment header"),this.loadPaymentById())},computed:{today:function(){var e=(new Date).toLocaleDateString();return console.log(e),e}},methods:{loadAccount:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("/api/financial/chartAccount");case 3:t.sent.data.forEach((function(element){e.account.push({id:element.id,desc:element.accountName+" - "+element.accountNumber})})),e.isloading=!1;case 6:case"end":return t.stop()}}),t)})))()},getFormatNum:function(e){return(new Intl.NumberFormat).format(e)},loadPaymentById:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("/api/finanicial/ap/header/find/".concat(e.paymentHeadId)).then((function(t){e.form.header=t.data,e.form.header.bookingDate=t.data.bookingDate.split("T")[0],e.form.header.totalAmount=e.getFormatNum(e.form.header.totalAmount)})).catch((function(t){Object(w.c)(e.$swal,"Error",t.response.data)}));case 3:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isloading){t.next=2;break}return t.abrupt("return");case 2:if(e.isloading=!0,!e.isEdit){t.next=8;break}return t.next=6,e.$axios.put("/api/finanicial/ap/header/update/".concat(e.paymentHeadId),e.form.header).then((function(t){Object(w.d)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),e.$emit("reload")})).catch((function(t){Object(w.c)(e.$swal,"Error",t.response.data)}));case 6:t.next=10;break;case 8:return t.next=10,e.$axios.post("/api/finanicial/ap/header/create",e.form.header).then((function(t){Object(w.d)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),e.$emit("reload")})).catch((function(t){Object(w.c)(e.$swal,"Error",t.response.data.errors[0].msg)}));case 10:e.isloading=!1;case 11:case"end":return t.stop()}}),t)})))()}}},D=n(44),component=Object(D.a)(_,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{justify:"center"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.props;return[t(o.a,e._b({attrs:{color:"primary"}},"v-btn",r,!1),[e._v("\n            Open Dialog\n        ")])]}}])},[e._v(" "),t(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(c.a,{staticClass:"pa-4"},[t(l.d,[t("span",{staticClass:"text-h5"},[e._v("ຄ່າໃຊ້ຈ່າຍ "+e._s(e.today))])]),e._v(" "),t(l.c,[t(m.a,[t(h.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(y.a,{attrs:{label:"ເລກເອກະສານອ້າງອີງ*",required:""},model:{value:e.form.header.paymentNumber,callback:function(t){e.$set(e.form.header,"paymentNumber",t)},expression:"form.header.paymentNumber"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(y.a,{attrs:{type:"date",label:"ວັນທີ*",hint:"ເດຶອນ/ວັນ/ປີ 12/31/2023"},model:{value:e.form.header.bookingDate,callback:function(t){e.$set(e.form.header,"bookingDate",t)},expression:"form.header.bookingDate"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(y.a,{attrs:{label:"ຊຶ ບໍ່ລິສັດ ຫລື ຜູ້ຮັບ ການຊຳລະ*",hint:"ຊື່ບຸກຄົນ,ບໍລິສັດ ຫລື ຜູ້ຮັບການຊຳລະ","persistent-hint":"",required:""},model:{value:e.form.header.payee,callback:function(t){e.$set(e.form.header,"payee",t)},expression:"form.header.payee"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(y.a,{attrs:{label:"ເນື້ອໃນການຊຳລະ*",required:""},model:{value:e.form.header.notes,callback:function(t){e.$set(e.form.header,"notes",t)},expression:"form.header.notes"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(y.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{label:"ຈຳນວນເງິນ*",required:""},model:{value:e.form.header.totalAmount,callback:function(t){e.$set(e.form.header,"totalAmount",t)},expression:"form.header.totalAmount"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(r.a,{attrs:{items:e.currencyList,label:"ສະກຸນເງິນ*"},model:{value:e.form.header.currency,callback:function(t){e.$set(e.form.header,"currency",t)},expression:"form.header.currency"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(y.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{label:"ອັດຕາແລກປ່ຽນ*",required:""},model:{value:e.form.header.rate,callback:function(t){e.$set(e.form.header,"rate",t)},expression:"form.header.rate"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(r.a,{attrs:{items:e.paymentType,label:"ປະເພດການຊຳລະ *"},model:{value:e.form.header.paymentMethod,callback:function(t){e.$set(e.form.header,"paymentMethod",t)},expression:"form.header.paymentMethod"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(r.a,{attrs:{"item-text":"desc","item-value":"id",items:e.account,label:"ບັນຊີແຍກປະເພດ DR ACCOUNT*"},model:{value:e.form.header.drAccount,callback:function(t){e.$set(e.form.header,"drAccount",t)},expression:"form.header.drAccount"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(r.a,{attrs:{"item-text":"desc","item-value":"id",items:e.account,label:"ບັນຊີແຍກປະເພດ CR ACCOUNT*"},model:{value:e.form.header.crAccount,callback:function(t){e.$set(e.form.header,"crAccount",t)},expression:"form.header.crAccount"}})],1)],1)],1),e._v(" "),t("small",[e._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),e._v(" "),t(l.a,[t(v.a),e._v(" "),t(o.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v("\n                Close\n            ")]),e._v(" "),t(o.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.submitData}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:n(295).default})},794:function(e,t,n){"use strict";n.r(t);var r=n(172),o=n(280),c=n(47),l=n(612),d=n(615),m=n(789),f=n(608),h=n(631),v=n(286),y=n(94),x=(n(30),n(181),n(24)),k=n(21),w=(n(105),n(23),n(48),n(4),n(33),n(60),n(39),n(8),n(74),n(84),n(51),n(711)),_=n(63);function D(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var I={components:{ApPayment:w.default},mounted:function(){this.loadTxn()},data:function(){return{userId:"",search:"",isEdit:!1,dialog:!1,apFormKey:1,isloading:!1,menu1:!1,menu2:!1,txnList:[],selectedId:"",headers:[{text:"ວັນທີ",align:"center",value:"bookingDate",sortable:!0},{text:"ເລກອ້າງອີງ",align:"center",value:"paymentNumber"},{text:"ຍອດລວມ",align:"center",value:"totalAmount"},{text:"ສະກຸນ",align:"center",value:"currency"},{text:"ອັດຕາແລກປ່ຽນ",align:"center",value:"rate"},{text:"ຊຳລະດ້ວຍ",align:"center",value:"paymentMethod"},{text:"ເບື້ອງຫນີ້",align:"center",value:"drAccount"},{text:"ເບື້ອງມີ",align:"center",value:"crAccount"},{text:"ເນື້ອໃນ",align:"center",value:"notes"},{text:"ເວລາສ້າງ",align:"center",value:"createdAt"},{text:"ແກ້ໄຂ",align:"end",value:"function",sortable:!1}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10))}},methods:{triggerDialog:function(){this.apFormKey+=1,this.selectedId=null,this.isEdit=!1,this.dialog=!0},numberWithFormat:function(e){return Object(_.d)(e)},editItem:function(e){this.selectedId=e.id,this.isEdit=!0,this.apFormKey+=1,this.dialog=!0},formatDate:function(e){if(!e)return null;var t=e.split("-"),n=Object(k.a)(t,3),r=n[0],o=n[1],c=n[2];return"".concat(o,"/").concat(c,"/").concat(r)},loadTxn:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("/api/finanicial/ap/header/find").then((function(t){e.txnList=[];var n,r=D(t.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.bookingDate=o.bookingDate.split("T")[0],e.txnList.push(o)}}catch(e){r.e(e)}finally{r.f()}console.log("====> "+e.txnList[0])})).catch((function(e){}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()}}},O=n(44),component=Object(O.a)(I,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t("div",[t(f.a,{attrs:{persistent:"",width:"1024"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("ap-payment",{key:e.apFormKey,attrs:{"is-edit":e.isEdit,"payment-head-id":e.selectedId},on:{close:e.triggerDialog,"close-dialog":function(t){e.dialog=!1},reload:e.loadTxn}})],1)],1),e._v(" "),t(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(o.a,[t(c.d,[t(h.a,{attrs:{row:"",wrap:""}},[t(l.a,{attrs:{cols:"6"}},[t(v.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(y.a,e._g(e._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(t){e.date=e.parseDate(e.dateFormatted)}},model:{value:e.dateFormatted,callback:function(t){e.dateFormatted=t},expression:"dateFormatted"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),t(m.a,{attrs:{"no-title":""},on:{input:function(t){e.menu1=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),t(v.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(y.a,e._g(e._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(t){e.date2=e.parseDate(e.dateFormatted2)}},model:{value:e.dateFormatted2,callback:function(t){e.dateFormatted2=t},expression:"dateFormatted2"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(m.a,{attrs:{"no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1),e._v(" "),t(r.a,{on:{click:e.triggerDialog}},[e._v(" ສ້າງລາຍຈ່າຍ ")])],1),e._v(" "),t(l.a,{attrs:{cols:"6"}},[t(y.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),t(y.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດຜູ້ຂາຍ","single-line":"","hide-detailsx":""},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),e._v(" "),t(r.a,{on:{click:e.loadTxn}},[e._v(" ດຶງລາຍງານ ")])],1)],1)],1),e._v(" "),e.txnList?t(d.a,{attrs:{headers:e.headers,search:e.search,items:e.txnList},scopedSlots:e._u([{key:"item.function",fn:function(n){var o=n.item;return[t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.editItem(o),e.wallet=!0}}},[t("i",{staticClass:"fa fa-pencil-square-o"})])]}},{key:"item.totalAmount",fn:function(t){var n=t.item;return[e._v("\n\n                "+e._s(e.numberWithFormat(n.totalAmount))+"\n\n\n            ")]}}],null,!0)}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:n(295).default})}}]);