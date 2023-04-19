<template>
  <div id="lists">
    <el-button
      v-if="type == 3"
      class="addArticle"
      type="primary"
      @click="addArticle"
    >
      添加文章
    </el-button>

    <!-- 对话框 -->
    <MyDialog
      v-model="isShow"
      :operate-type="operateType"
      @confirm="confirm"
      @dialogclose="dialogClose"
    ></MyDialog>

    <div class="content">
      <ul class="article_lists">
        <li
          v-for="item in articlelists"
          :key="item.id"
          class="article_item"
          @click="gothisArticle(item)"
        >
          <h4>{{ item.title }}</h4>
          <p>{{ item.author }}</p>
          <span>{{ item.info }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyDialog from "./dialog.vue"
import { _addArticle } from "@/utils/http/api"
// 接收参数
const props = defineProps({
  type: {
    type: Number,
    default: 0,
  },
  articlelists: {
    type: Array,
    default: () => [],
  },
})

const { type, articlelists } = toRefs(props)

const isShow = ref(false)
const operateType = ref("")

const router = useRouter()
const gothisArticle = item => {
  // 激活事件，发送文章给articRead组件
  // this.$bus.$emit("getArticleContent", item);
  // console.log(item)

  router.push({
    path: "/articread",
    name: "articread",
    query: item,
  })
}
// 增加文章
const addArticle = () => {
  // 各种初始化
  isShow.value = true
  operateType.value = "add"
}

// 编辑文章
/* const editArticle = () => {
  // 各种初始化
  isShow = true
  operateType = "edit"
} */

// 确认添加,接收dialog传来的数据
const confirm = formData => {
  isShow.value = false
  // console.log(formData);
  _addArticle(formData)
    .then(res => {
      console.log(res.message)
    })
    .catch(err => {
      console.log(err)
    })
}
// 关闭
const dialogClose = () => {
  isShow.value = false
}
</script>

<style lang="scss" scoped>
#lists {
  font-family: "方正兰亭圆简体", sans-serif;
  width: 100%;
  background-color: #f9f9f9;
  // background-color: pink;
  .addArticle {
    width: 100%;
    background-color: #25e1ad;
    font-size: 0.6rem;
    border: none;
  }
  .content {
    width: 100%;
    // background-color: ;
    background-color: pink;
    .article_lists {
      background-color: #f9f9f9;
      font-size: 0.6rem;
      li {
        background-color: #fff;
        height: 4rem;
        padding: 0.1rem 0.4rem;
        position: relative;
        margin: 0.5rem 0;
      }
      h4 {
        height: 0.6rem;
        color: #101010;
      }
      p {
        margin-top: 0.2rem;
        color: #646464;
        float: right;
        font-weight: bold;
        height: 1rem;
      }
      span {
        position: absolute;
        bottom: 0.4rem;
        height: 1.5rem;
        font-size: 0.55rem;
        color: #aaaaaa;
        // word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
