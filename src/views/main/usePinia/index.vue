<template>
  <div>
    <div>{{ countStore.multi }}</div>
    <div class="container">counter:{{ countStore.counter }}</div>
    <div class="container">解构的counter:{{ counter }}</div>
    <el-button type="primary" @click="changeCount1">changeCount1</el-button>
    <el-button type="primary" @click="changeCount2">changeCount1</el-button>
    <el-button type="primary" @click="resetCount">resetCount</el-button>
    <div>
      <div>doubleCount:{{ countStore.doubleCount }}</div>
      <el-button type="primary" @click="add2">add2</el-button>
    </div>
  </div>
</template>

<script setup>
import { useCountStore } from "@/pinia";
import { storeToRefs } from "pinia";
const countStore = useCountStore();
// countStore中的内容不能直接解构，会失去响应式
const { counter } = storeToRefs(countStore);
// 操作state
const changeCount1 = () => {
  // 1.默认情况下可以通过实例进行读取和写入
  countStore.counter++;
};
const changeCount2 = () => {
  // 2.一次性修改多个状态
  countStore.$patch({
    counter: 999,
    multi: "world",
  });
};
// 重置state
const resetCount = () => {
  countStore.$reset();
};

// actions操作
const add2 = () => {
  countStore.add2Count(2);
};
</script>

<style lang="scss" scoped></style>
