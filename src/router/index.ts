import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import i18n, { SUPPORT_LOCALES, type LocaleType } from '../locales'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/zh',
    },
    {
      path: '/:locale',
      component: { render: () => h(RouterView) },
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
          path: 'tech',
          children: [
            {
              path: 'articles',
              name: 'articles',
              component: () => import('../views/Tech/Articles/ArticlesView.vue'),
            },
            {
              path: 'webtools',
              name: 'webtools',
              component: () => import('../views/Tech/Webtools/WebtoolsView.vue'),
            },
          ],
        },
        {
          path: 'process',
          name: 'process',
          component: () => import('../views/Tech/Process/ProcessView.vue'),
        },

        {
          path: ':pathMatch(.*)*',
          name: 'NotFound',
          // 这里可以换成你专门写的 404 页面组件
          component: () => import('../views/NotFound/NotFoundView.vue'),
        },
      ],
    },
  ],
})

// 全局守卫 (逻辑保持专注：只负责校验语言是否合法)
router.beforeEach((to, from, next) => {
  const localeParam = to.params.locale as string

  // 1. 如果没有 locale 参数（极其罕见的情况），放行
  if (!localeParam) {
    return next()
  }

  // 2. 检查语言是否在白名单中
  // 如果用户访问 /jp/games (jp 不在白名单)，这里会拦截并重定向到 /zh
  // 如果用户访问 /zh/blabla (zh 在白名单)，这里会放行
  if (!SUPPORT_LOCALES.includes(localeParam as LocaleType)) {
    return next(`/${i18n.global.locale.value}`)
  }

  // 3. 同步 i18n 状态
  if (i18n.global.locale.value !== localeParam) {
    i18n.global.locale.value = localeParam as LocaleType
    document.querySelector('html')?.setAttribute('lang', localeParam)
  }

  // 4. 这里的 next() 会继续路由解析
  // 如果路径是 /zh/games，Router 会渲染 Games 组件
  // 如果路径是 /zh/abcd，Router 发现 abcd 没定义，会自动匹配到上面的 ':pathMatch(.*)*'，渲染 404 组件
  return next()
})

export default router
