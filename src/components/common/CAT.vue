<template>
  <div class="container">
    <div class="cat">
      <div class="ear"></div>
      <div class="eye"></div>
      <div class="mouth"></div>
      <div class="nose"></div>
      <div class="tail"></div>
      <div class="body"></div>
      <div class="bubble"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const router = useRouter()
/* const changeToFind = () => {
  router.push({
    name: "find",
  })
} */
</script>

<style lang="scss" scoped>
$color: #f7ae40;
.container {
  position: relative;
  left: 7.2rem;
  top: -3.5rem;
}
.cat {
  background-color: @color;
  height: 0.99rem;
  width: 1.4rem;
  border-radius: 0 1.6rem 1.6rem 0;
  position: absolute;
  left: 2rem;
  right: 2rem;
}
.ear {
  height: 0.5rem;
  width: 0.42rem;
  background-color: @color;
  position: absolute;
  bottom: 0.9rem;
  left: 0.02rem;
  border-radius: 1rem 0 0 0;
  box-shadow: 0.7rem 0 @color;
}
.eye,
.eye:before {
  height: 0.15rem;
  width: 0.25rem;
  border: 0.06rem solid #2c2c2c;
  position: absolute;
  border-radius: 0 0 0.4rem 0.4rem;
  border-top: none;
}
.eye {
  top: 0.2rem;
  left: 0.2rem;
}
.eye:before {
  content: "";
  left: 0.6rem;
}
.nose {
  background-color: #ffffff;
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 50%;
  position: absolute;
  top: 0.47rem;
  left: 0.48rem;
  box-shadow: 0.2rem 0 #ffffff;
}
.nose:after {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border-top: 0.1rem solid #d97448;
  border-left: 0.2rem solid transparent;
  border-right: 0.2rem solid transparent;
  bottom: 0.13rem;
  left: 0.02rem;
}
.mouth {
  background-color: #2c2c2c;
  height: 0.25rem;
  width: 0.3rem;
  position: absolute;
  border-radius: 0 0 0.1rem 0.1rem;
  top: 0.6rem;
  left: 0.53rem;
  animation: mouth-move 3s infinite;
  transform-origin: top;
}
@keyframes mouth-move {
  50% {
    transform: scaleY(0.7);
  }
}
.body {
  background-color: @color;
  height: 1.35rem;
  width: 2.4rem;
  position: absolute;
  right: 1.2rem;
  bottom: 0rem;
  border-radius: 1rem 1rem 0 0;
  animation: sleep 3s infinite;
  transform-origin: bottom right;
}
@keyframes sleep {
  50% {
    transform: scale(0.9, 1.05);
  }
}
.tail {
  background-color: #db822e;
  height: 0.3rem;
  width: 2rem;
  position: absolute;
  right: 2.18rem;
  bottom: 0;
  border-radius: 1rem 0 0 1rem;
}
.body:before {
  content: "";
  position: absolute;
  background-color: #ffffff;
  height: 0.2rem;
  width: 0.45rem;
  border-radius: 0.2rem;
  bottom: 0;
  left: 0.5rem;
  box-shadow: 0.8rem 0 #ffffff;
}
.bubble {
  height: 0.27rem;
  width: 0.27rem;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 0.95rem;
  top: 0.25rem;
  border-radius: 1rem 1rem 1rem 0.2rem;
  animation: bubble-scale 3s infinite;
}
@keyframes bubble-scale {
  50% {
    transform: scale(1.6);
  }
}
</style>
