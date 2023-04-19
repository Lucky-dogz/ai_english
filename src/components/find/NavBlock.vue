<template>
  <div>
    <!-- 导航栏 -->
    <div id="u36_div">
      <li>
        <div class="icon">
          <img id="u44_img" class="img" src="@/assets/images/find/u44.svg" />
          <img id="u45_img" class="img" src="@/assets/images/find/u45.svg" />
          <img id="u43_img" class="img" src="@/assets/images/find/u43.svg" />
          <img id="u69_img" class="img" src="@/assets/images/find/u69.svg" />
        </div>
        <span>动物之森</span>
      </li>
      <li @click="navJump('voicerec')">
        <div class="icon">
          <img id="u71_img" class="img" src="@/assets/images/find/u71.svg" />
          <img id="u72_img" class="img" src="@/assets/images/find/u72.svg" />
        </div>
        <span>听力</span>
      </li>
      <li>
        <div class="icon">
          <img id="u40_img" class="img" src="@/assets/images/find/u40.svg" />
        </div>
        <span>口语练习</span>
      </li>
      <li @click="navJump('article')">
        <div class="icon">
          <img id="u82_img" class="img" src="@/assets/images/find/u82.svg" />
          <img id="u80_img" class="img" src="@/assets/images/find/u80.svg" />
          <img id="u78_img" class="img" src="@/assets/images/find/u78.svg" />
        </div>
        <span>点读</span>
      </li>
      <li>
        <div class="icon">
          <img
            id="u93_img"
            class="img"
            src="@/assets/images/find/baoxiang.png"
          />
        </div>
        <span>寻宝</span>
      </li>
      <li>
        <div class="icon">
          <img id="u110_img" class="img" src="@/assets/images/find/u110.svg" />
          <img id="u111_img" class="img" src="@/assets/images/find/u111.svg" />
          <img id="u112_img" class="img" src="@/assets/images/find/u112.svg" />
          <img id="u113_img" class="img" src="@/assets/images/find/u113.svg" />
        </div>
        <span>兑换商场</span>
      </li>
      <li>
        <div class="icon">
          <img id="u101_img" class="img" src="@/assets/images/find/u101.svg" />
          <img id="u102_img" class="img" src="@/assets/images/find/u102.svg" />
          <img id="u103_img" class="img" src="@/assets/images/find/u103.svg" />
          <img id="u104_img" class="img" src="@/assets/images/find/u104.svg" />
          <img id="u106_img" class="img" src="@/assets/images/find/u106.svg" />
        </div>
        <span>休闲娱乐</span>
      </li>
      <li>
        <div class="icon">
          <img id="u116_img" class="img" src="@/assets/images/find/u116.svg" />
          <img id="u117_img" class="img" src="@/assets/images/find/u117.svg" />
          <img id="u118_img" class="img" src="@/assets/images/find/u118.svg" />
          <img id="u119_img" class="img" src="@/assets/images/find/u119.svg" />
          <img id="u120_img" class="img" src="@/assets/images/find/u120.svg" />
        </div>
        <span>热门课程</span>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
/* const props = defineProps({
  msg: {
    type: String,
    default: "",
  },
})
const { msg } = toRef(props, "msg") */
const router = useRouter()
const navJump = navName => {
  router.push({
    name: navName,
  })
}
</script>

<style lang="scss" scoped>
#u36_div {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  top: -0.1rem;
  width: 100%;
  height: 6rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  -moz-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.34);
}

li {
  position: relative;
  width: 3rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem 0.05rem;
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.4rem;
    // 动物之森
    #u43_img {
      width: 0.5rem;
      height: 1rem;
    }

    #u44_img {
      width: 0.3rem;
      height: 0.6rem;
    }

    #u45_img {
      width: 0.3rem;
      height: 0.5rem;
    }

    #u69_img {
      position: absolute;
      left: 1.7rem;
      top: 0.2rem;
      width: 0.9rem;
      height: 0.8rem;
    }

    // 听力
    #u71_img {
      width: 1.1rem;
      height: 1rem;
    }

    #u72_img {
      position: absolute;
      left: 1.7rem;
      top: 0.4rem;
      width: 0.7rem;
      height: 0.7rem;
      opacity: 0.24;
    }
    // 口语练习
    #u40_img {
      width: 1rem;
      height: 1rem;
    }
    // 论坛
    #u80_img {
      width: 0.8rem;
      height: 0.7rem;
    }

    #u82_img {
      position: absolute;
      left: 1.2rem;
      top: 0.55rem;
      width: 0.55rem;
      height: 0.2rem;
    }

    #u78_img {
      position: absolute;
      left: 1.5rem;
      top: 0.6rem;
      width: 0.7rem;
      height: 0.55rem;
    }
    // 寻宝
    #u93_img {
      width: 1rem;
      height: 1rem;
    }

    // 兑换商场
    #u110_img {
      position: absolute;
      left: 1rem;
      top: 0.4rem;
      width: 1rem;
      height: 0.7rem;
    }

    #u111_img {
      position: absolute;
      left: 1rem;
      top: 3px;
      width: 1rem;
      height: 0.6rem;
    }
    #u112_img {
      position: absolute;
      left: 1rem;
      top: 0.1rem;
      width: 1rem;
      height: 0.5rem;
    }
    #u113_img {
      position: absolute;
      left: 1.2rem;
      top: 0.3rem;
      width: 0.8rem;
      height: 0.18rem;
    }
    // 休闲娱乐
    #u101_img {
      position: absolute;
      left: 1rem;
      top: 0.4rem;
      width: 1rem;
      height: 0.7rem;
    }
    #u102_img {
      position: absolute;
      left: 1rem;
      top: 0.4rem;
      width: 1rem;
      height: 0.7rem;
    }

    #u103_img {
      position: absolute;
      left: 1.2rem;
      top: 0.1rem;
      width: 0.4rem;
      height: 0.4rem;
    }

    #u104_img {
      position: absolute;
      left: 1.1rem;
      top: 0.7rem;
      width: 0.5rem;
      height: 0.1rem;
    }

    #u106_img {
      position: absolute;
      left: 1.5rem;
      top: 0.5rem;
      width: 0.4rem;
      height: 0.4rem;
    }
    // 热门课程

    #u116_img {
      position: absolute;
      left: 1rem;
      top: 0.3rem;
      width: 1rem;
      height: 1rem;
    }

    #u117_img {
      position: absolute;
      left: 1.7rem;
      top: 0.2rem;
      width: 0.5rem;
      height: 0.7rem;
    }

    #u118_img {
      position: absolute;
      left: 1rem;
      top: 0.2rem;
      width: 1rem;
      height: 0.8rem;
    }

    #u119_img {
      position: absolute;
      left: 1rem;
      top: 0.3rem;
      width: 1rem;
      height: 0.8rem;
    }
    #u120_img {
      position: absolute;
      left: 1rem;
      top: 0.1rem;
      width: 0.85rem;
      height: 0.8rem;
    }
  }
  span {
    font-size: 0.6rem;
  }
}
</style>
