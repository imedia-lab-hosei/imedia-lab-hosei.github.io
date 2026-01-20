<template>
  <div class="relative min-h-[80vh] flex items-center justify-center">
    <div class="relative z-10 w-full max-w-2xl p-px shadow-2xl">
      <div class="bg-card/90 rounded-[23px] p-8 md:p-16 text-center backdrop-blur-xl">
        <div class="relative w-24 h-24 mx-auto mb-8">
          <div class="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
          <div
            class="absolute inset-0 rounded-full border border-primary/50 flex items-center justify-center bg-card"
          >
            <UIcon name="line-md:loading-loop" class="size-12" />
          </div>
        </div>

        <div class="space-y-6">
          <div>
            UNDER
            <span>CONSTRUCTION</span>
          </div>

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
          <UButton ghost @click="$router.push('/')">
            <div class="px-2 py-1 flex items-center justify-center gap-2">
              <UIcon name="line-md:arrow-left" class="size-5" />
              <span>返回首页</span>
            </div>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
