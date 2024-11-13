<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ name }}</div>
    <button @click="handleClick">切换</button>
    <button @click="handleClick1">axios获取</button>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { toRefs } from "vue"
export default {
  name: "HomeView",
  setup() {
    // Composition API 使用 VueX
    const store = useStore()
    const { name } = toRefs(store.state)
    const handleClick = () => {
      store.commit("change", "uijack")
    }
    const handleClick1 = () => {
      store.dispatch("getData")
    }
    return {
      name,
      handleClick,
      handleClick1,
    }
  },
}
</script>
