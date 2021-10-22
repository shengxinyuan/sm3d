import Vue from 'vue'
import Vuex from 'vuex'
import design from './design'
import common from './common'
import orderConfirm from './orderConfirm'
import share from './share'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    design,
    orderConfirm,
    share,
  }
})
