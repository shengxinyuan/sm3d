import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userNo: 20230,
    desNo: 30163,
  },
  mutations: {
    increment() {

    }
  },
  actions: {
    async increment ({ commit, state }, products) {
      commit('increment')
    }
  }
})
