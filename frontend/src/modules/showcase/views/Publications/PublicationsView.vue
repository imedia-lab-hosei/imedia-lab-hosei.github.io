<template>
  <div class="max-w-4xl mx-auto px-6 py-24 space-y-24 bg-background min-h-screen">
    <header class="space-y-6">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-primary">
        {{ pageContent.header.title }}
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {{ pageContent.header.description }}
      </p>
    </header>

    <section class="space-y-12">
      <div class="space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 class="text-2xl font-medium tracking-tight text-foreground">
            {{ pageContent.sections.publications }}
          </h2>
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass"
            :placeholder="pageContent.ui.searchPlaceholder"
            class="w-full md:w-80"
            variant="outline"
          />
        </div>
        <UDivider class="border-border" />
      </div>

      <div class="space-y-16">
        <div
          v-if="displayedPublications.length === 0"
          class="py-12 text-center text-muted-foreground"
        >
          {{ pageContent.ui.noResults }}
        </div>

        <div
          v-for="yearGroup in displayedPublications"
          :key="yearGroup.year"
          class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >
          <div class="md:col-span-2">
            <h3 class="text-3xl font-light text-foreground sticky top-24">
              {{ yearGroup.year }}
            </h3>
          </div>

          <div class="md:col-span-10 space-y-10">
            <article
              v-for="(paper, index) in yearGroup.items"
              :key="index"
              class="group flex flex-col space-y-2 relative pl-4 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-border hover:before:bg-primary before:transition-colors duration-300"
            >
              <h4
                class="text-lg font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-300"
              >
                {{ paper.title }}
              </h4>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {{ paper.authors }}
              </p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <UBadge variant="subtle" color="primary" class="font-mono text-xs">
                  {{ paper.venue }}
                </UBadge>
                <span class="text-xs text-muted-foreground font-mono">
                  {{ paper.date }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div v-if="hasMoreYears && !searchQuery" class="flex justify-center pt-8">
        <UButton
          variant="soft"
          icon="i-heroicons-arrow-path"
          class="ring-border hover:bg-muted transition-colors"
          @click="loadMoreYears"
        >
          {{ pageContent.ui.loadMore }}
        </UButton>
      </div>
    </section>

    <section class="space-y-12">
      <div class="space-y-4">
        <h2 class="text-2xl font-medium tracking-tight text-foreground">
          {{ pageContent.sections.patents }}
        </h2>
        <UDivider class="border-border" />
      </div>

      <div class="grid grid-cols-1 space-y-6">
        <UCard
          v-for="(patent, index) in patents"
          :key="index"
          class="bg-card border-border ring-border shadow-none hover:shadow-sm transition-shadow"
        >
          <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div class="space-y-2 flex-1">
              <h4 class="text-base font-medium text-foreground">
                {{ patent.title }}
              </h4>
              <p class="text-sm text-muted-foreground">
                {{ patent.inventors }}
              </p>
            </div>
            <div class="flex flex-col md:items-end gap-2 shrink-0">
              <UBadge variant="soft" class="font-mono">
                {{ patent.number }}
              </UBadge>
              <span class="text-xs text-muted-foreground">{{ patent.date }}</span>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <section class="space-y-12 pb-12">
      <div class="space-y-4">
        <h2 class="text-2xl font-medium tracking-tight text-foreground">
          {{ pageContent.sections.talks }}
        </h2>
        <UDivider class="border-border" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(talk, index) in talks" :key="index" class="space-y-2">
          <h4 class="text-base font-medium text-foreground leading-snug">
            {{ talk.title }}
          </h4>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 shrink-0" />
            <UTooltip :text="talk.event">
              <span class="truncate">{{ talk.event }}</span>
            </UTooltip>
          </div>
          <div class="flex items-center gap-2 text-xs text-muted-foreground/80 font-mono pt-1">
            <UIcon name="i-heroicons-calendar" class="w-3.5 h-3.5 shrink-0" />
            <span>{{ talk.date }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { publications, type PublicationYear } from './publications'
import { data_talks, type Talk } from './talks'
import { data_patents, type Patent } from './patent'

const { t } = useI18n()

// 2. 国际化 UI 框架数据 (严格遵守无回退文本规则)
const pageContent = computed(() => {
  return {
    header: {
      title: t('publications.header.title'),
      description: t('publications.header.description'),
    },
    sections: {
      publications: t('publications.sections.publications'),
      patents: t('publications.sections.patents'),
      talks: t('publications.sections.talks'),
    },
    ui: {
      searchPlaceholder: t('publications.ui.search_placeholder'),
      noResults: t('publications.ui.no_results'),
      loadMore: t('publications.ui.load_more'),
    },
  }
})

// 3. 原始数据硬编码 (纯数据实体无需进行多语言响应，降低内存开销)
const allPublications: PublicationYear[] = publications

const patents: Patent[] = data_patents

const talks: Talk[] = data_talks

// 4. 高性能搜索与截断逻辑管道 (Data Pipeline)
const searchQuery = ref('')
const visibleYearsCount = ref(1) // 默认初始显示年份数量

// 第一步：根据搜索词过滤论文
const filteredPublications = computed(() => {
  if (!searchQuery.value.trim()) return allPublications

  const query = searchQuery.value.toLowerCase()
  return allPublications
    .map((yearGroup) => {
      const matchedItems = yearGroup.items.filter(
        (paper) =>
          paper.title.toLowerCase().includes(query) ||
          paper.authors.toLowerCase().includes(query) ||
          paper.date.toLowerCase().includes(query),
      )
      return { ...yearGroup, items: matchedItems }
    })
    .filter((yearGroup) => yearGroup.items.length > 0)
})

// 第二步：处理渲染截断 (仅在非搜索状态下生效)
const displayedPublications = computed(() => {
  if (searchQuery.value.trim()) {
    return filteredPublications.value
  }
  return filteredPublications.value.slice(0, visibleYearsCount.value)
})

// 辅助状态与交互
const hasMoreYears = computed(() => {
  return visibleYearsCount.value < allPublications.length
})

const loadMoreYears = () => {
  visibleYearsCount.value += 3
}
</script>
