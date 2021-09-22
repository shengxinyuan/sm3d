<template>
  <div class="diamond-detail">
    <img src="../../assets/diamond-list/diamond.webp" width="100%" alt="" />
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
          ><span>0.30ct</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>K</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>SI2</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>EX</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>VG</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>EX</span></span
        ><span
         
          class="td"
          style="color: rgb(193, 177, 138)"
          ><span>Faint</span></span
        ></div
      ></div
    >

    <img src="../../assets/diamond-list/detail.png" width="100%" alt="" />
    
  </div>
</template>

<script>
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
      url: "api/3d/get_diamond",
      data: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.info = res.data;
    });
  },
  methods: {
    filter() {
      this.filterStatus = true;
    },
    close() {
      this.filterStatus = false;
    },
    onLoad() {
      this.finished = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.diamond-detail {
  height: 100%;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: scroll;
  .item-title-cont {
    padding: 15px;
    background-color: rgb(72, 72, 79);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
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
}
</style>
