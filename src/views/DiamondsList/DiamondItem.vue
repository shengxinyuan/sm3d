<template>
  <div class="diamond-item">
    <div class="diamond-item-img-box">
      <img class="diamond-item-img" src="../../assets/diamond-list/diamond.webp" alt="">
      <div class="diamond-img-tip"></div>
      <div class="diamond-ct">0.30ct</div>
      <div class="diamond-count">￥1,230</div>
    </div>
    <div class="info-box">
      <div class="info-item">
        <div class="info-item-cont">
          <span class="label">颜色</span>
          <span class="value">A</span>
        </div>
        <div class="info-item-cont">
          <span class="label">净度</span>
          <span class="value">A</span>
        </div>
        <div class="info-item-cont">
          <span class="label">切工</span>
          <span class="value">A</span>
        </div>
        <div class="info-item-cont">
          <span class="label">对称</span>
          <span class="value">A</span>
        </div>
        <div class="info-item-cont">
          <span class="label">抛光</span>
          <span class="value">A</span>
        </div>
        <div class="info-item-cont">
          <span class="label">荧光</span>
          <span class="value">A</span>
        </div>
      </div>
      <div class="info-item-GIA">
        <div class="num">GIA2386635530</div>
        <div class="desc-btn">查看GIA证书</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  computed: {},
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.diamond-item {
  background: rgb(72, 72, 79);
  border-radius: 10px;
  display: flex;
  margin: 12px 30px 0 30px;
  overflow: hidden;
  align-items: center;
  .diamond-item-img-box {
    position: relative;
    width: 30%;
    background: rgb(193, 177, 138);
    padding: 30px 0;
    color: rgb(52, 52, 60);
    .diamond-item-img {
      width: 80px;
    }
    .diamond-img-tip {
      position: absolute;
      left: 0;
      top: 0;
      width: 104px;
      height: 104px;
      background: url('../../assets/diamond-list/natural.png') no-repeat center/100%;
    }
    .diamond-ct {
      font-size: 20px;
      margin: 20px 0;
    }
    .diamond-count {
      font-size: 28px;
    }
  }
  .info-box {
    width: 70%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    .info-item-GIA {
      display: flex;
      height: 60px;
      align-items: center;
      font-size: 24px;
      color: rgb(153, 153, 153);
      line-height: 40px;
      .num {
        flex: 1;
        text-align: left;
      }
      .desc-btn {
        border: 1px solid rgb(193, 177, 138);
        border-radius: 20px;
        height: 40px;
        margin-left: 20px;
        font-size: 22px;
      }
    }
    .info-item {
      display: flex;
      .info-item-cont {
        flex: 1;
        .label {
          display: block;
          font-size: 24px;
          color: #fff;
          height: 60px;
          line-height: 60px;
        }
        .value {
          display: block;
          font-size: 24px;
          color: rgb(193, 177, 138);
          height: 60px;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
