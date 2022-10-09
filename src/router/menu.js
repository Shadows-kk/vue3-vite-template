export const menus = [
  {
    name: '表单',
    index: '/form',
    icon: 'Document',
    meta: {
      title: '表单'
    }
  },
  {
    name: '表格',
    index: '/table',
    icon: 'Menu',
    meta: {
      title: '表格'
    }
  },
  {
    name: '案例',
    index: '/demo',
    icon: 'Menu',
    meta: {
      title: '案例'
    },
    children: [
      {
        name: 'Pinia',
        index: '/demo/pinia',
        icon: 'Menu',
        meta: {
          title: 'pinia'
        }
      },
      {
        name: 'svg',
        index: '/demo/useSvg',
        icon: 'Menu',
        meta: {
          title: 'svg'
        }
      }
    ]
  }
]
