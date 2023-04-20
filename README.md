- [部分界面展示](#部分界面展示)
- [一、项目搭建](#一项目搭建)
  - [那么开始我们项目的重构](#那么开始我们项目的重构)
  - [1、创建项目](#1创建项目)
  - [2、配置Eslint+Prettier规范化代码](#2配置eslintprettier规范化代码)
    - [一些问题](#一些问题)
  - [3、安装router、pinia、scss、axios](#3安装routerpiniascssaxios)
  - [4、配置ElementPlus、自动导入](#4配置elementplus自动导入)
  - [5、VSCode连接Git](#5vscode连接git)
- [一、JWT实现登录注册鉴权](#一jwt实现登录注册鉴权)
    - [1. 表单数据验证，这里只对账户和密码进行验证](#1-表单数据验证这里只对账户和密码进行验证)
    - [2. 将表单验证规则注入接口](#2-将表单验证规则注入接口)
    - [3. 定义错误处理中间件，在 app.js 添加如下代码，并写在路由下面](#3-定义错误处理中间件在-appjs-添加如下代码并写在路由下面)
    - [4. 注册接口](#4-注册接口)
    - [5. 登录接口](#5-登录接口)
    - [6. Token校验](#6-token校验)



本项目为省级大学生创新创业项目的一部分，完整项目为Android&Vue混合开发（Hybrid app），这里只是我负责的vue部分，因为感觉做的还不错，所以打算对此进行重构和完善出来，形成一个独立的移动端项目，旨在提供中学、大学生练习英语口语的平台，具有语音识别、评测、文章点读、收藏本等功能，界面充满动画元素，提高用户学习兴趣。项目点如下：

- 利用Axure进行界面UI和交互的设计、前端vue项目的构建以及编写，并与原生Android端进行方法交互和参数传递，实现Hybrid混合开发。
- 利用express框架搭建后台服务，部署在个人云服务器中，连接 mysql 数据库提供在线接口，编写接口文档。
- 对node后端进行jwt登录验证，前端路由鉴权，开发接口等。

解决Android&vue混合开发界面集成问题、集成开发讯飞口语语音评测模块的问题，获得省级大学生创新创业项目立项、申请软件著作权中。关于混合开发的原生和Web端如何交互，可以点击查看这篇我写的文章[Android与Vue借助WebView双向通信](https://blog.csdn.net/weixin_62350313/article/details/129664743)。文档持续更新中...

------



### 部分界面展示

<img src="public\show\login.png" alt="login" style="zoom: 50%;" /><img src="public\show\regist.png" alt="regist" style="zoom:50%;" /><img src="public\show\find.png" alt="find" style="zoom:50%;" /><img src="public\show\my.png" alt="my" style="zoom:50%;" />

<img src="public\show\setting.png" alt="setting" style="zoom:50%;" /><img src="public\show\word_collect.png" alt="word_collect" style="zoom:50%;" /><img src="public\show\article.png" alt="article" style="zoom:50%;" /><img src="public\show\read.png" alt="read" style="zoom:50%;" />

### 一、项目搭建

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

#### 3、安装router、pinia、scss、axios

- `npm i vue-router pinia axios`
- `npm i node-sass sass sass-loader style-loader`

#### 4、配置ElementPlus、自动导入

- `npm i element-plus `

- 自动导入vue中hook reactive ref等：`npm i unplugin-auto-import`
- 自动导入ui-组件 比如说ant-design-vue  element-plus等：`npm i unplugin-vue-components`

根据[ElementPlus](http://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)官方文档的按需引入：

```js
export default defineConfig({
  // ...
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
})
```

#### 5、VSCode连接Git

连接git可以很方便的进行项目编写以及迭代和暂存，规范化项目的编写，这里借助git bash进行连接

- ` git init `
- ` git add . //将当前目录提交到暂存区 `
- ` git remote add origin *** //将本地的仓库关联到GitHub `
- ` git pull origin master //上传github之前pull一下 `
- ` git push -u origin master  //提交到你的仓库 `
- 实时更新直接在vscode里进行操作就好

### 一、JWT实现登录注册鉴权

我采用的是Express框架搭建后台服务，并部署到了阿里云的云服务器上，连接着项目数据库，这里就不描述数据库方面了，需要的库：

- 表单验证模块：`npm i joi`
- 验证数据表单中间件：`npm i @escook/express-joi`
- **bcryptjs**加密：`npm i bcryptjs`，
- **token**生成包：：`npm i jsonwebtoken@jsonwebtoken`
- 解析 Token 的中间件：`npm i express-jwt`

##### 1. 表单数据验证，这里只对账户和密码进行验证

```js
// 导入定义验证规则的包
const joi = require("joi");
// 定义用户名和密码的验证规则
const user_num = joi.string().min(5).max(20).required();
const user_pwd = joi.string().required();
// 验证规则对象 - 注册和登录
exports.reg_login_schema = {
  body: {
    user_num,
    user_pwd,
  },
};
```

##### 2. 将表单验证规则注入接口

```js
// 用户注册
router.post('/regist',expressJoi(reg_login_schema), userHandler.register )
// 用户登录
router.post('/login',expressJoi(reg_login_schema), userHandler.login)
```

##### 3. 定义错误处理中间件，在 app.js 添加如下代码，并写在路由下面

这里的`joi.ValidationError`验证的就是上面设计的表单验证规则，并且对token进行验证

```js
// 错误中间件
app.use(function (err, req, res, next) {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError)
    return res.send({
      status: 400,
      msg: "请求参数不合法" + err.message,
    });
  // 身份认证失败错误
  if (err.name === "UnauthorziedError")
    return res.send({ status: 401, msg: "无效的token！" });
  // 其它错误
  res.send({
    status: 500,
    msg: err.message,
  });
});
```

##### 4. 注册接口

利用bcrypt.hashSync() 对密码进行加密，优点：

1. 加密之后的密码，无法被逆向破解
2. 同一明文密码多次加密，得到的加密结果各不相同，保证了安全性

bcrypt.hashSync(userInfo.user_pwd, saltRounds)

saltRounds: 正数，代表hash杂凑次数，**数值越高越安全**，但是解密验证的时候性能越低，默认10次。

```js
// 注册用户的处理函数
exports.register = (req, res) => {
   // 获取客户端请求的用户信息
   const userInfo = req.body;
   // 定义 SQL 语句，查询用户名是否被占用
   const sql = "SELECT * FROM users WHERE user_num = ?";
   connection.query(sql, userInfo.user_num, (err, results) => {
       // 执行 SQL 语句失败
       if (err) return res.send({ status: 500, msg: err.message });
       // 判断用户名是否被占用
       if (results.length > 0) {
         return res.send({ status: 400, msg: "用户名被占用，请更换其他用户名！" });
       }
      // 调用 bcrypt.hashSync() 对密码进行加密
      userInfo.user_pwd = bcrypt.hashSync(userInfo.user_pwd, 10);
      .....
   });
}
```

##### 5. 登录接口

token配置

```js
module.exports = {
    // 加密和解密 Token 的秘钥
    secretKey: "...",
    // token 的有效期
    expiresIn: "2h",
};
```

利用`bcrypt.compareSync`进行解密，`jwt.sign`进行用户信息的加密，生成token字符串发回浏览器

```js
// 密钥和token生效时间
const { secretKey, expiresIn } = require("../../config/index");
// 登录的处理函数
exports.login = (req, res) => {
        // 判断密码是否正确
        const flag = bcrypt.compareSync(userInfo.user_pwd, results[0].user_pwd);
        if (!flag) return res.send({ status: 403, msg: "登录失败，密码错误！" });
        // 对用户信息进行加密，生成Token字符串
        const token = jwt.sign({ user_num: req.body.user_num }, secretKey, {
            expiresIn: expiresIn,
        });
        res.send({
            status: 200,
            msg: "登陆成功！",
            token: token,
        });
    });
```

##### 6. Token校验

```js
// 使用 express-jwt 这个中间件
// 通过 unless 配置接口白名单，也就是哪些 URL 可以不用经过校验，像登陆/注册都可以不用校验
app.use(
  jwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/user/],
  })
);
```

获取`token`用户的信息方法如下：

```js
router.get('/api/userInfo',async (ctx,next) => {
    const authorization =  ctx.header.authorization // 获取jwt
    const token = authorization.replace('Beraer ','')
    const result = jwt.verify(token,'test_token')
})
```

