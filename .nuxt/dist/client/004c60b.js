(window.webpackJsonp=window.webpackJsonp||[]).push([[44,20,22],{559:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(243),l=n(75),component=Object(l.a)({},(function(){var t=this._self._c;return t(r.a,{attrs:{color:"primary",dark:""}},[t(o.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),t(c.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},564:function(t,e,n){"use strict";n.r(e);var r=n(541),o=n(246),c=n(139),l=n(244),d=n(554),m={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},f=n(75),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(c.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(l.a),t._v(" "),e(c.a,[e(d.a),t._v(" "),e(r.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},569:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}));n(26),n(208);var r=function(t,title,e){t({icon:"error",title:title,text:e,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},o=function(t,title,text){t({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},c=function(t){return(new Intl.NumberFormat).format(t)}},570:function(t,e,n){"use strict";var r=n(2),o=(n(40),n(57),n(261),n(10),n(4),n(8),n(47),n(109),n(9),n(11),n(13),n(14),n(5)),c=n(94),l=n(112);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},579:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(23),n(26),n(572),n(208);var r=function(t,title,e){t({icon:"error",title:title,text:e,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},o=function(t,title,text){t({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})};new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},594:function(t,e,n){"use strict";n(262);var r=n(264);e.a=Object(r.a)("layout")},597:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(577),l=n(244),d=n(574),m={props:{orderDetail:{type:Object,default:""}}},f=n(75),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ml-4"},[e(o.d,[t._v(t._s(this.orderDetail.title))]),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຈຳນວນ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.amount)+" ອໍເດີ")])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຍອດຂາຍ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.sale))])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ສ່ວນຫລຸດ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.discount))])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("COD/RIDER FEE")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.gross))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},604:function(t,e,n){"use strict";n.r(e);var r,o=n(555),c=n(541),l=n(246),d=n(139),m=n(568),f=n(570),h=n(554),v=n(86),_=n(2),x=n(38),y=(n(140),n(21),n(29),n(579)),w=(r={props:{isEdit:{type:Boolean,default:!1},id:{type:Number,require:!1}},data:function(){return{isSubmitting:!1,form:{orderId:this.id,status:2,userId:"",reason:""},cancelList:[{id:2,name:"cancel"},{id:3,name:"return"}]}},computed:{codeRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຕົວຫຍໍ້ ສາຂາ "},function(t){return t&&t.length>=2||"ຕົວຫຍໍ້ສາຂາຕ້ອງ 3 ຕົວຂື້ນໄປ"}]},nameRule:function(){return[function(t){return!!t||"ກະລຸນາ ຊື່ ສາຂາ "}]},numberRule:function(){return[function(t){return/^[0-9]*$/.test(t)||!t||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]}},mounted:function(){this.loadBranch()}},Object(_.a)(r,"computed",{user:function(){return this.$auth.user||""}}),Object(_.a)(r,"methods",{submitForm:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=13;break}if(t.isSubmitting=!0,!t.isEdit){e.next=7;break}return e.next=5,t.$axios.put("branch/update/".concat(t.id),t.form).then((function(e){200==e.status?(Object(y.b)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(y.a)(t.$swal,"Error",e.data)})).catch((function(e){Object(y.a)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 5:e.next=11;break;case 7:return t.form.userId=t.user.id,console.log("Form: ",t.form),e.next=11,t.$axios.put("/api/changeOrderStatus",t.form).then((function(e){200==e.status?(Object(y.b)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(y.a)(t.$swal,"Error",e.data)})).catch((function(e){Object(y.a)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 11:e.next=14;break;case 13:return e.abrupt("return");case 14:t.isSubmitting=!1;case 15:case"end":return e.stop()}}),e)})))()},loadBranch:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id||!t.isEdit){e.next=5;break}return t.isSubmitting=!0,e.next=4,t.$axios.get("branch/find/".concat(t.id)).then((function(e){t.form=e.data})).catch((function(e){Object(y.a)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 4:t.isSubmitting=!1;case 5:case"end":return e.stop()}}),e)})))()},refreshData:function(){this.$emit("refresh")}}),r),O=n(75),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(l.a,{staticClass:"pa-4"},[t._v("\n        ຍົກເລີກບິນ\n        "),e(f.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(v.a,{attrs:{disabled:"",label:"ເລກທີອໍເດີ ",required:""},model:{value:t.form.orderId,callback:function(e){t.$set(t.form,"orderId",e)},expression:"form.orderId"}}),t._v(" "),e(o.a,{attrs:{"item-text":"name","item-value":"id",items:t.cancelList,label:"ເລືອກການຍົກເລີກ *"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),t._v(" "),e(v.a,{attrs:{label:"ເຫດຜົນການຍົກເລີກ"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),e(d.a,[e(h.a),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ຍົກເລີກ\n            ")]),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.submitForm(!0)}}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(559).default})},622:function(t,e,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("e56c1e96",content,!0,{sourceMap:!1})},639:function(t,e,n){"use strict";n.r(e);var r=n(541),o=n(246),c=n(139),l=n(552),d=n(568),m=n(570),f=n(56),h=n(554),v=n(86),_=(n(9),n(11),n(10),n(4),n(13),n(8),n(14),n(2)),x=n(38),y=(n(140),n(21),n(30),n(40),n(57),n(48),n(569));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={props:{amount:{type:Number,require:!0,default:0},orderId:{type:Number,require:!0},lockingSessionId:{type:String,require:!0}},computed:{userId:function(){return this.$auth.user.id},userName:function(){return this.$auth.user.name}},data:function(){return{loaddata:[],isloading:!1,valid:!0,message:null,dialogMessage:!1,paymentAmount:this.amount,codFee:0,form_data:{txn_his_id:1e3,txn_id:1e3,txn_type:"TRANSFER",txn_his_amount:1e4,user_id:this.userId,user_balance:this.cusBalance,txn_his_inputter:this.$store.getters.loggedInUser.id,txn_his_date:"2021-09-25 00:00:00"},rule:{idRules:[function(t){return!!t||"ໄອດີ is required"}],amountRules:[function(t){return!!t||"ກລນ ໃສ່ຈຳນວນ is required"}],amountCODRules:[function(t){return!!t||"ກລນ ໃສ່ຈຳນວນ is required"}],txnRule:[function(t){return!!t||"ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required"}]}}},created:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:console.log("Assign amount: ",t.paymentAmount);case 3:case"end":return e.stop()}}),e)})))()},watch:{userId:function(t){this.form_data.user_id=t},amount:function(t){console.log("New amount: ",t),this.paymentAmount=t}},methods:{selectChange:function(t){console.log("SELECT: "+t),this.form_data.txn_id=t},submitDatas:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading=!0,console.log("AMOUNT: ",t.amount),t.$refs.form.validate()){e.next=6;break}return console.log("From validate is verified"),t.isloading=!1,e.abrupt("return");case 6:return n={lockingSessionId:t.lockingSessionId,paymentCode:t.form_data.txn_type,codFee:t.codFee,orderId:t.orderId,userId:t.userId,amount:t.paymentAmount},"/order_cod_settle",e.next=10,t.$axios.post("/order_cod_settle",O({},n)).then((function(e){return t.message=e.data,console.log("this.message",t.message),t.message.includes("completed")?(console.log("RELOAD DATA TRIGGER"),t.refreshData(!0),Object(y.c)(t.$swal,"Succeed","Your transaction completed")):Object(y.b)(t.$swal,"Error","ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ")})).catch((function(e){t.message="Error: "+e}));case 10:t.isloading=!1;case 11:case"end":return e.stop()}}),e)})))()},fetchData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("payment").then((function(e){t.loaddata=e.data.map((function(t){return console.log(t.txn_id),{txn_id:t.payment_code,txn_type:t.payment_code,txn_name:t.payment_name}}))})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 2:case"end":return e.stop()}}),e)})))()},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},formatNum:function(t){return(new Intl.NumberFormat).format(t)},refreshData:function(t){this.$emit("reload",t)}}},D=n(75),component=Object(D.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e(c.d,[t._v("\n      ຊຳລະບິນ "+t._s(this.orderId+"-"+this.lockingSessionId||"null")+" ຍອດ:\n      "+t._s(t.formatNum(this.amount))+" ")]),t._v(" "),e(l.a,[e(m.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(v.a,{attrs:{counter:10,rules:t.rule.idRules,label:"ໄອດີ ຜູ້ລົງ",required:"",disabled:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),e(f.a,{attrs:{items:t.loaddata,"item-value":function(t){return t.txn_id},"item-text":function(t){return t.txn_id+" - "+t.txn_name},"append-outer-icon":"mdi-cash-check","menu-props":"auto","hide-details":"",label:"ປະເພດການຊຳລະ","single-line":"",rules:t.rule.txnRule},on:{change:t.selectChange},model:{value:t.form_data.txn_type,callback:function(e){t.$set(t.form_data,"txn_type",e)},expression:"form_data.txn_type"}}),t._v(" "),e(v.a,{attrs:{counter:10,rules:t.rule.amountRules,label:"ຈຳນວນເງິນ: "+t.formatNum(t.paymentAmount),required:""},model:{value:t.paymentAmount,callback:function(e){t.paymentAmount=e},expression:"paymentAmount"}}),t._v(" "),e(v.a,{attrs:{counter:10,rules:t.rule.amountCODRules,label:"ຄ່າທຳນຽມ COD: "+t.formatNum(t.codFee),required:""},model:{value:t.codFee,callback:function(e){t.codFee=e},expression:"codFee"}})],1),t._v(" "),t._t("default")],2),t._v(" "),e(c.a,[e(h.a),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n        ປິດ\n      ")]),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.submitDatas}},[t._v(" ບັນທຶກ ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(559).default})},678:function(t,e,n){"use strict";n(622)},679:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,'.grey[data-v-0e8f236e],.text-h5[data-v-0e8f236e]{font-family:"Noto Sans Lao"}table[data-v-0e8f236e]{border:1px solid #000}',""]),r.locals={},t.exports=r},718:function(t,e,n){"use strict";n.r(e);var r=n(541),o=n(246),c=n(139),l=n(577),d=n(710),m=n(709),f=n(568),h=n(594),v=n(247),_=n(574),x=n(86),y=(n(29),n(256),n(23)),w=n(38),O=(n(4),n(8),n(76),n(65),n(69),n(26),n(48),n(30),n(572),n(140),n(604),n(569),{data:function(){return{formData:{cusId:1e4,cusBalance:0},cancelForm:!1,orderLockingSessionId:"",componentSettlementKey:1,payment:!1,paymentAmount:0,OrderIdSelected:"",whatsappContactLink:"",componentKey:0,dialogOrderDetail:!1,selectedOrderId:"",wallet:!1,isedit:!1,dialog:!1,isloading:!1,dialogForm:!1,message:"",valid:!0,name:"",search:"",userId:null,orderHeaderList:[],loadDataNoCancelOrder:[],headers:[{text:"ວັນທີ",align:"center",value:"bookingDate",sortable:!0},{text:"ຈຳນວນ ວັນ",align:"center",value:"codCount",sortable:!0},{text:"ຊື່ລູກຄ້າ",align:"center",value:"cusName"},{text:"ເບີໂທ",align:"center",value:"cusTel"},{text:"ບ່ອນສົ່ງ",align:"center",value:"cusAddress"},{text:"ລາຄາເຕັມ",align:"end",value:"net",sortable:!0},{text:"ສ່ວນຫລຸດ",align:"end",value:"discount",sortable:!0},{text:"ຄ່າຂົນສົ່ງ",align:"end",value:"riderFee",sortable:!0},{text:"ລວມ(ຫັກສ່ວນຫລຸດ)",align:"end",value:"cartTotal",sortable:!1},{text:"ຂົນສົ່ງ",align:"end",value:"shippingCompany",sortable:!1},{text:"ການຊຳລະ",align:"end",value:"payment",sortable:!1},{text:"ຮ້ານ",align:"end",value:"shopName",sortable:!1},{text:"ກົດຊຳລະ",align:"end",value:"function",sortable:!1},{text:"ຍົກເລີກບິນ",align:"end",value:"cancel",sortable:!1}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menu1:!1,menu2:!1}},created:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()},watch:{message:function(t){this.dialog=null!=t},isedit:function(t){t||(this.form_data.cus_id="1XXX")},date:function(t){this.dateFormatted=this.formatDate(this.date),this.loadData()},date2:function(t){this.dateFormatted2=this.formatDate(this.date2),this.loadData()}},computed:{codFeeTotal:function(){return this.orderHeaderList.reduce((function(t,e){return t+e.codFee}),0)},computedDateFormatted:function(){return this.formatDate(this.date)},totalSale:function(){var t=0;return this.noCancelData.forEach((function(e){t+=parseInt(e.cartTotal)})),this.getFormatNum(t)},totalSaleOriginal:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.cartTotal),t+=parseInt(e.cartTotal)})),this.getFormatNum(t)},totalDiscount:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.discount),t+=parseInt(e.discount)})),console.log("Price total: "+t),this.getFormatNum(t)},noCancelData:function(){var t=this;return this.loadDataNoCancelOrder=[],this.orderHeaderList.forEach((function(element){console.log(element.recordStatus),1===element.recordStatus&&(console.log("Concept applied"),t.loadDataNoCancelOrder.push(element))})),this.loadDataNoCancelOrder}},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},whatsappLink:function(t){var e=t.cusTel.trim(),n=e.substring(e.length-8);this.whatsappContactLink="https://api.whatsapp.com/send?phone=+85620".concat(n,"&text=").concat(encodeURIComponent("ສະບາຍດີ ລູກຄ້າ "))},getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},editItem:function(t){this.componentSettlementKey+=1,this.paymentAmount=+t.cartTotal,this.OrderIdSelected=t.orderId,this.orderLockingSessionId=t.lockingSessionId,this.payment=!0},cancelItem:function(t){this.componentSettlementKey+=1,this.OrderIdSelected=t.orderId,this.orderLockingSessionId=t.lockingSessionId,this.cancelForm=!0},handleEvent:function(){this.dialogOrderDetail=!1},codDayCount:function(t){var e=t.split("-")[1]+"/"+t.split("-")[2]+"/"+t.split("-")[0],n=new Date(e),r=(new Date).getTime()-n.getTime();return Math.ceil(r/864e5)},loadData:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/dynamicCustomer/findDymCustomerByCOD?fdate="+t.date+"&tdate="+t.date2).then((function(e){t.orderHeaderList=e.data.map((function(e){return{net:e.cart_total,cartTotal:e.cart_total+e.rider_fee-(e.discount+e.cod_fee),codFee:e.cod_fee,cusAddress:e.dest_delivery_branch,discount:e.discount,id:e.id,lockingSessionId:e.locking_session_id,cusName:e.name,payment:e.payment_code,riderFee:e.rider_fee,shippingFeeBy:e.shipping_fee_by,shopName:e.outlet_name,shippingCompany:e.source_delivery_branch,cusTel:e.tel,bookingDate:e.txn_date.split("T")[0],recordStatus:1,orderId:e.order_id,codCount:t.codDayCount(e.txn_date.split("T")[0]),order_price_total:t.getFormatNum(e.cart_total)}})),console.log(t.orderHeaderList.length)})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),n=Object(y.a)(e,3),r=n[0],o=n[1],c=n[2];return"".concat(o,"/").concat(c,"/").concat(r)},parseDate:function(t){if(!t)return null;var e=t.split("/"),n=Object(y.a)(e,3),r=n[0],o=n[1],c=n[2];return"".concat(c,"-").concat(r.padStart(2,"0"),"-").concat(o.padStart(2,"0"))}}}),k=(n(678),n(75)),component=Object(k.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(f.a,{attrs:{"max-width":"300px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(f.a,{attrs:{"max-width":"1024"},model:{value:t.payment,callback:function(e){t.payment=e},expression:"payment"}},[e("settlement",{key:t.componentSettlementKey,attrs:{amount:t.paymentAmount,"order-id":t.OrderIdSelected,"locking-session-id":t.orderLockingSessionId},on:{"close-dialog":function(e){t.payment=!1},reload:function(e){t.payment=!1,t.loadData()}}})],1),t._v(" "),e(f.a,{attrs:{"max-width":"1024"},model:{value:t.cancelForm,callback:function(e){t.cancelForm=e},expression:"cancelForm"}},[e("cancel-ticket-form",{key:t.componentSettlementKey,attrs:{id:t.OrderIdSelected},on:{"close-dialog":function(e){t.cancelForm=!1},reload:function(e){t.cancelForm=!1,t.loadData()}}})],1),t._v(" "),e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e(c.d,[e(h.a,{attrs:{row:"",wrap:""}},[e(l.a,{attrs:{cols:"6"}},[e(v.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(x.a,t._g(t._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(m.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(v.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(x.a,t._g(t._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date2=t.parseDate(t.dateFormatted2)}},model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(m.a,{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດຜູ້ຂາຍ","single-line":"","hide-detailsx":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),t._v(" "),e(r.a,{on:{click:t.loadData}},[t._v(" ດຶງລາຍງານ ")])],1)],1)],1),t._v(" "),e(c.c,[e(h.a,{attrs:{row:"",wrap:""}},[e(_.a,[e(l.a,{attrs:{cols:"6",lg:"6"}},[e("order-sumary-card",{attrs:{orderDetail:{title:"ຍອດບິນ",amount:t.getFormatNum(t.noCancelData.length),sale:t.totalSale,discount:t.totalDiscount,gross:t.getFormatNum(t.codFeeTotal)}}})],1),t._v(" "),e(l.a,{attrs:{cols:"6",lg:"6"}})],1)],1)],1),t._v(" "),t.orderHeaderList?e(d.a,{ref:"myTable",attrs:{headers:t.headers,search:t.search,items:t.orderHeaderList},scopedSlots:t._u([{key:"item.cartTotal",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.numberWithCommas(n.cartTotal))+"\n      ")]}},{key:"item.codFee",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.numberWithCommas(n.codFee))+"\n      ")]}},{key:"item.net",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.numberWithCommas(n.net))+"\n      ")]}},{key:"item.discount",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.numberWithCommas(n.discount))+"\n      ")]}},{key:"item.function",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-wallet"})])]}},{key:"item.cancel",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.cancelItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-sync"})])]}},{key:"item.cusTel",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.whatsappLink(o)}}},[t._v("\n          "+t._s(o.cusTel)+"\n          "),e("a",{attrs:{href:t.whatsappContactLink,target:"_blank"}},[t._v("Whatsapp")])])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,"0e8f236e",null);e.default=component.exports;installComponents(component,{DialogClassicMessage:n(564).default,Settlement:n(639).default,CancelTicketForm:n(604).default,LoadingIndicator:n(559).default,OrderSumaryCard:n(597).default})}}]);