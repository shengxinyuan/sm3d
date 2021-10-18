<template>
  <div class="diamond-list">
    <title-bar title="钻石列表" />
    <div>
      <div class="diamonds-count">
        <span class="num">{{total}}颗钻石供您挑选</span>
        <span class="filter-btn" @click="filter">筛选</span>
      </div>
      <div class="diamond-weight-list">
        <span>15分</span>
        <span>25分</span>
        <span>70分</span>
        <span>1克拉</span>
        <span>1克拉以上</span>
      </div>
      <div></div>
    </div>
    <van-list
      class="list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <D-Item v-for="item in list" :key="item.id" :info="item" />
    </van-list>

    <D-Filter v-show="filterStatus" @close="close" />
  </div>
</template>

<script>
import DItem from './components/Item.vue';
import DFilter from './components/Filter.vue';

export default {
  components: {
    DItem,
    DFilter
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      loading: false,
      finished: false,
      filterStatus: false,
      total: '-',
    };
  },
  computed: {},
  created() {
    this.$get({
      url: '/api/3d/get_all_diamonds',
      data: {
        id: this.$route.query.id
      }
    }).then((res) => {
      console.log(res);
      if (res.status === 1) {
        this.total = res.data.total
        this.list = res.data.data
      }
    })
  },
  methods: {
    filter() {
      this.filterStatus = true;
    },
    close() {
      this.filterStatus = false;
    },
    onLoad() {
      this.finished = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.diamond-list {
  height: 100%;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  .diamonds-count {
    display: flex;
    padding: 15px 15px 0 15px;
    align-items: center;
    & > .num {
      flex: 1;
      display: block;
      text-align: left;
      height: 20px;
      line-height: 20px;
      font-size: 16px;
    }
    .filter-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      width: 100px;
      height: 40px;
      background-color: rgb(72, 72, 79);
      color: rgb(193, 177, 138);;
      font-size: 15px;
    }
  }
  .diamond-weight-list {
    padding: 15px;
    display: flex;
    align-items: center;
    & > span {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      flex: 1;
      background-color: rgb(72, 72, 79);
      border-radius: 10px;
      margin: 0 6px;
      font-size: 12px;
      height: 20px;
      padding: 0 5px;
      white-space: nowrap;
    }
  }
  .list {
    overflow: scroll;
  }
}
</style>
