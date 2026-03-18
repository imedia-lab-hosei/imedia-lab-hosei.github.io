<template>
  <div class="max-w-4xl mx-auto px-6 py-24 space-y-24 bg-background min-h-screen">
    <header class="space-y-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            {{ t('activities.header.title') }}
          </h1>
          <p class="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {{ t('activities.header.description') }}
          </p>
        </div>

        <UInput
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass"
          :placeholder="t('activities.ui.search_placeholder')"
          class="w-full md:w-80"
          variant="outline"
          size="lg"
        />
      </div>
      <UDivider class="border-border" />
    </header>

    <div class="space-y-8">
      <div class="space-y-16">
        <div v-if="displayedActivities.length === 0" class="py-20 text-center space-y-4">
          <UIcon name="i-heroicons-camera" class="w-12 h-12 text-muted-foreground/30 mx-auto" />
          <p class="text-muted-foreground italic">
            {{ t('activities.ui.no_results') }}
          </p>
        </div>

        <div class="space-y-32">
          <section
            v-for="activity in displayedActivities"
            :key="activity.id"
            class="group relative animate-in fade-in slide-in-from-bottom-8 duration-1000"
          >
            <div
              class="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border/20 to-transparent hidden md:block"
            />

            <div class="md:pl-10 space-y-8">
              <header class="space-y-4">
                <div class="flex flex-wrap items-center gap-3">
                  <time class="text-sm font-mono tracking-widest text-muted-foreground uppercase">
                    {{ activity.date }}
                  </time>

                  <UBadge
                    v-if="activity.type !== 'ordinary'"
                    variant="subtle"
                    size="xs"
                    class="font-mono uppercase tracking-tighter"
                  >
                    {{ t(`activities.types.${activity.type}`) }}
                  </UBadge>
                </div>

                <h2
                  class="text-3xl md:text-5xl font-light tracking-tight text-foreground transition-all duration-500 group-hover:text-primary leading-tight"
                >
                  {{ t(`activities.list.${activity.title}`) }}
                </h2>

                <div
                  v-if="activity.type !== 'ordinary'"
                  class="flex flex-wrap gap-y-3 gap-x-6 pt-2"
                >
                  <div class="flex items-center gap-2 text-foreground font-medium">
                    <UIcon
                      :name="
                        activity.type === 'award'
                          ? 'i-heroicons-trophy'
                          : 'i-heroicons-academic-cap'
                      "
                      class="w-5 h-5 text-primary"
                    />
                    <span>{{ t(`activities.list.${activity.venue}`) }}</span>
                  </div>

                  <div
                    v-if="activity.location"
                    class="flex items-center gap-2 text-muted-foreground"
                  >
                    <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                    <span class="text-sm">{{ t(`activities.list.${activity.location}`) }}</span>
                  </div>

                  <div
                    v-if="activity.participants"
                    class="flex items-center gap-2 text-muted-foreground"
                  >
                    <UIcon name="i-heroicons-user-group" class="w-4 h-4" />
                    <span class="text-sm">{{ activity.participants }}</span>
                  </div>
                </div>

                <div v-if="activity.description" class="max-w-3xl pt-2">
                  <p
                    class="text-lg text-muted-foreground/90 leading-relaxed border-l-2 border-primary/10 pl-6 italic"
                  >
                    {{ activity.description }}
                  </p>
                </div>
              </header>

              <div
                class="pt-4 group/gallery transition-transform duration-500 hover:-translate-y-1"
              >
                <ExpandableGallery
                  :images="activity.images"
                  class="rounded-2xl overflow-hidden shadow-sm group-hover/gallery:shadow-2xl group-hover/gallery:shadow-primary/5 transition-all duration-700"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div v-if="hasMore && !searchQuery" class="flex justify-center pt-12">
      <UButton
        variant="soft"
        size="lg"
        icon="i-heroicons-chevron-down"
        class="ring-border hover:bg-muted px-8 transition-colors"
        @click="loadMore"
      >
        {{ t('activities.ui.load_more') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 1. 类型定义
type ActivityType = 'ordinary' | 'conference' | 'award'

interface ActivityItem {
  id: string
  /** 活动类型，决定页面渲染逻辑 */
  type: ActivityType
  /** 时间格式，建议统一为: "Month. Year" (如: "March. 2025") */
  date: string
  /** 活动名称 */
  title: string
  /** 活动详细描述 (支持多行或 i18n 键) */
  description?: string
  /** 用于 ExpandableGallery 的图片 URL 数组 */
  images: string[]

  // --- 结构化元数据 (针对 conference / award 类型) ---

  /** 会议名称或奖项名称 (如: "ISCAS 2025" 或 "Distinguished Paper Award") */
  venue?: string
  /** 地点格式 (如: "Bristol, UK" 或 "Tokyo, Japan") */
  location?: string
  /** 参与的具体成员 (如: "Jinjia Zhou, Haixin Wang") */
  participants?: string
}

const { t } = useI18n()

// 2. 响应式状态
const searchQuery = ref('')
const visibleCount = ref(2) // 初始显示 2 个活动

// 3. 原始数据 (Data-Driven)
// 注意：title 和 description 依然使用 t()，但不设默认值，强制从 JSON 读取
const allActivities = computed<ActivityItem[]>(() => [
  // 2025
  {
    id: 'conf_iconip_2025_gao',
    type: 'conference',
    date: 'Nov. 2025',
    participants: 'Gao',
    images: ['/images/Activities/iconip2025_gao_1.avif'],
    title: 'conf_iconip_2025_gao.title',
    venue: 'conf_iconip_2025_gao.venue',
    location: 'conf_iconip_2025_gao.location',
  },
  {
    id: 'conf_icip_2025_he',
    type: 'conference',
    date: 'Sep. 2025',
    participants: 'He',
    images: [
      '/images/Activities/conf_icip_2025_he_1.avif',
      '/images/Activities/conf_icip_2025_he_2.avif',
      '/images/Activities/conf_icip_2025_he_3.avif',
      '/images/Activities/conf_icip_2025_he_4.avif',
    ],
    title: 'conf_icip_2025_he.title',
    venue: 'conf_icip_2025_he.venue',
    location: 'conf_icip_2025_he.location',
  },
  {
    id: 'conf_icmr_2025_takahashi',
    type: 'conference',
    date: 'Jul. 2025',
    participants: 'Takahashi',
    images: [
      '/images/Activities/conf_icmr_2025_takahashi_1.avif',
      '/images/Activities/conf_icmr_2025_takahashi_2.avif',
    ],
    title: 'conf_icmr_2025_takahashi.title',
    venue: 'conf_icmr_2025_takahashi.venue',
    location: 'conf_icmr_2025_takahashi.location',
  },
  {
    id: 'conf_miru_2025_takahashi',
    type: 'conference',
    date: 'Jul. 2025',
    participants: 'Takahashi',
    images: ['/images/Activities/conf_miru_2025_takahashi_1.avif'],
    title: 'conf_miru_2025_takahashi.title',
    venue: 'conf_miru_2025_takahashi.venue',
    location: 'conf_miru_2025_takahashi.location',
  },
  {
    id: 'award_kubota_2025_zein',
    type: 'award',
    date: 'Jul. 2025',
    participants: 'Zein',
    images: ['/images/Activities/award_kubota_2025_zein_1.avif'],
    title: 'award_kubota_2025_zein.title',
    venue: 'award_kubota_2025_zein.venue',
  },
  {
    id: 'conf_cvpr_2025_morita',
    type: 'conference',
    date: 'Jun. 2025',
    participants: 'Morita',
    images: [
      '/images/Activities/conf_cvpr_2025_morita_1.avif',
      '/images/Activities/conf_cvpr_2025_morita_2.avif',
    ],
    title: 'conf_cvpr_2025_morita.title',
    venue: 'conf_cvpr_2025_morita.venue',
    location: 'conf_cvpr_2025_morita.location',
  },
  {
    id: 'conf_glsvlsi_2025_ding',
    type: 'conference',
    date: 'Jun. 2025',
    participants: 'Ding',
    images: ['/images/Activities/conf_glsvlsi_2025_ding_1.avif'],
    title: 'conf_glsvlsi_2025_ding.title',
    venue: 'conf_glsvlsi_2025_ding.venue',
    location: 'conf_glsvlsi_2025_ding.location',
  },
  {
    id: 'event_welcome_2025',
    type: 'ordinary',
    date: 'Apr. 2025',
    images: [
      '/images/Activities/event_welcome_2025_1.avif',
      '/images/Activities/event_welcome_2025_2.avif',
      '/images/Activities/event_welcome_2025_3.avif',
    ],
    title: 'event_welcome_2025.title',
  },
  {
    id: 'conf_date_2025_ding',
    type: 'conference',
    date: 'Mar. 2025',
    participants: 'Ding',
    images: [
      '/images/Activities/conf_date_2025_ding_1.avif',
      '/images/Activities/conf_date_2025_ding_2.avif',
      '/images/Activities/conf_date_2025_ding_3.avif',
      '/images/Activities/conf_date_2025_ding_4.avif',
    ],
    title: 'conf_date_2025_ding.title',
    venue: 'conf_date_2025_ding.venue',
    location: 'conf_date_2025_ding.location',
  },
  {
    id: 'event_graduation_2025',
    type: 'ordinary',
    date: 'Mar. 2025',
    images: [
      '/images/Activities/event_graduation_2025_1.avif',
      '/images/Activities/event_graduation_2025_2.avif',
      '/images/Activities/event_graduation_2025_3.avif',
    ],
    title: 'event_graduation_2025.title',
  },

  // 2024
  {
    id: 'conf_wcci_2024_shirai_kimishima',
    type: 'conference',
    date: 'Jul. 2024',
    participants: 'Shirai, Kimishima',
    images: [
      '/images/Activities/conf_wcci_2024_shirai_kimishima_1.avif',
      '/images/Activities/conf_wcci_2024_shirai_kimishima_2.avif',
      '/images/Activities/conf_wcci_2024_shirai_kimishima_3.avif',
    ],
    title: 'conf_wcci_2024_shirai_kimishima.title',
    venue: 'conf_wcci_2024_shirai_kimishima.venue',
    location: 'conf_wcci_2024_shirai_kimishima.location',
  },
  {
    id: 'conf_iscas_2024_wang_miyamoto_yang',
    type: 'conference',
    date: 'May. 2024',
    participants: 'Wang, Miyamoto, Yang',
    images: [
      '/images/Activities/conf_iscas_2024_wang_miyamoto_yang_1.avif',
      '/images/Activities/conf_iscas_2024_wang_miyamoto_yang_2.avif',
      '/images/Activities/conf_iscas_2024_wang_miyamoto_yang_3.avif',
      '/images/Activities/conf_iscas_2024_wang_miyamoto_yang_4.avif',
      '/images/Activities/conf_iscas_2024_wang_miyamoto_yang_5.avif',
    ],
    title: 'conf_iscas_2024_wang_miyamoto_yang.title',
    venue: 'conf_iscas_2024_wang_miyamoto_yang.venue',
    location: 'conf_iscas_2024_wang_miyamoto_yang.location',
  },
  {
    id: 'event_workshop_2024',
    type: 'ordinary',
    date: 'Apr. 2024',
    images: [
      '/images/Activities/event_workshop_2024_1.avif',
      '/images/Activities/event_workshop_2024_2.avif',
      '/images/Activities/event_workshop_2024_3.avif',
    ],
    title: 'event_workshop_2024.title',
  },
  {
    id: 'event_welcome_2024',
    type: 'ordinary',
    date: 'Apr. 2024',
    images: [
      '/images/Activities/event_welcome_2024_1.avif',
      '/images/Activities/event_welcome_2024_2.avif',
      '/images/Activities/event_welcome_2024_3.avif',
      '/images/Activities/event_welcome_2024_4.avif',
      '/images/Activities/event_welcome_2024_5.avif',
      '/images/Activities/event_welcome_2024_6.avif',
    ],
    title: 'event_welcome_2024.title',
  },

  // 2023
  {
    id: 'event_xmas_2023',
    type: 'ordinary',
    date: 'Dec. 2023',
    images: [
      '/images/Activities/event_xmas_2023_1.avif',
      '/images/Activities/event_xmas_2023_2.avif',
      '/images/Activities/event_xmas_2023_3.avif',
      '/images/Activities/event_xmas_2023_4.avif',
      '/images/Activities/event_xmas_2023_5.avif',
    ],
    title: 'event_xmas_2023.title',
  },
  {
    id: 'conf_acmmm_2023_wang_iwama',
    type: 'conference',
    date: 'Dec. 2023',
    participants: 'Wang, Iwama',
    images: [
      '/images/Activities/conf_acmmm_2023_wang_iwama_1.avif',
      '/images/Activities/conf_acmmm_2023_wang_iwama_2.avif',
      '/images/Activities/conf_acmmm_2023_wang_iwama_3.avif',
      '/images/Activities/conf_acmmm_2023_wang_iwama_4.avif',
    ],
    title: 'conf_acmmm_2023_wang_iwama.title',
    venue: 'conf_acmmm_2023_wang_iwama.venue',
    location: 'conf_acmmm_2023_wang_iwama.location',
  },
  {
    id: 'conf_cecnet_2023_fu',
    type: 'conference',
    date: 'Nov. 2023',
    participants: 'Fu',
    images: [
      '/images/Activities/conf_cecnet_2023_fu_1.avif',
      '/images/Activities/conf_cecnet_2023_fu_2.avif',
      '/images/Activities/conf_cecnet_2023_fu_3.avif',
      '/images/Activities/conf_cecnet_2023_fu_4.avif',
    ],
    title: 'conf_cecnet_2023_fu.title',
    venue: 'conf_cecnet_2023_fu.venue',
    location: 'conf_cecnet_2023_fu.location',
  },
  {
    id: 'conf_insa_2023_yao_keren',
    type: 'conference',
    date: 'Nov. 2023',
    participants: 'Yao, Keren',
    images: [
      '/images/Activities/conf_insa_2023_yao_keren_1.avif',
      '/images/Activities/conf_insa_2023_yao_keren_2.avif',
      '/images/Activities/conf_insa_2023_yao_keren_3.avif',
      '/images/Activities/conf_insa_2023_yao_keren_4.avif',
    ],
    title: 'conf_insa_2023_yao_keren.title',
    venue: 'conf_insa_2023_yao_keren.venue',
    location: 'conf_insa_2023_yao_keren.location',
  },
  {
    id: 'conf_icip_2023_zhang_morita',
    type: 'conference',
    date: 'Oct. 2023',
    participants: 'Zhang, Morita',
    images: [
      '/images/Activities/conf_icip_2023_zhang_morita_1.avif',
      '/images/Activities/conf_icip_2023_zhang_morita_2.avif',
      '/images/Activities/conf_icip_2023_zhang_morita_3.avif',
    ],
    title: 'conf_icip_2023_zhang_morita.title',
    venue: 'conf_icip_2023_zhang_morita.venue',
    location: 'conf_icip_2023_zhang_morita.location',
  },
  {
    id: 'conf_wacv_2023_morita',
    type: 'conference',
    date: 'Jan. 2023',
    participants: 'Morita',
    images: [
      '/images/Activities/conf_wacv_2023_morita_1.avif',
      '/images/Activities/conf_wacv_2023_morita_2.avif',
      '/images/Activities/conf_wacv_2023_morita_3.avif',
    ],
    title: 'conf_wacv_2023_morita.title',
    venue: 'conf_wacv_2023_morita.venue',
    location: 'conf_wacv_2023_morita.location',
  },

  // 2022
  {
    id: 'conf_insa_2022_yang_fu',
    type: 'conference',
    date: 'Nov. 2022',
    participants: 'Yang, Fu',
    images: [
      '/images/Activities/conf_insa_2022_yang_fu_1.avif',
      '/images/Activities/conf_insa_2022_yang_fu_2.avif',
      '/images/Activities/conf_insa_2022_yang_fu_3.avif',
    ],
    title: 'conf_insa_2022_yang_fu.title',
    venue: 'conf_insa_2022_yang_fu.venue',
    location: 'conf_insa_2022_yang_fu.location',
  },
  {
    id: 'conf_iconip_2022_wang_hayashi',
    type: 'conference',
    date: 'Nov. 2022',
    participants: 'Wang, Hayashi',
    images: [
      '/images/Activities/conf_iconip_2022_wang_hayashi_1.avif',
      '/images/Activities/conf_iconip_2022_wang_hayashi_2.avif',
      '/images/Activities/conf_iconip_2022_wang_hayashi_3.avif',
      '/images/Activities/conf_iconip_2022_wang_hayashi_4.avif',
    ],
    title: 'conf_iconip_2022_wang_hayashi.title',
    venue: 'conf_iconip_2022_wang_hayashi.venue',
    location: 'conf_iconip_2022_wang_hayashi.location',
  },
  {
    id: 'conf_icann_2022_zein',
    type: 'conference',
    date: 'Sep. 2022',
    participants: 'Zein',
    images: ['/images/Activities/conf_icann_2022_zein_1.avif'],
    title: 'conf_icann_2022_zein.title',
    venue: 'conf_icann_2022_zein.venue',
    location: 'conf_icann_2022_zein.location',
  },
  {
    id: 'conf_icme_2022_fu_zhiqiang',
    type: 'conference',
    date: 'Jul. 2022',
    participants: 'Fu, Zhiqiang',
    images: [
      '/images/Activities/conf_icme_2022_fu_zhiqiang_1.avif',
      '/images/Activities/conf_icme_2022_fu_zhiqiang_2.avif',
      '/images/Activities/conf_icme_2022_fu_zhiqiang_3.avif',
      '/images/Activities/conf_icme_2022_fu_zhiqiang_4.avif',
    ],
    title: 'conf_icme_2022_fu_zhiqiang.title',
    venue: 'conf_icme_2022_fu_zhiqiang.venue',
    location: 'conf_icme_2022_fu_zhiqiang.location',
  },
  {
    id: 'event_defense_2022_zein_catherine',
    type: 'ordinary',
    date: 'Jul. 2022',
    participants: 'Zein, Catherine',
    images: [
      '/images/Activities/event_defense_2022_zein_catherine_1.avif',
      '/images/Activities/event_defense_2022_zein_catherine_2.avif',
      '/images/Activities/event_defense_2022_zein_catherine_3.avif',
      '/images/Activities/event_defense_2022_zein_catherine_4.avif',
    ],
    title: 'event_defense_2022_zein_catherine.title',
  },
  {
    id: 'conf_mmm_2022_yang_yao',
    type: 'conference',
    date: 'Jun. 2022',
    participants: 'Yang, Yao',
    images: [
      '/images/Activities/conf_mmm_2022_yang_yao_1.avif',
      '/images/Activities/conf_mmm_2022_yang_yao_2.avif',
      '/images/Activities/conf_mmm_2022_yang_yao_3.avif',
      '/images/Activities/conf_mmm_2022_yang_yao_4.avif',
      '/images/Activities/conf_mmm_2022_yang_yao_5.avif',
      '/images/Activities/conf_mmm_2022_yang_yao_6.avif',
    ],
    title: 'conf_mmm_2022_yang_yao.title',
    venue: 'conf_mmm_2022_yang_yao.venue',
    location: 'conf_mmm_2022_yang_yao.location',
  },
  {
    id: 'event_welcome_2022_park',
    type: 'ordinary',
    date: 'May. 2022',
    images: [
      '/images/Activities/event_welcome_2022_park_1.avif',
      '/images/Activities/event_welcome_2022_park_2.avif',
      '/images/Activities/event_welcome_2022_park_3.avif',
      '/images/Activities/event_welcome_2022_park_4.avif',
      '/images/Activities/event_welcome_2022_park_5.avif',
    ],
    title: 'event_welcome_2022_park.title',
  },
  {
    id: 'conf_iciap_2022_kimishima',
    type: 'conference',
    date: 'May. 2022',
    participants: 'Kimishima',
    images: [
      '/images/Activities/conf_iciap_2022_kimishima_1.avif',
      '/images/Activities/conf_iciap_2022_kimishima_2.avif',
      '/images/Activities/conf_iciap_2022_kimishima_3.avif',
    ],
    title: 'conf_iciap_2022_kimishima.title',
    venue: 'conf_iciap_2022_kimishima.venue',
    location: 'conf_iciap_2022_kimishima.location',
  },

  // 2021
  {
    id: 'conf_cvmp_2021_man',
    type: 'conference',
    date: 'Dec. 2021',
    participants: 'Man',
    images: [
      '/images/Activities/conf_cvmp_2021_man_1.avif',
      '/images/Activities/conf_cvmp_2021_man_2.avif',
      '/images/Activities/conf_cvmp_2021_man_3.avif',
    ],
    title: 'conf_cvmp_2021_man.title',
    venue: 'conf_cvmp_2021_man.venue',
    location: 'conf_cvmp_2021_man.location',
  },
  {
    id: 'event_festival_2021',
    type: 'ordinary',
    date: 'Oct. 2021',
    images: [
      '/images/Activities/event_festival_2021_1.avif',
      '/images/Activities/event_festival_2021_2.avif',
      '/images/Activities/event_festival_2021_3.avif',
      '/images/Activities/event_festival_2021_4.avif',
      '/images/Activities/event_festival_2021_5.avif',
    ],
    title: 'event_festival_2021.title',
  },
  {
    id: 'event_poster_2021',
    type: 'ordinary',
    date: 'Sep. 2021',
    images: [
      '/images/Activities/event_poster_2021_1.avif',
      '/images/Activities/event_poster_2021_2.avif',
    ],
    title: 'event_poster_2021.title',
  },
  {
    id: 'event_farewell_welcome_2021',
    type: 'ordinary',
    date: 'Sep. 2021',
    images: [
      '/images/Activities/event_farewell_welcome_2021_1.avif',
      '/images/Activities/event_farewell_welcome_2021_2.avif',
    ],
    title: 'event_farewell_welcome_2021.title',
  },
  {
    id: 'event_welcome_2021_online',
    type: 'ordinary',
    date: 'Apr. 2021',
    images: [
      '/images/Activities/event_welcome_2021_online_1.avif',
      '/images/Activities/event_welcome_2021_online_2.avif',
      '/images/Activities/event_welcome_2021_online_3.avif',
      '/images/Activities/event_welcome_2021_online_4.avif',
    ],
    title: 'event_welcome_2021_online.title',
  },

  // 2020
  {
    id: 'award_mmm_2020_man',
    type: 'award',
    date: 'Jan. 2020',
    participants: 'Man',
    images: [
      '/images/Activities/award_mmm_2020_man_1.avif',
      '/images/Activities/award_mmm_2020_man_2.avif',
      '/images/Activities/award_mmm_2020_man_3.avif',
      '/images/Activities/award_mmm_2020_man_4.avif',
      '/images/Activities/award_mmm_2020_man_5.avif',
    ],
    title: 'award_mmm_2020_man.title',
    venue: 'award_mmm_2020_man.venue',
    location: 'award_mmm_2020_man.location',
  },

  // 2019
  {
    id: 'conf_cvmp_2019_man',
    type: 'conference',
    date: 'Dec. 2019',
    participants: 'Man',
    images: [
      '/images/Activities/conf_cvmp_2019_man_1.avif',
      '/images/Activities/conf_cvmp_2019_man_2.avif',
    ],
    title: 'conf_cvmp_2019_man.title',
    venue: 'conf_cvmp_2019_man.venue',
    location: 'conf_cvmp_2019_man.location',
  },
  {
    id: 'conf_pcs_2019_hoang',
    type: 'conference',
    date: 'Nov. 2019',
    participants: 'Hoang',
    images: ['/images/Activities/conf_pcs_2019_hoang_1.avif'],
    title: 'conf_pcs_2019_hoang.title',
    venue: 'conf_pcs_2019_hoang.venue',
    location: 'conf_pcs_2019_hoang.location',
  },
  {
    id: 'event_outing_autumn_2019',
    type: 'ordinary',
    date: 'Nov. 2019',
    images: [
      '/images/Activities/event_outing_autumn_2019_1.avif',
      '/images/Activities/event_outing_autumn_2019_2.avif',
      '/images/Activities/event_outing_autumn_2019_3.avif',
      '/images/Activities/event_outing_autumn_2019_4.avif',
      '/images/Activities/event_outing_autumn_2019_5.avif',
    ],
    title: 'event_outing_autumn_2019.title',
  },
  {
    id: 'event_entrance_2019',
    type: 'ordinary',
    date: 'Sep. 2019',
    images: [
      '/images/Activities/event_entrance_2019_1.avif',
      '/images/Activities/event_entrance_2019_2.avif',
    ],
    title: 'event_entrance_2019.title',
  },
  {
    id: 'conf_isair_2019_chi',
    type: 'conference',
    date: 'Aug. 2019',
    participants: 'Chi',
    images: ['/images/Activities/conf_isair_2019_chi_1.avif'],
    title: 'conf_isair_2019_chi.title',
    venue: 'conf_isair_2019_chi.venue',
    location: 'conf_isair_2019_chi.location',
  },
  {
    id: 'event_outing_summer_2019',
    type: 'ordinary',
    date: 'Jul. 2019',
    images: [
      '/images/Activities/event_outing_summer_2019_1.avif',
      '/images/Activities/event_outing_summer_2019_2.avif',
      '/images/Activities/event_outing_summer_2019_3.avif',
      '/images/Activities/event_outing_summer_2019_4.avif',
    ],
    title: 'event_outing_summer_2019.title',
  },
  {
    id: 'event_outing_spring_2019',
    type: 'ordinary',
    date: 'Apr. 2019',
    images: [
      '/images/Activities/event_outing_spring_2019_1.avif',
      '/images/Activities/event_outing_spring_2019_2.avif',
      '/images/Activities/event_outing_spring_2019_3.avif',
    ],
    title: 'event_outing_spring_2019.title',
  },
  {
    id: 'conf_talk_dcc_2019_jinjia_jay',
    type: 'conference',
    date: 'Apr. 2019',
    participants: 'Jinjia, Jay',
    images: [
      '/images/Activities/conf_talk_dcc_2019_jinjia_jay_1.avif',
      '/images/Activities/conf_talk_dcc_2019_jinjia_jay_2.avif',
    ],
    title: 'conf_talk_dcc_2019_jinjia_jay.title',
    venue: 'conf_talk_dcc_2019_jinjia_jay.venue',
  },
  {
    id: 'event_visit_taiwan_2019',
    type: 'ordinary',
    date: 'Jan. 2019',
    images: [
      '/images/Activities/event_visit_taiwan_2019_1.avif',
      '/images/Activities/event_visit_taiwan_2019_2.avif',
      '/images/Activities/event_visit_taiwan_2019_3.avif',
      '/images/Activities/event_visit_taiwan_2019_4.avif',
      '/images/Activities/event_visit_taiwan_2019_5.avif',
      '/images/Activities/event_visit_taiwan_2019_6.avif',
    ],
    title: 'event_visit_taiwan_2019.title',
  },
  {
    id: 'event_visit_singapore_2019',
    type: 'ordinary',
    date: 'Jan. 2019',
    images: [
      '/images/Activities/event_visit_singapore_2019_1.avif',
      '/images/Activities/event_visit_singapore_2019_2.avif',
    ],
    title: 'event_visit_singapore_2019.title',
  },
  {
    id: 'event_workshop_media_2019',
    type: 'ordinary',
    date: 'Jan. 2019',
    images: ['/images/Activities/event_workshop_media_2019_1.avif'],
    title: 'event_workshop_media_2019.title',
  },

  // 2018
  {
    id: 'event_bbq_2018',
    type: 'ordinary',
    date: 'Jun. 2018',
    images: [
      '/images/Activities/event_bbq_2018_1.avif',
      '/images/Activities/event_bbq_2018_2.avif',
      '/images/Activities/event_bbq_2018_3.avif',
      '/images/Activities/event_bbq_2018_4.avif',
      '/images/Activities/event_bbq_2018_5.avif',
    ],
    title: 'event_bbq_2018.title',
  },

  // 更多活动可在此处追加...
])

// 4. 数据管道处理
// 步骤 A：搜索过滤
const filteredActivities = computed(() => {
  if (!searchQuery.value.trim()) return allActivities.value

  const query = searchQuery.value.toLowerCase()
  return allActivities.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) || item.description?.toLowerCase().includes(query),
  )
})

// 步骤 B：分页/渐进显示
const displayedActivities = computed(() => {
  // 如果正在搜索，展示所有匹配结果以防遗漏
  if (searchQuery.value.trim()) return filteredActivities.value

  // 否则根据 visibleCount 截取
  return filteredActivities.value.slice(0, visibleCount.value)
})

// 5. 交互方法
const hasMore = computed(() => visibleCount.value < filteredActivities.value.length)

const loadMore = () => {
  visibleCount.value += 2 // 每次加载更多 2 个
}
</script>
