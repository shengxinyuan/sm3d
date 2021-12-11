<template>
  <div class="diamond-list">
    <title-bar title="钻石列表" />
    <div>
      <div class="diamonds-count">
        <span class="num">{{total}}颗钻石供您挑选</span>
        <span class="filter-btn" @click="filter">筛选</span>
      </div>
      <div class="diamond-weight-list">
        <span @click="changeWeight(.3, .3)">30分</span>
        <span @click="changeWeight(.5, .5)">50分</span>
        <span @click="changeWeight(.7, .7)">70分</span>
        <span @click="changeWeight(1, 1)">1克拉</span>
        <span @click="changeWeight(1, 20)">1克拉以上</span>
      </div>
      <DSort :list="sortList" @changeList="changeList" />
      <div></div>
    </div>
    <van-list
      class="list"
      v-model="loading"
      :finished="finished"
      :finished-text="list.length === 0 ? '未根据筛选查找到钻石' : '没有更多了'"
      @load="onLoad"
    >
      <D-Item v-for="(item, index) in list" :key="index" :info="item" />
    </van-list>

    <D-Filter v-if="filterStatus" @close="close" @selected="selected" :option_list="option_list" :size="size" />
  </div>
</template>

<script>
import DItem from './components/Item.vue';
import DFilter from './components/Filter.vue';
import DSort from './components/DSort.vue';

export default {
  components: {
    DItem,
    DFilter,
    DSort
  },
  data() {
    return {
      loading: false,
      finished: false,
      filterStatus: false,
      list: [],
      total: '-',
      option_list: [],
      size: {
        minsize: '0.3',
        maxsize: '1.0',
      },
      query: {
        page: 1,
      },
      sortList: [
        {
          name: '价格',
          value: 'price',
          status: ''
        },
        {
          name: '钻重',
          value: 'size',
          status: ''
        }
      ]
    };
  },
  methods: {
    changeWeight(min, max) {
      this.size.minsize = min;
      this.size.maxsize = max;
      this.query.page = 1;
      this.query.size_lower = min * 100;
      this.query.size_upper = max * 100;
      this.getList()
    },
    changeList(list, current) {
      this.sortList = list;
      list.forEach((item) => {
        if (item.value === current) {
          this.query.order_field = item.value
          this.query.order_dir = item.status
        }
      })
      this.query.page = 1;
      this.getList()
    },
    filter() {
      this.filterStatus = true;
    },
    close() {
      this.filterStatus = false;
    },
    selected(res, size) {
      this.size = size
      this.option_list = res;
      this.filterStatus = false;
      const params = {};
      res.forEach(item => {
        if (item.value) {
          params[item.name] = item.value
        }
      });
      this.query = {
        page: 1,
        ...params,
        size_lower: size.minsize * 100,
        size_upper: size.maxsize * 100,
      }
      this.getList()
    },
    getList() {
      this.$get({
        url: '/api/3d/get_all_diamonds',
        data: this.query
      }).then((res) => {
        if (res.status === 1) {
          const data = res.data;
          this.total = data.total;
          this.list = this.query.page === 1 ? data.data : [...this.list, ...data.data];
          this.option_list = this.option_list.length ? this.option_list : data.option_list;
          this.finished = data.last_page === data.current_page || data.last_page === 0;
          this.loading = false
          this.query.page = data.current_page + 1
        }
      })
    },
    onLoad() {
      this.getList()
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
  min-height: 100vh;
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
}
</style>
