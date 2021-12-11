<template>
  <div class="design">
    <title-bar title="3D设计" />
    <Loading v-if="loading" />

    <img class="img2" src="../assets/diamond-list/bg.png" alt="" />
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
        <a
          :class="designTab === 4 ? 'active' : ''"
          @click="
            () => {
              designTab = 4;
              edit3dPartType = 4;
            }
          "
          >固定款式</a
        >
      </div>
      <div class="design-tabs-cont">
        <div class="list" v-if="designTab === 1">
          <div
            :class="!isCombo && $store.state.design.partId === v.id ? 'active' : ''"
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
            <div class="txt">花头{{ v.id }}</div>
          </div>
        </div>
        <div class="list" v-if="designTab === 2">
          <div
            :class="!isCombo && $store.state.design.mainPartId === v.id ? 'active' : ''"
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
            <div class="txt">戒托{{ v.id }}</div>
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
        <div class="list" v-if="designTab === 4">
          <div
            :class="isCombo && $store.state.design.comboId === v.id ? 'active' : ''"
            class="item"
            v-for="(v, i) in $store.state.design.comboList"
            :key="i"
            @click="
              () => {
                changeComboId(v.id);
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
                    'https://design.bavlo.com/design/' +
                    v.id +
                    '/web.png!600',
                }"
              ></i>
            </div>
            <div class="txt">款式{{ v.id }}</div>
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
        <!-- <img
          v-if="!this.$store.state.design.diamondId"
          src="../assets/diamond-list/add-diamond.png"
          @click="selectDiamond"
          alt=""
        /> -->
        <div
          class="design-add-diamond"
          v-if="!this.$store.state.design.diamondId"
          @click="selectDiamond"
        >添加钻石</div>
        <div class="diamond-detail" v-else>
          <div class="diamond-info-cont">
            <img
              class="diamond-img"
              src="../assets/diamond-list/diamond.webp"
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
        <a class="option" @click="openMark">
          <i class="icon-mark"></i>
          <span class="txt">印记</span>
        </a>
        <a class="option" @click="openHandInch">
          <i class="icon-hand"></i>
          <span class="txt">手寸</span>
        </a>
        <a class="option" @click="tryOn">
          <i class="icon-try"></i>
          <span class="txt">试戴</span>
        </a>
      </div>
      <div class="buy-group">
        <div class="cost">¥ {{ price | formatCost }}</div>
        <div class="buy-btn" @click="confirmDesign">确认设计</div>
      </div>
    </section>

    <van-popup v-model="handPicker" round position="bottom">
      <van-picker
        ref="picker"
        show-toolbar
        :columns="[{
          values: handInch,
          defaultIndex: 8
        }]"
        @cancel="handPicker = false"
        @confirm="changeHandInch"
      />
    </van-popup>
  </div>
</template>

<script>
import { handInch } from '../const/design';
import designMixin from '../mixins/design';

