<template>
  <div class="wrapper">
    <img src="@/assets/login/user.png" class="wrapper-img" />
    <div class="wrapper-input">
      <input
        type="text"
        class="wrapper-input-content"
        placeholder="用户名"
        v-model="data.username"
      />
    </div>
    <div class="wrapper-input">
      <input
        type="password"
        class="wrapper-input-content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper-login-button" @click="handleLogin">登陆</div>
    <div class="wrapper-login-link" @click="handleRegisterClick">立即注册</div>
  </div>
  <toast v-if="toastData.showToast" :message="toastData.toastMessage" />
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast.vue'

export default {
  name: 'Login',
  components: { Toast },
  setup() {
    const router = useRouter()
    const data = reactive({ username: '', password: '' })
    const { toastData, showToast } = useToastEffect()

    const handleLogin = async () => {
      try {
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          showToast('登陆失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { data, toastData, handleLogin, handleRegisterClick }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &-img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }

  &-input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    &-content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%; // 撑开父容器
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &-login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &-login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
