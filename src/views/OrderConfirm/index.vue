<template>
  <div class="order-confirm">
    <title-bar title="确认订单" />
    <section class="order-info-item">
      <div class="flex order-title-cont">
        <van-icon name="location-o icon-style" />
        <div class="title">
          收货地址
        </div>
      </div>
      <div class="order-info-cont flex">
        <div class="flex1" @click="changeAddress">
          <p><span>{{$store.state.orderConfirm.currtAddress.name || '请选择收货地址'}}</span><span class="phone-num">{{$store.state.orderConfirm.currtAddress.tel || ''}}</span></p>
          <p class="address">{{$store.state.orderConfirm.currtAddress.address || ''}}</p>
        </div>
        <van-icon name="arrow" />
      </div>
    </section>
    <section class="order-info-item">
      <div class="flex order-title-cont">
        <van-icon name="completed icon-style" />
        <div class="title">
          订单商品信息
        </div>
      </div>
      <div class="order-info-cont">
        <div>
          <div class="design-img" :style="{ backgroundImage: 'url(' + preview_image +'',}"></div>
        </div>

        <div class="order-cell" v-for="(item, index) in infoList" :key="index">
          <span class="order-cell__label">{{ item.label }}</span>
          <span class="order-cell__value">{{ item.value }}</span>
        </div>

        <!-- <div class="order-cell">
          <span class="order-cell__label">辅石：</span>
          <span class="order-cell__value">{{ksInfo.fs}}</span>
        </div> -->
      </div>
      <div class="cont-info-more">
        <label class="remark-label" for="remark">订单备注</label>
        <input id="remark" type="text" class="remark" placeholder="请填写" v-model="comment" />
      </div>
    </section>

    <section class="order-info-item">
      <div class="flex order-title-cont">
        <van-icon name="gold-coin-o icon-style" />
        <div class="title flex1 fs-16">
          订单总金额
        </div>
        <div class="title yellow fs-16">
          ¥ {{ddInfo.total_amount}}
        </div>
      </div>
      <div class="order-info-cont">
        <div class="flex yellow fs-16" v-if="userInfo.is_vip">
          <van-icon name="coupon-o icon-style" />
          <div class="flex1">VIP优惠</div>
          <div>- {{ddInfo.total_amount - ddInfo.total_vip || 0}}元</div>
        </div>
        <div class="flex pt10 fs-16">
          <van-icon name="balance-list-o icon-style" />
          <div class="flex1">支付</div>
          <div>
            {{paymentTxt}}
          </div>
        </div>
        <div  class="jump-vip" @click="jumpVip" v-if="!userInfo.is_vip">成为会员，享价格优惠！</div>
      </div>
    </section>

    <div class="btns-box">
      <a class="btn" @click="buy">立即购买</a>
    </div>
  </div>
</template>

<script>
import { getTextureCname } from '../../util/designUtils'

