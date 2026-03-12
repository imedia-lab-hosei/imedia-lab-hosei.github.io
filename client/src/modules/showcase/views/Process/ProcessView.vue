<template>
  <UContainer class="py-12">
    <FluidCursor />
    <BgCard>
      <template #content>
        <div class="text-left">
          <div>
            <span class="text-2xl font-bold text-foreground"> {{ progressValue }}% </span>
          </div>
          <div class="mb-10">
            <UProgress v-model="progressValue" />
          </div>
          <div class="max-h-128 overflow-y-auto no-scrollbar">
            <UTimeline reverse size="xl" v-model="active" :items="items">
              <template #date="{ item }">
                {{ item.date }}
              </template>
            </UTimeline>
          </div>
          <div class="mt-8 text-center backdrop-blur-xl">
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
      </template>
    </BgCard>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 1. 获取当前语言状态
const { t, locale } = useI18n()
const progressValue = ref(25)
import type { TimelineItem } from '@nuxt/ui'
import BgCard from '@/modules/showcase/components/BgCard/BgCard.vue'

const active = ref<string | number>('compile')

const items = computed<TimelineItem[]>(() => [
  {
    date: '2026-04',
    title: t('processView.deployment.title'),
    description: t('processView.deployment.description'),
    icon: 'lucide:bolt',
    value: 'deployment',
  },
  {
    date: '2026-03-12',
    title: t('processView.compile.title'),
    description: t('processView.compile.description'),
    icon: 'lucide:computer',
    value: 'compile',
  },
  {
    date: '2026-03-12',
    title: t('processView.nginx.title'),
    description: t('processView.nginx.description'),
    icon: 'lucide:computer',
    value: 'nginx',
  },
  {
    date: '2026-02-10',
    title: t('processView.articles.title_2'),
    description: t('processView.articles.description_2'),
    icon: 'lucide:pencil',
    value: 'articles',
  },
  {
    date: '2026-02-03',
    title: t('processView.articles.title'),
    description: t('processView.articles.description'),
    icon: 'lucide:pencil',
    value: 'articles',
  },
  {
    date: '2026-02-02',
    title: t('processView.webtools.title'),
    description: t('processView.webtools.description'),
    icon: 'lucide:tool-case',
    value: 'webtools',
  },
  {
    date: '2026-01-23',
    title: t('processView.router.title'),
    description: t('processView.router.description'),
    icon: 'lucide:router',
    value: 'router',
  },
  {
    date: '2026-01-22',
    title: t('processView.language.title'),
    description: t('processView.language.description'),
    icon: 'i-lucide-palette',
    value: 'language',
  },
  {
    date: '2026-01-21',
    title: t('processView.mainPage.title'),
    description: t('processView.mainPage.description'),
    icon: 'i-lucide-code',
    value: 'mainPage',
  },

  {
    date: '2026-01-20',
    title: t('processView.start.title'),
    description: t('processView.start.description'),
    icon: 'i-lucide-rocket',
    value: 'start',
  },
])
</script>

<style scoped></style>
