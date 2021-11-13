<template>
  <div class="home">
    <title-bar title="3D设计" :type="2"/>
    <img class="bg" src="https://img.alicdn.com/imgextra/i2/O1CN01dJSghE1EbxeleU7et_!!6000000000371-0-tps-1181-1505.jpg" alt="">
    <img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN01wpcP3V1LHzhiI3sFa_!!6000000001275-0-tps-1181-299.jpg" alt="" @click="goDesign">
    <img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN010zvOy524FO9yVUlmn_!!6000000007361-0-tps-1181-311.jpg" alt="" @click="goMyDesign">
    <img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN01RKzJpt1DNTW8q5Y8f_!!6000000000204-0-tps-1181-1319.jpg" alt="">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      num: 0
    }
  },
  created () {
    if (this.$route.query.hasOwnProperty('token')) {
      localStorage.setItem('token',this.$route.query.token);
    }
  },
  methods: {
    goDesign() {
      this.check()
      if (this.num < 10) return
      location.href = '/design.html'
    },
    goMyDesign() {
      this.check()
      if (this.num < 10) return
      this.$router.push('/mydesign')
    },
    check() {
      this.num++;
      this.$toast.success('暂未开放功能，敬请期待！')
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  overflow-y: auto;
  max-height: 100vh;
  .bg {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
  }
}
</style>
