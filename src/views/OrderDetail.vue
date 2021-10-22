<template>
  <div class="order-detail">
    <title-bar title="订单详情" />
    <div class="cell">
      <div class="status">{{statusList[orderInfo.status]}}</div>
      <a  v-if="orderInfo.status == 40" class="order-btn" @click="orderFinal">支付尾款</a>
      <a  v-if="orderInfo.status == 10" class="order-btn" @click="orderBefore">支付定金</a>
      <a  v-if="orderInfo.status == 60" class="order-btn" @click="delivered">确认收货</a>
    </div>
    <div class="divider" />
    <div class="p8">
      <div class="cell p8">
        <div>
          <span>收货地址：</span>
          <van-tag round type="primary" class="tag">邮寄</van-tag>
        </div>
        <div>
          <span>{{orderInfo.address_info.address}}</span>
          <br/>
          <span>{{orderInfo.address_info.name}} - </span>
          <span>{{orderInfo.address_info.tel}}</span>
        </div>
      </div>
    </div>
    <div class="divider" />
    <div class="order-info-box">
      <div class="design-img" :style="{ backgroundImage: 'url(' +orderInfo.design_info.preview_image+'',}"></div>
      <div class="detail">
        <p class="title">3D定制订单</p>
        <p>类型: {{typeList[orderInfo.good_type]}}</p>
        <p>款式: 圆款钻石定制</p>
        <p>戒臂: {{orderInfo.design_info.flower_head_id}}</p>
        <p>花头: {{orderInfo.design_info.ring_arm_id}}</p>
        <p>钻石: {{orderInfo.design_info.diamond_id}}</p>
        <p>手寸: {{orderInfo.design_info.ring_size}}</p>
        <p v-if="orderInfo.design_info.title">刻字: {{orderInfo.design_info.title}}</p>
      </div>
    </div>
    <div class="divider" />
    <div class="p8">
      <div class="cell">
        <span>定金</span>
        <span>¥ {{orderInfo.deposit}}</span>
      </div>
      <div class="cell">
        <span>尾款</span>
        <span>¥ {{(orderInfo.user_info.is_vip ? orderInfo.total_vip - orderInfo.deposit : orderInfo.total_amount - orderInfo.deposit)}}</span>
      </div>
      <div class="cell delete" v-if="orderInfo.user_info.is_vip">
        <span>原价</span>
        <span>¥ {{orderInfo.total_amount}}</span>
      </div>
      <div class="cell">
        <span>总金额</span>
        <span>¥ {{orderInfo.user_info.is_vip ? this.orderInfo.total_vip : orderInfo.total_amount}}</span>
      </div>
    </div>
    <div class="divider" />
    <div class="p8">
      <div class="cell">
        <span>订单编号</span>
        <span>{{orderInfo.bn}}</span>
      </div>
      <div class="cell">
        <span>下单时间</span>
        <span>{{orderInfo.create_time}}</span>
      </div>
      <div class="cell">
        <span>更新时间</span>
        <span>{{orderInfo.update_time}}</span>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
import { statusList, typeList, sfTypeList } from '../const/order'
  export default {
    data() {
      return {
        typeList,
        sfTypeList,
        statusList,
        orderInfo: {
          status: 3,
          member_id: 0,
          deposit: 0,
          total_vip: 0,
          total_amount: 0,
          address_info: {
            address: '',
            name: '',
            tel: ''
          },
          design_info: {
            preview_image: '//zuanshi.nxm.wanheweb.com/uploads/designImage/20211019/design_223313_5661.png',
            ring_arm_id: 0,
            flower_head_id: 0,
            diamond_id: 0,
            ring_size: 0,
            title: 0,
          },
          user_info: {
            is_vip: 0,
            balance: 0,
          }
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
    created () {
      this.loadList()
    },
    methods: {
      loadList() {
        this.$get({
            url: '/api/3d/order/detail',
            data: {
              order_bn: this.$route.query.bn
            }
          }).then(({ status, data }) => {
            if (status === 1) {
              this.orderInfo = data
            }
          }).catch(() => {})
      },
      orderFinal () {
        this.order({
          vip: this.orderInfo.user_info.is_vip,
          menber_price: this.orderInfo.user_info.balance,
          shop_price: this.orderInfo.user_info.is_vip ? this.orderInfo.total_vip - this.orderInfo.deposit : this.orderInfo.total_amount - this.orderInfo.deposit,
        })
      },
      orderBefore () {
        this.order({
          vip: this.orderInfo.user_info.is_vip,
          menber_price: 0,
          shop_price: this.orderInfo.deposit,
        })
      },
      order(payment_data) {
        if (window.uni) {
          window.uni.navigateTo({
            url: `../my/payments?data=${this.orderInfo.bn}&shop=${JSON.stringify(payment_data)}`
          })
        }
      },
      delivered() {
        this.$post({
          url: '/api/3d/order/confirm_delivered',
          data: {
            order_bn: this.orderInfo.bn
          }
        }).then(() => {
          this.$toast.success('确认收货成功')
          this.loadList()
        }).catch(() => {})
      }
    },
  }
</script>

<style lang="scss" scoped>
.order-detail {
  margin-bottom: 50px;
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
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    .design-img {
      width: 100px;
      height: 120px;
      background-repeat: no-repeat;
      margin: 0 auto;
      background-size: 100px 160px;
      background-position: center;
      margin: 20px;
    }
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
      line-height: 1.2;
      text-align: left;
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

.delete {
  text-decoration: line-through;
}
</style>
