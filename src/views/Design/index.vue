<template>
  <div class="design">
    
    <Loading v-if="loading" />

    <img class="img2" src="../../assets/diamond-list/bg.png" alt="" />
    <div class="web3d-cont">
      <div id="web3d" style="70vh"></div>
    </div>

    <section class="page-footer" v-if="footerTabId === 'design'">
      <div class="design-tabs-title">
        <div class="back" @click="() => (footerTabId = 'default')">
          <van-icon name="arrow-left" />返回
        </div>
        <a
          :class="designTab === 1 ? 'active' : ''"
          @click="
            () => {
              designTab = 1;
              edit3dPartType = 1;
            }
          "
          >花头款式</a
        >
        <a
          :class="designTab === 2 ? 'active' : ''"
          class=""
          @click="
            () => {
              designTab = 2;
              edit3dPartType = 2;
            }
          "
          >戒托款式</a
        >
        <a
          :class="designTab === 3 ? 'active' : ''"
          class=""
          @click="() => (designTab = 3)"
          >戒托材质</a
        >
      </div>
      <div class="design-tabs-cont">
        <div class="list" v-if="designTab === 1">
          <div
            :class="$store.state.design.partId === v.id ? 'active' : ''"
            class="item"
            v-for="(v, i) in $store.state.design.parts"
            :key="i"
            @click="
              () => {
                changePartId(v.id);
              }
            "
          >
            <div class="img-box">
              <i class="img-border" />
              <i
                class="parts-img img"
                :style="{
                  backgroundImage:
                    'url(' +
                    'https://design.bavlo.com/PartRes/webImg/' +
                    v.defaultImg +
                    '!600)',
                }"
              ></i>
            </div>
            <div class="txt">花头{{ i | formatIndex }}</div>
          </div>
        </div>
        <div class="list" v-if="designTab === 2">
          <div
            :class="$store.state.design.mainPartId === v.id ? 'active' : ''"
            class="item"
            v-for="(v, i) in $store.state.design.mainParts"
            :key="i"
            @click="
              () => {
                changeMainPartId(v.id);
              }
            "
          >
            <div class="img-box">
              <i class="img-border" />
              <i
                class="main-parts-img img"
                :style="{
                  backgroundImage:
                    'url(' +
                    'https://design.bavlo.com/PartRes/webImg/' +
                    v.defaultImg +
                    '!600)',
                }"
              ></i>
            </div>
            <div class="txt">戒托{{ i | formatIndex }}</div>
          </div>
        </div>
        <div class="list" v-if="designTab === 3">
          <div
            :class="$store.state.design.metalId === v.id ? 'active' : ''"
            class="item"
            v-for="(v, i) in $store.state.design.metals"
            :key="i"
            @click="
              () => {
                changeMetalId(v.id);
              }
            "
          >
            <div class="img-box">
              <i class="img-border" />
              <i
                class="metals-img img"
                :style="{
                  backgroundImage:
                    'url(' +
                    'https://design.bavlo.com/IconRes/RoundMetalIcons/' +
                    v.id +
                    '.png)',
                }"
              ></i>
            </div>
            <div class="txt">{{ v.nameCn }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-footer" v-else-if="footerTabId === 'diamond'">
      <div class="design-tabs-title">
        <div class="back" @click="() => (footerTabId = 'default')">
          <van-icon name="arrow-left" />返回
        </div>
        <a class="active">选择主钻</a>
      </div>
      <div class="design-tabs-cont">
        <img
          v-if="!this.$store.state.design.diamondId"
          src="../../assets/diamond-list/add-diamond.png"
          @click="selectDiamond"
          alt=""
          width="100%"
        />
        <div class="diamond-detail" v-else>
          <div class="diamond-info-cont">
            <img
              class="diamond-img"
              src="../../assets/diamond-list/diamond.webp"
              alt=""
            />
            <div class="diamond-info">
              <p>GIA {{ $store.state.design.diamondInfo.size }}</p>
              <p>详情: {{ $store.state.design.diamondInfo.detail || "_" }}</p>
              <p>售价 ¥ {{ $store.state.design.diamondInfo.price || "-" }}元</p>
            </div>
          </div>
          <a class="change-btn" @click="selectDiamond">
            <van-icon name="exchange" /><span class="txt">更换</span></a
          >
        </div>
      </div>
    </section>

    <section class="page-footer" v-else-if="footerTabId === 'mark'">
      <div class="design-tabs-title">
        <div class="back" @click="markBack">
          <van-icon name="arrow-left" />返回
        </div>
        <a class="active">文字印记</a>
      </div>
      <div class="design-tabs-cont">
        <div class="mark-cont">
          <input
            class="mark-input"
            @keyup="onKeyup"
            type="text"
            maxlength="16"
            v-model="mark"
            placeholder="印刻彼此名字或誓言(16字内)"
          />
          <a class="mark-btn" @click="saveMark">确认</a>
        </div>
      </div>
    </section>

    <section class="page-footer" v-else>
      <div class="btns-group">
        <a class="option" @click="() => (footerTabId = 'design')">
          <i class="icon-design"></i>
          <span class="txt">设计</span>
        </a>
        <a class="option" @click="() => (footerTabId = 'diamond')">
          <i class="icon-diamond"></i>
          <span class="txt">选钻</span>
        </a>
        <a class="option" @click="() => (footerTabId = 'mark')">
          <i class="icon-mark"></i>
          <span class="txt">印记</span>
        </a>
        <a class="option" @click="() => (handPicker = true)">
          <i class="icon-try"></i>
          <span class="txt">手寸</span>
        </a>
      </div>
      <div class="buy-group">
        <div class="cost">¥ 22000</div>
        <div class="buy-btn" @click="confirmDesign">确认设计</div>
      </div>
    </section>

    <van-popup v-model="handPicker" round position="bottom">
      <van-picker
        show-toolbar
        default-index="8"
        :columns="handInch"
        @cancel="handPicker = false"
        @confirm="changeHandInch"
      />
    </van-popup>
  </div>
</template>

<script>
import Loading from '../../components/3DLoading'
import { resourceDomainName, baseUrl, handInch } from '../../const/design';
import { getUrlParam } from '../../util/index';

export default {
  components: {
    Loading
  },
  props: [],
  data() {
    return {
      // 手寸
      handInch,
      handPicker: false,

      // v-model 印记
      mark: '',

      footerTabId: 'default',
      designTab: 1,

      // 1: 花头 2:戒臂
      edit3dPartType: 1,

      // 截图图片地址
      imgUrl: '',

      //loading
      loading: true,

      // 保存的设计信息
      saveDesignInfo: null,
      design_bn: '',
    };
  },
  computed: {},
  created() {
    // 加载账号信息
    this.$store.dispatch('loadUserInfo');
    const diamondId = getUrlParam('diamondId');
    this.getDiamond(diamondId, true)
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

      const design_bn = getUrlParam('bn');
      const partId = getUrlParam('partId');
      const mainPartId = getUrlParam('mainPartId');
      const metalId = getUrlParam('metalId');
      const mark = getUrlParam('mark');
      const currentHandInch = getUrlParam('currentHandInch');
      const diamondId = getUrlParam('diamondId');

      if (design_bn) {
        this.$store.dispatch('getDesignInfo', { design_bn }).then((res) => {
          this.saveDesignInfo = res.data
          this.design_bn = design_bn
          const {
            ring_size,
            diamond_id,
            ring_arm_id,
            flower_head_id,
            texture_id,
            ring_print,
          } = res.data

          this.getDiamond(diamond_id)
          console.log({
            partId: partId || flower_head_id,
            mainPartId: mainPartId || ring_arm_id,
            metalId: metalId || texture_id,
            mark: mark || ring_print,
            currentHandInch: currentHandInch || ring_size,
            diamondId: diamondId || diamond_id
          })
          this.mark = mark || ring_print || ''
          
          this.setRenderParams({
            partId: partId || flower_head_id,
            mainPartId: mainPartId || ring_arm_id,
            metalId: metalId || texture_id,
            mark: mark || ring_print,
            currentHandInch: currentHandInch || ring_size,
            diamondId: diamondId || diamond_id
          })
          
        });
      } else {
        this.setRenderParams({
          partId,
          mainPartId,
          metalId,
          mark,
          currentHandInch,
        })
      }
    });
  },

  methods: {
    // 设置参数
    setRenderParams(obj) {
      for(let key in obj) {
        if (!obj[key]) {
          delete obj[key]
        }
      }

      this.$store.commit('setState', obj);
      setTimeout(() => {
        this.init3D();
      }, 0)
    },

    // 获取钻石信息
    getDiamond(diamondId, openTab) {
      if (diamondId) {
        this.$store.dispatch('getDiamondInfo', { id: diamondId });
        this.$store.commit('setState', {
          diamondId,
        });

        if (openTab) {
          this.footerTabId = 'diamond';
        }
      }
    },
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
      } = this.$store.state.design;

      console.log('partId', partId);

      // 加载3D第一步：初始化3D场景
      this.my3d = Bavlo.initWeb3D(
        baseUrl,
        'web3d',
        false,
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
        this.changeMetalId(metalId);
        // 设置角度
        this.my3d.changeCameraPos(false, -45, 85, -65);
        
      }, 3000);

      // 获取价格
      this.getPrice()
    },

    /**
     * 确认设计
     */
    confirmDesign() {
      const { currentHandInch, diamondId } = this.$store.state.design;

      if (!currentHandInch) {
        this.$dialog
          .alert({
            title: '请选择手寸',
            message: '您未选择手寸，请选择戒指手寸大小',
          })
          .then(() => {
            this.handPicker = true;
          });
        return;
      }

      if (!diamondId) {
        this.$dialog
          .alert({
            title: '请选择钻石',
            message: '您未选择钻石，请选择钻石',
          })
          .then(() => {
            this.footerTabId = 'diamond';
          });
        return;
      }
      this.loading = true;
      this.my3d.changeBackground('72,72,79');
      this.my3d.changeCameraPos(false, -45, 85, -65);

      setTimeout(() => {
        const canvas = document.querySelector('#mainCanvas')
        this.imgUrl = this.my3d.getDesignImage(canvas.offsetWidth * 2, canvas.offsetHeight * 2);
        this.$store
          .dispatch('submitDesign', {
            image: this.imgUrl,
            bn: this.design_bn,
          })
          .then(({ data }) => {
            console.log(data);
            this.$router.push(`/order?bn=${data}`)
          });
      }, 300);
    },

    /**
     * 钻石选择页
     */
    selectDiamond() {
      const { mark, mainPartId, partId, metalId, diamondId, currentHandInch } = this.$store.state.design;
      const queryObj = {};

      queryObj.mark = mark;
      queryObj.mainPartId = mainPartId;
      queryObj.partId = partId;
      queryObj.metalId = metalId;
      queryObj.diamondId = diamondId;
      queryObj.currentHandInch = currentHandInch;
      queryObj.bn = this.design_bn;

      let url = '//' + location.host + location.pathname + '?';
      for (let key in queryObj) {
        if (queryObj[key]) {
          url += key + '=' + queryObj[key] + '&';
        }
      }
      url = url.slice(0, url.length - 1);

      this.$router.push(`/diamondList?backUrl=${encodeURIComponent(url)}`)
    },

    /**
     * 试戴 todo
     */
    tryOn() {},

    /**
     * 保存刻印
     */
    saveMark() {
      this.$store.commit('setState', {
        mark: this.mark,
      });
      
      this.my3d.printUserTextOfLayer(940, this.mark)
      this.my3d.changeCameraPos(false, 0, 80, -60)
      
    },

    // 刻印返回
    markBack() {
      this.footerTabId = 'default'
      this.my3d.setRotationState(true);
    },

    onKeyup(e) {
      if (e.keyCode == '13') {
        //回车执行查询
        this.saveMark()
      }
    },

    /**
     * 切换手寸
     * @param handInch
     */
    changeHandInch(handInch) {
      this.$store.commit('setState', {
        currentHandInch: handInch,
      });
      this.handPicker = false;
    },

    /**
     * 切换花头
     * @param partId
     */
    changePartId(partId) {
      console.log('partId', partId);
      let loadState = this.my3d.getLoadModelState();
      if (loadState == 2) {
        this.my3d.switchPart(this.edit3dPartType, Number(partId));
        this.$store.commit('setState', {
          partId,
        });
      }
    },

    /**
     * 切换戒臂
     * @param mainPartId
     */
    changeMainPartId(mainPartId) {
      console.log('mainPartId', mainPartId);
      let loadState = this.my3d.getLoadModelState();
      if (loadState == 2) {
        this.my3d.switchPart(this.edit3dPartType, Number(mainPartId));
        this.$store.commit('setState', {
          mainPartId,
        });

        setTimeout(() => {
          if (this.mark) {
            this.my3d.printUserTextOfLayer(940, this.mark)
            setTimeout(() => {
              this.my3d.setRotationState(true);
            }, 200)
          }
        }, 1000);
      }
    },
    /**
     * 切换材料
     * @param metalId
     */
    changeMetalId(metalId) {
      const { metals } = this.$store.state.design;
      let material;
      metals.forEach((item) => {
        if (+item.id === +metalId) {
          material = item;
        }
      });

      console.log('changeMetalId', metalId, material);

      this.$store.commit('setState', {
        metalId,
      });
      // 金属图层
      material && this.my3d.customizeMetalClass('金属图层', material);
    },

    getPrice() {
      const {
        partId,
        mainPartId,
        metalId,
        currentHandInch,
        diamondId
      } = this.$store.state.design;

      console.log();

      this.$store.dispatch('getDesignPrice', {
        currentHandInch: currentHandInch || 13,
        partId,
        mainPartId,
        metalId,
        diamondId
      });
    }
  },

  filters: {
    formatIndex(num) {
      num = num + 1;
      return num < 10 ? '0' + num : num;
    },
  },
};
</script>

