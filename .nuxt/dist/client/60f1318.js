(window.webpackJsonp=window.webpackJsonp||[]).push([[74,24,73],{623:function(t,e,r){"use strict";r.r(e);var o=r(174),n=r(282),c=r(40),l=r(280),d=r(615),m={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},f=r(37),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e(n.a,[e(c.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(c.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(l.a),t._v(" "),e(c.a,[e(d.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},639:function(t,e,r){var content=r(654);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("43800285",content,!0,{sourceMap:!1})},642:function(t,e,r){"use strict";r.r(e);r(4),r(41),r(53),r(391),r(302),r(32),r(107);var o={data:function(){return{imagesPreviewURL:[],files:[]}},methods:{onFilesChange:function(t){var e=t;if(this.files=t,e){console.log("FILE LEN: "+e.length);for(var i=0;i<e.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(e[i]),NAME:e[i].name,isvalid:this.sizeValidate(e[i].size)})}else this.imagesPreviewURL=null},deleteFile:function(t){this.imagesPreviewURL.splice(t,1),this.files.splice(t,1)},sizeValidate:function(t){console.log("SIZE"+t);var e=2e7;if(t>e)return"Max size is ".concat(2e4,"Kb")}}},n=r(37),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},650:function(t,e,r){"use strict";r.r(e);var o=r(619),n=r(174),c=r(282),l=r(40),d=r(617),m=r(613),f=r(280),_=r(676),v=r(625),h=r(221),k=r(273),x=r(173),y=r(275),w=r(52),S=r(616),C=r(615),D=r(94),R=r(643),F=r(24),$=(r(105),r(30),r(4),r(7),r(33),r(32),r(298)),P={middleware:"auths",mixins:[r(642).default],data:function(){return{preview:!1,previewSrc:null,dialog:!1,dialogMessage:!1,message:"",isloading:!1,valid:!0,name:"",rules:{nameRule:[function(t){return!!t||"ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ "},function(t){return t&&t.length<=150||"ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ"}],priceRule:[function(t){return+t>=0||"ກະລຸນ ໃສ່ຈຳນວ > 0"},function(t){return!!/^\d+$/.test(t)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],minRule:[function(t){return!!/^\d+$/.test(t)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],costPrice:[function(t){return!!/^\d+$/.test(t)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],retailRule:[function(t){return+t>=0||"ກະລຸນ ໃສ່ເປີເຊັນ > 0"},function(t){return!!/^\d+$/.test(t)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],imageRule:[function(t){var e=0,r=0;return t?(t.forEach((function(t){e+=t.size,console.log("Size: "+t.size)})),r=e/t.length,console.log("File size: aaa"+t.length+" Each: "+r||!1)):console.log("File: "+t),console.log("Total: "+r),r<2e6||"ຂະຫນາດເກີນ"}]},category:[],formData:{pro_category:1001,pro_id:null,pro_name:"",pro_price:0,pro_retail_price:0,pro_desc:"",pro_status:!1,pro_outlet:1,pro_cost_price:0,createdAt:null,minStock:0},outlet:[]}},mounted:function(){this.fetchCategory(),this.fetchOutlet()},watch:{message:function(t){this.dialogMessage=null!=t},formData:function(t){console.log("Watch fromData"+t)}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},fetchCategory:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("category_f").then((function(e){console.log("=>category"+e.data),t.category=e.data.map((function(t){return{categ_id:t.categ_id,categ_name:t.categ_name,categ_desc:t.categ_desc}}))})).catch((function(t){console.log("error: "+t.response.data)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},fetchOutlet:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("outlet").then((function(e){console.log("=>outlet"+e.data),t.outlet=e.data.map((function(t){return{outlet_id:t.id,outlet_name:t.name,outlet_tel:t.tel}}))})).catch((function(t){console.log("error: "+t.response.data)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},uploadFiles:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return console.log("Outlet: "+t.formData.outlet),t.isloading=!0,(r=new FormData).append("FORM",JSON.stringify(t.formData)),t.files.forEach((function(element){r.append("files",element)})),e.next=9,t.$axios.post("uploadmulti",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.isloading=!1,Object($.d)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.$emit("refresh"),t.$emit("close-dialog")})).catch((function(e){t.isloading=!1,Object($.c)(t.$swal,"Error",e)}));case 9:case"end":return e.stop()}}),e)})))()},previewImg:function(t){this.previewSrc=t,this.preview=!0}}},I=(r(653),r(37)),component=Object(I.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(m.a,{attrs:{"max-width":"300px",persistent:""},model:{value:t.dialogMessage,callback:function(e){t.dialogMessage=e},expression:"dialogMessage"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:t.preview,callback:function(e){t.preview=e},expression:"preview"}},[e("dia-image",{attrs:{"i-url":t.previewSrc},on:{closeDia:function(e){t.preview=!1}}})],1),t._v("\n  SELECTED OUTLET "+t._s(t.formData.outlet)+"\n  "),e(c.a,[e(l.d,[e("span",{staticClass:"headline"},[t._v(t._s(t.title))])]),t._v(" "),e(l.c,[e(v.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(S.a,[e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(o.a,{attrs:{"item-text":"outlet_name","item-value":"outlet_id",items:t.outlet,label:"ຮ້ານ*"},model:{value:t.formData.outlet,callback:function(e){t.$set(t.formData,"outlet",e)},expression:"formData.outlet"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(o.a,{attrs:{"item-text":"categ_name","item-value":"categ_id",items:t.category,label:"ປະເພດສິນຄ້າ*"},model:{value:t.formData.pro_category,callback:function(e){t.$set(t.formData,"pro_category",e)},expression:"formData.pro_category"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(D.a,{attrs:{value:t.formData.pro_id||"1XXX",counter:10,label:"ໄອດີສິນຄ້າ",disabled:"",required:""}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(D.a,{attrs:{counter:50,rules:t.rules.nameRule,label:"ຊື້ສິນຄ້າ*",required:""},model:{value:t.formData.pro_name,callback:function(e){t.$set(t.formData,"pro_name",e)},expression:"formData.pro_name"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(D.a,{attrs:{counter:10,rules:t.rules.priceRule,label:"ລາຄາ*",type:"number",required:""},model:{value:t.formData.pro_price,callback:function(e){t.$set(t.formData,"pro_price",e)},expression:"formData.pro_price"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(D.a,{attrs:{counter:10,type:"number",rules:t.rules.priceRule,label:"ຕົ້ນທຶນ*",required:""},model:{value:t.formData.pro_cost_price,callback:function(e){t.$set(t.formData,"pro_cost_price",e)},expression:"formData.pro_cost_price"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(D.a,{attrs:{counter:10,type:"number",rules:t.rules.priceRule,label:"ລາຄາສົ່ງ %",required:""},model:{value:t.formData.pro_retail_price,callback:function(e){t.$set(t.formData,"pro_retail_price",e)},expression:"formData.pro_retail_price"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(_.a,{ref:"filesfield",attrs:{rules:t.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:t.onFilesChange}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(D.a,{attrs:{counter:10,type:"number",rules:t.rules.minRule,label:"ສຕັອກຂັ້ນຕ່ຳ*",required:""},model:{value:t.formData.minStock,callback:function(e){t.$set(t.formData,"minStock",e)},expression:"formData.minStock"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(R.a,{attrs:{outlined:"",name:"input-7-4",counter:"100",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:t.formData.pro_desc,callback:function(e){t.$set(t.formData,"pro_desc",e)},expression:"formData.pro_desc"}})],1)],1),t._v(" "),t._e(),t._v(" "),e("div",[e(k.a,{attrs:{"three-line":""}},[t._l(t.imagesPreviewURL,(function(r,o){return[e(x.a,{key:o},[e(y.a,{on:{click:function(e){return e.preventDefault(),t.previewImg(r.IMG_URL)}}},[e(h.a,{attrs:{src:r.IMG_URL}})],1),t._v(" "),e(w.a,[e(w.c,{domProps:{innerHTML:t._s(r.NAME)}}),t._v(" "),e(w.b,{domProps:{innerHTML:t._s(r.isvalid)}})],1),t._v(" "),e(C.a),t._v(" "),e(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(e){return e.preventDefault(),t.deleteFile(o)}}},[e("i",{staticClass:"fas fa-trash-alt"})])],1),t._v(" "),e(f.a,{key:o+r.NAME})]}))],2)],1)],1)],1),t._v(" "),e(l.a,[e(C.a),t._v(" "),e(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n        Close\n      ")]),t._v(" "),e(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.uploadFiles}},[t._v("\n        Save\n      ")])],1)],1),t._v(" "),e("nuxt-child")],1)}),[],!1,null,"07ac3192",null);e.default=component.exports;installComponents(component,{DialogClassicMessage:r(623).default,LoadingIndicator:r(296).default,DiaImage:r(635).default})},653:function(t,e,r){"use strict";r(639)},654:function(t,e,r){var o=r(14)((function(i){return i[1]}));o.push([t.i,'.grey[data-v-07ac3192],.text-h5[data-v-07ac3192]{font-family:"Noto Sans Lao"}',""]),o.locals={},t.exports=o},670:function(t,e,r){"use strict";r.r(e);var o=r(174),n=r(282),c=r(40),l=r(611),d=r(613),m=r(625),f=r(615),_=r(94),v=r(24),h=(r(105),r(19),r(30),r(60)),k={props:{id:{type:Number,default:0},productId:{type:Number,default:""},productName:{type:String,default:""},isEdit:{type:Boolean,default:!1},cost:{type:Number,default:0}},data:function(){return{stockQty:1,stockCost:this.cost,isSubmitting:!1}},computed:{numberRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຈຳນວນ "},function(t){return/^[0-9]+$/.test(t)||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]},user:function(){return this.$auth.user||""}},methods:{stockSubmit:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=7;break}return t.isSubmitting=!0,r={inputter:t.user.id,product_id:t.productId,stocCardkQty:t.stockQty,totalCost:t.stockCost,productId:t.id},console.log("Pre fly ",r),e.next=6,t.$axios.post("/api/card/bulkCreate",r).then((function(e){console.log(e.data),Object(h.i)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.$emit("reload"),t.$emit("close-dialog")})).catch((function(e){console.log(e),Object(h.h)(t.$swal,"Error",e.response.data)}));case 6:t.isSubmitting=!1;case 7:case"end":return e.stop()}}),e)})))()}}},x=r(37),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(n.a,[e(c.d,[e("span",{staticClass:"text-h5"},[t._v("ເພີ່ມສະຕັອກສິນຄ້າ "+t._s(t.productId)+" "+t._s(t.productName))])]),t._v(" "),e(c.c,[e(l.a,[e(m.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(_.a,{attrs:{label:"ຈຳນວນ",rules:t.numberRule,"hide-details":"auto"},model:{value:t.stockQty,callback:function(e){t.stockQty=e},expression:"stockQty"}}),t._v(" "),e(_.a,{attrs:{label:"ຕົ້ນທຶນທັງຫໝົດ",rules:t.numberRule,"hide-details":"auto"},model:{value:t.stockCost,callback:function(e){t.stockCost=e},expression:"stockCost"}})],1)],1)],1),t._v(" "),e(c.a,[e(f.a),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ປິດ\n            ")]),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.stockSubmit}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(296).default})},844:function(t,e,r){"use strict";r.r(e);var o=r(174),n=r(282),c=r(40),l=r(281),d=r(617),m=r(621),f=r(613),_=r(280),v=r(147),h=r(616),k=r(615),x=r(94),y=r(78),w=r(297),S=(r(30),r(182),r(38),r(55),r(24)),C=(r(33),r(10),r(79),r(9),r(4),r(7),r(23),r(105),r(667)),D=r(60),R=r(650),F=r(298),$={components:{ProductForm:C.default,ProductFormCreate:R.default},middleware:"auths",data:function(){return{productFormCreate:!1,productFormKey:1,isstock:!1,selectedId:0,selectedProductCost:0,selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",editProductForm:!1,selectedProductId:null,stockFormKey:1,headers:[{text:"key",align:"center",value:"id"},{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"minStock",align:"center",value:"minStock"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"Status",align:"center",value:"status"},{text:"cost",align:"center",value:"pro_cost_price"},{text:"ເພີ່ມສະຕັອກ",align:"center",value:"functionStock",sortable:!1},{text:"ເບິ່ງສະຕັອກ",align:"center",value:"functionStockView",sortable:!1},{text:"ແກ້ໄຂ",align:"center",value:"functionEdit",sortable:!1}]}},watch:{message:function(t){this.dialogMessage=null!=t}},mounted:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:return e.next=4,t.loadCardCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return Object(D.d)(t)},verifyStockStatus:function(t,e){return 0==e?"Out of stock":t<e?"In stock":"Low stock"},triggerCardForm:function(t){this.stockFormKey+=1,this.selectedProductId=t.pro_id,this.selectedId=t.id,this.selectedProductCost=t.pro_cost_price,this.selectedProductName=t.pro_name,this.isstock=!0},fetchData:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("product_f").then((function(e){t.loaddata=e.data.map((function(t){return console.log(t.pro_id),{id:t.id,pro_id:t.pro_id,pro_name:t.pro_name,pro_price:t.pro_price,pro_desc:t.pro_desc,pro_status:t.pro_status,pro_category:t.pro_category,pro_category_desc:t.pro_category+" - "+t.categ_name,pro_card_count:t.card_count,pro_cost_price:t.cost_price,pro_outlet:t.outlet,pro_outlet_name:t.outlet_name,minStock:t.minStock,functionEdit:t.pro_id,functionStock:t.pro_id,functionStockView:t.pro_id,status:t.pro_id}}))})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.productFormKey+=1,this.selectedProductId=t.pro_id,this.editProductForm=!0},editStock:function(t){console.log("ID "+t.pro_id),console.log("NAME "+t.pro_name),console.log("OBJ "+Object.keys(t)),this.$router.push("/admin/stock/".concat(t.pro_id))},attachFile:function(t){var e=this;this.carddata.length=0;var r=t,o=new FileReader;r&&(console.log("FILE LEN: "+r),o.onload=function(t){e.content=t.target.result,console.log("Data content => : "+e.content);var r=e.content.replace(/\r\n/g,"\n").split("\n").filter((function(t){return""!==t&&t.length>=10})),i=0;r.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),e.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+e.carddata)},o.onerror=function(t){return console.log(t)},o.readAsText(r))},loadCardCategory:function(){var t=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(e){t.cardType=e.data.map((function(t){return{card_type_code:t.card_type_code,card_type_name:t.card_type_name}})),t.selectedCardType=t.cardType[0].card_type_code,console.log("CARD LEN: "+t.cardType.length),console.log("CARD LEN: "+t.cardType[0].card_type_code),t.isloading=!1})).catch((function(e){console.log("Error: "+e),t.isloading=!1}))},rebuildStock:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading){e.next=5;break}return t.isloading=!0,e.next=4,t.$axios.post("/api/card/rebuildStock").then((function(e){Object(F.d)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.fetchData()})).catch((function(e){Object(F.c)(t.$swal,"Error",e.response.data)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},P=r(37),component=Object(P.a)($,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e("h1",[t._v("PRODUCT LIST")]),t._v(" "),e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(f.a,{attrs:{"max-width":"300px"},model:{value:t.dialogMessage,callback:function(e){t.dialogMessage=e},expression:"dialogMessage"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(f.a,{attrs:{"max-width":"600px"},model:{value:t.isstock,callback:function(e){t.isstock=e},expression:"isstock"}},[e("card-form",{key:t.stockFormKey,attrs:{"product-id":t.selectedProductId,id:t.selectedId,cost:t.selectedProductCost,"product-name":t.selectedProductName},on:{"close-dialog":function(e){t.isstock=!1},reload:t.rebuildStock}})],1),t._v(" "),e(f.a,{attrs:{"max-width":"1200px"},model:{value:t.editProductForm,callback:function(e){t.editProductForm=e},expression:"editProductForm"}},[e("product-form",{key:t.productFormKey,attrs:{"header-id":t.selectedProductId,isEdit:t.editProductForm},on:{"close-dialog":function(e){t.editProductForm=!1},refresh:t.fetchData}})],1),t._v(" "),e(f.a,{attrs:{"max-width":"1200px"},model:{value:t.productFormCreate,callback:function(e){t.productFormCreate=e},expression:"productFormCreate"}},[e("product-form-create",{on:{"close-dialog":function(e){t.productFormCreate=!1},refresh:t.fetchData}})],1),t._v(" "),e(n.a,[e(c.d,[e(h.a,[e(d.a,{attrs:{cols:"6",sm:"6",md:"6"}},[e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e(d.a,{staticClass:"text-right",attrs:{cols:"6"}},[e(o.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined"},on:{click:t.rebuildStock}},[t._v("\n            Rebuild stock"),e("span",{staticClass:"mdi mdi-update"})])],1)],1)],1),t._v(" "),t.loaddata?e(m.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata,"items-per-page":t.pageLine},scopedSlots:t._u([{key:"top",fn:function(){return[e(y.a,{attrs:{flat:""}},[e(w.a,[t._v("ສິນຄ້າທັງຫມົດ: "+t._s(t.loaddata.length))]),t._v(" "),e(_.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),e(k.a),t._v(" "),e(o.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined"},on:{click:function(e){t.productFormCreate=!0}}},[t._v("\n            ສ້າງສິນຄ້າໃຫມ່"),e("span",{staticClass:"mdi mdi-note-plus-outline"})])],1)]},proxy:!0},{key:"item.functionEdit",fn:function(r){var n=r.item;return[e(o.a,{attrs:{variant:"outlined"},on:{click:function(e){t.editItem(n),t.isedit=!0}}},[e(v.a,{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-pencil\n          ")])],1)]}},{key:"item.functionStock",fn:function(r){var n=r.item;return[e(o.a,{attrs:{variant:"outlined"},on:{click:function(e){return t.triggerCardForm(n)}}},[e("i",{staticClass:"fas fa-cart-plus"})])]}},{key:"item.functionStockView",fn:function(r){var n=r.item;return[e(o.a,{attrs:{variant:"outlined"},on:{click:function(e){return t.editStock(n)}}},[e("i",{staticClass:"fas fa-eye"})])]}},{key:"item.pro_cost_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_cost_price))+"\n\n      ")]}},{key:"item.pro_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_price))+"\n\n      ")]}},{key:"item.pro_card_count",fn:function(e){var r=e.item;return[t._v("\n\n        "+t._s(r.pro_card_count)+"\n\n\n      ")]}},{key:"item.minStock",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.minStock))+"\n      ")]}},{key:"item.status",fn:function(r){var o=r.item;return[e(l.a,{staticClass:"ma-2",attrs:{color:t.verifyStockStatus(o.minStock,o.pro_card_count).includes("In")?"green":t.verifyStockStatus(o.minStock,o.pro_card_count).includes("Out")?"red":"orange","text-color":"white"}},[t._v("\n          "+t._s(t.verifyStockStatus(o.minStock,o.pro_card_count))+"\n        ")])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(296).default,DialogClassicMessage:r(623).default,CardForm:r(670).default,ProductForm:r(667).default,ProductFormCreate:r(650).default})}}]);