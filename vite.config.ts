import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
// 自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from "unplugin-vue-components/vite"
// eleui解析器
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 存放的位置
      dts: "src/auto-import.d.ts",
      eslintrc: {
        enabled: true, // <-- this
      },
      resolvers: [ElementPlusResolver()],
      // 安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ["vue", "vue-router"],
    }),
    Components({
      // 引入组件的,包括自定义组件
      resolvers: [ElementPlusResolver()],
      // 存放的位置
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },

  // 配置代理
  server: {
    proxy: {
      // 只要请求前缀是'api'，就给你代理
      "/youdao": {
        // http://dict.youdao.com/suggest?num=1&doctype=json&q=word
        target: "http://dict.youdao.com",
        rewrite: path => path.replace(/^\/youdao/, ""), // 将api替换为空
        ws: true, // 用于支持websocket
        changeOrigin: true,
      },
      "/my": {
        target: "http://8.134.93.12:4000/ai",
        rewrite: path => path.replace(/^\/my/, ""),
        ws: true, // 用于支持websocket
        changeOrigin: true,
      },
    },
  },
})
