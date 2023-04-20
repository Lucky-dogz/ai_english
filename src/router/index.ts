import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/find",
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
  // “发现”主界面
  {
    path: "/find",
    name: "find",
    component: async () => await import("@/pages/find/index.vue"),
  },
  // “我的”主界面
  {
    path: "/my",
    name: "my",
    component: async () => await import("@/pages/my/index.vue"),
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
    component: async () => await import("@/components/article/articRead.vue"),
  },
  // 收藏页面
  {
    path: "/collect",
    name: "collect",
    component: async () => await import("@/pages/collect/index.vue"),
    redirect: "/collect/words",
    children: [
      {
        path: "/collect/peiyin",
        name: "peiyin",
        component: async () => await import("@/components/collect/peiyin.vue"),
      },
      {
        path: "/collect/words",
        name: "words",
        component: async () => await import("@/components/collect/words.vue"),
      },
      {
        path: "/collect/myarticle",
        name: "myarticle",
        component: async () =>
          await import("@/components/collect/myarticle.vue"),
      },
    ],
  },
  // 设置页面
  {
    path: "/set",
    name: "setting",
    component: async () => await import("@/pages/setting/index.vue"),
  },
  // 订单中心页面
  {
    path: "/order",
    name: "order",
    component: async () => await import("@/pages/order/index.vue"),
  },
  // 学习周报页面
  {
    path: "/weekreport",
    name: "weekreport",
    component: async () => await import("@/pages/weekReport/index.vue"),
  },
  // 客服中心页面
  {
    path: "/customer",
    name: "customer",
    component: async () => await import("@/pages/customer/index.vue"),
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
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
})
// 导出
export default router
