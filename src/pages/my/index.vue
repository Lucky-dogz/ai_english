<template>
  <div id="box">
    <MainHeader :from="nav_name" :category="category" />
    <MyInfo />
    <MyLevel />
    <MyNav />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const nav_name = ref("个人中心")
const category = ref(0)
</script>

<style lang="scss" scoped>
#box {
  width: 15rem;
  height: 39rem;
  background-color: rgba(249, 249, 249, 1);
}
</style>
