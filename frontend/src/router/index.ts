// src/router/index.ts
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'
import i18n, { SUPPORT_LOCALES, type LocaleType } from '@/locales'

// 导入业务模块路由
import { showcaseRoutes } from '@/modules/showcase/router'
// import { adminRoutes } from '@/modules/admin/router' // 以后你写好 Admin 后取消这行注释

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/en',
    },
    {
      path: '/:locale',
      component: { render: () => h(RouterView) },
      children: [
        // 1. 注入展示端路由
        ...showcaseRoutes,

        // 2. 注入后台端路由 (待你创建后开启)
        // ...adminRoutes,

        // 3. 通用 404 页面（放在 children 最后）
        {
          path: ':pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/modules/showcase/views/NotFound/NotFoundView.vue'),
        },
      ],
    },
  ],
})

/**
 * 全局导航守卫
 */
router.beforeEach((to, from, next) => {
  const localeParam = to.params.locale as string

  // 1. 基础校验：如果没有语言参数，直接放行（由根路径 redirect 处理）
  if (!localeParam) return next()

  // 2. 语言合法性校验
  if (!SUPPORT_LOCALES.includes(localeParam as LocaleType)) {
    return next(`/${i18n.global.locale.value}`)
  }

  // 3. 同步 i18n 实例状态
  if (i18n.global.locale.value !== localeParam) {
    i18n.global.locale.value = localeParam as LocaleType
    document.querySelector('html')?.setAttribute('lang', localeParam)
  }

  // 4. 未来预留：可以在这里判断 to.meta.requiresAuth 执行登录校验

  return next()
})

export default router
