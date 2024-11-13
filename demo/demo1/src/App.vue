<template>
  <div>
    <input v-model="inputValue" />
    <button class="button" @click="handleAddItem">提交</button>
  </div>
  <ul>
    <list-item v-for="(item, index) in list" :key="index" :msg="item" />
  </ul>
</template>

<script>
import { ref, reactive } from "vue"
import ListItem from "./components/ListItem.vue"
export default {
  name: "App",
  components: {
    ListItem,
  },
  setup() {
    const list = reactive([])
    const inputValue = ref("")
    const handleAddItem = () => {
      list.push(inputValue.value)
      inputValue.value = ""
    }

    return { inputValue, list, handleAddItem }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .button {
    margin-left: 20px;
    color: red;
  }
}
</style>
