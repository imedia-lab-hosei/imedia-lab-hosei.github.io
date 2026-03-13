// src/modules/showcase/router.ts
import type { RouteRecordRaw } from 'vue-router'

export const showcaseRoutes: RouteRecordRaw[] = [
  {
    path: '', // 对应 /:locale/
    name: 'home',
    component: () => import('../views/Home/HomeView.vue'),
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
    component: () => import('../views/Process/ProcessView.vue'),
  },
]
