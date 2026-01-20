<template>
  <div
    class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300"
  >
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

    <div
      class="relative z-10 w-full max-w-2xl p-px rounded-3xl bg-linear-to-br from-gradient-start via-primary to-gradient-end animate-gradient-xy shadow-2xl"
    >
      <div
        class="bg-card/90 rounded-[23px] p-8 md:p-16 text-center backdrop-blur-xl transition-colors duration-300"
      >
        <div class="relative w-24 h-24 mx-auto mb-8">
          <div class="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
          <div
            class="absolute inset-0 rounded-full border border-primary/50 flex items-center justify-center bg-card"
          >
            <loading-outlined class="text-4xl text-primary" />
          </div>
        </div>

        <div class="space-y-6">
          <h1 class="text-3xl md:text-5xl font-black text-foreground tracking-tighter">
            UNDER
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-gradient-start to-gradient-end"
              >CONSTRUCTION</span
            >
          </h1>

          <div class="flex items-center justify-center gap-3 font-mono text-sm text-primary/90">
            <span class="px-2 py-1 border border-primary/30 rounded bg-primary/5"
              >STATUS: YAJYU</span
            >
            <span class="animate-pulse text-primary">●</span>
            <span class="px-2 py-1 border border-primary/30 rounded bg-primary/5"
              >VER: 11.4.514</span
            >
          </div>

          <p class="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
            当前页面维护中，请稍后再来吧 O.O
          </p>
        </div>

        <div class="mt-10">
          <a-button
            type="primary"
            ghost
            class="h-12 px-8 rounded-full transition-all group overflow-hidden border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
            @click="$router.push('/')"
          >
            <div class="flex items-center justify-center gap-2">
              <left-outlined
                class="text-sm leading-none group-hover:-translate-x-1 transition-transform"
              />
              <span class="leading-none font-medium">返回首页</span>
            </div>
          </a-button>
        </div>
      </div>
    </div>

    <div
      class="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 blur-[100px] animate-bounce-slow pointer-events-none"
    ></div>
    <div
      class="absolute bottom-20 left-[10%] w-80 h-80 bg-gradient-end/10 blur-[100px] animate-pulse pointer-events-none"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { LoadingOutlined, LeftOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
/* 容器边框流光动画 */
@keyframes gradient-xy {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.animate-gradient-xy {
  background-size: 200% 200%;
  animation: gradient-xy 6s ease infinite;
}

/* 慢速漂浮 */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 5s ease-in-out infinite;
}
</style>
