(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{653:function(t,e,n){"use strict";n(33),n(81);e.a={bind:function(t,e,n){t.addEventListener("input",(function(t){var e=t.target.value.replace(/[^0-9]/g,"");"NaN"===(e=parseInt(e,10).toLocaleString("en-US"))&&(e="0"),n.componentInstance.$emit("input",e)}))}}},667:function(t,e,n){var content=n(668);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("59f225a8",content,!0,{sourceMap:!1})},668:function(t,e,n){var c=n(16)((function(i){return i[1]}));c.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),c.locals={},t.exports=c},694:function(t,e,n){"use strict";n(10),n(7),n(9),n(5),n(12),n(8),n(13);var c=n(92),r=n(2),o=(n(192),n(193),n(395),n(667),n(165)),l=n(42),h=n(312),v=n(124),d=n(236),m=n(1),w=["title"];function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-switch",directives:{Touch:h.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(c.a)(t,w));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",f(f({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",f({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",f({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m.y.left&&this.isActive||t.keyCode===m.y.right&&!this.isActive)&&this.onChange()}}})},716:function(t,e,n){"use strict";n.r(e);var c=n(643),r=n(183),o=n(288),l=n(28),h=n(641),v=n(636),d=n(619),m=n(640),w=n(638),_=n(694),f=n(102),x=(n(38),n(29)),y=(n(112),n(22),n(653)),k=n(62),$={props:{customerId:{type:Number,default:0},isEdit:{type:Boolean,default:!1}},directives:{commaThousand:y.a},data:function(){return{isloading:!1,client:{name:"",company:"",email:"",address:"",telephone:"",credit:30,lateChargePercent:0,grade:"C",isActive:!0},grades:["A","B","C","D","E","F"]}},mounted:function(){this.isEdit&&(console.log("Load payment header"),this.loadEntryById())},computed:{},methods:{loadEntryById:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/api/client/find/".concat(t.customerId)).then((function(e){t.client=e.data})).catch((function(e){Object(k.j)(t.$swal,"Error",e.response.data)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},submitData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isloading){e.next=2;break}return e.abrupt("return");case 2:if(t.isloading=!0,!t.isEdit){e.next=8;break}return e.next=6,t.$axios.put("/api/client/update/".concat(t.customerId),t.client).then((function(e){Object(k.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.$emit("reload-data")})).catch((function(e){Object(k.j)(t.$swal,"Error",e.response.data)}));case 6:e.next=10;break;case 8:return e.next=10,t.$axios.post("/api/client/create",t.client).then((function(e){Object(k.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.$emit("reload-data")})).catch((function(e){Object(k.j)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 10:t.isloading=!1;case 11:case"end":return e.stop()}}),e)})))()}}},O=n(45),component=Object(O.a)($,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{justify:"center"}},[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,{staticClass:"pa-4"},[e(l.d,[e("span",{staticClass:"text-h5"},[t._v("ຈັດການລູກຄ້າ")])]),t._v(" "),e(l.c,[e(v.a,[e(m.a,[e(h.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(f.a,{attrs:{label:"ຊື່ລູກຄ້າ*",required:""},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(f.a,{attrs:{required:"",label:"ບໍລິສັດ*"},model:{value:t.client.company,callback:function(e){t.$set(t.client,"company",e)},expression:"client.company"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(f.a,{attrs:{label:"ອີເມວ*","persistent-hint":"",required:""},model:{value:t.client.email,callback:function(e){t.$set(t.client,"email",e)},expression:"client.email"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[e(f.a,{attrs:{label:"ທີ່ຢູ່*",required:""},model:{value:t.client.address,callback:function(e){t.$set(t.client,"address",e)},expression:"client.address"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(f.a,{attrs:{label:"ເບີໂທປະສານສຳພັນ*",required:""},model:{value:t.client.telephone,callback:function(e){t.$set(t.client,"telephone",e)},expression:"client.telephone"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(f.a,{attrs:{label:"Credit *",required:""},model:{value:t.client.credit,callback:function(e){t.$set(t.client,"credit",e)},expression:"client.credit"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(f.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{label:"ອັດຕາເປີເຊັນປັບໃຫມ ການຈ່າຍຊ້າ*",required:""},model:{value:t.client.lateChargePercent,callback:function(e){t.$set(t.client,"lateChargePercent",e)},expression:"client.lateChargePercent"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[e(c.a,{attrs:{items:t.grades,label:"Grade *"},model:{value:t.client.grade,callback:function(e){t.$set(t.client,"grade",e)},expression:"client.grade"}})],1),t._v(" "),e(_.a,{attrs:{label:"Active","true-value":!0,"false-value":!1},model:{value:t.client.isActive,callback:function(e){t.$set(t.client,"isActive",e)},expression:"client.isActive"}})],1)],1),t._v(" "),e("small",[t._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),t._v(" "),e(l.a,[e(w.a),t._v(" "),e(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                Close\n            ")]),t._v(" "),e(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.submitData}},[t._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default})}}]);