<template>
  <div>
    <div id="hot_dub">
      <div id="hot_head">
        <span class="remen">热门配音</span>
        <span class="more">更多</span>
        <img src="@/assets/images/find/u123.svg" />
      </div>
      <div id="dub">
        <div id="item">
          <div class="video">
            <img id="bg_img" class="img" src="@/assets/images/find/u126.svg" />
            <img
              id="u127_img"
              class="img"
              src="@/assets/images/find/u127.svg"
            />
            <span class="peiyin">配音</span>
            <img
              id="u128_img"
              class="img"
              src="@/assets/images/find/u128.svg"
            />
            <span class="time">0:26</span>
          </div>
          <div class="comment">
            <span>我想去看看海那边的世界！</span>
            <div>
              <span class="level">中级</span>
              <span class="shu">|</span>
              <span class="number">36人参与</span>
            </div>
          </div>
        </div>

        <div id="item">
          <div class="video">
            <img id="bg_img" class="img" src="@/assets/images/find/u137.svg" />
            <img
              id="u127_img"
              class="img"
              src="@/assets/images/find/u127.svg"
            />
            <span class="peiyin">配音</span>
            <img
              id="u128_img"
              class="img"
              src="@/assets/images/find/u128.svg"
            />
            <span class="time">0:26</span>
          </div>
          <div class="comment">
            <span>一起去卖冰棍吧！</span>
            <div>
              <span class="level">中级</span>
              <span class="shu">|</span>
              <span class="number">98人参与</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#hot_dub {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  top: 6.5rem;
  width: 100%;
  height: 6.6rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  -moz-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.34);
  font-family: "方正兰亭圆简体_中粗", sans-serif;
  font-size: 0.6rem;
  #hot_head {
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem 0.6rem 0.1rem;
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
  #dub {
    display: flex;
    justify-content: space-around;
    height: 5rem;
    #item {
      width: 6rem;
      position: relative;
      font-weight: 400;
      font-style: normal;
      .video {
        font-family: "方正兰亭圆简体", sans-serif;
        color: #f2f2f2;
        #bg_img {
          position: absolute;
          left: 0.4rem;
          top: 0.2rem;
          width: 5.4rem;
          height: 3.2rem;
        }
        #u127_img {
          position: absolute;
          left: 0.4rem;
          top: 0.2rem;
          width: 1rem;
          height: 0.8rem;
        }
        #u128_img {
          position: absolute;
          left: 0.6rem;
          top: 2.5rem;
          width: 0.8rem;
          height: 0.8rem;
        }
        .peiyin {
          position: absolute;
          left: 0.5rem;
          top: 0.4rem;
          font-size: 0.4rem;
        }
        .time {
          position: absolute;
          left: 4.3rem;
          top: 2.6rem;
          font-size: 0.5rem;
          font-weight: 400;
        }
      }
      .comment {
        position: absolute;
        left: 0.4rem;
        top: 3.6rem;
        font-size: 0.45rem;
        div {
          margin: 0.2rem 0;
          .level {
            color: #f2ad5a;
          }
          .shu {
            color: #d7d7d7;
            margin: 0 0.4rem;
          }
          .number {
            color: #aaaaaa;
          }
        }
      }
    }
  }
}
</style>
