<template>
  <div class="e-cpn-wrappers">
    <el-form
      ref="form"
      v-bind="$attrs"
      :model="model"
      :rules="rules"
      :validate-on-rule-change="false"
      :inline="true"
    >
      <template v-for="(item, index) in options" :key="index">
        <!-- 没有children -->
        <el-form-item
          v-if="!item.children || !item.children.length"
          :label="item.label"
          :prop="item.prop"
        >
          <component
            :is="`el-${item.type}`"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            v-model="model[item.prop]"
          ></component>
        </el-form-item>
        <!-- 下拉多选框 -->
        <el-form-item
          v-if="item.children && item.children.length && item.multiple"
          :label="item.label"
          :prop="item.prop"
        >
          <component
            :is="`el-${item.type}`"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            v-model="model[item.prop]"
            :multiple="item.multiple"
            @visible-change="handleVisibleChange"
          >
            <component
              v-for="(child, index) in item.children"
              :key="index"
              :is="`el-${child.type}`"
              :value="child.value"
              :label="child.label"
            ></component>
          </component>
        </el-form-item>
        <!-- 下拉单选 radio checkbox -->
        <el-form-item
          v-if="item.children && item.children.length && !item.multiple"
          :label="item.label"
          :prop="item.prop"
        >
          <component
            :is="`el-${item.type}`"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            v-model="model[item.prop]"
          >
            <component
              v-for="(child, index) in item.children"
              :key="index"
              :is="`el-${child.type}`"
              :value="child.value"
              :label="child.label"
            ></component>
          </component>
        </el-form-item>
      </template>
      <!-- 操作按钮 -->
      <el-form-item>
        <slot name="action" :form="form" :model="model"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import cloneDeep from "lodash/cloneDeep";
const form = ref(null);
const model = ref({});
const rules = ref({});
const props = defineProps({
  // 表单的配置
  options: {
    type: Array,
    required: true,
  },
});
const shortcuts = ref();
const emits = defineEmits(["visibleChange"]);
onMounted(() => {
  initForm();
});
// 监听父组件传进来的options
watch(
  () => props.options,
  (val) => {
    // console.log(val);
    initForm();
  },
  { deep: true }
);
// 初始化表单的方法
const initForm = () => {
  if (props.options && props.options.length) {
    let m = {};
    let r = {};
    props.options.map((item) => {
      m[item.prop] = item.value;
      r[item.prop] = item.rules;
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
    // console.log(model.value);
  }
};
const handleVisibleChange = (val) => {
  emits("visibleChange", val);
};
const resetFields = () => {
  form.value.resetFields();
};
// 表单验证
const validate = () => {
  return form.value.validate;
};
// 获取表单数据
const getFormData = () => {
  return model.value;
};
// 分发组件的属性方法给父组件
defineExpose({
  model,
  resetFields,
  validate,
  getFormData,
});
</script>

<style lang="scss" scoped></style>
