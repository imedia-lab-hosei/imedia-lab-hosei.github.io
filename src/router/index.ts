import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/Maintenance/MaintenanceView.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/Articles/ArticlesView.vue'),
    },
  ],
})

export default router
