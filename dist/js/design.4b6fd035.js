(function(t){function a(a){for(var i,o,r=a[0],d=a[1],c=a[2],m=0,u=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);l&&l(a);while(u.length)u.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],i=!0,r=1;r<e.length;r++){var d=e[r];0!==n[d]&&(i=!1)}i&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={design:0},s=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var l=d;s.push([0,"chunk-vendors","chunk-common"]),e()})({0:function(t,a,e){t.exports=e("6ce0")},"43d3":function(t,a,e){"use strict";e("b821")},"6ce0":function(t,a,e){"use strict";e.r(a);e("5246");var i,n=e("6b41"),s=(e("e17f"),e("2241")),o=(e("5f5f"),e("f253")),r=(e("8a58"),e("e41f")),d=(e("c3a6"),e("ad06")),c=(e("e7e5"),e("d399")),l=(e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("2b0e")),m=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"design"},[i("title-bar",{attrs:{title:"3D设计"}}),t.loading?i("Loading"):t._e(),i("img",{staticClass:"img2",attrs:{src:e("f923"),alt:""}}),t._m(0),"design"===t.footerTabId?i("section",{staticClass:"page-footer"},[i("div",{staticClass:"design-tabs-title"},[i("div",{staticClass:"back",on:{click:function(){return t.footerTabId="default"}}},[i("van-icon",{attrs:{name:"arrow-left"}}),t._v("返回 ")],1),i("a",{class:1===t.designTab?"active":"",on:{click:function(){t.designTab=1,t.edit3dPartType=1}}},[t._v("花头款式")]),i("a",{class:2===t.designTab?"active":"",on:{click:function(){t.designTab=2,t.edit3dPartType=2}}},[t._v("戒托款式")]),i("a",{class:3===t.designTab?"active":"",on:{click:function(){return t.designTab=3}}},[t._v("戒托材质")])]),i("div",{staticClass:"design-tabs-cont"},[1===t.designTab?i("div",{staticClass:"list"},t._l(t.$store.state.design.parts,(function(a,e){return i("div",{key:e,staticClass:"item",class:t.$store.state.design.partId===a.id?"active":"",on:{click:function(){t.changePartId(a.id)}}},[i("div",{staticClass:"img-box"},[i("i",{staticClass:"img-border"}),i("i",{staticClass:"parts-img img",style:{backgroundImage:"url(https://design.bavlo.com/PartRes/webImg/"+a.defaultImg+"!600)"}})]),i("div",{staticClass:"txt"},[t._v("花头"+t._s(t._f("formatIndex")(e)))])])})),0):t._e(),2===t.designTab?i("div",{staticClass:"list"},t._l(t.$store.state.design.mainParts,(function(a,e){return i("div",{key:e,staticClass:"item",class:t.$store.state.design.mainPartId===a.id?"active":"",on:{click:function(){t.changeMainPartId(a.id)}}},[i("div",{staticClass:"img-box"},[i("i",{staticClass:"img-border"}),i("i",{staticClass:"main-parts-img img",style:{backgroundImage:"url(https://design.bavlo.com/PartRes/webImg/"+a.defaultImg+"!600)"}})]),i("div",{staticClass:"txt"},[t._v("戒托"+t._s(t._f("formatIndex")(e)))])])})),0):t._e(),3===t.designTab?i("div",{staticClass:"list"},t._l(t.$store.state.design.metals,(function(a,e){return i("div",{key:e,staticClass:"item",class:t.$store.state.design.metalId===a.id?"active":"",on:{click:function(){t.changeMetalId(a.id)}}},[i("div",{staticClass:"img-box"},[i("i",{staticClass:"img-border"}),i("i",{staticClass:"metals-img img",style:{backgroundImage:"url(https://design.bavlo.com/IconRes/RoundMetalIcons/"+a.id+".png)"}})]),i("div",{staticClass:"txt"},[t._v(t._s(a.nameCn))])])})),0):t._e()])]):"diamond"===t.footerTabId?i("section",{staticClass:"page-footer"},[i("div",{staticClass:"design-tabs-title"},[i("div",{staticClass:"back",on:{click:function(){return t.footerTabId="default"}}},[i("van-icon",{attrs:{name:"arrow-left"}}),t._v("返回 ")],1),i("a",{staticClass:"active"},[t._v("选择主钻")])]),i("div",{staticClass:"design-tabs-cont"},[this.$store.state.design.diamondId?i("div",{staticClass:"diamond-detail"},[i("div",{staticClass:"diamond-info-cont"},[i("img",{staticClass:"diamond-img",attrs:{src:e("1c85"),alt:""}}),i("div",{staticClass:"diamond-info"},[i("p",[t._v("GIA "+t._s(t.$store.state.design.diamondInfo.size))]),i("p",[t._v("详情: "+t._s(t.$store.state.design.diamondInfo.detail||"_"))]),i("p",[t._v("售价 ¥ "+t._s(t.$store.state.design.diamondInfo.price||"-")+"元")])])]),i("a",{staticClass:"change-btn",on:{click:t.selectDiamond}},[i("van-icon",{attrs:{name:"exchange"}}),i("span",{staticClass:"txt"},[t._v("更换")])],1)]):i("img",{attrs:{src:e("e381"),alt:"",width:"100%"},on:{click:t.selectDiamond}})])]):"mark"===t.footerTabId?i("section",{staticClass:"page-footer"},[i("div",{staticClass:"design-tabs-title"},[i("div",{staticClass:"back",on:{click:t.markBack}},[i("van-icon",{attrs:{name:"arrow-left"}}),t._v("返回 ")],1),i("a",{staticClass:"active"},[t._v("文字印记")])]),i("div",{staticClass:"design-tabs-cont"},[i("div",{staticClass:"mark-cont"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.mark,expression:"mark"}],staticClass:"mark-input",attrs:{type:"text",maxlength:"16",placeholder:"印刻彼此名字或誓言(16字内)"},domProps:{value:t.mark},on:{keyup:t.onKeyup,input:function(a){a.target.composing||(t.mark=a.target.value)}}}),i("a",{staticClass:"mark-btn",on:{click:t.saveMark}},[t._v("确认")])])])]):i("section",{staticClass:"page-footer"},[i("div",{staticClass:"btns-group"},[i("a",{staticClass:"option",on:{click:function(){return t.footerTabId="design"}}},[i("i",{staticClass:"icon-design"}),i("span",{staticClass:"txt"},[t._v("设计")])]),i("a",{staticClass:"option",on:{click:function(){return t.footerTabId="diamond"}}},[i("i",{staticClass:"icon-diamond"}),i("span",{staticClass:"txt"},[t._v("选钻")])]),i("a",{staticClass:"option",on:{click:function(){return t.footerTabId="mark"}}},[i("i",{staticClass:"icon-mark"}),i("span",{staticClass:"txt"},[t._v("印记")])]),i("a",{staticClass:"option",on:{click:function(){return t.handPicker=!0}}},[i("i",{staticClass:"icon-try"}),i("span",{staticClass:"txt"},[t._v("手寸")])]),i("a",{staticClass:"option",on:{click:t.tryOn}},[i("i",{staticClass:"icon-try"}),i("span",{staticClass:"txt"},[t._v("试戴")])])]),i("div",{staticClass:"buy-group"},[i("div",{staticClass:"cost"},[t._v("¥ "+t._s(t._f("formatCost")(t.price)))]),i("div",{staticClass:"buy-btn",on:{click:t.confirmDesign}},[t._v("确认设计")])])]),i("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.handPicker,callback:function(a){t.handPicker=a},expression:"handPicker"}},[i("van-picker",{attrs:{"show-toolbar":"","default-index":"8",columns:t.handInch},on:{cancel:function(a){t.handPicker=!1},confirm:t.changeHandInch}})],1)],1)},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"web3d-cont"},[e("div",{staticStyle:{},attrs:{id:"web3d"}})])}],f=e("ade3"),g=e("1da1"),h=(e("96cf"),e("d3b7"),e("3ca3"),e("ddb0"),e("25f0"),e("fb6a"),e("a9e3"),e("159b"),e("b0c0"),e("865f")),p=e("9e2c"),v=e("4260"),b={components:{Loading:h["default"]},props:[],data:function(){return{handInch:p["d"],handPicker:!1,mark:"",footerTabId:"default",designTab:1,edit3dPartType:1,imgUrl:"",loading:!0,saveDesignInfo:null,design_bn:"",price:"-"}},computed:{},created:function(){this.$store.dispatch("loadUserInfo");var t=Object(v["a"])("diamondId");this.getDiamond(t,!0)},mounted:function(){var t=this;Promise.all([this.$store.dispatch("loadDesignInfo"),this.$store.dispatch("loadMetalList"),this.$store.dispatch("loadMetalWeb"),this.$store.dispatch("loadGemList"),this.$store.dispatch("loadGemWeb")]).then((function(){console.log("mounted -> data loaded -> init3D");var a=Object(v["a"])("bn"),e=Object(v["a"])("partId"),i=Object(v["a"])("mainPartId"),n=Object(v["a"])("metalId"),s=Object(v["a"])("mark"),o=Object(v["a"])("currentHandInch"),r=Object(v["a"])("diamondId");a?t.$store.dispatch("getDesignInfo",{design_bn:a}).then((function(d){t.saveDesignInfo=d.data,t.design_bn=a;var c=d.data,l=c.ring_size,m=c.diamond_id,u=c.ring_arm_id,f=c.flower_head_id,g=c.texture_id,h=c.ring_print,p=c.title;t.getDiamond(m),console.log({partId:e||f,mainPartId:i||u,metalId:n||g,mark:s||h,currentHandInch:o||l,diamondId:r||m,title:p}),t.mark=s||h||"",t.setRenderParams({partId:e||f,mainPartId:i||u,metalId:n||g,mark:s||h,currentHandInch:o||l,diamondId:r||m,title:p})})):t.setRenderParams({partId:e,mainPartId:i,metalId:n,mark:s,currentHandInch:o})}))},methods:(i={setRenderParams:function(t){var a=this;for(var e in t)t[e]||delete t[e];this.$store.commit("setState",t),setTimeout((function(){a.init3D()}),0)},getDiamond:function(t,a){t&&(this.$store.dispatch("getDiamondInfo",{id:t}),this.$store.commit("setState",{diamondId:t}),a&&(this.footerTabId="diamond"))},init3D:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){var e,i,n,s,o,r,d,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.$store.state.design,i=e.designInfo,n=e.partId,s=e.mainPartId,o=e.metalWeb,r=e.metalWebDefault,d=e.gemWeb,c=e.gemWebDefault,l=e.metalId,console.log("partId",n),t.my3d=Bavlo.initWeb3D(p["b"],"web3d",!1,p["e"],!1),t.my3d.onWindowResize(2),window.onresize=function(){t.my3d.onWindowResize(2)},t.my3d.initUserMatInfo(r,o,c,d),t.my3d.changeBackground("37,37,42"),t.my3d.loadVarDesign(i,s,n.toString()),setTimeout((function(){t.loading=!1,t.changeMetalId(l),t.my3d.changeCameraPos(!1,-45,85,-65)}),3e3);case 9:case"end":return a.stop()}}),a)})))()},confirmDesign:function(){var t=this,a=this.$store.state.design,e=a.currentHandInch,i=a.diamondId;e?i?(this.loading=!0,this.my3d.changeBackground("72,72,79"),this.my3d.changeCameraPos(!1,-45,85,-65),setTimeout((function(){var a=document.querySelector("#mainCanvas");t.imgUrl=t.my3d.getDesignImage(2*a.offsetWidth,2*a.offsetHeight),t.$store.dispatch("submitDesign",{image:t.imgUrl,bn:t.design_bn}).then((function(t){var a=t.data;console.log(a),location.href="/order/?bn=${data}"}))}),300)):this.$dialog.alert({title:"请选择钻石",message:"您未选择钻石，请选择钻石"}).then((function(){t.footerTabId="diamond"})):this.$dialog.alert({title:"请选择手寸",message:"您未选择手寸，请选择戒指手寸大小"}).then((function(){t.handPicker=!0}))},selectDiamond:function(){var t=this.$store.state.design,a=t.mark,e=t.mainPartId,i=t.partId,n=t.metalId,s=t.diamondId,o=t.currentHandInch,r={};r.mark=a,r.mainPartId=e,r.partId=i,r.metalId=n,r.diamondId=s,r.currentHandInch=o,r.bn=this.design_bn;var d="//"+location.host+location.pathname+"?";for(var c in r)r[c]&&(d+=c+"="+r[c]+"&");d=d.slice(0,d.length-1),location.href="/diamondList/?backUrl=".concat(encodeURIComponent(d))},tryOn:function(){},saveMark:function(){this.$store.commit("setState",{mark:this.mark}),this.my3d.printUserTextOfLayer(940,this.mark),this.my3d.changeCameraPos(!1,0,80,-60)},markBack:function(){this.footerTabId="default",this.my3d.setRotationState(!0)},onKeyup:function(t){"13"==t.keyCode&&this.saveMark()},changeHandInch:function(t){this.$store.commit("setState",{currentHandInch:t}),this.handPicker=!1,this.getPrice()},changePartId:function(t){console.log("partId",t);var a=this.my3d.getLoadModelState();2==a&&(this.my3d.switchPart(this.edit3dPartType,Number(t)),this.$store.commit("setState",{partId:t})),this.getPrice()},changeMainPartId:function(t){var a=this;console.log("mainPartId",t);var e=this.my3d.getLoadModelState();2==e&&(this.my3d.switchPart(this.edit3dPartType,Number(t)),this.$store.commit("setState",{mainPartId:t}),setTimeout((function(){a.mark&&(a.my3d.printUserTextOfLayer(940,a.mark),setTimeout((function(){a.my3d.setRotationState(!0)}),200))}),1e3)),this.getPrice()},changeMetalId:function(t){var a,e=this.$store.state.design.metals;e.forEach((function(e){+e.id===+t&&(a=e)})),console.log("changeMetalId",t,a),this.$store.commit("setState",{metalId:t}),a&&this.my3d.customizeMetalClass("金属图层",a),this.getPrice()}},Object(f["a"])(i,"tryOn",(function(){var t=this,a=this.$store.state.design.webModelPics;console.log(a),a&&a.length?this.hasModeltryOn():this.$store.dispatch("loadModelPicList").then((function(){t.hasModeltryOn()}))})),Object(f["a"])(i,"hasModeltryOn",(function(){var t=this.$store.state.design,a=t.webModelPics,e=t.userNo,i=this.my3d.getTryOnState();if(0===i){this.my3d.onWindowResize(0);var n=a[0];n.imgUrl="https://design.bavlo.com/WebModelPics/"+e+"/"+n.name,this.my3d.setModelTryonMode(!0,n)}else this.my3d.setModelTryonMode(!1,null),this.my3d.onWindowResize(2)})),Object(f["a"])(i,"getPrice",(function(){var t=this,a=this.$store.state.design,e=a.partId,i=a.mainPartId,n=a.metalId,s=a.currentHandInch,o=a.diamondId;this.$store.dispatch("getDesignPrice",{currentHandInch:s||13,partId:e,mainPartId:i,metalId:n,diamondId:o}).then((function(a){t.price=a}))})),i),filters:{formatIndex:function(t){return t+=1,t<10?"0"+t:t},formatCost:function(t){if("number"===typeof t&&!isNaN(t))return t.toString()+".00"}}},I=b,k=(e("43d3"),e("2877")),y=Object(k["a"])(I,m,u,!1,null,"350043cc",null),C=y.exports,_=e("4360"),P=e("a1e1");l["a"].use(c["a"]),l["a"].use(d["a"]),l["a"].use(r["a"]),l["a"].use(o["a"]),l["a"].use(s["a"]),l["a"].use(n["a"]),l["a"].component("title-bar",P["a"]),l["a"].config.productionTip=!1,new l["a"]({store:_["a"],render:function(t){return t(C)}}).$mount("#app")},b821:function(t,a,e){}});
//# sourceMappingURL=design.4b6fd035.js.map