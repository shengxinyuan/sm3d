<template>
  <div class="diamond-filter">
    
    <section class="filter-item">
      <div class="filter-item-label" @click="aaa">颜色选择</div>
      <div class="filter-item-value">
        <div>1</div>
        <div>2</div>
        <div>2</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      loading: false,
      finished: false,
    };
  },
  computed: {},
  created() {
    console.warn(333);
    console.warn(133);
  },
  mounted() {
    window.console.log(123, this.$store);
  },
  methods: {
    aaa() {
      console.log(123);
    },
    
  },
};
</script>

<style lang="scss" scoped>
.diamond-filter {
  height: 100%;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 45px;
  text-align: left;
  .filter-item {
    .filter-item-value {
      display: flex;
    }
  }
}
</style>
