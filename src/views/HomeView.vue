<template>
  <HeroSection />
  <div class="max-w-7xl mx-auto px-6 py-6">
    <h2 class="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">最新文章</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <article
        v-for="post in posts"
        :key="post.id"
        class="group relative bg-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/20"
      >
        <PostCard :post="post" />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection/HeroSection.vue'
import PostCard from '@/components/PostCard/PostCard.vue'
import { usePosts } from '@/composables/usePosts'

const { posts } = usePosts()
</script>
