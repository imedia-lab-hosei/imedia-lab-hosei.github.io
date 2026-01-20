<template>
  <UHeader toggle-side="left">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-lucide-book-open"
          aria-label="GitHub"
        />
        <SubscribeButton />
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
import SubscribeButton from './components/SubscribeButton.vue'

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
  {
    label: 'Figma',
    icon: 'i-simple-icons-figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank',
  },
  {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank',
  },
])
</script>

<style scoped>
/* 如果 AntD Drawer 的遮罩层在亮色模式下太深，
  可以在这里微调，或者在全局 CSS 中调整
*/
:deep(.ant-drawer-content) {
  background: transparent; /* 让背景由内部 div 控制 */
}
</style>
