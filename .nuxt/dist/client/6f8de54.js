(window.webpackJsonp=window.webpackJsonp||[]).push([[103,51,55],{649:function(t,e,n){"use strict";var r=n(2),o=(n(43),n(59),n(233),n(9),n(5),n(8),n(63),n(87),n(10),n(7),n(12),n(13),n(6)),c=n(95),l=n(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},653:function(t,e,n){"use strict";n(33),n(81);e.a={bind:function(t,e,n){t.addEventListener("input",(function(t){var e=t.target.value.replace(/[^0-9]/g,"");"NaN"===(e=parseInt(e,10).toLocaleString("en-US"))&&(e="0"),n.componentInstance.$emit("input",e)}))}}},654:function(t,e,n){var content=n(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7b5d4dc6",content,!0,{sourceMap:!1})},655:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),r.locals={},t.exports=r},656:function(t,e,n){"use strict";n(308);var r=n(310);e.a=Object(r.a)("layout")},667:function(t,e,n){var content=n(668);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("59f225a8",content,!0,{sourceMap:!1})},668:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},669:function(t,e,n){"use strict";n(10),n(7),n(9),n(12),n(8),n(13);var r=n(92),o=n(2),c=(n(5),n(66),n(654),n(395),n(44)),l=n(42),d=n(165),h=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},694:function(t,e,n){"use strict";n(10),n(7),n(9),n(5),n(12),n(8),n(13);var r=n(92),o=n(2),c=(n(192),n(193),n(395),n(667),n(165)),l=n(42),d=n(312),h=n(124),f=n(236),v=n(1),m=["title"];function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-switch",directives:{Touch:d.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return w(w({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w(w({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",w({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",w({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(f.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===v.y.left&&this.isActive||t.keyCode===v.y.right&&!this.isActive)&&this.onChange()}}})},698:function(t,e,n){"use strict";n.r(e);var r=n(643),o=n(183),c=n(288),l=n(28),d=n(669),h=n(619),f=n(649),v=n(638),m=n(102),_=(n(38),n(7),n(64),n(29)),w=(n(112),n(22),n(40),n(62)),x={props:{isCreate:{type:Boolean,require:!0,default:!0},recordId:{type:Number,require:!1,default:0}},data:function(){return{locationList:[],form:{description:"",name:"",code:1001,saleRate:0,isActive:!0,locationId:1},isloading:!1,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}]}},created:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadEntry(),t.loadLocation();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadLocation:function(t){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("api/location/find").then((function(t){e.locationList=t.data.map((function(t){return t}))})).catch((function(t){Object(w.j)(e.$swal,"Error","Operation fail "+t.Error)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},commitRecord:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()||t.isloading){e.next=12;break}if(t.isloading=!0,n=t.isCreate?"api/terminal/create":"api/terminal/update/".concat(t.recordId),console.log("API => ",n),!t.isCreate){e.next=9;break}return e.next=7,t.$axios.post(n,t.form).then((function(e){return t.refreshData(),Object(w.k)(t.$swal,"Succeed","Your transaction completed")})).catch((function(e){return console.log("Error: ",e),Object(w.j)(t.$swal,"Error","ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ")}));case 7:e.next=11;break;case 9:return e.next=11,t.$axios.put(n,t.form).then((function(e){return t.refreshData(),Object(w.k)(t.$swal,"Succeed","Your transaction completed")})).catch((function(e){return console.log("Error: ",e),Object(w.j)(t.$swal,"Error","ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ")}));case 11:t.isloading=!1;case 12:case"end":return e.stop()}}),e)})))()},loadEntry:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("===> Update form record load"),!t.recordId||t.isCreate){e.next=4;break}return e.next=4,t.$axios.get("api/terminal/find/".concat(t.recordId)).then((function(e){t.form.code=e.data.code,t.form.name=e.data.name,t.form.description=e.data.description,t.form.saleRate=e.data.saleRate,t.form.locationId=e.data.locationId,t.form.isActive=e.data.isActive})).catch((function(t){console.log("Cannot fetch data "+t)}));case 4:case"end":return e.stop()}}),e)})))()},refreshData:function(){this.$emit("reload-data")}},computed:{}},y=n(45),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(h.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(c.a,{staticClass:"pa-4"},[e(l.d,[e("span",{staticClass:"text-h5"},[t._v("Terminal ")])]),t._v(" "),e(l.c,[e(f.a,{ref:"form"},[e(m.a,{attrs:{label:"* code",required:"",disabled:!this.isCreate},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",t._n(e))},expression:"form.code"}}),t._v(" "),e(m.a,{attrs:{label:"* ຊື່",required:"",rules:t.nameRules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e(m.a,{attrs:{label:"Remark"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),e(m.a,{attrs:{label:"* SaleRate",required:""},model:{value:t.form.saleRate,callback:function(e){t.$set(t.form,"saleRate",t._n(e))},expression:"form.saleRate"}}),t._v(" "),e(r.a,{attrs:{"item-text":"name","item-value":"id",items:t.locationList,label:"Stock take location*"},model:{value:t.form.locationId,callback:function(e){t.$set(t.form,"locationId",e)},expression:"form.locationId"}}),t._v(" "),e(d.a,{attrs:{label:"Is Active"},model:{value:t.form.isActive,callback:function(e){t.$set(t.form,"isActive",t._n(e))},expression:"form.isActive"}})],1),t._v(" "),e("small",[t._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),t._v(" "),e(l.a,[e(v.a),t._v(" "),e(o.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                Close\n            ")]),t._v(" "),e(o.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.commitRecord}},[t._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default})},720:function(t,e,n){"use strict";n.r(e);var r=n(643),o=n(183),c=n(288),l=n(28),d=n(292),h=n(641),f=n(619),v=n(291),m=n(640),_=n(638),w=n(694),x=n(102),y=(n(38),n(7),n(64),n(10),n(9),n(12),n(8),n(13),n(2)),O=n(29),k=(n(112),n(22),n(113),n(87),n(5),n(33),n(653)),j=n(46),$=n(62);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var I={props:{recordId:{type:Number,default:0},reserveUserId:{type:Number,default:0},isUpdate:{type:Boolean,default:!1}},directives:{commaThousand:k.a},created:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadTerminal();case 2:if(!t.isUpdate){e.next=10;break}return console.log("View old record"),t.isloading=!0,e.next=7,t.loadTransaction();case 7:t.isloading=!1,e.next=16;break;case 10:n=(new Date).toISOString().substr(0,10),t.record.bookingDate=n,t.record.srcLocationId=1,t.record.desLocationId=1,t.record.terminals=[],t.record.cus_id=t.reserveUserId;case 16:case"end":return e.stop()}}),e)})))()},methods:{removeTerminal:function(t){var e=this.record.terminals.indexOf(t);this.record.terminals.splice(e,1)},addTerminal:function(){var t=this,e=this.terminalList.find((function(e){return e.id==t.terminalSelected}));if(console.log("terminal ".concat(e)),0==this.record.terminals.length)console.log("TEHERE IS NO TERMINAL"),this.record.terminals.push(e);else if("undefined"==this.record.terminals)this.record.terminals.push(e);else{var n=this.record.terminals.find((function(e){return e.id==t.terminalSelected}));console.log("ADD TERMINAL ".concat(n)),n||this.record.terminals.push(e)}},loadTransaction:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("api/user/find/".concat(t.recordId)).then((function(e){t.record=e.data,console.log("User ===> ",e.data)})).catch((function(e){Object($.j)(t.$swal,"Error","Could no load data "+e.Error)}));case 2:case"end":return e.stop()}}),e)})))()},loadTerminal:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("api/terminal/find").then((function(e){t.terminalList=e.data,console.log("TERMINAL => ",e.data)})).catch((function(e){Object($.j)(t.$swal,"Error","Could no load data "+e.Error)}));case 2:case"end":return e.stop()}}),e)})))()},toggleDialog:function(){this.$emit("close-dialog")},commitRecord:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isloading){e.next=2;break}return e.abrupt("return");case 2:if(t.isloading=!0,!t.isUpdate){e.next=8;break}return e.next=6,t.$axios.put("api/user/update/".concat(t.recordId),t.record).then((function(e){t.$emit("reload"),Object($.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){console.error(e),Object($.j)(t.$swal,"Error",e.response.data)}));case 6:e.next=10;break;case 8:return e.next=10,t.$axios.post("api/user/create",t.record).then((function(e){t.$emit("reload"),Object($.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){console.error(e),Object($.j)(t.$swal,"Error",e.response.data)}));case 10:t.isloading=!1;case 11:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(j.c)(["findAllCurrency"])),data:function(){return{search:"",numberCommaRule:function(t){return/^[0-9,]*$/.test(t)||"Only numbers and commas are allowed"},terminalList:[],isloading:!1,record:{id:null,cus_id:100,cus_pass:"1111",cus_name:"USER NAME",cus_tel:"TELEPHONE",cus_email:"EMAIL",cus_active:!0,terminals:[]},terminalSelected:1}}},C=I,E=n(45),component=Object(E.a)(C,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(c.a,[e(l.b),t._v(" "),e(v.a),t._v(" "),e(l.c,[e(c.a,[e(l.c,[e("div",[e(m.a,[e(h.a,{attrs:{cols:"4"}},[e(m.a,[e(h.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{disabled:"",label:"Login ID*"},model:{value:t.record.cus_id,callback:function(e){t.$set(t.record,"cus_id",e)},expression:"record.cus_id"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[t.isUpdate?t._e():e(x.a,{attrs:{label:"ລະຫັດຜ່ານ*"},model:{value:t.record.cus_pass,callback:function(e){t.$set(t.record,"cus_pass",e)},expression:"record.cus_pass"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{label:"ຊື່ຜູ້ໃຊ້"},model:{value:t.record.cus_name,callback:function(e){t.$set(t.record,"cus_name",e)},expression:"record.cus_name"}})],1)],1)],1),t._v(" "),e(h.a,{attrs:{cols:"4"}},[e(m.a,[e(h.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{label:"ອີເມວ"},model:{value:t.record.cus_email,callback:function(e){t.$set(t.record,"cus_email",e)},expression:"record.cus_email"}})],1),t._v(" "),e(h.a,[e(w.a,{attrs:{label:"Active","true-value":!0,"false-value":!1},model:{value:t.record.cus_active,callback:function(e){t.$set(t.record,"cus_active",e)},expression:"record.cus_active"}})],1)],1)],1),t._v(" "),e(h.a,{staticStyle:{"text-align":"end"},attrs:{cols:"4"}},[e(m.a,[e(h.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{label:"ເບີໂທ"},model:{value:t.record.cus_tel,callback:function(e){t.$set(t.record,"cus_tel",e)},expression:"record.cus_tel"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{"item-text":"name","item-value":"id",items:t.terminalList,label:"Terminal*"},model:{value:t.terminalSelected,callback:function(e){t.terminalSelected=e},expression:"terminalSelected"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.addTerminal}},[e("span",{staticClass:"mdi mdi-note-plus-outline"}),t._v("\n                                            ເພີ່ມ Terminal\n                                        ")])],1)],1)],1)],1)],1),t._v(" "),e("div",[e(m.a,{attrs:{"no-gutters":""}},t._l(t.record.terminals,(function(n){return e(d.a,{key:n.id,staticClass:"ma-2",attrs:{color:"warning",variant:"outlined"},on:{click:function(e){return t.removeTerminal(n)}}},[t._v("\n                                "+t._s(n.name)+" - "+t._s(n.description)+"\n                            ")])})),1)],1)])],1),t._v(" "),e(v.a)],1),t._v(" "),e(l.a,[e(_.a),t._v(" "),e(o.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.toggleDialog}},[t._v("\n                Close\n            ")]),t._v(" "),e(o.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.commitRecord}},[t._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default})},749:function(t,e,n){var content=n(843);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("6ca6d45e",content,!0,{sourceMap:!1})},842:function(t,e,n){"use strict";n(749)},843:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'.grey[data-v-bb410edc],.text-h5[data-v-bb410edc]{font-family:"Noto Sans Lao"}table[data-v-bb410edc]{border:1px solid #000}',""]),r.locals={},t.exports=r},911:function(t,e,n){"use strict";n.r(e);var r=n(183),o=n(288),c=n(28),l=n(641),d=n(645),h=n(619),f=n(291),v=n(656),m=n(102),_=(n(33),n(191),n(30)),w=n(29),x=(n(40),n(55),n(5),n(38),n(65),n(51),n(7),n(64),n(88),n(61),n(112),n(62)),y=n(698),O=n(720);function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var $={components:{TerminalForm:y.default,UserForm:O.default},middleware:"auths",data:function(){return{componentKey:0,entryForm:!1,isCreate:!0,dialog:!1,isloading:!1,search:"",recordList:[],entrySelected:"",headers:[{text:"#",align:"center",value:"pk",sortable:!0},{text:"ລະຫັດ",align:"center",value:"cus_id",sortable:!0},{text:"ຊື່",align:"center",value:"cus_name",sortable:!0},{text:"Tel",align:"center",value:"cus_tel",sortable:!0},{text:"View/Update",align:"end",value:"id",sortable:!1}]}},created:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()},computed:{preNewUserId:function(){var t=Math.max.apply(Math,Object(_.a)(this.recordList.map((function(t){return t.cus_id}))));return t+1}},methods:{getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},viewRecord:function(t){this.componentKey+=1,this.entrySelected=t.id,this.isCreate=!1,this.entryForm=!0},createRecord:function(){this.componentKey+=1,this.entrySelected=0,this.isCreate=!0,this.entryForm=!0},loadData:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isloading){e.next=2;break}return e.abrupt("return");case 2:return t.isloading=!0,e.next=5,t.$axios.get("api/user/find").then((function(e){t.recordList=[];var n,r=k(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.pk=o.id,t.recordList.push(o)}}catch(t){r.e(t)}finally{r.f()}console.log("====> "+t.recordList.length)})).catch((function(e){Object(x.j)(t.$swal,"Error","Could no load data "+e.Error),console.log("Error ===>: "+e)}));case 5:t.isloading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},S=$,I=(n(842),n(45)),component=Object(I.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(h.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(h.a,{attrs:{"max-width":"1024"},model:{value:t.entryForm,callback:function(e){t.entryForm=e},expression:"entryForm"}},[e("user-form",{key:t.componentKey,attrs:{isUpdate:!t.isCreate,reserveUserId:t.preNewUserId,recordId:t.entrySelected},on:{reload:function(e){t.loadData(),t.entryForm=!1},"close-dialog":function(e){t.entryForm=!1}}})],1),t._v(" "),e(o.a,[e(c.d,[e(v.a,{attrs:{row:"",wrap:""}},[e(l.a,{attrs:{cols:"6"}}),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e(m.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e(l.a,{staticClass:"text-left",attrs:{cols:"6"}},[e(r.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.createRecord}},[e("span",{staticClass:"mdi mdi-plus"}),t._v("Create\n          ")])],1),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[e(r.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.loadData}},[e("span",{staticClass:"mdi mdi-cloud-download"}),t._v("\n            ໂຫຼດຂໍ້ມູນ\n          ")])],1)],1)],1),t._v(" "),e(f.a),t._v(" "),t.recordList?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.recordList},scopedSlots:t._u([{key:"item.rate",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.getFormatNum(n.rate))+"\n      ")]}},{key:"item.id",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.viewRecord(o),t.wallet=!0}}},[e("i",{staticClass:"fa fa-pencil-square-o"})])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,"bb410edc",null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default,UserForm:n(720).default})}}]);