<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">About Us</p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ pageContent.header.title }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ pageContent.header.description }}
        </p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <!-- Lab Relocation Notice -->
      <div
        v-if="pageContent.labNotice"
        class="flex gap-4 p-5 rounded-2xl border border-primary/30 bg-primary/5"
      >
        <div
          class="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-0.5"
        >
          <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-primary" />
        </div>
        <div>
          <p class="font-bold text-foreground mb-1">{{ pageContent.labNotice.title }}</p>
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ pageContent.labNotice.description }}
          </p>
        </div>
      </div>

      <!-- Relocation Gallery -->
      <!-- <section v-if="relocationPhotos.length > 0">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">
            {{ t('aboutUs.facilities.sections.relocation_gallery') }}
          </h2>
          <div class="flex-1 h-px bg-border" />
        </div>
        <ExpandableGallery :images="relocationPhotos" class="rounded-xl overflow-hidden" />
      </section> -->

      <!-- Research Facilities -->
      <section>
        <div class="flex items-center gap-4 mb-10">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ pageContent.facilitiesTitle }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="space-y-6">
          <div
            v-for="facility in pageContent.facilities"
            :key="facility.id"
            class="flex flex-col md:flex-row gap-8 p-7 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group"
          >
            <!-- Left: title -->
            <div class="md:w-48 shrink-0">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 mb-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary" />
                <span class="text-xs font-bold text-primary tracking-wider uppercase">
                  {{ facility.id }}
                </span>
              </div>
              <h3
                class="text-base font-bold text-foreground group-hover:text-primary transition-colors"
              >
                {{ facility.title }}
              </h3>
            </div>

            <!-- Right: description + highlights -->
            <div class="flex-1 space-y-4">
              <p
                v-for="(para, index) in facility.paragraphs"
                :key="index"
                class="text-muted-foreground leading-relaxed text-sm"
              >
                {{ para }}
              </p>
              <div
                v-if="facility.highlights && facility.highlights.length"
                class="flex flex-wrap gap-2"
              >
                <span
                  v-for="tag in facility.highlights"
                  :key="tag"
                  class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-muted text-foreground border border-border"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section>
        <div class="flex items-center gap-4 mb-10">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ pageContent.galleryTitle }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div
            v-for="img in pageContent.gallery"
            :key="img.src"
            class="group relative rounded-2xl overflow-hidden border border-border bg-muted aspect-video"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
            >
              <p v-if="img.caption" class="text-white text-sm font-semibold">
                {{ img.caption }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
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

// 搬迁画廊图片（可配置）
const relocationPhotos: string[] = [
  '/images/AboutUs/Facilities/labRoom_1.jpg',
  '/images/AboutUs/Facilities/labRoom_2.jpg',
  '/images/AboutUs/Facilities/labRoom_3.jpg',
  '/images/AboutUs/Facilities/labRoom_4.jpg',
]

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
        highlights: ['Tesla V100', 'RTX 2080 Ti', 'RTX 3090', 'Mac Mini M4', 'iMac'],
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
