<template>
  <div class="ddd">
    <div class="ddd-header">
      <img src="https://admin.zbird.com/storage/uploads/images/2021/09/01/8UrCONYnQH4OlRt99NUL6rh7qkCHra0YeEMluwEt.png" width="300px" height="300px">
    </div>
    <p class="ddd-tip">3D定制效果仅供参考，商品以实物为准</p>
    <div class="ddd-name">
      <p class="ddd-name__text">{{name}}</p>
      <van-icon name="edit" class="ddd-name__edit" onclick="console.log(1)" size="15px"/>
    </div>
    <div class="ddd-tab">
      <van-tabs v-model="active" class="ddd-tabs">
        <van-tab title="款式参数">
        </van-tab>
        <van-tab title="钻石参数">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, Icon } from 'vant'

Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)

export default {
  data () {
    return {
      active: 2,
      name: '我的设计-09012209'
    }
  }
}
</script>

<style lang="scss" scoped>
.ddd {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

::v-deep {
  .ddd-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ddd-tip {
    color: rgb(204, 204, 204);
    font-size: 10px;
    margin: 8px;
  }
  .ddd-name {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px 12px 32px;
    color: #fff;
    background: rgb(72, 72, 79);
  }
  .ddd-name__edit {
    margin-left: 8px;
  }
  .ddd-tab {
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
  }
}
</style>
