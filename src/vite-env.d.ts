// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

// 推荐使用
declare module "*.vue" {
  // 引入vue模块中ts的方法
  import type { DefineComponent } from "vue"
  // 定义vue组件以及类型注解
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
