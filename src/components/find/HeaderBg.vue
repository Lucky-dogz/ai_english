<template>
  <div>
    <div class="container">
      <form action="" class="parent">
        <input type="text" class="search" placeholder="2022 英语六级真题" />
        <img class="btn" src="@/assets/images/find/search_u25.svg" />
      </form>
    </div>
    <!-- <span class="avator" @click="changeToMy"></span> -->
    <!-- 头部背景图 -->
    <div id="u20" class="ax_default box_2">
      <div id="u20_div"></div>
      <img
        id="u134_img"
        class="img"
        src="@/assets/images/find/图层_1_u134.png"
      />
      <div id="u26" class="ax_default box_1">
        <p>探寻动物之森的宝藏</p>
      </div>
      <div class="bg_font">
        <span class="right">千万个口语小技巧</span>
        <span class="left">助你轻松高效学习</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 去我的
/* const router = useRouter()
const changeToMy = () => {
  router.push({
    name: "my",
  })
} */
</script>

<style lang="scss" scoped>
.avator {
  display: inline-block;
  float: left;
  margin-left: 12.2rem;
  margin-top: 0.7rem;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1.5rem;
  background-image: url("@/assets/images/my/avator.jpg");
  background-size: contain;
  opacity: 0.9;
}
// 搜索框
.container {
  position: absolute;
  width: 8rem;
  left: 0.5rem;
  top: 1rem;
  form {
    position: relative;
  }
  .search {
    font-size: 0.5rem;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border-radius: 0.7rem;
    outline: none;
    border: 0;
    opacity: 0.8;
    padding-left: 0.6rem;
  }
  .btn {
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    top: 0.6rem;
    right: 0.4rem;
    cursor: pointer;
  }
}

// 背景
#u20 {
  #u20_div {
    width: 15rem;
    height: 8rem;
    background-image: url("@/assets/images/find/u20_div.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  #u134_img {
    position: absolute;
    left: 1.5rem;
    top: 3.5rem;
    width: 5rem;
    height: 4rem;
  }
  #u26 {
    position: absolute;
    left: 7rem;
    top: 3.5rem;
    width: 7rem;
    height: 1rem;
    background-color: rgba(255, 111, 27, 1);
    border: none;
    border-radius: 0.8rem;
    box-shadow: none;
    font-family: "方正兰亭圆简体", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.866666666666667);
    p {
    }
  }
  .bg_font {
    position: absolute;
    left: 8rem;
    top: 5rem;
    width: 6rem;
    display: flex;
    flex-direction: column;
    font-family: "方正兰亭圆简体_中粗", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.996078431372549);
    .right {
      position: absolute;
      left: 0.8rem;
      top: 0;
    }
    .left {
      position: absolute;
      left: 0;
      top: 1rem;
      font-family: "方正兰亭圆简体", sans-serif;
      font-size: 0.55rem;
    }
  }
}
</style>
