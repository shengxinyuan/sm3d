import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DebugList from '../views/DebugList.vue'
import OrderConfirm from '../views/OrderConfirm/index.vue'

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
    component: () => import('../views/Diamond/index.vue')
  },
  {
    path: '/orderConfirm',
    name: 'OrderConfirm',
    component: OrderConfirm // 上一个页面一定是vue,不需要懒加载
  },
  {
    path: '*',
    name: '404',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
