<template>
  <UHeader toggle-side="left" mode="drawer">
    <template #title>
      <div class="font-bold"><span class="text-primary">MOMOCHA</span>.LOG</div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <!-- <UColorModeSwitch /> -->

      <div class="flex items-center gap-2">
        <ThemeBtn />

        <div class="inline-flex"><LanguageSwitcher /></div>

        <div class="inline-flex"><ThemeSwitcher /></div>
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
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

// 辅助函数：判断当前路由名称是否匹配
const isAPIActive = (name: string) => route.name === name

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('header.home'),
    // 2. 核心修改：使用对象格式，带上 name 和 params
    // 这样 router 会自动生成 /zh 或 /en
    to: { name: 'home', params: { locale: locale.value } },
    icon: 'lucide:house',
    active: isAPIActive('home'),
  },
  {
    label: t('header.games'),
    to: { name: 'games', params: { locale: locale.value } },
    icon: 'lucide:gamepad-2',
    active: isAPIActive('games'),
  },
  {
    label: t('header.articles'),
    to: { name: 'articles', params: { locale: locale.value } },
    icon: 'i-lucide-book-open',
    active: isAPIActive('articles'),
  },
    {
    label: t('header.process'),
    to: { name: 'process', params: { locale: locale.value } },
    icon: 'lucide:clipboard-clock',
    active: isAPIActive('process'),
  },
])
</script>
