import youdao_axios from "./axios"
import my_axios from "./axios1"

/**
 *  有道翻译单词接口
 *  方式：get
 *  参数：word
 * */
export async function _tranWords<T>(word: string): Promise<T> {
  const response = await youdao_axios.get("/suggest", {
    params: {
      num: 1,
      doctype: "json",
      q: word,
    },
  })
  return response.data
}

/**
 *  有道翻译句子接口
 *  方式：get
 *  参数：sentence
 * */
export async function _tranSentence<T>(sentence: string): Promise<T> {
  const response = await youdao_axios.get("/translate", {
    params: {
      doctype: "json",
      type: "AUTO",
      i: sentence,
    },
  })
  return response.data
}

// 单词句子发音
export async function _audioVoice<T>(param: string): Promise<T> {
  const response = await youdao_axios.get("/dictvoice", {
    params: {
      audio: param,
    },
  })
  return response.data
}

// ******************************************************************************
/**
 * 注册
 * @param Object
 * user_num,user_pwd
 */
export async function _userRegist<T>(data: object): Promise<T> {
  return await my_axios({
    url: "/user/adduser",
    method: "post",
    data,
  })
}

/**
 * 登录，获取用户信息
 * @param param
 * param: { category: "cnn" } or { author: "骑猪学口语" }
 */
export async function _userLogin<T>(data: object): Promise<T> {
  return await my_axios({
    url: "/user/login",
    method: "post",
    data,
  })
}

/**
 * 获取文章列表
 * @param param
 * param: { category: "cnn" } or { author: "骑猪学口语" }
 */
export async function _getArticleLists<T>(param: object): Promise<T> {
  const response = await my_axios.get("/articles/lists", {
    params: {
      ...param,
    },
  })
  return response.data
}

/**
 * 获取文章内容
 * @param id
 */
export async function _getArticleContent<T>(id: string): Promise<T> {
  const response = await my_axios.get("/articles/content", {
    params: {
      id,
    },
  })
  return response.data
}

/**
 * 添加文章
 * @param
 * form: {
    title: "",
    category: "",
    info: "",
    content: "",
    author = ""
  },
 */
export async function addArticle<T>(data: object): Promise<T> {
  const response = await my_axios({
    url: "/articles/add",
    method: "post",
    data,
  })
  return response.data
}

/**
 * 获取id用户数据
 * @param usernum 账号
 */
export async function getUserData<T>(usernum: string): Promise<T> {
  const response = await my_axios({
    url: "/user/getuser",
    method: "get",
    params: {
      user_num: usernum,
    },
  })
  return response.data
}
