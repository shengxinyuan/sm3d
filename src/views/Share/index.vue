<template>
  <div class="share">

    <Loading v-if="loading" />

    <div class="page-header">
      用户186-XXXX-2206 给您分享了他设计的钻戒
    </div>

    <img class="img2" src="../../assets/diamond-list/bg.png" alt="" />
    <div class="web3d-cont">
      <div id="web3d" style="70vh"></div>
    </div>

    <section class="page-footer">
      <div class="list">
        <div class="order-cell">
          <span class="order-cell__label">价格：</span>
          <span class="order-cell__value">¥ {{ksInfo.price || '-'}}</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">款式：</span>
          <span class="order-cell__value">智能定制款式</span>
        </div>
        <div class="order-cell">
          <span class="order-cell__label">视角：</span>
          <span class="order-cell__value">随意拖动</span>
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
import Loading from '../../components/3DLoading'
import { resourceDomainName, baseUrl } from '../../const/design';
import { getUrlParam } from '../../util/index';

export default {
  components: {
    Loading
  },
  props: [],
  data() {
    return {
      loading: true,
      ksInfo: {},
    };
  },
  computed: {},
  created() {

    // 加载账号信息
    this.$store.dispatch('loadUserInfo');

    const design_bn = getUrlParam('bn');

    this.$store.dispatch('getDesignInfo', { design_bn }).then((res) => {
      this.ksInfo = res.data
      console.log(res);
      this.ksInfo.price = '12000'
    });
    
  },
  mounted() {
    // 请求：材质、宝石、设计数据
    Promise.all([
      this.$store.dispatch('loadDesignInfo'),
      this.$store.dispatch('loadMetalList'),
      this.$store.dispatch('loadMetalWeb'),
      this.$store.dispatch('loadGemList'),
      this.$store.dispatch('loadGemWeb'),
    ]).then(() => {
      console.log('mounted -> data loaded -> init3D');
      this.init3D();
    });
  },

  methods: {
    // 初始化3D
    async init3D() {
      const {
        designInfo,
        partId,
        mainPartId,
        metalWeb,
        metalWebDefault,
        gemWeb,
        gemWebDefault,
        metalId,
      } = this.$store.state;

      console.log('mainPartId', partId, mainPartId);

      // 加载3D第一步：初始化3D场景
      this.my3d = Bavlo.initWeb3D(
        baseUrl,
        'web3d',
        true,
        resourceDomainName,
        false
      );

      // 加载3D第二步：定义3D窗口尺寸
      this.my3d.onWindowResize(2);
      window.onresize = () => {
        this.my3d.onWindowResize(2);
      };

      // 加载3D第三步：初始化web材质
      this.my3d.initUserMatInfo(
        metalWebDefault,
        metalWeb,
        gemWebDefault,
        gemWeb
      );

      // 加载3D第四步：设置3D场景背景色
      this.my3d.changeBackground('37,37,42');

      // 加载3D第五步：加载款式3D
      this.my3d.loadVarDesign(designInfo, mainPartId, partId.toString());

      setTimeout(() => {
        // 设置材质
        this.loading = false
        this.my3d.changeCameraPos(false, -45, 85, -65);
        
      }, 1000);
    },
  },

};
</script>

<style lang="scss" scoped>
.share {
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
