(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{693:function(t,e,r){var content=r(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("43114049",content,!0,{sourceMap:!1})},709:function(t,e,r){"use strict";r(693)},710:function(t,e,r){var o=r(16)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},763:function(t,e,r){"use strict";r.r(e);var o=r(288),c=r(28),n=r(642),l=r(228),d=(r(27),r(10),r(7),r(9),r(5),r(12),r(8),r(13),r(2)),f=(r(22),r(46)),m=r(62);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"product-card-pos",props:{imagePath:{type:String,default:""},productName:{type:String,default:""},product:{type:Object,default:null},stock:{type:Number,default:0}},computed:{host:function(){return Object(m.g)()}},methods:v(v({},Object(f.b)(["addProduct"])),{},{formatNumber:function(t){return Object(m.e)(t)}})},h=(r(709),r(45)),component=Object(h.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{elevation:n?16:0,outlined:""},on:{click:function(e){return t.addProduct(t.product)}}},[e(l.a,{attrs:{"max-height":"200px",src:"".concat(t.host,"/uploads/").concat(t.imagePath),"lazy-src":"".concat(t.host,"/uploads/").concat(t.imagePath)}}),t._v(" "),e(c.c,{staticClass:"text-start"},[e("div",{staticClass:"font-weight-meduim primary--text"},[t._v("\n                    "+t._s(t.productName)+" \n                ")]),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[t._v(" Stock: "+t._s(t.stock)+" ")]),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[t._v(" ລາຄາ: "+t._s(t.formatNumber(t.product.pro_price)))])])],1)]}}])})],1)}),[],!1,null,"353e2350",null);e.default=component.exports}}]);