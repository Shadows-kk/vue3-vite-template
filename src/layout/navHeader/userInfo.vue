<template>
  <div class="user-info DarkModelPage">
    <div class="switchTheme" @click="modelBtn">
      <el-icon></el-icon>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        />
        <span class="name">{{ username }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'
let username = ref('')
const dark = ref(false)
const router = useRouter()
onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', 'light')
  getUserName()
})

// 方法
const getUserName = () => {
  username.value = localCache.getCache('account') ?? 'user'
}
const modelBtn = () => {
  dark.value = !dark.value
  if (dark.value) {
    window.document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    window.document.documentElement.setAttribute('data-theme', 'light')
  }
}
const logout = () => {
  localCache.deleteCache('token')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  // .switchTheme {
  //   font-size: 20px;
  //   position: relative;
  //   top: 4px;
  //   right: 20px;
  //   cursor: pointer;
  //   // @include font_color("text-color");
  // }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    .name {
      margin-left: 10px;
      // @include font_color("text-color");
      font-weight: 600;
    }
  }
}
</style>
