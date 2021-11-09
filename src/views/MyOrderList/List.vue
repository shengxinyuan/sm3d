<template>
  <div class="order-list">
    <title-bar title="我的3D定制订单" :type="2"/>
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text="list.length === 0 ? '订单列表暂为空' : '没有更多了'"
      @load="getList"
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
      loading: false,
      finished: false,
      list: [],
      page: 1
    }
  },
  created () {
    if (this.$route.query.hasOwnProperty('token')) {
      localStorage.setItem('token', this.$route.query.token);
    };
  },
  methods: {
    getList() {
      this.$get({
        url: '/api/3d/order/list',
        data: {
          page: this.page
        }
      }).then((res) => {
        if (res.status === 1) {
          const data = res.data;
          this.list = this.page === 1 ? data.data : [...this.list, ...data.data];
          this.page = data.current_page + 1
          this.finished = data.last_page === data.current_page || data.last_page === 0;
          this.loading = false
        }
      })
    },
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
