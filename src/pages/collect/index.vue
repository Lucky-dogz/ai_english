<template>
  <div id="setting">
    <Header :title="title"></Header>
    <div class="collect_navs">
      <span
        v-for="item of collect_navs"
        :key="item.nav_id"
        :class="{ active: isActive === item.nav_id }"
        @click="changeNav(item)"
      >
        {{ item.nav_title }}
      </span>
    </div>
    <router-view></router-view>
    <!-- <button @click="play">播放</button> -->
  </div>
</template>

<script setup lang="ts">
const title = ref("收藏列表")
const collect_navs = ref([
  { nav_id: 0, nav_title: "配音视频", nav_name: "peiyin" },
  { nav_id: 1, nav_title: "单词短语", nav_name: "words" },
  { nav_id: 2, nav_title: "文章作文", nav_name: "myarticle" },
])
const isActive = ref(1)

// 切换导航
const router = useRouter()
const changeNav = item => {
  isActive.value = item.nav_id
  router.replace({
    name: item.nav_name,
  })
}
/* 播放 */
/* const audio = new Audio()
const play = () => {
  audio.src = "http://dict.youdao.com/dictvoice?audio=word"
  audio.play()
} */
</script>

<style lang="scss" scoped>
.collect_navs {
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem 0 0.8rem;
  height: 2rem;
  font-family: "方正兰亭圆简体", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  line-height: 2rem;

  .active {
    position: relative;
  }
  .active::after {
    content: "";
    position: absolute;
    top: 1.8rem;
    left: 0rem;
    width: 3rem;
    border-bottom: 0.2rem solid #15dfa7;
    border-radius: 0.2rem;
  }
}
</style>
