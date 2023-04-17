<template>
  <div id="log_container">
    <!-- 登录盒子 -->
    <div id="login_box">
      <!-- 标题 -->
      <h2 class="welcome">WELCOME 森语</h2>
      <!-- logo -->
      <div id="login_bg"></div>
      <!-- 登录表单 -->
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="ruleForm"
        class="login_form"
        :label-position="labelPosition"
        label-width="3rem"
      >
        <el-form-item label="账户" prop="user_num">
          <el-input v-model="ruleForm.user_num" placeholder="用户名或邮箱" />
        </el-form-item>
        <el-form-item label="密码" prop="user_pwd" class="password">
          <el-input
            v-model="ruleForm.user_pwd"
            type="password"
            placeholder="密码"
          />
        </el-form-item>
      </el-form>
      <!-- 忘记密码 -->
      <div class="forget">
        <span>忘记密码?</span>
      </div>
      <!-- 登录按钮 -->
      <div class="button">
        <button
          type="button"
          :class="active_button"
          @click="submitLogin(ruleFormRef)"
        >
          登录
        </button>
      </div>
      <!-- 去注册 -->
      <div class="lastline">
        <p>没有账号?</p>
        <span @click="goRegist('regist')">注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInstance, FormRules } from "element-plus"
import { _userLogin } from "@/utils/http/api"
// 登录抖动样式
const active_button = ref<String>("")
// 登录按钮
const submitLogin = async (formEl: FormInstance | undefined) => {
  active_button.value = "active_button"
  setTimeout(() => {
    active_button.value = ""
  }, 1000)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 进行登录
      _userLogin(ruleForm)
        .then(res => {
          // {status: 200, msg: '用户注册成功！'}
          if (res.status === 200) {
            // console.log("登录成功！")
            // 跳转至登录
            ElMessage({
              showClose: true,
              message: res.msg,
              type: "success",
              center: true,
              duration: 1000,
            })
          } else {
            ElMessage({
              showClose: true,
              message: res.msg,
              type: "warning",
              center: true,
              duration: 1000,
            })
          }
        })
        .catch(err => {
          ElMessage({
            showClose: true,
            message: err, // 错误处理
            type: "error",
            center: true,
            duration: 1000,
          })
        })
    } else {
      console.log("error submit!", fields)
    }
  })
}
// 表单参数
const ruleForm = reactive({
  user_num: "",
  user_pwd: "",
})
// 表单位置
const labelPosition = ref("left")
// 获取表单
const ruleFormRef = ref<FormInstance>()
// 账户校验
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入账户"))
  } else {
    if (ruleForm.user_num.length < 8) {
      callback(new Error("账号长度需大于等于8位"))
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
    if (ruleForm.user_pwd.length < 8) {
      callback(new Error("密码长度需大于等于8位"))
    } else {
      callback()
    }
  }
}
// 表单校验
const rules = reactive<FormRules>({
  user_num: [{ validator: validateAccount, trigger: "blur" }],
  user_pwd: [{ validator: validatePass, trigger: "blur" }],
})
// 跳转注册页面
const router = useRouter()
const goRegist = navName => {
  router.push({
    name: navName,
  })
}
</script>

<style lang="scss" scoped>
#log_container {
  background: linear-gradient(rgba(241, 247, 245, 0.3), rgb(217, 232, 228));
  width: 15rem;
  height: 28rem;
  margin: 0rem auto;

  //   border-radius: 1rem;
  padding: 0.8rem;
  font-family: "方正兰亭圆简体", sans-serif;
}
#login_box {
  width: 100%;
  padding-top: 1rem;
  .welcome {
    text-align: center;
    color: rgb(86, 65, 12);
    font-size: 1rem;
    font-family: "Rampart One", cursive;
  }
  #login_bg {
    width: 7rem;
    height: 7rem;
    margin: 1rem auto;
    background-color: pink;
    background: url("@/assets/images/login.png") no-repeat;
    background-size: contain;
  }
  .login_form {
    width: 11rem;
    margin: 1rem auto;
    .password {
      margin-top: 1.2rem;
    }
  }
  .forget {
    margin-left: 75%;
    font-size: 0.6rem;
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
    span {
      color: #25e1ad;
    }
  }
}
</style>
