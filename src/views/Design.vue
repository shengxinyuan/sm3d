<template>
  <div class="design">
    <div class="top">
      <div><text></text><text></text></div>
      <div></div>
    </div>
    <div class="row nr">
        <div class="col-12" align="center">
            <div class="show">
                <div id="web3d"></div>
                <img class="touch-tip" src="../assets/touch-tip.gif">
                <div class="topBtn" align="right">
                    <img style="display: none;" src="../assets/help.png"/>
                    <img src="../assets/audio.png"/>
                    <img src="../assets/reset.png"/>
                    <img src="../assets/stop.png"/>
                    <img src="../assets/home.png"/>
                </div>
                <div class="row tbbts">
                    <input type="range" style="display: none;" min="1" max="70" step="1" value="1">
                </div>

            </div>
            <div class="helpDetail" >
                <div><img src="../assets/rotation.png"/>旋转</div>
                <div><img src="../assets/zoom.png"/>缩小</div>
                <div><img src="../assets/zoomOut.png"/>放大</div>
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
                <div class="col m-auto" ><img src="../assets/zj.png" /></div>
                <div class="col m-auto" ><img src="../assets/pj.png" /></div>
                <div class="col m-auto" ><img src="../assets/cz.png" /></div>
                <div class="col m-auto" style="display: none" ><img src="../assets/ky.png" /></div>
                <div class="col m-auto" ><img src="../assets/try.png" /></div>
            </div>
            <div class="rotate">
                <button>旋转</button>
            </div>
            <div class="normals"></div>
        </div>
        <!-- <div class="col-5"><div id="bottom"></div></div> -->
    </div>
    <!-- <div class="footer"></div> -->
  </div>
</template>

<script>
import { Toast } from 'vant'
// import mock from '../mock/design'

