(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return o})),n.d(t,"isMobile",(function(){return a})),n.d(t,"isDarkMode",(function(){return i})),n.d(t,"formatDate",(function(){return s})),n.d(t,"getParameterByName",(function(){return l})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return r})),n.d(t,"makeImagesZoomable",(function(){return d}));var o=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},i=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},s=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},l=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var o=e[t].closest(".kg-gallery-image"),a=e[t].attributes.width.value/e[t].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},r=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).closest("figure").hasClass("kg-nft-card")||e(this).parent().is("a")||e(this).hasClass("kg-product-card-image")||e(this).hasClass("kg-audio-thumbnail")||e(this).addClass("js-zoomable")}))},d=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},32:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(26),s=n.n(i),l=n(17),c=(n(34),n(2)),r=n(27),d=n.n(r),u=n(28),m=n(3),g=(n(36),n(1));n(38);a()((function(){Object(g.isRTL)()&&a()("html").attr("dir","rtl").addClass("rtl");var e=a()("body"),t=a()(".js-header"),n=a()(".js-open-menu"),o=a()(".js-close-menu"),i=a()(".js-menu"),r=a()(".js-toggle-submenu"),h=a()(".js-submenu-option")[0],f=a()(".js-submenu"),p=a()(".js-recent-slider"),v=a()(".js-open-secondary-menu"),b=a()(".js-open-join-us-menu"),j=a()(".js-open-search"),w=a()(".js-close-search"),k=a()(".js-search"),y=a()(".js-input-search"),C=a()(".js-search-results"),M=a()(".js-no-results"),E=a()(".js-toggle-darkmode"),I=a()(".js-main-nav"),T=a()(".js-main-nav-left"),L=a()(".js-newsletter"),O=localStorage.getItem("theme"),S=null,A=!1,_=null,x=null,B=function(){t.removeClass("submenu-is-active"),r.removeClass("active"),f.removeClass("opened").addClass("closed")},D=function(){e.toggleClass("no-scroll-y")},H=function(e,t){var n=new GhostContentAPI({url:e,key:t,version:"v5.0"}),o=[],a={shouldSort:!0,ignoreLocation:!0,findAllMatches:!0,includeScore:!0,minMatchCharLength:2,keys:["title","custom_excerpt","tags.name"]};n.posts.browse({limit:"all",include:"tags",fields:"id, title, url, published_at, custom_excerpt"}).then((function(e){for(var t=0,n=e.length;t<n;t++)o.push(e[t]);S=new u.a(o,a)})).catch((function(e){console.log(e)}))},N=function(e){Object(g.isMobile)()||(e?(I.addClass("toggle-overflow"),T.addClass("toggle-overflow")):(I.removeClass("toggle-overflow"),T.removeClass("toggle-overflow")))};(n.on("click",(function(){t.addClass("mobile-menu-opened"),i.addClass("opened"),D()})),o.on("click",(function(){t.removeClass("mobile-menu-opened"),i.removeClass("opened"),D()})),r.on("click",(function(){(A=!A)?(t.addClass("submenu-is-active"),r.addClass("active"),f.removeClass("closed").addClass("opened")):B()})),j.on("click",(function(){k.addClass("opened"),setTimeout((function(){y.trigger("focus")}),400),D()})),w.on("click",(function(){y.trigger("blur"),k.removeClass("opened"),D()})),y.on("keyup",(function(){if(y.val().length>0&&S){var e=S.search(y.val()).filter((function(e){if(e.score<=.5)return e})),t="";if(e.length>0){for(var n=0,o=e.length;n<o;n++)t+='\n          <article class="m-result">            <a href="'.concat(e[n].item.url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].item.title,'</h3>              <span class="m-result__date">').concat(Object(g.formatDate)(e[n].item.published_at),"</span>            </a>          </article>");M.hide(),C.html(t),C.show()}else C.html(""),C.hide(),M.show()}else C.html(""),C.hide(),M.hide()})),E.on("change",(function(){E.is(":checked")?(a()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(a()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),E.on("mouseenter",(function(){N(!0)})),E.on("mouseleave",(function(){N(!1)})),a()(window).on("click",(function(e){A&&h&&!h.contains(e.target)&&(A=!1,B())})),a()(document).on("keyup",(function(e){"Escape"===e.key&&k.hasClass("opened")&&w.trigger("click")})),O?(a()("html").attr("data-theme",O),"dark"===O&&E.attr("checked",!0)):Object(g.isDarkMode)()&&E.attr("checked",!0),t.length>0)&&new s.a(t[0],{tolerance:{down:10,up:20},offset:15,onUnpin:function(){if(!Object(g.isMobile)()&&_){var e=_[0];e&&e.state.isVisible&&e.hide()}if(!Object(g.isMobile)()&&x){var t=x[0];t&&t.state.isVisible&&t.hide()}}}).init();if(p.length>0)new m.d(".js-recent-slider",{modules:[m.b,m.a],freeMode:!0,slidesPerView:"auto",a11y:!0,on:{init:function(){Object(c.a)(".js-recent-article-title",50)}}});if("undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?a()("[data-aos]").addClass("no-aos-animation"):d.a.init({once:!0,startEvent:"DOMContentLoaded"}),v.length>0){var P=document.getElementById("secondary-navigation-template");_=Object(l.a)(".js-open-secondary-menu",{appendTo:document.body,content:P.innerHTML,allowHTML:!0,arrow:!0,trigger:"click",interactive:!0,onShow:function(){N(!0)},onHidden:function(){N(!1)}})}if(b.length>0){var R=document.getElementById("join-us-navigation-template");x=Object(l.a)(".js-open-join-us-menu",{appendTo:document.body,content:R.innerHTML,allowHTML:!0,arrow:!0,trigger:"click",interactive:!0,onShow:function(){N(!0)},onHidden:function(){N(!1)}})}function z(e){if(e){var t=e.currentTarget.parentElement.parentElement.parentElement;if(t){for(var n=t.getElementsByTagName("video"),o=0;o<n.length;o++)n[o].pause();t.style.display="none"}}}Object(l.a)(".js-tooltip"),Object(c.a)(".js-article-card-title",100),Object(c.a)(".js-article-card-title-no-image",250),"undefined"!=typeof disableNewsletter&&disableNewsletter&&L.remove(),"undefined"!=typeof ghostSearchApiKey?H(ghostHost,ghostSearchApiKey):(j.css("visibility","hidden"),w.remove(),k.remove()),a()(".modal-opener").each((function(e,t){console.log(e,t.getAttribute("modalId")),t.addEventListener("click",(function(){a()("#"+t.getAttribute("modalid")).show();var e=document.getElementById(t.getAttribute("modalId")).getElementsByTagName("video");e.length>0&&e[0].play()}))})),a()(".modal-content span").each((function(e,t){t.addEventListener("click",z)}))})),window.onclick=function(e){var t=e.target.id;if(t){var n=document.getElementById(t);if(n.classList.contains("modal")&&"block"==n.style.display){var o=n.getElementsByTagName("span");o&&o.length>0&&o.item(0).click()}}}},45:function(e,t){},47:function(e,t){}},[[32,0,1]]]);