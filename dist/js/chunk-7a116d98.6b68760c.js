(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a116d98"],{8665:function(s,i,t){"use strict";t.d(i,"b",(function(){return e})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return o}));var e={10:"待支付定金",20:"已支付定金",30:"已安排生产",40:"待支付尾款",50:"已支付尾款",60:"已发货",70:"确认收货",80:"售后",90:"取消订单"},r={1:"钻戒",2:"彩宝",3:"对戒"},o={1:"邮寄",2:"代发",3:"自提",4:"送货上门"}},"9d69":function(s,i,t){},d3bb:function(s,i,t){"use strict";t.r(i);var e=function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"order-detail"},[t("title-bar",{attrs:{title:"订单详情"}}),t("div",{staticClass:"cell"},[t("div",{staticClass:"status"},[s._v(s._s(s.statusList[s.orderInfo.status]))]),40==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.orderFinal}},[s._v("支付尾款")]):s._e(),10==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.orderBefore}},[s._v("支付定金")]):s._e(),60==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.delivered}},[s._v("确认收货")]):s._e()]),t("div",{staticClass:"divider"}),t("div",{staticClass:"p8"},[t("div",{staticClass:"cell p8"},[t("div",[t("span",[s._v("收货地址：")]),t("van-tag",{staticClass:"tag",attrs:{round:"",type:"primary"}},[s._v("邮寄")])],1),t("div",[t("span",[s._v(s._s(s.orderInfo.address_info.address))]),t("br"),t("span",[s._v(s._s(s.orderInfo.address_info.name)+" - ")]),t("span",[s._v(s._s(s.orderInfo.address_info.tel))])])])]),t("div",{staticClass:"divider"}),t("div",{staticClass:"order-info-box"},[t("img",{staticClass:"img",attrs:{src:s.orderInfo.design_info.preview_image,alt:""}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[s._v("3D定制订单")]),t("p",[s._v("类型: "+s._s(s.typeList[s.orderInfo.good_type]))]),t("p",[s._v("款式: 圆款钻石定制")]),t("p",[s._v("戒臂: "+s._s(s.orderInfo.design_info.flower_head_id))]),t("p",[s._v("花头: "+s._s(s.orderInfo.design_info.ring_arm_id))]),t("p",[s._v("钻石: "+s._s(s.orderInfo.design_info.diamond_id))]),t("p",[s._v("手寸: "+s._s(s.orderInfo.design_info.ring_size))]),s.orderInfo.design_info.title?t("p",[s._v("刻字: "+s._s(s.orderInfo.design_info.title))]):s._e()])]),t("div",{staticClass:"divider"}),t("div",{staticClass:"p8"},[t("div",{staticClass:"cell"},[t("span",[s._v("定金")]),t("span",[s._v("¥ "+s._s(s.orderInfo.deposit))])]),t("div",{staticClass:"cell"},[t("span",[s._v("尾款")]),t("span",[s._v("¥ "+s._s(s.orderInfo.user_info.is_vip?s.orderInfo.total_vip-s.orderInfo.deposit:s.orderInfo.total_amount-s.orderInfo.deposit))])]),s.orderInfo.user_info.is_vip?t("div",{staticClass:"cell delete"},[t("span",[s._v("原价")]),t("span",[s._v("¥ "+s._s(s.orderInfo.total_amount))])]):s._e(),t("div",{staticClass:"cell"},[t("span",[s._v("总金额")]),t("span",[s._v("¥ "+s._s(s.orderInfo.user_info.is_vip?this.orderInfo.total_vip:s.orderInfo.total_amount))])])]),t("div",{staticClass:"divider"}),t("div",{staticClass:"p8"},[t("div",{staticClass:"cell"},[t("span",[s._v("订单编号")]),t("span",[s._v(s._s(s.orderInfo.bn))])]),t("div",{staticClass:"cell"},[t("span",[s._v("下单时间")]),t("span",[s._v(s._s(s.orderInfo.create_time))])]),t("div",{staticClass:"cell"},[t("span",[s._v("更新时间")]),t("span",[s._v(s._s(s.orderInfo.update_time))])])]),t("div",{staticClass:"divider"})],1)},r=[],o=(t("99af"),t("8665")),n={data:function(){return{typeList:o["c"],sfTypeList:o["a"],statusList:o["b"],orderInfo:{status:3,member_id:0,deposit:0,total_vip:0,total_amount:0,address_info:{address:"",name:"",tel:""},design_info:{preview_image:"//zuanshi.nxm.wanheweb.com/uploads/designImage/20211019/design_223313_5661.png",ring_arm_id:0,flower_head_id:0,diamond_id:0,ring_size:0,title:0},user_info:{is_vip:0,balance:0}},payment_data:{vip:0,menber_price:3e3,shop_price:300}}},computed:{},created:function(){this.loadList()},methods:{loadList:function(){var s=this;this.$get({url:"/api/3d/order/detail",data:{order_bn:this.$route.query.bn}}).then((function(i){var t=i.status,e=i.data;1===t&&(s.orderInfo=e)})).catch((function(){}))},orderFinal:function(){this.order({vip:this.orderInfo.user_info.is_vip,menber_price:this.orderInfo.user_info.balance,shop_price:this.orderInfo.user_info.is_vip?this.orderInfo.total_vip-this.orderInfo.deposit:this.orderInfo.total_amount-this.orderInfo.deposit})},orderBefore:function(){this.order({vip:this.orderInfo.user_info.is_vip,menber_price:0,shop_price:this.orderInfo.deposit})},order:function(s){window.uni&&window.uni.navigateTo({url:"../my/payments?data=".concat(this.orderInfo.bn,"&shop=").concat(JSON.stringify(s))})},delivered:function(){var s=this;this.$post({url:"/api/3d/order/confirm_delivered",data:{order_bn:this.orderInfo.bn}}).then((function(){s.$toast.success("确认收货成功"),s.loadList()})).catch((function(){}))}}},a=n,d=(t("db35"),t("2877")),_=Object(d["a"])(a,e,r,!1,null,"110e7d97",null);i["default"]=_.exports},db35:function(s,i,t){"use strict";t("9d69")}}]);
//# sourceMappingURL=chunk-7a116d98.6b68760c.js.map