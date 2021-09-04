<template>
  <div class="design">
    <!-- <div class="top">
      <div><text></text><text></text></div>
      <div></div>
    </div>
    <div class="row nr">
        <div class="col-7" align="center">
            <div class="show">
                <div id="web3d"></div>
                <img class="touch-tip" src="img/touch-tip.gif">
                <div class="topBtn" align="right">
                    <img style="display: none;" src="img/help.png"/>
                    <img src="img/audio.png"/>
                    <img src="img/reset.png"/>
                    <img src="img/stop.png"/>
                    <img src="img/home.png"/>
                </div>
                <div class="row tbbts">
                    <input type="range" style="display: none;" min="1" max="70" step="1" value="1">
                </div>

            </div>
            <div class="helpDetail" >
                <div><img src="img/rotation.png"/>旋转</div>
                <div><img src="img/zoom.png"/>缩小</div>
                <div><img src="img/zoomOut.png"/>放大</div>
                <br/>
                <div>关闭</div>
            </div>
            <div class="cts"></div>
            <div class="ljs"></div>
            <div class="czs"></div>
            <div class="layers"></div>
            <div class="partTypes"></div>
            <div class="ky" align="center"><input placeholder="输入不超16个字符"/><button>刻印</button></div>
            <div class="row btns">
                <div class="col m-auto" ><img src="img/zj.png" /></div>
                <div class="col m-auto" ><img src="img/pj.png" /></div>
                <div class="col m-auto" ><img src="img/cz.png" /></div>
                <div class="col m-auto" style="display: none" ><img src="img/ky.png" /></div>
                <div class="col m-auto" ><img src="img/try.png" /></div>
            </div>
            <div class="rotate">
                <button>旋转</button>
            </div>
            <div class="normals"></div>
        </div>
        <div class="col-5"><div id="bottom"></div></div>
    </div>
    <div class="footer"></div> -->
  </div>
</template>

<script>
import '../core/js/three-gem'
import '../core/js/Web3D.js'
import '../core/js/three.min.js'
import { post } from '../ajax'

import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)

