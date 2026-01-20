<template>
  <div class="h-screen flex flex-col overflow-hidden bg-background text-foreground">
    <TheHeader class="h-48 sticky top-0 z-50" />

    <div
      class="absolute inset-0 z-0 opacity-40 pointer-events-none"
      style="
        background-image:
          linear-gradient(var(--color-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
      "
    ></div>
    <UMain class="grow overflow-y-auto custom-scrollbar">
      <UContainer class="relative z-10">
        <slot />
      </UContainer>
      <UFooter class="border-t border-border bg-muted/30 backdrop-blur-sm py-12 text-center mt-12">
        <p class="text-muted-foreground text-sm">© 2026 Dev.Log. Built with Vue 3 & Tailwind v4.</p>
      </UFooter>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader/TheHeader.vue'
</script>

<style scoped>
/* 改造滚动条：使用 CSS 变量
  注意：由于我们使用了 oklch 变量，推荐使用 color-mix 来处理透明度
*/
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  /* 旧写法: background: rgba(6, 182, 212, 0.2);
     新写法: 使用 var(--primary) 并混合 80% 的透明色
  */
  background: color-mix(in srgb, var(--primary), transparent 80%);
  border-radius: 10px;
  transition: background 0.3s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  /* 悬停时加深颜色，混合 50% 透明色 */
  background: color-mix(in srgb, var(--primary), transparent 50%);
}
</style>
