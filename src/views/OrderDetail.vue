<template>
  <div class="order-detail">
    <title-bar title="订单详情" />
    <div class="cell">
      <div class="status">{{statusText[status]}}</div>
      <a  v-if="status == 3" class="order-btn" @click="order">支付尾款</a>
    </div>
    <div class="divider" />
    <div class="p8">
      <div class="cell p8">
        <div>
          <span>收货地址：</span>
          <van-tag round type="primary" class="tag">邮寄</van-tag>
        </div>
        <div>
          <span>{{address}}</span>
          <br/>
          <span>{{name}}</span>
          <span>{{tel}}</span>
        </div>
      </div>
    </div>
    <div class="divider" />
    <div class="order-info-box">
      <img class="img" src="../assets/diamond-list/diamond-view.png" alt="">
      <div class="detail">
        <p>钻石GIA证书: XXXXXX</p>
        <p>钻石金额: ¥1200</p>
        <p>3D定制订单 花头：NO1001</p>
        <p>3D定制订单 戒臂：NO1222</p>
      </div>
    </div>
    <div class="divider" />
    <div class="p8">
      <div class="cell">
        <span>定金</span>
        <span>¥100</span>
      </div>
      <div class="cell">
        <span>尾款</span>
        <span>¥100</span>
      </div>
      <div class="cell">
        <span>总金额</span>
        <span>¥100</span>
      </div>
    </div>
    <div class="divider" />
    <div class="p8">
      <div class="cell">
        <span>订单编号</span>
        <span>{{orderBn}}</span>
      </div>
      <div class="cell">
        <span>订单时间</span>
        <span>2021-10-1 20:20:20</span>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: 3,
        address: '翻斗大街翻斗花园',
        name: '胡图图',
        tel: '1888888888',
        orderBn: 'HH0354214952',
        statusText: {
          1: '已发货',
          2: '待发货',
          3: '待付尾款',
          4: '已付款'
        },
        payment_data: {
          vip: 0,
          menber_price: 3000,
          shop_price: 300
        }
      }
    },
    computed: {
    },
    methods: {
      order() {
        console.log(1, window.uni)
        if (window.uni) {
          window.uni.navigateTo({
            url: `../my/payments?data=${+this.orderBn}&shop=${JSON.stringify(this.payment_data)}`
          })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.order-detail {
  .p8 {
    padding: 8px;
  }
  .status {
    padding: 3%;
    font-size: 19px;
    font-weight: bold;
    text-align: left;
  }
  .divider {
    height: 10px;
    background-color: #f3f3f3;
  }
  .cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }
  .tag {
    background-color: #2b3f7d;
    padding: 2px 6px;
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
</style>
