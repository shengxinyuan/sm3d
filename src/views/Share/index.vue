<template>
  <div class="share">

    <Loading v-if="loading" />

    <div class="page-header">
      用户{{saveDesignInfo.nickname || '-'}} 给您分享了他设计的钻戒
    </div>

    <img class="img2" src="../../assets/diamond-list/bg.png" alt="" />
    <div class="web3d-cont">
      <div id="web3d" style="70vh"></div>
    </div>

    <section class="page-footer">
      <div class="list">
        <div class="order-cell">
          <span class="order-cell__label">价格：</span>
          <span class="order-cell__value">¥ {{price || '-'}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">款式：</span>
          <span class="order-cell__value">{{saveDesignInfo.title}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">视角：</span>
          <span class="order-cell__value">360°任意切换</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">钻石：</span>
          <span class="order-cell__value">GIA认证</span>
        </div>
      </div>
      <div class="buy-group">
        <img class="qr-code" src="../../assets/diamond-list/QRcode.png" alt="" />
        <div class="tip" >下载奢美饰界APP，设计你的钻戒！</div>
      </div>
    </section>

  </div>
</template>

<script>
import designMixin from '../../mixins/design'

export default {
  mixins: [designMixin],
  props: [],
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.share {
  text-align: left;
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  color: #fff;
  background: rgb(37, 37, 42);
  .img2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 170px);
    z-index: 11111;
    pointer-events: none;
    opacity: 0.5;
  }
}

.web3d-cont {
  height: calc(100vh - 170px);
  position: relative;
  #web3d {
    & > div {
      background: rgb(37, 37, 42) !important;
    }
  }
  img {
    position: absolute;
    width: 100px;
    right: 0;
    top: 0;
    z-index: 999;
  }
}
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  z-index: 22;
  height: 50px;
  padding: 0 20px;
  line-height: 50px;
  font-size: 14px;
}
.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(37, 37, 42);
  .list {
    padding: 15px 15px;
    .order-cell {
      color: #ccc;
      font-size: 12px;
      line-height: 2;
    }
  }
  .btns-group {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 81px;
  }
  .buy-group {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    background-color: rgb(72, 72, 79);
    .qr-code {
      display: block;
      width: 60px;
      height: 60px;
    }
    .tip {
      flex: 1;
      text-align: right;
    }
  }
}

</style>
