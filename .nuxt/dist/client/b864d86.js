(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{699:function(e,n,t){"use strict";t.r(n);t(5),t(51),t(61),t(677),t(397),t(38),t(113);var l={data:function(){return{imagesPreviewURL:[],files:[]}},methods:{onFilesChange:function(e){var n=e;if(this.files=e,n){console.log("FILE LEN: "+n.length);for(var i=0;i<n.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(n[i]),NAME:n[i].name,isvalid:this.sizeValidate(n[i].size)})}else this.imagesPreviewURL=null},deleteFile:function(e){this.imagesPreviewURL.splice(e,1),this.files.splice(e,1)},sizeValidate:function(e){console.log("SIZE"+e);var n=2e7;if(e>n)return"Max size is ".concat(2e4,"Kb")}}},o=t(45),component=Object(o.a)(l,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);