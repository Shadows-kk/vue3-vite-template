<template>
  <div :class="{ 'choose-icon-el-dialog__body-height': isScroll }">
    <el-dialog v-model="dialogFormVisible" v-bind="$attrs">
      <template #default>
        <e-form :options="optionsCopy" ref="form" label-width="auto"> </e-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const form = ref(null);
const emits = defineEmits(["update:visible"]);
const props = defineProps({
  // 子组件不能直接绑定父组件传过来的数据
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单的配置
  options: {
    type: Array,
    required: true,
  },
  // 控制弹框只在屏幕区域内滚动
  isScroll: {
    type: Boolean,
    default: false,
  },
});
// 弹出框的显示与隐藏
let dialogFormVisible = ref(props.visible);
let optionsCopy = ref(props.options);
watch(
  () => props.visible,
  (val) => {
    dialogFormVisible.value = val;
  }
);
watch(
  () => dialogFormVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
watch(
  () => props.options,
  (val) => {
    // console.log(val);
    optionsCopy.value = val;
  },
  { deep: true }
);
</script>

<style scoped></style>
