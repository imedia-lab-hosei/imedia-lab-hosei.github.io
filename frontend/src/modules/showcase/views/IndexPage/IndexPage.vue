<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Hero Section -->
    <section class="relative flex flex-col overflow-hidden" style="min-height: 55vh">
      <img
        src="/images/HomePage/TV Screens.avif"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/20 via-black/55 to-black/85" />

      <div class="relative z-10 flex-1 flex items-center justify-center py-16">
        <div class="text-center px-6 max-w-4xl mx-auto">
          <div
            class="inline-flex mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <img src="/images/hosei.png" alt="Hosei University" class="h-8 w-auto" />
          </div>

          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            {{ $t('home.hero.title') }}
          </h1>

          <p class="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {{ $t('home.intro.text') }}
          </p>

          <div class="flex flex-wrap gap-4 justify-center">
            <UButton
              size="lg"
              color="primary"
              :to="{ name: 'research', params: { locale: route.params.locale } }"
              :label="$t('header.research')"
              icon="i-heroicons-beaker"
            />
            <UButton
              size="lg"
              color="neutral"
              variant="outline"
              class="border-white/30 text-white bg-white/10 hover:bg-white/30"
              :to="{ name: 'members', params: { locale: route.params.locale } }"
              :label="$t('header.members')"
              trailing-icon="i-heroicons-arrow-right"
            />
          </div>
        </div>
      </div>

      <!-- Stats Bar - below the intro text container -->
      <div class="relative z-10 bg-primary">
        <div class="max-w-5xl mx-auto px-6 py-7">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div v-for="stat in statsData" :key="stat.label" class="text-primary-foreground">
              <div class="text-3xl font-extrabold tracking-tight">{{ stat.value }}</div>
              <div class="text-xs font-semibold opacity-75 mt-1 uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="flex items-end justify-between mb-10">
        <div>
          <p class="text-primary text-xs font-bold tracking-widest uppercase mb-2">Latest</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            {{ $t('home.news.title') }}
          </h2>
        </div>
        <UButton
          color="primary"
          variant="ghost"
          trailing-icon="i-heroicons-arrow-right"
          :label="$t('home.news.more')"
          :to="{ name: 'activities', params: { locale: route.params.locale } }"
        />
      </div>

      <div class="rounded-2xl overflow-hidden border border-border divide-y divide-border">
        <div
          v-for="(item, index) in newsData"
          :key="index"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-4 bg-card hover:bg-accent/40 transition-colors group cursor-default"
        >
          <span
            class="shrink-0 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full font-mono w-fit"
          >
            {{ item.date }}
          </span>
          <span class="text-sm text-foreground leading-relaxed flex-1">
            {{ item.content }}
          </span>
          <!-- <UIcon
            name="i-heroicons-arrow-right"
            class="shrink-0 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block"
          /> -->
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="bg-muted/30 py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">Research</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            {{ $t('home.projects.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="(project, index) in projectsData"
            :key="index"
            class="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div class="h-52 overflow-hidden bg-muted relative">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center text-muted-foreground"
              >
                <UIcon name="i-heroicons-photo" class="w-16 h-16" />
              </div>
              <div
                class="absolute inset-0 bg-linear-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div class="p-6 flex flex-col flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {{ project.tag }}
                </span>
                <span class="text-xs text-muted-foreground font-mono">{{ project.period }}</span>
              </div>
              <h3
                class="text-sm font-bold leading-snug group-hover:text-primary transition-colors flex-1"
              >
                {{ project.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Videos Section -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">Media</p>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          {{ $t('home.videos.sectionTitle') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(video, index) in videosData" :key="index" class="group">
          <div
            class="aspect-video rounded-2xl overflow-hidden border border-border group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-300 bg-black"
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
            />
          </div>
          <p
            class="mt-4 font-semibold text-sm text-foreground group-hover:text-primary transition-colors px-1"
          >
            {{ video.title }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { publications } from '../Publications/publications'
import { currentMemberCount, alumniCount } from '../AboutUs/Members/members'

const { t } = useI18n()
const route = useRoute()

const totalPublications = publications.reduce((sum, y) => sum + y.items.length, 0)

const statsData = computed(() => [
  { value: '10+', label: t('home.stats.projects') },
  { value: `${totalPublications}+`, label: t('home.stats.publications') },
  { value: `${currentMemberCount}+`, label: t('home.stats.members') },
  { value: `${alumniCount}+`, label: t('home.stats.alumni_members') },
])

const newsData = computed(() => [
  { date: '2025.12', content: t('home.news.item1') },
  { date: '2025.12', content: t('home.news.item2') },
  { date: '2025.11', content: t('home.news.item3') },
  { date: '2025.02', content: t('home.news.item4') },
  { date: '2025.02', content: t('home.news.item5') },
])

const projectsData = computed(() => [
  {
    period: '2026.01-2027.12',
    tag: 'Kayamori Foundation',
    title: t('home.projects.p5.title'),
    description: t('home.projects.p5.desc'),
    image: '/images/HomePage/Kayamori_Foundation.png',
  },
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
    tag: 'JSPS SAKURAプログラム',
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
