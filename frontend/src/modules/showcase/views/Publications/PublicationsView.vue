<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">{{ $t('publications.header.label') }}</p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ pageContent.header.title }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10">
          {{ pageContent.header.description }}
        </p>

        <!-- Summary Stats -->
        <div class="flex flex-wrap gap-6">
          <div v-for="stat in summaryStats" :key="stat.label" class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <UIcon :name="stat.icon" class="w-4 h-4 text-primary" />
            </div>
            <div>
              <p class="text-xl font-extrabold text-foreground leading-none">{{ stat.value }}</p>
              <p class="text-xs text-muted-foreground mt-0.5">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <!-- Publications Section -->
      <section class="space-y-8">
        <!-- Section Header -->
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ pageContent.sections.publications }}</h2>
          <div class="flex-1 h-px bg-border" />
        </div>

        <!-- Search + Filter Row -->
        <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass"
            :placeholder="pageContent.ui.searchPlaceholder"
            class="w-full sm:w-80"
            variant="outline"
          />
          <div class="flex gap-2">
            <button
              v-for="tab in typeTabs"
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

        <!-- No Results -->
        <div
          v-if="displayedPublications.length === 0"
          class="py-16 text-center text-muted-foreground"
        >
          <UIcon name="i-heroicons-magnifying-glass" class="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p>{{ pageContent.ui.noResults }}</p>
        </div>

        <!-- Year Groups -->
        <div class="space-y-12">
          <div
            v-for="yearGroup in displayedPublications"
            :key="yearGroup.year"
            class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
          >
            <!-- Year Label -->
            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
              <span
                class="text-3xl font-extrabold text-foreground sticky top-24 leading-none tracking-tight"
              >
                {{ yearGroup.year }}
              </span>
              <span class="text-xs text-muted-foreground font-mono hidden md:block">
                {{ yearGroup.items.length }}
                {{ yearGroup.items.length === 1 ? t('publications.ui.paper_singular') : t('publications.ui.paper_plural') }}
              </span>
            </div>

            <!-- Papers -->
            <div class="md:col-span-10 space-y-4">
              <article
                v-for="(paper, index) in yearGroup.items"
                :key="index"
                class="group p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/2 transition-all"
              >
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    class="text-xs font-bold px-2.5 py-0.5 rounded-full"
                    :class="
                      paper.type === 'Journal'
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    "
                  >
                    {{ t(`publications.types.${paper.type.toLowerCase()}`) }}
                  </span>
                  <span class="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-mono">
                    {{ paper.venue }}
                  </span>
                  <span class="text-xs text-muted-foreground font-mono ml-auto">{{ paper.date }}</span>
                </div>
                <h4
                  class="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-1.5"
                >
                  {{ paper.title }}
                </h4>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  {{ paper.authors }}
                </p>
              </article>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div v-if="hasMoreYears && !searchQuery && typeFilter === 'all'" class="flex justify-center pt-4">
          <UButton
            variant="soft"
            color="primary"
            icon="i-heroicons-arrow-down"
            @click="loadMoreYears"
          >
            {{ pageContent.ui.loadMore }}
          </UButton>
        </div>
      </section>

      <!-- Patents Section -->
      <section class="space-y-8">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ pageContent.sections.patents }}</h2>
          <span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {{ patents.length }}
          </span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="space-y-4">
          <div
            v-for="(patent, index) in patents"
            :key="index"
            class="flex flex-col md:flex-row gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group"
          >
            <div class="flex gap-4 flex-1">
              <div
                class="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0 mt-0.5"
              >
                <UIcon name="i-heroicons-document-check" class="w-4 h-4 text-primary" />
              </div>
              <div class="flex-1 space-y-1">
                <h4
                  class="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors"
                >
                  {{ patent.title }}
                </h4>
                <p class="text-xs text-muted-foreground">{{ patent.inventors }}</p>
              </div>
            </div>
            <div class="flex md:flex-col items-center md:items-end gap-2 shrink-0 pl-13 md:pl-0">
              <span
                class="text-xs font-bold font-mono px-3 py-1 rounded-lg bg-muted text-foreground border border-border"
              >
                {{ patent.number }}
              </span>
              <span class="text-xs text-muted-foreground font-mono whitespace-nowrap">{{ patent.date }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Invited Talks Section -->
      <section class="space-y-8 pb-8">
        <div class="flex items-center gap-4">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">{{ pageContent.sections.talks }}</h2>
          <span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {{ talks.length }}
          </span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(talk, index) in talks"
            :key="index"
            class="flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-primary/2 transition-all group"
          >
            <div
              class="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0 mt-0.5"
            >
              <UIcon name="i-heroicons-microphone" class="w-4 h-4 text-primary" />
            </div>
            <div class="flex-1 space-y-1.5">
              <h4
                class="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors"
              >
                {{ talk.title }}
              </h4>
              <p class="text-xs text-muted-foreground leading-relaxed">
                {{ talk.event }}
              </p>
              <span class="inline-block text-xs font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                {{ talk.date }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { publications, type PublicationYear } from './publications'
import { data_talks, type Talk } from './talks'
import { data_patents, type Patent } from './patent'

const { t } = useI18n()

// 国际化 UI 框架数据
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

// 原始数据
const allPublications: PublicationYear[] = publications
const patents: Patent[] = data_patents
const talks: Talk[] = data_talks

// 摘要统计
const summaryStats = computed(() => {
  const totalPapers = allPublications.reduce((sum, y) => sum + y.items.length, 0)
  const journals = allPublications.reduce(
    (sum, y) => sum + y.items.filter((p) => p.type === 'Journal').length,
    0,
  )
  const conferences = allPublications.reduce(
    (sum, y) => sum + y.items.filter((p) => p.type === 'Conference').length,
    0,
  )
  return [
    { label: t('publications.sections.publications'), value: `${totalPapers}+`, icon: 'i-heroicons-document-text' },
    { label: t('publications.stats.journal_articles'), value: `${journals}+`, icon: 'i-heroicons-book-open' },
    { label: t('publications.stats.conference_papers'), value: `${conferences}+`, icon: 'i-heroicons-presentation-chart-bar' },
    { label: t('publications.sections.patents'), value: `${patents.length}`, icon: 'i-heroicons-document-check' },
  ]
})

// 搜索与筛选
const searchQuery = ref('')
const typeFilter = ref('all')
const visibleYearsCount = ref(1)

const typeTabs = computed(() => [
  { label: t('publications.ui.filter_all'), value: 'all' },
  { label: t('publications.ui.filter_journal'), value: 'Journal' },
  { label: t('publications.ui.filter_conference'), value: 'Conference' },
])

// 过滤逻辑
const filteredPublications = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  return allPublications
    .map((yearGroup) => {
      const matchedItems = yearGroup.items.filter((paper) => {
        const matchesQuery =
          !query ||
          paper.title.toLowerCase().includes(query) ||
          paper.authors.toLowerCase().includes(query) ||
          paper.date.toLowerCase().includes(query)
        const matchesType = typeFilter.value === 'all' || paper.type === typeFilter.value
        return matchesQuery && matchesType
      })
      return { ...yearGroup, items: matchedItems }
    })
    .filter((yearGroup) => yearGroup.items.length > 0)
})

// 截断显示（仅在无搜索且无类型筛选时生效）
const displayedPublications = computed(() => {
  if (searchQuery.value.trim() || typeFilter.value !== 'all') {
    return filteredPublications.value
  }
  return filteredPublications.value.slice(0, visibleYearsCount.value)
})

const hasMoreYears = computed(() => visibleYearsCount.value < allPublications.length)

const loadMoreYears = () => {
  visibleYearsCount.value += 3
}
</script>
