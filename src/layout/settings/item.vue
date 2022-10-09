<script setup>
const props = defineProps({
  type: '',
  name: '',
  defaultValue: false
})
const emit = defineEmits(['inputChange'])
const handleChange = (value) => {
  emit('inputChange', { value, key: props.name })
}
</script>
<template>
  <el-input-number
    v-if="type === 'number'"
    :style="{ width: '80px' }"
    size="small"
    v-model="defaultValue"
    @change="handleChange"
  />
  <el-switch
    v-else
    v-model="defaultValue"
    size="small"
    @change="handleChange"
  />
</template>
<style lang="scss"></style>
