<template>
  <!-- 顶部绿幕 -->
  <div id="top">
    <div v-if="category == 0" id="my_top">
      <span class="title">{{ from }}</span>
      <span class="icon">
        <img id="u22_img" class="img" src="@/assets/images/my/u22.svg" />
        <img id="u23_img" class="img" src="@/assets/images/my/u23.svg" />
        <img id="u24_img" class="img" src="@/assets/images/my/u24.svg" />
      </span>
    </div>
    <div v-if="category == 1">456</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  from: {
    type: String,
    default: "",
  },
  category: {
    type: Number,
    default: 0,
  },
})
const { from, category } = toRefs(props)
</script>

<style lang="scss" scoped>
#top {
  width: 15rem;
  height: 5rem;
  background-image: linear-gradient(#16dfa8, #6fecc9);
  color: #ffffff;
  font-family: "方正兰亭圆简体 Bold", "方正兰亭圆简体", sans-serif;
  font-weight: 700;
}
#my_top {
  width: 15rem;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  top: 2.3rem;
  padding: 0 0.6rem;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 0.75rem;
  }
  .icon {
    position: relative;
    width: 1rem;
    height: 1rem;
    #u22_img {
      position: absolute;
      width: 0.8rem;
      height: 0.75rem;
    }
    #u23_img {
      position: absolute;
      left: 0.28rem;
      top: 0.8rem;
      width: 0.25rem;
    }
    #u24_img {
      position: absolute;
      right: 0.2rem;
      width: 0.3rem;
    }
  }
}
</style>
