<template>
  <div class="relative min-h-[80vh] flex items-center justify-center">
    <div class="relative z-10 w-full max-w-2xl p-px shadow-2xl">
      <div class="bg-card/90 rounded-[23px] p-8 md:p-16">
        <div>
          <span class="text-2xl font-bold text-foreground font-mono"> {{ progressValue }}% </span>
        </div>

        <div class="mb-10">
          <UProgress v-model="progressValue" />
        </div>
        <div>
          <UTimeline size="xs" :default-value="2" :items="items" />
        </div>
        <div class="text-center backdrop-blur-xl">
          <div>
            <UButton
              ghost
              icon="line-md:arrow-left"
              @click="$router.push({ name: 'home', params: { locale: locale } })"
            >
              {{ $t('maintenanceView.back') }}
            </UButton>
          </div>
        </div>
      </div>
    </div>
    <FluidCursor />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 1. 获取当前语言状态
const { t, locale } = useI18n()
const progressValue = ref(20)
import type { TimelineItem } from '@nuxt/ui'

const items = computed<TimelineItem[]>(() => [
  {
    date: '2025-03-15',
    // 使用 t('key') 替代硬编码字符串
    title: t('processView.kickoff.title'),
    description: t('processView.kickoff.description'),
    icon: 'i-lucide-rocket',
    status: 'completed',
  },
  {
    date: '2025-03-22',
    title: t('processView.design.title'),
    description: t('processView.design.description'),
    icon: 'i-lucide-palette',
    status: 'completed',
  },
  {
    date: '2025-03-29',
    title: t('processView.development.title'),
    description: t('processView.development.description'),
    icon: 'i-lucide-code',
    status: 'current',
  },
  {
    date: '2025-04-05',
    title: t('processView.deployment.title'),
    description: t('processView.deployment.description'),
    icon: 'i-lucide-check-circle',
    status: 'pending',
  },
])
</script>

<style scoped></style>
