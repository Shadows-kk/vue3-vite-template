// 路由配置
const routerConfig = [
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/main/form'),
    meta: {
      // requiresAuth: true,
      title: '表单'
    }
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/main/table'),
    meta: {
      title: '表格'
    }
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: '案例'
    },
    children: [
      {
        path: '/demo/pinia',
        name: 'pinia',
        component: () => import('@/views/main/usePinia'),
        meta: {
          title: 'pinia'
        }
      },
      {
        path: '/demo/useSvg',
        name: 'useSvg',
        component: () => import('@/views/main/useSvgIcon'),
        meta: {
          title: 'svg'
        }
      },
      {
        path: '/demo/test',
        name: 'useSvg',
        component: () => import('@/views/main/test'),
        meta: {
          title: 'test'
        }
      }
    ]
  }
]

export default routerConfig
