(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"08a74f16","chunk-03c26537":"bfa28596","chunk-097de584":"5598a27b","chunk-0ddccc0c":"675aeb77","chunk-1cf3c077":"4329c525","chunk-29431a59":"6e2bf43f","chunk-2d2261c5":"ac7e28ae","chunk-34aad8e1":"9365ec3b","chunk-5d5cf81a":"bf5f220c","chunk-609481b8":"188a24bc","chunk-63d66a76":"7093c26c","chunk-737ebb16":"b728cc2e","chunk-73c99eec":"6aa8af88","chunk-7a6157a2":"ce838864","chunk-d5be605e":"9bdeec7e","chunk-d67660d8":"52ddd87a","chunk-ed920670":"1639654c","chunk-ff0a9dd6":"bab41d96","chunk-00f1b9c7":"f32d624a","chunk-d1dba062":"1a193483"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-03c26537":1,"chunk-097de584":1,"chunk-0ddccc0c":1,"chunk-1cf3c077":1,"chunk-29431a59":1,"chunk-34aad8e1":1,"chunk-5d5cf81a":1,"chunk-609481b8":1,"chunk-63d66a76":1,"chunk-737ebb16":1,"chunk-73c99eec":1,"chunk-7a6157a2":1,"chunk-d5be605e":1,"chunk-d67660d8":1,"chunk-ed920670":1,"chunk-ff0a9dd6":1,"chunk-00f1b9c7":1,"chunk-d1dba062":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"38f56995","chunk-03c26537":"9a1abd49","chunk-097de584":"0682c384","chunk-0ddccc0c":"054fcb5e","chunk-1cf3c077":"435c8dc3","chunk-29431a59":"19705bcf","chunk-2d2261c5":"31d6cfe0","chunk-34aad8e1":"38e1faa5","chunk-5d5cf81a":"3c494790","chunk-609481b8":"bd11593f","chunk-63d66a76":"be61d00a","chunk-737ebb16":"4bd1aca5","chunk-73c99eec":"390dc045","chunk-7a6157a2":"1dd1a26e","chunk-d5be605e":"acbf73a7","chunk-d67660d8":"5736cba8","chunk-ed920670":"55754c6a","chunk-ff0a9dd6":"30578e09","chunk-00f1b9c7":"619e2a3c","chunk-d1dba062":"6cf74e3d"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f9a":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("eb88"),o=n("b71e"),c={user:{}},a={user:function(e){return e.user}},u={FETCH_USER:function(e,t){console.log(t);var n=t.id;return r["a"].getItem(n).then((function(t){return console.log(t),e.commit("SET_USER",t),t})).catch((function(e){console.log(e),o["a"].showApiError("")}))},CREATE_USER:function(e,t){return console.log(t),r["a"].create(t).then((function(t){return console.log(t),e.commit("SET_USER",t),t}))},EDIT_USER:function(e,t){return console.log(t),r["a"].edit(t.resource,t.data).then((function(t){return console.log(t),e.commit("SET_USER",t),t}))},CHECK_USER_HASH:function(e,t){return new Promise((function(e,n){r["a"].get("check-hash-actual/"+t).then((function(t){e(t)})).catch((function(t){e(t)}))}))}},i={SET_USER:function(e,t){e.user=t}};t["default"]={state:c,actions:u,mutations:i,getters:a}},1328:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("99af"),n("96cf");var r=n("1da1"),o=n("d4ec"),c=n("bee2"),a=n("fd45"),u=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return a["a"].query("project/".concat(e),{params:t})}},{key:"getItem",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("project",t,{params:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("project",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1?r[1]:void 0,e.next=4,a["a"].put("project/".concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].delete("project/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"applyUser",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("project/".concat(t.projectId,"/apply/").concat(t.userId),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},"2a74":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("ddb0");var r=n("d307"),o={};r.keys().forEach((function(e){"./index.js"!==e&&(o[e]=r(e).default)})),t["default"]=o},"2cc2":function(e,t,n){"use strict";n.r(t);var r=n("eb88"),o=n("b71e"),c={profile:{}},a={profile:function(e){return e.profile}},u={FETCH_PROFILE:function(e,t){var n=t?t.id:"0";return r["a"].getItem(n).then((function(t){return e.commit("SET_PROFILE",t.data),t})).catch((function(e){console.log(e),o["a"].showApiError("")}))}},i={SET_PROFILE:function(e,t){e.profile=t}};t["default"]={state:c,actions:u,mutations:i,getters:a}},4360:function(e,t,n){"use strict";n("4160"),n("b64b"),n("159b");var r=n("2b0e"),o=n("2f62"),c=n("2a74");r["default"].use(o["a"]),t["a"]=new o["a"].Store({modules:c["default"],actions:{reset:function(e){var t=e.commit;Object.keys(c["default"]).forEach((function(e){t("".concat(e,"/RESET"))}))}},strict:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("1276"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide"}},[n("router-view")],1)],1)},c=[],a=n("6f9e"),u={name:"App",methods:{},created:function(){var e=this;this.$store.dispatch("FETCH_CSRF_TOKEN"),this.$store.dispatch("FETCH_PROFILE"),a["a"].$on("SHOW_TOAST",(function(t){e.showToast(t)}))}},i=u,s=(n("5c0b"),n("2877")),l=Object(s["a"])(i,o,c,!1,null,null,null),f=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("a18c"),p=n("4360"),m={data:function(){return{currentPageName:"page name",actionName:"action"}},methods:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isMobileWidth:function(){return window.innerWidth<992},isNewIOS:function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=window.devicePixelRatio||1,n={width:window.screen.width*t,height:window.screen.height*t};return!!(e&&n.width>=1125&&n.height>=2436)},goToPrevRoute:function(){this.$router.go(-1)},setCurrentPageName:function(e){a["a"].$emit("CHANGE_CURRENT_PAGE_NAME",e)},showToast:function(e){var t=e.message,n=void 0===t?"":t,r=e.title,o=void 0===r?"":r,c=e.variant,a=void 0===c?"":c,u=e.autoHideDelay,i=void 0===u?1e4:u;this.$bvToast.toast(n,{title:o,toaster:"b-toaster-bottom-full",solid:!0,variant:a,appendToast:!1,autoHideDelay:i})},isLoggedIn:function(){var e=window.getCookie("authl");return"1"===e},cloneObject:function(e){return JSON.parse(JSON.stringify(e))}}},b=(n("77ed"),n("5f5b")),g=n("b1e0"),v=(n("f9e3"),n("2dd8"),n("3f9b")),E=n("7bb1"),w=(n("4160"),n("4fad"),n("b64b"),n("159b"),n("5530")),k=n("3835"),T=n("4c93");Object.keys(T).forEach((function(e){Object(E["c"])(e,T[e])}));for(var O=0,j=Object.entries(T);O<j.length;O++){var S=Object(k["a"])(j[O],2),R=S[0],y=S[1];Object(E["c"])(R,Object(w["a"])({},y))}n("e607");var _=n("8e5f"),C=n.n(_),I=(n("78a7"),n("fd45")),x=n("b71e"),P=n("87f4"),A=n.n(P);I["a"].init(),r["default"].use(A.a),r["default"].use(b["a"]),r["default"].use(g["a"]),r["default"].use(v["a"]),r["default"].component("multiselect",C.a),r["default"].mixin(m),r["default"].component("ValidationProvider",E["b"]),r["default"].component("ValidationObserver",E["a"]),r["default"].config.productionTip=!0,r["default"].prototype.$errorHelper=x["a"],window.getCookie=function(e){var t="; ".concat(document.cookie);console.log(t);var n=t.split("; ".concat(e,"="));return 2===n.length&&n.pop().split(";").shift()},new r["default"]({router:h["a"],store:p["a"],render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"6547e":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),o=n("d4ec"),c=n("bee2"),a=n("fd45"),u=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return a["a"].query("direction/".concat(e),{params:t})}},{key:"getItem",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("direction",t,{params:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("direction",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1?r[1]:void 0,e.next=4,a["a"].put("direction/".concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].delete("direction/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),i=n("b71e"),s={direction:{},directions:[]},l={direction:function(e){return e.direction}},f={FETCH_DIRECTION_LIST:function(e,t){return u.get("list",t).then((function(t){return e.commit("SET_DIRECTION_LIST",t),t})).catch((function(e){console.log(e),i["a"].showApiError("")}))},FETCH_DIRECTION:function(e,t){var n=t.id,r=t.dataToPlug;return u.getItem(n,r).then((function(t){return e.commit("SET_DIRECTION",t.data),t})).catch((function(e){console.log(e),i["a"].showApiError("")}))},CREATE_DIRECTION:function(e,t){return u.create(t).then((function(t){return console.log(t),e.commit("SET_DIRECTION",t),t}))},EDIT_DIRECTION:function(e,t){return u.edit(t.resource,t.data).then((function(t){return console.log(t),e.commit("SET_DIRECTION",t),t}))},DELETE_DIRECTION:function(e,t){var n=t.id;return u.delete(n).then((function(t){return e.commit("SET_DIRECTION",{}),t}))}},d={SET_DIRECTION:function(e,t){e.direction=t},SET_DIRECTION_LIST:function(e,t){e.directions=t}};t["default"]={state:s,actions:f,mutations:d,getters:l}},"6f9e":function(e,t,n){"use strict";var r=n("2b0e"),o=new r["default"];t["a"]=o},"78a7":function(e,t,n){},8798:function(e,t,n){"use strict";n.r(t);var r={messages:[]},o={messages:function(e){return e.messages}},c={ADD_MESSAGE:function(e,t){e.commit("SET_MESSAGE",t)},CLEAR_MESSAGES:function(e){e.commit("CLEAR_MESSAGES")}},a={SET_MESSAGE:function(e,t){e.messages.push(t)},CLEAR_MESSAGES:function(e){e.messages=[]}};t["default"]={state:r,actions:c,mutations:a,getters:o}},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";var r=n("2b0e"),o=n("8c4f"),c=(n("d3b7"),{path:"/user",name:"user",component:function(){return n.e("chunk-609481b8").then(n.bind(null,"ad54"))},meta:{title:"user"},children:[{path:"news",name:"user.news",component:function(){return n.e("chunk-0ddccc0c").then(n.bind(null,"d5c6"))},meta:{title:"events"}},{path:"doings",name:"user.doings",component:function(){return n.e("chunk-1cf3c077").then(n.bind(null,"40c6"))},meta:{title:"doings"},redirect:"doings/projects",children:[{path:"projects",name:"user.doings.project.list",component:function(){return n.e("chunk-29431a59").then(n.bind(null,"d677"))},meta:{title:"project list"}},{path:"project/:id?",name:"user.doings.project.data",component:function(){return n.e("chunk-d5be605e").then(n.bind(null,"32c2"))},meta:{title:"project data"}},{path:"project-form/:id?",name:"user.doings.project.form",component:function(){return n.e("chunk-03c26537").then(n.bind(null,"ad88"))},meta:{title:"project"}},{path:"directions/:projectId?",name:"user.doings.direction.list",component:function(){return n.e("chunk-d67660d8").then(n.bind(null,"835c"))},meta:{title:"directions"}},{path:":projectId/direction-form/:id?",name:"user.doings.direction.form",component:function(){return n.e("chunk-ed920670").then(n.bind(null,"f490"))},meta:{title:"direction"}},{path:"lesson",name:"user.doings.lesson.list",component:function(){return n.e("chunk-34aad8e1").then(n.bind(null,"4c18"))},meta:{title:"lesson list"}},{path:"lesson/:id?",name:"user.doings.lesson",component:function(){return n.e("chunk-73c99eec").then(n.bind(null,"89e3"))},meta:{title:"lesson"}},{path:"lesson/:id/unit/:id?",name:"user.doings.lesson.unit",component:function(){return n.e("chunk-2d2261c5").then(n.bind(null,"e6ec"))},meta:{title:"lesson unit"}}]},{path:"projects",name:"user.projects",component:function(){return Promise.all([n.e("chunk-ff0a9dd6"),n.e("chunk-d1dba062")]).then(n.bind(null,"d817"))},meta:{title:"rest projects"}},{path:"settings",name:"user.settings",component:function(){return n.e("chunk-63d66a76").then(n.bind(null,"3131"))},meta:{title:"settings"}}],beforeEnter:function(e,t,n){"1"!==window.getCookie("authl")&&void 0===e.meta.forAll?n("/guest/projects"):n()}}),a={path:"/",name:"common",component:function(){return n.e("chunk-7a6157a2").then(n.bind(null,"1e4b"))},meta:{title:"home"},redirect:"/guest/projects",children:[{path:"/guest",name:"guest",component:function(){return n.e("about").then(n.bind(null,"d4fa"))},meta:{title:"home"},children:[{path:"projects",name:"guest.projects",component:function(){return Promise.all([n.e("chunk-ff0a9dd6"),n.e("chunk-00f1b9c7")]).then(n.bind(null,"92af"))},meta:{title:"home"}}]},{path:"sign-up",name:"register",component:function(){return n.e("chunk-737ebb16").then(n.bind(null,"cc4d"))},meta:{title:"register"}},{path:"sign-in",name:"login",component:function(){return n.e("chunk-097de584").then(n.bind(null,"d9c9"))},meta:{title:"login"}},{path:"mail/confirm-account/:hash",name:"confirm.account",component:function(){return n.e("chunk-5d5cf81a").then(n.bind(null,"29f6"))},meta:{title:"confirm.account"}},{path:"project-info/:id?",name:"project.data.info",component:function(){return n.e("chunk-d5be605e").then(n.bind(null,"32c2"))},meta:{title:"project data"}}],beforeEnter:function(e,t,n){"1"===window.getCookie("authl")?n("/user/news"):n()}},u=[a,c];r["default"].use(o["a"]);var i=new o["a"]({linkActiveClass:"link-active",mode:"history",base:"/",routes:u});t["a"]=i},b71e:function(e,t,n){"use strict";var r=n("262e"),o=n("2caf"),c=n("d4ec"),a=n("bee2"),u=n("6f9e"),i=function(){function e(t,n,r,o){Object(c["a"])(this,e),this.error=t,this.title=n,this.variant=r,this.autoHideDelay=o}return Object(a["a"])(e,[{key:"showError",value:function(){u["a"].$emit("SHOW_TOAST",{message:this.error,title:this.title,variant:this.variant,autoHideDelay:this.autoHideDelay})}}]),e}(),s=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e,r,o){return Object(c["a"])(this,n),t.call(this,e,r,"danger",o)}return n}(i),l=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e,r,o){return Object(c["a"])(this,n),t.call(this,e,r,"warning",o)}return n}(i),f={showApiError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error!",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,r=new s(e,t,n);r.showError()},showValidateError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Warning!",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,r=new l(e,t,n);r.showError()},handleUndefinedError:function(e){console.log(e)}};t["a"]=f},b869:function(e,t,n){"use strict";n.r(t),t["default"]={namespaced:!0,state:{windowWidth:0,widthExtraSmall:320,widthSmall:640,widthTablet:1024},mutations:{SET_WINDOW_WIDTH:function(e,t){e.windowWidth=t}},getters:{isExtraSmall:function(e){return e.windowWidth<=e.widthExtraSmall},isSmall:function(e){return e.windowWidth<=e.widthSmall},isTablet:function(e){return e.windowWidth<=e.widthTablet},isDesktop:function(e){return e.windowWidth>e.widthTablet}}}},bc2e:function(e,t,n){"use strict";n.r(t);var r=n("1328"),o=n("b71e"),c={project:{},projects:[]},a={project:function(e){return e.project}},u={FETCH_PROJECT_LIST:function(e,t){return r["a"].get("list",t).then((function(t){return e.commit("SET_PROJECT_LIST",t),t})).catch((function(e){console.log(e),o["a"].showApiError("")}))},FETCH_PROJECT:function(e,t){var n=t.id,c=t.dataToPlug;return r["a"].getItem(n,c).then((function(t){return console.log(t),e.commit("SET_PROJECT",t.data),t})).catch((function(e){console.log(e),o["a"].showApiError("")}))},CREATE_PROJECT:function(e,t){return r["a"].create(t).then((function(t){return console.log(t),e.commit("SET_PROJECT",t),t}))},EDIT_PROJECT:function(e,t){return r["a"].edit(t.resource,t.data).then((function(t){return console.log(t),e.commit("SET_PROJECT",t),t}))},DELETE_PROJECT:function(e,t){var n=t.id;return r["a"].delete(n).then((function(t){return e.commit("SET_PROJECT",{}),t}))}},i={SET_PROJECT:function(e,t){e.project=t},SET_PROJECT_LIST:function(e,t){e.projects=t}};t["default"]={state:c,actions:u,mutations:i,getters:a}},c7d4:function(e,t,n){"use strict";n.r(t);n("4160"),n("b64b"),n("159b"),n("96cf");var r=n("1da1"),o=n("d4ec"),c=n("bee2"),a=n("fd45"),u=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getCsrfToken",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["a"].get("profile/csrf-token",t);case 3:n=e.sent,r=n.headers["x-csrf-token"],window.localStorage.setItem("X-CSRF-Token",r),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["a"].post("profile/login",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["a"].post("profile/logout");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),i=function(){return{variable1:111,variable2:222,variable3:333}},s=i(),l={},f={reset:function(e){var t=e.commit;t("RESET")},FETCH_CSRF_TOKEN:function(e){return u.getCsrfToken().catch((function(e){console.log(e)}))},LOGIN:function(e,t){return u.login(t).then((function(t){return e.commit("SET_PROFILE",t.data.data),t})).catch((function(e){console.log(e)}))},LOGOUT:function(e,t){return u.logout(t).then((function(t){return e.commit("SET_PROFILE",{}),localStorage.removeItem("X-CSRF-Token"),t})).catch((function(e){console.log(e)}))}},d={RESET:function(e){var t=i();Object.keys(t).forEach((function(n){e[n]=t[n]}))}};t["default"]={state:s,getters:l,mutations:d,actions:f}},d307:function(e,t,n){var r={"./auth.js":"c7d4","./direction.js":"6547e","./dom.js":"b869","./index.js":"2a74","./messages.js":"8798","./profile.js":"2cc2","./project.js":"bc2e","./projectUser.js":"d3db","./user.js":"0f9a"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="d307"},d3db:function(e,t,n){"use strict";n.r(t);var r=n("1328"),o={projectUser:{},projectsUsers:[]},c={projectUser:function(e){return e.projectUser}},a={APPLY_PROJECT_USER:function(e,t){return r["a"].applyUser(t).then((function(t){return e.commit("SET_PROJECT_USER",t),t}))}},u={SET_PROJECT_USER:function(e,t){e.projectUser=t}};t["default"]={state:o,actions:a,mutations:u,getters:c}},eb88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("96cf");var r=n("1da1"),o=n("d4ec"),c=n("bee2"),a=n("fd45"),u=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return a["a"].query("user/".concat(e),t)}},{key:"getItem",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["a"].get("user",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["a"].post("user",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1?r[1]:void 0,e.next=4,a["a"].put("user/".concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}()},fd45:function(e,t,n){"use strict";n("99af"),n("d3b7");var r=n("2b0e"),o=n("bc3a"),c=n.n(o),a=n("a7fe"),u=n.n(a),i="https://studs.me/api/",s=n("b71e"),l=n("4360"),f=n("a18c"),d={init:function(){r["default"].use(u.a,c.a),r["default"].axios.defaults.baseURL=i,r["default"].axios.defaults.withCredentials=!0,r["default"].axios.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status&&(console.log(e.response),console.log(r["default"].store),l["a"].dispatch("LOGOUT").then((function(){l["a"].dispatch("FETCH_CSRF_TOKEN"),f["a"].push({name:"common"})}))),s["a"].showApiError(e.response.data.message)}))},setHeader:function(){r["default"].axios.defaults.headers.common["X-CSRF-Token"]=window.localStorage.getItem("X-CSRF-Token")},query:function(e,t){return new Promise((function(n,o){r["default"].axios.get(e,t).then((function(e){console.log(e),n(e)}))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r["default"].axios.get("".concat(e,"/").concat(t),n)},post:function(e,t){return this.setHeader(),new Promise((function(n,o){return r["default"].axios.post("".concat(e),t).then((function(e){n(e)}))}))},put:function(e,t){return this.setHeader(),new Promise((function(n,o){return r["default"].axios.put("".concat(e),t).then((function(e){n(e)}))}))},delete:function(e){return this.setHeader(),r["default"].axios.delete(e)}};t["a"]=d}});
//# sourceMappingURL=app.971282a6.js.map