<template>
  <AnimatedModal v-slot="{ closeModal }" v-model:open="open">
    <AnimatedModalBody :lock-scroll="false">
      <AnimatedModalContent>
        <h3 class="text-highlighted text-xl font-semibold">{{ post.title }}</h3>
        <p class="text-muted-foreground mt-4 text-sm">
          {{ post.desc }}
        </p>
        <img :src="post.cover" loading="lazy" class="mt-8 h-full w-full object-cover" />
      </AnimatedModalContent>
      <AnimatedModalFooter class="gap-2">
        <UButton color="neutral" variant="soft" :label="$t('base.cancel')" @click="closeModal" />
        <UButton :label="$t('base.confirm')" @click="closeModal" />
      </AnimatedModalFooter>
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
}

defineProps<{
  post: Post
}>()
</script>
