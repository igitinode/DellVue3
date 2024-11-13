import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 为了让样式在所有的浏览器都保持一致
// 让normalize.css帮我们不同浏览器之间显示的差异
import 'normalize.css'
import './style/base.scss'
// 引入阿里云cdn图标资源
import './style/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
