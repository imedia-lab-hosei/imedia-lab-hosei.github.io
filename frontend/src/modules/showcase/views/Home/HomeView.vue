<template>
  <HeroSection />
  <div v-if="loading">加载中...</div>
    <div v-else class="text-primary font-bold">
      {{ message }}
    </div>
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
        v-for="post in articles"
        :key="post.id"
        class="flex flex-col h-full group relative bg-card text-card-foreground border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/modules/showcase/components/HeroSection/HeroSection.vue'
import PostCard from '@/modules/showcase/components/PostCard/PostCard.vue'
import { usePosts, type TypePost } from '@/modules/showcase/composables/usePosts'
import { computed } from 'vue'




const { posts } = usePosts()
//------------------------------------------------------
import { ref, onMounted } from 'vue'
import { getHelloMessage } from '@/modules/showcase/api/getFristMsg'
const message = ref<string>('')
const loading = ref(false)
const loadData = async () => {
  loading.value = true
  try {
    // 像调用普通函数一样使用它
    const res = await getHelloMessage()
    if (res.success) {
      message.value = res.data
    }
  } catch (error) {
    console.error('获取失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
})
//------------------------------------------------------


const articles = computed<TypePost[]>(() => posts.value.slice(0, 3))
</script>
