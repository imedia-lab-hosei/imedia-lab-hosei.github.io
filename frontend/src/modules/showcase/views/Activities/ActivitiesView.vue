<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">Lab Life</p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ t('activities.header.title') }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ t('activities.header.description') }}
        </p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Search + Filter Row -->
      <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-12">
        <UInput
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass"
          :placeholder="t('activities.ui.search_placeholder')"
          class="w-full sm:w-72"
          variant="outline"
        />
        <div class="flex gap-2 flex-wrap">
          <button
            v-for="tab in filterTabs"
            :key="tab.value"
            class="text-xs font-bold px-4 py-1.5 rounded-full transition-all"
            :class="
              typeFilter === tab.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            "
            @click="typeFilter = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- No results -->
      <div v-if="displayedActivities.length === 0" class="py-20 text-center text-muted-foreground">
        <UIcon name="i-heroicons-camera" class="w-12 h-12 mx-auto mb-3 opacity-30" />
        <p>{{ t('activities.ui.no_results') }}</p>
      </div>

      <!-- Activity Cards -->
      <div class="space-y-10">
        <article
          v-for="activity in displayedActivities"
          :key="activity.id"
          class="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors group"
        >
          <!-- Card Header -->
          <div class="p-6 space-y-3">
            <div class="flex flex-wrap items-center gap-2">
              <!-- Date -->
              <span
                class="text-xs font-bold font-mono text-primary bg-primary/10 px-3 py-1 rounded-full"
              >
                {{ activity.date }}
              </span>
              <!-- Type badge -->
              <span
                v-if="activity.type !== 'ordinary'"
                class="text-xs font-bold px-2.5 py-1 rounded-full"
                :class="
                  activity.type === 'award'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                "
              >
                {{ t(`activities.types.${activity.type}`) }}
              </span>
            </div>

            <h2
              class="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug"
            >
              {{ t(`activities.list.${activity.title}`) }}
            </h2>

            <!-- Metadata row -->
            <div v-if="activity.type !== 'ordinary'" class="flex flex-wrap gap-x-5 gap-y-1.5 pt-1">
              <div v-if="activity.venue" class="flex items-center gap-1.5 text-sm text-foreground">
                <UIcon
                  :name="
                    activity.type === 'award' ? 'i-heroicons-trophy' : 'i-heroicons-academic-cap'
                  "
                  class="w-4 h-4 text-primary shrink-0"
                />
                <span class="font-medium">{{ t(`activities.list.${activity.venue}`) }}</span>
              </div>
              <div
                v-if="activity.location"
                class="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 shrink-0" />
                <span>{{ t(`activities.list.${activity.location}`) }}</span>
              </div>
              <div
                v-if="activity.participants"
                class="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <UIcon name="i-heroicons-user-group" class="w-4 h-4 shrink-0" />
                <span>{{ activity.participants }}</span>
              </div>
            </div>

            <p
              v-if="activity.description"
              class="text-sm text-muted-foreground leading-relaxed border-l-[3px] border-primary/30 pl-4"
            >
              {{ activity.description }}
            </p>
          </div>

          <!-- Gallery -->
          <div class="px-6 pb-6">
            <ExpandableGallery :images="activity.images" class="rounded-xl overflow-hidden" />
          </div>
        </article>
      </div>

      <!-- Load More -->
      <div v-if="hasMore && !searchQuery && typeFilter === 'all'" class="flex justify-center pt-10">
        <UButton variant="soft" color="primary" icon="i-heroicons-arrow-down" @click="loadMore">
          {{ t('activities.ui.load_more') }}
        </UButton>
      </div>
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
const typeFilter = ref('all')
const visibleCount = ref(2) // 初始显示 2 个活动

// 过滤标签
const filterTabs = computed(() => [
  { label: 'All', value: 'all' },
  { label: t('activities.types.conference'), value: 'conference' },
  { label: t('activities.types.award'), value: 'award' },
  { label: t('activities.types.event'), value: 'ordinary' },
])

// 3. 原始数据 (Data-Driven)
// 注意：title 和 description 依然使用 t()，但不设默认值，强制从 JSON 读取
const allActivities = computed<ActivityItem[]>(() => [
  // 2026
  {
    id: 'event_graduation_2026',
    type: 'ordinary',
    date: 'Apr. 2026',
    images: [
      '/images/Activities/event_graduation_2026_1.webp',
      '/images/Activities/event_graduation_2026_2.webp',
      '/images/Activities/event_graduation_2026_3.webp',
    ],
    title: 'event_graduation_2026.title',
  },

  // 2025
  {
    id: 'event_xmas_2025',
    type: 'ordinary',
    date: 'Dec. 2025',
    images: [
      '/images/Activities/event_xmas_2025_1.webp',
      '/images/Activities/event_xmas_2025_4.jpg',
      '/images/Activities/event_xmas_2025_5.jpg',
    ],
    title: 'event_xmas_2025.title',
  },
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
// 步骤 A：搜索 + 类型过滤
const filteredActivities = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  return allActivities.value.filter((item) => {
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    const matchesType = typeFilter.value === 'all' || item.type === typeFilter.value
    return matchesQuery && matchesType
  })
})

// 步骤 B：分页/渐进显示
const displayedActivities = computed(() => {
  if (searchQuery.value.trim() || typeFilter.value !== 'all') return filteredActivities.value
  return filteredActivities.value.slice(0, visibleCount.value)
})

// 5. 交互方法
const hasMore = computed(() => visibleCount.value < filteredActivities.value.length)

const loadMore = () => {
  visibleCount.value += 2 // 每次加载更多 2 个
}
</script>
