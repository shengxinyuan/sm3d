<template>
  <div class="order-list">
    <van-nav-bar
      title="我的3D定制订单"
      left-text=""
      left-arrow
      @click-left="$router.back()"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
    <van-list
      class="list"
      finished-text="没有更多了"
    >
      <Item v-for="item in list" :key="item.orderId" :info="item" />
    </van-list>
  </div>
</template>

<script>
import Item from './components/Item.vue';

export default {
  components: {
    Item
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    // this.onLoad()
    this.$get({
        url: '/api/3d/order/list'
      }).then(({ status, data }) => {
        if (status === 1) {
          this.list = data.data
        }
      }).catch(() => {})
  },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #f6f6f6;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: scroll;
  padding-bottom: 25px;
  .list {
    padding-top: 50px;
  }
}
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
</style>
