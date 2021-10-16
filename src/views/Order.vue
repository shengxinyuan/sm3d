<template>
  <div class="order">
    <van-nav-bar
      title="设计信息"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      :safe-area-inset-top="true"
      class="bag-bar"
    />
    <div class="order-header" style="margin-top:50px;">
      <div class="design-img" :style="{ backgroundImage: 'url(' + preview_image +'',}"></div>
      <p class="order-tip">3D定制效果仅供参考，商品以实物为准</p>
    </div>
    
    <div class="order-name" @click="toggleShow" v-if="title">
      <span style="line-height: 24px;">设计名称：</span>
      <span class="order-title">{{title}}</span>
      <span class="tip-icon"><van-icon name="edit" /></span>
    </div>
    <div class="order-tab">
      <van-tabs v-model="active" class="order-tabs">
        <van-tab title="款式参数">
          <div class="order-ks">
            <div class="order-cell order-cell__picker">
              <span class="order-cell__label">手寸</span>
              <span class="order-cell__value">{{ksInfo.sc}}</span>
              <van-icon name="question-o" size="24px" class="order-cell__picker-icon" @click="showHelpPopup"/>
              <van-popup v-model="showHelp" closeable>
                <div class="order-help">
                  <p>如何测量正确的手寸？</p>
                  <van-swipe class="my-swipe">
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size1.png" width="315px" height="220px"/>
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size2.png" width="315px" height="220px"/>
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size3.png" width="315px" height="220px"/>
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="https://h5.zbird.com/hybrid/html/custom/assets/size4.png" width="315px" height="220px"/>
                    </van-swipe-item>
                  </van-swipe>
                </div>
              </van-popup>
            </div>
            
            <div class="order-cell">
              <span class="order-cell__label">材质</span>
              <span class="order-cell__value">{{ksInfo.cz}}</span>
            </div>
            <!-- <div class="order-cell">
              <span class="order-cell__label">工艺</span>
              <span class="order-cell__value">{{ksInfo.gy}}</span>
            </div> -->
            <div class="order-cell">
              <span class="order-cell__label">戒臂</span>
              <span class="order-cell__value">{{ksInfo.jb}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">花头</span>
              <span class="order-cell__value">{{ksInfo.ht}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">刻字</span>
              <span class="order-cell__value">{{ksInfo.kz}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="钻石参数">
          <div class="order-ks">
            <div class="order-cell">
              <span class="order-cell__label">钻石价格</span>
              <span class="order-cell__value">¥{{zsInfo.price || "1500"}}</span>
            </div>
            <!-- <div class="order-cell">
              <span class="order-cell__label">钻重</span>
              <span class="order-cell__value">{{zsInfo.zz}}</span>
            </div> -->
            <div class="order-cell">
              <span class="order-cell__label">形状</span>
              <span class="order-cell__value">{{zsInfo.xz}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">颜色</span>
              <span class="order-cell__value">{{zsInfo.ys}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">净度</span>
              <span class="order-cell__value">{{zsInfo.jd}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">荧光</span>
              <span class="order-cell__value">{{zsInfo.yg}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">抛光</span>
              <span class="order-cell__value">{{zsInfo.pg}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">切工</span>
              <span class="order-cell__value">{{zsInfo.qg}}</span>
            </div>
            <div class="order-cell">
              <span class="order-cell__label">对称</span>
              <span class="order-cell__value">{{zsInfo.dc}}</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    
    <div class="bag-btns">
      <div class="price">¥ 12000</div>
      <div class="btns">
        <van-icon name="bag-o" color="rgb(193, 177, 138)" size="25" class="icon-my-design" @click="() => {$router.push('/mydesign')}"/>
        <div>
          <van-button type="primary" class="button bag-list__btn--save" @click="toggleShow">保存设计</van-button>
        </div>
        <div class="flex1"></div>
        <div>
          <van-button type="primary" class="button bag-list__btn--buy" @click="buy">确认购买</van-button>
        </div>
      </div>
    </div>
    <van-dialog class="dialog" v-model="show" title="设计名称" show-cancel-button @open="handleOpen" @confirm="handleConfirm" @close="handleClose">
      <van-field v-model="curTitle" label="" ref="inputRef"  placeholder="请填写设计名称" autofocus class="title-input" />
    </van-dialog>
  </div>
</template>

<script>
import { colorList } from '../const/design'

export default {
  data () {
    return {
      bn: this.$route.query.bn || 0,
      active: 2,
      title: '',
      curTitle: '',
      preview_image: '',
      show: false,
      ksInfo: {
        sc: 0,
        cz: '',
        cz_id: 2,
        jb: '',
        ht: '',
        fs: '',
        kz: ''
      },
      zsInfo: {
        zs: '',
        zz: '0.30ct',
        xz: '圆形',
        ys: 'K',
        jd: 'SI2',
        yg: '无',
        pg: 'EX',
        qg: 'VG',
        dc: 'EX'
      },
      showSc: false,
      showHelp: false
    }
  },
  created () {
    this.loadDesign()
  },
  methods: {
    loadDesign () {
      this.$get({
        url: '/api/3d/design_detail',
        data: {
          design_bn: this.bn
        }
      }).then((res) => {
        const { data } = res
        this.preview_image = data.preview_image
        if (this.preview_image && this.preview_image.startsWith('uploads')) {
          this.preview_image = '' + this.preview_image
        }
        if (data.title) {
          this.title = data.title
        }
        this.ksInfo.sc = data.ring_size
        this.ksInfo.kz = data.ring_print
        this.ksInfo.ht = data.flower_head_id
        this.ksInfo.jb = data.ring_arm_id
        this.zsInfo.zs = data.diamond_id
        this.zsInfo.zs = data.diamond_id
        colorList.forEach(item => {
          if (item.id === data.texture_id) {
            this.ksInfo.cz = item.nameCn
          }
        });
      }).catch(() => {
        this.$toast.fail('获取数据失败，请稍后重试')
      })
    },
    showScPopup () {
      this.showSc = true
    },
    showHelpPopup () {
      this.showHelp = true
    },
    onConfirm (value, index) {
      this.ksInfo.sc.value = value
      this.ksInfo.sc.index = index
      this.showSc = false
    },
    onCancel () {
      this.showSc = false
    },
    onClickLeft () {
      this.$router.back()
    },
    toggleShow () {
      this.show = !this.show
    },
    buy () {
      this.$router.push(`./orderConfirm?bn=${this.bn}`)
    },
    handleOpen () {
      this.curTitle = this.title
    },
    handleConfirm () {
      console.log(this.curTitle)
      this.title = this.curTitle
      this.$post({
        url: '/api/3d/saveDesign',
        data: {
          bn: this.bn,
          flower_head_id: this.ksInfo.ht,
          ring_arm_id: this.ksInfo.jb,
          diamond_id: this.zsInfo.zs,
          ring_print: this.ksInfo.kz,
          texture_id: this.ksInfo.cz_id,
          title: this.title,
          ring_size: this.ksInfo.sc.index,
          good_type: 1,
          preview_image: this.preview_image
        }
      }).then((res) => {
        this.$toast.fail('保存成功')
        // this.$router.push('./mydesign')
      }).catch(() => {
        this.$toast.fail('保存失败')
      })
    },
    handleClose () {
      this.curTitle = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 30px;
}

::v-deep {
  .order-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #48484f;
    position: relative;
    flex-direction: column;
  }
  .order-tip {
    color: rgb(204, 204, 204);
    font-size: 12px;
    padding: 8px;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }
  .order-name {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px 12px 32px;
    color: #fff;
    background: #3C3C44;
    border-bottom: 1px solid #5f5f5f;
    .van-cell.van-field {
      background-color: #3c3c44;
      height: 25px;
      padding: 0;
      color: #fff;
      line-height: 25px;
      .van-cell__title {
        width: auto;
        padding-right: 6px;
        background: rgb(72, 72, 79);
        color: #fff;
      }
      .van-field__control {
        color: #fff;
      }
    }
  }
  .order-name__edit {
    margin-left: 8px;
  }
  .order-tab {
    position: relative;
    flex: 1;
    background-color: #3c3c44 !important;
    margin-bottom: 70px;
    .van-tabs__wrap {
      margin-bottom: 6px;
      width: 50%;
      height: 50px;
    }
    .van-tabs__nav {
      background-color: #3c3c44 !important;
    }
    .van-tab {
      color: #fff;
      font-size: 14px;
      line-height: 20px;
    }
    .van-tab--active {
      color: rgb(193, 177, 138);
      font-size: 16px;
      line-height: 20px;
    }
    .van-tabs__line {
      background-color: rgb(193, 177, 138);
      width: 10px;
      height: 2px;
    }
  }
  .order-ks {
    background: #4b4b50;
    margin: 16px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    .order-cell {
      height: 42px;
      display: flex;
      padding: 8px;
      align-items: center;
      .order-cell__label {
        width: 50%;
        padding-left: 16px;
        padding-right: 16px;
        text-align: left;
        font-size: 14px;
      }
      .order-cell__value {
        width: 140px;
        color: rgb(193, 177, 138);
        text-align: right;
        font-size: 14px;
        padding-right: 16px;
      }
    }
    .order-cell__picker {
      // height: 60px;
      // .order-cell__value {
      //   height: 26px;
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   line-height: 26px;
      //   text-align: right;
      //   width: 120px;
      //   margin-left: 20px;
      //   background-color: rgb(84, 84, 91);
      //   border-radius: 10px;
      // }
      .order-cell__value {
        padding-right: 20px;
        margin-right: -10px;
      }
      .order-cell__picker-icon {
        color: rgb(193, 177, 138);
        margin-left: 4px;
      }
    }
    .order-help {
      color: #000;
      padding: 16px 0;
      font-weight: 700;
      .my-swipe {
        margin: 32px 0;
        width: 315px;
        height: 220px;
        .van-swipe__indicators {
          position: absolute;
          top: 180px;
          .van-swipe__indicator {
            background-color: #333;
          }
        }
      }
    }
  }
  .bag-btns__count {
    color: rgb(193, 177, 138);
    font-size: 10px;
    font-weight: 700;
  }
  .bag-btns__mydesign {
    margin: 0 20px;
  }
  .bag-btns {
    position: fixed;
    width: 100vw;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #48484f;
    height: 100px;
    padding: 0 20px;
    box-sizing: border-box;
    .price {
      font-size: 14px;
      line-height: 1;
      margin-bottom: 10px;
      text-align: right;
      width: 100%;
      padding: 0 20px;
      color: rgb(193, 177, 138);
    }
    .btns {
      width: 100%;
      display: flex;
    }
    .icon-my-design {
      display: block;
      padding: 5px 10px 0 0;
    }
  }
  .bag-bar {
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
  .button {
    width: 130px;
    height: 40px;
    line-height: 40px;
    border: unset;
    border-radius: 20px;
    background-color: rgb(193, 177, 138);
    color: rgb(52, 52, 60);
    text-align: center;
  }
  .button.bag-list__btn--save {
    background-color: rgb(84, 84, 91);
    color: rgb(193, 177, 138);
  }
  .order-title {
    padding: 4px 4px 4px 16px;
    text-align: left;
  }
  .tip-icon {
    padding: 4px 4px 4px 16px;
  }
  .title-input {
    background: #eee;
    color: #333;
    border-radius: 8px;
    margin: 12px;
    width: 290px;
  }
  .van-dialog__confirm {
    color: rgb(193, 177, 138);
  }
}

.dialog {
  background: #fff;
}

.flex1 {
  flex: 1;
}
</style>
