import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { apiUrl } from './const'
import { get, post } from './ajax'


export default new Vuex.Store({
  state: {
    userNo: 20230,
    desNo: 30163,
    userInfo: {},
    metals: [],
    designInfo: {},
    partIds: '',
    parts: [],
    partsGroupByType: [],
    nowPartId: '',
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
            metals = data.list.map(item => item.metal)
            commit('setState', { metals })
            metals
          } else {
            post({
              url: apiUrl + 'app/desMetalList',
            }).then((data) => {
              if (data.code === 0) {
                metals = data.list
                commit('setState', { metals })
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
    loadDesignInfo({ commit, state }, products) {
      return post({
        url: apiUrl + 'app/getVariableDesignLayerInfo',
        data: {
          id: state.desNo
        }
      }).then((data) => {
        if (data.code === 0) {
          const designInfo = data.info

          let partIds = ''
          let parts = []
          const map = {}
          const partsGroupByType = []
          //当前零件ID
          const nowPartId = designInfo.mainParts[0].id;

          designInfo.parts.forEach(item => {
            parts.push.apply(parts, item)
            partIds += item[0].id + ","
          })
          partIds = partIds.substring(0, partIds.length - 1)

          for (let i = 0; i < parts.length; i++) {
            let ai = parts[i]
            if (!map[ai.partType.id]) {
              partsGroupByType.push({
                id: ai.partType.id,
                name: ai.partType.name,
                data: [ai],
              })
              map[ai.partType.id] = ai
            } else {
              for (let j = 0; j < partsGroupByType.length; j++) {
                let dj = partsGroupByType[j]
                if (dj.id == ai.partType.id) {
                  dj.data.push(ai)
                  break
                }
              }
            }
          }

          commit('setState', {
            partsGroupByType,
            designInfo,
            nowPartId,
            partIds,
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
    loadGemList({ commit, state }, products) {
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
    loadOtherGemList({ commit, state }, products) {
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
    loadMetalWeb({ commit, state }, products) {
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
    loadGemWeb({ commit, state }, products) {
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
    loadMaterialWeb({ commit, state }, products) {
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
    loadModelPicList({ commit, state }, products) {
      post({
        url: apiUrl + 'app/webModelPicList',
        data: {
          userId: state.userNo,
          desTypeId: state.designInfo.type.id
        }
      }).then((data) => {
        if (data.code === 0) {
          const webModelPics = data.list
          commit('setState', { webModelPics })
        } else {
          myAlert('数据加载失败！', 'alert-danger')
        }
      })
    },

  }
})
