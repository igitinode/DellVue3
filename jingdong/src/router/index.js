import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage
      if (isLogin) {
        // 已经登录, 不需要在进入登录界面了, 进入首页
        next({ name: 'Home' })
      } else {
        // 未登录, 正常进入登录界面
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    Regicomponent: () =>
      import(
        /* webpackChunkName: "register" */ '@/views/register/Register.vue'
      ),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage
      if (isLogin) {
        // 已经登录, 不需要在进入登录界面了, 进入首页
        next({ name: 'Home' })
      } else {
        // 未登录, 正常进入登录界面
        next()
      }
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () =>
      import(/* webpackChunkName: "shop" */ '@/views/shop/Shop.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 每次路由跳转之前的都要做的一些操作
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const { name } = to
  const isLoginOrRegister = name === 'Login' || name === 'Register'
  // next 中间件继续执行的一个方法, 正常往下执行
  if (isLogin || isLoginOrRegister) {
    // 登录了或者下一个界面是访问登录\注册界面
    next()
  } else {
    // 未登录跳转
    next({ name: 'Login' })
  }
})

export default router
