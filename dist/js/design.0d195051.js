(function(t){function e(e){for(var n,o,r=e[0],c=e[1],d=e[2],m=0,u=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={design:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors","chunk-common"]),a()})({0:function(t,e,a){t.exports=a("6ce0")},"1c85":function(t,e,a){t.exports=a.p+"img/diamond.eb705317.webp"},"3ba0":function(t,e,a){},4260:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));a("ac1f"),a("5319"),a("d3b7"),a("4d63"),a("25f0"),a("466d"),a("841c"),a("159b"),a("1276");var n=function(t){var e=new RegExp("(^|&)".concat(t,"=([^&]*)(&|$)")),a=window.location.search.substr(1).match(e);return null!=a?unescape(a[2]):null};function i(t){var e=t||window.location.search,a={},n=/[?&][^?&]+=[^?&]+/g,i=e.match(n);return i&&i.forEach((function(t){var e=t.substring(1).split("="),n=decodeURIComponent(e[0]),i=decodeURIComponent(e[1]);a[n]=i})),a}},"5a48":function(t,e,a){"use strict";a("3ba0")},"6ce0":function(t,e,a){"use strict";a.r(e);a("5246");var n=a("6b41"),i=(a("e17f"),a("2241")),s=(a("5f5f"),a("f253")),o=(a("8a58"),a("e41f")),r=(a("c3a6"),a("ad06")),c=(a("e7e5"),a("d399")),d=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"design"},[n("title-bar",{attrs:{title:"3D设计"}}),t.loading?n("Loading"):t._e(),n("img",{staticClass:"img2",attrs:{src:a("f923"),alt:""}}),t._m(0),"design"===t.footerTabId?n("section",{staticClass:"page-footer"},[n("div",{staticClass:"design-tabs-title"},[n("div",{staticClass:"back",on:{click:function(){return t.footerTabId="default"}}},[n("van-icon",{attrs:{name:"arrow-left"}}),t._v("返回 ")],1),n("a",{class:1===t.designTab?"active":"",on:{click:function(){t.designTab=1,t.edit3dPartType=1}}},[t._v("花头款式")]),n("a",{class:2===t.designTab?"active":"",on:{click:function(){t.designTab=2,t.edit3dPartType=2}}},[t._v("戒托款式")]),n("a",{class:3===t.designTab?"active":"",on:{click:function(){return t.designTab=3}}},[t._v("戒托材质")])]),n("div",{staticClass:"design-tabs-cont"},[1===t.designTab?n("div",{staticClass:"list"},t._l(t.$store.state.design.parts,(function(e,a){return n("div",{key:a,staticClass:"item",class:t.$store.state.design.partId===e.id?"active":"",on:{click:function(){t.changePartId(e.id)}}},[n("div",{staticClass:"img-box"},[n("i",{staticClass:"img-border"}),n("i",{staticClass:"parts-img img",style:{backgroundImage:"url(https://design.bavlo.com/PartRes/webImg/"+e.defaultImg+"!600)"}})]),n("div",{staticClass:"txt"},[t._v("花头"+t._s(t._f("formatIndex")(a)))])])})),0):t._e(),2===t.designTab?n("div",{staticClass:"list"},t._l(t.$store.state.design.mainParts,(function(e,a){return n("div",{key:a,staticClass:"item",class:t.$store.state.design.mainPartId===e.id?"active":"",on:{click:function(){t.changeMainPartId(e.id)}}},[n("div",{staticClass:"img-box"},[n("i",{staticClass:"img-border"}),n("i",{staticClass:"main-parts-img img",style:{backgroundImage:"url(https://design.bavlo.com/PartRes/webImg/"+e.defaultImg+"!600)"}})]),n("div",{staticClass:"txt"},[t._v("戒托"+t._s(t._f("formatIndex")(a)))])])})),0):t._e(),3===t.designTab?n("div",{staticClass:"list"},t._l(t.$store.state.design.metals,(function(e,a){return n("div",{key:a,staticClass:"item",class:t.$store.state.design.metalId===e.id?"active":"",on:{click:function(){t.changeMetalId(e.id)}}},[n("div",{staticClass:"img-box"},[n("i",{staticClass:"img-border"}),n("i",{staticClass:"metals-img img",style:{backgroundImage:"url(https://design.bavlo.com/IconRes/RoundMetalIcons/"+e.id+".png)"}})]),n("div",{staticClass:"txt"},[t._v(t._s(e.nameCn))])])})),0):t._e()])]):"diamond"===t.footerTabId?n("section",{staticClass:"page-footer"},[n("div",{staticClass:"design-tabs-title"},[n("div",{staticClass:"back",on:{click:function(){return t.footerTabId="default"}}},[n("van-icon",{attrs:{name:"arrow-left"}}),t._v("返回 ")],1),n("a",{staticClass:"active"},[t._v("选择主钻")])]),n("div",{staticClass:"design-tabs-cont"},[this.$store.state.design.diamondId?n("div",{staticClass:"diamond-detail"},[n("div",{staticClass:"diamond-info-cont"},[n("img",{staticClass:"diamond-img",attrs:{src:a("1c85"),alt:""}}),n("div",{staticClass:"diamond-info"},[n("p",[t._v("GIA "+t._s(t.$store.state.design.diamondInfo.size))]),n("p",[t._v("详情: "+t._s(t.$store.state.design.diamondInfo.detail||"_"))]),n("p",[t._v("售价 ¥ "+t._s(t.$store.state.design.diamondInfo.price||"-")+"元")])])]),n("a",{staticClass:"change-btn",on:{click:t.selectDiamond}},[n("van-icon",{attrs:{name:"exchange"}}),n("span",{staticClass:"txt"},[t._v("更换")])],1)]):n("img",{attrs:{src:a("e381"),alt:"",width:"100%"},on:{click:t.selectDiamond}})])]):"mark"===t.footerTabId?n("section",{staticClass:"page-footer"},[n("div",{staticClass:"design-tabs-title"},[n("div",{staticClass:"back",on:{click:t.markBack}},[n("van-icon",{attrs:{name:"arrow-left"}}),t._v("返回 ")],1),n("a",{staticClass:"active"},[t._v("文字印记")])]),n("div",{staticClass:"design-tabs-cont"},[n("div",{staticClass:"mark-cont"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mark,expression:"mark"}],staticClass:"mark-input",attrs:{type:"text",maxlength:"16",placeholder:"印刻彼此名字或誓言(16字内)"},domProps:{value:t.mark},on:{keyup:t.onKeyup,input:function(e){e.target.composing||(t.mark=e.target.value)}}}),n("a",{staticClass:"mark-btn",on:{click:t.saveMark}},[t._v("确认")])])])]):n("section",{staticClass:"page-footer"},[n("div",{staticClass:"btns-group"},[n("a",{staticClass:"option",on:{click:function(){return t.footerTabId="design"}}},[n("i",{staticClass:"icon-design"}),n("span",{staticClass:"txt"},[t._v("设计")])]),n("a",{staticClass:"option",on:{click:function(){return t.footerTabId="diamond"}}},[n("i",{staticClass:"icon-diamond"}),n("span",{staticClass:"txt"},[t._v("选钻")])]),n("a",{staticClass:"option",on:{click:function(){return t.footerTabId="mark"}}},[n("i",{staticClass:"icon-mark"}),n("span",{staticClass:"txt"},[t._v("印记")])]),n("a",{staticClass:"option",on:{click:t.openHandInch}},[n("i",{staticClass:"icon-hand"}),n("span",{staticClass:"txt"},[t._v("手寸")])]),n("a",{staticClass:"option",on:{click:t.tryOn}},[n("i",{staticClass:"icon-try"}),n("span",{staticClass:"txt"},[t._v("试戴")])])]),n("div",{staticClass:"buy-group"},[n("div",{staticClass:"cost"},[t._v("¥ "+t._s(t._f("formatCost")(t.price)))]),n("div",{staticClass:"buy-btn",on:{click:t.confirmDesign}},[t._v("确认设计")])])]),n("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.handPicker,callback:function(e){t.handPicker=e},expression:"handPicker"}},[n("van-picker",{ref:"picker",attrs:{"show-toolbar":"",columns:[{values:t.handInch,defaultIndex:8}]},on:{cancel:function(e){t.handPicker=!1},confirm:t.changeHandInch}})],1)],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"web3d-cont"},[a("div",{staticStyle:{},attrs:{id:"web3d"}})])}],u=a("1da1"),f=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("25f0"),a("fb6a"),a("159b"),a("a9e3"),a("b0c0"),a("865f")),g=a("9e2c"),h=a("4260"),p={components:{Loading:f["default"]},props:[],data:function(){return{handInch:g["d"],handPicker:!1,mark:"",footerTabId:"default",designTab:1,edit3dPartType:1,imgUrl:"",loading:!0,saveDesignInfo:null,design_bn:"",price:"-"}},computed:{},created:function(){this.$store.dispatch("loadUserInfo");var t=Object(h["a"])("diamondId");this.getDiamond(t,!0)},mounted:function(){var t=this;Promise.all([this.$store.dispatch("loadDesignInfo"),this.$store.dispatch("loadMetalList"),this.$store.dispatch("loadMetalWeb"),this.$store.dispatch("loadGemList"),this.$store.dispatch("loadGemWeb")]).then((function(){console.log("mounted -> data loaded -> init3D");var e=Object(h["a"])("bn"),a=Object(h["a"])("partId"),n=Object(h["a"])("mainPartId"),i=Object(h["a"])("metalId"),s=Object(h["a"])("mark"),o=Object(h["a"])("currentHandInch"),r=Object(h["a"])("diamondId");e?t.$store.dispatch("getDesignInfo",{design_bn:e}).then((function(c){t.saveDesignInfo=c.data,t.design_bn=e;var d=c.data,l=d.ring_size,m=d.diamond_id,u=d.ring_arm_id,f=d.flower_head_id,g=d.texture_id,h=d.ring_print,p=d.title;t.getDiamond(m),console.log("detail",{partId:a||f,mainPartId:n||u,metalId:i||g,mark:s||h,currentHandInch:o||l,diamondId:r||m,title:p}),t.mark=s||h||"",t.setRenderParams({partId:a||f,mainPartId:n||u,metalId:i||g,mark:s||h,currentHandInch:o||l,diamondId:r||m,title:p})})):t.setRenderParams({partId:a,mainPartId:n,metalId:i,mark:s,currentHandInch:o})}))},methods:{setRenderParams:function(t){var e=this;for(var a in t)t[a]||delete t[a];this.$store.commit("setState",t),setTimeout((function(){e.init3D()}),0)},getDiamond:function(t,e){t&&(this.$store.dispatch("getDiamondInfo",{id:t}),this.$store.commit("setState",{diamondId:t}),e&&(this.footerTabId="diamond"))},init3D:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s,o,r,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.$store.state.design,n=a.designInfo,i=a.partId,s=a.mainPartId,o=a.metalWeb,r=a.metalWebDefault,c=a.gemWeb,d=a.gemWebDefault,a.metalId,console.log("partId",i),t.my3d=Bavlo.initWeb3D(g["b"],"web3d",!1,g["e"],!1),t.my3d.onWindowResize(2),window.onresize=function(){t.my3d.onWindowResize(2)},t.my3d.initUserMatInfo(r,o,d,c),t.my3d.changeBackground("37,37,42"),t.my3d.loadVarDesign(n,s,i.toString()),t.loaded();case 9:case"end":return e.stop()}}),e)})))()},loaded:function(){var t=this;setTimeout((function(){if(2!==t.my3d.getLoadModelState())t.loaded();else{var e=t.$store.state.design.metalId;t.loading=!1,t.my3d.changeCameraPos(!1,-45,85,-65),t.changeMetalId(e),t.mark&&t.my3d.printUserTextOfLayer(940,t.mark)}}),1e3)},confirmDesign:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.state.design,n=a.currentHandInch,i=a.diamondId,n){e.next=4;break}return t.$dialog.alert({title:"请选择手寸",message:"您未选择手寸，请选择戒指手寸大小"}).then((function(){t.handPicker=!0})),e.abrupt("return");case 4:if(i){e.next=7;break}return t.$dialog.alert({title:"请选择钻石",message:"您未选择钻石，请选择钻石"}).then((function(){t.footerTabId="diamond"})),e.abrupt("return");case 7:return s=t.my3d.getTryOnState(),0!==s&&(t.my3d.setModelTryonMode(!1,null),t.my3d.onWindowResize(2)),e.next=11,new Promise((function(t){return setTimeout(t,200)}));case 11:return t.loading=!0,t.my3d.changeBackground("72,72,79"),t.my3d.changeCameraPos(!1,-45,85,-65),e.next=16,new Promise((function(t){return setTimeout(t,200)}));case 16:o=document.querySelector("#mainCanvas"),t.imgUrl=t.my3d.getDesignImage(2*o.offsetWidth,2*o.offsetHeight),t.$store.dispatch("submitDesign",{image:t.imgUrl,bn:t.design_bn}).then((function(t){var e=t.data;location.href="/order/?bn=".concat(e)})).catch((function(t){var e=t.message;console.log(e)}));case 19:case"end":return e.stop()}}),e)})))()},selectDiamond:function(){var t=this.$store.state.design,e=t.mark,a=t.mainPartId,n=t.partId,i=t.metalId,s=t.diamondId,o=t.currentHandInch,r={};r.mark=e,r.mainPartId=a,r.partId=n,r.metalId=i,r.diamondId=s,r.currentHandInch=o,r.bn=this.design_bn;var c="//"+location.host+location.pathname+"?";for(var d in r)r[d]&&(c+=d+"="+r[d]+"&");c=c.slice(0,c.length-1),location.href="/diamondList/?backUrl=".concat(encodeURIComponent(c))},saveMark:function(){this.$store.commit("setState",{mark:this.mark}),this.my3d.printUserTextOfLayer(940,this.mark),this.my3d.changeCameraPos(!1,0,80,-60)},markBack:function(){this.footerTabId="default",this.my3d.setRotationState(!0)},onKeyup:function(t){"13"==t.keyCode&&this.saveMark()},changeHandInch:function(t){console.log("handInch",t),this.$store.commit("setState",{currentHandInch:t[0]}),this.handPicker=!1,this.getPrice()},openHandInch:function(){var t=this;this.handPicker=!0;var e=this.$store.state.design.currentHandInch;this.$nextTick((function(){if(e){var a=8;g["d"].forEach((function(t,n){+t===+e&&(a=n)})),t.$refs.picker.setIndexes([a])}}))},changePartId:function(t){console.log("partId",t);var e=this.my3d.getLoadModelState();2==e&&(this.my3d.switchPart(this.edit3dPartType,Number(t)),this.$store.commit("setState",{partId:t})),this.getPrice()},changeMainPartId:function(t){var e=this;console.log("mainPartId",t);var a=this.my3d.getLoadModelState();2==a&&(this.my3d.switchPart(this.edit3dPartType,Number(t)),this.$store.commit("setState",{mainPartId:t}),setTimeout((function(){e.mark&&(e.my3d.printUserTextOfLayer(940,e.mark),setTimeout((function(){e.my3d.setRotationState(!0)}),200))}),1e3)),this.getPrice()},changeMetalId:function(t){var e,a=this.$store.state.design.metals;a.forEach((function(a){+a.id===+t&&(e=a)})),console.log("changeMetalId",t,e),this.$store.commit("setState",{metalId:t}),e&&this.my3d.customizeMetalClass("金属图层",e),this.getPrice()},tryOn:function(){var t=this,e=this.$store.state.design.webModelPics;e&&e.length?this.hasModeltryOn():this.$store.dispatch("loadModelPicList").then((function(){t.hasModeltryOn()}))},hasModeltryOn:function(){var t=this.$store.state.design,e=t.webModelPics,a=t.userNo,n=this.my3d.getTryOnState();if(0===n){this.my3d.onWindowResize(0);var i=e[0];i.imgUrl="https://design.bavlo.com/WebModelPics/"+a+"/"+i.name,this.my3d.setModelTryonMode(!0,i)}else this.my3d.setModelTryonMode(!1,null),this.my3d.onWindowResize(2)},getPrice:function(){var t=this,e=this.$store.state.design,a=e.partId,n=e.mainPartId,i=e.metalId,s=e.currentHandInch,o=e.diamondId;this.$store.dispatch("getDesignPrice",{currentHandInch:s||13,partId:a,mainPartId:n,metalId:i,diamondId:o}).then((function(e){t.price=e}))}},filters:{formatIndex:function(t){return t+=1,t<10?"0"+t:t},formatCost:function(t){if("number"===typeof t&&!isNaN(t))return t.toString()+".00"}}},v=p,b=(a("5a48"),a("2877")),I=Object(b["a"])(v,l,m,!1,null,"0108e6a0",null),k=I.exports,y=a("4360"),C=a("a1e1");d["a"].use(c["a"]),d["a"].use(r["a"]),d["a"].use(o["a"]),d["a"].use(s["a"]),d["a"].use(i["a"]),d["a"].use(n["a"]),d["a"].component("title-bar",C["a"]),d["a"].config.productionTip=!1,new d["a"]({store:y["a"],render:function(t){return t(k)}}).$mount("#app")},e381:function(t,e,a){t.exports=a.p+"img/add-diamond.15c16f74.png"}});
//# sourceMappingURL=design.0d195051.js.map