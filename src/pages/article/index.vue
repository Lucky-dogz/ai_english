<template>
  <div>
    <Header :title="title"></Header>
    <div id="article_type">
      <button
        v-for="item in article_types"
        :key="item.nav_id"
        :class="{ active: isActive == item.nav_id }"
        @click="changeType(item.nav_id)"
      >
        {{ item.nav_title }}
      </button>
    </div>
    <ArticleLists :type="isActive" :articlelists="lists"></ArticleLists>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/common/Header.vue"
import ArticleLists from "@/components/article/articleLists.vue"
import { _getArticleLists } from "@/utils/http/api"

// 标题
const title = ref("文章点读")
// 文章类型
const article_types = reactive([
  { nav_id: 0, nav_title: "CNN新闻" },
  { nav_id: 1, nav_title: "经典英语电影对白" },
  { nav_id: 2, nav_title: "英文歌曲" },
  { nav_id: 3, nav_title: "我的文章" },
])
// 当前是否选中
const isActive = ref(0)
// 文章列表
const lists = ref([])
// 参数
let param = reactive({ category: "cnn" })
onMounted(() => {
  _getArticleLists(param)
    .then(res => {
      lists.value = res.data
      console.log(res.message)
    })
    .catch(err => {
      console.log(err)
    })
})
const changeType = typeID => {
  if (typeID == isActive.value) {
    return
  }
  isActive.value = typeID
  if (typeID == 0) {
    param.category = "cnn"
  } else if (typeID == 1) {
    param.category = "movie_talk"
  } else if (typeID == 2) {
    param.category = "en_song"
  } else {
    param = { author: "骑猪学口语" }
  }

  _getArticleLists(param)
    .then(res => {
      lists.value = res.data
      console.log(res.message)
    })
    .catch(err => {
      console.log(err)
    })
}
</script>

<style lang="scss" scoped>
#article_type {
  width: 15rem;
  height: 1.8rem;
  background-color: #f9f9f9;
  button {
    font-size: 0.5rem;
    border: none;
    margin: 0 0.2rem;
    padding: 0.05rem 0.3rem;
    color: #626161;
  }
  .active {
    // position: relative;
    background-color: #ccf3e9;
    color: #25e1ad;
  }
}
</style>
