<template>
  <div class="design">
    <div class="web3d-cont">
      <div id="web3d" style="70vh"></div>
      <img :src="imgUrl" alt="">
    </div>

    <section class="page-footer" v-if="footerTabId === 'design'">
      <div class="design-tabs-title">
        <div class="back" @click="() => footerTabId = 'default'"><van-icon name="arrow-left" />返回</div>
        <a :class="designTab === 1 ? 'active' : ''" @click="() => {designTab = 1; edit3dPartType = 1}">花头款式</a>
        <a :class="designTab === 2 ? 'active' : ''" class="" @click="() => {designTab = 2; edit3dPartType = 2}">戒托款式</a>
        <a :class="designTab === 3 ? 'active' : ''" class="" @click="() => designTab = 3">戒托材质</a>
      </div>
      <div class="design-tabs-cont">
        <div class="list" v-if="designTab === 1">
          <div :class="$store.state.partId === v.id ? 'active' : ''" class="item" v-for="(v, i) in $store.state.parts" :key="i" @click="() => {changePartId(v.id)}">
            <div class="img-box">
              <i class="img-border" />
              <i class="parts-img img" :style="{'backgroundImage': 'url(' + 'https://design.bavlo.com/PartRes/webImg/' + v.defaultImg + '!600)'}"></i>
            </div>
            <div class="txt">花头{{i | formatIndex}}</div>
          </div>
        </div>
        <div class="list" v-if="designTab === 2">
          <div :class="$store.state.mainPartId === v.id ? 'active' : ''" class="item" v-for="(v, i) in $store.state.mainParts" :key="i" @click="() => {changeMainPartId(v.id)}">
            <div class="img-box">
              <i class="img-border" />
              <i class="main-parts-img img" :style="{'backgroundImage': 'url(' + 'https://design.bavlo.com/PartRes/webImg/' + v.defaultImg + '!600)'}"></i>
            </div>
            <div class="txt">戒托{{i | formatIndex}}</div>
          </div>
        </div>
        <div class="list" v-if="designTab === 3">
          <div :class="$store.state.metalId === v.id ? 'active' : ''" class="item" v-for="(v, i) in $store.state.metals" :key="i" @click="() => {changeMetalId(v.id)}">
            <div class="img-box">
              <i class="img-border" />
              <i class="metals-img img" :style="{'backgroundImage':  'url(' + 'https://design.bavlo.com/IconRes/RoundMetalIcons/' + v.id + '.png)'}"></i>
            </div>
            <div class="txt">{{v.nameCn}}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-footer" v-else-if="footerTabId === 'mark'">
      <div class="design-tabs-title">
        <div class="back" @click="() => footerTabId = 'default'"><van-icon name="arrow-left" />返回</div>
        <a class="active">文字印记</a>
      </div>
      <div class="design-tabs-cont">
        <div class="mark-cont">
          <input class="mark-input" type="text" maxlength="15" v-model="mark" placeholder="印刻彼此名字或誓言(15字内)" />
          <a class="mark-btn" @click="saveMark">确认</a>
        </div>
      </div>
    </section>

    <section class="page-footer" v-else>
      <div class="btns-group">
        <a class="option" @click="() => footerTabId = 'design'">
          <i class="icon-design"></i>
          <span class="txt">设计</span>
        </a>
        <a class="option" @click="selectDiamond">
          <i class="icon-diamond"></i>
          <span class="txt">选钻</span>
        </a>
        <a class="option" @click="() => footerTabId = 'mark'">
          <i class="icon-mark"></i>
          <span class="txt">印记</span>
        </a>
        <a class="option" @click="() => handPicker = true">
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
import { resourceDomainName, normalMapUrl, baseUrl, handInch } from './const'

