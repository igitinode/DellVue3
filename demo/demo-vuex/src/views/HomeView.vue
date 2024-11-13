<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ myName }}</div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    myName() {
      // 组件获取 VueX 全局仓库的数据
      return this.$store.state.name
    },
  },
}
</script>
