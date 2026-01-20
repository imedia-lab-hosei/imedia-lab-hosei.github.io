<template>
  <section class="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 text-center md:text-left space-y-6 z-10">
        <div
          class="inline-block px-3 py-1 rounded-full bg-muted border border-border text-primary text-sm font-mono"
        >
          Hello, Guest
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
          欢迎来到
          <span class="text-primary"> MOMOCHA </span>
          <br />
          的茶室
        </h1>

        <p class="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto md:mx-0">
          基于 Vue 3 / NuxtUI / Tailwind 的个人博客。 响应式设计。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <UButton
            size="xl"
            class="px-8 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            阅读文章
          </UButton>

          <UButton
            variant="outline"
            size="xl"
            class="px-8 rounded-xl hover:border-primary hover:text-primary hover:scale-105 transition-transform"
            href="https://github.com/2446405787"
            target="_blank"
          >
            GitHub
          </UButton>
        </div>
      </div>

      <div class="flex-1 relative w-full flex justify-center">
        <div
          class="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent blur-[80px] rounded-full animate-pulse -z-10"
        ></div>

        <div
          class="w-64 h-64 md:w-96 md:h-96 bg-card dark:bg-primary border border-border rounded-2xl shadow-2xl p-2 rotate-3 hover:rotate-0 transition-transform duration-300"
        >
          <img
            class="w-full h-full object-cover rounded-xl"
            src="/images/mmc.jpg"
            alt="Momocha Avatar"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// 如果需要逻辑可在此添加
</script>
