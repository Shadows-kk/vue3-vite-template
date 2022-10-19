import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import pinia from './pinia'
// import svgIcon from '@/components/SvgIcon/index.vue'

import '@/assets/css/style.css'
import '@/style/index.scss'
import '@/style/scss/common.scss'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import 'virtual:svg-icons-register'
import './mock'

const app = createApp(App)
app.use(router).use(components).use(pinia)
// app.component('svg-icon', svgIcon)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
