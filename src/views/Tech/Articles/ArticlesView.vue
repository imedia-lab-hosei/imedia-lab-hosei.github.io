<template>
  <UContainer class="py-12">
    <div class="mb-12 text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight text-foreground">
        {{ $t('articles.title') }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
        {{ $t('articles.subtitle') }}
      </p>

      <div class="max-w-md mx-auto mt-8">
        <UInput
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass"
          :placeholder="$t('articles.search_placeholder')"
          size="lg"
          class="w-full"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-10">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="toggleTag(tag)"
        class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border"
        :class="[
          selectedTag === tag
            ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
            : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground',
        ]"
      >
        {{ tag === 'All' ? $t('articles.filter_all') : $t(`tags.${tag}`) }}
      </button>
    </div>

    <div v-if="filteredArticles.length > 0">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="post in filteredArticles"
          :key="post.id"
          class="flex flex-col h-full group relative bg-card text-card-foreground border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20"
        >
          <PostCard :post="post" />
        </div>
      </div>
    </div>

    <div v-else class="text-center py-24">
      <div class="inline-flex p-4 rounded-full bg-muted mb-4">
        <UIcon name="i-heroicons-document-magnifying-glass" class="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 class="text-lg font-semibold text-foreground mb-2">
        {{ $t('articles.no_results_title') }}
      </h3>
      <p class="text-muted-foreground max-w-sm mx-auto">
        {{ $t('articles.no_results_desc', { query: searchQuery }) }}
      </p>
      <button @click="resetFilter" class="mt-6 text-primary hover:underline text-sm font-medium">
        {{ $t('articles.clear_filter') }}
      </button>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PostCard from '@/components/PostCard/PostCard.vue'
import { usePosts } from '@/composables/usePosts'
import type { Post } from '@/composables/usePosts'

const { posts } = usePosts()

// --- 数据源 (模拟 JSON) ---
// 实际开发中，这里可以替换为 Content 模块的 queryContent() 或者 API 调用
const articles = computed<Post[]>(() => posts.value)
// --- 状态与逻辑 ---
const searchQuery = ref('')
const selectedTag = ref('All')

// 1. 提取所有唯一的标签
const allTags = computed(() => {
  const tags = new Set<string>()
  articles.value.forEach((article) => article.tags.forEach((tag) => tags.add(tag)))
  return ['All', ...Array.from(tags)]
})

// 2. 过滤逻辑
const filteredArticles = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  const tag = selectedTag.value

  return articles.value.filter((article) => {
    // 标签匹配
    const matchesTag = tag === 'All' || article.tags.includes(tag)

    // 搜索匹配 (标题或摘要)
    const matchesSearch =
      article.title.toLowerCase().includes(query) || article.desc.toLowerCase().includes(query)

    return matchesTag && matchesSearch
  })
})

// 3. 交互方法
const toggleTag = (tag: string) => {
  // 如果点击当前已选中的标签（且不是All），则取消选择回到All
  if (selectedTag.value === tag && tag !== 'All') {
    selectedTag.value = 'All'
  } else {
    selectedTag.value = tag
  }
}

const resetFilter = () => {
  searchQuery.value = ''
  selectedTag.value = 'All'
}
</script>
