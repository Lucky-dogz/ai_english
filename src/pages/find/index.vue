<template>
  <div class="box">
    <HeaderBg />
    <div id="contents">
      <NavBlock />
      <HotBlock />
      <LikeBlock />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.box {
  width: 15rem;
  font-family: "方正兰亭圆简体_中粗", sans-serif;
  background-color: #f9f9f9;
}
#contents {
  position: relative;
  width: 12.5rem;
  height: 31rem;
  left: 7.5rem;
  transform: translate(-50%);
  top: -0.8rem;
}
</style>
