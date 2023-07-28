(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{625:function(t,e,r){"use strict";var n=r(1),o=(r(38),r(55),r(227),r(9),r(4),r(7),r(56),r(88),r(10),r(8),r(12),r(13),r(5)),c=r(106),f=r(126);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(f.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},636:function(t,e,r){"use strict";r.r(e);var n,o=r(619),c=r(174),f=r(283),l=r(40),d=r(601),m=r(625),h=r(615),v=r(94),w=r(1),O=r(24),j=(r(105),r(19),r(29),r(60)),$=(n={props:{isEdit:{type:Boolean,default:!1},id:{type:Number,require:!1}},data:function(){return{isSubmitting:!1,form:{orderId:this.id,status:2,userId:"",reason:""},cancelList:[{id:2,name:"cancel"},{id:3,name:"return"}]}},computed:{codeRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຕົວຫຍໍ້ ສາຂາ "},function(t){return t&&t.length>=2||"ຕົວຫຍໍ້ສາຂາຕ້ອງ 3 ຕົວຂື້ນໄປ"}]},nameRule:function(){return[function(t){return!!t||"ກະລຸນາ ຊື່ ສາຂາ "}]},numberRule:function(){return[function(t){return/^[0-9]*$/.test(t)||!t||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]}},mounted:function(){this.loadBranch()}},Object(w.a)(n,"computed",{user:function(){return this.$auth.user||""}}),Object(w.a)(n,"methods",{submitForm:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=13;break}if(t.isSubmitting=!0,!t.isEdit){e.next=7;break}return e.next=5,t.$axios.put("branch/update/".concat(t.id),t.form).then((function(e){200==e.status?(Object(j.j)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(j.i)(t.$swal,"Error",e.data)})).catch((function(e){Object(j.i)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 5:e.next=11;break;case 7:return t.form.userId=t.user.id,console.log("Form: ",t.form),e.next=11,t.$axios.put("/api/changeOrderStatus",t.form).then((function(e){200==e.status?(Object(j.j)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(j.i)(t.$swal,"Error",e.data)})).catch((function(e){Object(j.i)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 11:e.next=14;break;case 13:return e.abrupt("return");case 14:t.isSubmitting=!1;case 15:case"end":return e.stop()}}),e)})))()},loadBranch:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id||!t.isEdit){e.next=5;break}return t.isSubmitting=!0,e.next=4,t.$axios.get("branch/find/".concat(t.id)).then((function(e){t.form=e.data})).catch((function(e){Object(j.i)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 4:t.isSubmitting=!1;case 5:case"end":return e.stop()}}),e)})))()},refreshData:function(){this.$emit("refresh")}}),n),y=r(37),component=Object(y.a)($,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(f.a,{staticClass:"pa-4"},[t._v("\n        ຍົກເລີກບິນ\n        "),e(m.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(v.a,{attrs:{disabled:"",label:"ເລກທີອໍເດີ ",required:""},model:{value:t.form.orderId,callback:function(e){t.$set(t.form,"orderId",e)},expression:"form.orderId"}}),t._v(" "),e(o.a,{attrs:{"item-text":"name","item-value":"id",items:t.cancelList,label:"ເລືອກການຍົກເລີກ *"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),t._v(" "),e(v.a,{attrs:{label:"ເຫດຜົນການຍົກເລີກ"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),e(l.a,[e(h.a),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ຍົກເລີກ\n            ")]),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.submitForm(!0)}}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(297).default})}}]);