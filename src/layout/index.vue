<template>
  <div style="height: 100%">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '150px'">
        <nav-side :collapse="isCollapse"></nav-side>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header v-model:collapse="isCollapse"></nav-header>
        </el-header>
        <el-main>
          <tags-view />
          <div class="content">
            <router-view v-slot="{ Component }">
              <transition name="fade-transform" mode="out-in">
                <!-- <transition name="fade" mode="out-in"> -->
                <!-- <transition name="zoom-in-top" mode="out-in"> -->
                <!-- <transition name="fade-slide" mode="out-in"> -->
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <settings />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import navSide from "./navSide/index.vue";
import navHeader from "./navHeader/index.vue";
import settings from "./settings/index.vue";
import tagsView from "./tagsView/index.vue";
let isCollapse = ref(false);
</script>

<style scoped lang="scss">
.main-content {
  width: 100%;
  height: 100%;
}

.el-header {
  height: 50px;
  padding: 0;
  border-bottom: 1px solid #eee;
}

.el-aside {
  height: 100vh;
  // background-color: #202021;
  background-color: var(--bg-color-dark) !important;
}

.el-main {
  // background-color: #f0f2f5;
  height: 100%;
  width: 100%;
  padding: 20px;

  .content {
    // background-color: #fff;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: calc(100% - 38px);
    border-radius: 10px;
  }
}
</style>
