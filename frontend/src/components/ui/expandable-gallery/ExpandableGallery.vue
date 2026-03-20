<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { cn } from '@inspira-ui/plugins'

interface Props {
  images: string[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

// 只有多于 1 张图时才启用手风琴效果
const isGallery = computed(() => props.images.length > 1)

// --- Lightbox ---
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.images.length) % props.images.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.images.length
}

const onKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <!-- Accordion Gallery -->
  <div :class="cn('flex h-96 w-full gap-2', props.class)">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="
        cn(
          'relative flex h-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out cursor-pointer',
          isGallery ? 'flex-1 hover:flex-3' : 'flex-none w-full',
        )
      "
      @click="openLightbox(index)"
    >
      <img class="h-full w-full object-cover" :src="image" :alt="`Activity image ${index + 1}`" />

      <!-- Hover overlay with zoom icon -->
      <div
        class="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors duration-300 flex items-center justify-center"
      >
        <div
          class="w-9 h-9 rounded-full bg-white/0 hover:bg-white/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 scale-75 hover:scale-100"
        >
          <svg class="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l4 4" />
          </svg>
        </div>
      </div>

      <div
        v-if="!isGallery"
        class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"
      />

      <!-- Image counter for single image -->
      <div
        v-if="isGallery"
        class="absolute bottom-2 right-2 text-xs font-bold text-white/70 bg-black/40 px-1.5 py-0.5 rounded-md opacity-0 transition-opacity pointer-events-none"
      />
    </div>
  </div>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          @click="closeLightbox"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Prev button -->
        <button
          v-if="images.length > 1"
          class="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          @click="prevImage"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Image -->
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          mode="out-in"
        >
          <img
            :key="lightboxIndex"
            :src="images[lightboxIndex]"
            :alt="`Image ${lightboxIndex + 1}`"
            class="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
        </Transition>

        <!-- Next button -->
        <button
          v-if="images.length > 1"
          class="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          @click="nextImage"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Counter -->
        <div
          v-if="images.length > 1"
          class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
        >
          <button
            v-for="(_, i) in images"
            :key="i"
            class="w-2 h-2 rounded-full transition-all"
            :class="i === lightboxIndex ? 'bg-white w-5' : 'bg-white/40'"
            @click="lightboxIndex = i"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
