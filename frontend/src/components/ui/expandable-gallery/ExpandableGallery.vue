<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@inspira-ui/plugins'

interface Props {
  images: string[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

// 只有多于 1 张图时才启用手风琴效果
const isGallery = computed(() => props.images.length > 1)
</script>

<template>
  <div :class="cn('flex h-96 w-full gap-2', props.class)">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="
        cn(
          'relative flex h-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out',
          // 核心修复逻辑
          isGallery ? 'flex-1 cursor-pointer hover:flex-3' : 'flex-none w-full',
        )
      "
    >
      <img class="h-full w-full object-cover" :src="image" :alt="`Activity image ${index}`" />

      <div
        v-if="!isGallery"
        class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"
      />
    </div>
  </div>
</template>
