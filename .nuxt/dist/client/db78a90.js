(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{612:function(e,t,n){"use strict";n.r(t);n(23);var l={middleware:"auths",data:function(){return{dialog:!1,valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],rules:[function(e){return!e||e.size<2e6||"Avatar size should be less than 2 MB!"}],select:null,items:["ບັດເກມ GARINA FREEFIRE","ບັດເກມ PUBG","ເຄື່ອງໃຊ້ທົ່ວໄປ","ເຄື່ອງດື່ມ"],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},r=n(72),o=n(128),c=n.n(o),d=n(204),m=n(455),v=n(478),f=n(449),h=n(492),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v("ເຕີມເຄດິດ Wallet In")]),e._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"ລະຫັດອ້າງອີງ",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Item is required"}],label:"ໄອດີລູກຄ້າ",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"ຈຳວນເງິນ",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-textarea",{attrs:{outlined:"",name:"input-7-4",counter:"5",label:"ໝາຍເຫດ",value:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."}}),e._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v("\n      ກວດສອບຂໍ້ມູນ\n    ")]),e._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" ລ້າງຂໍ້ມູນ ")]),e._v(" "),n("v-btn",{attrs:{color:"warning"},on:{click:e.resetValidation}},[e._v(" ບັນທຶກ ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VForm:m.a,VSelect:v.a,VTextField:f.a,VTextarea:h.a})}}]);