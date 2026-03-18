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
              {{ $t('project_detail.labels.abstract') }}
            </UBadge>
            <p class="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              {{ section.abstract }}
            </p>
          </div>

          <USeparator class="my-6" />
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p class="text-sm text-muted-foreground font-mono italic">
              <span class="font-bold">{{ $t('project_detail.labels.published') }}:</span>
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

      <section class="space-y-6 max-w-3xl mx-auto">
        <UCard class="overflow-hidden bg-black">
          <div class="aspect-video">
            <iframe
              class="w-full h-full"
              :src="`https://www.youtube.com/embed/${videoData.youtubeId}`"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            ></iframe>
          </div>
        </UCard>
        <p class="text-center text-sm md:text-base text-muted-foreground italic px-4">
          {{ videoData.caption }}
        </p>
      </section>

      <section class="space-y-8 pt-8">
        <USeparator
          :label="$t('project_detail.labels.related_papers')"
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
