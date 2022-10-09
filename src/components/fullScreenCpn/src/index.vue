<template>
  <div>
    <el-tooltip :content="title">
      <el-button circle @click="handleFullScreen" class="btn">
        <template #icon>
          <el-icon :size="19">
            <FullScreen v-if="icon" />
            <Rank v-else />
          </el-icon>
        </template>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Screenfull from 'screenfull'
const state = reactive({
  title: '全屏',
  icon: true
})
const { icon, title } = toRefs(state)

const handleFullScreen = () => {
  if (!Screenfull.isEnabled) {
    // Message.warning('you browser can not work')
    return false
  }

  Screenfull.toggle()
  const isFullscreen = Screenfull.isFullscreen
  state.icon = isFullscreen
  state.title = isFullscreen ? '全屏' : '退出'
}
</script>

<style lang="scss" scoped>
.el-button:hover {
  background: #fff !important;
}
.el-button:focus {
  background: #fff !important;
}
</style>
