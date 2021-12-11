import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import { Tag, Tab, Tabs, Toast, NavBar, Col, Row, Button, Swipe, SwipeItem, Tabbar, TabbarItem, Icon, Divider, List, Picker, Popup, AddressList, Dialog, Field, CountDown } from 'vant'
import { get, post } from '../src/util/ajax'
import TitleBar from './components/TitleBar'

Vue.use(AddressList)
Vue.use(Divider)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Row)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(List)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Dialog)
Vue.use(Field)
Vue.use(CountDown)

Vue.component('title-bar', TitleBar)
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$toast = Toast

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
