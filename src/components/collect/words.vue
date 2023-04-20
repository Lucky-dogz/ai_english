<template>
  <div id="words_box">
    <!-- 猫爪 -->
    <div id="cat-paw">
      <img src="@/assets/images/set/jio1.svg" />
      <img src="@/assets/images/set/jio2.svg" />
      <img src="@/assets/images/set/jio3.svg" />
      <img src="@/assets/images/set/jio4.svg" />
      <img src="@/assets/images/set/jio5.svg" />
    </div>
    <div class="header">
      <p>单词数: {{ words_num }}</p>
      <div class="buttons">
        <button
          :class="{ buttonHighLight: buttonNow == 0 }"
          @click="study(buttonNow)"
        >
          学习
        </button>
        <button
          :class="{ buttonHighLight: buttonNow == 1 }"
          @click="orderReverseByDate(buttonNow)"
        >
          时间倒叙
        </button>
        <button
          :class="{ buttonHighLight: buttonNow == 2 }"
          @click="edit(buttonNow)"
        >
          编辑
        </button>
      </div>
    </div>
    <div class="main">
      <ul v-for="item in collect_words" :key="item.time" class="wordsBox">
        <p class="dateTime">{{ timestampToTime(item.time) }}</p>
        <li v-for="(word, index) in item.wordLists" :key="index">
          <p>{{ word.en }}</p>
          <span class="tran" @click="clickWords(word.en)"
            >{{ word.tran }}
            <p
              class="mask"
              :class="
                mask_flag[word.en] == word.en ? mask_animation[word.en] : ''
              "
            ></p>
          </span>
          <img
            src="@/assets/images/collect/volumn.svg"
            class="volumn"
            :class="{ isPlaying: isPlayingFlag === index }"
            @click="playVoice(word.en, index)"
          />
        </li>
      </ul>
    </div>
    <audio></audio>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "../../store/user"
import { storeToRefs } from "pinia"

const user = userStore()
// 获取收藏单词
const { collect_words } = storeToRefs(user)
const { collect_words_length: words_num } = storeToRefs(user)

// 遮罩层动画名称
const mask_animation = reactive({})
const mask_flag = reactive({})
// 是否播放
const isPlayingFlag = ref(-1)
// 当前按钮
const buttonNow = ref(0)

// 发音初始化
const audio = new Audio()
onMounted(() => {
  audio.addEventListener("ended", () => {
    isPlayingFlag.value = -1
  })
})
// 学习按钮
const study = now => {
  buttonNow.value = 0
  if (buttonNow.value == now) return
  collect_words.value.reverse()
}
// 单词时间倒叙
const orderReverseByDate = now => {
  buttonNow.value = 1
  if (buttonNow.value == now) return
  collect_words.value.reverse()
}
// 编辑按钮
const edit = now => {
  buttonNow.value = 2
  if (buttonNow.value == now) return
  console.log("edit")
}
// 点击发音
const playVoice = (word, index) => {
  // console.log(audio);
  audio.src = "https://dict.youdao.com/speech?audio=" + word
  audio.play()
  isPlayingFlag.value = index
}
// 点击遮罩
const clickWords = word => {
  mask_flag[word] = word
  if (mask_animation[word] == undefined || mask_animation[word] == "appear") {
    mask_animation[word] = "disappear"
  } else {
    mask_animation[word] = "appear"
  }
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
#words_box {
  position: relative;
  background-color: #f8f8f8;
  // height: 20rem;
  font-family: "方正兰亭圆简体", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.5rem;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  color: #aaa;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.8rem;
  div {
    button {
      border: none;
      margin: 0 0.2rem;
      padding: 0.05rem 0.3rem;
      color: #626161;
      // background-color: pink;
    }
    .buttonHighLight {
      background-color: #ccf3e9;
      color: #25e1ad;
    }
  }
}
.main {
  z-index: 99;
  background-color: #f8f8f8;
  .wordsBox {
    margin-top: 1.5rem;
    padding: 0 0.8rem;
    position: relative;
    background-color: #fff;
    .dateTime {
      position: absolute;
      top: -1.2rem;
    }
    li {
      display: flex;
      height: 1.5rem;
      justify-content: space-between;
      align-items: center;
      // background-color: aqua;
      border-bottom: 0.06rem solid #d7d7d7;
      .mask {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 1rem;
        background-color: #f2f2f2;
      }
      .disappear {
        animation: disappear 1.2s 1;
        animation-fill-mode: forwards;
      }
      .appear {
        animation: appear 1.2s 1;
        animation-fill-mode: forwards;
      }
      p {
        font-size: 0.6rem;
        color: #333333;
        font-family: "方正兰亭圆简体_中粗", sans-serif;
      }
      span {
        padding-left: 0.3rem;
        font-size: 0.52rem;
        width: 8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        // animation: var(--animation) 1.75s 1;
      }
      @keyframes disappear {
        100% {
          opacity: 0;
        }
      }
      @keyframes appear {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      img {
        // margin-top: 0.2rem;
        width: 0.8rem;
        height: 0.7rem;
      }
      .isPlaying {
        animation: playing 1s 2;
      }
      @keyframes playing {
        50% {
          transform: scale(1.2);
        }
      }
    }
  }
  /* .wordsBox:nth-child(2) {
    background-color: #25e1ad;
  } */
}
#cat-paw {
  opacity: 0.5;
  position: absolute;
  left: 8rem;
  top: 1.2rem;
  width: 2rem;
  height: 2rem;
  z-index: 0;
  // background-color: pink;
  transform: scale(1.05);
  img:nth-child(1) {
    position: absolute;
    left: 0rem;
    top: 1rem;
    transform: rotate(-25deg);
  }
  img:nth-child(2) {
    position: absolute;
    left: 0.2rem;
    top: 0.5rem;
    transform: rotate(-25deg);
  }
  img:nth-child(3) {
    position: absolute;
    left: 0.6rem;
    top: 0.3rem;
    transform: rotate(-35deg);
  }
  img:nth-child(4) {
    position: absolute;
    left: 1.3rem;
    top: 0.3rem;
    transform: rotate(-25deg);
  }
  img:nth-child(5) {
    position: absolute;
    left: 0.44rem;
    top: 1rem;
    transform: rotate(-35deg);
  }
}
</style>
