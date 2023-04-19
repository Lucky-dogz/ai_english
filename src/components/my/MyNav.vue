<template>
  <div id="MyNav">
    <ul id="nav-box">
      <li v-for="navItem in navLists" :key="navItem.nav_name" class="nav-item">
        <span
          class="item-left"
          @click="navJump(navItem.linkName, navItem.nav_id)"
        >
          <img :src="navItem.nav_icon" class="nav-icon" />
          <p class="nav-name">{{ navItem.nav_name }}</p>
        </span>

        <span
          class="item-right"
          @click="navJump(navItem.linkName, navItem.nav_id)"
        >
          <p v-show="navItem.hasNewInfo" class="red-point"></p>
          <img src="@/assets/images/my/rightArrow.svg" class="inter" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 导航栏列表
const navLists = ref([
  {
    nav_id: 0,
    nav_name: "收藏夹",
    nav_icon: new URL("@/assets/images/my/collect.svg", import.meta.url),
    hasNewInfo: true,
    linkName: "collect",
  },
  {
    nav_id: 1,
    nav_name: "订单中心",
    nav_icon: new URL("@/assets/images/my/order.svg", import.meta.url),
    hasNewInfo: false,
    linkName: "order",
  },
  {
    nav_id: 2,
    nav_name: "设置",
    nav_icon: new URL("@/assets/images/my/set.svg", import.meta.url),

    hasNewInfo: false,
    linkName: "setting",
  },
  {
    nav_id: 3,
    nav_name: "学习周报",
    nav_icon: new URL("@/assets/images/my/week.svg", import.meta.url),
    hasNewInfo: true,
    linkName: "weekreport",
  },
  {
    nav_id: 4,
    nav_name: "客服中心",
    nav_icon: new URL("@/assets/images/my/kefu.svg", import.meta.url),
    hasNewInfo: false,
    linkName: "customer",
  },
])

const router = useRouter()
const navJump = (navName, id) => {
  // eslint-disable-next-line array-callback-return
  navLists.map(item => {
    if (id === item.nav_id && item.hasNewInfo === true) {
      // console.log(item.hasNewInfo)
      item.hasNewInfo = false
      return item
    }
  })
  router.push({
    name: navName,
  })
}
</script>

<style lang="scss" scoped>
#MyNav {
  width: 14rem;
  height: 9rem;
  // background-color: pink;
  margin: 1rem auto 0;
  font-family: "方正兰亭圆简体", sans-serif;
  color: #333333;
  font-size: 0.6rem;
  letter-spacing: 0.5px;
}
#nav-box {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  // background-color: aqua;
  overflow: hidden;
  .nav-item {
    width: 100%;
    height: 1.4rem;
    // background-color: antiquewhite;
    margin: 0.3rem 0;
    display: flex;
    justify-content: space-between;
    line-height: 1.4rem;

    .item-left {
      width: 5rem;
      //   background-color: aliceblue;
      display: flex;
      align-items: center;
      .nav-icon {
        width: 0.78rem;
        height: 0.74rem;
        display: inline-block;
      }
      .nav-name {
        display: inline-block;
        margin-left: 0.4rem;
        margin-top: 0.1rem;
      }
    }
    .item-right {
      width: 1rem;
      display: flex;
      position: relative;
      align-items: center;
      .red-point {
        position: absolute;
        left: 0;
        width: 0.25rem;
        height: 0.25rem;
        border-radius: 0.25rem;
        background-color: red;
      }
      .inter {
        position: absolute;
        right: 0;
        width: 0.4rem;
        height: 0.5rem;
      }
    }
  }
}
</style>
