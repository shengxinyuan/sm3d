<template>
  <div class="bag">
    <van-nav-bar
      title="方案袋"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
    <van-row class="bag-tab">
      <van-col span="24">
        <van-tabs v-model="active" class="bag-tabs">
          <van-tab title="女戒方案">
            <van-row v-if="isEmpty">
              <van-col span="24" class="bag-empty__height"></van-col>
              <van-col span="24" class="bag-empty__img">
                <img src="https://h5.zbird.com/static/icons/design-empty.png" width="50px" height="66px">
              </van-col>
              <van-col span="24">
                <van-row span="24" class="bag-empty__p">
                  <p>人人都是设计师，您也可以！</p>
                </van-row>
              </van-col>
              <van-col span="24">
                <router-link to="/design">
                  <van-button type="primary" class="button">去智能定制</van-button>
                </router-link>
              </van-col>
            </van-row>
            <van-row v-else class="bag-list">
              <van-swipe class="my-swipe" :show-indicators="false" :loop="true">
                <van-swipe-item v-for="(item, index) in list" :key="index">
                  <van-col span="24" class="bag-list__img">
                    <van-col span="24" class="bag-empty__height"></van-col>
                    <img :src="item.image" width="250px" height="250px">
                  </van-col>
                  <van-col span="24" class="bag-list__p">
                    <p class="bag-list__p--top">{{item.desc}}</p>
                    <p class="bag-list__p--middle">{{item.tag}}</p>
                    <p class="bag-list__p--bottom">{{item.money}}</p>
                  </van-col>
                </van-swipe-item>
              </van-swipe>
              <van-col span="24" class="bag-list__btns" v-if="false">
                <van-button type="primary" class="button bag-list__btn--left">返回定制台</van-button>
                <van-button type="primary" class="button bag-list__btn--right">加载此方案</van-button>
              </van-col>
              <van-col span="24" class="bag-list__buy" v-else>
                <van-button type="primary" class="button bag-list__btn--buy">下单购买</van-button>
              </van-col>
            </van-row>
          </van-tab>
          <van-tab title="对戒方案">
            <van-row v-if="isEmpty">
              <van-col span="24" class="bag-empty__height"></van-col>
              <van-col span="24" class="bag-empty__img">
                <img src="https://h5.zbird.com/static/icons/design-empty.png" width="50px" height="66px">
              </van-col>
              <van-col span="24">
                <van-row span="24" class="bag-empty__p">
                  <p>人人都是设计师，您也可以！</p>
                </van-row>
              </van-col>
              <van-col span="24">
                <router-link to="/design">
                  <van-button type="primary" class="button">去智能定制</van-button>
                </router-link>
              </van-col>
            </van-row>
          </van-tab>
        </van-tabs>
      </van-col>
      <van-col span="12">
        <div class="bag-tab__right">1/2</div>
      </van-col>
      <van-col span="24">
      </van-col>
    </van-row>
    <van-row class="bag-btns">
      <van-col class="bag-btns__btn bag-btns__delete">
        <van-row><van-icon name="delete-o" color="rgb(193, 177, 138)" size="25"/></van-row>
        <van-row>删除</van-row>
      </van-col>
      <van-col class="bag-btns__btn bag-btns__service">
        <van-row><van-icon name="service-o" color="rgb(193, 177, 138)" size="25"/></van-row>
        <van-row>客服</van-row>
      </van-col>
      <van-col class="bag-btns__btn bag-btns__share">
        <van-row><van-icon name="share-o" color="rgb(193, 177, 138)" size="25"/></van-row>
        <van-row>分享</van-row>
      </van-col>
      <van-col class="bag-btns__btn bag-btns__share">
        <van-row><van-icon name="share-o" color="rgb(193, 177, 138)" size="25"/></van-row>
        <van-row>分享</van-row>
      </van-col>
    </van-row>
    <van-row>
      <van-tabbar v-model="bottomActive" class="bag-bottom"></van-tabbar>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '../router'
// import cc from '../util'

import { Tab, Tabs, Toast, NavBar, Col, Row, Button, Swipe, SwipeItem, Tabbar, TabbarItem, Icon, Divider } from 'vant'

Vue.use(Divider)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)

