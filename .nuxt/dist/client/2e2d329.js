(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{579:function(t,e,n){"use strict";n(10),n(11),n(15),n(16);var r=n(2),o=(n(4),n(40),n(57),n(26),n(9),n(29),n(77),n(345),n(44),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(58),n(8),n(344),n(1)),c=n(39),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],j=["start","end","center"];function y(t,e){return O.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var v=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},S=y("justify",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},P=y("alignContent",(function(){return{type:String,default:null,validator:m}})),C={align:Object.keys(w),justify:Object.keys(S),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},w),{},{justify:{type:String,default:null,validator:h}},S),{},{alignContent:{type:String,default:null,validator:m}},P),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=D.get(l);if(!d){var O,j;for(j in d=[],C)C[j].forEach((function(t){var e=n[t],r=_(j,t,e);r&&d.push(r)}));d.push((O={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(O,"align-".concat(n.align),n.align),Object(r.a)(O,"justify-".concat(n.justify),n.justify),Object(r.a)(O,"align-content-".concat(n.alignContent),n.alignContent),O)),D.set(l,d)}return t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},580:function(t,e,n){"use strict";n(10),n(11),n(15),n(16);var r=n(2),o=(n(4),n(21),n(9),n(29),n(77),n(345),n(44),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(58),n(40),n(8),n(79),n(344),n(1)),c=n(39),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],j=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=O.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),v=O.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(j),offset:Object.keys(y),order:Object.keys(v)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=S.get(l);if(!d){var O,j;for(j in d=[],w)w[j].forEach((function(t){var e=n[t],r=h(j,t,e);r&&d.push(r)}));var y=d.some((function(t){return t.startsWith("col-")}));d.push((O={col:!y||!n.cols},Object(r.a)(O,"col-".concat(n.cols),n.cols),Object(r.a)(O,"offset-".concat(n.offset),n.offset),Object(r.a)(O,"order-".concat(n.order),n.order),Object(r.a)(O,"align-self-".concat(n.alignSelf),n.alignSelf),O)),S.set(l,d)}return t(n.tag,Object(c.a)(data,{class:d}),o)}})},659:function(t,e,n){"use strict";n.r(e);var r=n(248),o=n(139),c=n(580),l=n(579),f={data:function(){return{}}},d=n(65),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{staticClass:"mx-auto",attrs:{"min-height":"100",color:"transparent"}},[e(o.c,[e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot1")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot2")],2)],1),t._v(" "),e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot3")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot4")],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);