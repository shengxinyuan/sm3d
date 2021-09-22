<template>
  <div class="order">
    <van-nav-bar
      title="设计信息"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
    <div class="order-header" style="margin-top:50px;">
      <img :src="preview_image" width="300px" height="300px">
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
              <span class="order-cell__value">{{ksInfo.sc}}</span>
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
            <!-- <div class="order-cell">
              <span class="order-cell__label">款式</span>
              <span class="order-cell__value">{{ksInfo.ks}}</span>
            </div> -->
            <div class="order-cell">
              <span class="order-cell__label">材质</span>
              <span class="order-cell__value">{{ksInfo.cz}}</span>
            </div>
            <!-- <div class="order-cell">
              <span class="order-cell__label">工艺</span>
              <span class="order-cell__value">{{ksInfo.gy}}</span>
            </div> -->
            <div class="order-cell">
              <span class="order-cell__label">戒臂</span>
              <span class="order-cell__value">{{ksInfo.jb}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">花头</span>
              <span class="order-cell__value">{{ksInfo.ht}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">刻字</span>
              <span class="order-cell__value">{{ksInfo.kz}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="钻石参数">
          <div class="order-ks">
            <div class="order-cell">
              <span class="order-cell__label">钻石</span>
              <span class="order-cell__value">{{zsInfo.zs}}</span>
            </div>
            <!-- <div class="order-cell">
              <span class="order-cell__label">钻重</span>
              <span class="order-cell__value">{{zsInfo.zz}}</span>
            </div> -->
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
    <van-row class="order-bottom">
      <van-row class="bag-btns">
        <router-link to="/mydesign">
          <van-col class="bag-btns__btn bag-btns__mydesign">
            <van-row><van-icon name="bag-o" color="rgb(193, 177, 138)" size="25"/></van-row>
          </van-col>
        </router-link>
        <van-col class="bag-btns__btn bag-btns__share">
          <van-button type="primary" class="button bag-list__btn--save" @click="saveDesign">保存设计</van-button>
        </van-col>
        <van-col style="flex:1;"></van-col>
        <van-col class="bag-btns__btn bag-btns__share">
          <van-button type="primary" class="button bag-list__btn--buy" @click="buy">确认购买</van-button>
        </van-col>
      </van-row>
    </van-row>
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
      bn: this.$route.query.bn || 0,
      active: 2,
      name: '我的设计' + Date.now(),
      preview_image: '',
      ksInfo: {
        sc: 0,
        cz: '',
        cz_id: 2,
        jb: '',
        ht: '',
        fs: '',
        kz: ''
      },
      zsInfo: {
        zs: '',
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
    this.loadDesign()
  },
  methods: {
    loadDesign () {
      this.$get({
        url: 'api/design/design_detail',
        data: {
          design_bn: this.bn
        }
      }).then((res) => {
        const { data } = res
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
        this.ksInfo.cz = data.texture_id
        this.zsInfo.zs = data.diamond_id
        this.zsInfo.zs = data.diamond_id
      }).catch(() => {
        this.$toast.fail('获取数据失败，请稍后重试')
      })
    },
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
    },
    onClickLeft () {
      this.$router.back()
    },
    saveDesign () {
      this.$post({
        url: 'api/3d/saveDesign',
        data: {
          flower_head_id: this.ksInfo.ht,
          ring_arm_id: this.ksInfo.jb,
          diamond_id: this.zsInfo.zs,
          ring_print: this.ksInfo.kz,
          texture_id: this.ksInfo.cz_id,
          title: this.name,
          ring_size: this.ksInfo.sc.index,
          good_type: 1,
          preview_image: this.preview_image
        }
      }).then((res) => {
        this.bn = res.data.custId
        this.$router.push('./mydesign')
      }).catch(() => {
        this.$toast.fail('保存失败')
      })
    },
    buy () {
      this.$post({
        url: 'api/3d/saveDesign',
        data: {
          flower_head_id: this.ksInfo.ht,
          ring_arm_id: this.ksInfo.jb,
          diamond_id: this.zsInfo.zs,
          ring_print: this.ksInfo.kz,
          texture_id: this.ksInfo.cz_id,
          title: this.name,
          ring_size: this.ksInfo.sc.index,
          good_type: 1,
          preview_image: this.preview_image
        }
      }).then((res) => {
        this.bn = res.data.custId
        this.$router.push(`./orderConfirm?bn=${this.bn}`)
      }).catch(() => {
        this.$toast.fail('保存失败')
      })
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
    font-size: 12px;
    margin: 8px;
  }
  .order-name {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px 12px 32px;
    color: #fff;
    background: rgb(72, 72, 79);
    .van-cell.van-field {
      background-color: #3c3c44;
      height: 25px;
      padding: 0;
      color: #fff;
      line-height: 25px;
      .van-cell__title {
        width: auto;
        padding-right: 6px;
        background: rgb(72, 72, 79);
        color: #fff;
      }
      .van-field__control {
        color: #fff;
      }
    }
  }
  .order-name__edit {
    margin-left: 8px;
  }
  .order-tab {
    position: relative;
    flex: 1;
    background-color: #3c3c44 !important;
    margin-bottom: 70px;
    .van-tabs__wrap {
      margin-bottom: 6px;
      width: 50%;
      height: 50px;
    }
    .van-tabs__nav {
      background-color: #3c3c44 !important;
    }
    .van-tab {
      color: #fff;
      font-size: 14px;
      line-height: 20px;
    }
    .van-tab--active {
      color: rgb(193, 177, 138);
      font-size: 18px;
      line-height: 20px;
    }
    .van-tabs__line {
      background-color: rgb(193, 177, 138);
      width: 10px;
      height: 2px;
    }
  }
  .order-ks {
    background: rgb(72, 72, 79);
    margin: 16px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    .order-cell {
      height: 42px;
      display: flex;
      padding: 8px;
      align-items: center;
      .order-cell__label {
        padding-left: 30px;
        padding-right: 80px;
      }
      .order-cell__value {
        width: 140px;
        color: rgb(193, 177, 138);
        text-align: right;
      }
    }
    .order-cell__picker {
      // height: 60px;
      // .order-cell__value {
      //   height: 26px;
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   line-height: 26px;
      //   text-align: right;
      //   width: 120px;
      //   margin-left: 20px;
      //   background-color: rgb(84, 84, 91);
      //   border-radius: 10px;
      // }
      .order-cell__value {
        padding-right: 20px;
        margin-right: -10px;
      }
      .order-cell__picker-icon {
        color: rgb(193, 177, 138);
        margin-left: 4px;
      }
    }
    .order-help {
      color: #000;
      padding: 16px 0;
      font-weight: 700;
      .my-swipe {
        margin: 32px 0;
        width: 315px;
        height: 220px;
        .van-swipe__indicators {
          position: absolute;
          top: 180px;
          .van-swipe__indicator {
            background-color: #333;
          }
        }
      }
    }
  }
  .bag-btns__count {
    color: rgb(193, 177, 138);
    font-size: 10px;
    font-weight: 700;
  }
  .bag-btns__mydesign {
    margin: 0 20px;
  }
  .bag-btns {
    position: fixed;
    width: 100vw;
    bottom: 0;
    display: flex;
    align-items: center;
    background: #48484f;
    height: 70px;
    padding-right: 16px;
  }
  .bag-bar {
    position: fixed;
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
      padding: 8px;
    }
  }
  .button {
    width: 130px;
    height: 40px;
    line-height: 40px;
    border: unset;
    border-radius: 20px;
    background-color: rgb(193, 177, 138);
    color: rgb(52, 52, 60);
    text-align: center;
  }
  .button.bag-list__btn--save {
    background-color: rgb(84, 84, 91);
    color: rgb(193, 177, 138);
  }
}
</style>
