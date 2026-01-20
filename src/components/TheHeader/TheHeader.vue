<template>
  <UHeader toggle-side="left">
    <template #title>
      <Logo class="h-6 w-auto" />
      <div>MOMOCHA.LOG</div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <!-- <UColorModeSwitch /> -->

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
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
    active: route.path.startsWith('/maintenance'),
  },
])
</script>

<style scoped></style>
