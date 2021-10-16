<template>
  <div class="order-item" @click="() => {detail(info.id)}">
    <div class="order-number">
      <span class="flex1">订单编号：HH12312313</span>
      <span class="red">已下单</span>
    </div>
    <div class="order-info-box">
      <img class="img" src="../../../assets/diamond-list/diamond-view.png" alt="">
      <div class="detail">
        <p class="title">3D定制订单</p>
        <p>钻石GIA证书: XXXXXX</p>
        <p>钻石金额: ¥1200</p>
        <p>3D定制订单 花头：NO1001</p>
        <p>3D定制订单 戒臂：NO1222</p>
      </div>
    </div>
    <div class="order-price">
      <span class="price">合计：¥1000</span>
      <a class="order-btn">支付尾款</a>
    </div>
  </div>
</template>

<script>
import { getUrlParam } from '../../../util/index'

export default {
  name: 'orderItem',
  props: ['info'],
  components: {},
  data() {
    return {
      loading: false,
      finished: false,
    };
  },
  computed: {},
  methods: {
    detail(id) {
    },
  },
};
</script>

<style lang="scss" scoped>
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
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
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
      line-height: 1.5;
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
