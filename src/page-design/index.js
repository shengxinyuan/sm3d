import Vue from 'vue'
import App from './index.vue'
import { Toast, Icon, Popup, Picker, Dialog, NavBar } from 'vant'
import store from '../store'
import TitleBar from '../components/TitleBar'

Vue.use(Toast)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Dialog)
Vue.use(NavBar)
Vue.component('title-bar', TitleBar)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
