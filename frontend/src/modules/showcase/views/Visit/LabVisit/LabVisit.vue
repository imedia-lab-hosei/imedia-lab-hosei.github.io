<template>
  <div class="max-w-4xl mx-auto px-6 py-24 space-y-24 bg-background min-h-screen">
    <header class="space-y-6">
      <div class="space-y-2">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
          {{ t('visit.header.title') }}
        </h1>
        <p class="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          {{ t('visit.header.update_info') }}
        </p>
      </div>
      <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {{ t('visit.header.description') }}
      </p>
    </header>

    <section class="space-y-12">
      <div class="space-y-4">
        <h2 class="text-2xl font-medium tracking-tight text-foreground">
          {{ t('visit.themes.title') }}
        </h2>
        <UDivider class="border-border" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard
          v-for="theme in researchThemes"
          :key="theme.id"
          class="bg-card border-border ring-border hover:shadow-xl transition-all duration-500 flex flex-col"
        >
          <template #header>
            <UIcon :name="theme.icon" class="w-8 h-8 text-primary mb-2" />
            <h3 class="text-lg font-medium text-foreground leading-snug">
              {{ t(theme.title) }}
            </h3>
          </template>
          <p class="text-sm text-muted-foreground leading-relaxed italic">
            {{ t(theme.description) }}
          </p>
        </UCard>
      </div>
    </section>

    <section
      class="py-12 px-8 bg-muted/30 rounded-3xl border border-border/50 relative overflow-hidden"
    >
      <div class="relative z-10 space-y-6">
        <h2 class="text-2xl font-medium text-foreground">
          {{ t('visit.environment.title') }}
        </h2>
        <p
          class="text-lg text-muted-foreground leading-relaxed italic max-w-3xl border-l-2 border-primary/20 pl-8 py-2"
        >
          {{ t('visit.environment.description') }}
        </p>
      </div>
      <UIcon
        name="i-heroicons-globe-alt"
        class="absolute -right-12 -bottom-12 w-64 h-64 text-foreground/5 opacity-10"
      />
    </section>

    <section class="space-y-12">
      <div class="space-y-4">
        <h2 class="text-2xl font-medium tracking-tight text-foreground">
          {{ t('visit.resources.title') }}
        </h2>
        <UDivider class="border-border" />
      </div>

      <div class="flex flex-wrap gap-4">
        <UButton
          v-for="link in resourceLinks"
          :key="link.id"
          :icon="link.icon"
          variant="soft"
          :to="link.url"
          class="ring-border transition-colors hover:bg-muted"
        >
          {{ t(link.label) }}
        </UButton>
      </div>
    </section>

    <section class="space-y-12 pb-24">
      <div class="space-y-4">
        <h2 class="text-2xl font-medium tracking-tight text-foreground flex items-center gap-3">
          <UIcon name="i-heroicons-calendar-days" class="w-7 h-7 text-primary" />
          {{ t('visit.tours.title') }}
        </h2>
        <UDivider class="border-border" />
      </div>

      <div class="space-y-6">
        <div
          v-for="(event, index) in labTours"
          :key="index"
          class="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border/40 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
        >
          <div class="flex-1 space-y-4">
            <div class="flex flex-wrap items-center gap-3">
              <UBadge
                size="sm"
                color="primary"
                variant="soft"
                class="font-mono tracking-widest uppercase"
              >
                {{ t(event.category) }}
              </UBadge>
              <div class="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                {{ event.location }}
              </div>
            </div>

            <div class="space-y-2">
              <h3
                class="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300"
              >
                {{ t(event.label) }}
              </h3>

              <div
                v-if="event.note"
                class="flex items-start gap-1.5 text-sm text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/30 inline-flex px-3 py-1.5 rounded-md mt-2"
              >
                <UIcon name="i-heroicons-exclamation-triangle" class="w-4 h-4 shrink-0 mt-0.5" />
                <span>{{ t(event.note) }}</span>
              </div>
            </div>
          </div>

          <div
            class="md:w-80 shrink-0 bg-muted/40 rounded-xl p-5 border border-border/50 flex flex-col justify-center"
          >
            <div class="space-y-3.5">
              <div
                v-for="(dateKey, dIdx) in event.dates"
                :key="dIdx"
                class="flex items-start gap-3"
              >
                <UIcon name="i-heroicons-clock" class="w-5 h-5 text-primary/70 shrink-0" />
                <span class="text-sm font-medium text-foreground leading-snug">
                  {{ t(dateKey) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const researchThemes = [
  {
    id: 'ai',
    icon: 'i-heroicons-cpu-chip',
    title: 'visit.themes.ai.title',
    description: 'visit.themes.ai.desc',
  },
  {
    id: 'sensor',
    icon: 'i-heroicons-eye',
    title: 'visit.themes.sensor.title',
    description: 'visit.themes.sensor.desc',
  },
  {
    id: 'compression',
    icon: 'i-heroicons-square-3-stack-3d',
    title: 'visit.themes.compression.title',
    description: 'visit.themes.compression.desc',
  },
]

const resourceLinks = [
  {
    id: 'overview',
    icon: 'i-heroicons-document-text',
    label: 'visit.resources.overview',
    url: 'https://www.zhou-lab.info/_files/ugd/c47b12_6250286067aa41849417477523437e8d.pdf',
  },
  {
    id: 'themes',
    icon: 'i-heroicons-presentation-chart-bar',
    label: 'visit.resources.themes',
    url: 'https://www.zhou-lab.info/_files/ugd/c47b12_93d51d5963ca4999bb24152bcb255210.pdf',
  },
  {
    id: 'video_1',
    icon: 'i-heroicons-play-circle',
    label: 'visit.resources.video_1',
    url: 'https://www.youtube.com/watch?v=uEQuJr7QvB4',
  },
  {
    id: 'video_2',
    icon: 'i-heroicons-play-circle',
    label: 'visit.resources.video_2',
    url: 'https://www.hosei.ac.jp/pickup/article-20210309183329/',
  },
  {
    id: 'video_3',
    icon: 'i-heroicons-play-circle',
    label: 'visit.resources.video_3',
    url: 'https://www.jst.go.jp/kisoken/aip/jyonetsu/interview/r04/zhou.html',
  },
]

const labTours = [
  {
    category: 'visit.tours.cat_open',
    // 使用数组存放 i18n 键
    dates: ['visit.tours.date_open'],
    label: 'visit.tours.open_semi',
    note: 'visit.tours.open_semi_note',
    location: 'W202',
  },
  {
    category: 'visit.tours.cat_intro',
    dates: ['visit.tours.date_intro'],
    label: 'visit.tours.senior_qa',
    location: 'South S504',
  },
  {
    category: 'visit.tours.cat_qa',
    // 包含所有的具体时间段
    dates: ['visit.tours.date_qa_1', 'visit.tours.date_qa_2', 'visit.tours.date_qa_3'],
    label: 'visit.tours.prof_qa',
    location: 'South S504',
  },
]
</script>
