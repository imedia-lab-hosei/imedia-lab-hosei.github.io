<template>
  <UHeader toggle-side="left" mode="drawer">
    <template #title>
      <div>MOMOCHA.LOG</div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <!-- <UColorModeSwitch /> -->

      <UTooltip :text="$t('header.changeTheme')">
        <ThemeBtn />
      </UTooltip>
      <UTooltip :text="$t('header.changeLanguage')">
        <LanguageSwitcher></LanguageSwitcher>
      </UTooltip>
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
import ThemeBtn from '@/components/ThemeBtn/ThemeBtn.vue'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()

const isHome = computed(() => route.name === 'home')
const isMaintenance = computed(() => route.name === 'maintenance')

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('header.home'),
    to: '/',
    icon: 'i-lucide-book-open',
    active: isHome.value,
  },
  {
    label: t('header.game'),
    to: '/maintenance',
    icon: 'i-lucide-box',
    active: isMaintenance.value,
  },
])
</script>

<style scoped></style>
