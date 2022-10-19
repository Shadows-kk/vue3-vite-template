<template>
  <div>
    <e-table :data="tableData" pagination :options="tableOptions" :height="700">
      <template #action="{ scope }">
        <el-button type="primary" size="small" @click="editData(scope)">修改</el-button>
        <el-button type="danger" size="small" @click="deleteData(scope)">删除</el-button>
      </template>
    </e-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { tableOptions } from "./config";
import { getTableData } from "@/service/api/table";

let tableData = ref([]);

onMounted(() => {
  getData();
});
// 获取表格数据
const getData = () => {
  getTableData({}).then((res) => {
    tableData.value = res;
  });
};
const editData = () => {
  console.log("点击了修改按钮");
};
const deleteData = () => {
  console.log("点击了删除按钮");
};
</script>

<style lang="scss" scoped></style>
