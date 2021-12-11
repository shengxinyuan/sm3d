import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DebugList from '../views/DebugList.vue'
import OrderConfirm from '../views/OrderConfirm/index.vue'
import Address from '../views/Address.vue'
import Share from '../views/Share/index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/debug',
    name: 'DebugList',
    component: DebugList
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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
    name: 'MyOrderList',
    component: () => import('../views/MyOrderList/List.vue')
  },
  {
    path: '/myOrderDetail',
    name: 'MyOrderDetail',
    component: () => import('../views/MyOrderDetail/index.vue')
  },
  {
    path: '*',
    name: '404',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: '/dist/',
  routes
})

export default router
