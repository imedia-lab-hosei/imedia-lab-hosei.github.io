<template>
  <div class="h-48 overflow-hidden relative">
    <img
      :src="`${post.cover}`"
      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div
      class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"
    ></div>
  </div>

  <div class="p-6">
    <div class="flex justify-between items-center mb-3">
      <span class="text-cyan-400 text-xs font-bold uppercase tracking-wider">Tech</span>
      <span class="text-slate-500 text-xs"
        ><TimeAgo v-if="post.date" :date="post.date" /> <span v-else>暂无日期</span></span
      >
    </div>
    <h3
      class="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors"
    >
      {{ post.title }}
    </h3>
    <p class="text-slate-400 text-sm line-clamp-3 mb-4">
      {{ post.desc }}
    </p>
    <div class="flex flex-wrap gap-2 mb-4">
      <a-tag
        v-for="tag in post.tags"
        :key="tag"
        class="bg-cyan-500/10! border-cyan-500/20! text-cyan-400! rounded-md! mr-0! hover:bg-cyan-500/20! hover:border-cyan-400/50! transition-all cursor-default backdrop-blur-sm"
      >
        <span class="mr-1 text-cyan-500/80">#</span>
        {{ tag }}
      </a-tag>
    </div>
    <a
      class="inline-flex items-center text-cyan-500 hover:text-cyan-400 text-sm font-medium cursor-pointer"
    >
      Read Article
      <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import TimeAgo from './components/TimeAgo.vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const { post } = toRefs(props)
</script>
