<template>
  <div class="order-item" >
    <div class="order-number">
      <span class="flex1">订单编号: {{info.bn}}</span>
      <span class="red">{{statusList[info.status]}}</span>
    </div>
    <div class="order-info-box">
      <div class="design-img" v-if="info.design_info && info.design_info.preview_image" :style="{ backgroundImage: 'url(' + info.design_info.preview_image +'',}"></div>
      <div class="detail">
        <p class="title">3D定制订单</p>
        <p>类型: {{typeList[info.good_type]}}</p>
        <p>定金比例: {{info.deposit_ratio}}%</p>
        <p>收货方式: {{sfTypeList[info.sf_type]}}</p>
        <p>创建时间: {{info.create_time}}</p>
      </div>
    </div>
    <div class="order-price">
      <span class="price">合计：¥ {{ info.total_amount }}</span>
      <a class="order-btn" @click="() => {detail(info.bn)}">查看详情</a>
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
    detail(bn) {
      this.$router.push(`/orderDetail?bn=${bn}`)
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