<style lang="scss" scoped>
.design {
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
.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(37, 37, 42);
  .btns-group {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 81px;
    .option {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      font-size: 12px;
      color: rgb(193, 177, 138);
      .icon-design {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../../assets/design/design.png") no-repeat center/100%;
      }
      .icon-diamond {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../../assets/design/diamond.png") no-repeat center/100%;
      }
      .icon-mark {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../../assets/design/mark.png") no-repeat center/100%;
      }
      .icon-try {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../../assets/design/try.png") no-repeat center/100%;
      }
      .txt {
        margin: 4px 0 10px;
        display: block;
      }
    }
  }
  .buy-group {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 15px 40px;
    background-color: rgb(72, 72, 79);
    .cost {
      flex: 1;
      color: rgb(193, 177, 138);
      height: 40px;
      line-height: 40px;
    }
    .buy-btn {
      width: 150px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      background-color: rgb(193, 177, 138);
      color: rgb(52, 52, 60);
      text-align: center;
    }
  }
  .design-tabs-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: rgb(72, 72, 79);
    color: rgb(157, 157, 157);
    font-size: 12px;
    .back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      color: rgb(157, 157, 157);
      background-color: rgb(84, 84, 91);
      height: 50px;
    }
    & > a {
      flex: 1;
      text-align: center;
    }
    .active {
      color: rgb(193, 177, 138);
      font-size: 14px;
    }
  }
  .design-tabs-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    background: #3c3c44;
    .diamond-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 15px;
      .diamond-info-cont {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90px;
        font-size: 12px;
        flex: 1;
        background-color: rgb(72, 72, 79);
        border-radius: 10px 0px 0px 10px;
        color: rgb(193, 177, 138);
        .diamond-img {
          width: 60px;
          margin: 15px;
        }
        .diamond-info {
          flex: 1;
        }
      }
      .change-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 60px;
        height: 90px;
        background-color: rgb(84, 84, 91);
        color: rgb(157, 157, 157);
        border-radius: 0px 10px 10px 0px;
        & > i,
        span {
          display: block;
        }
        & > .txt {
          padding-top: 6px;
          font-size: 12px;
        }
      }
    }
    .mark-cont {
      display: flex;
      box-sizing: border-box;
      padding: 15px;
      width: 100%;
      .mark-input {
        flex: 1;
        display: block;
        height: 30px;
        border-radius: 15px;
        background-color: #48484f;
        color: #fff;
        padding: 2px 8px;
        border: none;
      }
      .mark-btn {
        width: 100px;
        display: block;
        width: 60px;
        color: rgb(0, 0, 0);
        font-size: 16px;
        background-color: rgb(193, 177, 138);
        text-align: center;
        margin-left: 15px;
        height: 36px;
        line-height: 36px;
        border-radius: 18px;
      }
    }
    .list {
      display: flex;
      align-items: center;
      overflow-x: scroll;
      width: 100%;
      height: 120px;
      font-size: 12px;
      color: rgb(157, 157, 157);
      padding: 0 10px;
      .item.active {
        .img-border {
          border: 2px solid #f9b308;
        }
        .txt {
          color: rgb(193, 177, 138);
          font-size: 12px;
        }
      }
      .item {
        width: 60px;
        margin: 0 10px;
        .img-box {
          display: block;
          width: 60px;
          height: 60px;
          border-radius: 30px;
          position: relative;
        }
        .img-border {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          width: 60px;
          height: 60px;
          border-radius: 30px;
          z-index: 2;
          box-sizing: border-box;
        }
        .img {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          width: 60px;
          height: 60px;
          border-radius: 30px;
          background-repeat: no-repeat;
          background-position: center;
        }
        .parts-img {
          background-size: 180% 180%;
        }
        .main-parts-img {
          background-size: 160% 120%;
        }
        .metals-img {
          background-size: 120% 120%;
        }
        .txt {
          width: 60px;
          height: 16px;
          line-height: 16px;
          margin-top: 4px;
          text-align: center;
        }
      }
    }
  }
}

</style>
