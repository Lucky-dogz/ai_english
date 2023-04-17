// 引入vue
import { createApp } from "vue"
// 引入公共样式
import "./style/common.scss"
// 引入App
import { createPinia } from "pinia"
import App from "./App.vue"
// router
import router from "./router/index"
// pinia

const app = createApp(App)
const pinia = createPinia()
// pinia
app.use(pinia)
// routes
app.use(router)
app.mount("#app")
