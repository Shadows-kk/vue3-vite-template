<template>
  <div class="wrapper">
    <el-menu :data="menus" :defaultActive="$route.path" :collapse="collapse" background-color="#202021"
      text-color="#fff" :collapse-transition="false">
      <template v-for="(item, i) in menus" :key="i">
        <el-sub-menu v-if="item[children]" :index="item[index]">
          <template #title>
            <el-icon>
              <component :is="item[icon]"></component>
            </el-icon>
            <span>{{ item[name] }}</span>
          </template>
          <el-menu-item v-for="item1 in item[children]" :key="item1[index]" :index="item1[index]"
            @click="onMenuClick(item1)">
            <el-icon>
              <component :is="item1[icon]"></component>
            </el-icon>
            <span style="margin-left: 7px">{{ item1[name] }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item[index]" @click="onMenuClick(item)">
          <el-icon>
            <component :is="item[icon]"></component>
          </el-icon>
          <span>{{ item[name] }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { set } from '@vueuse/core'

import { useAppStore, useTagsStore } from "@/pinia"
import { menus } from '@/router/menu.js'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const tagsStore = useTagsStore()
let props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
  // 默认选中菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: true
  },

  // 键名 不再限制传递过来的data字段
  // 1.菜单标题的键名
  name: {
    type: String,
    default: 'name'
  },
  // 2.菜单标识的键名
  index: {
    type: String,
    default: 'index'
  },
  // 3.菜单图标的键名
  icon: {
    type: String,
    default: 'icon'
  },
  // 4.菜单子菜单的键名
  children: {
    type: String,
    default: 'children'
  }
})

const onMenuClick = (item) => {
  router.push(item.index)
  const { index: path, meta: { title } } = item
  tagsStore.addTagAction({ path, title })
}
const selectBreadcrumb = (routes) =>
  routes.map(({ path, meta: { title } }) => {
    return { title, path }
  })
const setMenuKeys = (r) => {
  // console.log(r.matched)
  const currentMenu = selectBreadcrumb(r.matched)
  const tag = r.matched.slice(-1)[0]
  // console.log(tag);
  appStore.setBreadcrumbList(currentMenu)
  // console.log(appStore.breadcrumbList)
  if (tag.path !== '/dashboard') {
    tagsStore.addTagAction({ path: tag.path, title: tag.meta.title })
  }

}
watch(route, setMenuKeys, {
  immediate: true,
  deep: true
})
</script>

<style scoped lang="scss">
.wrapper {
  // width:100px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .el-menu {
    border: none;
  }
}

// 滚动条宽度设置为0
.wrapper::-webkit-scrollbar {
  width: 0px;
}
</style>
