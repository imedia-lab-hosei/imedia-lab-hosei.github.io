<template>
  <UContainer class="py-12">
    <div class="mb-12 text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight text-foreground">
        {{ $t('webtoolsView.bookmarks.title') }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
        {{ $t('webtoolsView.bookmarks.subtitle') }}
      </p>

      <div class="max-w-md mx-auto mt-6">
        <UInput
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass"
          :placeholder="$t('webtoolsView.bookmarks.search_placeholder')"
          size="lg"
          class="w-full"
        />
      </div>
    </div>

    <div v-for="group in filteredData" :key="group.categoryKey" class="mb-12">
      <div class="flex items-center gap-2 mb-6 border-b border-border pb-2">
        <UIcon :name="group.icon" class="text-primary w-6 h-6" />
        <h2 class="text-2xl font-bold text-foreground">
          {{ $t(group.categoryKey) }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="site in group.items"
          :key="site.name"
          :href="site.url"
          target="_blank"
          class="group relative flex flex-col p-5 bg-card text-card-foreground border border-border rounded-xl transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <UIcon :name="site.icon" class="w-6 h-6 text-primary" />
              </div>
              <span class="font-bold text-lg group-hover:text-primary transition-colors">
                {{ site.name }}
              </span>
            </div>

            <UIcon
              name="i-heroicons-arrow-up-right"
              class="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
            />
          </div>

          <p class="text-sm text-muted-foreground leading-relaxed">
            <!-- line-clamp-2 -->
            {{ $t(site.descKey) }}
          </p>
        </a>
      </div>
    </div>

    <div v-if="filteredData.length === 0" class="text-center py-20 text-muted-foreground">
      <UIcon name="i-heroicons-face-frown" class="w-12 h-12 mb-4 mx-auto opacity-50" />
      <p>{{ $t('webtoolsView.bookmarks.no_results', { query: searchQuery }) }}</p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// --- 类型定义 (更新为 Key 字段) ---
interface WebsiteItem {
  name: string
  descKey: string // 存储 i18n key
  url: string
  icon: string
}

interface CategoryGroup {
  categoryKey: string // 存储 i18n key
  icon: string
  items: WebsiteItem[]
}

// --- 数据源 (值已替换为 JSON 中的 Key) ---
const rawData: CategoryGroup[] = [
  {
    categoryKey: 'webtoolsView.bookmarks.categories.dev',
    icon: 'i-heroicons-code-bracket',
    items: [
      {
        name: 'Vue.js',
        descKey: 'webtoolsView.bookmarks.items.vue_desc',
        url: 'https://vuejs.org/',
        icon: 'simple-icons:vuedotjs',
      },
      {
        name: 'Nuxt UI',
        descKey: 'webtoolsView.bookmarks.items.nuxt_desc',
        url: 'https://ui.nuxt.com/',
        icon: 'simple-icons:nuxt',
      },
      {
        name: 'Tailwind CSS',
        descKey: 'webtoolsView.bookmarks.items.tailwind_desc',
        url: 'https://tailwindcss.com/',
        icon: 'simple-icons:tailwindcss',
      },
      {
        name: 'Vite',
        descKey: 'webtoolsView.bookmarks.items.vite_desc',
        url: 'https://vitejs.dev/',
        icon: 'simple-icons:vite',
      },
      {
        name: 'Inspira Ui',
        descKey: 'webtoolsView.bookmarks.items.inspira_desc',
        url: 'https://inspira-ui.com/',
        icon: 'lucide:squares-unite',
      },
      {
        name: 'Pinia',
        descKey: 'webtoolsView.bookmarks.items.pinia_desc',
        url: 'https://pinia.vuejs.org/',
        icon: 'simple-icons:pinia',
      },
      {
        name: 'Wix',
        descKey: 'webtoolsView.bookmarks.items.wix_desc',
        url: 'https://www.wix.com/',
        icon: 'simple-icons:wix',
      },
    ],
  },
  {
    categoryKey: 'webtoolsView.bookmarks.categories.design',
    icon: 'i-heroicons-paint-brush',
    items: [
      {
        name: 'Dribbble',
        descKey: 'webtoolsView.bookmarks.items.dribbble_desc',
        url: 'https://dribbble.com/',
        icon: 'i-ph-dribbble-logo',
      },
      {
        name: 'Coolors',
        descKey: 'webtoolsView.bookmarks.items.coolors_desc',
        url: 'https://coolors.co/',
        icon: 'i-ph-palette',
      },
      {
        name: 'Lucide Icons',
        descKey: 'webtoolsView.bookmarks.items.lucide_desc',
        url: 'https://lucide.dev/',
        icon: 'simple-icons:lucide',
      },
      {
        name: 'Icônes',
        descKey: 'webtoolsView.bookmarks.items.icones_desc',
        url: 'https://icones.js.org/',
        icon: 'lucide:star',
      },
    ],
  },
  {
    categoryKey: 'webtoolsView.bookmarks.categories.productivity',
    icon: 'i-heroicons-bolt',
    items: [
      {
        name: 'ChatGPT',
        descKey: 'webtoolsView.bookmarks.items.chatgpt_desc',
        url: 'https://chat.openai.com/',
        icon: 'simple-icons:openai',
      },
      {
        name: 'Gemini',
        descKey: 'webtoolsView.bookmarks.items.gemini_desc',
        url: 'https://gemini.google.com/app',
        icon: 'simple-icons:googlegemini',
      },
    ],
  },
]

// --- 逻辑处理 ---
const searchQuery = ref('')

// 使用 computed 自动响应语言切换
const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()

  if (!query) return rawData

  return (
    rawData
      .map((group) => {
        // 过滤组内的项目
        const filteredItems = group.items.filter((item) => {
          // 搜索匹配：名字 (原文) 或 描述 (翻译后的文本!)
          const nameMatch = item.name.toLowerCase().includes(query)
          // 重点：使用 t(item.descKey) 获取当前语言的描述进行搜索
          const descMatch = t(item.descKey).toLowerCase().includes(query)

          return nameMatch || descMatch
        })

        return { ...group, items: filteredItems }
      })
      // 移除空组
      .filter((group) => group.items.length > 0)
  )
})
</script>
