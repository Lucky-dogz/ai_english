import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/find",
  },
  // “发现”主界面
  {
    path: "/find",
    name: "find",
    component: async () => await import("@/pages/find/index.vue"),
  },
  // 点读
  {
    path: "/article",
    name: "article",
    component: async () => await import("@/pages/article/index.vue"),
  },
  // 语音识别
  {
    path: "/voicerec",
    name: "voicerec",
    component: async () => await import("@/pages/voicerec/index.vue"),
  },
  // 点读文章详情
  {
    path: "/articread",
    name: "articread",
    // props: {
    //   author: true,
    //   category: true,
    //   id: true,
    //   info: true,
    //   time_cursor: true,
    //   title: true,
    // }, // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
    component: async () => await import("@/components/article/articRead.vue"),
  },
  {
    path: "/login",
    name: "login",
    // 使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: async () => await import("@/pages/login/index.vue"),
  },
  {
    path: "/regist",
    name: "regist",
    // 使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: async () => await import("@/pages/regist/index.vue"),
  },
  // {
  // 配置404页面
  // path: '/:catchAll(.*)',
  // name: '404',
  // component: () => import(''),
  // }
]
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 导出
export default router
