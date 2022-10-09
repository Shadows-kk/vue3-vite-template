<template>
  <div>
    <template v-for="(item, index) in ids" :key="index">
    <div>
      <svg-icon :iconClass="iconClass[index]" name="ids[index]" />
      <span slot="title">{{ item }}</span>
    </div>
  </template>
  </div>
</template>

<script setup>
import ids from "virtual:svg-icons-names";
const iconClass = ids.map((item) => {
  return item.split("-")[1];
});
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
