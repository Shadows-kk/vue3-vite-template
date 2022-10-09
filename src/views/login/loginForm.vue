<template>
  <div class="login_box">
    <div class="input_box">
      <div class="title_text_banner">Vue3+Vite</div>
      <div class="welcome_text_banner">欢迎使用</div>
      <el-form
        ref="loginFormRef"
        label-position="top"
        label-width="80px"
        :model="loginForm"
        :rules="rules"
        class="login_form"
      >
        <el-form-item label="用户名/工号" prop="account">
          <el-input v-model="loginForm.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" show-password />
        </el-form-item>
      </el-form>
      <div class="login_btn" @click="login">登 录</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useLogin from '@/pinia/login'
import localCache from '@/utils/cache'
import { accountLoginRequest } from '@/service/api/login'

const router = useRouter()
let loginFormRef = ref()
let loginForm = reactive({
  account: localCache.getCache('account') ?? '',
  password: localCache.getCache('password') ?? ''
})
let rules = reactive({
  account: [{ required: true, message: '请输入用户名/工号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const login = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      localCache.setCache('account', loginForm.account)
      localCache.setCache('password', loginForm.password)
      router.push('/')

      // 调用登录接口
      // accountLoginRequest(loginForm).then((res) => {
      //   if (res.code === 200 && res.status) {
      //     localCache.setCache("role", res.data.role);
      //     localCache.setCache("dept", res.data.dept);
      //     localCache.setCache("token", res.token);
      //     // 3:开发 4:测试
      //     if (res.data.dept === 3) {
      //       if (res.data.role === "qd") {
      //       } else {
      //       }
      //     } else if (res.data.dept === 4) {
      //     }
      //     router.push("/");
      //   } else {
      //     ElMessage.error(res.message);
      //   }
      // });
    }
  })
}
</script>

<style lang="scss">
.login_box {
  position: relative;
  background: #ffffff;
  .input_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 36px;
    border-radius: 10px;
    box-shadow: 0 2px 8px #ddd;
    background-color: #fff;
    .title_text_banner {
      color: #182632;
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 20px;
    }
    .welcome_text_banner {
      color: rgba(24, 38, 50, 0.5);
      font-size: 20px;
      margin-bottom: 20px;
    }
    .login_form {
      width: 300px;
      margin: auto;
      .el-form-item__label {
        color: rgba(24, 38, 50, 0.5);
        line-height: 15px;
        font-size: 12px;
      }
    }
    .login_btn {
      width: 300px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      margin: 0 auto;
      color: #ffffff;
      background: rgba(69, 121, 247, 1);
      box-shadow: 0px 10px 40px 0px rgba(69, 121, 247, 0.2);
      border-radius: 6px;
    }
  }
}
</style>
