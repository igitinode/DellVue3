import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"

// 以后在此处路由扩展
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView, // 同步路由，页面切换速度快
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      // 懒加载，使用的时候才加载，降低首屏加载的时间
      // 但是当要使用的就要重新加载
      // 异步加载路由
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
