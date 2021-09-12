import Vue from 'vue'
import Vuex from 'vuex'
import DiamondsList from './DiamondsList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    DiamondsList
  }
})
