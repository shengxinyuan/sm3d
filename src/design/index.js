import Vue from 'vue'
import App from './index.vue'
import { Toast, Icon, Popup, Picker } from 'vant'
import store from './store'

Vue.use(Toast)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Picker)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
