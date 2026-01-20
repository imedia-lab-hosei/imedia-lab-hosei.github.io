<template>
  <section class="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 text-center md:text-left space-y-6 z-10">
        <div
          class="inline-block px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-sm font-mono mb-2 border border-slate-700"
        >
          Hello, Guest
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          欢迎来到
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            >MOMOCHA</span
          ><br />
          的茶室
        </h1>
        <p class="text-slate-400 text-base md:text-xl max-w-2xl mx-auto md:mx-0">
          基于 Vue 3 / Ant-desgin / Tailwind 的个人博客。 响应式设计。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a-button
            type="primary"
            size="large"
            class="!h-12 !px-8 !rounded-xl !bg-cyan-600 !border-none hover:!scale-105 transition-transform"
          >
            阅读文章
          </a-button>
          <a-button
            ghost
            size="large"
            class="!h-12 !leading-[2rem] !px-8 !rounded-xl !text-slate-300 !border-slate-600 hover:!border-white hover:!text-white hover:!scale-105 transition-transform"
            href="https://github.com/2446405787"
          >
            GitHub
          </a-button>
        </div>
      </div>

      <div class="flex-1 relative w-full flex justify-center">
        <div class="absolute inset-0 bg-white blur-[80px] rounded-full animate-pulse -z-10"></div>
        <div
          class="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-white to-slate-100 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-all duration-500"
        >
          <!-- <span class="text-slate-600 font-mono text-6xl">&lt;/&gt;</span> -->
          <div class="px-1 flex justify-center">
            <img class="px-2" :src="'/images/yajyu.jpeg'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
