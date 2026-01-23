import { createI18n } from 'vue-i18n'

// 1. 引入语言包
import zh from './languages/zh-CN'
import en from './languages/en-US'
import ja from './languages/ja-JP'
// 2. 获取浏览器语言或本地缓存
const getLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) return savedLocale

  const language = navigator.language.toLowerCase()
  return language.includes('zh') ? 'zh' : 'en'
}

// 3. 创建实例
const i18n = createI18n({
  legacy: false, // 必须为 false 以支持 Composition API
  locale: getLocale(), // 默认语言
  fallbackLocale: 'en', // 备用语言
  globalInjection: true, // 全局注册 $t
  messages: {
    zh,
    en,
    ja,
  },
})

export const SUPPORT_LOCALES = ['zh', 'en', 'ja'] as const
export type LocaleType = typeof SUPPORT_LOCALES[number]

export default i18n
