<template>
  <div class="order-list">
    <title-bar title="订单列表" />
    <van-list
      class="list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
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
      list: [{
        orderId: 'HH6231992',
      },{
        orderId: 'HH6231992',
      },{
        orderId: 'HH6231992',
      },{
        orderId: 'HH6231992',
      }]
    }
  },
  created () {
    // this.onLoad()
    this.$get({
        url: '/api/3d/order/list'
      }).then((res) => {
        this.list = res.data
        this.list.map((i) => {
          i.name = i.contact
          i.tel = i.mobile
        })
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
