// 路由配置入口

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/main.vue'
import Login from '@/views/common/login/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',// 路由地址
      name: 'home',// 路由名字
      component: Layout // 路由组件
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')// 懒加载引入
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: { title: '登录' }
    }
  ]
})

export default router
