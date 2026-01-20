<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { SyncOutlined } from '@ant-design/icons-vue'

// 直接使用 Store
const themeStore = useThemeStore()
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="relative flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring"
    aria-label="Toggle Theme"
  >
    <transition name="icon-rotate">
      <SyncOutlined v-if="!themeStore.isDark" class="absolute text-xl text-yellow-500" />
    </transition>

    <transition name="icon-rotate">
      <SyncOutlined v-if="themeStore.isDark" class="absolute text-xl text-primary" />
    </transition>
  </button>
</template>

<style scoped>
/* 旋转动画 */
.icon-rotate-enter-active,
.icon-rotate-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-rotate-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-rotate-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
