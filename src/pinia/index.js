import { createPinia } from 'pinia'
//pinia持久化库
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useAppStore from './modules/app.js'
import useLoginStore from './modules/login.js'
import useCountStore from './modules/count.js'
import useRuleMenu from './modules/ruleMenu.js'
import useTagsStore from './modules/tags.js'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
export { useAppStore, useLoginStore, useCountStore, useRuleMenu, useTagsStore }
