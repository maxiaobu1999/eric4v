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

## 参考资料
[unplugin-auto-import的使用](https://juejin.cn/post/7220258409446080568)
