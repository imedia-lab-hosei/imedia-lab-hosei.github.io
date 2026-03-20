<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">About Us</p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ pageContent.header.title }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8">
          {{ pageContent.header.description }}
        </p>

        <!-- Quick Links -->
        <div class="flex flex-wrap gap-3">
          <UButton
            v-for="link in pageContent.quickLinks"
            :key="link.label"
            :icon="link.icon"
            :to="link.url"
            target="_blank"
            color="primary"
            variant="soft"
            size="sm"
          >
            {{ link.label }}
          </UButton>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <template v-for="section in pageContent.sections" :key="section.id">
        <!-- Seminar layout -->
        <section v-if="section.layout === 'seminar'" class="space-y-8">
          <div class="flex items-center gap-4">
            <div class="w-1 h-6 rounded-full bg-primary" />
            <h2 class="text-xl font-bold tracking-tight">{{ section.title }}</h2>
            <span
              v-if="section.frequency"
              class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full"
            >
              {{ section.frequency }}
            </span>
            <div class="flex-1 h-px bg-border" />
          </div>

          <p v-if="section.description" class="text-muted-foreground leading-relaxed max-w-3xl">
            {{ section.description }}
          </p>

          <div
            v-if="section.metadata"
            class="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div
              v-for="info in section.metadata"
              :key="info.label"
              class="flex gap-4 p-5 rounded-2xl border border-border bg-card"
            >
              <div
                class="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0 mt-0.5"
              >
                <UIcon :name="info.icon" class="w-4 h-4 text-primary" />
              </div>
              <div class="space-y-2">
                <p class="text-sm font-bold text-foreground">{{ info.label }}</p>
                <ul class="space-y-1">
                  <li
                    v-for="(val, idx) in info.values"
                    :key="idx"
                    class="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div class="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />
                    {{ val }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Study groups layout -->
        <section v-else-if="section.layout === 'study-groups'" class="space-y-8">
          <div class="flex items-center gap-4">
            <div class="w-1 h-6 rounded-full bg-primary" />
            <h2 class="text-xl font-bold tracking-tight">{{ section.title }}</h2>
            <div class="flex-1 h-px bg-border" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              v-for="group in section.subGroups"
              :key="group.title"
              class="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <div>
                <h3 class="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {{ group.title }}
                </h3>
                <span v-if="group.target" class="text-xs text-muted-foreground">
                  {{ group.target }}
                </span>
              </div>
              <p class="text-sm text-muted-foreground leading-relaxed flex-1">
                {{ group.description }}
              </p>
              <span
                v-if="group.note"
                class="text-xs font-semibold text-foreground bg-muted px-3 py-1.5 rounded-lg w-fit"
              >
                {{ group.note }}
              </span>
            </div>
          </div>
        </section>

        <!-- Action alert layout -->
        <section v-else-if="section.layout === 'action-alert'" class="space-y-8">
          <div class="flex items-center gap-4">
            <div class="w-1 h-6 rounded-full bg-primary" />
            <h2 class="text-xl font-bold tracking-tight">{{ section.title }}</h2>
            <div class="flex-1 h-px bg-border" />
          </div>

          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-6 rounded-2xl border border-border bg-card"
          >
            <div class="flex gap-4 items-start">
              <div
                class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
              >
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary" />
              </div>
              <p class="text-sm text-muted-foreground leading-relaxed max-w-lg">
                {{ section.description }}
              </p>
            </div>
            <div class="flex gap-2 shrink-0">
              <UButton
                v-for="action in section.actions"
                :key="action.label"
                :to="action.to"
                target="_blank"
                :icon="action.icon"
                :label="action.label"
                :color="action.color"
                :variant="action.variant"
                size="sm"
              />
            </div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 严格的类型定义
interface Link {
  label: string
  url: string
  icon: string
}

interface Metadata {
  icon: string
  label: string
  values: string[]
}

interface SubGroup {
  title: string
  target?: string
  description: string
  note?: string
}

interface Action {
  label: string
  click?: () => void
  to?: string
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  variant?: 'link' | 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost'
  icon?: string
}

interface Section {
  id: string
  title: string
  frequency?: string
  layout: 'seminar' | 'study-groups' | 'action-alert'
  description?: string
  metadata?: Metadata[]
  subGroups?: SubGroup[]
  actions?: Action[]
}

interface PageContent {
  header: {
    title: string
    description: string
  }
  quickLinks: Link[]
  sections: Section[]
}

const { t } = useI18n()

// 数据驱动与严格的响应式国际化
const pageContent = computed<PageContent>(() => {
  return {
    header: {
      title: t('aboutUs.activities.header.title'),
      description: t('aboutUs.activities.header.description'),
    },
    quickLinks: [
      {
        label: t('aboutUs.activities.links.submission_guide'),
        url: 'https://ccfddl.com/', // 替换为实际路由
        icon: 'i-heroicons-document-text',
      },
      {
        label: t('aboutUs.activities.links.meeting_link'),
        url: 'https://hosei-ac-jp.zoom.us/j/93004417507?pwd=NmNha3cvZTFwUFBPNjVaczBWa3Axdz09', // 替换为实际链接
        icon: 'i-heroicons-video-camera',
      },
    ],
    sections: [
      {
        id: 'general-seminar',
        title: t('aboutUs.activities.seminar.title'),
        frequency: t('aboutUs.activities.frequency.weekly'),
        layout: 'seminar',
        description: t('aboutUs.activities.seminar.description'),
        metadata: [
          {
            icon: 'i-heroicons-language',
            label: t('aboutUs.activities.labels.language'),
            values: [
              t('aboutUs.activities.seminar.lang_slides'),
              t('aboutUs.activities.seminar.lang_talk'),
            ],
          },
          {
            icon: 'i-heroicons-clock',
            label: t('aboutUs.activities.labels.timing'),
            values: [
              t('aboutUs.activities.seminar.time_phd'),
              t('aboutUs.activities.seminar.time_others'),
            ],
          },
        ],
      },
      {
        id: 'study-groups',
        title: t('aboutUs.activities.study_groups.title'),
        layout: 'study-groups',
        subGroups: [
          {
            title: t('aboutUs.activities.study_groups.reading.title'),
            description: t('aboutUs.activities.study_groups.reading.desc'),
            note: t('aboutUs.activities.study_groups.reading.note'),
          },
          {
            title: t('aboutUs.activities.study_groups.theory.title'),
            target: t('aboutUs.activities.study_groups.theory.target'),
            description: t('aboutUs.activities.study_groups.theory.desc'),
          },
          {
            title: t('aboutUs.activities.study_groups.programming.title'),
            target: t('aboutUs.activities.study_groups.programming.target'),
            description: t('aboutUs.activities.study_groups.programming.desc'),
          },
        ],
      },
      {
        id: 'project-report',
        title: t('aboutUs.activities.project_report.title'),
        frequency: t('aboutUs.activities.frequency.monthly'),
        layout: 'seminar',
        metadata: [
          {
            icon: 'i-heroicons-language',
            label: t('aboutUs.activities.labels.language'),
            values: [
              t('aboutUs.activities.seminar.lang_slides'),
              t('aboutUs.activities.seminar.lang_talk'),
            ],
          },
          {
            icon: 'i-heroicons-clock',
            label: t('aboutUs.activities.labels.timing'),
            values: [t('aboutUs.activities.project_report.time')],
          },
        ],
      },
      {
        id: 'weekly-report',
        title: t('aboutUs.activities.weekly_report.title'),
        layout: 'action-alert',
        description: t('aboutUs.activities.weekly_report.desc'),
        actions: [
          {
            label: t('aboutUs.activities.weekly_report.template_btn'),
            to: 'https://docs.google.com/document/d/1K-rSwjxMvNE7hcaTka-ZcBs6gNSpwFba/edit', // 替换为模板链接
            color: 'primary',
            variant: 'solid',
            icon: 'i-heroicons-arrow-down-tray',
          },
        ],
      },
    ],
  }
})
</script>
