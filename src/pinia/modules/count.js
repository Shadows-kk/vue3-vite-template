// 定义count相关的数据
import { defineStore } from 'pinia'

defineStore('home', {})
defineStore('user', {})
const useCountStore = defineStore('count', {
  state: () => ({
    counter: 666,
    multi: 'hello'
  }),
  getters: {
    doubleCount(state) {
      return state.counter * 2
    }
  },
  actions: {
    add2Count(num) {
      this.counter += num
    }
  }
})
// useCount是一个函数
export default useCountStore
