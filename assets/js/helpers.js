(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(n,e,t){"use strict";t.r(e),t.d(e,"isRTL",(function(){return o})),t.d(e,"isMobile",(function(){return a})),t.d(e,"isDarkMode",(function(){return i})),t.d(e,"formatDate",(function(){return r})),t.d(e,"getParameterByName",(function(){return c})),t.d(e,"adjustImageGallery",(function(){return u})),t.d(e,"managePostImages",(function(){return s})),t.d(e,"makeImagesZoomable",(function(){return l}));var o=function(){var n=document.querySelector("html");return["ar","he","fa"].includes(n.getAttribute("lang"))},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(n,")")).matches},i=function(){var n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return n&&n.matches},r=function(n){return n?new Date(n).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(n,e){e||(e=window.location.href),n=n.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(e);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null},u=function(){for(var n=document.querySelectorAll(".kg-gallery-image img"),e=0,t=n.length;e<t;e++){var o=n[e].closest(".kg-gallery-image"),a=n[e].attributes.width.value/n[e].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},s=function(n){n(".js-post-content").find("img").each((function(){n(this).closest("figure").hasClass("kg-bookmark-card")||n(this).closest("figure").hasClass("kg-nft-card")||n(this).parent().is("a")||n(this).hasClass("kg-product-card-image")||n(this).hasClass("kg-audio-thumbnail")||n(this).addClass("js-zoomable")}))},l=function(n,e){e(".js-zoomable").on("opened",(function(){setTimeout((function(){var e=n(".medium-zoom-image--opened");e.length>1&&e.last().hide()}),10)}))}},30:function(n,e,t){t(1),t(64),t(66),t(68),t(70),t(72),t(74),n.exports=t(76)},64:function(n,e){},66:function(n,e){},68:function(n,e){},70:function(n,e){},72:function(n,e){},74:function(n,e){},76:function(n,e){}},[[30,0,1]]]);