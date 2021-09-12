<template>
  <div class="order">
    <div class="order-header">
      <img src="https://admin.zbird.com/storage/uploads/images/2021/09/01/8UrCONYnQH4OlRt99NUL6rh7qkCHra0YeEMluwEt.png" width="300px" height="300px">
    </div>
    <p class="order-tip">3D定制效果仅供参考，商品以实物为准</p>
    <div class="order-name">
      <van-field v-model="name" label="设计名称：" placeholder="" clearable clear-trigger="always">
      </van-field>
    </div>
    <div class="order-tab">
      <van-tabs v-model="active" class="order-tabs">
        <van-tab title="款式参数">
          <div class="order-ks">
            <div class="order-cell order-cell__picker">
              <span class="order-cell__label">手寸</span>
              <div is-link class="order-cell__value">
                <span @click="showScPopup">{{ksInfo.sc.value}}</span>
                <van-popup v-model="showSc" position="bottom">
                  <van-picker
                    title="标题"
                    default-index=5
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                  />
                </van-popup>
              </div>
              <van-icon name="question-o" size="24px" class="order-cell__picker-icon" @click="showHelpPopup"/>
              <van-popup v-model="showHelp" closeable>
                <div class="order-help">
                  <p>如何测量正确的手寸？</p>
                  <van-swipe class="my-swipe">
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size1.png" width="315px" height="220px"/>
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size2.png" width="315px" height="220px"/>
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size3.png" width="315px" height="220px"/>
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size4.png" width="315px" height="220px"/>
                    </van-swipe-item>
                  </van-swipe>
                </div>
              </van-popup>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">款式</span>
              <span class="order-cell__value">{{ksInfo.ks}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">材质</span>
              <span class="order-cell__value">{{ksInfo.cz}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">工艺</span>
              <span class="order-cell__value">{{ksInfo.gy}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">戒臂</span>
              <span class="order-cell__value">{{ksInfo.jb}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">花头</span>
              <span class="order-cell__value">{{ksInfo.ht}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">辅石</span>
              <span class="order-cell__value">{{ksInfo.fs}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="钻石参数">
          <div class="order-ks">
            <div class="order-cell">
              <span class="order-cell__label">证书</span>
              <span class="order-cell__value">{{zsInfo.zs}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">钻重</span>
              <span class="order-cell__value">{{zsInfo.zz}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">形状</span>
              <span class="order-cell__value">{{zsInfo.xz}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">颜色</span>
              <span class="order-cell__value">{{zsInfo.ys}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">净度</span>
              <span class="order-cell__value">{{zsInfo.jd}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">荧光</span>
              <span class="order-cell__value">{{zsInfo.yg}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">抛光</span>
              <span class="order-cell__value">{{zsInfo.pg}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">切工</span>
              <span class="order-cell__value">{{zsInfo.qg}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">对称</span>
              <span class="order-cell__value">{{zsInfo.dc}}</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, Icon, Field, Popup, Picker, Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)

export default {
  data () {
    return {
      active: 2,
      name: '我的设计-09012209',
      columns: [
        // '5 43.6mm',
        // '6 44.6mm',
        // '7 45.8mm',
        '8 46.7mm',
        '9 47.7mm',
        '10 49.0mm',
        '11 50.2mm',
        '12 51.2mm',
        '13 52.4mm',
        '14 53.4mm',
        '15 54.4mm',
        '16 55.6mm',
        '17 56.8mm',
        '18 58.1mm',
        '19 59.0mm'
        // '20 60.0mm',
        // '21 61.2mm',
        // '22 62.2mm',
        // '24 63.4mm',
        // '25 65.6mm',
        // '26 66.6mm',
        // '27 67.8mm',
        // '28 69.0mm'
      ],
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
        zz: '0.30ct',
        xz: '圆形',
        ys: 'K',
        jd: 'SI2',
        yg: '无',
        pg: 'EX',
        qg: 'VG',
        dc: 'EX'
      },
      showSc: false,
      showHelp: false
    }
  },
  created () {
    
    console.log(12);
  },
  methods: {
    showScPopup () {
      this.showSc = true
    },
    showHelpPopup () {
      this.showHelp = true
    },
    onConfirm (value, index) {
      this.ksInfo.sc.value = value
      this.ksInfo.sc.index = index
      this.showSc = false
    },
    onCancel () {
      this.showSc = false
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
}

::v-deep {
  .order-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .order-tip {
    color: rgb(204, 204, 204);
    font-size: 20px;
    margin: 16px;
  }
  .order-name {
    display: flex;
    align-items: flex-start;
    padding: 24px 32px 24px 64px;
    color: #fff;
    background: rgb(72, 72, 79);
    .van-cell.van-field {
      background-color: #3c3c44;
      height: 50px;
      padding: 0;
      color: #fff;
      line-height: 50px;
      .van-cell__title {
        width: auto;
        padding-right: 12px;
        background: rgb(72, 72, 79);
        color: #fff;
      }
      .van-field__control {
        color: #fff;
      }
    }
  }
  .order-name__edit {
    margin-left: 16px;
  }
  .order-tab {
    position: relative;
    flex: 1;
    background-color: #3c3c44 !important;
    .van-tabs__wrap {
      margin-bottom: 12px;
      width: 50%;
      height: 100px;
    }
    .van-tabs__nav {
      background-color: #3c3c44 !important;
    }
    .van-tab {
      color: #fff;
      font-size: 28px;
      line-height: 40px;
    }
    .van-tab--active {
      color: rgb(193, 177, 138);
      font-size: 36px;
      line-height: 40px;
    }
    .van-tabs__line {
      background-color: rgb(193, 177, 138);
      width: 20px;
      height: 4px;
    }
  }
  .order-ks {
    background: rgb(72, 72, 79);
    margin: 32px;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    .order-cell {
      height: 84px;
      display: flex;
      padding: 16px;
      align-items: center;
      .order-cell__label {
        padding-left: 60px;
        padding-right: 160px;
      }
      .order-cell__value {
        width: 280px;
        color: rgb(193, 177, 138);
        text-align: right;
      }
    }
    .order-cell__picker {
      height: 120px;
      .order-cell__value {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 52px;
        text-align: right;
        width: 240px;
        margin-left: 40px;
        background-color: rgb(84, 84, 91);
        border-radius: 20px;
      }
      .order-cell__picker-icon {
        color: rgb(193, 177, 138);
        margin-left: 8px;
      }
    }
    .order-help {
      color: #000;
      padding: 32px 0;
      font-weight: 700;
      .my-swipe {
        margin: 64px 0;
        width: 630px;
        height: 440px;
        .van-swipe__indicators {
          position: absolute;
          top: 360px;
          .van-swipe__indicator {
            background-color: #333;
          }
        }
      }
    }
  }
}
</style>
