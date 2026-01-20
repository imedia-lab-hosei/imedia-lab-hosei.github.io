<template>
  <div class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image:
          linear-gradient(#1e293b 1px, transparent 1px),
          linear-gradient(90deg, #1e293b 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>

    <div
      class="relative z-10 w-full max-w-2xl p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 animate-gradient-xy"
    >
      <div class="bg-slate-950 rounded-[23px] p-8 md:p-16 text-center backdrop-blur-3xl">
        <div class="relative w-24 h-24 mx-auto mb-8">
          <div class="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping"></div>
          <div
            class="absolute inset-0 rounded-full border border-cyan-500/50 flex items-center justify-center"
          >
            <loading-outlined class="text-4xl text-cyan-400" />
          </div>
        </div>

        <div class="space-y-4">
          <h1 class="text-3xl md:text-5xl font-black text-white tracking-tighter">
            UNDER
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              >CONSTRUCTION</span
            >
          </h1>

          <div class="flex items-center justify-center gap-2 font-mono text-sm text-cyan-500/80">
            <span class="px-2 py-0.5 border border-cyan-500/30 rounded">STATUS: YAJYU</span>
            <span class="animate-pulse">●</span>
            <span class="px-2 py-0.5 border border-cyan-500/30 rounded">VER: 11.4.514</span>
          </div>

          <p class="text-slate-400 text-base md:text-lg max-w-md mx-auto leading-relaxed pt-4">
            当前页面维护中，请稍后再来吧 O.O
          </p>
        </div>

        <div class="mt-10">
          <a-button
            type="primary"
            ghost
            class="!border-slate-700 !text-slate-300 hover:!border-cyan-500 hover:!text-cyan-400 !h-12 !px-8 !rounded-full transition-all group overflow-hidden"
            @click="$router.push('/')"
          >
            <div class="flex items-center justify-center gap-2">
              <left-outlined
                class="text-base leading-none group-hover:-translate-x-1 transition-transform"
              />
              <span class="leading-none">返回首页</span>
            </div>
          </a-button>
        </div>
      </div>
    </div>

    <div
      class="absolute top-20 right-[10%] w-24 h-24 bg-blue-500/10 blur-3xl animate-bounce-slow"
    ></div>
    <div
      class="absolute bottom-20 left-[10%] w-32 h-32 bg-purple-500/10 blur-3xl animate-pulse"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { LoadingOutlined, LeftOutlined } from '@ant-design/icons-vue'
import AnimatedModal from '@/components/PostCard/PostCard.vue'
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
  background-size: 400% 400%;
  animation: gradient-xy 10s ease infinite;
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

/* 强制修改 AntD 按钮在 Ghost 模式下的悬停效果 */
:deep(.ant-btn-background-ghost:hover) {
  background: rgba(6, 182, 212, 0.05) !important;
}
</style>
