<template>
  <svg class="svg-icon" aria-hidden="true" :width="props.size" :height="props.size">
    <use :xlink:href="iconName" :fill="props.color" />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  iconClass: {
    // 图标名称与assets/icon/svg下使用的文件名一致
    type: String,
    required: true,
  },
  className: {
    // 给图标添加class
    type: String,
    default: "",
  },
  color: {
    // 设置图标颜色
    type: String,
    default: "#333",
  },
  size: {
    type: String,
    default: "1em",
  },
});

const iconName = computed(() => {
  return `#icon-${props.iconClass}`;
});
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return "svg-icon";
});
</script>

<style scope lang="scss">
.sub-el-icon,
.nav-icon {
  display: inline-block;
  font-size: 15px;
  margin-right: 12px;
  position: relative;
}

.svg-icon {
  width: 12px;
  height: 12px;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
