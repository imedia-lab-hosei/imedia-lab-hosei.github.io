<template>
  <div class="max-w-4xl mx-auto px-6 py-24 space-y-24 bg-background min-h-screen">
    <header class="space-y-6">
      <h1 class="text-primary text-4xl md:text-5xl font-bold tracking-tight">
        {{ pageContent.header.title }}
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed">
        {{ pageContent.header.description }}
      </p>
    </header>

    <UAlert
      v-if="pageContent.labNotice"
      icon="i-heroicons-information-circle"
      color="primary"
      variant="soft"
      :title="pageContent.labNotice.title"
      :description="pageContent.labNotice.description"
      class="border border-primary/20"
    />

    <section class="space-y-16">
      <div class="space-y-4">
        <h2 class="text-2xl font-medium tracking-tight text-foreground">
          {{ pageContent.facilitiesTitle }}
        </h2>
        <UDivider class="border-border" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div
          v-for="facility in pageContent.facilities"
          :key="facility.id"
          class="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div class="md:col-span-1">
            <h3 class="text-base font-medium text-foreground top-24">
              {{ facility.title }}
            </h3>
          </div>

          <div class="md:col-span-3 space-y-6">
            <div class="space-y-4 text-muted-foreground leading-relaxed">
              <p v-for="(para, index) in facility.paragraphs" :key="index">
                {{ para }}
              </p>
            </div>

            <div
              v-if="facility.highlights && facility.highlights.length"
              class="flex flex-wrap gap-2 pt-2"
            >
              <UBadge
                v-for="tag in facility.highlights"
                :key="tag"
                variant="subtle"
                class="font-mono text-xs tracking-wider"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-8 pt-8">
      <h3 class="text-lg font-medium text-foreground">
        {{ pageContent.galleryTitle }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <UCard
          v-for="img in pageContent.gallery"
          :key="img.src"
          class="group bg-card border-border overflow-hidden ring-border"
        >
          <div class="aspect-video bg-muted relative overflow-hidden">
            <img
              :src="img.src"
              :alt="img.alt"
              class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <template v-if="img.caption" #footer>
            <p class="text-sm text-center text-muted-foreground font-medium">
              {{ img.caption }}
            </p>
          </template>
        </UCard>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 严格的 TypeScript 接口定义
interface Notice {
  title: string
  description: string
}

interface Facility {
  id: string
  title: string
  paragraphs: string[]
  highlights?: string[]
}

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface PageContent {
  header: {
    title: string
    description: string
  }
  labNotice?: Notice
  facilitiesTitle: string
  facilities: Facility[]
  galleryTitle: string
  gallery: GalleryImage[]
}

const { t } = useI18n()

// 数据驱动与响应式国际化
const pageContent = computed<PageContent>(() => {
  return {
    header: {
      title: t('aboutUs.facilities.header.title'),
      description: t('aboutUs.facilities.header.description'),
    },
    labNotice: {
      title: t('aboutUs.facilities.notice.title'),
      description: t('aboutUs.facilities.notice.description'),
    },
    facilitiesTitle: t('aboutUs.facilities.sections.research_facilities'),
    facilities: [
      {
        id: 'library',
        title: t('aboutUs.facilities.categories.library'),
        paragraphs: [t('aboutUs.facilities.texts.library_p1')],
      },
      {
        id: 'computing',
        title: t('aboutUs.facilities.categories.computing'),
        paragraphs: [t('aboutUs.facilities.texts.computing_p1')],
        highlights: ['Tesla V100', 'RTX 2080 Ti', 'GTX 1080 Ti'],
      },
      {
        id: 'hardware',
        title: t('aboutUs.facilities.categories.hardware'),
        paragraphs: [t('aboutUs.facilities.texts.hardware_p1')],
        highlights: ['FPGAs', 'High-res Cameras', 'Configurable Sensors'],
      },
    ],
    galleryTitle: t('aboutUs.facilities.sections.gallery'),
    gallery: [
      {
        src: '/images/AboutUs/Facilities/gpu_station.avif',
        alt: 'High Performance GPU Workstation',
        caption: t('aboutUs.facilities.gallery.gpu'),
      },
      {
        src: '/images/AboutUs/Facilities/fpga_board.avif',
        alt: 'Hardware Testing Environment',
        caption: t('aboutUs.facilities.gallery.testing'),
      },
      {
        src: '/images/AboutUs/Facilities/image_sensor.avif',
        alt: 'Programmable Image Sensor and Encoder',
        caption: t('aboutUs.facilities.gallery.sensor'),
      },
    ],
  }
})
</script>
