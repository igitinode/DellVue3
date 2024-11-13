<template>
  <div class="about">
    <h1 @click="handliClick">This is an about page</h1>
    <h1>{{ myName }}</h1>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  computed: {
    myName() {
      // 组件获取 VueX 全局仓库的数据
      return this.$store.state.name
    },
  },
  methods: {
    handliClick() {
      // 想改变 state 数据, VueX 要求第一步，必须 dispatch（派发）一个定义好的 action
      // change 就是事先在stor.actions 里面定义好的 action
      // 虽然可以直接this.$store.commit("change")，同步操作没问题。
      // 异步操作推荐走 dispatch, 同步操作可以使用 dispatch 和 commit
      this.$store.dispatch("change", "uijack")
    },
  },
}
</script>
