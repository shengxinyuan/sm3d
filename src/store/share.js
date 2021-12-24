
import { apiUrl } from '../const/design'
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
    // 当前钻石
    diamondId: '',
    diamondInfo: {},

    otherGems: [],
    metalWeb: [],
    metalWebDefault: [],
    gemWeb: [],
    gemWebDefault: [],
    materialWeb: [],
    materialWebDefault: [],
    webModelPics: []

  },
  mutations: {
    setState (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    /**
     * 1 加载账号信息
     * @param userId
     */
    share_loadUserInfo ({ commit, state }) {
      return post({
        url: apiUrl + 'app/userInfo',
        data: {
          id: state.userNo
        }
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
    share_loadMetalList ({ commit, state }) {
      let metals = []
      return post({
        url: apiUrl + 'app/findUserMetalByUser',
        data: {
          userId: state.userNo
        }
      }).then((data) => {
        if (data.code === 0) {
          if (data.list.length > 0) {
            let metalId = ''
            metals = data.list.map(item => {
              console.log(item.metal)
              if (item.metal && item.metal.nameCn && item.metal.nameCn === '铂金') {
                metalId = item.metal.id
              }
              return item.metal
            })

            metalId = metalId || metals[0].id

            commit('setState', {
              metals,
              metalId
            })
          } else {
            post({
              url: apiUrl + 'app/desMetalList'
            }).then((data) => {
              if (data.code === 0) {
                let metalId = ''
                metals = data.list
                metals.forEach(item => {
                  if (item && item.nameCn && item.nameCn === '铂金') {
                    metalId = item.id
                  }
                })

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
    share_loadDesignInfo ({ commit, state }) {
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
    share_loadGemList ({ commit, state }) {
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
              url: apiUrl + 'app/desGemList'
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
     * 6 获取金属web材质参数（用于渲染）
     * @param userId
     */
    share_loadMetalWeb ({ commit, state }) {
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
    share_loadGemWeb ({ commit, state }) {
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
     * 11 获取设计信息
     */
    share_getDesignInfo (_, { design_bn }) {
      return get({
        url: 'api/3d/design_detail',
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
    share_getDesignPrice (_, {
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
          flower_head_id: partId
        }
      }).then((data) => {
        if (data.status === 1) {
          return data.data.price
        } else {
          return '-'
        }
      })
    }

  }
}
