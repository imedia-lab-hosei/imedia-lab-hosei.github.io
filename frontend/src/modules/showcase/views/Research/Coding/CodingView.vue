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
          <span class="text-primary font-semibold">{{ $t('header.coding') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('header.coding') }}
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
            {{ $t('project_detail_coding.labels.abstract') }}
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
              {{ $t('project_detail_coding.labels.published') }}:
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

      <!-- Related Papers -->
      <section class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold">
            {{ $t('project_detail_coding.labels.related_papers') }}
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
const introText = computed(() => t('project_detail_coding.intro'))

// 2. 研究模块数据
const researchSections = computed(() => [
  {
    title: t('project_detail_coding.sections.s1.title'),
    image: '/images/Research/Coding/image1.avif',
    abstract: t('project_detail_coding.sections.s1.abstract'),
    published: t('project_detail_coding.sections.s1.published'),
    links: [
      {
        label: t('project_detail_coding.links.paper'),
        icon: 'i-heroicons-document-text',
        url: 'https://ieeexplore.ieee.org/document/9318509',
      },
      {
        label: t('project_detail_coding.links.code'),
        icon: 'i-heroicons-code-bracket',
        url: 'https://minhmanho.github.io/rrdncnn/',
      },
    ],
  },
  {
    title: t('project_detail_coding.sections.s2.title'),
    image: '/images/Research/Coding/image3.png',
    abstract: t('project_detail_coding.sections.s2.abstract'),
    published: t('project_detail_coding.sections.s2.published'),
    links: [
      {
        label: t('project_detail_coding.links.paper'),
        icon: 'i-heroicons-document-text',
        url: 'https://www.zhou-lab.info/_files/ugd/c47b12_c608d412f6cb4809b11ac08f8eb36834.pdf',
      },
      {
        label: t('project_detail_coding.links.video'),
        icon: 'heroicons:film',
        url: 'https://youtu.be/5dxiqhZr1S4',
      },
    ],
  },
])

// 4. 相关论文 (按照要求，保留原文硬编码，不使用 i18n)
const relatedPapers = ref([
  {
    authors: 'Pham Do Kim Chi, Chen Fu, Jinjia Zhou',
    title: 'Deep Learning based Spatial-Temporal In-loop filtering for Versatile Video Coding',
    journal:
      'The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops: 4rd Challenge on Learned Image Compression, Virtual, June 2021.',
  },
  {
    authors: 'Man M. Ho, Jinjia Zhou*, Gang He',
    title:
      'RR-DnCNN v2.0: Enhanced Restoration-Reconstruction Deep Neural Network for Down-Sampling Based Video Coding',
    journal:
      'IEEE Transactions on Image Processing (TIP). DOI:10.1109/TIP.2020.3046872. 2021. (SJR Q1, Impact Factor: 9.34)',
  },
  {
    authors: 'Jinjia Zhou, Victor Sanchez, Lu Zhang, Jianquan Liu, Jiu Xu',
    title: 'Special Issue on Deep Learning Technologies for Internet of Video Things',
    journal: 'IEEE Access, 2021.',
  },
  {
    authors: 'Trinh Man Hoang, Jinjia Zhou, and Yibo Fan',
    title: 'Image Compression with Encoder-Decoder Matched Semantic Segmentation',
    journal:
      '2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Seattle, WA, USA, 2020, pp. 619-623',
  },
  {
    authors: 'Man M. Ho, Jinjia Zhou, Gang He, Muchen Li, and Lei Li',
    title:
      'SR-CL-DMC: P-frame coding with Super-Resolution, Color Learning, and Deep Motion Compensation',
    journal:
      'The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops: 3rd Challenge on Learned Image Compression, Seattle, USA, June 2020.',
  },
  {
    authors:
      'Gange He, Chang Wu, Lei Li, Jinjia Zhou, Xianglin Wang, Yunfei Zheng, Bing Yu, and Weiying Xie',
    title: 'A Video Compression Framework Using an Overfitted Restoration Neural Network',
    journal:
      'The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops: 3rd Challenge on Learned Image Compression, Seattle, USA, June 2020.',
  },
  {
    authors: 'Muchen Li, Jinjia Zhou, Satoshi Goto',
    title:
      'A configurable fixed-complexity IME-FME Cost ratio based Inter mode filtering method in HEVC encoding',
    journal:
      'IIEEJ Transactions on Image Electronics and Visual Computing, Vol. 8, No. 1, page58-70 (2020.6).',
  },
  {
    authors: 'Man M. Ho, Gang He, Zheng Wang, and Jinjia Zhou*',
    title:
      'Down-Sampling Based Video Coding with Degradation-aware Restoration-Reconstruction Deep Neural Network',
    journal:
      'The 26th International Conference on Multimedia Modeling (MMM), Daejeon, Korea, Jan. 2020. DOI: 10.1007/978-3-030-37731-1_9 (Best Paper Runner-Up Award, Oral Acceptance Rate 23.39%, Top-2 Rate: 1.17%)',
  },
  {
    authors: 'T. M. Hoang and J. Zhou',
    title:
      'B-DRRN: A Block Information Constrained Deep Recursive Residual Network for Video Compression Artifacts Reduction',
    journal: '2019 Picture Coding Symposium (PCS), Ningbo, China, 2019, pp. 1-5',
  },
  {
    authors: 'Do Kim Chi Pham, Jinjia Zhou*',
    title: 'Deep Learning-based Luma and Chroma Fractional Interpolation in Video Coding',
    journal:
      'IEEE Access, Vol. 7, pp. 112535-112543, Aug. 2019. DOI: 10.1109/ACCESS.2019.2935378 (SJR Q1, Impact Factor:4.098)',
  },
  {
    authors: 'Pham Do Kim Chi, Jinjia Zhou',
    title: 'A Convolutional Neural Network for Fractional Interpolation in Video Coding',
    journal:
      'The International Symposium on Artificial Intelligence and Robotics (ISAIR 2019), Daegu, Korea, Aug. 2019. (Best Paper Nomination).',
  },
])
</script>
