<template>
  <div class="order-list">
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
