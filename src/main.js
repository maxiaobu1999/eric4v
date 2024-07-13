import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局样式
import '@/styles/index.scss'
// svg
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'

// 实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。
const app = createApp(App)

app.use(createPinia())
app.use(router)

// 注册应用范围内可用的资源
app.component('SvgIcon', svgIcon)

app.use(ElementPlus)

app.mount('#app') // 挂载应用,#app对应<div id="app"></div>
