// 对axios进行二次封装
import axios from "axios"

let baseURL
if (process.env.NODE_ENV === "development") {
  baseURL = "/my"
} else if (process.env.NODE_ENV === "production") {
  baseURL = "http://8.134.93.12:4000/ai"
}

// 1. 利用axios对象的方法create，去创建一个axios案例
// 2. requests就是axios
const requests = axios.create({
  // 配置对象
  baseURL, // 基础路径，发送请求的时候，路径当中会出现api
  timeout: 5 * 1000, // 请求超时时间（5秒后还未接收到数据，就需要再次发送请求）
})
// 定义重发请求对象
interface Retry {
  count: number
  delayTime: number
}
const retry: Retry = {
  count: 3,
  delayTime: 1000,
}
// requests.defaults.headers.post['Content-Type'] = 'application/json';
// 请求拦截器：在发送请求之前，请求拦截器可以检测到，在请求发送之前处理一些事情
requests.interceptors.request.use(config => {
  const token: string = localStorage.getItem("token") ?? ""
  config.headers.common.Authorization = "Bearer " + token // 留意这里的 Authorization
  // config: 是配置对象，该对象包含一个属性-->headers请求头
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  async res => {
    console.log("axios请求成功")
    return await Promise.resolve(res.data)
  },
  async error => {
    // console.log(error);
    // 超时处理 error.config是一个对象，包含上方create中设置的三个参数
    const { config } = error
    if (config === undefined || retry.count === undefined)
      return await Promise.reject(error)

    // __retryCount用来记录当前是第几次发送请求
    config.__retryCount = config.__retryCount ?? 0 // 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。

    // 如果当前发送的请求大于等于设置好的请求次数时，不再发送请求，返回最终的错误信息
    if (config.__retryCount >= retry.count) {
      return await Promise.reject(error)
    }

    // 记录请求次数+1
    config.__retryCount++
    console.log(config.__retryCount)
    // 设置请求间隔 在发送下一次请求之前停留一段时间，时间为上方设置好的请求间隔时间
    const backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve("再次请求")
      }, retry.delayTime ?? 1000)
    })

    // 再次发送请求
    return await backoff.then(async function () {
      return await requests(config)
    })
  }
)

// 对外暴露
export default requests
