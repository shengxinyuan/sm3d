(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8be7bf72"],{"069e":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bag"},[a("title-bar",{attrs:{title:"我的设计"}}),a("van-row",{staticClass:"bag-tab"},[a("van-col",{attrs:{span:"24"}},[a("van-tabs",{staticClass:"bag-tabs",model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[a("van-tab",{attrs:{title:"女戒方案"}},[t.isEmpty?a("van-row",[a("van-col",{staticClass:"bag-empty__height",attrs:{span:"24"}}),a("van-col",{staticClass:"bag-empty__img",attrs:{span:"24"}},[a("img",{attrs:{src:"https://h5.zbird.com/static/icons/design-empty.png",width:"50px",height:"66px"}})]),a("van-col",{attrs:{span:"24"}},[a("van-row",{staticClass:"bag-empty__p",attrs:{span:"24"}},[a("p",[t._v("人人都是设计师，您也可以！")])])],1),a("van-col",{attrs:{span:"24"}},[a("a",{attrs:{href:"/design"}},[a("van-button",{staticClass:"button",attrs:{type:"primary"}},[t._v("去智能定制")])],1)])],1):a("van-row",{staticClass:"bag-list"},[a("van-swipe",{staticClass:"my-swipe",attrs:{"show-indicators":!1,loop:!0},on:{change:t.onChange}},t._l(t.list,(function(s,n){return a("van-swipe-item",{key:n},[a("van-col",{staticClass:"bag-list__img",attrs:{span:"24"}},[a("van-col",{staticClass:"bag-empty__height",attrs:{span:"24"}}),a("div",{staticClass:"design-img",style:{backgroundImage:"url("+s.preview_image}})],1),a("van-col",{staticClass:"bag-list__p",attrs:{span:"24"}},[a("p",{staticClass:"bag-list__p--top"},[t._v(t._s(s.title))]),a("p",{staticClass:"bag-list__p--middle"},[t._v(t._s(s.ring_print))])])],1)})),1),a("van-col",{staticClass:"bag-list__buy",attrs:{span:"24"}},[a("van-button",{staticClass:"button bag-list__btn--buy",attrs:{type:"primary"},on:{click:t.jumpOrderConfirm}},[t._v("下单购买")])],1)],1)],1),t._e()],1)],1),a("van-col",{attrs:{span:"12"}},[a("div",{staticClass:"bag-tab__right"},[t._v(t._s(t.swiperIndex||1)+"/"+t._s(t.list&&t.list.length||"0"))])]),a("van-col",{attrs:{span:"24"}})],1),a("van-row",{staticClass:"bag-btns"},[a("van-col",{staticClass:"bag-btns__btn bag-btns__delete",on:{click:t.deleteDesign}},[a("van-row",[a("van-icon",{attrs:{name:"delete-o",color:"rgb(193, 177, 138)",size:"25"}})],1),a("van-row",[t._v("删除")])],1),a("van-col",{staticClass:"bag-btns__btn bag-btns__share",on:{click:t.share}},[a("van-row",[a("van-icon",{attrs:{name:"share-o",color:"rgb(193, 177, 138)",size:"25"}})],1),a("van-row",[t._v("分享")])],1),a("van-col",{staticClass:"bag-btns__btn bag-btns__share",on:{click:t.jumpDesign}},[a("van-row",[a("van-icon",{attrs:{name:"edit",color:"rgb(193, 177, 138)",size:"25"}})],1),a("van-row",[t._v("修改")])],1)],1)],1)},i=[],e={data:function(){return{active:2,bottomActive:0,isEmpty:!1,swiperIndex:0,currtBn:0,list:[]}},created:function(){this.loadList()},methods:{loadList:function(){var t=this;this.$get({url:"/api/3d/getMyDesign"}).then((function(s){t.list=s.data,t.currtBn=t.list.length?t.list[0].bn:0})).catch((function(){t.$toast.fail("获取数据失败，请稍后重试")}))},onChange:function(t){this.swiperIndex=t,this.currtBn=this.list[t].bn},deleteDesign:function(){var t=this;this.$dialog.confirm({title:"提示",message:"请确认是否要删除当前设计"}).then((function(){t.$post({url:"/api/3d/deleteDesign",data:{id:t.currtBn}}).then((function(s){"1"==s.status&&(t.loadList(),t.$toast.success("删除成功"))})).catch((function(){t.$toast.fail("删除失败")}))}))},jumpDesign:function(){window.location.href=window.location.origin+"/design?bn=".concat(this.currtBn)},share:function(){window.top.uni&&window.top.uni.share?window.top.uni.share({provider:"weixin",scene:"WXSceneSession",type:0,href:"http://zuanshi.dis.wanheweb.com/smsj/index.html#/pages/index/threedesign?url=share&bn=".concat(this.currtBn),title:"奢美珠宝",summary:"我在奢美珠宝设计了我的专属钻戒，快来看看吧！",imageUrl:"http://zuanshi.nxm.wanheweb.com/uploads/designImage/20211019/design_223313_5661.png",success:function(t){},fail:function(t){}}):window.location.href=window.location.origin+"/share?bn=".concat(this.currtBn)},jumpOrderConfirm:function(){this.$router.push("./orderConfirm?bn=".concat(this.currtBn))}}},c=e,o=(a("c665"),a("2877")),r=Object(o["a"])(c,n,i,!1,null,"50e8fb8b",null);s["default"]=r.exports},"56ab":function(t,s,a){},c665:function(t,s,a){"use strict";a("56ab")}}]);
//# sourceMappingURL=chunk-8be7bf72.33fe4ba0.js.map