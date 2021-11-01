import { apiUrl, colorList } from '../const/design'
import { get, post } from '../util/ajax'

export default {
  state: {
    userNo: 20230,
    desNo: 30163,
    userInfo: {},
    // all信息
    designInfo: {},
    // 花头
    partId: '',
    parts: [],
    // 戒臂
    mainParts: [],
    mainPartId: '',
    // 材质
    metals: [],
    metalId: '',
    // 刻印
    mark: '',
    // 当前手寸
    currentHandInch: '',
    // 当前钻石
    diamondId: '',
    diamondInfo: {},
    // 设计标题
    title: '',

    otherGems: [],
    metalWeb: [],
    metalWebDefault: [],
    gemWeb: [],
    gemWebDefault: [],
    materialWeb: [],
    materialWebDefault: [],
    webModelPics: [],
  },
  mutations: {
    setState(state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    },
  },
  actions: {
    /**
     * 1 加载账号信息
     * @param userId
     */
    loadUserInfo({ commit, state }) {
      return post({
        url: apiUrl + 'app/userInfo',
        data: {
          id: state.userNo
        },
      }).then((data) => {
        if (data.code === 0) {
          const userInfo = data.user
          commit('setState', { userInfo })
        }
      })
    },

    /**
     * 2 获取金属材质列表（用于切换材质）
     */
    loadMetalList({ commit, state }) {
      let metals = []
      return post({
        url: apiUrl + 'app/findUserMetalByUser',
        data: {
          userId: state.userNo
        },
      }).then((data) => {
        if (data.code === 0) {
          if (data.list.length > 0) {
            let metalId = ''
            metals = data.list.map(item => {
              console.log(item.metal);
              if (item.metal && item.metal.nameCn && item.metal.nameCn === '铂金') {
                metalId = item.metal.id
              }
              return item.metal
            })

            metalId = metalId || metals[0].id

            commit('setState', {
              metals,
              metalId,
            })
          } else {
            post({
              url: apiUrl + 'app/desMetalList',
            }).then((data) => {
              if (data.code === 0) {
                let metalId = ''
                // metals = data.list
                metals = colorList

                metals.forEach(item => {
                  if (item && item.nameCn && item.nameCn === '铂金') {
                    metalId = item.id
                  }
                });

                metalId = metalId || metals[0].id

                commit('setState', {
                  metals,
                  metalId
                })
              } else {
                myAlert('数据加载失败！', 'alert-danger')
              }
            })
          }
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },
    /**
     * 3 加载款式信息
     */
    loadDesignInfo({ commit, state }) {
      return post({
        url: apiUrl + 'app/getVariableDesignLayerInfo',
        data: {
          id: state.desNo
        }
      }).then((data) => {
        if (data.code === 0) {
          const designInfo = data.info
          const { mainParts } = designInfo
          // 当前戒臂ID （主part ID）
          const mainPartId = designInfo.mainParts[0].id
          // 花头ID列表
          const parts = designInfo.parts && designInfo.parts[0] || []
          // 当前花头ID
          const partId = parts[0] ? parts[0].id : ''

          commit('setState', {
            designInfo,
            mainParts,
            mainPartId,
            partId,
            parts
          })

        } else {
          console.log('数据加载失败！')
        }
      })
    },

    /**
     * 4 获取宝石材质列表（用于切换材质）
     */
    loadGemList({ commit, state }) {
      return post({
        url: apiUrl + 'app/findUserGemByUser',
        data: {
          userId: state.userNo
        }
      }).then((data) => {
        let gems = []
        if (data.code === 0) {
          if (data.list.length > 0) {
            gems = data.list.map(item => item.gem)
            commit('setState', { gems })
          } else {
            post({
              url: apiUrl + 'app/desGemList',
            }).then((data) => {
              if (data.code === 0) {
                gems = data.list
                commit('setState', { gems })
              } else {
                myAlert('数据加载失败！', 'alert-danger')
              }
            })
          }
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },

    /**
     * 5 获取其它宝石列表（用于切换材质）
     */
    loadOtherGemList({ commit, state }) {
      post({
        url: apiUrl + 'app/otherGemList',
      }).then((data) => {
        if (data.code === 0) {
          const otherGems = data.list
          commit('setState', { otherGems })
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },

    /**
     * 6 获取金属web材质参数（用于渲染）
     * @param userId
     */
    loadMetalWeb({ commit, state }) {
      post({
        url: apiUrl + 'app/findMetalWebsByUser',
        data: {
          userId: state.userNo
        }
      }).then((data) => {
        if (data.code === 0) {
          const metalWebDefault = data.list
          const metalWeb = data.list
          commit('setState', {
            metalWeb,
            metalWebDefault
          })
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },

    /**
     * 7 获取宝石web材质列表（用于渲染）
     * @param userId
     */
    loadGemWeb({ commit, state }) {
      post({
        url: apiUrl + 'app/findGemWebsByUser',
        data: {
          userId: state.userNo
        }
      }).then((data) => {
        if (data.code === 0) {
          const gemWebDefault = data.list
          const gemWeb = data.list
          commit('setState', {
            gemWeb,
            gemWebDefault
          })
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },

    /**
     * 8 获取其它材质web材质列表（用于渲染、切换材质）
     * @param userId
     */
    loadMaterialWeb({ commit, state }) {
      post({
        url: apiUrl + 'app/findMaterialWebsByUserAndType',
        data: {
          userId: state.userNo
        }
      }).then((data) => {
        if (data.code === 0) {
          const materialWebDefault = data.list
          const materialWeb = data.list
          commit('setState', {
            materialWeb,
            materialWebDefault
          })
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },

    /**
     * 9 获取试戴背景图列表
     */
    loadModelPicList({ commit, state }) {
      return post({
        url: apiUrl + 'app/webModelPicList',
        data: {
          userId: state.userNo,
          desTypeId: state.designInfo.type.id
        },
      }).then((data) => {
        if (data.code === 0) {
          const webModelPics = data.list
          commit('setState', { webModelPics })
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },
    

    /**
     * 10 提交设计
     */
    async submitDesign({ commit, state }, { image, bn }) {
      const { data, message } = await post({
        url:'/api/3d/design/upload_image',
        data: {
          base64: image
        }
      })
      if (!data) {
        return alert('err： ' + message)
      }
      const preview_image = data.url
      const {
        mark,
        mainPartId,
        partId,
        metalId,
        diamondId,
        currentHandInch,
        title
      } = state

      const query = {
        flower_head_id: partId,
        ring_arm_id: mainPartId,
        diamond_id: diamondId,
        ring_print: mark,
        texture_id: metalId,
        ring_size: currentHandInch,
        good_type: 1,
        title: title, 
        preview_image,
      }

      if (bn) {
        query.bn = bn
      }

      return post({
        url:'/api/3d/saveDesign',
        data: query
      }).then((data) => {
        return data
      })
    },

    /**
     * 11 获取钻石信息
     */
    getDiamondInfo({ commit, state }, { id }) {
      get({
        url: '/api/3d/get_diamond',
        data: {
          id
        }
      }).then((data) => {
        if (data.status === 1) {
          const diamondInfo = data.data
          diamondInfo.detail = `${diamondInfo.color}色 ${diamondInfo.clarity} ${diamondInfo.cut} ${diamondInfo.symmetry} ${diamondInfo.polish} ${diamondInfo.flr_intensity}`
          commit('setState', { diamondInfo })
        }
      })
    },

    /**
     * 12 获取设计信息
     */
    getDesignInfo(_, { design_bn }) {
      return get({
        url: '/api/3d/design_detail',
        data: {
          design_bn
        }
      }).then((data) => {
        return data
      })
    },

    /**
     * 13 实时计算价钱
     */
     getDesignPrice(_, {
        currentHandInch,
        partId,
        mainPartId,
        metalId,
        diamondId
      }) {
      return get({
        url: '/api/3d/order/compute_price',
        data: {
          diamond_id: diamondId,	
          texture_id: metalId,
          ring_size: currentHandInch,
          ring_arm_id: mainPartId,
          flower_head_id: partId,
        }
      }).then((data) => {
        if (data.status === 1) {
          return data.data.price
        } else {
          return '-'
        }
      })
    },

  }
}