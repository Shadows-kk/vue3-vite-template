<template>
  <svg
    :class="svgClass"
    v-bind="$attrs"
    :width="props.size"
    :height="props.size"
    :color="props.color"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
  size: {
    type: String,
    default: "1em",
  },
});
const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  if (props.name) return `svg-icon icon-${props.name}`;
  return "svg-icon";
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
