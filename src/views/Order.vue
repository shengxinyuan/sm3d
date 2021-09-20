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
                    title=""
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
            <!-- <div class="order-cell">
              <span class="order-cell__label">款式</span>
              <span class="order-cell__value">{{ksInfo.ks}}</span>
            </div> -->
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
    <van-row class="order-bottom">
      <van-row class="bag-btns">
        <router-link to="/mydesign">
          <van-col class="bag-btns__btn bag-btns__mydesign">
            <van-row><van-icon name="bag-o" color="rgb(193, 177, 138)" size="25"/></van-row>
          </van-col>
        </router-link>
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
      custId: '',
      query: {},
      active: 2,
      name: '我的设计' + Date.now(),
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
        cz: '18K白',
        cz_id: 2,
        gy: '抛光',
        jb: '',
        ht: '',
        fs: '',
        fs_id: 1,
        kz: ''
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
    this.getQuery()
  },
  methods: {
    getQuery () {
      if (window.location.search.split('?')[1]) {
        const queryList = decodeURI(window.location.search).split('?')[1].split('&')
        queryList.forEach((i) => {
          this.query[i.split('=')[0]] = i.split('=')[1]
        })
        this.ksInfo.ht = this.query.flower_head_id
        this.ksInfo.jb = this.query.ring_arm_id
        this.ksInfo.kz = this.query.ring_print
        this.ksInfo.cz = this.query.texture_text
        this.ksInfo.cz_id = this.query.texture_id
        this.ksInfo.fs = this.query.second_diamond_text
        this.ksInfo.fs_id = this.query.second_diamond_id
      }
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
    buy () {
      this.$post({
        url: 'api/design/saveDesign',
        data: {
          flower_head_id: this.ksInfo.ht,
          ring_arm_id: this.ksInfo.jb,
          diamond_id: this.zsInfo.zs,
          ring_print: this.ksInfo.kz,
          texture_id: this.ksInfo.cz_id,
          title: this.name,
          ring_size: this.ksInfo.sc.index,
          good_type: 1,
          member_id: 0,
          preview_image: '',
          second_diamond_id: this.ksInfo.fs_id
        }
      }).then((res) => {
        this.custId = res.data.custId
        this.$router.push(`./orderConfirm?custId=${this.custId}`)
      }).catch(() => {
        this.custId = 123
        this.$router.push(`./orderConfirm?custId=${this.custId}`)
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
      height: 60px;
      .order-cell__value {
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 26px;
        text-align: right;
        width: 120px;
        margin-left: 20px;
        background-color: rgb(84, 84, 91);
        border-radius: 10px;
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
    width: 160px;
    height: 30px;
    line-height: 43px;
    background-color: rgb(193, 177, 138);
    color: rgb(60, 60, 68);
    border: unset;
    border-radius: 50px;
    font-size: 16px;
  }
}
</style>
