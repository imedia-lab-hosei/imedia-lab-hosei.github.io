<template>
  <UHeader toggle-side="left" mode="drawer">
    <template #title>
      <div>MOMOCHA.LOG</div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <!-- <UColorModeSwitch /> -->

      <UTooltip text="Change Theme">
        <ThemeBtn />
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
const route = useRoute()

const isHome = computed(() => route.name === 'home')
const isMaintenance = computed(() => route.name === 'maintenance')

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-book-open',
    active: isHome.value,
  },
  {
    label: 'Components',
    to: '/maintenance',
    icon: 'i-lucide-box',
    active: isMaintenance.value,
  },
])
</script>

<style scoped></style>
