<template>
  <el-config-provider namespace="ep">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup>
// console.log(process.env.NODE_ENV)
// console.log('import', import.meta)
// console.log('import.url', import.meta.env.BASE_URL)
// console.log('import.env.MODE', import.meta.env.MODE)
</script>
<style lang="scss">
#app {
  color: var(--ep-text-color-primary);
}
</style>
