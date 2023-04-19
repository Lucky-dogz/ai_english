<template>
  <div id="Reg_container">
    <!-- 注册 -->
    <div id="Regist_box">
      <!-- 标题 -->
      <h2 class="welcome">账号注册</h2>
      <!-- logo -->
      <div id="regist_bg"></div>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="ruleForm"
        class="regist_form"
        :label-position="labelPosition"
        label-width="3rem"
      >
        <el-form-item label="账户" prop="account">
          <el-input v-model="ruleForm.account" placeholder="用户名或邮箱" />
        </el-form-item>
        <el-form-item label="密码" prop="password" class="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            placeholder="密码"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            placeholder="再次输入密码"
          />
        </el-form-item>

        <el-form-item label="">
          <el-checkbox
            v-model="isAgreenIn"
            class="remember"
            label="同意加入森语大家庭"
          />
        </el-form-item>
      </el-form>
      <!-- 注册按钮 -->
      <div class="button">
        <button
          type="button"
          :class="active_button"
          @click="submitRegist(ruleFormRef)"
        >
          注册
        </button>
      </div>
      <!-- 去登录界面 -->
      <div class="lastline">
        <p>已有账号?</p>
        <span @click="goLogin('login')">登录</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInstance, FormRules, ElMessage, ElMessageBox } from "element-plus"
import { _userRegist } from "@/utils/http/api"
// 抖动样式
const active_button = ref<String>("")
// 注册提交
const submitRegist = async (formEl: FormInstance | undefined) => {
  active_button.value = "active_button"
  setTimeout(() => {
    active_button.value = ""
  }, 1000)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 先判断表单是否填写
      if (!isAgreenIn.value) {
        ElMessage({
          showClose: true,
          message: "请勾选同意加入森语",
          center: true,
          duration: 1000,
        })
        return
      }
      // 进行注册
      const userData = {}
      userData.user_num = ruleForm.account
      userData.user_pwd = ruleForm.password
      _userRegist(userData)
        .then(res => {
          // {status: 200, msg: '用户注册成功！'}
          if (res.status === 200) {
            // 跳转至登录
            ElMessageBox.alert("注册成功！", "森语", {
              confirmButtonText: "去登录",
              // box关闭后的回调
              callback: () => {
                goLogin("login")
              },
            })
          } else {
            ElMessage({
              showClose: true,
              message: res.msg,
              center: true,
              duration: 1000,
            })
          }
        })
        .catch(err => {
          ElMessage({
            showClose: true,
            message: err, // 错误处理
            center: true,
            duration: 1000,
          })
        })
    } else {
      console.log("error submit!", fields)
    }
  })
}

// 表单位置
const labelPosition = ref("left")
// 获取表单
const ruleFormRef = ref<FormInstance>()
// 账户校验
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入账户"))
  } else {
    if (ruleForm.account.length < 5 || ruleForm.account.length > 18) {
      callback(new Error("账号长度需大于等于5位以及小于等于18位"))
    } else {
      callback() // 回调必须调用
    }
  }
}
// 密码校验
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"))
  } else {
    if (ruleForm.password.length < 8 || ruleForm.password.length > 18) {
      callback(new Error("密码长度需大于等于8位以及小于等于18位"))
    } else {
      callback()
    }
  }
}

// 确认密码校验
const validateCheckPass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"))
  } else if (value !== ruleForm.password) {
    callback(new Error("两次密码不一致！"))
  } else {
    callback()
  }
}
// 是否加入
const isAgreenIn = ref<boolean>(false)
// 表单参数
const ruleForm = reactive({
  account: "",
  password: "",
  checkPass: "",
})
// 表单校验
const rules = reactive<FormRules>({
  account: [{ validator: validateAccount, trigger: "blur" }],
  password: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
})
// 跳转登录页面
const router = useRouter()
const goLogin = navName => {
  router.push({
    name: "login",
  })
}
</script>

<style lang="scss" scoped>
#Reg_container {
  background: linear-gradient(rgba(241, 247, 245, 0.3), rgb(217, 232, 228));
  width: 15rem;
  height: 28rem;
  margin: 0rem auto;
  padding: 0.8rem;
  font-family: "方正兰亭圆简体", sans-serif;
}
#Regist_box {
  width: 100%;
  padding-top: 1rem;
  .welcome {
    text-align: center;
    color: rgb(86, 65, 12);
    font-size: 1rem;
    font-family: "Rampart One", cursive;
  }
  #regist_bg {
    width: 7rem;
    height: 7rem;
    margin: 1rem auto;
    background-color: pink;
    background: url("@/assets/images/login.png") no-repeat;
    background-size: contain;
  }
  .regist_form {
    width: 11rem;
    margin: 1rem auto;
  }
  .forget {
    margin-left: 75%;
    font-size: 0.6rem;
  }
  .remember {
    margin-top: 0.5rem;
    margin-left: -2.6rem;
    font-size: 0.6rem;
    input {
      margin-right: 0.2rem;
    }
  }
  .button {
    button {
      margin: 1rem auto;
      display: block;
      padding: 0.4rem 4rem 0.4rem 4rem;
      border-radius: 1rem;
      font-family: sans-serif;
      font-weight: 900;
      background-color: transparent;
      border: 0.06rem solid #fff;
      font-size: 0.8rem;
      color: #4d4a4a;
      box-shadow: 0.025rem 0.08rem rgba(0, 0, 0, 0.4);
    }
    .active_button {
      animation: click 0.3s 1 linear;
    }
    @keyframes click {
      0% {
        transform: scale(0.9, 1.1);
      }
      25% {
        transform: scale(1.1, 0.9);
      }
      50% {
        transform: scale(0.9, 1.1);
      }
      75% {
        transform: scale(1.1, 0.9);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  }
  .lastline {
    margin: 0 auto;
    width: 5.5rem;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.05rem;
    p {
    }
    span {
      color: #25e1ad;
    }
  }
  .el-message {
    font-size: 1rem;
  }
}
</style>
