(window.webpackJsonp=window.webpackJsonp||[]).push([[56,20],{564:function(e,t,o){"use strict";o.r(t);var n=o(541),r=o(246),c=o(139),l=o(244),d=o(554),_={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},f=o(75),component=Object(f.a)(_,(function(){var e=this,t=e._self._c;return t(r.a,[t(c.d,{staticClass:"text-h5 grey lighten-2"},[e._v(" ຂໍ້ຄວາມ ")]),e._v(" "),t(c.c,[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),t(l.a),e._v(" "),t(c.a,[t(d.a),e._v(" "),t(n.a,{attrs:{color:"primary",text:""},on:{click:e.toggleDialog}},[e._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},565:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o(79),r=o(0),c=Object(r.j)("v-toolbar__title"),l=Object(r.j)("v-toolbar__items");n.a},735:function(e,t,o){"use strict";o.r(t);var n=o(541),r=o(246),c=o(139),l=o(710),d=o(568),_=o(244),f=o(134),m=o(554),h=o(86),v=o(79),x=o(565),y=(o(29),o(256),o(38)),k=(o(47),o(9),o(76),o(10),o(4),o(8),o(26),o(140),{middleware:"auths",data:function(){return{isstock:!1,selectedProductId:"",selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",headers:[{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຮ້ານ",align:"center",value:"pro_outlet_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"ສະຖານະ",align:"center",value:"pro_status"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"cost",align:"center",value:"pro_cost_price"},{text:"ຟັງຊັ່ນ",align:"center",value:"function",sortable:!1}]}},watch:{message:function(e){this.dialogMessage=null!=e}},mounted:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:return t.next=4,e.loadCardCategory();case 4:case"end":return t.stop()}}),t)})))()},methods:{triggerCardForm:function(e){this.selectedProductId=e.pro_id,this.selectedProductName=e.pro_name,this.isstock=!0},fetchData:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("product_f").then((function(t){e.loaddata=t.data.map((function(e){return console.log(e.pro_id),{pro_id:e.pro_id,pro_name:e.pro_name,pro_price:e.pro_price,pro_desc:e.pro_desc,pro_status:e.pro_status,pro_category:e.pro_category,pro_category_desc:e.pro_category+" - "+e.categ_name,pro_card_count:e.card_count,pro_cost_price:e.cost_price,pro_outlet:e.outlet,pro_outlet_name:e.outlet_name,function:e.pro_id}}))})).catch((function(t){e.message=t,console.log("Error: "+t)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){console.log("ID "+e.pro_id),console.log("NAME "+e.pro_name),console.log("OBJ "+Object.keys(e)),this.$router.push("/admin/product/".concat(e.pro_id))},editStock:function(e){console.log("ID "+e.pro_id),console.log("NAME "+e.pro_name),console.log("OBJ "+Object.keys(e)),this.$router.push("/admin/stock/".concat(e.pro_id))},attachFile:function(e){var t=this;this.carddata.length=0;var o=e,n=new FileReader;o&&(console.log("FILE LEN: "+o),n.onload=function(e){t.content=e.target.result,console.log("Data content => : "+t.content);var o=t.content.replace(/\r\n/g,"\n").split("\n").filter((function(e){return""!==e&&e.length>=10})),i=0;o.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),t.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+t.carddata)},n.onerror=function(e){return console.log(e)},n.readAsText(o))},loadCardCategory:function(){var e=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(t){e.cardType=t.data.map((function(e){return{card_type_code:e.card_type_code,card_type_name:e.card_type_name}})),e.selectedCardType=e.cardType[0].card_type_code,console.log("CARD LEN: "+e.cardType.length),console.log("CARD LEN: "+e.cardType[0].card_type_code),e.isloading=!1})).catch((function(t){console.log("Error: "+t),e.isloading=!1}))}}}),C=o(75),component=Object(C.a)(k,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t("h1",[e._v("PRODUCT LIST")]),e._v(" "),t(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(d.a,{attrs:{"max-width":"300px"},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(d.a,{attrs:{"max-width":"600px"},model:{value:e.isstock,callback:function(t){e.isstock=t},expression:"isstock"}},[t("card-form",{attrs:{"product-id":e.selectedProductId,"product-name":e.selectedProductName},on:{"close-dialog":function(t){e.isstock=!1},reload:e.fetchData}})],1),e._v(" "),t(r.a,[t(c.d,[t(h.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),e.loaddata?t(l.a,{attrs:{headers:e.headers,search:e.search,items:e.loaddata,"items-per-page":e.pageLine},scopedSlots:e._u([{key:"top",fn:function(){return[t(v.a,{attrs:{flat:""}},[t(x.a,[e._v("ສິນຄ້າທັງຫມົດ: "+e._s(e.loaddata.length))]),e._v(" "),t(_.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(m.a),e._v(" "),t("NuxtLink",{attrs:{to:"/admin/product"}},[e._v("ສ້າງສິນຄ້າໃຫມ່")])],1)]},proxy:!0},{key:"item.function",fn:function(o){var r=o.item;return[t(f.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){e.editItem(r),e.isedit=!0}}},[e._v("\n          mdi-pencil\n        ")]),e._v(" "),t(n.a,{on:{click:function(t){return e.triggerCardForm(r)}}},[t("i",{staticClass:"fas fa-cart-plus"}),e._v("\n          ເພີ່ມສະຕັອກ\n        ")]),e._v(" "),t(n.a,{on:{click:function(t){return e.editStock(r)}}},[t("i",{staticClass:"fas fa-dolly"}),e._v("\n          ເບິ່ງສະຕັອກ\n        ")])]}}],null,!0)}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:o(559).default,DialogClassicMessage:o(564).default,CardForm:o(702).default})}}]);