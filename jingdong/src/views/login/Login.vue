<template>
  <div class="wrapper">
    <img src="@/assets/login/user.png" class="wrapper-img" />
    <div class="wrapper-input">
      <input
        type="text"
        class="wrapper-input-content"
        placeholder="用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper-input">
      <input
        type="password"
        class="wrapper-input-content"
        placeholder="请输入密码"
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper-login-button" @click="handleLogin">登陆</div>
    <div class="wrapper-login-link" @click="handleRegisterClick">立即注册</div>
  </div>
  <toast v-if="show" :message="toastMessage" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast.vue'
import { loginData } from '@/json/loginData.js'

// 登陆相关逻辑
const useLoginEffect = showToast => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })

  const handleLogin = () => {
    const { username, password } = data
    if (username === '' || password === '') {
      showToast('请输入用户名或密码')
      return
    }

    // let result = await post('/api/user/login', {
    //   username,
    //   password
    // })
    // 重新赋值
    const result = loginData()

    if (result?.errno === 0) {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    } else {
      showToast('登陆失败')
    }
  }
  const { username, password } = toRefs(data)
  return {
    username,
    password,
    handleLogin
  }
}

const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }

  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  // 职责就是告诉你，代码执行的流程
  // 不这样做的话，setup函数会无比的长，时间长了看不懂
  setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()

    return {
      username,
      password,
      show,
      toastMessage,
      handleLogin,
      handleRegisterClick
    }
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
    background: $btnColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: $bgColor;
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
