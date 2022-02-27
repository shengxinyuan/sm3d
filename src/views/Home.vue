<template>
  <div class="home">
    <div class="env-tip" v-if="envTxt">{{ envTxt }}</div>
    <title-bar title="3D设计" :type="2"/>
    <img class="bg" src="https://img.alicdn.com/imgextra/i2/O1CN01KMx9cb1vgZ8Gflxzv_!!6000000006202-2-tps-999-1193.png" alt="">
    <img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN01FbZgwa1xnYPRlUKhw_!!6000000006488-2-tps-1000-338.png" alt="" @click="goDesign">
    <img class="bg" src="https://img.alicdn.com/imgextra/i3/O1CN018gICFk1ZCPViWnrFP_!!6000000003158-2-tps-996-290.png" alt="" @click="goComboDesign">
    <img class="bg" src="https://img.alicdn.com/imgextra/i2/O1CN01S2fbJU1dJW7DvsG1d_!!6000000003715-2-tps-1000-293.png" alt="" @click="buyDiamond">
    <img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN01vVqZ5G1PxS23KBnCP_!!6000000001907-2-tps-1000-305.png" alt="" @click="buyGem">
    <img class="bg" src="https://img.alicdn.com/imgextra/i3/O1CN01IkCgIR1ZdQsISkeBn_!!6000000003217-2-tps-1000-323.png" alt="" @click="goMyDesign">
    <img class="bg" src="https://img.alicdn.com/imgextra/i1/O1CN01TQNS171LbgkIvc8Xa_!!6000000001318-2-tps-1000-264.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      num: 0,
      envTxt: ''
    }
  },
  created () {
    if (this.$route.query.hasOwnProperty('token')) {
      localStorage.setItem('token', this.$route.query.token)
    }
    if (location.host !== '3d-zuanshi.semoh.cn') {
      this.envTxt = `测试环境 域名：${location.host}`
    }
  },
  methods: {
    goDesign () {
      // this.check()
      // if (this.num < 10) return
      location.href = '/design.html'
    },
    goComboDesign () {
      // this.check()
      // if (this.num < 10) return
      location.href = '/design.html?isCombo=1'
    },
    goMyDesign () {
      // this.check()
      // if (this.num < 10) return
      this.$router.push('/mydesign')
    },
    buyGem () {
      // this.check()
      this.$toast.success('暂未开放功能，敬请期待！')
    },
    buyDiamond () {
      // this.check()
      // if (this.num < 10) return
      this.$router.push('/diamondList?source=buy')
    },
    check () {
      this.num++
      this.$toast.success('暂未开放功能，敬请期待！')
    }
  }
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
  .env-tip {
    position: fixed;
    bottom: 0;
    right: 0;
    color: red;
    background: #fff;
    padding: 0 10px;
  }
}
</style>
