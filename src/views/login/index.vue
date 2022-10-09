<template>
  <div class="login_box">
    <div class="login_left">
      <img src="@/assets/images/login_back.png" />
    </div>
    <div class="login_right">
      <loginForm />
    </div>
  </div>
</template>

<script setup>
import loginForm from "./loginForm";
</script>

<style lang="scss">
.login_box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/images/login-bg.svg");

  .login_left img {
    width: 500px;
  }
  .login_right {
    min-width: 400px;
    padding: 0px 100px;
  }
}
</style>
