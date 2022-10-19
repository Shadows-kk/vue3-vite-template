<template>
  <div class="wrapper">
    <div class="pic"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  width: calc(100vw - 200px);
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .pic {
    width: 100%;
    height: 100%;
    background: url("@/assets/images/login_back.png") center no-repeat;
  }
}
</style>