export default {
  components: {},
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

      imgUrl: ''

    };
  },
  computed: {},
  created() {
    // iframe console
    const iframe = document.createElement("iframe");
    iframe.setAttribute("style", "display:none;");
    document.body.appendChild(iframe);
    this.iframeWindow = iframe.contentWindow;
    // end iframe

    // 加载账号信息
    this.$store.dispatch('loadUserInfo')

    // 请求：材质、宝石、设计数据
    
  },
  mounted() {
    Promise.all([
      this.$store.dispatch('loadDesignInfo'),
      this.$store.dispatch('loadMetalList'),
      this.$store.dispatch('loadMetalWeb'),
      this.$store.dispatch('loadGemList'),
      this.$store.dispatch('loadGemWeb'),
    ]).then(() => {
      this.iframeWindow.console.log('mounted -> data loaded -> init3D');
      this.init3D();
    })
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
      } = this.$store.state

      // 加载3D第一步：初始化3D场景
      this.my3d = Bavlo.initWeb3D(baseUrl, 'web3d', false, resourceDomainName, false);

      // 加载3D第二步：定义3D窗口尺寸
      this.my3d.onWindowResize(2);
      window.onresize = () => {
        this.my3d.onWindowResize(2);
      };

      // 加载3D第三步：初始化web材质
      this.my3d.initUserMatInfo(metalWebDefault, metalWeb, gemWebDefault, gemWeb);

      // 加载3D第四步：设置3D场景背景色
      this.my3d.changeBackground('#222');

      // 加载3D第五步：加载款式3D
      this.my3d.loadVarDesign(designInfo, mainPartId, partId.toString());
    },

    /**
     * 确认设计
     */
    confirmDesign() {
      const { currentHandInch, diamondId } = this.$store.state

      if (!currentHandInch) {
        this.$dialog.alert({
          title: '请选择手寸',
          message: '您未选择手寸，请选择戒指手寸大小',
        }).then(() => {
          this.handPicker = true
        });
        return
      }

      if (!diamondId) {
        this.$dialog.alert({
          title: '请选择钻石',
          message: '您未选择钻石，请选择钻石',
        }).then(() => {
          // this.handPicker = true
        });
        return
      }


      this.my3d.changeCameraPos(false, -60, 120, -80)
     
      setTimeout(() => {
        this.imgUrl = this.my3d.getDesignImage()
        this.iframeWindow.console.log(this.imgUrl)

        this.$store.dispatch('submitDesign', {
          image: this.imgUrl
        }).then((res) => {
          location.href = '/order'
        })
      }, 300)
      
    },

    /**
     * 钻石选择页
     */
    selectDiamond() {
      location.href = '/diamondList'
    },

    /**
     * 试戴 todo
     */
    tryOn() {

    },
    
    /**
     * 保存刻印
     */
    saveMark() {
      this.$store.commit('setState', {
        mark: this.mark
      })
    },

    /**
     * 切换手寸
     * @param handInch
     */
    changeHandInch(handInch) {
      this.$store.commit('setState', {
        currentHandInch: handInch
      })
      this.handPicker = false
    },

    /**
     * 切换花头
     * @param partId
     */
    changePartId(partId) {
      this.iframeWindow.console.log('partId', partId)
      let loadState = this.my3d.getLoadModelState()
      if (loadState == 2) {
        this.my3d.switchPart(this.edit3dPartType, Number(partId));
        this.$store.commit('setState', {
          partId
        })
      }
    },

    /**
     * 切换戒臂
     * @param mainPartId
     */
    changeMainPartId(mainPartId) {
      this.iframeWindow.console.log('mainPartId', mainPartId)
      let loadState = this.my3d.getLoadModelState()
      if (loadState == 2) {
        this.my3d.switchPart(this.edit3dPartType, Number(mainPartId));
        this.$store.commit('setState', {
          mainPartId
        })
      }
    },
    /**
     * 切换材料
     * @param metalId
     */
    changeMetalId(metalId) {
      this.iframeWindow.console.log('changeMetalId', metalId)
      const { metals } = this.$store.state
      let material;
      this.$store.commit('setState', {
        metalId
      })

      metals.forEach(item => {
        if (item.id === metalId) {
          material = item
        }
      })

      // 金属图层
      this.my3d.customizeMetalClass('金属图层', material);
    },

  },
  
  filters: {
    formatIndex(num) {
      num = num + 1
      return num < 10 ? '0' + num : num
    }
  },

  
};
</script>

<style lang="scss" scoped>
.design {
  height: 100vh;
  color: #fff;
  background: #000;
}
.web3d-cont {
  height: calc(100vh - 170px);
  position: relative;
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
  .btns-group {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
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
        background: url('../assets/design/design.png') no-repeat center/100%;
      }
      .icon-diamond {
        display: block;
        height: 32px;
        width: 32px;
        background: url('../assets/design/diamond.png') no-repeat center/100%;
      }
      .icon-mark {
        display: block;
        height: 32px;
        width: 32px;
        background: url('../assets/design/mark.png') no-repeat center/100%;
      }
      .icon-try {
        display: block;
        height: 32px;
        width: 32px;
        background: url('../assets/design/try.png') no-repeat center/100%;
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
          height: 20px;
          line-height: 20px;
          margin-top: 4px;
          text-align: center;
        }
      }
    }
  }
}

</style>
