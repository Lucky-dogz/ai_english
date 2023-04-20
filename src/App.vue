<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="articRead,ORder,WeekReport,CUstomer,my_Article,PeiYin">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!--   <keep-alive exclude="articRead,ORder,WeekReport,CUstomer,my_Article,PeiYin">
    <router-view></router-view>
  </keep-alive> -->
</template>

<script setup lang="ts">
import { userStore } from "@/store/user"

// eslint-disable-next-line no-unused-vars
const name = ref("I am js")
const router = useRouter()
// Android调用js方法
const changeToMy = () => {
  router.replace({
    name: "my",
  })
  return "切换页面到我的"
}
const changeToFind = () => {
  router.replace({
    name: "find",
  })
  return "切换页面到发现"
}
// js调用Android方法
// eslint-disable-next-line no-unused-vars
const showAndroidToast = () => {
  // eslint-disable-next-line no-undef
  $Android.showToast("哈哈，我是js调用的")
}
// 初始化
const init = () => {
  const user = userStore()
  user.hasAndroid = true
  return "初始化完成"
}

onMounted(() => {
  // 将要给原生调用的方法挂载到 window 上面
  window.changeToMy = changeToMy
  window.changeToFind = changeToFind
  window.init = init
})
</script>

<style lang="scss">
// Message Box 适配移动端，宽度小于720px时宽度使用下面这个
@media (max-width: 720px) {
  .el-message {
    width: 10rem !important;
  }
}
</style>