export default {
  data () {
    return {
      uInfo: 20230,
      baseUrl: '',
      uNo: this.getQueryVariable('desNo'),
      desNo: this.getQueryVariable('desNo'),
      apiUrl: 'https://jcd.bavlo.com/manage/',
      resourceDomainName: 'https://design.bavlo.com/',
      normalMapUrl: 'https://design.bavlo.com/NormalFiles/',
      designInfo: null,
      partsGroupByType: null,
      nowAsType: null,
      nowPartTypeIndex: null,
      nowPjIndex: null,
      nowCtIndex: null,
      nowJbIndex: null,
      nowLayer: null,
      metals: null,
      gems: null,
      otherGems: null,
      metalWebDefault: null,
      metalWeb: null,
      gemWebDefault: null,
      gemWeb: null,
      webModelPics: null,
      materialWebDefault: null,
      materialWeb: null,
      my3d: null,
      atop: null,
      shareDescText: '',
      ot: null,
      wh: null,
      userInfo: null,
      nowPartId: null,
      orderDetailMetals: null,
      orderDetailGems: null
    }
  },
  async mounted  () {
    await this.loadUserInfo(this.uNo)
    document.getElementsByTagName('title')[0].innerText = this.userInfo.name
    // $('.top div:eq(0) text:eq(0)').html(this.userInfo.name)
    // $('.top div:eq(1)').html(this.userInfo.brand.xcxIndexTitle)
    // $('.footer').html(userInfo.name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话&nbsp;：'+userInfo.contactPhone)

    // web3D第一步：初始化3D场景
    this.my3d = window.Bavlo.initWeb3D(this.baseUrl, 'web3d', false, this.resourceDomainName, true)
    // 加载3D第二步：定义3D窗口尺寸
    this.my3d.onWindowResize(2)
    // 加载3D第三步：初始化web材质
    await this.loadMetalWeb(this.uInfo)
    await this.loadMetalWeb(this.uNo)
    await this.loadGemWeb(this.uInfo)
    await this.loadGemWeb(this.uNo)
    await this.my3d.initUserMatInfo(this.metalWebDefault, this.metalWeb, this.gemWebDefault, this.gemWeb)
    // 记载3D第四步：设置3D场景背景色
    if (this.userInfo.webBackgroundColor) {
      this.my3d.changeBackground(this.userInfo.webBackgroundColor)
    }
    // 记载3D第五步：加载款式3D
    await this.loadDesignInfo()
    let partIds = ''
    const parts = []
    this.designInfo.parts.filter(function (item) {
      parts.push.apply(parts, item)
      partIds += item[0].id + ','
    })
    partIds = partIds.substring(0, partIds.length - 1)
    await this.my3d.loadVarDesign(this.designInfo, this.designInfo.mainParts[0].id, partIds)

    // 处理配件按类型分组
    const map = {}
    const dest = []
    for (let i = 0; i < parts.length; i++) {
      const ai = parts[i]
      if (!map[ai.partType.id]) {
        dest.push({
          id: ai.partType.id,
          name: ai.partType.name,
          data: [ai]
        })
        map[ai.partType.id] = ai
      } else {
        for (let j = 0; j < dest.length; j++) {
          const dj = dest[j]
          if (dj.id === ai.partType.id) {
            dj.data.push(ai)
            break
          }
        }
      }
    }
    this.partsGroupByType = dest

    // 加载款式信息
    const layerText = ''
    const priceHtml = ''
    let nameHtml = this.designInfo.name
    if (nameHtml === null || nameHtml === '') {
      nameHtml = '编号：' + this.designInfo.id
      this.shareDescText += this.designInfo.type.nameCn
    } else {
      this.shareDescText += this.designInfo.name + '，' + this.designInfo.type.nameCn
    }

    this.shareDescText += layerText
    let gender = ''
    if (this.designInfo.gender === 0) {
      gender = '女款'
    } else if (this.designInfo.gender === 1) {
      gender = '男款'
    } else if (this.designInfo.gender === 2) {
      gender = '均适款'
    }

    this.shareDescText += '，' + gender

    const sc = ''

    if (this.designInfo.description) {
      this.shareDescText += '，' + this.designInfo.description
    }

    let phone = ''
    let wx = ''
    const lxr = ''
    const name = this.userInfo.name
    if (this.userInfo.contactPhone) {
      phone = '        <div class="row">电话：<a href="tel:' + this.userInfo.contactPhone + '">' + this.userInfo.contactPhone + '</a></div>\n'
    }
    if (this.userInfo.contactWxNo) {
      wx = '        <div class="row">咨询微信：<div class="col-5"><input type="text" readonly id="wxNo" value="' + this.userInfo.contactWxNo + '"/></div><div class="col-3"></div></div>\n'
    }
    const infoHtml = '<div>\n' +
        '        <div class="row">\n' +
        '            <div class="col-8">' + nameHtml + '</div>\n' +
        '            <div class="col-4 price">' + priceHtml + '</div>\n' +
        '        </div>\n' +
        '        <div class="row">类型：' + gender + '</div>\n' + sc + '<div class="layInfo"></div>' +
        '    </div>\n' +
        '    <div class="row">\n' + this.designInfo.description +
        '    </div>\n' +
        '    <div>\n' +
        '        <div class="row">' + name + '</div>\n' + phone + wx + lxr +
        '    </div>'
    document.getElementById('bottom').innerHTML = infoHtml
    if (this.designInfo.parts) {
      const gemWeight = this.designInfo.parts[0].gemWeight
      if (gemWeight) {
        document.getElementsByClassName('layInfo').innerHTML = '<div class="row mgw">主石重量：' + gemWeight + 'ct </div>\n'
      } else {
        document.getElementsByClassName('mgw').remove(1)
      }
    }
    // $('.copy-btn').click(function () {
    //   var e = document.getElementById('wxNo')
    //   e.select() // 选择对象
    //   document.execCommand('Copy') // 执行浏览器复制命令
    //   $('.copy-btn').html('已复制')
    //   setTimeout("$('.copy-btn').html('复制');", 1200)
    // })
    // $('.shoppingBtns button:eq(0)').click(function () {
    //   checkIsOnCart()
    // })
    // $('.shoppingBtns button:eq(1)').click(function () {
    //   addOrder()
    // })
    // $('.shoppingBtns img').click(function () {
    //   window.open('shoppingCart_pc.html?v=' + usNo, '_blank')
    // })

    // // 当前零件ID
    // nowPartId = designInfo.mainParts[0].id
    // setTimeout(loadNormalUI(), 500)
    // loadLjs(2)

    // ot = $('.ljs').offset().top
    // wh = $(window).height()
    window.onresize = function () {
      this.my3d.onWindowResize(2)
    }
  },
  methods: {
    /**
     * 获取金属web材质
     * @param userId 账号ID
     */
    loadMetalWeb (userId) {
      post({
        baseUrl: this.apiUrl,
        url: 'app/findMetalWebsByUser',
        data: { userId },
        crossDomain: true
      }).then((data) => {
        data = JSON.parse(data)
        if (data.code === 0) {
          if (userId === 0) {
            this.metalWebDefault = data.list
          } else {
            this.metalWeb = data.list
          }
        } else {
          Toast.fail('数据加载失败！')
        }
      }).catch((res) => {
        Toast.fail('数据加载失败！')
      })
    },

    /**
     * 获取宝石web材质
     * @param userId 账号ID
     */
    loadGemWeb (userId) {
      post({
        baseUrl: this.apiUrl,
        url: 'app/findGemWebsByUser',
        data: { userId },
        crossDomain: true
      }).then((data) => {
        data = JSON.parse(data)
        if (data.code === 0) {
          if (userId === 0) {
            this.gemWebDefault = data.list
          } else {
            this.gemWeb = data.list
          }
        } else {
          Toast.fail('数据加载失败！')
        }
      }).catch((res) => {
        Toast.fail('数据加载失败！')
      })
    },

    /**
     * 获取url参数
     * @param variable 参数名称
     * @returns {string|boolean}
     */
    getQueryVariable (variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] === variable) { return pair[1] }
      }
      return (false)
    },
    /**
     * 获取账号信息
     */
    loadUserInfo () {
      post({
        baseUrl: this.apiUrl,
        url: 'app/userInfo',
        data: { id: this.userNo }
      }).then((data) => {
        data = JSON.parseJSON(data)
        if (data.code === 0) {
          this.uInfo = data.user
        } else {
          Toast.fail('数据加载失败！')
        }
      }).catch(() => {
        Toast.fail('数据加载失败！')
      })
    },
    /**
     * 获取款式信息
     */
    loadDesignInfo () {
      post({
        baseUrl: this.apiUrl,
        url: 'app/getVariableDesignLayerInfo',
        data: { designId: this.desNo },
        crossDomain: true
      }).then((data) => {
        data = JSON.parseJSON(data)
        if (data.code === 0) {
          this.designInfo = data.designInfo
        } else {
          alert('数据加载失败！')
        }
      }).catch(() => {
        Toast.fail('数据加载失败！')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .design {
  background: red;
  height: 100px;
  width: 100px;
}
  ::v-deep {
    img{
        width: 100%;
    }
    img, .cts div, .partTypes div {
        cursor: pointer;
    }
    body{
        font-size: 17px;
        margin: 0;
        padding: 0;
    }
    input[type="text"] {
        border: 0px;
    }
    .cts, .partTypes, .ljs, .czs, .layers, .ky, .btns, .normals>div{
        border-bottom: 1px rgba(0,0,0,0.2) solid;
        border-left: 1px rgba(0,0,0,0.2) solid;
        border-right: 1px rgba(0,0,0,0.2) solid;
    }
    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .row {
        margin: 0;
        padding: 0;
    }
    .top {
        height: 50px;
        line-height: 50px;
        padding: 0 9.5%;
        background-color: rgba(0,0,0,0.59);
        font-size: 16px;
        color: rgba(255,255,255,0.8);
        width: 100%;
    }
    .top div{
        display: inline-block;
    }
    .top div:first-child {
        /*overflow: hidden;
        text-overflow:ellipsis;*/
        white-space: nowrap;
    }
    .top div text:first-child {
        margin-right: 5%;
        font-size: 18px;
        font-weight: 550;
    }
    .top div:last-child {
        float: right;
    }
    .top div:last-child select{
        border: 0px;
        color: rgba(255,255,255,0.8);
        background: rgba(0,0,0,0);
    }
    .top div:last-child select option{
        color: rgba(255,255,255,0.8);
        background: rgba(0,0,0,0.59);
    }

    .nr {
        padding: 3.8vh 9.5%;
    }
    .show {
        height: 62vh;
        border-bottom: 1px rgba(0,0,0,0.2) solid;
    }
    .show>div:first-child {
        width: 100%;
    }
    .topBtn {
        position: absolute;
        width: 22%;
        height: 44px;
        top: 2vh;
        right: 4%;
        opacity: 0.7;
    }
    .topBtn img {
        margin-left: 6.5%;
        width: 16%;
    }
    .topBtn img:nth-child(2) {
          display: none;
      }
    .helpDetail {
        width: 100%;
        height: 62vh;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 15vh;
        background-color: rgba(0, 0, 0, 0.8);
        color: #F5F5F5;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        display: none;
    }
    .helpDetail div {
        display: inline-block;
        width: 18%;
    }
    .helpDetail div:last-child {
        margin-top: 15%;
    }
    .helpDetail img {
        width: 100%;
    }

    .tbbts {
        width: 100%;
        position: absolute;
        padding-left: 8%;
        padding-right: 8%;
        height: 20px;
        top: 59vh;
    }
    .tbbts .col-8 img{
        width: 15.6%;
        margin-right: 10%;
    }
    .tbbts .col-4 div{
        width: 50%;
        text-align: right;
    }
    .tbbts .col-4 img{
        width: 52%;
        display: none;
    }
    .tbbts a:first-child{
        margin-left: 10%;
    }

    .tbbts input {
        width: 100%;
        height: 10px;
        -webkit-appearance: none;
        border-radius: 2px;
        background: rgba(0,0,0,0.1);
        outline: none;
        border: 1px white solid;
    }

    .tbbts input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.5);
        border:1px solid  rgba(0,0,0,0.4);
        cursor: pointer;
    }

    .tbbts input::-moz-range-thumb {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,0.5);
        border:1px solid  rgba(0,0,0,0.4);
        cursor: pointer;
    }

    .btns {
        text-align: center;
        color: rgba(255,255,255,0.8);
        padding: 1vw;
    }

    .btns img{
        width: 45%;
    }

    #bottom {
        padding-left: 12%;
        font-size: 90%;
    }
    #bottom > div:not(:first-child) {
        margin-top: 3vw;
        line-height: 2.5;
    }
    #bottom > div > div:not(:first-child) {
        line-height: 2.5;
    }
    .price {
        color: red;
        font-weight: bold;
        padding-left: 5%;
    }
    #bottom a {
        text-decoration: underline;
    }
    #bottom input {
        background-color: rgba(255,255,255,0);
        width: 100%;
        line-height: 2px;
        padding: 0;
    }
    .foot{
        width: 100%;
        text-align: center;
        color: rgba(0,0,0,0.4);
        margin-bottom: 35px;
    }

    .ljs,  .normals>div{
        width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 0.9% 2%;
        text-align: center;
    }
    .ljs::-webkit-scrollbar, .normals>div::-webkit-scrollbar, .cts::-webkit-scrollbar, .partTypes::-webkit-scrollbar, .layers::-webkit-scrollbar, .czs::-webkit-scrollbar{
        width: 0px;
        height: 8px;
    }
    .ljs::-webkit-scrollbar-thumb, .normals>div::-webkit-scrollbar-thumb, .cts::-webkit-scrollbar-thumb, .partTypes::-webkit-scrollbar-thumb, .layers::-webkit-scrollbar-thumb, .czs::-webkit-scrollbar-thumb{
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }

    .cts, .partTypes{
        width: 100%;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        text-align: center;
        padding-left: 6%;
        display: none;
    }
    .cts div, .partTypes div{
        /*background: #fff;*/
        display: inline-block;
        text-align: center;
        margin-right: 7%;
    }

    .ljs div, .normals>div div{
        width: 18.3%;
        background: #fff;
        display: inline-block;/*行内块元素*/
        text-alixgn: center;
        margin-right: 2%;
        padding-bottom: 3px;
    }
    .ljs .active, .normals>div .active, .cts .active, .partTypes .active, .layers .active, .czs .active{
        border-bottom: 2px red solid;
    }
    .layers, .czs{
        display: none;
        width: 100%;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 1.6% 1%;
        text-align: center;
    }
    .czs span{
        display: block;
        margin-top: 3px;
    }
    .layers div, .czs div{
        width: 5.8%;
        /*background: #fff;*/
        display: inline-block;
        text-align: center;
        margin-right: 4%;
    }
    .touch-tip{
        position: absolute;
        width: 30%;
        left: 35%;
        top: 30%;
        z-index: 3;
        display: none;
    }

    .ky{
        display: none;
        text-align: center;
        padding: 1.6vw 0px;
        width: 100%;
    }
    .ky input{
        width: 70%;
        height: 4.2vh;
    }
    .ky button{
        margin-left: 5%;
    }
    .footer {
        width: 81%;
        border-bottom: 1px #7d7d7d solid;
        margin-bottom: 6vh;
        margin-left: 9.5%;
        font-size: 90%;
        padding-bottom: 1.8vh;
    }
    .shoppingBtns {
        margin-bottom: 20px;
    }
    .shoppingBtns img{
        position: relative;
        width: 35%;
        left: 10px;
    }
    .shoppingBtns text{
        position: absolute;
        top: -13px;
        font-size: 18px;
        color: red;
    }
    .shoppingBtns button{
        width: 46%;
        margin-top: 1%;
        height: 95%;
        color: white;
    }
    .shoppingBtns button:first-child{
        border-top-left-radius: 6px!important;
        border-bottom-left-radius: 6px;
        border-right: 0px;
        background-color: black;
    }
    .shoppingBtns button:last-child{
        border-top-right-radius: 6px!important;
        border-bottom-right-radius: 6px;
        border-left: 0px;
        background-color: red;
    }
  }
// }
</style>
