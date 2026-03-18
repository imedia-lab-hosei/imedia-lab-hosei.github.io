<template>
  <div class="max-w-4xl mx-auto px-6 py-24 space-y-24 bg-background min-h-screen">
    <header class="space-y-8">
      <div class="space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          {{ pageContent.header.title }}
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {{ pageContent.header.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-4">
        <UButton
          v-for="link in pageContent.quickLinks"
          :key="link.label"
          :icon="link.icon"
          :to="link.url"
          variant="solid"
          class="shadow-sm ring-border"
        >
          {{ link.label }}
        </UButton>
      </div>
    </header>

    <section v-for="section in pageContent.sections" :key="section.id" class="space-y-12">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <h2 class="text-2xl font-medium tracking-tight text-foreground">
            {{ section.title }}
          </h2>
          <UBadge
            v-if="section.frequency"
            color="primary"
            variant="subtle"
            class="font-mono text-xs tracking-wider"
          >
            {{ section.frequency }}
          </UBadge>
        </div>
        <UDivider class="border-border" />
      </div>

      <div v-if="section.layout === 'seminar'" class="space-y-8">
        <p class="text-muted-foreground leading-relaxed">
          {{ section.description }}
        </p>

        <UCard class="bg-card border-border ring-border shadow-none">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="info in section.metadata" :key="info.label" class="space-y-2">
              <div class="flex items-center space-x-2 text-foreground font-medium">
                <UIcon :name="info.icon" class="w-5 h-5 text-muted-foreground" />
                <span>{{ info.label }}</span>
              </div>
              <ul class="space-y-1 text-sm text-muted-foreground pl-7">
                <li
                  v-for="(val, idx) in info.values"
                  :key="idx"
                  class="relative before:content-[''] before:absolute before:w-1 before:h-1 before:bg-muted-foreground/50 before:rounded-full before:left-[-12px] before:top-2"
                >
                  {{ val }}
                </li>
              </ul>
            </div>
          </div>
        </UCard>
      </div>

      <div
        v-else-if="section.layout === 'study-groups'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <UCard
          v-for="group in section.subGroups"
          :key="group.title"
          class="bg-card border-border ring-border hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
        >
          <template #header>
            <h3 class="text-lg font-medium text-foreground leading-snug">
              {{ group.title }}
            </h3>
            <span v-if="group.target" class="text-xs text-muted-foreground mt-1 block">
              {{ group.target }}
            </span>
          </template>
          <p class="text-sm text-muted-foreground leading-relaxed flex-1">
            {{ group.description }}
          </p>
          <template v-if="group.note" #footer>
            <span class="text-xs font-medium text-foreground bg-muted px-2 py-1 rounded-md">
              {{ group.note }}
            </span>
          </template>
        </UCard>
      </div>

      <div v-else-if="section.layout === 'action-alert'">
        <UAlert
          icon="i-heroicons-envelope"
          variant="soft"
          class="border border-border"
          :title="section.title"
          :description="section.description"
          :actions="section.actions"
        />
      </div>
    </section>
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
