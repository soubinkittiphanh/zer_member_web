(window.webpackJsonp=window.webpackJsonp||[]).push([[46,20,22],{559:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(243),l=n(75),component=Object(l.a)({},(function(){var t=this._self._c;return t(r.a,{attrs:{color:"primary",dark:""}},[t(o.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),t(c.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},564:function(t,e,n){"use strict";n.r(e);var r=n(541),o=n(246),c=n(139),l=n(244),d=n(554),_={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=n(75),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(c.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(l.a),t._v(" "),e(c.a,[e(d.a),t._v(" "),e(r.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},720:function(t,e,n){"use strict";n.r(e);var r=n(541),o=n(246),c=n(139),l=n(552),d=n(710),_=n(568),m=n(244),f=n(569),h=n(134),v=n(554),y=n(86),k=n(593),x=n(79),D=n(565),w=(n(29),n(256),n(38)),C=(n(47),n(30),n(109),n(4),n(140),{middleware:"auths",data:function(){return{isloading:!1,isedit:!1,singleSelect:!1,selected:[],dialog:!1,dialogForm:!1,message:"",valid:!0,search:"",rule:{cat_id:[function(t){return!!t||"Code ແມ່ນ ຕ້ອງໃສ່"}],cat_name:[function(t){return!!t||"ຊື່ປະເພດຂໍ້ຄ້ວາມ ແມ່ນ ຕ້ອງໃສ່"}]},form_data:{chat_type_id:"",chat_type_code:"",chat_type_name:"",chat_type_remark:""},headers:[{text:"code",align:"center",sortable:!1,value:"chat_type_code"},{text:"ຊື່ປະເພດຂໍ້ຄວາມ",align:"center",value:"chat_type_name"},{text:"ຫມາຍເຫດ",align:"center",value:"chat_type_remark"},{text:"ຟັງຊັ່ນ",align:"end",value:"chat_type_function",sortable:!1}],loadData:[]}},watch:{message:function(t){this.dialog=null!=t}},created:function(){this.fetchData()},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.form_data.chat_type_code="",this.form_data.chat_type_name="",this.form_data.chat_type_remark=""},resetValidation:function(){this.$refs.form.resetValidation()},submitDatas:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading=!0,console.log("submitOut"),t.$refs.form.validate()){e.next=5;break}return t.isloading=!1,e.abrupt("return");case 5:if(console.log("submitIn"),n={chat_type_id:t.form_data.chat_type_id,chat_type_code:t.form_data.chat_type_code,chat_type_name:t.form_data.chat_type_name,chat_type_remark:t.form_data.chat_type_remark},r="/chattype_",!t.isedit){e.next=14;break}return e.next=11,t.$axios.post(r+"u",n).then((function(e){t.message=e.data})).catch((function(e){t.message="Error: "+e}));case 11:t.isloading=!1,e.next=17;break;case 14:return e.next=16,t.$axios.post(r+"c",n).then((function(e){t.message=e.data})).catch((function(e){t.message="Error: "+e}));case 16:t.isloading=!1;case 17:t.fetchData();case 18:case"end":return e.stop()}}),e)})))()},fetchData:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/chattype_f").then((function(e){console.log("Data: "+e.data),t.loadData=e.data.map((function(t){return console.log("EL: "+t.id),{chat_type_id:t.id,chat_type_code:t.code,chat_type_name:t.name,chat_type_remark:t.remark,chat_type_function:t.id}})),console.log("AFTER MAP: "+t.loadData[0].chat_type_id)})).catch((function(t){console.log("Data: "+t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){console.log("SHOULD BE ID: "+t.chat_type_function);var e=this.loadData.find((function(e){return e.chat_type_id===t.chat_type_function}));console.log("fomr: "+e.chat_type_code),this.form_data=e,this.dialogForm=!0}}}),$=n(75),component=Object($.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-h5"},[t._v("Message type ")]),t._v(" "),e(_.a,{attrs:{"max-width":"600px"},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[e(o.a,[e(c.d,[e("span",{staticClass:"text-h5"},[t._v("ປະເພດຂໍ້ຄວາມ")])]),t._v(" "),e(c.c,[e(l.a,[e(f.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(y.a,{attrs:{disabled:t.isedit,rules:t.rule.cat_id,label:"Code",required:""},model:{value:t.form_data.chat_type_code,callback:function(e){t.$set(t.form_data,"chat_type_code",e)},expression:"form_data.chat_type_code"}}),t._v(" "),e(y.a,{attrs:{rules:t.rule.cat_name,label:"ຊື່ປະເພດ ຂໍ້ຄວາມ",required:""},model:{value:t.form_data.chat_type_name,callback:function(e){t.$set(t.form_data,"chat_type_name",e)},expression:"form_data.chat_type_name"}}),t._v(" "),e(k.a,{attrs:{outlined:"",name:"input-7-4",counter:"5",label:"ໝາຍເຫດ"},model:{value:t.form_data.chat_type_remark,callback:function(e){t.$set(t.form_data,"chat_type_remark",e)},expression:"form_data.chat_type_remark"}})],1)],1)],1),t._v(" "),e(c.a,[e(v.a),t._v(" "),e(r.a,{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" ລ້າງຂໍ້ມູນ ")]),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogForm=!1}}},[t._v("\n          ປິດ\n        ")]),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.submitDatas}},[t._v("\n          ບັນທຶກ\n        ")])],1)],1)],1),t._v(" "),e(_.a,{attrs:{width:"500",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(_.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e(c.d,[e(y.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.loadData?e(d.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.loadData,"items-per-page":5,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[e(x.a,{attrs:{flat:""}},[e(D.a,[t._v("ປະເພດຂໍ້ຄວາມ: "+t._s(t.loadData.length))]),t._v(" "),e(m.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),e(v.a),t._v(" "),e(r.a,{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.dialogForm=!0,t.isedit=!1,t.reset()}}},[t._v("\n            ສ້າງໃຫມ່\n          ")])],1)]},proxy:!0},{key:"item.chat_type_function",fn:function(n){var r=n.item;return[e(h.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){t.editItem(r),t.isedit=!0}}},[t._v("\n          mdi-pencil\n        ")])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogClassicMessage:n(564).default,LoadingIndicator:n(559).default})}}]);