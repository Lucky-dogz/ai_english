<template>
  <div>
    <div id="like">
      <div id="like_head">
        <span class="remen">猜你喜欢</span>
        <span class="more">更多</span>
        <img src="@/assets/images/find/u123.svg" />
      </div>

      <div v-for="(item, index) in items" id="item" :key="index">
        <img id="left" :src="item.img_url" />
        <div id="right">
          <div class="title">
            <p>{{ item.title }}</p>
            <img class="icon" src="@/assets/images/find/u11.svg" />
          </div>
          <span class="comment">{{ item.comment }}</span>
          <div id="addition">
            <span v-if="item.level === 0" class="level">初级课程</span>
            <span v-if="item.level === 1" class="level">中级课程</span>
            <span v-if="item.level === 2" class="level">高级课程</span>
            <span class="category">{{ item.category }}</span>
            <span class="study_num">{{ item.study_num }}人已学习</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = reactive([
  {
    img_url: new URL("@/assets/images/find/u5.svg", import.meta.url),
    title: "地道使用疑问句",
    comment: "真实交流场景，和AI老外放松交流",
    level: 0,
    category: "日常",
    study_num: 265,
    icon_url: "@/assets/images/find/u11.svg",
  },
  {
    img_url: new URL("@/assets/images/find/u147.svg", import.meta.url),
    title: "描述我的喜好",
    comment: "向森林里的小伙伴介绍自己吧~",
    level: 1,
    category: "生活",
    study_num: 297,
    icon_url: "@/assets/images/find/u11.svg",
  },
  {
    img_url: new URL("@/assets/images/find/u161.svg", import.meta.url),
    title: "健身房里挥洒汗水",
    comment: "如何向他人展现你的魅力",
    level: 2,
    category: "健身",
    study_num: 473,
    icon_url: "@/assets/images/find/u11.svg",
  },
])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#like {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 14rem;
  width: 100%;
  // height: 17rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  -moz-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.34);
  font-size: 0.6rem;
  #like_head {
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem 0.6rem 0.2rem;
    padding-right: 0.4rem;
    position: relative;
    .remen {
      margin-left: 0.1rem;
    }
    .more {
      color: #aaaaaa;
      font-family: "方正兰亭圆简体", sans-serif;
    }
    img {
      position: absolute;
      right: 0;
      width: 0.25rem;
      height: 0.4rem;
    }
  }
}
#item {
  width: 100%;
  height: 4.4rem;
  // background-color: pink;
  margin: 0.4rem 0;
  display: flex;
  // justify-content: space-between;
  #left {
    width: 3rem;
    margin-left: 0.4rem;
  }
  #right {
    margin-top: 0.15rem;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    .title {
      position: relative;
      display: flex;
      font-size: 0.65rem;
      p {
        display: inline-block;
      }
      .icon {
        margin-left: 0.4rem;
        width: 0.85rem;
      }
    }
    .comment {
      height: 2rem;
      // background-color: blue;
      margin: 0.4rem 0;
      font-size: 0.55rem;
      color: #aaaaaa;
      font-family: "方正兰亭圆简体", sans-serif;
    }
    #addition {
      font-size: 0.55rem;
      color: #aaaaaa;
      .level {
        color: #825743;
      }
      .category {
        margin: 0 0.45rem;
        font-family: "方正兰亭圆简体", sans-serif;
      }
      .study_num {
        font-family: "方正兰亭圆简体", sans-serif;
      }
    }
  }
}
</style>
