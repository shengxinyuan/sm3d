import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/bag',
    name: 'bag',
    component: () => import('../views/bag.vue')
  },
  {
    path: '/3ddd',
    name: '3ddd',
    component: () => import('../views/3ddd.vue')
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
