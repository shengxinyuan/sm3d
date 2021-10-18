<template>
  <div class="order-list">
    <title-bar title="我的3D定制订单" />
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
}

</style>
