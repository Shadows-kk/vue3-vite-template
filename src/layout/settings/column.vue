<script setup>
import { useAppStore } from "@/pinia";
import item from "./item.vue";

const props = defineProps({
  title: {
    type: String,
    defult: "",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});
const appStore = useAppStore();

const handleChange = ({ key, value }) => {
  // if (value && key === "colorWeek") {
  //   document.body.classList.add("dark");
  //   document.body.setAttribute("color-scheme", "dark");
  // }
  // if (!value && key === "colorWeek") {
  //   document.body.classList.remove("dark");
  //   document.body.removeAttribute("color-scheme");
  // }
  // appStore.updateSettings({ [key]: value });
};
</script>
<template>
  <div class="app-settings-column">
    <h5 class="title">{{ props.title }}</h5>
    <el-space direction="vertical" fill>
      <div v-for="option in props.options" :key="option.name" class="switch-wrapper">
        <span style="font-size: 14px; margin-right: 10px">{{ option.name }}</span>
        <item
          :type="option.type || 'switch'"
          :name="option.key"
          :default-value="option.defaultVal"
          @input-change="handleChange"
        />
      </div>
    </el-space>
  </div>
</template>
<style lang="scss">
.title {
  margin: 10px 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
}
.switch-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
}
</style>
