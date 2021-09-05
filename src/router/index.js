import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DebugList from '../views/DebugList.vue'
import DiamondsList from '../views/DiamondsList/index.vue'

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
    component: () => import('../views/Design.vue')
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
    path: '/diamondsList',
    name: 'diamondsList',
    component: DiamondsList
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
