<!--首页 template 写html的地方-->
<template>
  <div
    v-loading.fullscreen.lock="loading"
    class="site-wrapper"
    :class="{ 'site-sidebar--fold': sidebarFold }"
    :element-loading-text="'拼命加载中'"
  >
    <template v-if="!loading">
      <MainNavbar />
      <MainSidebar />
      <div
        class="site-content__wrapper"
        :style="{ 'min-height': documentClientHeight + 'px' }"
      >
        <main-content />
      </div>
    </template>
  </div>
</template>
<!--`setup` 是一个特殊的钩子，专门用于组合式 API。-->
<!--要在组件模板中访问 ref，请从组件的 setup() 函数中声明并返回它们：。-->
<!--<script setup> 使用单文件组件 (SFC) 来避免手动暴露大量的状态和方法 来大幅度地简化代码：-->
<script setup>
import MainNavbar from './main-navbar.vue'
import MainSidebar from './main-sidebar.vue'
import MainContent from './main-content.vue'
onBeforeMount(() => {
  console.error('onBeforeMount ======', `${import.meta.env.VITE_APP_BASE_API}`)
  getUserInfo()
})

const commonStore = useCommonStore()
const documentClientHeight = computed(() => commonStore.documentClientHeight)
const userStore = useUserStore()
const sidebarFold = computed(() => commonStore.sidebarFold)
onMounted(() => {
  resetDocumentClientHeight()
})
const resetDocumentClientHeight = () => {
  commonStore.documentClientHeight = document.documentElement.clientHeight
  window.onresize = () => {
    commonStore.documentClientHeight = document.documentElement.clientHeight
  }
}

const loading = ref(true)
// 获取当前管理员信息
const getUserInfo = () => {
  http({
    url: http.adornUrl('/user/info'),
    method: 'get',
    params: http.adornParams()
  }).then(({ data }) => {
    console.log('[main.vue] data ======', `${data.data.userId}`)
    loading.value = false
    userStore.userId = data.data.userId
    userStore.name = data.data.userName
    console.log('[main.vue] userStore.name ======', `${userStore.name}`)
    userStore.mobile = data.data.phoneNum
    userStore.shopId = '1'
  }).catch(() => {})
}
</script>
