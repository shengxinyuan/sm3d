<template>
  <div class="diamond-detail">
    <title-bar title="钻石详情" />
    <img src="../../assets/diamond-list/diamond-detail-img.png" width="100%" alt="" />
    <div class="item-title-cont">
      <div class="flex1">
        <span span class="text-ABC text-white text-24"
          ><span>GIA证书</span></span
        ><span class="margin-left text-24 text-ABC text-white"
          ><span>{{ info.cert_num }}</span></span
        >
      </div>
      <div class="flex align-center">
        <span
          class="text-24"
          style="color: rgb(193, 177, 138); margin-left: 8px"
          ><span>权威鉴定</span></span
        ><span
          class="text-24"
          style="color: rgb(193, 177, 138); margin-left: 8px"
          ><span>国际证书</span></span
        >
      </div>
    </div>

    <div
      class="margin padding-tb"
      style="border-radius: 10px; background-color: rgb(72, 72, 79)"
      ><div class="info th flex align-center justify-around"
        ><span class="td"><span>大小</span></span
        ><span style="color: rgb(60, 60, 68)"
          ></span
        ><span class="td"><span>颜色</span></span
        ><span style="color: rgb(60, 60, 68)"
          ></span
        ><span class="td"><span>净度</span></span
        ><span style="color: rgb(60, 60, 68)"
          ></span
        ><span class="td"><span>切工</span></span
        ><span style="color: rgb(60, 60, 68)"
          ></span
        ><span class="td"><span>对称</span></span
        ><span style="color: rgb(60, 60, 68)"
          ></span
        ><span class="td"><span>抛光</span></span
        ><span style="color: rgb(60, 60, 68)"
          ></span
        ><span class="td"
          ><span>荧光</span></span
        ></div
      ><div class="tr flex align-center justify-around"
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{ info.size }}</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{ info.color }}</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{ info.clarity }}</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{ info.cut }}</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{info.symmetry}}</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{info.polish}}</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>{{info.flr_intensity}}</span></span
        ></div
      ></div
    >

    <img src="../../assets/diamond-list/detail.jpg" width="100%" alt="" />

    <div class="buy-group">
      <div class="cost">售价 ¥ {{info.price}}</div>
      <div class="buy-btn" @click="confirm">选定钻石</div>
    </div>
    
  </div>
</template>

<script>
import { urlParse } from '../../util/index'

export default {
  components: {},
  data() {
    return {
      info: {},
    };
  },
  computed: {},
  created() {
    this.$get({
      url: '/api/3d/get_diamond',
      data: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.info = res.data;
    });
  },
  methods: {
    confirm() {
      const backUrl = decodeURIComponent(this.$route.query.backUrl)
      const queryObj = urlParse(backUrl)
      queryObj.diamondId = this.$route.query.id
      let url = ''
      for(let key in queryObj) {
        url += key + '=' + queryObj[key] + '&'
      }
      url = url.slice(0,url.length-1)
      location.href = `/design.html?${url}`
    },
  },
};
</script>

<style lang="scss" scoped>
.diamond-detail {
  height: 100%;
  padding-bottom: 100px;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: scroll;
  box-sizing: border-box;
  .item-title-cont {
    padding: 15px;
    background-color: rgb(72, 72, 79);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .flex1 {
    flex: 1;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .margin {
    margin: 15px;
  }
  .tr , .info{
    font-size: 12px;
    padding: 10px;
  }
  .td {
    font-size: 12px;
    flex: 1;
  }

  .buy-group {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 15px 40px;
    background-color: rgb(72, 72, 79);
    box-sizing: border-box;
    .cost {
      flex: 1;
      color: rgb(193, 177, 138);
      height: 40px;
      line-height: 40px;
      font-size: 20px;
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
}
</style>
