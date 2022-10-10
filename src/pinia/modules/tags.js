// 定义count相关的数据
import { defineStore } from 'pinia'

const useTagsStore = defineStore('tags', {
  state: () => ({
    tagList: [{ path: '/main' }]
  }),
  getters: {},
  actions: {
    addTagAction(tag) {
      // 对象数组中不存在此tag对象，添加
      if (JSON.stringify(this.tagList).indexOf(JSON.stringify(tag)) === -1) {
        this.tagList.push(tag)
      }
    },
    closeTagAction(tag) {
      this.tagList.splice(this.tagList.indexOf(tag), 1)
    },
    closeRightTags(index) {
      this.tagList.splice(index + 1)
    }
  },
  persist: true
})

export default useTagsStore
