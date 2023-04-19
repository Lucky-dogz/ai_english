<template>
  <el-dialog
    v-model="isShow"
    fullscreen
    class="dialog"
    width="90%"
    :title="operateType === 'add' ? '新增文章' : '编辑文章'"
  >
    <el-form ref="ref_form" :model="form" :rules="rules">
      <el-form-item label="标题" prop="title" :label-width="formLabelWidth">
        <el-input v-model="form.title" maxlength="20"></el-input>
      </el-form-item>

      <el-form-item label="简介" :label-width="formLabelWidth">
        <el-input v-model="form.info"></el-input>
      </el-form-item>

      <el-form-item label="分类" prop="category" :label-width="formLabelWidth">
        <el-select v-model="form.category" placeholder="请选择文章分类">
          <el-option label="CNN新闻" value="cnn"></el-option>
          <el-option label="经典英语电影对白" value="movie_talk"></el-option>
          <el-option label="英文歌曲" value="en_song"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="content">
        <el-input
          v-model="form.content"
          type="textarea"
          placeholder="在此输入英语原文"
          :rows="10"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 取消和确定对话框 -->
    <template #footer>
      <div class="dialog-footer">
        <el-button size="medium" @click="handleClose">取消</el-button>
        <el-button class="ok-button" size="medium" @click="handleOK(form)"
          >确定</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"

// 接收参数
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  operateType: {
    type: String,
    default: "",
  },
})
const { isShow, operateType } = toRefs(props)

// const textData = ref("")
const form = reactive({
  title: "",
  category: "",
  info: "",
  content: "",
})
const rules = ref({
  title: [{ required: true }],
  category: [{ required: true }],
  content: [{ required: true }],
})
const formLabelWidth = ref("3rem")
// onMounted()

// 声明el-form组件的引用
const ref_form = ref(null)
// 声明触发的事件
const emit = defineEmits(["confirm", "dialogclose"])
// 提交
const handleOK = formData => {
  // console.log("提交前", formData);
  const tempData = { ...formData }
  ref_form.value.validate(valid => {
    if (valid) {
      ElMessage({
        showClose: true,
        message: "提交成功",
        type: "success",
      })
      tempData.content = split_article(tempData.content)
      tempData.author = "骑猪学口语"

      emit("confirm", tempData)
    } else {
      ElMessage({
        showClose: true,
        message: "请按照要求添加文章~",
        type: "warning",
      })
      return false
    }
  })
  // console.log("提交后", formData);
}
// 关闭dialog
const handleClose = () => {
  emit("dialogclose")
}
// 处理文章
const split_article = textdata => {
  return sentence_splitter(textdata)
}

// 分割句子
const sentence_splitter = article => {
  return article
    .replace(/\n/g, " ")
    .replace(/\b(\w{1,}\.\w{1,})\./g, "$1&#x2E;")
    .replace(
      /(Dr|Esq|Hon|Jr|Mr|Mrs|Ms|Messrs|Mmes|Msgr|Prof|Rev|Rt|Sr|St)\./g,
      "$1&#x2E;"
    )
    .replace(/\b(\w?)\.(\w)\b/g, "$1&#x2E;$2")
    .match(/(.*?)([\.\?\!])/g)
}
</script>

<style lang="scss" scoped>
.dialog {
  textarea {
    margin-top: -1rem;
    width: 100%;
    height: 10rem;
  }
  .ok-button {
    background-color: #ccf3e9;
    color: #25e1ad;
  }
  .el-input__inner {
  }
}
</style>
