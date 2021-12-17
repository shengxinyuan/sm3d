<template>
  <div class="order-detail" v-if="orderInfo && orderInfo.status">
    <title-bar title="订单详情" />
    <div class="cell">
      <div class="status">{{statusList[orderInfo.status]}}</div>
      <a  v-if="orderInfo.status == 40" class="order-btn" @click="orderFinal">支付尾款</a>
      <a  v-if="orderInfo.status == 10" class="order-btn" @click="orderBefore">支付定金</a>
      <a  v-if="orderInfo.status == 60" class="order-btn" @click="delivered">确认收货</a>
      <a  v-if="orderInfo.status == 45" class="order-btn" @click="orderAll">支付全款</a>
    </div>
    <div class="divider" />
    <div class="p8" fz>
      <div class="cell">
        <span>订单编号:</span>
        <span>{{orderInfo.bn}}</span>
      </div>
      <div class="cell">
        <span>下单时间:</span>
        <span>{{orderInfo.create_time}}</span>
      </div>
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
    <div class="p8">
      <div class="cell delete" v-if="orderInfo.user_info.is_vip">
        <span>原价</span>
        <span>¥ {{orderInfo.total_amount}}</span>
      </div>
      <div class="cell">
        <span>总金额</span>
        <span>¥ {{orderInfo.user_info.is_vip ? this.orderInfo.total_vip : orderInfo.total_amount}}</span>
      </div>
      <div class="cell">
        <span>定金</span>
        <span>¥ {{orderInfo.deposit}}</span>
      </div>
      <div class="cell">
        <span>尾款</span>
        <span>¥ {{(orderInfo.user_info.is_vip ? orderInfo.total_vip - orderInfo.deposit : orderInfo.total_amount - orderInfo.deposit)}}.00</span>
      </div>
      
    </div>
    <div class="divider" />
    <div class="order-info-box">
      <div class="cell">
        <span>{{this.title}}</span>
      </div>
      <div class="design-img" v-if="orderInfo.good_type !== 4" :style="{ backgroundImage: 'url(' +design_info.preview_image+'',}"></div>
      <div class="design-diamond" v-else :style="{ backgroundImage: 'url(https://img.alicdn.com/imgextra/i3/O1CN01Lam6dK1ShpMPsD8nj_!!6000000002279-2-tps-600-600.png)',}"></div>
      <div class="detail" v-if="orderInfo.good_type !== 4">
        <p class="title">定制详情</p>
        <div class="cell">
          <span>类型:</span>
          <span>{{typeList[orderInfo.good_type]}}</span>
        </div>
        <div class="cell">
          <span>款式:</span>
          <span>圆款钻石定制</span>
        </div>
        <div class="cell">
          <span>钻石编号id:</span>
          <span>{{diamond_info.id}}</span>
        </div>
        <div class="cell">
          <span>手寸:</span>
          <span>{{design_info.ring_size}}</span>
        </div>
        <div class="cell" v-if="diamond_info.title">
          <span>刻字:</span>
          <span>{{design_info.title}}</span>
        </div>
      </div>
      <div class="detail">
        <p class="title">钻石详情</p>
        <div class="cell">
          <span>颜色</span>
          <span>{{diamond_info && diamond_info.color}}</span>
        </div>
        <div class="cell">
          <span>净度</span>
          <span>{{diamond_info && diamond_info.clarity}}</span>
        </div>
        <div class="cell">
          <span>荧光</span>
          <span>{{diamond_info && diamond_info.flr_intensity}}</span>
        </div>
        <div class="cell">
          <span>抛光</span>
          <span>{{diamond_info && diamond_info.polish}}</span>
        </div>
        <div class="cell">
          <span>切工</span>
          <span>{{diamond_info && diamond_info.cut}}</span>
        </div>
        <div class="cell">
          <span>对称</span>
          <span>{{diamond_info && diamond_info.symmetry}}</span>
        </div>
      </div>
    </div>
    <div class="divider" />
    
  </div>
</template>

<script>
import { statusList, typeList, sfTypeList } from '../../const/order'
  export default {
    data() {
      return {
        title: '3D定制订单',
        typeList,
        sfTypeList,
        statusList,
        diamond_info: {},
        design_info: {},
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
              order_bn: this.$route.query.bn || this.$route.query.diamond_id,
              good_type: this.$route.query.good_type
            }
          }).then(({ status, data, message }) => {
            if (status === 1) {
              this.orderInfo = data
              this.diamond_info = data.diamond_info
              this.design_info = data.design_info || {}
              if (data.good_type === 4) {
                this.title = ''
              }
            } else {
              this.$toast.fail(message || '获取数据失败')
            }
          }).catch(() => {})
      },
      orderFinal () {
        this.order({
          vip: this.orderInfo.user_info.is_vip,
          menber_price: +this.orderInfo.user_info.balance,
          shop_price: this.orderInfo.user_info.is_vip ? (+this.orderInfo.total_vip) - (+this.orderInfo.deposit) : (+this.orderInfo.total_amount) - (+this.orderInfo.deposit),
        }, this.orderInfo.final_bn_id
        )
      },
      orderBefore () {
        this.order({
          vip: this.orderInfo.user_info.is_vip ? 1 : 0,
          menber_price: +this.orderInfo.user_info.balance,
          shop_price: this.orderInfo.deposit ? +this.orderInfo.deposit : 0,
        }, this.orderInfo.deposit_bn_id
        )
      },
      orderAll() {
        this.order({
          vip: this.orderInfo.user_info.is_vip ? 1 : 0,
          menber_price: +this.orderInfo.user_info.balance,
          shop_price: this.orderInfo.user_info.is_vip ? +this.orderInfo.total_vip : +this.orderInfo.total_amount,
        }, this.orderInfo.bn
        )
      },
      order(payment_data, bnId) {
        console.log(`../my/payments?data=${bnId}&shop=${JSON.stringify(payment_data)}&source=3d`);
        if (window.uni) {
          window.uni.navigateTo({
            url: `../my/payments?data=${bnId}&shop=${JSON.stringify(payment_data)}&source=3d`
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
  .p8 {
    padding: 8px;
    font-size: 14px;
  }
  .status {
    padding: 3%;
    font-size: 16px;
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
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    .design-img {
      width: 345px;
      height: 370px;
      background-repeat: no-repeat;
      background-size: 355px 560px;
      background-position: center;
      margin: 0 auto;
    }
    .design-diamond {
      width: 180px;
      height: 180px;
      background-repeat: no-repeat;
      background-size: 180px 180px;
      background-position: center;
      margin: 0 auto;
    }
    .detail {
      flex: 1;
      color: #999;
      font-size: 12px;
      line-height: 1.6;
      text-align: left;
      .title {
        color: #303133;
        font-size: 14px;
        margin: 10px 0 8px 10px;
      }
      .cell {
        padding: 0 10px;
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
