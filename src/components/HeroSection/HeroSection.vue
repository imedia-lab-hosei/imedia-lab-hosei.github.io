<template>
  <section class="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 text-center md:text-left space-y-6 z-10">
        <div
          class="inline-block px-3 py-1 rounded-full bg-muted border border-border text-primary text-sm font-mono mb-2"
        >
          Hello, Guest
        </div>

        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight transition-colors"
        >
          欢迎来到
          <span class="bg-clip-text text-foreground animate-gradient-x"> MOMOCHA </span>
          <br />
          的茶室
        </h1>

        <p
          class="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto md:mx-0 transition-colors"
        >
          基于 Vue 3 / Ant-design / Tailwind 的个人博客。 响应式设计。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a-button
            type="primary"
            size="large"
            class="h-12 px-8 rounded-xl bg-primary text-primary-foreground border-none hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            阅读文章
          </a-button>
          <a-button
            ghost
            size="large"
            class="h-12 leading-8 px-8 rounded-xl text-muted-foreground border-border hover:border-primary hover:text-primary hover:scale-105 transition-transform"
            href="https://github.com/2446405787"
          >
            GitHub
          </a-button>
        </div>
      </div>

      <div class="flex-1 relative w-full flex justify-center">
        <div
          class="absolute inset-0 bg-gradient-end/30 blur-[80px] rounded-full animate-pulse -z-10"
        ></div>

        <div
          class="w-64 h-64 md:w-96 md:h-96 bg-card border border-border rounded-2xl shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-all duration-500"
        >
          <div class="px-1 flex justify-center w-full h-full p-2">
            <img class="w-full h-full object-cover rounded-xl" :src="'/images/yajyu.jpeg'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 可选：如果你想让渐变色动起来，可以加这个动画 */
.animate-gradient-x {
  background-size: 200% auto;
  animation: gradient-x 4s linear infinite;
}

@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
