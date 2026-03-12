<template>
  <UButton
    class="relative flex items-center justify-center w-8 h-8 text-accent-foreground transition-all duration-300 ease-in-out"
    aria-label="Toggle Theme"
    variant="ghost"
    @click="themeStore.toggleTheme"
  >
    <transition name="icon-rotate">
      <UIcon name="line-md:sunny-loop" v-if="!themeStore.isDark" class="absolute text-xl" />
    </transition>

    <transition name="icon-rotate">
      <UIcon v-if="themeStore.isDark" name="line-md:moon-alt-loop" class="absolute text-xl" />
    </transition>
  </UButton>

</template>

<script setup lang="ts">
import { onMounted } from 'vue' // 引入 onMounted
import { useThemeStore } from '@/modules/showcase/stores/theme'

const themeStore = useThemeStore()

// 核心修改：组件挂载时初始化，读取 LocalStorage
onMounted(() => {
  themeStore.initTheme()
})
</script>

<style scoped>
/* 你的动画代码保持不变 */
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
