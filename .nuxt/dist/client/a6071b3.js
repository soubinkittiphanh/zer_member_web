(window.webpackJsonp=window.webpackJsonp||[]).push([[37,19,20,22,38],{559:function(e,t,n){"use strict";n.r(t);var r=n(246),l=n(139),o=n(243),c=n(75),component=Object(c.a)({},(function(){var e=this._self._c;return e(r.a,{attrs:{color:"primary",dark:""}},[e(l.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),e(o.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},564:function(e,t,n){"use strict";n.r(t);var r=n(541),l=n(246),o=n(139),c=n(244),d=n(554),f={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},v=n(75),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t(l.a,[t(o.d,{staticClass:"text-h5 grey lighten-2"},[e._v(" ຂໍ້ຄວາມ ")]),e._v(" "),t(o.c,[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),t(c.a),e._v(" "),t(o.a,[t(d.a),e._v(" "),t(r.a,{attrs:{color:"primary",text:""},on:{click:e.toggleDialog}},[e._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(79),l=n(0),o=Object(l.j)("v-toolbar__title"),c=Object(l.j)("v-toolbar__items");r.a},590:function(e,t,n){"use strict";n.r(t);var r=n(541),l=n(246),o=n(139),c=n(200),d=n(554),f={props:["iUrl"]},v=n(75),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t(l.a,[t(o.d,[e._v(" Image preview ")]),e._v(" "),t(c.a,{attrs:{src:e.iUrl||"No image"}}),e._v(" "),t(o.a,[t(d.a),e._v(" "),t(r.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.$emit("closeDia")}}},[e._v("\n      ປິດ\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},619:function(e,t,n){var content=n(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("31d59c69",content,!0,{sourceMap:!1})},643:function(e,t,n){"use strict";n.r(t);n(4),n(44),n(58),n(597),n(358),n(30);var r={data:function(){return{imagesPreviewURL:[],files:null,IMG_URL:"",NAME:""}},methods:{onFilesChange:function(e){var t=e;this.files=e,t?(this.IMG_URL=URL.createObjectURL(t),this.NAME=t.name,URL.revokeObjectURL(t)):(this.imagesPreviewURL=null,this.files=null)},deleteFile:function(e){this.files=null},sizeValidate:function(e){console.log("SIZE"+e);var t=2e5;if(e>t)return"Max size is ".concat(200,"Kb")}}},l=n(75),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);t.default=component.exports},659:function(e,t,n){"use strict";n(619)},660:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,'.grey[data-v-ebcce7f6],.text-h5[data-v-ebcce7f6]{font-family:"Noto Sans Lao"}',""]),r.locals={},e.exports=r},712:function(e,t,n){"use strict";n.r(t);var r=n(541),l=n(246),o=n(710),c=n(568),d=n(244),f=n(705),v=n(569),m=n(200),h=n(239),_=n(241),x=n(77),w=n(554),k=n(593),D=n(79),R=n(565),M=(n(29),n(256),n(38)),y=(n(40),n(57),n(47),n(140),{middleware:"auths",mixins:[n(643).default],data:function(){return{search:"",preview:!1,previewSrc:null,dialog:!1,dialogMessage:!1,message:"",isloading:!1,valid:!0,formData:{desc:""},rules:{imageRule:[function(e){return!e||e.size>2e3||"Avatar size should be less than 2 MB!"}]},isactive:null,category:[],loadData:[],headers:[{text:"ລະຫັດ",align:"center",sortable:!1,value:"img_id"},{text:"name",align:"center",value:"img_name"},{text:"path",align:"center",value:"img_path"},{text:"ຫມາຍເຫດ",align:"center",value:"img_remark"},{text:"ຟັງຊັ່ນ",align:"end",value:"img_active",sortable:!1}]}},created:function(){var e=this;return Object(M.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:case"end":return t.stop()}}),t)})))()},watch:{message:function(e){this.dialogMessage=null!=e}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},toggleActive:function(e){var t=this;return Object(M.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isloading=!0,console.log(e),r={id:e.img_id,active:t.isactive?1:0},t.isactive=!t.isactive,console.log(r+"Formdata"),n.next=7,t.$axios.post("ad_u",r).then((function(e){e.data.includes("completed")||(t.isactive=!t.isactive),t.isloading=!1,t.message=e.data})).catch((function(e){t.isloading=!1,t.isactive=!t.isactive,t.message=e.response.data}));case 7:case"end":return n.stop()}}),n)})))()},uploadFile:function(){var e=this;return Object(M.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.files){t.next=2;break}return t.abrupt("return");case 2:return console.log("Files length: "+e.files.length),e.isloading=!0,(n=new FormData).append("FORM",JSON.stringify(e.formData)),n.append("file",e.files),t.next=9,e.$axios.post("uploadsingle",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.isloading=!1,e.message=t.data,e.fetchData()})).catch((function(t){e.isloading=!1,e.message=t.response.data}));case 9:case"end":return t.stop()}}),t)})))()},previewImg:function(e){this.previewSrc=e,this.preview=!0},fetchData:function(){var e=this;return Object(M.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("/ad_f").then((function(t){console.log("Data: "+t.data[0]),e.loadData=t.data.map((function(t){return console.log("EL: "+t.id),1===t.isactive?e.isactive=!0:e.isactive=!1,{img_id:t.id,img_name:t.img_name,img_path:t.img_path,img_remark:t.remark,img_active:t.isactive,img_function:t.id}})),console.log("AFTER MAP: "+e.loadData[0].categ_id)})).catch((function(e){console.log("Data: "+e)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()}}}),j=(n(659),n(75)),component=Object(j.a)(y,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(c.a,{attrs:{"max-width":"300px",persistent:""},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(c.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(c.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v(" "),t(v.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(f.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}}),e._v(" "),t(k.a,{attrs:{outlined:"",name:"input-7-4",counter:"5",label:"ໝາຍເຫດ"},model:{value:e.formData.desc,callback:function(t){e.$set(e.formData,"desc",t)},expression:"formData.desc"}}),e._v(" "),e.files?t("div",[t(h.a,{attrs:{"three-line":""}},[[t(_.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(e.IMG_URL)}}},[t(m.a,{attrs:{src:e.IMG_URL}})],1),e._v(" "),t(x.a,[t(x.c,{domProps:{innerHTML:e._s(e.NAME)}})],1),e._v(" "),t(w.a),e._v(" "),t(r.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFile(e.index)}}},[t("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "),t(d.a,{key:e.NAME})]],2)],1):e._e(),e._v(" "),t(r.a,{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.uploadFile}},[e._v("\n      ບັນທຶກ\n    ")])],1),e._v(" "),t(l.a,[e.loadData?t(o.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.loadData,"items-per-page":5,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[t(D.a,{attrs:{flat:""}},[t(R.a,[e._v("ລາຍການໂຄສະນາ: "+e._s(e.loadData.length))]),e._v(" "),t(d.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(w.a)],1)]},proxy:!0},{key:"item.img_active",fn:function(n){var l=n.item;return[t(r.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){e.toggleActive(l),e.isedit=!0}}},[e._v("\n          "+e._s(e.isactive?"ປິດໂຄສະນາ":"ເປີດໂຄສະນາ")+"\n        ")])]}}],null,!0)}):e._e()],1),e._v(" "),t("nuxt-child")],1)}),[],!1,null,"ebcce7f6",null);t.default=component.exports;installComponents(component,{DialogClassicMessage:n(564).default,LoadingIndicator:n(559).default,DiaImage:n(590).default})}}]);