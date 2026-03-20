<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-5xl mx-auto px-6 py-14">
        <div class="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
          <RouterLink
            :to="{ name: 'research', params: { locale: route.params.locale } }"
            class="hover:text-primary transition-colors"
          >
            {{ $t('header.research') }}
          </RouterLink>
          <UIcon name="i-heroicons-chevron-right" class="w-3.5 h-3.5" />
          <span class="text-primary font-semibold">{{ $t('header.sensing') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('header.sensing') }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ introText }}
        </p>
      </div>
    </div>

    <main class="max-w-5xl mx-auto px-6 py-16 space-y-20">
      <!-- Research Sections -->
      <section
        v-for="(section, index) in researchSections"
        :key="index"
        class="space-y-8"
      >
        <!-- Section number divider -->
        <div class="flex items-center gap-5">
          <span
            class="text-6xl font-extrabold text-primary/15 font-mono tabular-nums leading-none select-none"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <!-- Image -->
        <div class="rounded-2xl overflow-hidden border border-border bg-muted">
          <img
            :src="section.image"
            alt="Research Diagram"
            class="w-full h-auto object-contain"
          />
        </div>

        <!-- Title -->
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
          {{ section.title }}
        </h2>

        <!-- Abstract -->
        <div class="border-l-[3px] border-primary pl-5 space-y-2.5">
          <p class="text-xs font-bold text-primary tracking-widest uppercase">
            {{ $t('project_detail.labels.abstract') }}
          </p>
          <p class="text-base text-muted-foreground leading-relaxed">
            {{ section.abstract }}
          </p>
        </div>

        <!-- Footer row -->
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border"
        >
          <p class="text-sm text-muted-foreground font-mono">
            <span class="font-bold text-foreground">
              {{ $t('project_detail.labels.published') }}:
            </span>
            {{ section.published }}
          </p>
          <div class="flex gap-2">
            <UButton
              v-for="link in section.links"
              :key="link.label"
              :to="link.url"
              target="_blank"
              :icon="link.icon"
              :label="link.label"
              size="sm"
              color="primary"
            />
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="space-y-5">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold">Video</h2>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div
          class="aspect-video rounded-2xl overflow-hidden border border-border bg-black"
        >
          <iframe
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/${videoData.youtubeId}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <p class="text-sm text-muted-foreground italic text-center px-4">
          {{ videoData.caption }}
        </p>
      </section>

      <!-- Related Papers -->
      <section class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold">
            {{ $t('project_detail.labels.related_papers') }}
          </h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="space-y-3">
          <div
            v-for="(paper, i) in relatedPapers"
            :key="i"
            class="group flex gap-5 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <span
              class="text-2xl font-extrabold text-primary/20 font-mono tabular-nums shrink-0 leading-none mt-0.5 select-none"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="space-y-1.5 min-w-0">
              <p class="text-xs font-semibold text-primary">{{ paper.authors }}</p>
              <h4
                class="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors"
              >
                {{ paper.title }}
              </h4>
              <p class="text-xs text-muted-foreground italic font-serif leading-relaxed">
                {{ paper.journal }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

// 1. 顶部简介 (使用 computed 保证语言切换时的响应式)
const introText = computed(() => t('project_detail.intro'))

// 2. 研究模块数据
const researchSections = computed(() => [
  {
    title: t('project_detail.sections.s1.title'),
    image: '/images/Research/Sensing/image1.avif',
    abstract: t('project_detail.sections.s1.abstract'),
    published: t('project_detail.sections.s1.published'),
    links: [
      {
        label: t('project_detail.links.paper'),
        icon: 'i-heroicons-document-text',
        url: 'https://openaccess.thecvf.com/content/ACCV2020/papers/Huang_CS-MCNetA_Video_Compressive_Sensing_Reconstruction_Network_with_Interpretable_Motion_Compensation_ACCV_2020_paper.pdf',
      },
      {
        label: t('project_detail.links.code'),
        icon: 'i-heroicons-code-bracket',
        url: 'https://github.com/WilliamHBW/CS-MCNet',
      },
    ],
  },
  {
    title: t('project_detail.sections.s2.title'),
    image: '/images/Research/Sensing/image2.avif',
    abstract: t('project_detail.sections.s2.abstract'),
    published: t('project_detail.sections.s2.published'),
    links: [
      {
        label: t('project_detail.links.paper'),
        icon: 'i-heroicons-document-text',
        url: 'https://ieeexplore.ieee.org/document/9287074',
      },
    ],
  },
])

// 3. 视频数据
const videoData = computed(() => ({
  youtubeId: 'DVui-39xABE',
  caption: t('project_detail.video_caption'),
}))

// 4. 相关论文 (按照要求，保留原文硬编码，不使用 i18n)
const relatedPapers = ref([
  {
    authors: 'Pham Do Kim Chi, Jian Yang, Jinjia Zhou',
    title:
      'CSIE-M: Compressive sensing image enhancement using multiple reconstructed signals for IoT surveillance systems',
    journal: 'IEEE Transactions on Industrial Informatics, 2021 (IF2020: 9.112)',
  },
  {
    authors: 'Rentao Wan, Jinjia Zhou, Bowen Huang, Hui Zeng, Yibo Fan',
    title: 'APMC: Adjacent Pixels based Measurement Coding System for Compressively Sensed Images',
    journal: 'IEEE Transactions on Multimedia 2021',
  },
  {
    authors: 'Rentao Wan, Jinjia Zhou, Bowen Huang, Hui Zeng, Yibo Fan',
    title:
      'Measurement Coding Framework with Adjacent Pixels based Measurement Matrix for Compressively Sensed Images',
    journal:
      'IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) Jun. 2021.',
  },
  {
    authors: "Bowen Huang, Jinjia Zhou, Xiao Yan, Ming'e Jing, Rentao Wan, Yibo Fan",
    title:
      'CS-MCNet: A Video Compressive Sensing Reconstruction Network with Interpretable Motion Compensation',
    journal:
      'Asian Conference on Computer Vision 2020 (ACCV), Virtual Tokyo. Nov. 2020. (acceptance rate 33%).',
  },
  {
    authors: 'Thuy Thi Thu Tran, Jirayu Peetakul, Chi Do Kim Pham, Jinjia Zhou',
    title:
      'Bi-directional intra prediction based measurement coding for compressive sensing images',
    journal:
      '2020 IEEE 22nd International Workshop on Multimedia Signal Processing (MMSP), DOI: DOI: 10.1109/MMSP48831.2020.9287074, Sep. 2020',
  },
  {
    authors: 'Jiayao Xu, Jirayu Peetakul, Muchen Li, Jinjia Zhou',
    title:
      'High-speed Compressed Sensing Reconstruction using Zigzag Ordering based Parallel Processing',
    journal:
      'International Conference on Image and Video Processing (ICIVP 2020), Oct. 2020.(Best presentation)',
  },
  {
    authors: 'Jirayu Peetakul and Jinjia Zhou',
    title:
      'emporal Redundancy Reduction in Compressive Video Sensing by using Moving Detection and Inter-Coding',
    journal: '2020 Data Compression Conference (DCC), Snowbird, UT, USA, 2020, pp. 387-387',
  },
  {
    authors: 'Jirayu Peetakul, Jinjia Zhou, Koishi Wada',
    title:
      'A Measurement Coding System for Block-based Compressive Sensing Images by Using Pixel-Domain Features',
    journal: 'IEEE Data Compression Conference (DCC 2019), Snowbird, USA, March 2019.',
  },
])
</script>
