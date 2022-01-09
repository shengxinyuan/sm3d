import Loading from '../components/3DLoading'
import { resourceDomainName, baseUrl } from '../const/design'
import { getUrlParam } from '../util/index'

export default {
  components: {
    Loading
  },
  props: [],
  data () {
    return {
      // loading
      loading: true,

      // 保存的设计信息
      saveDesignInfo: {},
      design_bn: '',

      // price
      price: '-',

      // 是否是固定款
      isCombo: false
    }
  },
  created () {
    // 加载账号信息
    this.$store.dispatch('loadUserInfo')
  },
  mounted () {
    // 请求：材质、宝石、设计数据
    Promise.all([
      this.$store.dispatch('loadDesignInfo'),
      this.$store.dispatch('loadMetalList'),
      this.$store.dispatch('loadMetalWeb'),
      this.$store.dispatch('loadGemList'),
      this.$store.dispatch('loadGemWeb'),
      this.$store.dispatch('loadComboList')
    ]).then(() => {
      console.log('mounted -> data loaded -> init3D')

      const design_bn = getUrlParam('bn')
      const partId = getUrlParam('partId')
      const mainPartId = getUrlParam('mainPartId')
      const metalId = getUrlParam('metalId')
      const mark = getUrlParam('mark')
      const currentHandInch = getUrlParam('currentHandInch')
      const diamondId = getUrlParam('diamondId')
      const comboId = getUrlParam('comboId')
      const isCombo = getUrlParam('isCombo')

      if (design_bn) {
        this.$store.dispatch('getDesignInfo', { design_bn }).then((res) => {
          this.saveDesignInfo = res.data
          this.design_bn = design_bn
          const {
            ring_size,
            diamond_id,
            ring_arm_id,
            flower_head_id,
            combo_id,
            texture_id,
            ring_print,
            title
          } = res.data

          this.getDiamond(diamondId || diamond_id)
          this.mark = mark || ring_print || ''
          this.isCombo = isCombo == null ? Boolean(combo_id) : !!Number(isCombo)

          this.setRenderParams({
            partId: partId || flower_head_id,
            mainPartId: mainPartId || ring_arm_id,
            metalId: metalId || texture_id,
            mark: mark || ring_print,
            currentHandInch: currentHandInch || ring_size,
            diamondId: diamondId || diamond_id,
            title,
            comboId: comboId || combo_id
          })
        })
      } else {
        this.getDiamond(diamondId)
        this.mark = mark || ''
        this.isCombo = !!Number(isCombo)
        const { comboList } = this.$store.state.design
        this.setRenderParams({
          partId,
          mainPartId,
          metalId,
          mark,
          currentHandInch,
          comboId: comboId || comboList[0].id
        })
      }
    })
  },

  methods: {
    // 设置参数
    setRenderParams (obj) {
      for (const key in obj) {
        if (!obj[key]) {
          delete obj[key]
        }
      }

      this.$store.commit('setState', obj)
      const { comboId } = this.$store.state.design
      setTimeout(() => {
        if (this.isCombo) {
          this.changeComboId(comboId)
        } else {
          this.init3D()
        }
      }, 0)
    },

    // 获取钻石信息
    getDiamond (diamondId) {
      if (diamondId) {
        this.$store.dispatch('getDiamondInfo', { id: diamondId })
        this.$store.commit('setState', {
          diamondId
        })
      }
    },
    // 切换前的清理工作
    clearAndPrepare3D () {
      if (this.__pre_isCombo == null || this.isCombo !== this.__pre_isCombo) {
        if (this.my3d && this.my3d) {
          this.my3d.onClose()
        }
        document.querySelector('#web3d').innerHTML = ''

        const {
          metalWeb,
          metalWebDefault,
          gemWeb,
          gemWebDefault
        } = this.$store.state.design

        // 加载3D第一步：初始化3D场景
        this.my3d = Bavlo.initWeb3D(
          baseUrl,
          'web3d',
          false,
          resourceDomainName,
          // false
          // 是否是固定搭配
          this.isCombo
        )

        // 加载3D第二步：定义3D窗口尺寸
        this.my3d.onWindowResize(2)
        window.onresize = () => {
          this.my3d.onWindowResize(2)
        }

        // 加载3D第三步：初始化web材质
        this.my3d.initUserMatInfo(
          metalWebDefault,
          metalWeb,
          gemWebDefault,
          gemWeb
        )

        // 加载3D第四步：设置3D场景背景色
        this.my3d.changeBackground('37,37,42')
      }
      this.__pre_isCombo = this.isCombo
    },
    // 初始化定制款3D
    async init3D () {
      this.isCombo = false
      this.clearAndPrepare3D()

      const {
        designInfo,
        partId,
        mainPartId
      } = this.$store.state.design

      // 加载3D第五步：加载款式3D
      this.my3d.loadVarDesign(designInfo, mainPartId, partId.toString())

      this.loaded()
    },

    // 初始化固定款3D
    async initCombo3D (Combo) {
      this.isCombo = true
      this.clearAndPrepare3D()

      // 加载3D第五步：加载款式3D
      this.my3d.loadDesign(Combo)

      this.loaded()
    },
    // 加载完
    loaded () {
      setTimeout(() => {
        if (this.my3d.getLoadModelState() !== 2) {
          this.loaded()
        } else {
          const { metalId } = this.$store.state.design
          // 设置材质
          this.loading = false

          // 设置角度
          this.setInitCameraPos()

          // 设置材质
          this.changeMetalId(metalId)

          // 用户刻印
          this.printUserMark()
          if (this.mark) {
            setTimeout(() => {
              this.my3d.setRotationState(true)
            }, 200)
          }
        }
      }, 1000)
    },

    /**
     * 设置相机角度
     */
    setInitCameraPos () {
      this.my3d.changeCameraPos(false, -45, 100, -65)
    },

    /**
     * 切换材料
     * @param metalId
     */
    changeMetalId (metalId) {
      const { metals } = this.$store.state.design
      let material
      metals.forEach((item) => {
        if (+item.id === +metalId) {
          material = item
        }
      })
      this.$store.commit('setState', {
        metalId
      })

      let name = '金属图层'
      if (this.isCombo) {
        const cus = this.my3d.getCustomization()
        const target = cus.find((c) => (/^Metal/i).test(c.name))
        if (target) {
          name = target.name
        }
      }

      // 金属图层
      material && this.my3d.customizeMetalClass(name, material)
      this.getPrice()
    },

    /**
     * 用户刻印
     */
    printUserMark (force = false) {
      if (force || this.mark) {
        let id = 940
        if (this.isCombo) {
          const cus = this.my3d.getCustomization()
          const target = cus.find((c) => (/^Engrave/i).test(c.name))
          if (target) {
            id = target.id
          }
        }
        this.my3d.printUserTextOfLayer(id, this.mark || ' ')
      }
    },

    /**
     * 切换固定款
     * @param comboId
     */
    changeComboId (comboId) {
      const switchIt = async () => {
        this.$store.commit('setState', {
          comboId
        })
        this.$store.dispatch('getComboInfo', { designId: comboId })
          .then((combo) => {
            combo && this.initCombo3D(combo)
            this.getPrice()
          })
      }
      if (this.isCombo) {
        switchIt()
      } else {
        this.$dialog.confirm({
          title: '提示',
          message: '是否以当前固定款式覆盖设计款式方案？'
        })
          .then(switchIt)
      }
    },

    // 实时获取金额
    getPrice () {
      const {
        partId,
        mainPartId,
        metalId,
        currentHandInch,
        diamondId,
        comboId
      } = this.$store.state.design

      this.$store.dispatch('getDesignPrice', {
        isCombo: this.isCombo,
        currentHandInch: currentHandInch || 13,
        partId,
        mainPartId,
        metalId,
        diamondId,
        comboId: comboId
      }).then((price) => {
        this.price = price
      })
    }
  },

  filters: {
    formatIndex (num) {
      num = num + 1
      return num < 10 ? '0' + num : num
    },
    formatCost (num) {
      if (typeof num === 'number' && !isNaN(num)) {
        return num.toString() + '.00'
      }
    }
  }
}