export default {
  name: 'Design',
  components: {},
  data () {
    return {
      uInfo: 20230,
      baseUrl: '',
      uNo: this.getQueryVariable('desNo') || 20230,
      desNo: this.getQueryVariable('desNo') || 20230,
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
  mounted  () {
    this.$toast('mounted')
    try {
      const a = async () => {
        await this.loadUserInfo(this.uNo)
        document.getElementsByTagName('title')[0].innerText = this.userInfo.name
        window.$('.top div:eq(0) text:eq(0)').html(this.userInfo.name)
        window.$('.top div:eq(1)').html(this.userInfo.brand.xcxIndexTitle)// +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系人&nbsp;：'+userInfo.realName
        window.$('.footer').html(this.userInfo.name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话&nbsp;：' + this.userInfo.contactPhone)

        // 初始化
        // 加载3D第一步：初始化3D场景
        this.my3d = window.Bavlo.initWeb3D(this.baseUrl, 'web3d', false, this.resourceDomainName, false)
        // 加载3D第二步：定义3D窗口尺寸
        this.my3d.onWindowResize(2)
        // 加载3D第三步：初始化web材质
        await this.loadMetalWeb(0)
        // await this.loadMetalWeb(this.uNo)
        await this.loadGemWeb(0)
        // await this.loadGemWeb(this.uNo)
        this.my3d.initUserMatInfo(this.metalWebDefault, this.metalWeb, this.gemWebDefault, this.gemWeb)
        // 记载3D第四步：设置3D场景背景色
        if (this.userInfo.webBackgroundColor) {
          this.my3d.changeBackground(this.userInfo.webBackgroundColor)
        }
        // 记载3D第五步：加载款式3D
        await this.loadDesignInfo()
        let partIds = ''
        const parts = []
        this.designInfo.parts.filter((item) => {
          parts.push.apply(parts, item)
          // partIds += item.id + ','
          partIds += item[0].id + ','
        })
        partIds = partIds.substring(0, partIds.length - 1)
        this.my3d.loadVarDesign(this.designInfo, this.designInfo.mainParts[0].id, partIds)

        // 处理配件按类型分组
        var map = {}
        var dest = []
        for (var i = 0; i < parts.length; i++) {
          var ai = parts[i]
          if (!map[ai.partType.id]) {
            dest.push({
              id: ai.partType.id,
              name: ai.partType.name,
              data: [ai]
            })
            map[ai.partType.id] = ai
          } else {
            for (var j = 0; j < dest.length; j++) {
              var dj = dest[j]
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

        window.$('#bottom').html(infoHtml)
        if (this.designInfo.parts) {
          const gemWeight = this.designInfo.parts[0].gemWeight
          if (gemWeight) {
            window.$('.layInfo').html('<div class="row mgw">主石重量：' + gemWeight + 'ct </div>\n')
          } else {
            window.$('.mgw').remove()
          }
        }

        // window.$('.copy-btn').click(function () {
        //   var e = document.getElementById('wxNo')
        //   e.select() // 选择对象
        //   document.execCommand('Copy') // 执行浏览器复制命令
        //   window.$('.copy-btn').html('已复制')
        //   setTimeout("$('.copy-btn').html('复制');", 1200)
        // })
        window.$('.shoppingBtns button:eq(0)').click(() => {
          this.checkIsOnCart()
        })
        window.$('.shoppingBtns button:eq(1)').click(() => {
          this.addOrder()
        })
        window.$('.shoppingBtns img').click(() => {
          window.open('shoppingCart_pc.html?v=' + this.usNo, '_blank')
        })

        // 当前零件ID
        this.nowPartId = this.designInfo.mainParts[0].id
        setTimeout(this.loadNormalUI(), 500)
        this.loadLjs(2)

        this.ot = window.$('.ljs').offset().top
        this.wh = window.$(window).height()
        // 操作提示展示
        window.$('.topBtn img:eq(0)').click(function () {
          window.$('.helpDetail').show()
        })
        // 关闭操作提示
        window.$('.helpDetail div:last').click(function () {
          window.$('.helpDetail').hide()
        })

        // 款式复位
        window.$('.topBtn img:eq(2)').click(() => {
          this.my3d.postureReset()
        })
        // 款式自转设置
        let rotate = true
        window.$('.topBtn img:eq(3)').click(() => {
          rotate = !rotate
          this.my3d.setRotationState(rotate)
          if (rotate) {
            window.$('.topBtn img:eq(3)').attr('src', 'img/stop.png')
          } else {
            window.$('.topBtn img:eq(3)').attr('src', 'img/play.png')
          }
        })
        // 跳转首页
        window.$('.topBtn img:eq(4)').click(() => {
          /* let hcid = localStorage.getItem('userInfo');
    if(hcid){
        window.close();
    }else { */
          window.location.href = 'index_pc.html?l=1&v=' + this.usNo
          // }
        })

        // 加载主体UI
        window.$('.btns div:eq(0)').click(() => {
          this.loadLjs(2)
          window.$('.layers').hide()
          window.$('.czs').hide()
          window.$('.ky').hide()
          window.$('.partTypes').hide()
          window.$('.ljs').show()
        })
        // 加载主体配件UI
        window.$('.btns div:eq(1)').click(() => {
          this.loadLjs(1)
          window.$('.layers').hide()
          window.$('.czs').hide()
          window.$('.ky').hide()
          window.$('.partTypes').show()
          window.$('.ljs').show()
        })
        // 加载图层信息和材质信息
        window.$('.btns div:eq(2)').click(() => {
          this.loadDiy()
          this.loadCzs(this.designInfo.layers[0].id)
          window.$('.cts').hide()
          window.$('.ljs').hide()
          window.$('.ky').hide()
          window.$('.partTypes').hide()
          window.$('.layers').show()
          window.$('.czs').show()
        })
        // 刻字
        window.$('.btns div:eq(3)').click(() => {
          const state = this.my3d.getTryOnState()
          if (state === 0) {
            window.$('.cts').hide()
            window.$('.ljs').hide()
            window.$('.layers').hide()
            window.$('.czs').hide()
            window.$('.partTypes').hide()
            window.$('.ky').show()
          }
        })
        window.$('.ky input').bind('keyup', function (event) {
          if (event.keyCode === '13') {
            // 回车执行查询
            window.$('.ky button').click()
          }
        })
        window.$('.ky button').click(() => {
          const kyText = window.$('.ky input').val()
          if (kyText.length <= 16) {
            this.my3d.printUserTextOfLayer(this.nowLayer.id, kyText)
            rotate = false
            this.my3d.setRotationState(rotate)
            window.$('.topBtn img:eq(3)').attr('src', 'img/play.png')
          } else {
            alert('刻字内容不可超过16个字符！')
          }
        })
        // 图片试戴
        window.$('.btns div:eq(4)').click(() => {
          if (this.webModelPics) {} else {
            this.loadModelPicList()
          }
          const state = this.my3d.getTryOnState()
          if (state === 0) {
            const dheight = window.$('.show').height()
            window.$('.show').css('width', (dheight / 4 * 3) + 'px')
            this.my3d.onWindowResize(6)
            window.$('.tbbts').css('width', (dheight * 0.7) + 'px')
            const nowWebModelPic = this.webModelPics[0]
            nowWebModelPic.imgUrl = 'https://design.bavlo.com/WebModelPics/' + this.uNo + '/' + nowWebModelPic.name
            this.my3d.setModelTryonMode(true, nowWebModelPic)
            // $(this).attr('src', 'img/img_closeTry.png');
            window.$('.topBtn').hide()
            window.$('.partTypes').hide()
            window.$('.tbbts input').show()
            window.$('.ky').hide()
          } else {
            this.my3d.setModelTryonMode(false, null)
            window.$('.show').css('width', '')
            this.my3d.onWindowResize(2)
            window.$('.topBtn').show()
            window.$('.tbbts input').hide()
            window.$('.tbbts input').val(1)
            // $(this).attr('src', 'img/img_try.png');
            if (window.$('.ljs').css('display') === 'none' && window.$('.layers').css('display') === 'none') {
              window.$('.btns div:eq(0)').click()
            }
          }
          // alert("模特试戴即将开放！");
        })
        window.$('.tbbts input').bind('input propertychange', function () {
          this.my3d.zoomCamera(window.$('.tbbts input').val())
        })

        // 定位到底部信息部分
        window.$('.btns div:eq(5)').click(function () {
          location.href = '#bottom'
        })

        // 零件点击
        window.$('.ljs').on('click', 'div', () => {
          const loadState = 2// my3d.getLoadModelState()
          if (loadState === 2) {
            if (this.nowAsType === 1) {
              this.nowPjIndex = window.$(this).index()
            } else {
              this.nowJbIndex = window.$(this).index()
            }
            window.$('.ljs .active').removeClass('active')
            const type = window.$(this).attr('type')
            const pId = window.$(this).attr('pd')
            this.nowPartId = pId
            if (type === 1) {
              const gpId = window.$(this).attr('gd')
              this.nowCtIndex = null
              this.loadCts(gpId)
              window.$('.mgw').remove()
            } else {
              window.$(this).addClass('active')
              window.$('.cts').hide()
              this.my3d.switchPart(this.nowAsType, Number(pId))
            }
            this.loadNormalUI()
          }
        })

        // 零件旋转
        window.$('.rotate button').click(() => {
          const jd = 30
          this.my3d.setPartRotation(this.nowPartId, 'y', jd)
        })
      }
      a()
    } catch (error) {
      console.log(error)
    }
    window.onresize = () => {
      this.my3d.onWindowResize(2)
    }
  },
  methods: {
    /**
     * 获取url参数
     * @param variable
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
     * 获取金属材质列表（用于切换材质）
     * @param userId
     */
    loadMetalList (userId) {
      window.$.ajax({
        url: this.apiUrl + 'app/findUserMetalByUser',
        type: 'POST',
        data: { userId: userId },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            if (data.list.length > 0) {
              this.metals = []
              data.list.filter((item) => {
                this.metals.push(item.metal)
              })
            } else {
              window.$.ajax({
                url: this.apiUrl + 'app/desMetalList',
                type: 'POST',
                crossDomain: true,
                async: false,
                success: (data) => {
                  data = window.$.parseJSON(data)
                  if (data.code === 0) {
                    this.metals = data.list
                  } else {
                    Toast('数据加载失败！')
                  }
                }
              })
            }
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 获取宝石材质列表（用于切换材质）
 * @param userId
 */
    loadGemList (userId) {
      window.$.ajax({
        url: this.apiUrl + 'app/findUserGemByUser',
        type: 'POST',
        data: { userId: userId },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            this.gems = data.list
            if (data.list.length > 0) {
              this.gems = []
              data.list.filter((item) => {
                this.gems.push(item.gem)
              })
            } else {
              window.$.ajax({
                url: this.apiUrl + 'app/desGemList',
                type: 'POST',
                crossDomain: true,
                async: false,
                success: (data) => {
                  data = window.$.parseJSON(data)
                  if (data.code === 0) {
                    this.gems = data.list
                  } else {
                    Toast('数据加载失败！')
                  }
                }
              })
            }
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 获取其它宝石列表（用于切换材质）
 */
    loadOtherGemList () {
      window.$.ajax({
        url: this.apiUrl + 'app/otherGemList',
        type: 'POST',
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            this.otherGems = data.list
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 获取金属web材质参数（用于渲染）
 * @param userId
 */
    loadMetalWeb (userId) {
      window.$.ajax({
        url: this.apiUrl + 'app/findMetalWebsByUser',
        type: 'POST',
        data: { userId: userId },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            if (userId === 0) {
              this.metalWebDefault = data.list
            } else {
              this.metalWeb = data.list
            }
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 获取宝石web材质列表（用于渲染）
 * @param userId
 */
    loadGemWeb (userId) {
      window.$.ajax({
        url: this.apiUrl + 'app/findGemWebsByUser',
        type: 'POST',
        data: { userId: userId },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            if (userId === 0) {
              this.gemWebDefault = data.list
            } else {
              this.gemWeb = data.list
            }
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 获取其它材质web材质列表（用于渲染、切换材质）
 * @param userId
 */
    loadMaterialWeb (userId) {
      window.$.ajax({
        url: this.apiUrl + 'app/findMaterialWebsByUserAndType',
        type: 'POST',
        data: { userId: userId },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            if (userId === 0) {
              this.materialWebDefault = data.list
            } else {
              this.materialWeb = data.list
            }
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 获取试戴背景图列表
 */
    loadModelPicList () {
      window.$.ajax({
        url: this.apiUrl + 'app/webModelPicList',
        type: 'POST',
        data: { userId: this.uNo, desTypeId: this.designInfo.type.id },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            this.webModelPics = data.list
          } else {
            Toast('数据加载失败！')
          }
        }
      })
    },

    /**
 * 检验模型是否存在
 * @returns {boolean}
 */
    glbIsExist () {
      let isExist = true
      window.$.ajax({
        url: this.modelUrl + this.desNo + '.glb',
        type: 'GET',
        crossDomain: true,
        async: false,
        complete: (response) => {
          if (response.status === 200) {
            // alert('有效');
          } else {
            // alert('无效');
            isExist = false
          }
        }
      })
      return isExist
    },

    /**
 * 加载花头组UI信息
 * @param gpId
 */
    loadCts (gpId) {
      setTimeout(() => {
        window.$('.cts').show()
      }, 5)
      window.$('.ljs div[gd=' + gpId + ']').addClass('active')
      let tjHtml = ''
      this.designInfo.partGroups.filter((item) => {
        if (gpId === item.id) {
          let i = 0
          item.parts.filter((item1) => {
            let classHtml = ''
            if (this.nowCtIndex) {
              if (i === this.nowCtIndex) {
                classHtml = 'class="active"'
              }
            } else {
              if (tjHtml === '') {
                classHtml = 'class="active"'
                this.nowCtIndex = 0
              }
            }
            let ctcl = item1.gemWeight
            if (ctcl.indexOf('.') !== -1) {
              const dh = ctcl.substring(ctcl.indexOf('.') + 1, ctcl.length)
              if (dh.length > 2) {
                ctcl = ctcl.substring(0, ctcl.indexOf('.') + 2)
              } else if (dh.length === 1) {
                ctcl += '0'
              }
            } else {
              ctcl += '.00'
            }
            tjHtml += '<div pd="' + item1.id + '" ' + classHtml + '>' + ctcl + 'ct</div>'
            i++
          })
        }
      })
      window.$('.cts').html(tjHtml)
      this.my3d.switchPart(this.nowAsType, Number(window.$('.cts .active').attr('pd')))
      window.$('.cts div').click(() => {
        const loadState = this.my3d.getLoadModelState()
        if (loadState === 2) {
          window.$('.cts div').attr('class', '')
          window.$(this).attr('class', 'active')
          const pId = window.$(this).attr('pd')
          this.my3d.switchPart(this.nowAsType, Number(pId))
          this.nowCtIndex = window.$(this).index()
        }
      })
    },

    /**
 * 根据零件类型加载配件
 * @param ptId
 */
    loadPj (ptId) {
      let tjHtml = ''
      let i = 0
      const parts = this.partsGroupByType.filter((item) => {
        return item.id === ptId
      })[0]

      parts.data.filter((item) => {
        let classHtml = ''
        if (this.nowPjIndex) {
          if (i === this.nowPjIndex) {
            classHtml = 'class="active"'
            this.nowPartId = item.id
          }
        } else {
          if (tjHtml === '') {
            classHtml = 'class="active"'
            this.nowPartId = item.id
          }
        }
        tjHtml += '<div ' + classHtml + ' pd="' + item.id + '" type="0"><img src="https://design.bavlo.com/PartRes/webImg/' + item.defaultImg + '!250"></div>'
        i++
      })
      window.$('.ljs').html(tjHtml)
      this.loadNormalUI()
    },

    /**
 * 加载主件UI或配件类型UI
 * @param asType
 */
    loadLjs (asType) {
      this.nowAsType = asType
      let tjHtml = ''
      if (asType === 1) {
        let i = 0
        if (this.partsGroupByType) {
          this.partsGroupByType.filter((item) => {
            let classHtml = ''
            if (this.nowPartTypeIndex) {
              if (i === this.nowPartTypeIndex) {
                classHtml = 'class="active"'
              }
            } else {
              if (tjHtml === '') {
                classHtml = 'class="active"'
              }
            }
            tjHtml += '<div ' + classHtml + ' pt="' + item.id + '" >' + item.name + '</div>'
            i++
          })
        }
        window.$('.partTypes').html(tjHtml)
        this.loadPj(this.partsGroupByType[0].id)
        window.$('.partTypes div').click(() => {
          window.$('.partTypes div').attr('class', '')
          window.$(this).attr('class', 'active')
          const pt = window.$(this).attr('pt')
          this.nowPartTypeIndex = window.$(this).index()
          this.loadPj(pt)
        })
      } else if (asType === 2) {
        let i = 0
        this.designInfo.mainParts.filter((item) => {
          let classHtml = ''
          if (this.nowJbIndex) {
            if (i === this.nowJbIndex) {
              classHtml = 'class="active"'
              this.nowPartId = item.id
            }
          } else {
            if (tjHtml === '') {
              classHtml = 'class="active"'
              this.nowPartId = item.id
            }
          }
          tjHtml += '<div type="2" pd="' + item.id + '" ' + classHtml + '><img src="https://design.bavlo.com/PartRes/webImg/' + item.defaultImg + '!250"></div>'
          i++
        })
        window.$('.cts').hide()
        window.$('.ljs').html(tjHtml)
        this.loadNormalUI()
      }
    },

    /**
 * 记载材质UI
 * @param layerId
 */
    loadCzs (layerId) {
      this.designInfo.layers.filter((item) => {
        if (layerId === item.id) {
          let iconUrl; let czName = ''
          let tjHtml = ''
          if (item.type === 0) {
            if (this.metals) {} else {
              this.loadMetalList(this.uNo)
            }
            this.metals.filter((item1) => {
              let classHtml = ''
              iconUrl = 'RoundMetalIcons/' + item1.id + '.png'
              czName = item1.nameCn
              if (czName.length > 4) {
                czName = czName.substr(0, 4)
              }
              if (item.metal.id === item1.id) {
                classHtml = 'class="active"'
              }
              tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img src="https://design.bavlo.com/IconRes/' + iconUrl + '"/><span>' + czName + '</span></div>'
            })
          } else if (item.type === 1) {
            if (item.ogType === 0) {
              if (this.gems) {} else {
                this.loadGemList(this.uNo)
              }
              this.gems.filter((item1) => {
                if (item1.faceType === item.gem.faceType) {
                  iconUrl = 'GemIcons/' + item1.id + '.png'
                  let classHtml = ''
                  czName = item1.name
                  if (czName.indexOf('（') !== -1) {
                    czName = czName.substring(0, czName.indexOf('（'))
                  }
                  if (czName.length > 4) {
                    czName = czName.substr(0, 4)
                  }
                  if (item.gem.id === item1.id) {
                    classHtml = 'class="active"'
                  }
                  tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img src="https://design.bavlo.com/IconRes/' + iconUrl + '"/><span>' + czName + '</span></div>'
                }
              })
            } else if (item.ogType === 1) {
              if (this.otherGems) {} else {
                this.loadOtherGemList()
              }
              const otherGemsDetail = this.otherGems.filter((item1) => {
                return item1.id === item.otherGem.gemType.id
              })[0]
              otherGemsDetail.gemDetals.filter((item1) => {
                let classHtml = ''
                if (item.otherGem.gemType.id === 1) {
                  iconUrl = 'ZirconIcons/' + item1.id + '.png'
                } else if (item.otherGem.gemType.id === 2) {
                  iconUrl = 'SwarovskiIcons/' + item1.id + item1.name + '.png'
                } else if (item.otherGem.gemType.id === 12) {
                  iconUrl = 'CzechCrystalIcons/' + item1.id + item1.name + '.png'
                } else if (item.otherGem.gemType.id === 13) {
                  iconUrl = 'ArtificialCrystalIcons/' + item1.id + item1.name + '.png'
                }
                czName = item1.name
                czName = czName.substr(0, 3)
                if (item.otherGem.id === item1.id) {
                  classHtml = 'class="active"'
                }
                tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img src="https://design.bavlo.com/IconRes/' + iconUrl + '"/><span>' + czName + '</span></div>'
              })
            }
          } if (item.type >= 2) {
            if (this.materialWeb) {} else {
              this.loadMaterialWeb(this.uNo)
            }
            if (this.materialWeb) {
              this.materialWeb.filter((item1) => {
                if (item1.type === item.type) {
                  let classHtml = ''
                  let imgStyle = 'background-color:rgb(' + item1.color + ');'
                  if (item1.color === '255,255,255') {
                    imgStyle += 'border: 1px #e8e8e8 solid;'
                  }
                  czName = item1.name
                  if (czName.length > 4) {
                    czName = czName.substr(0, 4)
                  }
                  if (item.metal.id === item1.id) {
                    classHtml = 'class="active"'
                  }
                  tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img style="' + imgStyle + '" src="img/none.png"/><span>' + czName + '</span></div>'
                }
              })
            }
          }
          window.$('.czs').html(tjHtml)
        }
      })
      window.$('.czs div').click(() => {
        const ld = window.$('.layers .active').attr('ld')
        const czId = window.$(this).attr('md')
        window.$('.czs div').attr('class', '')
        window.$(this).attr('class', 'active')
        const layer = this.designInfo.layers.filter((item) => {
          return item.id === ld
        })[0]
        if (layer.type === 9) {
          window.$('.layers .active img').attr('style', window.$(this).children('img').attr('style'))
        } else {
          window.$('.layers .active img').attr('src', window.$(this).children('img').attr('src'))
        }
        window.$('.layers .active span').html(window.$(this).children('span').html())
        this.changeMaterial(ld, czId)
        const nowInfo = this.my3d.getUserDiyInfo()
        this.designInfo.layers = nowInfo.layers
      })
    },

    /**
 * 切换材质
 * @param layerId
 * @param materialId
 */
    changeMaterial (layerId, materialId) {
      const layer = this.designInfo.layers.filter((item) => {
        return item.id === layerId
      })[0]
      if (layer.type === 0) {
        const material = this.metals.filter((item) => {
          return item.id === materialId
        })[0]
        this.my3d.customizeMetalClass(layer.name, material)
      } if (layer.type === 1) {
        if (layer.ogType === 0) {
          const material = this.gems.filter((item) => {
            return item.id === materialId
          })[0]
          if (layer.gem.faceType === 'faceted') {
            this.my3d.customizeGemClass(0, layer.name, material)
          } else {
            this.my3d.changeLayerMaterial(layer.name, material)
          }
        } if (layer.ogType === 1) {
          const materials = this.otherGems.filter((item) => {
            return item.id === layer.otherGem.gemType.id
          })[0]
          const material = materials.gemDetals.filter((item) => {
            return item.id === materialId
          })[0]
          material.refraction = layer.otherGem.gemType.refraction
          this.my3d.customizeGemClass(1, layer.name, material)
        }
      } else if (layer.type >= 2) {
        const material = this.materialWeb.filter((item) => {
          return item.id === materialId
        })[0]
        this.my3d.changeLayerMaterial(layer.name, material)
      }
    },

    /**
 * 加载图层信息UI
 */
    loadDiy () {
      let tjHtml = ''
      const nowInfo = this.my3d.getUserDiyInfo()
      const nowPids = nowInfo.partIds.split(',')
      this.designInfo.layers.filter((item) => {
        let iconUrl = 'https://design.bavlo.com/IconRes/'
        let czName = ''
        let imgStyle = ''
        let hasPart = false
        item.partLayerIds.filter((item1) => {
          nowPids.filter((item2) => {
            if (item1.id === item2) {
              hasPart = true
            }
          })
        })
        if (hasPart) {
          if (item.type === -1) {
            iconUrl = 'img/none.png'
            czName = item.name
          } else if (item.type === 0) {
            iconUrl += 'RoundMetalIcons/' + item.metal.id + '.png'
            czName = item.metal.nameCn
            if (czName.length > 4) {
              czName = czName.substr(0, 4)
            }
          } else if (item.type === 1) {
            if (item.ogType === 0) {
              iconUrl += 'GemIcons/' + item.gem.id + '.png'
              czName = item.gem.name
              czName = czName.substr(0, 3)
            } else if (item.ogType === 1) {
              if (item.otherGem.gemType.id === 1) {
                iconUrl += 'ZirconIcons/' + item.otherGem.id + '.png'
              } else if (item.otherGem.gemType.id === 2) {
                iconUrl += 'SwarovskiIcons/' + item.otherGem.id + item.otherGem.name + '.png'
              } else if (item.otherGem.gemType.id === 12) {
                iconUrl += 'CzechCrystalIcons/' + item.otherGem.id + item.otherGem.name + '.png'
              } else if (item.otherGem.gemType.id === 13) {
                iconUrl += 'ArtificialCrystalIcons/' + item.otherGem.id + item.otherGem.name + '.png'
              }
              czName = item.otherGem.gemType.name
              czName = czName.substr(0, 3)
            }
          } else if (item.type >= 2) {
            iconUrl = 'img/none.png'
            czName = item.materialWeb.name
            imgStyle = 'background-color:rgb(' + item.materialWeb.color + ');'
            if (item.materialWeb.color === '255,255,255') {
              imgStyle += 'border: 1px #e8e8e8 solid;'
            }
            if (czName.length > 4) {
              czName = czName.substr(0, 4)
            }
          }
          if (tjHtml === '') {
            tjHtml += '<div ld="' + item.id + '" class="active"><img style="' + imgStyle + '" src="' + iconUrl + '"/><br/><span>' + czName + '</span></div>'
          } else {
            tjHtml += '<div ld="' + item.id + '"><img style="' + imgStyle + '" src="' + iconUrl + '"/><br/><span>' + czName + '</span></div>'
          }
        }
      })
      window.$('.layers').html(tjHtml)
      window.$('.layers div').click(() => {
        const ld = window.$(this).attr('ld')
        this.nowLayer = this.designInfo.layers.filter((item) => {
          return item.id === ld
        })[0]
        const lt = this.nowLayer.type
        if (lt === -1) {
          window.$('.btns div:eq(3)').click()
        } else {
          this.loadCzs(ld)
          window.$('.layers div').attr('class', '')
          window.$(this).attr('class', 'active')
        }
      })
    },

    /**
 * 加载账号信息
 * @param userId
 */
    loadUserInfo (userId) {
      window.$.ajax({
        url: this.apiUrl + 'app/userInfo',
        type: 'POST',
        // Cookie: 'JSESSIONID=6324DD7DB3D48731D33CC616AFD07E73',
        data: { id: userId },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            this.userInfo = data.user
          } else {
            console.log('数据加载失败！')
          }
        }
      })
    },

    /**
 * 加载款式信息
 */
    loadDesignInfo () {
      window.$.ajax({
        url: this.apiUrl + 'app/getVariableDesignLayerInfo',
        type: 'POST',
        data: { id: 30163 },
        crossDomain: true,
        async: false,
        success: (data) => {
          data = window.$.parseJSON(data)
          if (data.code === 0) {
            this.designInfo = data.info
          } else {
            console.log('数据加载失败！')
          }
        }
      })
    },

    /**
 * 加载贴图信息UI
 */
    loadNormalUI () {
      let normals
      let layerName
      if (this.nowAsType === 1) {
        this.designInfo.parts.filter((item) => {
          item.filter((item1) => {
            if (item1.id === this.nowPartId) {
              item1.layers.filter((item2) => {
                if (item2.normal && item2.normal.length > 0) {
                  normals = item2.normal
                  layerName = item2.name
                }
              })
            }
          })
        })
      } else {
        this.designInfo.mainParts.filter((item) => {
          if (item.id === this.nowPartId) {
            item.layers.filter((item1) => {
              if (item1.normal && item1.normal.length > 0) {
                normals = item1.normal
                layerName = item1.name
              }
            })
          }
        })
      }
      if (normals) {
        let tjHtml = ''
        normals.filter((item) => {
          let imgHtml = ''
          if (item.onOff && item.mapNames) {
            const maps = item.mapNames
            maps.filter((item1) => {
              imgHtml += '<div nd="' + item.id + '"><img src="' + this.normalMapUrl + item.id + '/' + item1.imgName + '" crossorigin="anonymous"/></div>\n'
            })
            tjHtml += '<div >\n' + imgHtml + '</div>'
          }
        })
        window.$('.normals').html(tjHtml)

        if (tjHtml) {
          window.$('.normals>div div img').click(() => {
            const nd = window.$(this).parent().attr('nd')
            const normal = normals.filter((item) => {
              return item.id === nd
            })[0]
            const imgSrc = window.$(this).attr('src')
            const defaultMap = imgSrc.substring(imgSrc.lastIndexOf('/') + 1)
            this.my3d.updateSubLayerMaterialNormalMap(this.nowPartId, layerName, normal.id, normal.sort, normal.onOff, defaultMap)
          })
        }
      }
    }

  }
}
</script>

<style lang="scss" scoped>
// .design {
//   background: red;
//   height: 100px;
//   width: 100px;
// }
  ::v-deep {
    img {
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
</style>
