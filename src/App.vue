<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// import Login from "./pages/login/index.vue"
</script>

<style lang="scss">
// Message Box 适配移动端，宽度小于720px时宽度使用下面这个
@media (max-width: 720px) {
  .el-message {
    width: 10rem !important;
  }
}
</style>
