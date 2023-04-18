本项目为省级大学生创新创业项目的一部分，完整项目为Android&Vue混合开发（Hybrid app），这里只是我负责的vue部分，因为感觉做的还不错，所以打算对此进行重构和完善出来，形成一个独立的移动端项目，旨在提供中学、大学生练习英语口语的平台，具有语音识别、评测、文章点读、收藏本等功能，界面充满动画元素，提高用户学习兴趣。项目点如下：

- 利用Axure进行界面UI和交互的设计、前端vue项目的构建以及编写，并与原生Android端进行方法交互和参数传递，实现Hybrid混合开发。
- 利用express框架搭建后台服务，部署在个人云服务器中，连接 mysql 数据库提供在线接口，编写接口文档。
- 对node后端进行jwt登录验证，前端路由鉴权，开发接口等。

解决Android&vue混合开发界面集成问题、集成开发讯飞口语语音评测模块的问题，获得省级大学生创新创业项目立项、申请软件著作权中。

## 一、项目搭建

项目当时由于要赶DDL所以做的比较赶，采用的技术栈是**vue2+vue-router+vuex+element-ui+axios封装**，目前有时间了，于是就打算将项目重构下。

- **Vue3** 作为技术框架
- **Vite** 作为打包和构建工具（代替了之前 Vue2 的 Webpack 构建工具），提高打包编译性能
- **VueRouter 4.1.6**  版本作为项目页面路由控制，此版本为 Vue3 配套版本
- **Pinia** 代替Vuex 作为统一状态管理模块，因为 Pinia 与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。
- Api请求模块仍然采用了易用、简洁且高效的http库 **Axios**，并对其进行一定的封装
- **Scss** 作为 CSS 的预编译语言，增强 CSS 的灵活性。
- **Element Plus** 作为界面 UI 框架。
- 使用 **EditorConfig + Prettier + ESLint** 组合来实现代码规范化。

#### 那么开始我们项目的重构

#### 1、创建项目

参考[Vite官方](https://vitejs.cn/guide/#scaffolding-your-first-vite-project)创建初始vue3+TS项目

`npm init vite@latest ai_english -- --template vue-ts`

#### 2、配置Eslint+Prettier规范化代码

**Eslint**

由于这两个会有冲突且比较麻烦，自己配了两三次才勉强弄懂，因此最早开始配置。

安装Eslint：`npx eslint --init`

根据自己的需求跟着安装步骤选取配置项，其中的eslint规则我使用的是标准`Standard`规则，完成后项目会产生一个`eslintrc.js/cjs`文件，在ES规范的项目中，想引入commonjs规范的模块是可以实现的，只需要修改文件的后缀为cjs

这是eslint的配置文件，之后需要在这里面进行配置。

此时打开vue文件可能会报错，因为还没有将vue3的语法规范加入eslint中，而且这时候看其他文件的时候会有`linebreak-style`的错误，这是因为eslint默认是`unit`的也就是`lr`行尾，现在可以直接在`.eslintrc.cjs`文件中添加新规则：

```js
// module.exports是commonJs规范
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
   'plugin:vue/essential',
+  'plugin:vue/vue3-recommended', // 兼容vue3语法规范
  ],
+ parser: 'vue-eslint-parser' // 这个插件没有的先去安装，用来解析template语法
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
+    "linebreak-style": [0, "error", "windows"], // 关闭crlf报错提醒
  },
};
```

**Prettier**

eslint只会提示你代码错误，并不会帮你自动修改，这时候就需要这个prettier来实现这个功能。

命令：`npm i eslint-plugin-prettier eslint-config-prettier prettier -D`

- `eslint-plugin-prettier`这个插件主要禁用掉了一些不必要的以及和 Prettier 相冲突的 ESLint 规则。
-  `eslint-config-prettier`不符合prettier规则的时候会报一个错误，同时可以用eslint --fix命令修复。

修改`.eslintrc.cjs`文件，如下：

```js

  extends: [
    'plugin:vue/vue3-recommended',
    "standard-with-typescript", // 标准规则
+   'plugin:prettier/recommended',  
  ],
  rules: {
+   'prettier/prettier':'error', 
    "linebreak-style": [0, "error", "windows"], // 关闭crlf报错提醒
  },
};
```

新增`.prettierrc.cjs`文件（js文件可能会报错）：

```js
module.exports = {
  printWidth: 80, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  singleQuote: false, // 使用单引号（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  trailingComma: "es5", // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  bracketSameLine: false,
  arrowParens: "avoid", // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
  endOfLine: "auto", //自动检查当前文件是lf还是crlf
}
```

这是就配置完了，如果想保存代码的时候就可以实现代码自动格式化，这时候需要在`vscode`的`setttings.json`文件中添加下面内容且需要安装eslint和prettier两个插件：

```js
"[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
    	"source.fixAll.eslint": true,
    },
},
```

##### 一些问题

1、eslint报错：`Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.`

这是由于没有找到ts的配置文件，加上即可

```js
  parserOptions: {
    project: ["tsconfig.json"], //tsconfig在目录下，直接写上即可
  },
```

2、eslint与AutoImport包产生冲突

如果使用了AutoImport，可能会报错，`AutoImport`能够自动导入vue中hook reactive ref等，不用我们手动引入，非常方便，但eslint会检查到not define的错误，因此需要告诉eslint我们已经导入了。

```ts
// vite.config.ts  
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
  ],
```

将enabled设置为true后，`可以发现项目出现了.eslintrc-auto-import.json`的文件，如果没有出现那就等一会或者重启vscode，我们再将其配置进eslint配置文件即可

```js
  extends: [
    // 'plugin:vue/vue3-essential',
    "plugin:vue/vue3-recommended", // 兼容vue3语法规范
    "standard-with-typescript", // 标准规则
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json", // 解决自动导入包与eslint的检查冲突
  ],
```

