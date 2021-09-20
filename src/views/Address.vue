<template>
  <div>
    <van-nav-bar
      title="地址列表"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
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
      list: [
        {
          id: 1,
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: 2,
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  created () {
    this.loadAddressInfo()
  },
  methods: {
    loadAddressInfo () {
      this.$get({
        url: 'api/address'
      }).then((res) => {
        this.list = res.data
        this.chosenAddressId = this.list[0].id
      }).catch(() => {})
    },
    onClickLeft () {
      this.$router.back()
    },
    onAdd () {
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
  .bag-bar {
    .van-icon {
      color: #000 !important;
    }
    .van-nav-bar__content {
      height: 50px;
    }
    .van-nav-bar__title {
      line-height: 50px;
      font-size: 16px;
      font-weight: 700 !important;
      color: #000;
    }
    .van-nav-bar__arrow {
      font-size: 24px;
    }
    .van-nav-bar__left, .van-nav-bar__right {
      padding: 16px;
    }
  }
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
