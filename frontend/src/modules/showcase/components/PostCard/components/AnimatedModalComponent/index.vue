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

            <div
              class="max-w-3xl mx-auto space-y-12"
              v-if="post.content && post.content.length > 0"
            >
              <template v-for="block in post.content" :key="block.id">
                <div v-if="block.type === 'intro'" class="relative">
                  <p class="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
                    {{ block.content }}
                  </p>
                  <div class="mt-6 h-1 w-20 bg-primary rounded-full"></div>
                </div>

                <section v-else-if="block.type === 'section'" class="space-y-6">
                  <h2
                    class="text-2xl font-bold tracking-tight text-foreground flex items-center gap-3"
                  >
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold"
                      >#</span
                    >
                    {{ block.title }}
                  </h2>

                  <p
                    v-if="block.content"
                    class="text-base leading-7 text-muted-foreground bg-muted/30 p-4 rounded-lg border border-border/50"
                  >
                    {{ block.content }}
                  </p>

                  <div v-if="block.listItems" class="grid gap-4 sm:grid-cols-1">
                    <div
                      v-for="(item, idx) in block.listItems"
                      :key="idx"
                      class="group relative overflow-hidden rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <div
                        class="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300"
                      ></div>

                      <h3
                        class="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors"
                      >
                        {{ item.label }}
                      </h3>
                      <p class="text-sm leading-6 text-muted-foreground">
                        {{ item.desc }}
                      </p>
                    </div>
                  </div>
                </section>

                <aside
                  v-else-if="block.type === 'note'"
                  class="flex flex-col sm:flex-row gap-4 items-start rounded-lg border border-primary/20 bg-primary/5 p-6"
                >
                  <UIcon name="lucide:info" class="w-6 h-6 text-primary shrink-0" />
                  <div class="space-y-1">
                    <p
                      class="font-medium text-foreground text-sm uppercase tracking-wider opacity-70"
                    >
                      Key Takeaway
                    </p>
                    <p class="text-foreground/80 leading-relaxed italic">
                      {{ block.content }}
                    </p>
                  </div>
                </aside>
                <p v-else-if="block.type === 'html'" v-html="block.content"></p>
              </template>
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
import type { TypePost } from '@/modules/showcase/composables/usePosts'
defineOptions({
  name: 'AnimatedModalComponent',
})
const open = defineModel<boolean>('open', {
  default: false,
  required: true,
})

defineProps<{
  post: TypePost
}>()
</script>
