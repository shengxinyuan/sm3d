<template>
  <div class="order-confirm">
    <section class="order-info-item">
      <div class="flex order-title-cont">
        <van-icon name="location-o icon-style" />
        <div class="title">
          收货地址
        </div>
      </div>
      <div class="order-info-cont flex">
        <div class="flex1">
          <p><span>李明</span><span class="phone-num">18323992100</span></p>
          <p class="address">上海市浦东新区碧波路690号</p>
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
          <img src="../../assets/diamond-list/diamond-view.png" width="100%">
        </div>
        <div class="order-cell">
          <span class="order-cell__label">款式：</span>
          <span class="order-cell__value">{{ksInfo.ks}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">材质：</span>
          <span class="order-cell__value">{{ksInfo.cz}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">工艺：</span>
          <span class="order-cell__value">{{ksInfo.gy}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">戒臂：</span>
          <span class="order-cell__value">{{ksInfo.jb}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">花头：</span>
          <span class="order-cell__value">{{ksInfo.ht}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">辅石：</span>
          <span class="order-cell__value">{{ksInfo.fs}}</span>
        </div>
      </div>
      <div class="cont-info-more">
        <label class="remark-label" for="remark">订单备注</label>
        <input id="remark" type="text" class="remark" placeholder="请填写">
      </div>
    </section>


    <section class="order-info-item">
      <div class="flex order-title-cont">
        <van-icon name="gold-coin-o icon-style" />
        <div class="title flex1">
          订单金额
        </div>
        <div class="title yellow">
          ¥ 12150
        </div>
      </div>
      <div class="order-info-cont">
        <div class="flex">
          <van-icon name="cash-back-record icon-style" />
          <div class="flex1">商品金额</div>
          <div>¥ 12150</div>
        </div>
        <div class="flex pt10">
          <van-icon name="coupon-o icon-style" />
          <div class="flex1">优惠券</div>
          <div>¥ -0</div>
        </div>
      </div>
    </section>


    <div class="btns-box">
      <a class="btn">立即购买</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      ksInfo: {
        sc: {
          value: '12 51.2mm',
          index: '12'
        },
        ks: '圆款钻石定制',
        cz: '18K白',
        gy: '抛光',
        jb: 'BH116',
        ht: 'AH007',
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
    };
  },
  computed: {},
  methods: {
    onLoad() {},
  },
};
</script>

<style lang="scss" scoped>
.order-confirm {
  height: 100%;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: scroll;
  padding-bottom: 75px;
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
    height: 55px;
    background-color: rgb(72, 72, 79);
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
