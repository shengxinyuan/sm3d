<template>
  <div class="diamond-item">
    <div class="diamond-item-img-box">
      <img class="diamond-item-img" src="../../../assets/diamond-list/diamond.webp" alt="">
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
  name: 'diamondItem',
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
  border-radius: 5px;
  display: flex;
  margin: 6px 15px 0 15px;
  overflow: hidden;
  align-items: center;
  .diamond-item-img-box {
    position: relative;
    width: 30%;
    background: rgb(193, 177, 138);
    padding: 15px 0;
    color: rgb(52, 52, 60);
    .diamond-item-img {
      width: 40px;
    }
    .diamond-img-tip {
      position: absolute;
      left: 0;
      top: 0;
      width: 52px;
      height: 52px;
      background: url('../../../assets/diamond-list/natural.png') no-repeat center/100%;
    }
    .diamond-ct {
      font-size: 10px;
      margin: 10px 0;
    }
    .diamond-count {
      font-size: 14px;
    }
  }
  .info-box {
    width: 70%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .info-item-GIA {
      display: flex;
      height: 30px;
      align-items: center;
      font-size: 12px;
      color: rgb(153, 153, 153);
      line-height: 20px;
      .num {
        flex: 1;
        text-align: left;
      }
      .desc-btn {
        border: 1px solid rgb(193, 177, 138);
        border-radius: 10px;
        height: 20px;
        margin-left: 10px;
        font-size: 12px;
      }
    }
    .info-item {
      display: flex;
      .info-item-cont {
        flex: 1;
        .label {
          display: block;
          font-size: 12px;
          color: #fff;
          height: 30px;
          line-height: 30px;
        }
        .value {
          display: block;
          font-size: 12px;
          color: rgb(193, 177, 138);
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
