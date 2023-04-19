<template>
  <div id="MyLevel" ref="MyLevel">
    <CAT />
    <div id="level_content">
      <div id="header">
        <h5>我的英语水平</h5>
        <img
          class="fold"
          :class="triangle"
          src="@/assets/images/my/u185.svg"
          @click="changeBox(boxshow)"
        />
      </div>
      <div id="level_desc">
        <div>
          <span class="level">Lv.3</span>
          <p>|</p>
          <span span class="level_info">初级，讨论更多生活话题</span>
        </div>
        <img class="level_what" src="@/assets/images/my/what.svg" />
      </div>
      <div id="level_box" :class="foldClass">
        <div class="chart-box">
          <span class="chart_1">听力</span>
          <span class="chart_2">发音</span>
          <span class="chart_3">语法</span>
          <span class="chart_4">口语</span>
          <span class="chart_5">词汇</span>

          <div class="charts"></div>
        </div>
        <img src="@/assets/images/my/level.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 控制图表展开
let foldClass = ref("level_box_open")
// 控制小三角
let triangle = ref("")
const boxshow = ref(true)

// 控制展开或折叠
const changeBox = boxshow => {
  if (boxshow) {
    foldBox()
  } else {
    openBox()
  }
  boxshow = !boxshow
}
// 声明MyLevel组件的引用
const MyLevel = ref(null)
// 折叠
const foldBox = () => {
  // console.log("折叠");
  foldClass = "level_box_fold"
  triangle = "ani-fold"
  setTimeout(() => {
    MyLevel.style.height = "3.3rem"
  }, 250)
}
// 展开
const openBox = () => {
  // console.log("展开");
  foldClass = "level_box_open"
  triangle = "ani-open"
  setTimeout(() => {
    MyLevel.style.height = "14rem"
  }, 150)
}
</script>

<style lang="scss" scoped>
#MyLevel {
  width: 14rem;
  height: 14rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  font-family: "方正兰亭圆简体", sans-serif;
  background-color: pink;
  margin-left: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  -moz-box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.06rem 0.1rem rgba(0, 0, 0, 0.1),
    0 -0.01rem 0.1rem rgba(0, 0, 0, 0.05);
}
#level_content {
  width: 13.5rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  #header {
    width: 100%;
    height: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: space-between;
    // background-color: antiquewhite;
    font-size: 0.75rem;
    align-items: center;
    padding: 0 0.3rem;
    margin-top: 0.3rem;
    .fold {
      width: 0.6rem;
      height: 0.35rem;
    }
    .ani-fold {
      animation: foldTriangle 1s 1;
      animation-fill-mode: forwards;
    }
    .ani-open {
      animation: openTriangle 1s 1;
      animation-fill-mode: forwards;
    }
    // 折叠动画
    @keyframes foldTriangle {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }
    @keyframes openTriangle {
      0% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  #level_desc {
    width: 100%;
    height: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    align-items: center;
    padding: 0 0.18rem 0 0.3rem;
    margin-top: -0.2rem;
    div {
      display: flex;
      position: relative;
      .level {
        font-family: "方正兰亭圆简体_中粗 Bold", "方正兰亭圆简体_中粗 Regular",
          "方正兰亭圆简体_中粗", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 0.9rem;
        color: #000000;
        z-index: 999;
      }
      .level::before {
        content: "";
        position: absolute;
        left: 0rem;
        top: 0.55rem;
        width: 1.85rem;
        height: 0.6rem;
        background-color: #e7f9f3;
        z-index: -1;
      }
      p {
        font-size: 0.6rem;
        color: #7f7f7f;
        margin: 0 0.4rem;
      }
      .level_info {
        position: relative;
        bottom: -0.1rem;
        font-size: 0.5rem;
        color: #7f7f7f;
      }
    }
    .level_what {
      width: 0.8rem;
    }
  }
  #level_box {
    width: 13rem;
    height: 12rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    img {
      width: 2.8rem;
      height: 1.7rem;
      position: absolute;
      right: 0.2rem;
      top: 0.8rem;
    }
    .chart-box {
      span {
        position: absolute;
        font-size: 0.65rem;
        font-family: "方正兰亭圆简体_中粗", sans-serif;
      }
      .charts {
        width: 7rem;
        height: 7rem;
        position: absolute;
        left: 50%;
        top: 48.5%;
        transform: translate(-50%, -50%);
        background-color: #f4a144;
        background: url("@/assets/images/my/charts.png") no-repeat;
        background-size: contain;
      }
      .chart_1 {
        left: 50%;
        top: 1.2rem;
        color: #f4a144;
        transform: translateX(-50%);
      }
      .chart_2 {
        left: 1.2rem;
        top: 46%;
        transform: translateY(-50%);
      }
      .chart_3 {
        left: 10.2rem;
        top: 46%;
        transform: translateY(-50%);
      }
      .chart_4 {
        left: 3.4rem;
        top: 9rem;
        color: #f4a144;
      }
      .chart_5 {
        left: 8.6rem;
        top: 9rem;
        color: #f4a144;
      }
    }
  }

  // 折叠动画
  .level_box_fold {
    animation: foldbox 1s 1;
    transform-origin: top;
  }
  @keyframes foldbox {
    40% {
      transform: scaleY(0);
    }
  }
  // 展开动画
  .level_box_open {
    animation: openbox 1s 1;
    transform-origin: top;
  }
  @keyframes openbox {
    30% {
      transform: scaleY(1.05);
    }
  }
}
</style>
