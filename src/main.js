import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// 根组件
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') // 挂载应用
