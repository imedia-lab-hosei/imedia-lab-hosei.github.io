<template>
  <div class="h-screen flex flex-col overflow-hidden bg-slate-950 text-slate-200">
    <TheHeader />

    <main class="flex-grow overflow-y-auto custom-scrollbar">
      <div class="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <slot />
      </div>

      <footer class="border-t border-slate-800 bg-slate-900/50 py-12 text-center mt-12">
        <p class="text-slate-500">© 2026 Dev.Log. Built with Vue 3.</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
// 布局组件负责引入 Header
import TheHeader from '@/components/TheHeader/TheHeader.vue'
</script>

<style scoped>
/* 既然是酷炫风格，可以顺便美化一下内部滚动条 */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.2); /* 霓虹青色半透明 */
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.5);
}
</style>
