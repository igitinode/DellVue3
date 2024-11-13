import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// sore 全局仓库
import store from './store'

createApp(App).use(store).use(router).mount('#app')
