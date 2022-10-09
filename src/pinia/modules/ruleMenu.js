import { defineStore } from 'pinia'

const useRuleMenu = defineStore('ruleMenu', {
  state: () => ({
    rules: ['getA', 'getB', 'getC']
  }),
  getters: {},
  actions: {}
})
export default useRuleMenu
