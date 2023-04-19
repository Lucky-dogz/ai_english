// 引入vue
import { createApp } from "vue"
// 引入公共样式
import "./assets/style/common.scss"
// 引入App
import { createPinia } from "pinia"
import App from "./App.vue"
// router
import router from "./router/index"
// 引入Elmessage和Elloading的css样式文件
import "element-plus/theme-chalk/el-loading.css"
import "element-plus/theme-chalk/el-message.css"
import "element-plus/theme-chalk/el-message-box.css"
const app = createApp(App)
const pinia = createPinia()

// pinia
app.use(pinia)
// routes
app.use(router)
app.mount("#app")
