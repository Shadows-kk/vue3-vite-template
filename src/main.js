import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import pinia from './pinia'
import svgIcon from '@/components/SvgIcon/index.vue'

import './style.css'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router).use(components).use(pinia).component('svg-icon', svgIcon)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
