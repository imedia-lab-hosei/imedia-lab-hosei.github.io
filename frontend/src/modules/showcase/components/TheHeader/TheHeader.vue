<template>
  <UHeader toggle-side="left" mode="drawer">
    <template #title>
      <div class="font-bold"><span class="text-primary">iMedia</span> Lab</div>
    </template>

    <UNavigationMenu
      content-orientation="vertical"
      :items="items"
      :ui="navigationMenuUi"
    />

    <template #right>
      <!-- <UColorModeSwitch /> -->

      <div class="flex items-center gap-2">
        <ThemeBtn />

        <div class="inline-flex"><LanguageSwitcher /></div>

        <div class="inline-flex"><ThemeSwitcher /></div>
      </div>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        :ui="navigationMenuUi"
        class="-mx-2.5"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n' // 引入 useI18n
import ThemeBtn from './components/ThemeBtn/ThemeBtn.vue'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher.vue'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.vue'

// 1. 获取当前语言状态
const { t, locale } = useI18n()

const route = useRoute()

const navigationMenuUi = {
  content: 'min-w-[20rem] max-w-[28rem]',
  childItem: 'min-w-0',
  childLink: 'items-start',
  childLinkWrapper: 'min-w-0',
  childLinkLabel: 'whitespace-normal break-words leading-snug',
}

// 辅助函数：判断当前路由名称是否匹配
const isAPIActive = (name: string) => route.name === name
const isGroupActive = (names: string[]) => names.includes(route.name as string)

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('header.home'),
    // 2. 核心修改：使用对象格式，带上 name 和 params
    // 这样 router 会自动生成 /zh 或 /en
    to: { name: 'home', params: { locale: locale.value } },
    // icon: 'lucide:house',
    active: isAPIActive('home'),
  },
  {
    label: t('header.research'),
    // icon: 'lucide:text-search',
    active: isGroupActive(['sensing', 'coding', 'compression', 'processing', 'eda']),
    children: [
      {
        label: t('header.sensing'),
        to: { name: 'sensing', params: { locale: locale.value } },
        // icon: 'lucide:book',
        active: isAPIActive('sensing'),
      },

      {
        label: t('header.coding'),
        to: { name: 'coding', params: { locale: locale.value } },
        // icon: 'lucide:code',
        active: isAPIActive('coding'),
      },
      {
        label: t('header.compression'),
        to: { name: 'compression', params: { locale: locale.value } },
        active: isAPIActive('compression'),
      },

      {
        label: t('header.processing'),
        to: { name: 'processing', params: { locale: locale.value } },
        // icon: 'lucide:tool-case',
        active: isAPIActive('processing'),
      },
      {
        label: t('header.eda'),
        to: { name: 'eda', params: { locale: locale.value } },
        // icon: 'lucide:tool-case',
        active: isAPIActive('eda'),
      },
    ],
  },
  {
    label: t('header.aboutUs'),
    // icon: 'lucide:text-search',
    active: isGroupActive(['members', 'facilities', 'meetings']),
    children: [
      {
        label: t('header.members'),
        to: { name: 'members', params: { locale: locale.value } },
        // icon: 'lucide:book',
        active: isAPIActive('members'),
      },

      {
        label: t('header.facilities'),
        to: { name: 'facilities', params: { locale: locale.value } },
        // icon: 'lucide:building',
        active: isAPIActive('facilities'),
      },

      {
        label: t('header.meetings'),
        to: { name: 'meetings', params: { locale: locale.value } },
        // icon: 'lucide:tool-case',
        active: isAPIActive('meetings'),
      },
    ],
  },
  {
    label: t('header.publications'),
    to: { name: 'publications', params: { locale: locale.value } },
    // icon: 'lucide:house',
    active: isAPIActive('publications'),
  },
  {
    label: t('header.activities'),
    to: { name: 'activities', params: { locale: locale.value } },
    // icon: 'lucide:house',
    active: isAPIActive('activities'),
  },
  {
    label: t('header.visit'),
    to: { name: 'visit', params: { locale: locale.value } },
    // icon: 'lucide:house',
    active: isAPIActive('visit'),
  },
])
</script>
