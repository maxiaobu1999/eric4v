import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// svg
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'

// 根组件
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('SvgIcon', svgIcon)

app.use(ElementPlus)

app.mount('#app') // 挂载应用
