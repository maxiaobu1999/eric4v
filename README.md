# eric4v
(工程创建)[https://cn.vuejs.org/guide/quick-start.html]
运行

```sh
npm install
```

```sh
npm run dev
```

```sh
npm run build
```
访问:   http://localhost:5174/


## 项目结构
```shell
|---node_modules 			// 应用级逻辑
|---public			        // 元能力组件
|---src 			        // 场景业务功能（如果存在多个场景，则放在同级目录下）
|   |---assets 				// 场景业务逻辑相关类或数据
|   |---components			// 场景业务逻辑相关页面
|   |---router				// 路由
|   |---stores				// 状态管理
|   |---views				// 视图
|   |---App.vue				// 场景业务逻辑相关页面
|   |---main.js				// 根组件
|---env.d.ts 					// UI页面
|---index.html 					// 共用的工具类或者模块
|---package.json 			// 特性相关封装类
|---vite.config.ts 			// 工程配置

```
Vite 是vue 的作者尤雨溪在开发vue3.0 的时候开发的一个web 开发构建工具。
main.js 创建一个 Vue 应用
App.vue 根组件
main.vue 首页
http.js 网络请求
stores/* 首选项

.env.development VITE_APP_BASE_API base url
pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。
Avue   是一个基于Element框架低代码前端框架
## 路由
1、历史模式 createWebHistory
2、hash模式 createWebHashHistory

## element plus
npm install element-plus --save
https://cn.element-plus.org/zh-CN/guide/installation.html
main.js 引入
https://cn.element-plus.org/zh-CN/guide/quickstart.html
组件安装
https://cn.element-plus.org/zh-CN/component/icon.html

## Axios
npm install axios --save

## 全局状态管理 

[Pinia](https://pinia.vuejs.org/zh/core-concepts/) 
Vuex 旧

## avue
https://avuejs.com/docs/installation.html


## npm 设置淘宝源
npm config set registry https://registry.npm.taobao.org
npm config get registry
npm config set registry http://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/

## 参考资料
[unplugin-auto-import的使用](https://juejin.cn/post/7220258409446080568)
[使用webstorm 搭建 vue 开发环境](https://www.cnblogs.com/666666pingzi/p/11531264.html)
[VueJs(15)--- Webstorm+Chrome 调试Vue项目](https://www.cnblogs.com/qdhxhz/p/14111320.html)