export default {
  components: {
  },
  data () {
    return {
      bn: this.$route.query.bn,
      diamond_id: this.$route.query.diamond_id,
      good_type: this.$route.query.good_type ? this.$route.query.good_type : 1,
      comment: '',
      preview_image: '',
      infoList: [],
      paymentTxt: '',
      userInfo: {
        balance: 0,
        is_vip: 0
      },
      ddInfo: {
        cost: 0,
        deposit: 0,
        total_amount: 0,
        total_vip: 0
      }
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad () {
      if (this.bn) {
        this.getOrder({ design_bn: this.bn, good_type: 1 })
      } else {
        this.getOrder({ diamond_id: this.diamond_id, good_type: 4 })
      }
    },
    getOrder (params) {
      this.$get({
        url: '/api/3d/order',
        data: params
      }).then(({ data }) => {
        this.ddInfo = data
        this.userInfo.balance = data.user_info.balance
        this.userInfo.is_vip = data.user_info.is_vip

        if (params.good_type === 4) {
          this.preview_image = 'https://img.alicdn.com/imgextra/i3/O1CN01Lam6dK1ShpMPsD8nj_!!6000000002279-2-tps-600-600.png'
          this.infoList = [{
            label: '钻石图片仅供参考，保证GIA认证',
            value: ''
          }, {
            label: 'GIA：',
            value: data.diamond_info.cert_num
          }, {
            label: '大小：',
            value: data.diamond_info.size
          }, {
            label: '颜色：',
            value: data.diamond_info.color
          }, {
            label: '净度：',
            value: data.diamond_info.clarity
          }, {
            label: '切工：',
            value: data.diamond_info.cut
          }, {
            label: '对称：',
            value: data.diamond_info.symmetry
          }, {
            label: '抛光：',
            value: data.diamond_info.polish
          }, {
            label: '荧光：',
            value: data.diamond_info.flr_intensity
          }]

          this.paymentTxt = `${this.userInfo.is_vip ? this.ddInfo.total_vip : this.ddInfo.total_amount}元`
        } else if (params.good_type === 1) {
          this.preview_image = data.design_info.preview_image
          this.infoList = [{
            label: '款式：',
            value: '自由可变款'
          }, {
            label: '材质：',
            value: getTextureCname(data.design_info.texture_id)
          }, {
            label: '刻字：',
            value: data.design_info.ring_print
          }, {
            label: '手寸：',
            value: data.design_info.ring_size
          }, {
            label: '-',
            value: ''
          }, {
            label: '钻石信息',
            value: ''
          }, {
            label: 'GIA：',
            value: data.design_info.diamond_info.cert_num
          }, {
            label: '大小：',
            value: data.design_info.diamond_info.size
          }, {
            label: '颜色：',
            value: data.design_info.diamond_info.color
          }, {
            label: '净度：',
            value: data.design_info.diamond_info.clarity
          }, {
            label: '切工：',
            value: data.design_info.diamond_info.cut
          }, {
            label: '对称：',
            value: data.design_info.diamond_info.symmetry
          }, {
            label: '抛光：',
            value: data.design_info.diamond_info.polish
          }, {
            label: '荧光：',
            value: data.design_info.diamond_info.flr_intensity
          }]

          this.paymentTxt = `定金：${this.ddInfo.deposit}元 + 尾款：${this.userInfo.is_vip ? this.ddInfo.total_vip - this.ddInfo.deposit : this.ddInfo.total_amount - this.ddInfo.deposit}元`
        }
      }).catch((err) => {
        console.log(err)
        this.$toast.fail('获取数据失败')
      })
    },
    buy () {
      console.log(this.good_type, this.diamond_id)
      if (this.$store.state.orderConfirm.currtAddress.id) {
        this.$post({
          url: '/api/3d/order',
          data: +this.good_type === 4 ? {
            diamond_id: this.diamond_id,
            coupon_id: 0,
            comment: this.comment,
            address_id: this.$store.state.orderConfirm.currtAddress.id,
            vip: 0,
            good_type: this.good_type
          } : {
            design_bn: this.$route.query.bn,
            coupon_id: 0,
            comment: this.comment,
            address_id: this.$store.state.orderConfirm.currtAddress.id,
            vip: 0
          }
        }).then((res) => {
          if (res.status == 1) {
            this.$toast.success('提交订单成功')
            if (window.uni) {
              const payment_data = {
                vip: this.userInfo.is_vip ? 1 : 0,
                menber_price: this.userInfo.balance ? +this.userInfo.balance : 0,
                shop_price: this.ddInfo.deposit ? +this.ddInfo.deposit : 0
              }
              console.log(res.data, `../my/payments?data=${this.good_type == 4 ? res.data.bn : res.data.deposit_bn_id}&shop=${JSON.stringify(payment_data)}&source=3d`)
              // 定金支付使用定金bn design_bn_id
              window.uni.navigateTo({
                url: `../my/payments?data=${this.good_type == 4 ? res.data.bn : res.data.deposit_bn_id}&shop=${JSON.stringify(payment_data)}&source=3d`
              })
            }
          } else {
            this.$toast.fail(res.message || '提交订单失败')
          }
        }).catch(() => {
          this.$toast.fail('提交订单失败')
        })
      } else {
        this.$toast('请先选择收货地址')
      }
    },
    changeAddress () {
      this.$router.push('/address')
    },
    jumpVip () {
      if (window.uni) {
        window.uni.navigateTo({
          url: '../my/vip_member'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-18 {
  font-size: 18px;
}
.fs-16 {
  font-size: 16px;
}
.order-confirm {
  height: 100%;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: scroll;
  padding-bottom: 105px;
  .flex {
    display: flex;
    align-items: center;
  }
  .flex1 {
    flex: 1;
  }
  .yellow {
    color: rgb(193, 177, 138);
  }
  .pt10 {
    padding-top: 10px;
  }

  .order-info-item {
    background: rgb(72, 72, 79);
    border-radius: 10px;
    margin: 10px 10px 0;
    .order-title-cont {
      padding: 15px;
      border-bottom: 1px solid rgb(60, 60, 68);
    }
    .order-info-cont {
      padding: 15px;
      font-size: 13px;
      .address {
        margin-top: 10px;
      }
      .order-cell {
        font-size: 12px;
        line-height: 2;
      }
      .phone-num {
        margin-left: 10px;
        color: #ccc;
      }
    }
    .cont-info-more {
      border-top: 1px solid rgb(60, 60, 68);
      padding: 15px;
      .remark-label {
        margin-right: 10px;
      }
      .remark {
        background: rgb(72, 72, 79);
        border: 0;
        font-size:14px;
      }
    }
    .icon-style {
      margin-bottom: 4px;
      margin-right: 10px;
    }

  }
  .btns-box {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(72, 72, 79);
    padding-bottom: 40px;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      height: 40px;
      border-radius: 20px;
      width: 100%;
      margin: 10px 15px;
      background-color: rgb(193, 177, 138);
      color: rgb(60, 60, 68);
      font-size: 16px;
    }
  }
}
.delete {
  text-decoration: line-through;
}
.jump-vip {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(193, 177, 138);
  border-radius: 12px;
  margin-top: 12px;
  margin-left: 50%;
  padding: 2px;
  color: rgb(60, 60, 68);
}
</style>
