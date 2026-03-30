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
          <span class="text-primary font-semibold">{{ $t('header.eda') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('header.eda') }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ introText }}
        </p>
      </div>
    </div>

    <main class="max-w-5xl mx-auto px-6 py-16 space-y-20">
      <!-- Research Sections -->
      <section v-for="(section, index) in researchSections" :key="index" class="space-y-8">
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
          <img :src="section.image" alt="Research Diagram" class="w-full h-auto object-contain" />
        </div>

        <!-- Title -->
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
          {{ section.title }}
        </h2>

        <!-- Abstract -->
        <div class="border-l-[3px] border-primary pl-5 space-y-2.5">
          <p class="text-xs font-bold text-primary tracking-widest uppercase">
            {{ $t('project_detail_eda.labels.abstract') }}
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
              {{ $t('project_detail_eda.labels.published') }}:
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
            {{ $t('project_detail_eda.labels.related_papers') }}
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
const introText = computed(() => t('project_detail_eda.intro'))

// 2. 研究模块数据
const researchSections = computed(() => [
  {
    title: t('project_detail_eda.sections.s2.title'),
    image: '/images/Research/EDA/eda.png',
    abstract: t('project_detail_eda.sections.s2.abstract'),
    published: t('project_detail_eda.sections.s2.published'),
    links: [
      {
        label: t('project_detail_processing.links.paper'),
        icon: 'i-heroicons-document-text',
        url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10992866',
      },
    ],
  },
])

// 4. 相关论文 (按照要求，保留原文硬编码，不使用 i18n)
const relatedPapers = ref([
  {
    authors:
      'Jinghao Ding, Wenxin Yu, Yuanrui Qi, Zhaoqi Fu, Mengshi Gong, I-Chyn Wey, Jinjia Zhou',
    title:
      'An Effective Macro Placement Framework with Reinforcement Learning and Monte Carlo Tree Search',
    journal: 'Great Lakes Symposium on VLSI (GLSVLSI) Jun. 2025.',
  },
  {
    authors:
      'Jinghao Ding, Jiazhi Wen, Hao Tang, Zhaoqi Fu, Mengshi Gong, Yuanrui Qi, Wenxin Yu and Jinjia Zhou',
    title: 'An Effective and Efficient Cross-Link Insertion for Non-Tree Clock Network Synthesis',
    journal: '2025 Design, Automation & Test in Europe Conference (DATE) Apr. 2025.',
  },
])
</script>
