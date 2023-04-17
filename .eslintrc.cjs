module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    "plugin:vue/vue3-recommended", // 兼容vue3语法规范
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json",
  ],
  parser: "vue-eslint-parser", // 解析template语法
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["tsconfig.json"],
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "linebreak-style": [0, "error", "windows"],
    "prettier/prettier": "error",
    camelcase: [
      0,
      {
        properties: "always",
      },
    ], // 强制驼峰法命名 - 关闭
    "@typescript-eslist/camelcase": 0,
    "vue/multi-word-component-names": "off", // 关闭组件驼峰命名
  },
}
