import { createStore } from "vuex"

// VueX数据管理框架
// 组件级数据传递： provide、inject
// 页面级数据传递

// VueX创建了一个全局唯一的仓库，用来存放全局的数据
// 统一处理数据修改的修改逻辑。未来维护更方便，方便追溯查错
export default createStore({
  state: {
    name: "jack",
  },
  getters: {},
  // mutations 里面建议只允许写同步代码，不允许写异步代码
  // commit 和 mutatios 做关联
  mutations: {
    // 第四步 对应的mutation 被执行
    change(state, value) {
      // 第五步 在mutatio 里面修改数据
      state.name = value
    },
  },
  // actions 允许有异步代码操作
  // dispatch 和 actions 做关联
  actions: {
    // 第二步，接收到组件 dispatch 调用的action 执行 change 方法
    change(store, value) {
      // 第三步 提交一个commit，触发一个 mutation
      store.commit("change", value)
    },
  },
  modules: {},
})
