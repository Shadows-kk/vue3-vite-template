<script setup>
import { computed, ref, reactive, watch } from 'vue'
import { HomePath } from '@/config/constants'
import { useRoute, useRouter } from 'vue-router'
import { set } from '@vueuse/core'

const route = useRoute()
const router = useRouter()
const tagList = reactive([
  { path: '/form', title: '表单' },
  { path: '/table', title: '表格' },
  { path: '/demo/pinia', title: 'pinia' },
  { path: '/demo/useSvg', title: 'svg' }
])
</script>
<template>
  <ul class="tags-wrap">
    <li v-for="(tag, index) in tagList" :key="tag.path">
      <el-dropdown>
        <span class="el-dropdown-link"> </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>关闭右侧</el-dropdown-item>
            <el-dropdown-item>关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </li>
  </ul>
</template>
<style lang="scss"></style>
