(window.webpackJsonp=window.webpackJsonp||[]).push([[35,23,26],{559:function(e,t,r){"use strict";r.r(t);var o=r(246),n=r(139),c=r(243),l=r(75),component=Object(l.a)({},(function(){var e=this._self._c;return e(o.a,{attrs:{color:"primary",dark:""}},[e(n.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),e(c.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},566:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return l}));r(26),r(208);var o=function(e,t,r){e({icon:t,title:"ທ່ານແນ່ໃຈທີ່ຈະລົບບໍ່ ?",text:"ລາຍການນີ້ຈະຖືກລົບ ອອກຈາກຖານຂໍ້ມູນ!",confirmButtonText:"ຢືນຢັນ",confirmButtonColor:"#d33",showCancelButton:!0,cancelButtonText:"ອອກ",cancelButtonColor:"#3085d6"}).then((function(e){e.isConfirmed&&r()}))},n=function(e,title,t){e({icon:"error",title:title,text:t,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},c=function(e,title,text){e({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},l=function(e){return(new Intl.NumberFormat).format(e)}},570:function(e,t,r){"use strict";var o=r(6),n=r(581).start;o({target:"String",proto:!0,forced:r(582)},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},572:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));r(22),r(26),r(570),r(4),r(65),r(208);var o=function(e,title,t){e({icon:"error",title:title,text:t,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},n=function(e,title,text){e({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},c=(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1);console.log("Date found => ",t);var r=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return"".concat(r,"-").concat(o,"-").concat(n)}),l=function(){return"https://nodejsclusters-99563-0.cloudclusters.net"}},578:function(e,t,r){"use strict";r.r(t);var o=r(542),n=r(246),c=r(139),l=r(200),d=r(554),f={props:["iUrl"]},m=r(75),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t(n.a,[t(c.d,[e._v(" Image preview ")]),e._v(" "),t(l.a,{attrs:{src:e.iUrl||"No image"}}),e._v(" "),t(c.a,[t(d.a),e._v(" "),t(o.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.$emit("closeDia")}}},[e._v("\n      ປິດ\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},581:function(e,t,r){var o=r(18),n=r(113),c=r(31),l=r(265),d=r(59),f=o(l),m=o("".slice),_=Math.ceil,v=function(e){return function(t,r,o){var l,v,h=c(d(t)),w=n(r),D=h.length,x=void 0===o?" ":c(o);return w<=D||""==x?h:((v=f(x,_((l=w-D)/x.length))).length>l&&(v=m(v,0,l)),e?h+v:v+h)}};e.exports={start:v(!1),end:v(!0)}},582:function(e,t,r){var o=r(95);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},627:function(e,t,r){"use strict";r.r(t);var o=r(555),n=r(542),c=r(246),l=r(139),d=r(577),f=r(552),m=r(569),_=r(244),v=r(717),h=r(571),w=r(200),D=r(239),x=r(157),k=r(241),L=r(76),y=r(574),R=r(554),I=r(86),O=r(599),$=(r(26),r(30),r(38)),C=r(2),F=(r(140),r(21),r(29),r(4),r(8),r(47),r(44),r(58),r(583),r(357),r(166),r(566)),E=r(572),M=r(659),S={props:{isEdit:{type:Boolean,default:!1},headerId:{type:Number,default:null}},middleware:"auths",mixins:[M.default],computed:{host:function(){return Object(E.b)()}},mounted:function(){console.log("FORMDATA ID: "+this.formData.pro_id),this.pro_id=this.headerId,this.formData.pro_id=this.headerId,console.log("Mounted: "),this.fetchProId(this.headerId),this.fetchCategory(),this.fetchOutlet()},validate:function(data){return console.log("MIXIN ID: "+data.params.id),console.log("PRO DEFUALT ID: "+this.pro_id),/^\d+$/.test(data.params.id)},data:function(){return Object(C.a)({imagesPreviewURL:[],files:null,IMG_URL:"",NAME:"",rules:{nameRule:[function(e){return!!e||"ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ "},function(e){return e&&e.length<=150||"ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ"}],priceRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ລາຄາ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ລາຄາ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],costPrice:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],retailRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ເປີເຊັນ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],imageRule:[function(e){var t=0,r=0;return e?(e.forEach((function(e){t+=e.size,console.log("Size: "+e.size)})),r=t/e.length,console.log("File size: aaa"+e.length+" Each: "+r||!1)):console.log("File: "+e),console.log("Total: "+r),r<2e6||"ຂະຫນາດເກີນ"}]},preview:!1,previewSrc:null,title:"ແກ້ໄຂສິນຄ້າ ",valid:!1,category:[],formData:{pro_category:1001,pro_id:null,pro_name:"",pro_price:0,pro_retail_price:0,pro_desc:"",pro_status:!1,pro_outlet:1,pro_cost_price:0},outlet:[],isLoading:!1,validLocal:!0,diaMessageTitle:"ຄຳເຕືອນ",diaMessageBody:"ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ",pro_id:null,dia_confirm:!1,tempImgId:null},"formData",{})},methods:{validateLocal:function(){console.log("VALIDATING..."),this.$refs.formLocal.validate()},fetchCategory:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("category_f").then((function(t){console.log("=>category"+t.data),e.category=t.data.map((function(e){return{categ_id:e.categ_id,categ_name:e.categ_name,categ_desc:e.categ_desc}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},fetchOutlet:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("outlet").then((function(t){console.log("=>outlet"+t.data),e.outlet=t.data.map((function(e){return{outlet_id:e.id,outlet_name:e.name,outlet_tel:e.tel}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},previewImg:function(e){this.previewSrc=e,this.preview=!0},onFilesChange:function(e){var t=e;if(this.files=e,t)for(var i=0;i<t.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(t[i]),NAME:t[i].name,isvalid:this.sizeValidate(t[i].size)});else this.imagesPreviewURL=null},deleteFile:function(e){this.imagesPreviewURL.splice(e,1),this.files.splice(e,1),this.deleteFileFrServ(e)},sizeValidate:function(e){console.log("SIZE"+e);var t=2e7;if(e>t)return"Max size is ".concat(2e4,"Kb")},fetchProId:function(e){var t=this;return Object($.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isLoading=!0,console.log("FECT ID:"+e),r.next=4,t.$axios.post("/product_f_id",{proid:e}).then((function(e){console.log("Product ID "+e.data);var r=e.data[0],image=null==e.data[0].img_name?[]:e.data.map((function(e){return{name:e.img_name,path:e.img_path}}));t.formData={pro_category:r.pro_category,pro_id:r.pro_id,pro_name:r.pro_name,pro_price:r.pro_price,pro_desc:r.pro_desc,pro_status:1===r.pro_status||!1,pro_retail_price:r.retail_cost_percent,pro_cost_price:r.cost_price,outlet:r.outlet,pro_image:image},console.log("IMAGE COUNT: "+t.formData.pro_image.length)})).catch((function(e){console.log("Error: "+e),t.message=e}));case 4:t.isLoading=!1;case 5:case"end":return r.stop()}}),r)})))()},deleteFileFrServ:function(e){var t=this;return Object($.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:Object(F.a)(t.$swal,"warning",Object($.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Delete record function"),t.isLoading=!0,r.next=4,t.$axios.post("/unlink_file",{img_name:t.formData.pro_image[e].name}).then((function(r){"Transaction completed"===r.data&&t.formData.pro_image.splice(e,1),Object(F.d)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){t.message=e.error}));case 4:t.isLoading=!1;case 5:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},uploadFilesLocal:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("===> Upload data"),e.$refs.formLocal.validate()){t.next=3;break}return t.abrupt("return");case 3:return e.isLoading=!0,(r=new FormData).append("FORM",JSON.stringify(e.formData)),e.files&&e.files.forEach((function(element){r.append("files",element)})),t.next=9,e.$axios.post("uploadmulti_update",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("close-dialog"),e.$emit("refresh"),Object(F.d)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(t){Object(F.c)(e.$swal,"Error",t.response.data)}));case 9:e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()}}},j=r(75),component=Object(j.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[t("loading-indicator")],1),e._v(" "),t(m.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v(" "),t(c.a,[t(l.d,[t("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),t(l.c,[t(f.a,[t(h.a,{ref:"formLocal",attrs:{"lazy-validation":""},model:{value:e.validLocal,callback:function(t){e.validLocal=t},expression:"validLocal"}},[t(y.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"outlet_name","item-value":"outlet_id",items:e.outlet,label:"ຮ້ານ*"},model:{value:e.formData.outlet,callback:function(t){e.$set(e.formData,"outlet",t)},expression:"formData.outlet"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"categ_name","item-value":"categ_id",items:e.category,label:"ປະເພດສິນຄ້າ*"},model:{value:e.formData.pro_category,callback:function(t){e.$set(e.formData,"pro_category",t)},expression:"formData.pro_category"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I.a,{attrs:{counter:10,disabled:!!e.formData.pro_id,label:"ໄອດີສິນຄ້າ",required:""},model:{value:e.formData.pro_id,callback:function(t){e.$set(e.formData,"pro_id",t)},expression:"formData.pro_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I.a,{attrs:{counter:50,rules:e.rules.nameRule,label:"ຊື້ສິນຄ້າ*",required:""},model:{value:e.formData.pro_name,callback:function(t){e.$set(e.formData,"pro_name",t)},expression:"formData.pro_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I.a,{attrs:{counter:10,rules:e.rules.priceRule,label:"ລາຄາ*",type:"number",required:""},model:{value:e.formData.pro_price,callback:function(t){e.$set(e.formData,"pro_price",t)},expression:"formData.pro_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ຕົ້ນທຶນ*",required:""},model:{value:e.formData.pro_cost_price,callback:function(t){e.$set(e.formData,"pro_cost_price",t)},expression:"formData.pro_cost_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ລາຄາສົ່ງ %",required:""},model:{value:e.formData.pro_retail_price,callback:function(t){e.$set(e.formData,"pro_retail_price",t)},expression:"formData.pro_retail_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(v.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{outlined:"",name:"input-7-4",counter:"100",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:e.formData.pro_desc,callback:function(t){e.$set(e.formData,"pro_desc",t)},expression:"formData.pro_desc"}})],1)],1),e._v(" "),t("div",e._l(e.formData.pro_image,(function(img,r){return t(c.a,{key:r,staticClass:"pa-md-6 mx-lg-auto"},[t(y.a,{attrs:{justify:"space-around"}},[t(k.a,{on:{click:function(t){return t.preventDefault(),e.previewImg("".concat(e.host,"/uploads/").concat(img.name))}}},[t(w.a,{attrs:{src:"".concat(e.host,"/uploads/").concat(img.name)}})],1),e._v(" "),t(R.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFileFrServ(r)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1)],1)})),1),e._v(" "),t("div",[t(D.a,{attrs:{"three-line":""}},[e._l(e.imagesPreviewURL,(function(r,o){return[t(x.a,{key:o},[t(k.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(r.IMG_URL)}}},[t(w.a,{attrs:{src:r.IMG_URL}})],1),e._v(" "),t(L.a,[t(L.c,{domProps:{innerHTML:e._s(r.NAME)}}),e._v(" "),t(L.b,{domProps:{innerHTML:e._s(r.isvalid)}})],1),e._v(" "),t(R.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFileFrServ(o)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),t(_.a,{key:o+r.NAME})]}))],2)],1)],1)],1),e._v(" "),t("small",[e._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),e._v(" "),t(l.a,[t(R.a),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v("\n                Close\n            ")]),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.uploadFilesLocal}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:r(559).default,DiaImage:r(578).default})}}]);