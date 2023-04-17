<template>
  <el-form
    class="login_form"
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

// 表单位置
const labelPosition = ref("left")
// 表单参数
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
})
</script>

<style lang="scss" scoped>
.login_form {
  background-color: pink;
}
</style>
