import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DebugList from '../views/DebugList.vue'
import OrderConfirm from '../views/OrderConfirm/index.vue'
import Address from '../views/Address.vue'
import Design from '../views/Design/index.vue'
import Share from '../views/Share/index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'DebugList',
    component: DebugList
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/share',
    name: 'Share',
    component: Share
  },
  {
    path: '/mydesign',
    name: 'MyDesign',
    component: () => import('../views/MyDesign.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/diamondList',
    name: 'DiamondList',
    component: () => import('../views/Diamond/List.vue')
  },
  {
    path: '/diamondDetail',
    name: 'diamondDetail',
    component: () => import('../views/Diamond/Detail.vue')
  },
  {
    path: '/orderConfirm',
    name: 'OrderConfirm',
    component: OrderConfirm // 上一个页面一定是vue,不需要懒加载
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/myOrderList',
    name: 'myOrderList',
    component: () => import('../views/MyOrderList/List.vue')
  },
  {
    path: '*',
    name: '404',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
