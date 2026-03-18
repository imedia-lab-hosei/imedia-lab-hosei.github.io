<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <section
      class="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <img
        src="/images/HomePage/TV Screens.avif"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          {{ $t('home.hero.title') }}
        </h1>
        <!-- <p class="mt-4 text-2xl md:text-3xl font-medium text-white/90 tracking-widest">
          {{ $t('home.hero.subtitle') }}
        </p> -->
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-6 py-16 text-center">
      <p class="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
        "{{ $t('home.intro.text') }}"
      </p>
    </div>

    <section class="max-w-5xl mx-auto px-6 py-12">
      <div
        class="flex items-end justify-between mb-8 border-b border-gray-200 dark:border-gray-800 pb-4"
      >
        <h2 class="text-3xl font-bold tracking-tight text-primary uppercase">
          {{ $t('home.news.title') }}
        </h2>
        <UButton
          color="primary"
          variant="ghost"
          icon="i-heroicons-arrow-right"
          :label="$t('home.news.more')"
        />
      </div>
      <div class="space-y-3">
        <div
          v-for="(item, index) in newsData"
          :key="index"
          class="flex flex-col md:flex-row gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors group"
        >
          <span class="text-primary font-mono font-medium">{{ item.date }}</span>
          <span class="text-foreground group-hover:translate-x-1 transition-transform">{{
            item.content
          }}</span>
        </div>
      </div>
    </section>

    <section class="bg-gray-50/50 dark:bg-gray-900/50 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2
          class="text-3xl font-bold text-center mb-16 underline decoration-primary decoration-4 underline-offset-8"
        >
          {{ $t('home.projects.title') }}
        </h2>
        <div class="grid grid-cols-1 gap-12">
          <div
            v-for="(project, index) in projectsData"
            :key="index"
            class="flex flex-col lg:flex-row bg-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 group shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="lg:w-2/5 overflow-hidden bg-gray-100 dark:bg-gray-800 h-64 lg:h-auto">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                <UIcon name="i-heroicons-photo" class="w-12 h-12" />
              </div>
            </div>

            <div class="lg:w-3/5 p-8 flex flex-col justify-center">
              <span class="text-xs font-bold text-primary tracking-widest uppercase mb-2">
                {{ project.period }} {{ project.tag }}
              </span>
              <h3
                class="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug"
              >
                {{ project.title }}
              </h3>
              <!-- <p class="text-muted-foreground leading-relaxed text-sm">
                {{ project.description }}
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(video, index) in videosData" :key="index" class="group">
          <h3
            class="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors"
          >
            {{ video.title }}
          </h3>

          <div
            class="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-black"
          >
            <iframe
              class="w-full h-full"
              :src="`https://www.youtube.com/embed/${video.youtubeId}`"
              :title="video.title"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// News 数据：内容使用 i18n Key
const newsData = computed(() => [
  { date: '2025.12', content: t('home.news.item1') },
  { date: '2025.12', content: t('home.news.item2') },
  { date: '2025.11', content: t('home.news.item3') },
  { date: '2025.02', content: t('home.news.item4') },
  { date: '2025.02', content: t('home.news.item5') },
])

// Project 数据
const projectsData = computed(() => [
  {
    period: '2025.04-2029.03',
    tag: 'JSPS KAKENHI',
    title: t('home.projects.p1.title'),
    description: t('home.projects.p1.desc'),
    image: '/images/HomePage/JSPS.avif',
  },
  {
    period: '2022.04-2026.03',
    tag: 'JSPS KAKENHI',
    title: t('home.projects.p2.title'),
    description: t('home.projects.p2.desc'),
    image: '/images/HomePage/JSPS2.avif',
  },
  {
    period: '2022.04-2024.03',
    tag: 'JSPS フランスとの共同研究(MEAE-MESRI)(SAKURAプログラム)',
    title: t('home.projects.p3.title'),
    description: t('home.projects.p3.desc'),
    image: '/images/HomePage/JSPS3.avif',
  },
  {
    period: '2017.10-2021.06',
    tag: 'JST PRESTO',
    title: t('home.projects.p4.title'),
    description: t('home.projects.p4.desc'),
    image: '/images/HomePage/JSPS4.avif',
  },
])

const videosData = computed(() => [
  {
    title: t('home.videos.v1'),
    youtubeId: 'uEQuJr7QvB4',
  },
  {
    title: t('home.videos.v2'),
    youtubeId: 'zWWHLwuWms0',
  },
])
</script>
