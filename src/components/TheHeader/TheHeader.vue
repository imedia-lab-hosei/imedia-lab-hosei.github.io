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
import ThemeBtn from './components/ThemeBtn/ThemeBtn.vue'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher.vue'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()

const isAPIActive = (name: string) => route.name?.toString().startsWith(name)

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('header.home'),
    to: '/',
    icon: 'lucide:house',
    // 首页通常需要严格匹配，防止匹配到空字符串
    active: route.name === 'home',
  },
  {
    label: t('header.games'),
    to: '/games',
    icon: 'lucide:gamepad-2',
    active: isAPIActive('games'),
  },
  {
    label: t('header.articles'),
    to: '/articles',
    icon: 'i-lucide-book-open',
    active: isAPIActive('articles'),
  },
])
</script>

<style scoped></style>
