(window.webpackJsonp=window.webpackJsonp||[]).push([[73,22],{674:function(e,t,r){"use strict";r.r(t);var o=r(174),n=r(283),l=r(40),c=r(281),d=r(615),m={props:["dia","messageTitle","messageBody"],methods:{feedbackHandle:function(e){this.$emit("react",e)}}},f=r(37),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(n.a,[t(l.d,{staticClass:"text-h5 grey lighten-2"},[e._v("\n      "+e._s(e.messageTitle||"No title")+"\n    ")]),e._v(" "),t(l.c,[e._v("\n      "+e._s(e.messageBody||"No message")+"\n    ")]),e._v(" "),t(c.a),e._v(" "),t(l.a,[t(d.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:function(t){return e.feedbackHandle(!0)}}},[e._v("\n        ຍອມຮັບ\n      ")]),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:function(t){return e.feedbackHandle(!1)}}},[e._v("\n        ຍົກເລີກ\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},718:function(e,t,r){"use strict";r.r(t);var o=r(174),n=r(283),l=r(601),c=r(281),d=r(679),m=r(625),f=r(221),_=r(274),v=r(173),h=r(276),D=r(52),x=r(616),k=r(51),y=r(615),I=r(94),w=r(642),L=(r(32),r(24)),$=(r(105),r(29),r(33),r(107),r(4),r(7),{middleware:"auths",mixins:[r(717).default],mounted:function(){console.log("FORMDATA ID: "+this.formData.pro_id),this.pro_id=this.$route.params.id,this.formData.pro_id=this.$route.params.id,console.log("Mounted: "),this.$route.params.id&&this.fetchProId(this.$route.params.id)},validate:function(data){return console.log("MIXIN ID: "+data.params.id),console.log("PRO DEFUALT ID: "+this.pro_id),/^\d+$/.test(data.params.id)},data:function(){return{validLocal:!0,diaMessageTitle:"ຄຳເຕືອນ",diaMessageBody:"ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ",pro_id:null,dia_confirm:!1,tempImgId:null}},methods:{validateLocal:function(){console.log("VALIDATING..."),this.$refs.formLocal.validate()},updateData:function(){var e=this;this.isloading=!0,this.$axios.put("/uploadmulti_update",this.formData).then((function(t){e.message=t.data})).catch((function(t){e.message=t})),this.isloading=!1},fetchProId:function(e){var t=this;return Object(L.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isloading=!0,console.log("FECT ID:"+e),r.next=4,t.$axios.post("/product_f_id",{proid:e}).then((function(e){console.log("Product ID "+e.data);var r=e.data[0],image=null==e.data[0].img_name?[]:e.data.map((function(e){return{name:e.img_name,path:e.img_path}}));t.formData={pro_category:r.pro_category,pro_id:r.pro_id,pro_name:r.pro_name,pro_price:r.pro_price,pro_desc:r.pro_desc,pro_status:1===r.pro_status||!1,pro_retail_price:r.retail_cost_percent,pro_cost_price:r.cost_price,outlet:r.outlet,pro_image:image},console.log("IMAGE COUNT: "+t.formData.pro_image.length)})).catch((function(e){console.log("Error: "+e),t.message=e}));case 4:t.isloading=!1;case 5:case"end":return r.stop()}}),r)})))()},deleteFileFrServ:function(e){console.log("IDX: "+e),this.tempImgId=e,this.dia_confirm=!0},reactDiaConfirm:function(e){var t=this;return Object(L.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.dia_confirm=!1,t.isloading=!0,r.t0=e,!r.t0){r.next=6;break}return r.next=6,t.$axios.post("/unlink_file",{img_name:t.formData.pro_image[t.tempImgId].name}).then((function(e){"Transaction completed"===e.data&&t.formData.pro_image.splice(t.tempImgId,1),t.message=e.data})).catch((function(e){t.message=e.error}));case 6:t.isloading=!1;case 7:case"end":return r.stop()}}),r)})))()},hello:function(){this.$refs.formLocal.validate()?console.log("VALIDATE..."+!0):console.log("VALIDATE..."+!1)},uploadFilesLocal:function(){var e=this;return Object(L.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.formLocal.validate()){t.next=2;break}return t.abrupt("return");case 2:return console.log("Files length: "+e.files.length),e.isloading=!0,(r=new FormData).append("FORM",JSON.stringify(e.formData)),e.files.forEach((function(element){r.append("files",element)})),t.next=9,e.$axios.post("uploadmulti_update",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.isloading=!1,e.message=t.data})).catch((function(t){e.isloading=!1,e.message=t.response.data}));case 9:case"end":return t.stop()}}),t)})))()}}}),M=r(37),component=Object(M.a)($,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t("h1",[e._v("ແກ້ໄຂສິນຄ້າ")]),e._v(" "),t(l.a,{attrs:{"max-width":"300px",persistent:""},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(l.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(l.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v(" "),t(l.a,{attrs:{width:"500",persistent:""},model:{value:e.dia_confirm,callback:function(t){e.dia_confirm=t},expression:"dia_confirm"}},[t("dia-confirm",{attrs:{"message-title":e.diaMessageTitle,"message-body":e.diaMessageBody},on:{react:e.reactDiaConfirm}})],1),e._v(" "),t(m.a,{ref:"formLocal",attrs:{"lazy-validation":""},model:{value:e.validLocal,callback:function(t){e.validLocal=t},expression:"validLocal"}},[t(k.a,{attrs:{items:e.outlet,"item-value":function(e){return e.outlet_id},"item-text":function(e){return e.outlet_id+" - "+e.outlet_name},rules:[function(e){return!!e||"ກະລຸນາເລືອກຮ້ານ"}],label:"ຮ້ານ",required:""},model:{value:e.formData.outlet,callback:function(t){e.$set(e.formData,"outlet",t)},expression:"formData.outlet"}}),e._v(" "),t(k.a,{attrs:{items:e.category,"item-value":function(e){return e.categ_id},"item-text":function(e){return e.categ_id+" - "+e.categ_name},rules:[function(e){return!!e||"ກະລຸນາເລືອກ ປະເພດສິນຄ້າ"}],label:"ປະເພດສິນຄ້າ",required:""},model:{value:e.formData.pro_category,callback:function(t){e.$set(e.formData,"pro_category",t)},expression:"formData.pro_category"}}),e._v(" "),t(I.a,{attrs:{counter:10,disabled:!!e.formData.pro_id,label:"ໄອດີສິນຄ້າ",required:""},model:{value:e.formData.pro_id,callback:function(t){e.$set(e.formData,"pro_id",t)},expression:"formData.pro_id"}}),e._v(" "),t(I.a,{attrs:{counter:10,rules:e.rules.nameRule,label:"ຊື້ສິນຄ້າ",required:""},model:{value:e.formData.pro_name,callback:function(t){e.$set(e.formData,"pro_name",t)},expression:"formData.pro_name"}}),e._v(" "),t(I.a,{attrs:{counter:10,rules:e.rules.priceRule,label:"ລາຄາ",type:"number",required:""},model:{value:e.formData.pro_price,callback:function(t){e.$set(e.formData,"pro_price",t)},expression:"formData.pro_price"}}),e._v(" "),t(I.a,{attrs:{counter:10,type:"numbser",rules:e.rules.priceRule,label:"ຕົ້ນທຶນ",required:""},model:{value:e.formData.pro_cost_price,callback:function(t){e.$set(e.formData,"pro_cost_price",t)},expression:"formData.pro_cost_price"}}),e._v(" "),t(I.a,{attrs:{counter:10,type:"numbser",rules:e.rules.priceRule,label:"ລາຄາສົ່ງ %",required:""},model:{value:e.formData.pro_retail_price,callback:function(t){e.$set(e.formData,"pro_retail_price",t)},expression:"formData.pro_retail_price"}}),e._v(" "),t(w.a,{attrs:{outlined:"",name:"input-7-4",counter:"5",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:e.formData.pro_desc,callback:function(t){e.$set(e.formData,"pro_desc",t)},expression:"formData.pro_desc"}}),e._v(" "),t(d.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}}),e._v(" "),t("div",e._l(e.formData.pro_image,(function(img,r){return t(n.a,{key:r,staticClass:"pa-md-6 mx-lg-auto"},[t(x.a,{attrs:{justify:"space-around"}},[t(h.a,{on:{click:function(t){return t.preventDefault(),e.previewImg("https://nodejsclusters-99563-0.cloudclusters.net/".concat(img.name))}}},[t(f.a,{attrs:{src:"https://nodejsclusters-99563-0.cloudclusters.net/".concat(img.name)}})],1),e._v(" "),t(y.a),e._v(" "),t(o.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFileFrServ(r)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1)],1)})),1),e._v(" "),t("div",[t(_.a,{attrs:{"three-line":""}},[e._l(e.imagesPreviewURL,(function(r,n){return[t(v.a,{key:n},[t(h.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(r.IMG_URL)}}},[t(f.a,{attrs:{src:r.IMG_URL}})],1),e._v(" "),t(D.a,[t(D.c,{domProps:{innerHTML:e._s(r.NAME)}}),e._v(" "),t(D.b,{domProps:{innerHTML:e._s(r.isvalid)}})],1),e._v(" "),t(y.a),e._v(" "),t(o.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFile(n)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),t(c.a,{key:n+r.NAME})]}))],2)],1),e._v(" "),t(o.a,{staticClass:"mr-4",attrs:{color:"error"},on:{click:function(t){return t.preventDefault(),e.hello.apply(null,arguments)}}},[e._v("\n      ລ້າງຂໍ້ມູນ\n    ")]),e._v(" "),t(o.a,{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return t.preventDefault(),e.uploadFilesLocal.apply(null,arguments)}}},[e._v("\n      ບັນທຶກ\n    ")])],1),e._v(" "),t("nuxt-child")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DialogClassicMessage:r(623).default,LoadingIndicator:r(297).default,DiaImage:r(635).default,DiaConfirm:r(674).default})}}]);