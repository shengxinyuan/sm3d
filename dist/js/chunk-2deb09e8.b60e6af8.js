(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2deb09e8"],{"1ae8":function(s,i,t){"use strict";t.r(i);var o=function(){var s=this,i=s.$createElement,t=s._self._c||i;return s.orderInfo&&s.orderInfo.status?t("div",{staticClass:"order-detail"},[t("title-bar",{attrs:{title:"订单详情"}}),t("div",{staticClass:"cell"},[t("div",{staticClass:"status"},[s._v(s._s(s.statusList[s.orderInfo.status]))]),40==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.orderFinal}},[s._v("支付尾款")]):s._e(),10==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.orderBefore}},[s._v("支付定金")]):s._e(),60==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.delivered}},[s._v("确认收货")]):s._e(),45==s.orderInfo.status?t("a",{staticClass:"order-btn",on:{click:s.orderFinal}},[s._v("支付全款")]):s._e()]),t("div",{staticClass:"divider"}),t("div",{staticClass:"p8",attrs:{fz:""}},[t("div",{staticClass:"cell"},[t("span",[s._v("订单编号:")]),t("span",[s._v(s._s(s.orderInfo.bn))])]),t("div",{staticClass:"cell"},[t("span",[s._v("下单时间:")]),t("span",[s._v(s._s(s.orderInfo.create_time))])])]),t("div",{staticClass:"divider"}),t("div",{staticClass:"p8"},[t("div",{staticClass:"cell p8"},[t("div",[t("span",[s._v("收货地址：")]),t("van-tag",{staticClass:"tag",attrs:{round:"",type:"primary"}},[s._v("邮寄")])],1),t("div",[t("span",[s._v(s._s(s.orderInfo.address_info.address))]),t("br"),t("span",[s._v(s._s(s.orderInfo.address_info.name)+" - ")]),t("span",[s._v(s._s(s.orderInfo.address_info.tel))])])])]),t("div",{staticClass:"divider"}),t("div",{staticClass:"p8"},[s.orderInfo.user_info.is_vip?t("div",{staticClass:"cell delete"},[t("span",[s._v("原价")]),t("span",[s._v("¥ "+s._s(s.orderInfo.total_amount))])]):s._e(),t("div",{staticClass:"cell"},[t("span",[s._v("总金额")]),t("span",[s._v("¥ "+s._s(s.orderInfo.user_info.is_vip?this.orderInfo.total_vip:s.orderInfo.total_amount))])]),t("div",{staticClass:"cell"},[t("span",[s._v("定金")]),t("span",[s._v("¥ "+s._s(s.orderInfo.deposit))])]),t("div",{staticClass:"cell"},[t("span",[s._v("尾款")]),t("span",[s._v("¥ "+s._s(s.orderInfo.user_info.is_vip?s.orderInfo.total_vip-s.orderInfo.deposit:s.orderInfo.total_amount-s.orderInfo.deposit)+".00")])])]),t("div",{staticClass:"divider"}),t("div",{staticClass:"order-info-box"},[t("div",{staticClass:"cell"},[t("span",[s._v(s._s(this.title))])]),4!==s.orderInfo.good_type?t("div",{staticClass:"design-img",style:{backgroundImage:"url("+s.design_info.preview_image}}):t("div",{staticClass:"design-diamond",style:{backgroundImage:"url(https://img.alicdn.com/imgextra/i1/O1CN01L5tea41oZy6pUVPgm_!!6000000005240-49-tps-100-100.webp)"}}),4!==s.orderInfo.good_type?t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[s._v("定制详情")]),t("div",{staticClass:"cell"},[t("span",[s._v("类型:")]),t("span",[s._v(s._s(s.typeList[s.orderInfo.good_type]))])]),s._m(0),t("div",{staticClass:"cell"},[t("span",[s._v("钻石编号id:")]),t("span",[s._v(s._s(s.diamond_info.id))])]),t("div",{staticClass:"cell"},[t("span",[s._v("手寸:")]),t("span",[s._v(s._s(s.design_info.ring_size))])]),s.diamond_info.title?t("div",{staticClass:"cell"},[t("span",[s._v("刻字:")]),t("span",[s._v(s._s(s.design_info.title))])]):s._e()]):s._e(),t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[s._v("钻石详情")]),t("div",{staticClass:"cell"},[t("span",[s._v("颜色")]),t("span",[s._v(s._s(s.diamond_info&&s.diamond_info.color))])]),t("div",{staticClass:"cell"},[t("span",[s._v("净度")]),t("span",[s._v(s._s(s.diamond_info&&s.diamond_info.clarity))])]),t("div",{staticClass:"cell"},[t("span",[s._v("荧光")]),t("span",[s._v(s._s(s.diamond_info&&s.diamond_info.flr_intensity))])]),t("div",{staticClass:"cell"},[t("span",[s._v("抛光")]),t("span",[s._v(s._s(s.diamond_info&&s.diamond_info.polish))])]),t("div",{staticClass:"cell"},[t("span",[s._v("切工")]),t("span",[s._v(s._s(s.diamond_info&&s.diamond_info.cut))])]),t("div",{staticClass:"cell"},[t("span",[s._v("对称")]),t("span",[s._v(s._s(s.diamond_info&&s.diamond_info.symmetry))])])])]),t("div",{staticClass:"divider"})],1):s._e()},e=[function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"cell"},[t("span",[s._v("款式:")]),t("span",[s._v("圆款钻石定制")])])}],n=(t("99af"),t("8665")),a={data:function(){return{title:"3D定制订单",typeList:n["c"],sfTypeList:n["a"],statusList:n["b"],diamond_info:{},design_info:{},orderInfo:{status:3,member_id:0,deposit:0,total_vip:0,total_amount:0,address_info:{address:"",name:"",tel:""},user_info:{is_vip:0,balance:0}},payment_data:{vip:0,menber_price:3e3,shop_price:300}}},computed:{},created:function(){this.loadList()},methods:{loadList:function(){var s=this;this.$get({url:"/api/3d/order/detail",data:{order_bn:this.$route.query.bn||this.$route.query.diamond_id,good_type:this.$route.query.good_type}}).then((function(i){var t=i.status,o=i.data,e=i.message;1===t?(s.orderInfo=o,s.diamond_info=o.diamond_info,s.design_info=o.design_info||{},4===o.good_type&&(s.title="")):s.$toast.fail(e||"获取数据失败")})).catch((function(){}))},orderFinal:function(){this.order({vip:this.orderInfo.user_info.is_vip,menber_price:+this.orderInfo.user_info.balance,shop_price:this.orderInfo.user_info.is_vip?this.orderInfo.total_vip-this.orderInfo.deposit:this.orderInfo.total_amount-this.orderInfo.deposit},this.orderInfo.final_bn_id)},orderBefore:function(){this.order({vip:this.orderInfo.user_info.is_vip?1:0,menber_price:+this.orderInfo.user_info.balance,shop_price:this.orderInfo.deposit?+this.orderInfo.deposit:0},this.orderInfo.deposit_bn_id)},orderAll:function(){this.order({vip:this.orderInfo.user_info.is_vip?1:0,menber_price:+this.orderInfo.user_info.balance,shop_price:this.orderInfo.user_info.is_vip?this.orderInfo.total_vip:this.orderInfo.total_amount},this.orderInfo.bn)},order:function(s,i){window.uni&&window.uni.navigateTo({url:"../my/payments?data=".concat(i,"&shop=").concat(JSON.stringify(s),"&source=3d")})},delivered:function(){var s=this;this.$post({url:"/api/3d/order/confirm_delivered",data:{order_bn:this.orderInfo.bn}}).then((function(){s.$toast.success("确认收货成功"),s.loadList()})).catch((function(){}))}}},r=a,d=(t("e3dc"),t("2877")),_=Object(d["a"])(r,o,e,!1,null,"370f0718",null);i["default"]=_.exports},8665:function(s,i,t){"use strict";t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return e})),t.d(i,"a",(function(){return n}));var o={10:"待支付定金",20:"已支付定金",30:"已安排生产",40:"待支付尾款",45:"待支付",50:"已支付尾款",55:"已支付",60:"已发货",70:"确认收货",80:"售后",90:"取消订单"},e={1:"钻戒",2:"彩宝",3:"对戒",4:"钻石"},n={1:"邮寄",2:"代发",3:"自提",4:"送货上门"}},e3dc:function(s,i,t){"use strict";t("e619")},e619:function(s,i,t){}}]);
//# sourceMappingURL=chunk-2deb09e8.b60e6af8.js.map