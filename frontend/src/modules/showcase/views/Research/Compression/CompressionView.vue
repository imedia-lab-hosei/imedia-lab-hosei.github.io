<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
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
          <span class="text-primary font-semibold">{{ $t('header.compression') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('header.compression') }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          {{ introText }}
        </p>
      </div>
    </div>

    <main class="max-w-5xl mx-auto px-6 py-16 space-y-20">
      <section v-for="(section, index) in researchSections" :key="index" class="space-y-8">
        <div class="flex items-center gap-5">
          <span
            class="text-6xl font-extrabold text-primary/15 font-mono tabular-nums leading-none select-none"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="rounded-2xl overflow-hidden border border-border bg-muted">
          <img
            :src="section.image"
            alt="Compression Research Diagram"
            class="w-full h-auto object-contain"
          />
        </div>

        <h2 class="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
          {{ section.title }}
        </h2>

        <div class="border-l-[3px] border-primary pl-5 space-y-2.5">
          <p class="text-xs font-bold text-primary tracking-widest uppercase">
            {{ $t('project_detail_compression.labels.abstract') }}
          </p>
          <p class="text-base text-muted-foreground leading-relaxed">
            {{ section.abstract }}
          </p>
        </div>

        <div
          v-if="section.published || section.links.length"
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border"
        >
          <p v-if="section.published" class="text-sm text-muted-foreground font-mono">
            <span class="font-bold text-foreground">
              {{ $t('project_detail_compression.labels.published') }}:
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

      <section class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold">
            {{ $t('project_detail_compression.labels.related_papers') }}
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

type ResearchLink = {
  label: string
  url: string
  icon: string
}

type ResearchSection = {
  title: string
  image: string
  abstract: string
  published: string
  links: ResearchLink[]
}

const introText = computed(() => t('project_detail_compression.intro'))

const researchSections = computed<ResearchSection[]>(() => [
  {
    title: t('project_detail_compression.sections.s1.title'),
    image: '/images/Research/Compress/image1.png',
    abstract: t('project_detail_compression.sections.s1.abstract'),
    published: t('project_detail_compression.sections.s1.published'),
    links: [],
  },
  {
    title: t('project_detail_compression.sections.s2.title'),
    image: '/images/Research/Compress/image2.png',
    abstract: t('project_detail_compression.sections.s2.abstract'),
    published: t('project_detail_compression.sections.s2.published'),
    links: [],
  },
  {
    title: t('project_detail_compression.sections.s3.title'),
    image: '/images/Research/Compress/image3.png',
    abstract: t('project_detail_compression.sections.s3.abstract'),
    published: t('project_detail_compression.sections.s3.published'),
    links: [],
  },
])

const relatedPapers = ref([
  {
    authors:
      'Qi Zheng, Haozhi Wang, Zihao Liu, Jiaming Liu, Peiye Liu, Zhijian Hao, Yanheng Lu, Dimin Niu, Jinjia Zhou, Minge Jing, Yibo Fan',
    title: 'Unicorn: Unified Neural Image Compression with One Number Reconstruction',
    journal: 'ACM Multimedia, Oct. 2025.',
  },
  {
    authors: 'Keren He, Chen Fu, Guangwei Gao, Jinjia Zhou',
    title:
      'High-Frequency Semantic Enhancement in Compressed Scenarios for Robust Visual and Machine Vision Applications',
    journal: 'IEEE ICIP, Sep. 2025.',
  },
  {
    authors: 'Fuma Kimishima, Jian Yang, Jinjia Zhou',
    title:
      'A Comprehensive Study of MCS-TCL: Multi-Functional Sampling for Trustworthy Compressive Learning',
    journal: 'Information, Sep. 2025.',
  },
  {
    authors: 'Alaa Zain, Trinh Hoang, Jinjia Zhou',
    title:
      'Adaptive Conventional-Learning Video Signal Compression Framework using Texture Fulfillment',
    journal: 'Journal of Visual Communication and Image Representation, Jul. 2025.',
  },
  {
    authors: 'Riku Takahashi, Ryugo Morita, Jinjia Zhou',
    title: 'Audio-Visual Driven Compression for Low-Bitrate Talking Head Videos',
    journal: 'ICMR, Jun. 2025.',
  },
  {
    authors: 'Riku Takahashi, Ryugo Morita, Fuma Kimishima, Kosuke Iwama, Jinjia Zhou',
    title: 'Bidirectional Learned Facial Animation Codec for Low Bitrate Talking Head Videos',
    journal: 'Data Compression Conference (DCC), Snowbird, Utah, Mar. 2025.',
  },
  {
    authors: 'Keren He, Chen Fu, Lu Zhang, Jinjia Zhou',
    title: 'Temporal Down-sampling based Video Coding with Frame-Recurrent Enhancement',
    journal: 'Data Compression Conference (DCC), Snowbird, UT, USA, 2023.',
  },
  {
    authors: 'Jinjia Zhou et al.',
    title: 'Deep Neural Network for Down-Sampling Based Video Coding',
    journal: 'IEEE Transactions on Image Processing, 2021.',
  },
  {
    authors: "Bowen Huang, Jinjia Zhou, Xiao Yan, Ming'e Jing, Rentao Wan, Yibo Fan",
    title:
      'CS-MCNet: A Video Compressive Sensing Reconstruction Network with Interpretable Motion Compensation',
    journal: 'ACCV, Virtual Tokyo, Nov. 2020.',
  },
])
</script>
