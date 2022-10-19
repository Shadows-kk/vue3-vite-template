<script setup>
import { ref, computed, watch } from "vue";
import { useAppStore } from "@/pinia";

import Column from "./column.vue";

const appStore = useAppStore();
let visible = ref(false);
watch(
  () => appStore.globalSettings,
  (val) => {
    visible.value = val;
  },
  { deep: true }
);
// const visible = computed(() => appStore.globalSettings)
const contentOpts = [
  { name: "导航栏", key: "navbar", defaultVal: true },
  { name: "菜单栏", key: "menu", defaultVal: true },
];
const othersOpts = [{ name: "暗黑模式", key: "colorWeek", defaultVal: false }];

const handleCancel = () => {
  appStore.updateSettings({ globalSettings: false });
};
</script>
<template>
  <el-drawer v-model="visible" @close="handleCancel" :show-close="false" size="20%">
    <Column :options="contentOpts" title="内容区域" />
    <el-divider class="app-drawer-div" />
    <Column :options="othersOpts" title="其它设置" />
  </el-drawer>
</template>
<style lang="scss">
.arco-drawer {
  .arco-drawer-header {
    display: none;
  }
}
.app-drawer-div {
  border-bottom-style: solid;
  color: #eee;
  margin: 10px 0 15px;
}
.el-drawer__header {
  margin-bottom: 10px;
}
.el-drawer__body {
  padding-top: 0;
}
</style>
