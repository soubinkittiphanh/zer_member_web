(window.webpackJsonp=window.webpackJsonp||[]).push([[95,27],{648:function(t,e,n){"use strict";n.r(e);var o=n(183),r=n(288),l=n(28),c=n(291),d=n(638),f={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=n(45),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(r.a,[e(l.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(l.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(c.a),t._v(" "),e(l.a,[e(d.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},673:function(t,e,n){n(674)},674:function(t,e,n){"use strict";var o=n(11),r=n(39),l=n(23),c=n(73),d=n(32),f=n(96),m=n(235),h=n(47),v=n(123),x=n(313),_=n(398),D=n(36),w=n(74),I=D("replace"),k=TypeError,F=l("".indexOf),S=l("".replace),y=l("".slice),O=Math.max,N=function(t,e,n){return n>t.length?-1:""===e?n:F(t,e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,l,D,M,Y,C,j,z,A=c(this),E=0,T=0,R="";if(!f(t)){if((n=m(t))&&(o=h(c(x(t))),!~F(o,"g")))throw k("`.replaceAll` does not allow non-global regexes");if(l=v(t,I))return r(l,t,A,e);if(w&&n)return S(h(A),t,e)}for(D=h(A),M=h(t),(Y=d(e))||(e=h(e)),C=M.length,j=O(1,C),E=N(D,M,0);-1!==E;)z=Y?h(e(M,E,D)):_(M,D,E,[],void 0,e),R+=y(D,T,E)+z,T=E+C,E=N(D,M,E+j);return T<D.length&&(R+=y(D,T)),R}})},743:function(t,e,n){var content=n(831);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4f68d8b4",content,!0,{sourceMap:!1})},830:function(t,e,n){"use strict";n(743)},831:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,'.grey[data-v-aa34c48c],.text-h5[data-v-aa34c48c]{font-family:"Noto Sans Lao"}',""]),o.locals={},t.exports=o},904:function(t,e,n){"use strict";n.r(e);var o=n(183),r=n(288),l=n(28),c=n(641),d=n(645),f=n(875),m=n(619),h=n(296),v=n(640),x=n(102),_=(n(33),n(191),n(26)),D=n(29),w=(n(5),n(8),n(81),n(673),n(40),n(27),n(396),n(112),{middleware:"auths",data:function(){return{wallet:!1,isedit:!1,dialog:!1,isloading:!1,dialogForm:!1,message:"",valid:!0,name:"",search:"",userId:"",loaddata:[],headers:[{text:"ລະຫັດ",align:"center",value:"txnHisId"},{text:"ລະຫັດລູກຄ້າ",align:"center",value:"userId"},{text:"ລະຫັດແອັດມິນ",align:"center",value:"inputter"},{text:"ວັນທີ",align:"center",value:"txnDate"},{text:"ທຸລະກຳ",align:"center",value:"txnName"},{text:"ຈຳນວນ",align:"end",value:"amount",sortable:!0}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menu1:!1,menu2:!1}},created:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},watch:{message:function(t){this.dialog=null!=t},isedit:function(t){t||(this.form_data.cus_id="1XXX")},date:function(t){this.dateFormatted=this.formatDate(this.date),this.fetchData()},date2:function(t){this.dateFormatted2=this.formatDate(this.date2),this.fetchData()}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)},totalSale:function(){var t=0;return this.loaddata.forEach((function(e){t+=parseInt(e.amount.replaceAll(",",""))})),console.log("Price total: "+t),this.getFormatNum(t)},totalDebit:function(){var t=0;return this.loaddata.forEach((function(e){1e3===e.txnId&&(t+=parseInt(e.amount.replaceAll(",","")))})),console.log("Price total: "+t),this.getFormatNum(t)},totalCredit:function(){var t=0;return this.loaddata.forEach((function(e){1006===e.txnId&&(t+=parseInt(e.amount.replaceAll(",","")))})),console.log("Price total: "+t),this.getFormatNum(t)}},methods:{getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},fetchData:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("report_txn/?fromDate="+t.date+"&toDate="+t.date2+"&userId="+t.userId).then((function(e){t.loaddata=e.data.map((function(e){return console.log(e.cus_id),{txnHisId:e.txn_his_id,amount:t.getFormatNum(e.txn_his_amount),userId:e.user_id+" "+e.cus_name,inputter:e.txn_his_inputter+" "+e.user_name,txnDate:e.txn_his_date,txnName:e.txn_name,txnId:e.txn_id}}))})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),n=Object(_.a)(e,3),o=n[0],r=n[1],l=n[2];return"".concat(r,"/").concat(l,"/").concat(o)},parseDate:function(t){if(!t)return null;var e=t.split("/"),n=Object(_.a)(e,3),o=n[0],r=n[1],l=n[2];return"".concat(l,"-").concat(o.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}}),I=(n(830),n(45)),component=Object(I.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(m.a,{attrs:{"max-width":"300px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(r.a,[e(l.d,[e(v.a,[e(c.a,{attrs:{cols:"12",lg:"5"}},[e(h.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(x.a,t._g(t._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(h.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(x.a,t._g(t._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date2=t.parseDate(t.dateFormatted2)}},model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1),t._v(" "),e("div",[t._v(" ເຕີມ: "+t._s(t.totalDebit))]),t._v(" "),e("div",[t._v(" ຖອນ: "+t._s(t.totalCredit))])],1),t._v(" "),e(c.a,{attrs:{cols:"12",lg:"5"}},[e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດແອັດມິນ","single-line":"","hide-detailsx":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),t._v(" "),e(o.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.fetchData}},[t._v(" ດຶງລາຍງານ ")])],1)],1)],1),t._v(" "),t.loaddata?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata}}):t._e()],1)],1)}),[],!1,null,"aa34c48c",null);e.default=component.exports;installComponents(component,{DialogClassicMessage:n(648).default,LoadingIndicator:n(306).default})}}]);