export default {
  data () {
    return {
      active: 2,
      bottomActive: 0,
      isEmpty: false,
      list: [{
        id: 123,
        image: 'https://admin.zbird.com/storage/uploads/images/2021/08/29/xAHHnQtOcPRj1hGNyXRCbqwjVIgn0wCH54f14Fo8.png',
        desc: '我的设计-08291408',
        tag: '18k白',
        money: '13577'
      }, {
        id: 123,
        image: 'https://admin.zbird.com/storage/uploads/images/2021/08/29/xAHHnQtOcPRj1hGNyXRCbqwjVIgn0wCH54f14Fo8.png',
        desc: '我的设计-08291408',
        tag: '18k白',
        money: '13577'
      }, {
        id: 123,
        image: 'https://admin.zbird.com/storage/uploads/images/2021/08/29/xAHHnQtOcPRj1hGNyXRCbqwjVIgn0wCH54f14Fo8.png',
        desc: '我的设计-08291408',
        tag: '18k白',
        money: '13577'
      }, {
        id: 123,
        image: 'https://admin.zbird.com/storage/uploads/images/2021/08/29/xAHHnQtOcPRj1hGNyXRCbqwjVIgn0wCH54f14Fo8.png',
        desc: '我的设计-08291408',
        tag: '18k白',
        money: '13577'
      }]
    }
  },
  methods: {
    onClickLeft () {
      router.back()
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style lang="scss" scoped>
  .bag {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
::v-deep {
  .bag-bar {
    .van-icon {
      color: #000 !important;
    }
    .van-nav-bar__content {
      height: 50px;
    }
    .van-nav-bar__title {
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
  .bag-tab {
    position: relative;
    flex: 1;
    background-color: #3c3c44 !important;
    .van-tabs__wrap {
      margin-bottom: 6px;
      width: 50%;
    }
    .van-tabs__nav {
      background-color: #3c3c44 !important;
    }
    .van-tab {
      color: #fff;
      font-size: 14px;
    }
    .van-tab--active {
      color: rgb(193, 177, 138);
      font-size: 18px;
    }
    .van-tabs__line {
      background-color: rgb(193, 177, 138);
      width: 10px;
      height: 2px;
    }
    .bag-tab__right {
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgb(72, 72, 79);
      color: rgb(157, 157, 157);
      margin: 15px;
      width: 60px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      border-radius: 2500px;
    }
    .bag-empty__height {
      height: 100px;
    }
    .bag-empty__p {
      color: #999;
      height: 50px;
      p {
        line-height: 50px;
        font-size: 15px;
      }
    }
  }
  .button {
    width: 183px;
    height: 43px;
    line-height: 43px;
    margin-top: 25px;
    background-color: rgb(193, 177, 138);
    color: rgb(60, 60, 68);
    border: unset;
    border-radius: 2500px;
    font-size: 16px;
  }
  .van-tabs__content {
    background-color: #3c3c44;
  }
  .bag-list {
    .bag-list__p {
      text-align: center;
      padding-top: 10px;
      color: rgb(193, 177, 138);
    }
    .bag-list__p--top {
      font-size: 18px;
      font-weight: 500;
    }
    .bag-list__p--middle {
      font-size: 12px;
      margin: 4px 0;
    }
    .bag-list__p--bottom {
      font-size: 15px;
      font-weight: 700;
    }
    .bag-list__btns {
      margin-top: 30px;
    }
    .bag-list__buy {
      margin-top: 30px;
    }
    .bag-list__btn--left {
      width: 40vw;
      background-color: rgb(72, 72, 79);
      color: #fff;
      height: 45px;
      line-height: 45px;
      font-size: 13px;
      font-weight: 700;
      margin: 30px 10px;
    }
    .bag-list__btn--right {
      width: 40vw;
      background-color: rgb(72, 72, 79);
      background-color: #c1b18a;
      height: 45px;
      line-height: 45px;
      font-size: 13px;
      font-weight: 700;
      margin: 30px 10px;
    }
    .bag-list__btn--buy {
      width: 60vw;
      height: 45px;
      line-height: 45px;
      margin: 10px auto auto;
      background-color: #c1b18a;
      color: rgb(60, 60, 68);
      font-size: 13px;
      font-weight: 700;
      text-align: center;
    }
  }
  .van-tabbar {
    height: 4px;
    background-color: #48484f;
  }
  .bag-btns {
    height: 75px;
    color: rgb(193, 177, 138);
    background-color: #48484f;
    display: flex;
    align-items: center;
    .bag-btns__delete {
      margin-left: 16px;
    }
  }
}

</style>
