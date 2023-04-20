import { defineStore } from "pinia"
import { _getUserData } from "@/utils/http/api"
export const userStore = defineStore("user", {
  state: () => {
    return {
      // 用户数据
      userInfo: {},
      // 收藏单词
      collect_words: [
        {
          time: "1654090823",
          wordLists: [
            {
              en: "revolt",
              tran: "n. 反抗；造反，起义 v. 起义；反抗",
            },
            {
              en: "specialist",
              tran: "n. 专家",
            },
            {
              en: "carpet",
              tran: "n. 地毯",
            },
            {
              en: "meditation",
              tran: "n. 默想，冥想；沉思，深思，思考",
            },
            {
              en: "persist",
              tran: "v. 坚持；执意；继续存在[发生]；持续",
            },
            {
              en: "avoid",
              tran: "v. 防止，避免；逃避，避开",
            },
            {
              en: "yellow",
              tran: "adj. 黄的，黄色的 n. 黄色",
            },
            {
              en: "consult",
              tran: "v. 请教，向...咨询；找...商量；查阅，查看",
            },
          ],
        },
        {
          time: "1654004423",
          wordLists: [
            {
              en: "assume",
              tran: "v. 假定，设想；开始掌管/承担责任等；假装[装出]…的态度/样子/表情等",
            },
            {
              en: "doctorate",
              tran: "n. 博士学位;博士头衔",
            },
            {
              en: "resultant",
              tran: "adj. 作为结果而发生的",
            },
            {
              en: "fuse",
              tran: "n. 保险丝；导火线,引信 v. 结合; 融合; 熔合",
            },
          ],
        },
      ],
      // 是否在安卓上运行
      hasAndroid: false,
    }
  },

  actions: {
    // 加载用户数据
    async loadUserData(userNum: string) {
      try {
        this.userInfo = await _getUserData(userNum).then((res: any) => {
          res.data[0].study_overview = JSON.parse(res.data[0].study_overview)
          return res.data[0]
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  getters: {
    // 收藏单词数量
    collect_words_length: state => {
      let number = 0
      state.collect_words.forEach((value, index) => {
        number += state.collect_words[index].wordLists.length
      })
      return number
    },
  },
})
