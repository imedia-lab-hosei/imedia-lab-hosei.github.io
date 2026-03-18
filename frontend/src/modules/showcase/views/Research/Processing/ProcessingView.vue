<template>
  <div class="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 py-16">
    <main class="max-w-4xl mx-auto px-6 space-y-24">
      <!-- <section>
        <UAlert
          icon="i-heroicons-light-bulb"
          color="primary"
          variant="soft"
          :title="introText"
          class="text-lg leading-relaxed shadow-sm"
          :ui="{ title: 'text-base font-medium leading-relaxed' }"
        />
      </section> -->

      <section class="space-y-24">
        <div v-for="(section, index) in researchSections" :key="index" class="space-y-8">
          <UCard class="overflow-hidden">
            <img
              :src="section.image"
              alt="Research Diagram"
              class="w-full h-auto object-contain rounded-lg"
            />
          </UCard>

          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-snug">
            {{ section.title }}
          </h2>

          <div class="space-y-3">
            <UBadge
              color="primary"
              variant="subtle"
              size="sm"
              class="uppercase tracking-widest font-bold"
            >
              {{ $t('project_detail_processing.labels.abstract') }}
            </UBadge>
            <p class="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              {{ section.abstract }}
            </p>
          </div>

          <USeparator class="my-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p class="text-sm text-muted-foreground font-mono italic">
              <span class="font-bold">{{ $t('project_detail_processing.labels.published') }}:</span>
              {{ section.published }}
            </p>
            <div class="flex gap-2">
              <UButton
                v-for="link in section.links"
                :key="link.label"
                :to="link.url"
                :icon="link.icon"
                :label="link.label"
                variant="solid"
                size="sm"
                class="hover:text-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-8 pt-8">
        <USeparator
          :label="$t('project_detail_processing.labels.related_papers')"
          :ui="{ label: 'text-2xl font-bold text-foreground' }"
        />

        <div class="space-y-4">
          <UCard
            v-for="(paper, index) in relatedPapers"
            :key="index"
            as="article"
            class="group hover:ring-primary/50 hover:shadow-md transition-all cursor-default"
          >
            <p class="text-sm text-primary font-medium mb-1.5">{{ paper.authors }}</p>
            <h4
              class="text-base md:text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors"
            >
              "{{ paper.title }}"
            </h4>
            <p class="text-sm text-muted-foreground italic font-serif">
              {{ paper.journal }}
            </p>
          </UCard>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 1. 顶部简介 (使用 computed 保证语言切换时的响应式)
// const introText = computed(() => t('project_detail_processing.intro'))

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
