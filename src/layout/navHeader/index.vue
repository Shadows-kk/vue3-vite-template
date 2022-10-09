<template>
  <div class="header">
    <span @click="changeCollapse" class="collapseBtn">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
    <nav-breadcrumb></nav-breadcrumb>
    <div class="userinfo">
      <ul class="header-dropdown-wrap">
        <li>
          <full-screen-cpn></full-screen-cpn>
        </li>
        <li>
          <el-tooltip content="设置">
            <el-button class="nav-btn" circle @click="setVisible">
              <template #icon>
                <el-icon :size="20"><Setting /></el-icon>
              </template>
            </el-button>
          </el-tooltip>
        </li>
        <li>
          <user-info></user-info>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import navBreadcrumb from './navBreadcrumb.vue'
import userInfo from './userInfo.vue'
import { useAppStore } from '@/pinia'
const appStore = useAppStore()
let props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['update:collapse'])
const changeCollapse = () => {
  // 需要修改父组件的值
  emits('update:collapse', !props.collapse)
}

const setVisible = () => {
  appStore.updateSettings({ globalSettings: true })
}
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  line-height: 50px;
  .collapseBtn {
    margin-right: 10px;
  }
  .userinfo {
    display: flex;
    margin-left: auto;
    .header-dropdown-wrap {
      display: flex;
      li {
        display: flex;
        align-items: center;
        padding: 0 6px;
        .el-button:focus,
        .el-button:hover {
          background-color: #fff;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
