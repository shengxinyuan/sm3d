import Vue from 'vue'
import App from './index.vue'
import { Toast } from 'vant'

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
