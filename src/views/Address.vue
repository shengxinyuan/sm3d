<template>
  <div class="address">
    <title-bar title="地址列表"/>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @select="select"
      editable=false
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenAddressId: 0,
      list: []
    }
  },
  created () {
    this.loadAddressInfo()
  },
  methods: {
    loadAddressInfo () {
      this.$get({
        url: '/api/address',
        data: {
          is_mine: 1
        },
        options: {
          token: localStorage.getItem('token')
        }
      }).then((res) => {
        this.list = res.data
        this.list.map((i) => {
          i.name = i.contact
          i.tel = i.mobile
          i.address = i.province + '-' + i.area + '-' + i.city + '-' + i.address
        })
      }).catch(() => {})
    },
    onAdd () {
      if (window.uni) {
        window.uni.navigateTo({
          url: '../my/addAddress?is_mine=1&onShow=0'
        })
      }
    },
    select (item, index) {
      this.$store.commit('setState', {
        currtAddress: item
      })
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .van-address-item__edit {
    display: none;
  }
  .van-address-item .van-radio__icon--checked .van-icon {
    // color: #c1b18a;
    background-color: #c1b18a;
    border-color: #c1b18a;
  }
  .van-button--danger {
    background-color: #c1b18a;
    border-color: #c1b18a;
  }
  .van-address-list__bottom {
    margin-bottom: 50px;
  }
}
</style>
