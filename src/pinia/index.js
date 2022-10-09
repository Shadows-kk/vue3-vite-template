import { createPinia } from 'pinia'
import useAppStore from './modules/app.js'
import useLoginStore from './modules/login.js'
import useCountStore from './modules/count.js'
import useRuleMenu from './modules/ruleMenu.js'

const pinia = createPinia()

export default pinia
export { useAppStore, useLoginStore, useCountStore, useRuleMenu }
