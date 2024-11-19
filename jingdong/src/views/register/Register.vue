<template>
  <div class="wrapper">
    <img src="@/assets/login/user.png" class="wrapper-img" />
    <div class="wrapper-input">
      <input
        type="text"
        class="wrapper-input-content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper-input">
      <input
        type="password"
        class="wrapper-input-content"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrapper-input">
      <input
        type="password"
        class="wrapper-input-content"
        placeholder="确认密码"
        v-model="ensurement"
        autocomplete="new-password"
      />
      <!-- autocomplete="new-password" 浏览器就不会自动填充密码 -->
    </div>
    <div class="wrapper-register-button" @click="handleRegister">注册</div>
    <div class="wrapper-register-link" @click="handleLoginClick">
      已有账号? 去登陆
    </div>
    <toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast.vue'
import { registerData } from '@/json/registerData.js'

// 注册相关逻辑
const useRegisterEffect = showToast => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = () => {
    // const result = await post('/api/user/register', {
    //   username: data.username,
    //   password: data.password
    // })
    const result = registerData()
    if (result?.errno === 0) {
      // 注册成功就跳转到登陆界面
      router.push({ name: 'Login' })
    } else {
      showToast('注册失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)

  return {
    username,
    password,
    ensurement,
    handleRegister
  }
}

// 处理登陆跳转逻辑
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }

  return { handleLoginClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, ensurement, handleRegister } =
      useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return {
      show,
      toastMessage,
      username,
      password,
      ensurement,
      handleRegister,
      handleLoginClick
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
  &-register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: $btnColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &-register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
