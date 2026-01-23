import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import i18n, { SUPPORT_LOCALES, type LocaleType } from '../locales'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/zh'
    },
    {
      // 这里的 path 定义不变
      path: '/:locale',
      component: { render: () => h(RouterView) },
      // ❌ 删除这里的 beforeEnter
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'games',
          name: 'games',
          component: () => import('../views/Maintenance/MaintenanceView.vue'),
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/Articles/ArticlesView.vue'),
        },
      ]
    }
  ]
})

// ✅ 新增：使用全局守卫处理语言切换
router.beforeEach((to, from, next) => {
  // 获取路由参数中的 locale
  const localeParam = to.params.locale as string

  // 如果当前路由没有 locale 参数（比如是 404 页面或其他特殊页面），直接放行
  if (!localeParam) {
    return next()
  }

  // 1. 检查语言是否在白名单中
  if (!SUPPORT_LOCALES.includes(localeParam as LocaleType)) {
    // 如果是无效语言，重定向到当前有效的语言，或者默认语言
    return next(`/${i18n.global.locale.value}`)
  }

  // 2. 核心：如果 URL 语言有效，且与当前 i18n 状态不一致，则切换 i18n
  if (i18n.global.locale.value !== localeParam) {
    i18n.global.locale.value = localeParam as LocaleType

    // 设置 HTML lang 属性
    document.querySelector('html')?.setAttribute('lang', localeParam)
  }

  return next()
})

export default router
