<template>
  <div class="wrapper">
    <el-card class="form">
      <div>
        <e-form ref="formRef" :options="formOptions">
          <template #action="{ form }">
            <el-button type="primary" @click="submitClick(form)">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </template>
        </e-form>
      </div>
    </el-card>
    <el-card class="form2">
      <div>
        <e-form ref="formRef" :options="formOptions" isInline> </e-form>
      </div>
      <div class="btns">
        <el-button type="primary" @click="submitClick(form)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { formOptions } from "./config.js";
const formRef = ref(null);

// 提交
const submitClick = () => {
  console.log(formRef.value.model);
};
// 重置
const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  .form {
    width: 500px;
  }
  .form2 {
    width: 600px;
    margin-left: 20px;
    .btns {
      position: relative;
      bottom: -30px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