export default {
  mixins: [designMixin],
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
    };
  },
  mounted() {},

  methods: {
    /**
     * 确认设计
     */
    async confirmDesign() {
      const { currentHandInch, diamondId } = this.$store.state.design;

      // 未选择手寸
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

      // 未选择钻石
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

      // 是否在试戴中
      const state = this.my3d.getTryOnState();
      if (state !== 0) {
        this.my3d.setModelTryonMode(false, null);
        this.my3d.onWindowResize(2);
      }
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // 设置固定角度
      this.loading = true;
      this.my3d.changeBackground('72,72,79');
      this.setInitCameraPos();

      // 截图
      await new Promise(resolve => setTimeout(resolve, 200));
      const canvas = document.querySelector('#mainCanvas')
      this.imgUrl = this.my3d.getDesignImage(canvas.offsetWidth * 2, canvas.offsetHeight * 2);
      this.$store
        .dispatch('submitDesign', {
          image: this.imgUrl,
          bn: this.design_bn,
          isCombo: this.isCombo,
        })
        .then(({ data }) => {
          location.href = `/order/?bn=${data}`
        })
        .catch(({ message }) => {
          console.log(message);
        })
    },

    /**
     * 钻石选择页
     */
    selectDiamond() {
      const { mark, mainPartId, partId, metalId, diamondId, currentHandInch, comboId } = this.$store.state.design;
      const queryObj = {};

      queryObj.mark = mark;
      queryObj.mainPartId = mainPartId;
      queryObj.partId = partId;
      queryObj.metalId = metalId;
      queryObj.diamondId = diamondId;
      queryObj.currentHandInch = currentHandInch;
      queryObj.bn = this.design_bn;
      queryObj.comboId = comboId;
      queryObj.isCombo = this.isCombo ? '1' : '0';

      let url = '//' + location.host + location.pathname + '?';
      for (let key in queryObj) {
        if (queryObj[key]) {
          url += key + '=' + queryObj[key] + '&';
        }
      }
      url = url.slice(0, url.length - 1);

      location.href = `/diamondList/?backUrl=${encodeURIComponent(url)}`
    },

    // 打开刻印
    openMark() {
      this.footerTabId = 'mark'
      this.my3d.setRotationState(false);
      this.my3d.changeCameraPos(false, 0, 80, -60)
    },

    /**
     * 保存刻印
     */
    saveMark() {
      this.$store.commit('setState', {
        mark: this.mark,
      });
      this.printUserMark(true);
    },

    // 刻印返回
    markBack() {
      this.footerTabId = 'default'
      this.setInitCameraPos();
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
        currentHandInch: handInch[0],
      });
      this.handPicker = false;

      this.getPrice()
    },

    // 打开手寸
    openHandInch() {
      this.handPicker = true;
      const { currentHandInch } = this.$store.state.design;
      this.$nextTick(() => {
        if (currentHandInch) {
          let index = 8;
          handInch.forEach((item, i) => {
            if (+item === +currentHandInch) {
              index = i
            }
          })
          this.$refs.picker.setIndexes([index])
        }
      })
    },

    /**
     * 切换花头
     * @param partId
     */
    changePartId(partId) {
      this.checkFromComboDesign().then(() => {
        console.log('partId', partId);
        let loadState = this.my3d.getLoadModelState();
        if (loadState == 2) {
          this.my3d.switchPart(this.edit3dPartType, Number(partId));
          this.$store.commit('setState', {
            partId,
          });
        }

        this.getPrice()
      })
    },

    /**
     * 切换戒臂
     * @param mainPartId
     */
    changeMainPartId(mainPartId) {
      this.checkFromComboDesign().then(() => {
        console.log('mainPartId', mainPartId);
        let loadState = this.my3d.getLoadModelState();
        if (loadState == 2) {
          this.my3d.switchPart(this.edit3dPartType, Number(mainPartId));
          this.$store.commit('setState', {
            mainPartId,
          });

          setTimeout(() => {
            if (this.mark) {
              this.printUserMark();
              setTimeout(() => {
                this.my3d.setRotationState(true);
              }, 200)
            }
          }, 1000);
        }

        this.getPrice()
      })
    },

    /**
     * 检查是否从固定款切换而来
     */
    checkFromComboDesign() {
      return new Promise((resolve, reject) => {
        if (this.isCombo) {
          this.$dialog.confirm({
            title: '提示',
            message: '是否以当前设计款式覆盖固定款式方案？',
          })
            .then(() => {
              this.init3D()
              resolve()
            }).catch(reject);
        }
        resolve()
      })
    },

    /**
     * 试戴 todo
     */
    tryOn() {
      const { webModelPics } = this.$store.state.design;
      if (webModelPics && webModelPics.length) {
        this.hasModeltryOn();
      } else {
        this.$store.dispatch('loadModelPicList').then(() => {
          this.hasModeltryOn();
        })
      }
    },

    hasModeltryOn() {
      const { webModelPics, userNo } = this.$store.state.design;
      const state = this.my3d.getTryOnState();
      if (state === 0) {
        this.my3d.onWindowResize(0);
        const nowWebModelPic = webModelPics[0];
        nowWebModelPic.imgUrl = 'https://design.bavlo.com/WebModelPics/' + userNo + '/' + nowWebModelPic.name;
        this.my3d.setModelTryonMode(true, nowWebModelPic);
      } else {
        this.my3d.setModelTryonMode(false, null);
        this.my3d.onWindowResize(2);
      }
    },
  },

  filters: {
    formatIndex(num) {
      num = num + 1;
      return num < 10 ? '0' + num : num;
    },
    formatCost(num) {
      if (typeof num === 'number' && !isNaN(num) ) {
        return num.toString() + '.00'
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  #web3d > div {
    background: rgb(37, 37, 42) !important;
  }
}
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
  height: calc(100vh - 275px);
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
        background: url("../assets/design/design.png") no-repeat center/100%;
      }
      .icon-diamond {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../assets/design/diamond.png") no-repeat center/100%;
      }
      .icon-mark {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../assets/design/mark.png") no-repeat center/100%;
      }
      .icon-try {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../assets/design/try.png") no-repeat center/100%;
      }
      .icon-hand {
        display: block;
        height: 32px;
        width: 32px;
        background: url("../assets/design/hand.png") no-repeat center/100%;
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
      padding-left: 4px;
      text-align: left;
      font-size: 18px;
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
    .design-add-diamond {
      width: 100%;
      border: 2px dashed #c1b18a;
      border-radius: 8px;
      margin: 20px;
      color: #c1b18a;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;

      &:before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        background: #c1b18a;
        box-shadow: -4px 0 #c1b18a, 4px 0 #c1b18a, 0 -4px #c1b18a, 0 4px #c1b18a;
        margin-right: 12px;
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
