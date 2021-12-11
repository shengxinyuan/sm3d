<template>
  <div class="title-bar-box">
    <!-- <div class="status-bar"></div> -->
    <van-nav-bar
      :title="title"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      safe-area-inset-top
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
        	window.history.go(-1)
				} else if (window.uni.reLaunch) {
					window.uni.navigateBack();
				}
      }
    },
  }
</script>

<style lang="scss" scoped>
.title-bar-box {
	/* height: 72px; */
  height: 44px;
  background: #fff;
}
/* .status-bar {
  width: 100%;
  height: 24px;
  background: #fff;
  position: fixed;
  top:0;
  z-index: 9;
} */
/deep/.bag-bar {
    position: fixed;
    width: 100%;
    /* top: 24px; */
    top: 0;
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