import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'question',
        component: () => import('@/views/Question')
      },
      {
        path: 'video',
        component: () => import('@/views/Video')
      },
      {
        path: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
