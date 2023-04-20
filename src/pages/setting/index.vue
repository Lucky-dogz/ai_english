<template>
  <div id="setting">
    <Header :title="title"></Header>
    <div id="setLists">
      <!-- 猫爪 -->
      <div id="cat-paw">
        <img src="@/assets/images/set/jio1.svg" />
        <img src="@/assets/images/set/jio2.svg" />
        <img src="@/assets/images/set/jio3.svg" />
        <img src="@/assets/images/set/jio4.svg" />
        <img src="@/assets/images/set/jio5.svg" />
      </div>
      <!-- 上半 -->
      <ul class="up-half">
        <li>
          <span class="set-name">账号管理</span>
          <img class="set-icon avator" src="@/assets/images/my/avator.jpg" />
        </li>
        <li>
          <span class="set-name">账号安全</span>
          <img
            class="set-icon arrow"
            src="@/assets/images/set/arrowRight.svg"
          />
        </li>
        <li>
          <span class="set-name">推送通知</span>
          <div class="push-notify" :class="notifyButton" @click="pushButton">
            <span></span>
          </div>
        </li>
        <li>
          <span class="set-name">多语言</span>
          <img
            class="set-icon arrow"
            src="@/assets/images/set/arrowRight.svg"
          />
        </li>
      </ul>
      <!-- 下半 -->
      <ul class="down-half">
        <li>
          <span class="set-name">隐私</span>
          <img
            class="set-icon arrow"
            src="@/assets/images/set/arrowRight.svg"
          />
        </li>
        <li>
          <span class="set-name">通用</span>
          <img
            class="set-icon arrow"
            src="@/assets/images/set/arrowRight.svg"
          />
        </li>
        <li>
          <span class="set-name">辅助功能</span>
          <img
            class="set-icon arrow"
            src="@/assets/images/set/arrowRight.svg"
          />
        </li>
        <li>
          <span class="set-name">清除缓存</span>
          <p class="set-icon cache">17kb</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref("设置")
const isPush = ref(false)
const notifyButton = ref("")

const pushButton = () => {
  if (!isPush.value) {
    notifyButton.value = "close"
  } else {
    notifyButton.value = "open"
  }
  isPush.value = !isPush.value
}
</script>

<style lang="scss" scoped>
#setting {
  background-color: rgba(249, 249, 249, 1);
  font-family: "方正兰亭圆简体", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.6rem;
  color: #333;
}
#setLists {
  width: 15rem;
  height: 22rem;
  margin-top: 1rem;
  position: relative;
  z-index: 99;

  .down-half {
    margin-top: 1rem;
  }
  ul {
    background-color: #fff;
    // border-top: none;
    li {
      height: 2.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.08rem solid #f2f2f2;
      padding: 0 1rem 0 0.5rem;
    }
  }
  .avator {
    border-radius: 1rem;
    position: relative;
    right: -0.3rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .push-notify {
    position: relative;
    right: -0.3rem;
    width: 1.5rem;
    height: 0.8rem;
    border-radius: 1rem;
    border: 0rem solid #aaaaaa;
    background-color: #4cd864;
    -moz-box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.06rem 0.1rem rgba(0, 0, 0, 0.1),
      0 -0.01rem 0.1rem rgba(0, 0, 0, 0.05);
    span {
      position: absolute;
      right: 0.015rem;
      top: 0.036rem;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 0.7rem;
      background-color: #fff;
    }
  }
  .open {
    animation: open 1s 1;
    animation-fill-mode: forwards;
    span {
      animation: rightscroll 0.5s 1;
      animation-fill-mode: forwards;
    }
    @keyframes rightscroll {
      0% {
        right: 0.8rem;
      }
      100% {
        right: 0.015rem;
      }
    }
  }
  @keyframes open {
    100% {
      background-color: #4cd864;
    }
  }
  .close {
    animation: close 1s 1;
    animation-fill-mode: forwards;
    span {
      animation: lefscroll 0.5s 1;
      animation-fill-mode: forwards;
    }
    @keyframes lefscroll {
      100% {
        right: 0.8rem;
        -moz-box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.2);
        box-shadow: 0 0.06rem 0.1rem rgba(0, 0, 0, 0.2),
          0 -0.01rem 0.1rem rgba(0, 0, 0, 0.1);
      }
    }
  }
  @keyframes close {
    100% {
      background-color: #fff;
    }
  }

  .arrow {
    width: 0.46rem;
    height: 0.62rem;
  }
  .cache {
    letter-spacing: 0.5px;
    color: #aaaaaa;
  }
  #cat-paw {
    opacity: 0.5;
    position: absolute;
    left: 3.8rem;
    top: 8.25rem;
    width: 2rem;
    height: 2rem;
    z-index: -1;
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
}
</style>
