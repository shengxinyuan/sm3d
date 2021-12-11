<template>
  <div class="order-item" >
    <div class="order-number">
      <span class="flex1">订单编号: {{info.bn}}</span>
      <span class="red">{{statusList[info.status]}}</span>
    </div>
    <div class="order-info-box">
      <div class="design-img" v-if="info.design_info && info.design_info.preview_image" :style="{ backgroundImage: 'url(' + info.design_info.preview_image +'',}"></div>
      <div class="design-diamond" v-else :style="{ backgroundImage: 'url(https://img.alicdn.com/imgextra/i3/O1CN01Lam6dK1ShpMPsD8nj_!!6000000002279-2-tps-600-600.png)'}"></div>
      <div class="detail">
        <p class="title">{{ info.good_type === 4 ? '钻石订单' : '3D定制订单' }}</p>
        <p>类型: {{typeList[info.good_type]}}</p>
        <p v-if="info.good_type === 1">定金比例: {{info.deposit_ratio}}%</p>
        <p>收货方式: {{sfTypeList[info.sf_type]}}</p>
        <p>创建时间: {{info.create_time}}</p>
      </div>
    </div>
    <div class="order-price">
      <span class="price">合计：¥ {{info.user_info && info.user_info.is_vip ? info.total_vip : info.total_amount}}元</span>
      <a class="order-btn" @click="() => {detail(info)}">查看详情</a>
    </div>
  </div>
</template>

<script>
import { statusList, typeList, sfTypeList } from '../../../const/order'

export default {
  name: 'orderItem',
  props: ['info'],
  components: {},
  data() {
    return {
      typeList,
      sfTypeList,
      statusList,
      loading: false,
      finished: false,
    };
  },
  computed: {},
  methods: {
    detail(info) {
      if (info.good_type === 4) {
        this.$router.push(`/myOrderDetail?bn=${info.bn}&good_type=${info.good_type}`)
      } else {
        this.$router.push(`/myOrderDetail?bn=${info.bn}&good_type=${info.good_type}`)
      }
    },
  },
  filters: {
    formatCost(num) {
      if (typeof num === 'number' && !isNaN(num) ) {
        return num.toString() + '.00'
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.design-img {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-size: 100px 160px;
  background-position: center;
  
}
.design-diamond {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-size: 100px 100px;
  background-position: center;
}
.flex1 {
  flex: 1;
}
.red {
  color: #ce4718;
}
.order-item {
  background: #fff;
  border-radius: 5px;
  margin: 10px 10px 0 10px;
  overflow: hidden;
  align-items: center;
  padding: 0 15px;
  .order-number {
    height: 45px;
    line-height: 45px;
    border-bottom: 0.5px solid #eee;
    display: flex;
    & > span {
      display: block;
    }
  }
  .order-info-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 6px 0;

    .img {
      display: block;
      width: 100px;
      height: 100px;
    }
    .detail {
      flex: 1;
      margin-left: 10px;
      color: #999;
      font-size: 12px;
      line-height: 1.8;
      & > p {
        margin: 0;
      }
      .title {
        color: #303133;
        line-height: 30px;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
  .order-price {
    height: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 15px;
    .price {
      flex: 1;
    }
    .order-btn {
      background: linear-gradient(#f82222, #b51616);
      border-radius: 25px;
      background-repeat: no-repeat;
      background-size: cover;
      width: 73px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      margin-left: 12px;
      color: #fff;
      text-align: center;
    }
  }
  
}
</style>
