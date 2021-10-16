<template>
  <div class="title-bar-box">
    <van-nav-bar
      :title="title"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
  </div>
</template>

<script>
  export default {
		name: 'TitleBar',
    props: {
      title: {
        type: String,
        default: ''
      },
			type: {
				type: Number,
				default: 1 // 1默认返回 2uni返回
			}
    },
    methods: {
      onClickLeft () {
				if (this.type === 1) {
        	this.$router.back()
				} else if (window.uni.reLaunch) {
					window.uni.reLaunch({
						url: '../../pages/index/index'
					});
				}
      }
    },
  }
</script>

<style lang="scss" scoped>
.title-bar-box {
	height: 50px ;
}

/deep/.bag-bar {
    position: fixed;
    width: 100%;
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
      padding: 8px;
    }
  }
</style>