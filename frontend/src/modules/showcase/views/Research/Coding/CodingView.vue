<template>
  <div class="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 py-16">
    <main class="max-w-4xl mx-auto px-6 space-y-24">
      <section>
        <UAlert
          icon="i-heroicons-light-bulb"
          color="primary"
          variant="soft"
          :title="introText"
          class="text-lg leading-relaxed shadow-sm"
          :ui="{ title: 'text-base font-medium leading-relaxed' }"
        />
      </section>

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
              {{ $t('project_detail_coding.labels.abstract') }}
            </UBadge>
            <p class="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              {{ section.abstract }}
            </p>
          </div>

          <USeparator class="my-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p class="text-sm text-muted-foreground font-mono italic">
              <span class="font-bold">{{ $t('project_detail_coding.labels.published') }}:</span>
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
          :label="$t('project_detail_coding.labels.related_papers')"
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
