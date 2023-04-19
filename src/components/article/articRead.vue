<template>
  <div>
    <HEader title="文章点读"></HEader>
    <div id="content" ref="loading">
      <div class="header">
        <h5 class="title">{{ article.title }}</h5>
        <span class="category">{{ article.category }}</span>
        <div class="info">
          {{ article.info }}
        </div>

        <div class="ad">
          <span class="author">{{ article.author }}</span>
          <p class="date">{{ timestampToTime(article.time_cursor) }}</p>
        </div>
      </div>
      <div class="read">
        <div
          v-for="(item, index) in contents"
          :key="index"
          class="sentence"
          :class="{ isPlaying: isPlayingFlag == index }"
          @click="sentenceStudio(item, index)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <audio></audio>
  </div>
</template>

<script setup lang="ts">
import HEader from "../common/Header.vue"
import { _getArticleContent } from "@/utils/http/api"
import { ElLoading } from "element-plus"

// 文章内容
let article = reactive({})
const contents = ref([])
// 是否正在播放
const isPlayingFlag = ref(-1)

const route = useRoute()

// 挂载
onMounted(() => {
  const loading = ElLoading.service({
    lock: true,
    text: "文章加载中...",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)",
  })
  article = { ...route.query }
  console.log(article)
  // console.log(this.article);
  _getArticleContent(article.id)
    .then(res => {
      // contents.value = JSON.parse(res.data[0].content)
      if (res.data.length === 0) {
        contents.value = ["暂无内容"]
      } else {
        contents.value = JSON.parse(res.data[0].content)
      }
      loading.close()
    })
    .catch(err => {
      console.log(err)
      loading.close()
    })
})

// 组件销毁
onUnmounted(() => {
  // 组件被销毁了，不能进行数据传输
  // 解绑事件
  // this.$bus.$off("getArticleContent");
  // console.log("我没了");
})

// 声音audio
const audio = new Audio()
audio.addEventListener("ended", () => {
  isPlayingFlag.value = -1
})

// 句子发音
const sentenceStudio = (sentence, index) => {
  //   console.log(this.audio);
  if (isPlayingFlag.value === index) {
    isPlayingFlag.value = -1
    audio.pause()
    return
  }
  isPlayingFlag.value = index

  audio.src = "https://dict.youdao.com/speech?audio=" + sentence
  audio.play()
}

// 时间戳转换时间
const timestampToTime = timestamp => {
  const date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + "年"
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "月"
  const D = date.getDate() + "日"
  /*       var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds(); */
  return Y + M + D
}
</script>

<style lang="scss" scoped>
#content {
  font-family: "方正兰亭圆简体 Bold", "方正兰亭圆简体", sans-serif;
  width: 15rem;
  position: relative;
  //   background-color: pink;
  .header {
    width: 100%;
    border-bottom: 0.05rem solid #e9e5e5;
    position: relative;
    padding: 0.4rem;
    h5 {
      word-break: break-all;
      font-size: 0.7rem;
    }
    .info {
      word-break: break-all;
      text-indent: 0.5rem;
      font-size: 0.6rem;
      margin: 0.2rem 0 0 0.4rem;
      overflow: hidden;
      clear: both;
    }
    .category {
      float: right;
      margin-bottom: 0.3rem;
      margin-top: 0.1rem;
      font-size: 0.6rem;
      //   width: 1rem;
      padding: 0 0.2rem;
      line-height: 0.8rem;
      border-radius: 0.2rem;
      color: #626161;
      background-color: #efefef;
    }
    .ad {
      display: flex;
      height: 1rem;
      line-height: 1rem;
      margin-top: 0.6rem;
      .date {
        color: #aaaaaa;
        font-size: 0.55rem;
        margin-left: 0.2rem;
      }
      .author {
        color: #646464;
        font-size: 0.6rem;
      }
    }
  }
  .read {
    padding: 0.4rem;
    font-size: 0.6rem;

    color: #4c4a4a;

    .sentence {
      word-break: break-all;
      word-wrap: break-word;
      margin-bottom: 0.3rem;
    }
    .isPlaying {
      color: #25e1ad;
    }
  }
}
</style>
