// src/modules/showcase/router.ts
import type { RouteRecordRaw } from 'vue-router'

export const showcaseRoutes: RouteRecordRaw[] = [
  {
    path: '', // 对应 /:locale/
    name: 'home',
    component: () => import('../views/IndexPage/IndexPage.vue'),
  },
  {
    path: 'research',
    children: [
      {
        path: '',
        name: 'research',
        component: () => import('../views/Research/ResearchView.vue'),
      },
      {
        path: 'sensing',
        name: 'sensing',
        component: () => import('../views/Research/Sensing/SensingView.vue'),
      },
      {
        path: 'coding',
        name: 'coding',
        component: () => import('../views/Research/Coding/CodingView.vue'),
      },
      {
        path: 'compression',
        name: 'compression',
        component: () => import('../views/Research/Compression/CompressionView.vue'),
      },
      {
        path: 'processing',
        name: 'processing',
        component: () => import('../views/Research/Processing/ProcessingView.vue'),
      },
      {
        path: 'eda',
        name: 'eda',
        component: () => import('../views/Research/EDA/EDAView.vue'),
      },
    ],
  },
  {
    path: 'aboutUs',
    children: [
      {
        path: 'members',
        name: 'members',
        component: () => import('../views/AboutUs/Members/MembersView.vue'),
      },
      {
        path: 'members/jinjia-zhou',
        name: 'members-jinjia-zhou',
        component: () => import('../views/AboutUs/Members/JinjiaZhouProfile.vue'),
      },
      {
        path: 'facilities',
        name: 'facilities',
        component: () => import('../views/AboutUs/Facilities/FacilitiesView.vue'),
      },
      {
        path: 'meetings',
        name: 'meetings',
        component: () => import('../views/AboutUs/Meetings/MeetingsView.vue'),
      },
    ],
  },
  {
    path: 'publications',
    name: 'publications',
    component: () => import('../views/Publications/PublicationsView.vue'),
  },
  {
    path: 'activities',
    name: 'activities',
    component: () => import('../views/Activities/ActivitiesView.vue'),
  },
  {
    path: 'visit',
    name: 'visit',
    component: () => import('../views/Visit/LabVisit/LabVisit.vue'),
  },
]
