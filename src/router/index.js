import { createRouter, createWebHashHistory } from 'vue-router'
import routerConfig from './routerConfig'
import localCache from '@/utils/cache'
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/layout/index.vue'),
    meta: {
      // requiresAuth: true,
      title: '主页'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/main/dashboard/index.vue')
      },
      ...routerConfig
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    // const token = localCache.getCache("token");
    // if (!token) {
    //   return "/login";
    // }
  }
  // 路径在main时 重定向到第一个页面
  if (to.path === '/main') {
    return '/dashboard'
  }
})
export default router
