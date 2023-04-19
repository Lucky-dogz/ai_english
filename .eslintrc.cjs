// module.exports是commonJs规范
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // The Follow config only works with eslint-plugin-vue v8.0.0+
    "vue/setup-compiler-macros": true,
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    "plugin:vue/vue3-recommended", // 兼容vue3语法规范
    "standard-with-typescript", // 标准规则
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json", // 解决自动导入包与eslint的检查冲突
  ],
  parser: "vue-eslint-parser", // 解析template语法
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["tsconfig.json"], // 引入ts配置文件
    extraFileExtensions: [".vue"], // 解决.vue文件报错没有被检测
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    eqeqeq: "off", // 允许双等号
    "linebreak-style": [0, "error", "windows"], // 关闭crlf报错提醒
    "prettier/prettier": "error",
    camelcase: [
      0,
      {
        properties: "always",
      },
    ], // 强制驼峰法命名 - 关闭
    "@typescript-eslist/camelcase": 0,
    "vue/multi-word-component-names": "off", // 关闭组件驼峰命名
    // 禁止不必要的转义字符
    "no-useless-escape": 0,
  },
}
