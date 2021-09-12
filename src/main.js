import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import { get, post } from '../src/util/ajax'
import { Tab, Tabs, Toast, NavBar, Col, Row, Button, Swipe, SwipeItem, Tabbar, TabbarItem, Icon, Divider, List } from 'vant'

Vue.use(Divider)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(List)

Vue.config.productionTip = false
Vue.prototype.$get = get
Vue.prototype.$post = post
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
