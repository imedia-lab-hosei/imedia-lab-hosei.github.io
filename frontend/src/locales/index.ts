import { createI18n } from 'vue-i18n'

// 1. 引入全局公共语言包
import globalZh from './languages/zh-CN'
import globalEn from './languages/en-US'
import globalJa from './languages/ja-JP'

// 2. 引入 Showcase 模块语言包
import showcaseZh from '@/modules/showcase/locales/zh-CN'
import showcaseEn from '@/modules/showcase/locales/en-US'
import showcaseJa from '@/modules/showcase/locales/ja-JP'

// 3. 未来预留：引入 Admin 模块语言包
// import adminZh from '@/modules/admin/locales/zh-CN'

// 获取浏览器语言或本地缓存
const getLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) return savedLocale

  const language = navigator.language.toLowerCase()
  return language.includes('en') ? 'en' : 'ja'
}

// 创建实例
const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    // 使用展开运算符 (...) 进行对象合并
    zh: { ...globalZh, ...showcaseZh },
    en: { ...globalEn, ...showcaseEn },
    ja: { ...globalJa, ...showcaseJa },
    // zh: { ...globalZh, ...showcaseZh, ...adminZh }, // 最终拆分前的形态
  },
})

// export const SUPPORT_LOCALES = ['zh', 'en', 'ja'] as const
export const SUPPORT_LOCALES = ['en', 'ja'] as const
export type LocaleType = (typeof SUPPORT_LOCALES)[number]

export default i18n
