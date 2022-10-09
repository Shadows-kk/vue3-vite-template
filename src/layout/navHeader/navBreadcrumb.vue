<template>
  <div class="app-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(bread, index) in breadcrumbList" :key="index">
        <el-breadcrumb-item>
          {{ bread.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/pinia'
const appStore = useAppStore()
const breadcrumbList = computed(() => appStore.breadcrumbList)
</script>

<style lang="scss">
.app-breadcrumb {
  display: inline-block;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -2px;
  // .ant-breadcrumb {
  //   line-height: 64px;
  // }
  .el-breadcrumb__item:nth-last-of-type(1) .el-breadcrumb__inner {
    font-weight: 800;
    font-size: 16px;
  }
}
</style>
