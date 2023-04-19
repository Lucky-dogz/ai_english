<template>
  <div id="header">
    <div class="top">
      <img class="back" src="@/assets/images/set/arrowLeft.svg" @click="back" />
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "无标题",
  },
})
// 将 `props` 转为一个其中全是 ref 的对象，然后解构
const { title } = toRefs(props)
// `title` 是一个追踪着 `props.title` 的 ref
// console.log(title.value)
// 或者，将 `props` 的单个属性转为一个 ref
// const title = toRef(props, "title")

// 路由返回
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
#header {
  width: 15rem;
  height: 3.8rem;
  background-color: rgba(21, 223, 167, 1);
  color: #ffffff;
  font-family: "方正兰亭圆简体 Bold", "方正兰亭圆简体", sans-serif;
  font-weight: 700;
  font-size: 0.72rem;
  overflow: hidden;
}
.top {
  width: 100%;
  height: 1.5rem;
  // background-color: pink;
  line-height: 1.5rem;
  position: relative;
  margin-top: 2.3rem;
  .back {
    position: absolute;
    left: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.45rem;
    height: 0.65rem;
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
