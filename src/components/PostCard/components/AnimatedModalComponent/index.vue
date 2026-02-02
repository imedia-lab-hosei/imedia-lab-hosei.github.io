<template>
  <AnimatedModal v-model:open="open">
    <AnimatedModalBody :lock-scroll="false">
      <AnimatedModalContent>
        <div
          class="bg-background text-foreground rounded-xl max-h-[65vh] w-full overflow-y-auto no-scrollbar max-w-4xl mx-auto relative"
        >
          <div class="relative h-64 sm:h-80 md:h-96 w-full">
            <img
              :src="post.cover"
              :alt="post.title"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
            ></div>

            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-white">
              <div class="flex items-center gap-4 mb-3 text-sm text-white/80 font-medium">
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
                  {{ post.date }}
                </span>
                <div class="flex gap-2">
                  <UBadge
                    v-for="tag in post.tags?.slice(0, 2)"
                    :key="tag"
                    variant="solid"
                    color="primary"
                    class="text-black/80 font-bold"
                    size="sm"
                  >
                    {{ $t(`tags.${tag}`) }}
                  </UBadge>
                </div>
              </div>
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
              >
                {{ post.title }}
              </h2>
            </div>
          </div>

          <div class="p-6 sm:p-8 space-y-8">
            <p
              class="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium border-l-4 border-primary/70 pl-4 py-1 italic"
            >
              {{ post.desc }}
            </p>

            <hr class="border-border/60" />

            <div class="prose prose-lg prose-primary dark:prose-invert max-w-none">
              <div v-html="post.content || `<p>${$t('articles.body_empty')}</p>`"></div>
            </div>
          </div>
        </div>
      </AnimatedModalContent>
      <!-- <AnimatedModalFooter class="gap-2">
        <UButton color="neutral" variant="soft" :label="$t('base.cancel')" @click="closeModal" />
        <UButton :label="$t('base.confirm')" @click="closeModal" />
      </AnimatedModalFooter> -->
    </AnimatedModalBody>
  </AnimatedModal>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AnimatedModalComponent',
})
const open = defineModel<boolean>('open', {
  default: false,
  required: true,
})

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
</script>
