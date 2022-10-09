// 定义布局相关的数据
import { defineStore } from 'pinia'
import defaultSettings from '@/config/settings.json'
const useAppStore = defineStore('app', {
  state: () => ({
    collapsed: false,
    routes: undefined,
    breadcrumbList: [],
    ...defaultSettings
  }),

  getters: {
    appCurrentSetting(state) {
      return { ...state }
    }
  },

  actions: {
    updateSettings(partial) {
      this.$patch(partial)
    },
    setRoutes(routes) {
      this.routes = routes
    },

    setBreadcrumbList(list) {
      this.breadcrumbList = list
    },

    setCollapsed(type) {
      this.collapsed = type
    },
    // 更改颜色主题
    toggleTheme(dark) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    }
  }
})

export default useAppStore
