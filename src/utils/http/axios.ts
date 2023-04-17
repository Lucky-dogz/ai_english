// 对axios进行二次封装
import axios from "axios"

let baseURL
if (process.env.NODE_ENV === "development") {
  baseURL = "/youdao"
} else if (process.env.NODE_ENV === "production") {
  baseURL = "http://dict.youdao.com"
}

// 1. 利用axios对象的方法create，去创建一个axios案例
// 2. requests就是axios
const requests = axios.create({
  // 配置对象
  baseURL, // 基础路径，发送请求的时候，路径当中会出现api
  timeout: 5000, // 请求超时的时间5s
})
requests.defaults.headers.post["Content-Type"] = "application/json"
// 请求拦截器：在发送请求之前，请求拦截器可以检测到，在请求发送之前处理一些事情
requests.interceptors.request.use(config => {
  // config: 是配置对象，该对象包含一个属性-->headers请求头
  return config
})
// 响应拦截器：
requests.interceptors.response.use(
  res => {
    // 成功的回调函数
    console.log("数据请成功！", res)
    return res.data
  },
  async error => {
    console.log(error)
    // 失败的回调函数
    return await Promise.reject(new Error("faile"))
  }
)

// 对外暴露
export default requests
