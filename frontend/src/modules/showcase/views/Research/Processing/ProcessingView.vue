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
          <span class="text-primary font-semibold">{{ $t('header.processing') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('header.processing') }}
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
            {{ $t('project_detail_processing.labels.abstract') }}
          </p>
          <p class="text-base text-muted-foreground leading-relaxed">
            {{ section.abstract }}
          </p>
        </div>

        <!-- Footer row -->
        <div
          v-if="section.published || section.links.length"
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border"
        >
          <p v-if="section.published" class="text-sm text-muted-foreground font-mono">
            <span class="font-bold text-foreground">
              {{ $t('project_detail_processing.labels.published') }}:
            </span>
            {{ section.published }}
          </p>
          <div v-if="section.links.length" class="flex gap-2">
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

      <!-- Related Papers -->
      <section class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold">
            {{ $t('project_detail_processing.labels.related_papers') }}
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
const introText = computed(() => t('project_detail_processing.intro'))

// 2. 研究模块数据
const researchSections = computed(() => [
  {
    title: t('project_detail_processing.sections.s1.title'),
    image: '/images/Research/Processing/image1.avif',
    abstract: t('project_detail_processing.sections.s1.abstract'),
    published: t('project_detail_processing.sections.s1.published'),
    links: [
      {
        label: t('project_detail_processing.links.paper'),
        icon: 'i-heroicons-document-text',
        url: 'https://openaccess.thecvf.com/content/WACV2021/papers/Ho_Deep_Preset_Blending_and_Retouching_Photos_With_Color_Style_Transfer_WACV_2021_paper.pdf',
      },
      {
        label: t('project_detail_processing.links.code'),
        icon: 'i-heroicons-code-bracket',
        url: 'https://minhmanho.github.io/deep_preset/',
      },
    ],
  },
  {
    title: t('project_detail_processing.sections.s2.title'),
    image: '/images/Research/Processing/image2.avif',
    abstract: t('project_detail_processing.sections.s2.abstract'),
    published: t('project_detail_processing.sections.s2.published'),
    links: [],
  },
])

// 4. 相关论文 (按照要求，保留原文硬编码，不使用 i18n)
const relatedPapers = ref([
  {
    authors: 'Zhiqiang Zhang, Jinjia Zhou, Wenxin Yu, Ning Jiang',
    title: 'DrawGAN: Text to Image Synthesis with Drawing Generative Adversarial Networks',
    journal:
      'IEEE International Conference on Acoustics, Speach and Signal Processing (ICASSP) Jun. 2021.',
  },
  {
    authors: 'Man M. Ho, Jinjia Zhou',
    title: 'Deep Preset: Blending and Retouching Photos with Color Style Transfer',
    journal:
      '2021 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), pp. 2113-2121, Jan. 2021 (acceptance rate 35.4%). [paper][code]',
  },
  {
    authors: 'Zhiqiang Zhang, Wenxin Yu, Jinjia Zhou, Xuewen Zhang, Gang He, Zhuo Yang',
    title: 'Customizable GAN: A Method for Image Synthesis of Human Controllable',
    journal: 'IEEE Access, Vol. 8, No. 1, pp.108004-108017',
  },
  {
    authors:
      'Siyuan Li, Lu Lu, Zhiqiang Zhang, Xin Cheng, Kepeng Xu, Wenxin Yu, Gang He, Jinjia Zhou, Zhuo Yang',
    title: 'Interactive Separation Network for Image Inpainting',
    journal:
      'IEEE International Conference on Image Processing (ICIP2020), United Arab Emirates, Oct. 2020.',
  },
  {
    authors: 'Huyen T. T. Bui, Man M. Ho, Xiao Peng, and Jinjia Zhou',
    title: 'Japanese Coins and Banknotes Recognition for Visually Impaired People',
    journal:
      'The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops: VizWiz Grand Challenge Workshop, Seattle, USA, June 2020.',
  },
  {
    authors: 'Minh-Man Ho, Jinjia Zhou*, Yibo Fan',
    title:
      'Respecting low-level components of content with skip connections and semantic information in image style transfer',
    journal:
      'The 16th ACM SIGGRAPH European Conference on Visual Media Production, London, UK, Dec. 2019.',
  },
])
</script>
