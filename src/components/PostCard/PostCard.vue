<template>
  <div class="relative h-52 overflow-hidden">
    <img
      :src="post.cover"
      loading="lazy"
      class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div
      class="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-transparent"
    ></div>

    <div class="absolute top-3 left-3">
      <UBadge
        v-if="post.label"
        :label="post.label"
        variant="solid"
        class="transition-colors backdrop-blur-md bg-background/80 text-foreground border border-border/50"
      />
    </div>
  </div>

  <div class="flex flex-1 flex-col p-6">
    <div class="mb-3 flex items-center justify-between text-xs font-medium">
      <span class="uppercase tracking-wider text-primary font-bold"> Article </span>

      <span class="flex items-center gap-1 text-muted-foreground">
        <UIcon name="i-heroicons-calendar" class="h-3.5 w-3.5" />
        <TimeAgo v-if="post.date" :date="post.date" />
        <span v-else>Thinking...</span>
      </span>
    </div>

    <h3
      class="mb-2 line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary"
    >
      {{ post.title }}
    </h3>

    <p class="mb-4 line-clamp-3 flex-1 text-sm text-muted-foreground">
      {{ post.desc }}
    </p>
    <div class="flex items-center justify-between border-t border-border pt-4">
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="tag in post.tags"
          :key="tag"
          color="primary"
          variant="subtle"
          size="md"
          class="rounded font-medium"
        >
          #{{ $t(`tags.${tag}`) }}
        </UBadge>
      </div>

      <div
        class="flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        <div class="cursor-pointer text-nowrap" @click="showModal = true">
          {{ $t('base.read') }}
        </div>
        <UIcon
          name="i-heroicons-arrow-right"
          class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  </div>
  <AnimatedModalComponent :post="post" v-model:open="showModal" />
</template>

<script setup lang="ts">
import TimeAgo from './components/TimeAgo.vue'
import AnimatedModalComponent from './components/AnimatedModalComponent/index.vue'

interface Post {
  title: string
  desc: string
  cover: string
  date?: string | Date
  tags?: string[]
  path?: string
  label?: string
  content?: string
}

defineProps<{
  post: Post
}>()

import { ref } from 'vue'
const showModal = ref(false)
</script>
