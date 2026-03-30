<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">
          Prospective Students
        </p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          {{ t('visit.header.title') }}
        </h1>
        <p class="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {{ t('visit.header.update_info') }}
        </p>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ t('visit.header.description') }}
        </p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <!-- Research Themes -->
      <section class="space-y-8">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ t('visit.themes.title') }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="theme in researchThemes"
            :key="theme.id"
            class="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <UIcon :name="theme.icon" class="w-5 h-5 text-primary" />
            </div>
            <div class="space-y-2">
              <h3
                class="text-base font-bold text-foreground group-hover:text-primary transition-colors"
              >
                {{ t(theme.title) }}
              </h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {{ t(theme.description) }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Environment -->
      <section class="space-y-8">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ t('visit.environment.title') }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="flex gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
          <div
            class="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-0.5"
          >
            <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 text-primary" />
          </div>
          <p class="text-base text-foreground leading-relaxed">
            {{ t('visit.environment.description') }}
          </p>
        </div>
      </section>

      <!-- Resources & Links -->
      <section class="space-y-8">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ t('visit.resources.title') }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a
            v-for="link in resourceLinks"
            :key="link.id"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div class="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <UIcon :name="link.icon" class="w-4 h-4 text-primary" />
            </div>
            <span
              class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex-1"
            >
              {{ t(link.label) }}
            </span>
            <UIcon
              name="i-heroicons-arrow-top-right-on-square"
              class="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0"
            />
          </a>
        </div>
      </section>

      <!-- Lab Tours & Schedule -->
      <section class="space-y-8 pb-8">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ t('visit.tours.title') }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="space-y-5">
          <div
            v-for="(event, index) in labTours"
            :key="index"
            class="flex flex-col md:flex-row gap-0 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors group"
          >
            <!-- Left: info -->
            <div class="flex-1 p-6 space-y-3">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {{ t(event.category) }}
                </span>
                <span class="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                  <UIcon name="i-heroicons-map-pin" class="w-3.5 h-3.5" />
                  {{ t(event.location) }}
                </span>
              </div>

              <h3
                class="text-base font-bold text-foreground group-hover:text-primary transition-colors"
              >
                {{ t(event.label) }}
              </h3>

              <div
                v-if="event.note"
                class="flex items-start gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg w-fit"
              >
                <UIcon
                  name="i-heroicons-exclamation-triangle"
                  class="w-3.5 h-3.5 shrink-0 mt-0.5"
                />
                <span>{{ t(event.note) }}</span>
              </div>
            </div>

            <!-- Right: dates -->
            <div
              class="md:w-72 shrink-0 bg-muted/40 border-t md:border-t-0 md:border-l border-border p-6 flex flex-col justify-center gap-3"
            >
              <div
                v-for="(dateKey, dIdx) in event.dates"
                :key="dIdx"
                class="flex items-start gap-2.5"
              >
                <div
                  class="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"
                >
                  <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5 text-primary" />
                </div>
                <span class="text-sm font-medium text-foreground leading-snug">
                  {{ t(dateKey) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
    url: 'https://drive.google.com/file/d/1BVQt9oIWYOzq7rE9vwMI5heW_mPw3DBA/view?usp=sharing',
  },
  {
    id: 'themes',
    icon: 'i-heroicons-presentation-chart-bar',
    label: 'visit.resources.themes',
    url: 'https://drive.google.com/file/d/1_SPhHkZK0JFHdxqExVUHoXTH_uMsSupy/view?usp=sharing',
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
  {
    id: 'video_4',
    icon: 'i-heroicons-play-circle',
    label: 'visit.resources.video_4',
    url: 'https://drive.google.com/file/d/1bHcOP3ghy-S5SR7EMwQurjY50Qjn5RCw/view?usp=sharing',
  },
]

const labTours = [
  // {
  //   category: 'visit.tours.cat_open',
  //   dates: ['visit.tours.date_open'],
  //   label: 'visit.tours.open_semi',
  //   note: 'visit.tours.open_semi_note',
  //   location: 'W202',
  // },
  {
    category: 'visit.tours.cat_intro',
    dates: ['visit.tours.date_intro', 'visit.tours.date_intro_2'],
    label: 'visit.tours.senior_qa',
    location: 'visit.tours.location_south_s504',
  },
  {
    category: 'visit.tours.cat_qa',
    dates: ['visit.tours.date_qa_1', 'visit.tours.date_qa_2'],
    label: 'visit.tours.prof_qa',
    location: 'visit.tours.location_south_s504',
  },
]
</script>
