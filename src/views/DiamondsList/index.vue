<template>
  <div class="diamondsList">
    <div>
      <div class="diamonds-count">
        <span class="num">864590颗钻石供您挑选</span>
        <span class="filter-btn" @click="filter">筛选</span>
      </div>
      <div class="diamond-weight-list">
        <span>30分</span>
        <span>50分</span>
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
      <DiamondItem v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
import DiamondItem from "./DiamondItem.vue";
export default {
  components: {
    DiamondItem,
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      loading: false,
      finished: false,
    };
  },
  computed: {},
  methods: {
    filter() {
      this.$router.replace('/diamondFilter')
    },
    onLoad() {
      this.finished = true;
      // setTimeout(() => {

      //   for (let i = 0; i < 2; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;

      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.diamondsList {
  height: 100%;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  .diamonds-count {
    display: flex;
    padding: 30px 30px 0 30px;
    & > .num {
      flex: 1;
      display: block;
      text-align: left;
      height: 80px;
      line-height: 80px;
      font-size: 32px;
    }
    .filter-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 40px;
      width: 200px;
      height: 80px;
      background-color: rgb(72, 72, 79);
      color: rgb(193, 177, 138);;
      font-size: 30px;
    }
  }
  .diamond-weight-list {
    padding: 0 30px;
    display: flex;
    height: 80px;
    align-items: center;
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      background-color: rgb(72, 72, 79);
      border-radius: 20px;
      margin: 0 6px;
      font-size: 24px;
      height: 40px;
    }
  }
  .list {
    
    overflow: scroll;
  }
}
</style>
