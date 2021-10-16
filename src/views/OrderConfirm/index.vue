<template>
  <div class="order-confirm">
    <van-nav-bar
      title="确认订单"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
    <section class="order-info-item" style="margin-top:60px;">
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
        <div class="order-cell">
          <span class="order-cell__label">款式：</span>
          <span class="order-cell__value">{{ksInfo.ks}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">材质：</span>
          <span class="order-cell__value">{{ksInfo.cz}}</span>
        </div>
        <div class="order-cell" v-if="ksInfo.kz">
          <span class="order-cell__label">刻字：</span>
          <span class="order-cell__value">{{ksInfo.kz}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">戒臂：</span>
          <span class="order-cell__value">{{ksInfo.jb}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">花头：</span>
          <span class="order-cell__value">{{ksInfo.ht}}</span>
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
        <div class="title flex1">
          商品总金额
        </div>
        <div class="title yellow">
          ¥{{ddInfo.cost}}
        </div>
      </div>
      <div class="order-info-cont">
        <div class="flex">
          <van-icon name="cash-back-record icon-style" />
          <div class="flex1">定金</div>
          <div>¥ {{ddInfo.deposit || 0}}</div>
        </div>
        <div class="flex pt10">
          <van-icon name="coupon-o icon-style" />
          <div class="flex1">定金比例</div>
          <div>{{ddInfo.deposit_ratio || 0}}%</div>
        </div>
        <div class="flex pt10">
          <van-icon name="balance-list-o icon-style" />
          <div class="flex1">尾款</div>
          <div>¥ {{ddInfo.cost || 0 - ddInfo.deposit || 0}}</div>
        </div>
      </div>
    </section>

    <div class="btns-box">
      <a class="btn" @click="buy">立即购买</a>
    </div>
  </div>
</template>

<script>
import { colorList } from '../../const/design'

export default {
  components: {
  },
  data () {
    return {
      bn: this.$route.query.bn,
      comment: '',
      preview_image: '',
      ksInfo: {
        sc: {
          value: '12 51.2mm',
          index: '12'
        },
        ks: '圆款钻石定制',
        cz: '',
        jb: '',
        ht: '',
        fs: '天然钻石(白)'
      },
      zsInfo: {
        zs: 'GIA 232813821738',
        zz: '0.15ct',
        xz: '圆形',
        ys: 'K',
        jd: 'SI2',
        yg: '无',
        pg: 'EX',
        qg: 'VG',
        dc: 'EX'
      },
      ddInfo: {
        cost: 0,
        deposit: 0,
        deposit_ratio: 0
      }
    }
  },
  created () {
    this.onLoad()
  },
  computed: {},
  methods: {
    onLoad () {
      Promise.all([
        this.$get({
          url: '/api/3d/design_detail',
          data: {
            design_bn: this.bn
          }
        }),
        this.$get({
          url: '/api/3d/order',
          data: {
            design_bn: this.bn
          }
        })
      ])
        .then((res) => {
          const { data } = res[0]
          const { data: ddData } = res[1]
          this.preview_image = data.preview_image
          if (this.preview_image && this.preview_image.startsWith('uploads')) {
            this.preview_image = '' + this.preview_image
          }
          if (data.title) {
            this.name = data.title
          }
          this.ksInfo.sc = data.ring_size
          this.ksInfo.kz = data.ring_print
          this.ksInfo.ht = data.flower_head_id
          this.ksInfo.jb = data.ring_arm_id
          this.zsInfo.zs = data.diamond_id
          this.ddInfo.cost = ddData.cost
          this.ddInfo.deposit = ddData.deposit
          this.ddInfo.deposit_ratio = ddData.deposit_ratio
          
          colorList.forEach(item => {
          if (item.id === data.texture_id) {
            this.ksInfo.cz = item.nameCn
          }
        });
        }).catch((res) => {
          this.$toast.fail('获取数据失败')
        })
    },
    buy () {
      if (this.$store.state.orderConfirm.currtAddress.id) {
        this.$post({
          url: '/api/3d/order',
          data: {
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
                vip: 0,
                menber_price: 3000,
                shop_price: +ddInfo.cost
              }
              ddInfo.cost
              window.uni.navigateTo({
                url: `../my/payments?data=${+res.data.bn}&shop=${JSON.stringify(payment_data)}`
              })
            }
          }
        }).catch(() => {
          this.$toast.fail('提交订单失败')
        })
      } else {
        this.$toast('请先选择收货地址')
      }
    },
    onClickLeft () {
      this.$router.back()
    },
    changeAddress () {
      this.$router.push('/address')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .bag-bar {
    position: fixed !important;
    width: 100%;
    .van-icon {
      color: #000 !important;
    }
    .van-nav-bar__content {
      height: 50px;
    }
    .van-nav-bar__title {
      line-height: 50px;
      font-size: 16px;
      font-weight: 700 !important;
      color: #000;
    }
    .van-nav-bar__arrow {
      font-size: 24px;
    }
    .van-nav-bar__left, .van-nav-bar__right {
      padding: 16px;
    }
  }
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
      .title {
        font-size:14px;
      }
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
</style>
