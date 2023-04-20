<template>
  <div>
    <div id="info">
      <!-- 小鹿 -->
      <div class="detail">
        <!-- 基本信息 -->
        <div class="user">
          <div class="user_top">
            <p class="user_name">{{ userData.user_name }}</p>

            <span v-if="userData.sex === 1" class="user_sex">
              <img src="@/assets/images/my/man.svg" />
            </span>

            <span v-if="userData.sex === 0" class="user_sex">
              <img src="@/assets/images/my/women.svg" />
            </span>

            <img
              v-if="userData.isVIP"
              class="vipIcon"
              src="@/assets/images/my/VIP.svg"
            />
            <img
              v-if="!userData.isVIP"
              class="vipIcon"
              src="@/assets/images/my/noVIP.svg"
            />
          </div>
          <div class="user_bot">
            <p class="user_num">动物号: {{ userData.user_num }}</p>
            <p
              class="copyNum"
              :data-clipboard-text="userData.user_num"
              @click="copy"
            >
              复制
            </p>
          </div>
        </div>
        <!-- 学习概况 -->
        <div class="study_overview">
          <ul class="items">
            <li v-for="(item, index) in userData.study_overview" :key="index">
              <h5>{{ item.project }}</h5>
              <p>{{ item.number }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="user_head">
        <span class="avator"></span>
        <span class="edit"> 编辑个人资料 </span>
        <!-- 限时领取 -->
      </div>
    </div>
    <img class="timeout" src="@/assets/images/my/timeout.png" />
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import Clipboard from "clipboard"
import { userStore } from "@/store/user"
import { storeToRefs } from "pinia"

const user = userStore()
// 用户数据、是否在安卓上
const { userInfo: userData, hasAndroid } = storeToRefs(user)

// 挂载
onMounted(() => {
  user.loadUserData("20232005191")
})

// 复制账号
const copy = () => {
  const clipboard = new Clipboard(".copyNum")
  clipboard.on("success", e => {
    if (!hasAndroid.value) {
      ElMessage({
        showClose: true,
        message: "复制成功",
        type: "success",
        center: true,
        duration: 1000,
      })
    } else {
      // eslint-disable-next-line no-undef
      $Android.showToast("复制成功")
    }
    // 释放内存
    clipboard.destroy()
  })
  clipboard.on("error", e => {
    if (!hasAndroid.value) {
      ElMessage({
        showClose: true,
        message: "复制失败",
        type: "warning",
        center: true,
        duration: 1000,
      })
    } else {
      // eslint-disable-next-line no-undef
      $Android.showToast("复制失败")
    }
    // 释放内存
    clipboard.destroy()
  })
}
</script>

<style lang="scss" scoped>
#info {
  width: 15rem;
  height: 5.5rem;
  background-color: #ffffff;
  border-radius: 0.5rem 0.5rem 0 0;
  font-family: "方正兰亭圆简体", sans-serif;
  position: relative;
  top: -1.5rem;
  display: flex;
  // box-shadow: 0 0.01rem rgba(0, 0, 0, 0.3);
}
#info::before {
  content: "";
  background-image: url("@/assets/images/my/u54.svg");
  width: 1rem;
  height: 1rem;
  background-size: contain;
  position: absolute;
  top: -1rem;
  left: 10rem;
}
.timeout {
  margin-left: 0.5rem;
  width: 14rem;
  height: 2.2rem;
}
.detail {
  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.6rem;
  .user {
    height: 3rem;
    padding: 0.5rem 0 0 0.5rem;
    .user_top {
      display: flex;
      align-items: center;
      height: 1.15rem;
      line-height: 1.15rem;

      .user_name {
        font-family: "方正兰亭圆简体_中粗";
        padding-top: 0.1rem;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
      }
      .user_sex {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 1rem;
        background-color: #4db6f5;
        margin: 0 0.25rem;
        position: relative;
        img {
          width: 0.5rem;
          height: 0.5rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .vipIcon {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .user_bot {
      display: flex;
      margin-top: 0.2rem;
      font-size: 0.5rem;
      .user_num {
        color: #adadb2;
      }
      .copyNum {
        color: #58e8c0;
        margin-left: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
        background-color: #fff;
      }
    }
  }
  .study_overview {
    height: 2rem;
    width: 8.5rem;
    text-align: center;
    .items {
      display: flex;
      padding: 0 0.35rem;
      justify-content: space-between;
      color: #7f7f7f;
      h5 {
        font-weight: 400;
      }
    }
  }
}
.user_head {
  flex: 1;
  position: relative;

  .avator {
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2rem;
    border-radius: 1.5rem;
    background-image: url("@/assets/images/my/avator.jpg");
    background-size: contain;
    cursor: pointer;
  }
  .edit {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 0.65rem;
    border-radius: 1.5rem;
    color: #fff;
    font-family: "方正兰亭圆简体_中粗", sans-serif;
    font-size: 0.36rem;
    background-color: #31ddad;
    line-height: 0.7rem;
    text-align: center;
    box-shadow: 0px 0.01rem 0.1rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}
</style>
