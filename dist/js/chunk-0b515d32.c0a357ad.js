(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b515d32"],{1086:function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||s(t)||Object(o["a"])(t)||r()}},"690e":function(t,e,i){"use strict";i("1086")},7295:function(t,e,i){"use strict";i("fe46")},8665:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var n={10:"待支付定金",20:"已支付定金",30:"已安排生产",40:"待支付尾款",45:"待支付",50:"已支付尾款",55:"已支付",60:"已发货",70:"确认收货",80:"售后",90:"取消订单"},a={1:"钻戒",2:"彩宝",3:"对戒",4:"钻石"},s={1:"邮寄",2:"代发",3:"自提",4:"送货上门"}},f35c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-list"},[i("title-bar",{attrs:{title:"我的3D定制订单",type:2}}),i("van-list",{attrs:{finished:t.finished,"finished-text":0===t.list.length?"订单列表暂为空":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return i("Item",{key:t.orderId,attrs:{info:t}})})),1)],1)},a=[],s=i("2909"),o=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-item"},[i("div",{staticClass:"order-number"},[i("span",{staticClass:"flex1"},[t._v("订单编号: "+t._s(t.info.bn))]),i("span",{staticClass:"red"},[t._v(t._s(t.statusList[t.info.status]))])]),i("div",{staticClass:"order-info-box"},[t.info.design_info&&t.info.design_info.preview_image?i("div",{staticClass:"design-img",style:{backgroundImage:"url("+t.info.design_info.preview_image}}):i("div",{staticClass:"design-diamond",style:{backgroundImage:"url(https://img.alicdn.com/imgextra/i3/O1CN01Lam6dK1ShpMPsD8nj_!!6000000002279-2-tps-600-600.png)"}}),i("div",{staticClass:"detail"},[i("p",{staticClass:"title"},[t._v(t._s(4===t.info.good_type?"钻石订单":"3D定制订单"))]),i("p",[t._v("类型: "+t._s(t.typeList[t.info.good_type]))]),1===t.info.good_type?i("p",[t._v("定金比例: "+t._s(t.info.deposit_ratio)+"%")]):t._e(),i("p",[t._v("收货方式: "+t._s(t.sfTypeList[t.info.sf_type]))]),i("p",[t._v("创建时间: "+t._s(t.info.create_time))])])]),i("div",{staticClass:"order-price"},[i("span",{staticClass:"price"},[t._v("合计：¥ "+t._s(t.info.user_info&&t.info.user_info.is_vip?t.info.total_vip:t.info.total_amount)+"元")]),i("a",{staticClass:"order-btn",on:{click:function(){t.detail(t.info)}}},[t._v("查看详情")])])])}),r=[],c=(i("d3b7"),i("25f0"),i("8665")),d={name:"orderItem",props:["info"],components:{},data:function(){return{typeList:c["c"],sfTypeList:c["a"],statusList:c["b"],loading:!1,finished:!1}},computed:{},methods:{detail:function(t){t.good_type,this.$router.push("/myOrderDetail?bn=".concat(t.bn,"&good_type=").concat(t.good_type))}},filters:{formatCost:function(t){if("number"===typeof t&&!isNaN(t))return t.toString()+".00"}}},f=d,u=(i("7295"),i("2877")),l=Object(u["a"])(f,o,r,!1,null,"7fafea82",null),p=l.exports,_={components:{Item:p},data:function(){return{loading:!1,finished:!1,list:[],page:1}},created:function(){this.$route.query.hasOwnProperty("token")&&localStorage.setItem("token",this.$route.query.token)},methods:{getList:function(){var t=this;this.$get({url:"/api/3d/order/list",data:{page:this.page}}).then((function(e){if(1===e.status){var i=e.data;t.list=1===t.page?i.data:[].concat(Object(s["a"])(t.list),Object(s["a"])(i.data)),t.page=i.current_page+1,t.finished=i.last_page===i.current_page||0===i.last_page,t.loading=!1}}))}}},g=_,m=(i("690e"),Object(u["a"])(g,n,a,!1,null,"29db4cc2",null));e["default"]=m.exports},fe46:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0b515d32.c0a357ad.js.map