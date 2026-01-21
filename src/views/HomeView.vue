<template>
  <HeroSection />
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="flex items-center justify-between mb-8">
      <div
        class="text-3xl font-bold text-foreground border-l-4 border-primary pl-4 transition-colors"
      >
        {{ $t('HomeView.newArticle') }}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div
        v-for="post in posts"
        :key="post.id"
        class="group relative bg-card text-card-foreground border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection/HeroSection.vue'
import PostCard from '@/components/PostCard/PostCard.vue'
import { usePosts } from '@/composables/usePosts'

const { posts } = usePosts()
</script>
