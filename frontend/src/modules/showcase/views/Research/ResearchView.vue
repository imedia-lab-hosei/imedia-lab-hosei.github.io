<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">
          {{ $t('header.research') }}
        </p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('research.overview.title') }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ $t('research.overview.description') }}
        </p>
      </div>
    </div>

    <!-- Research Areas -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 gap-8">
        <RouterLink
          v-for="area in researchAreas"
          :key="area.routeName"
          :to="{ name: area.routeName, params: { locale: route.params.locale } }"
          class="group flex flex-col lg:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
        >
          <!-- Image -->
          <div class="lg:w-2/5 h-60 lg:h-auto overflow-hidden bg-muted shrink-0">
            <img
              :src="area.image"
              :alt="area.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-col justify-center p-8 lg:p-10 gap-4">
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
              >
                <UIcon :name="area.icon" class="w-4 h-4 text-primary" />
              </div>
              <span class="text-xs font-bold text-primary tracking-widest uppercase">
                {{ $t('header.research') }}
              </span>
            </div>

            <h2
              class="text-2xl md:text-3xl font-extrabold tracking-tight group-hover:text-primary transition-colors"
            >
              {{ area.title }}
            </h2>

            <p class="text-muted-foreground leading-relaxed line-clamp-3">
              {{ area.intro }}
            </p>

            <div class="flex items-center gap-2 text-sm font-semibold text-primary mt-2">
              <span>{{ $t('research.overview.explore') }}</span>
              <UIcon
                name="i-heroicons-arrow-right"
                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const researchAreas = computed(() => [
  {
    routeName: 'sensing',
    title: t('header.sensing'),
    intro: t('project_detail.intro'),
    image: '/images/Research/Sensing/image1.avif',
    icon: 'i-heroicons-signal',
  },
  {
    routeName: 'coding',
    title: t('header.coding'),
    intro: t('project_detail_coding.intro'),
    image: '/images/Research/Coding/image1.avif',
    icon: 'i-heroicons-film',
  },
  {
    routeName: 'processing',
    title: t('header.processing'),
    intro: t('project_detail_processing.intro'),
    image: '/images/Research/Processing/image1.avif',
    icon: 'i-heroicons-photo',
  },
])
</script>
