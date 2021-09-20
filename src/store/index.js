import Vue from 'vue'
import Vuex from 'vuex'
import DiamondsList from './DiamondsList'
import OrderConfirm from './OrderConfirm'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    DiamondsList,
    OrderConfirm
  }
})
