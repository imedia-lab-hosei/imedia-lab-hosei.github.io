<template>
  <UDropdownMenu :items="items" :popper="{ placement: 'bottom-end' }" mode="hover">
    <UButton
      :icon="currentIcon"
      variant="ghost"
      class="w-10 h-10 flex items-center justify-center text-xl"
    >
    </UButton>
    <template #checked-trailing>
      <UIcon name="i-heroicons-check" class="shrink-0 size-5 text-primary" />
    </template>
  </UDropdownMenu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 1. 定义语言配置（配置表）
const languages = [
  { code: 'zh', label: '简体中文', icon: 'circle-flags:cn' },
  { code: 'en', label: 'English', icon: 'circle-flags:us' },
  { code: 'ja', label: '日本語', icon: 'circle-flags:ja' },
]

// 2. 计算当前显示的旗帜
const currentIcon = computed(() => {
  const lang = languages.find((l) => l.code === locale.value)
  return lang ? lang.icon : '🌐'
})

// 3. 核心切换逻辑
const setLang = (langCode: string) => {
  locale.value = langCode
  localStorage.setItem('locale', langCode)
  document.querySelector('html')?.setAttribute('lang', langCode)
}

// 4. 构建 UDropdown 需要的 items 数据结构
// 注意：Nuxt UI 的 items 是一个二维数组 [[...]]
const items = computed(() => [
  languages.map((lang) => ({
    label: lang.label, // 菜单文字
    labelClass: locale.value === lang.code ? 'text-primary font-bold' : '', // 高亮当前选中
    // icon: locale.value === lang.code ? 'i-heroicons-check' : lang.icon, // 可选：选中时显示勾选图标
    slot: locale.value === lang.code ? 'checked' : undefined,
    // 点击事件
    onSelect: () => setLang(lang.code),
  })),
])
</script>
