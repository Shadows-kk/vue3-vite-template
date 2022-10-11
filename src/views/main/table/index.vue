<template>
  <div>
    <e-table :data="tableData" :options="tableOptions" pagination stripe :height="700">
      <template #action="{ scope }">
        <el-button type="primary" size="small" @click="editData(scope)">修改</el-button>
        <el-button type="danger" size="small" @click="deleteData(scope)">删除</el-button>
      </template>
    </e-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { tableOptions } from "./config";

let tableData = ref([]);

onMounted(() => {
  getTableData();
});
const getTableData = () => {
  axios.post("/api/tableList").then((res) => {
    console.log(res.data);
    tableData.value = res.data;
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
