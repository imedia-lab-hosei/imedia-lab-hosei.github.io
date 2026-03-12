<template>
  <UDropdownMenu :items="items" :content="{ align: 'end', side: 'bottom' }" mode="hover">
    <UButton
      icon="i-heroicons-swatch"
      variant="ghost"
      class="w-8 h-8 flex items-center justify-center text-xl"
    />

    <template #item="{ item }">
      <div class="flex items-center justify-between w-full gap-2">
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 rounded-full shrink-0" :style="{ backgroundColor: item.hex }"></span>
          <span :class="{ 'font-bold': primaryColor === item.value }">
            {{ item.label }}
          </span>
        </div>

        <UIcon
          v-if="primaryColor === item.value"
          name="i-heroicons-check"
          class="size-4 shrink-0"
        />
      </div>
    </template>
  </UDropdownMenu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted } from 'vue'
const { t } = useI18n()

interface colorsType {
  label: string
  value: string
  hex: string
}

// 1. 定义当前的主题色状态
const primaryColor = ref('green') // 默认值

// 1. 定义静态元数据 (不包含 label，因为 label 是动态的)
// 这一部分不会变，可以放在组件外或者作为常量
const staticColorData = [
  { value: 'green', hex: '#00c951' },
  { value: 'teal', hex: '#14b8a6' },
  { value: 'cyan', hex: '#06b6d4' },
  { value: 'sky', hex: '#0ea5e9' },
  { value: 'blue', hex: '#3b82f6' },
  { value: 'indigo', hex: '#6366f1' },
  { value: 'violet', hex: '#8b5cf6' },
  { value: 'purple', hex: '#a855f7' },
  { value: 'fuchsia', hex: '#d946ef' },
  { value: 'pink', hex: '#ec4899' },
  { value: 'red', hex: '#ef4444' },
  { value: 'orange', hex: '#f97316' },
  { value: 'amber', hex: '#f59e0b' },
  { value: 'yellow', hex: '#eab308' },
  { value: 'lime', hex: '#84cc16' },
  { value: 'gray', hex: '#6b7280' },
]

// 2. 使用 computed 生成最终的 colors 数组
// 这样当语言切换时，label 会自动更新
const colors = computed<colorsType[]>(() => {
  return staticColorData.map((c) => ({
    // 动态引用 i18n 键值：colors.green, colors.blue 等
    label: t(`colors.${c.value}`),
    value: c.value,
    hex: c.hex,
  }))
})

// 3. 核心切换逻辑 (替换了 useAppConfig)
const setPrimary = (colorName: string) => {
  primaryColor.value = colorName

  // 保存到本地存储
  localStorage.setItem('nuxt-ui-primary', colorName)

  // 🔥 关键：修改 CSS 变量 --ui-primary
  // Nuxt UI / Tailwind v4 会自动生成 --color-{name}-500 变量
  // 我们让 --ui-primary 指向这个变量，即可全局变色
  const colorHex = colors.value.find((c) => c.value === colorName)?.hex
  document.documentElement.style.setProperty('--ui-primary', colorHex ? colorHex : '#00c951')
}

// 4. 初始化
onMounted(() => {
  const savedColor = localStorage.getItem('nuxt-ui-primary')
  // 检查保存的颜色是否在我们的列表里（防止脏数据）
  if (savedColor && colors.value.some((c) => c.value === savedColor)) {
    setPrimary(savedColor)
  }
})

// 5. 构建 Dropdown 需要的数据结构
const items = computed(() => [
  colors.value.map((color) => ({
    // 传递原始数据给插槽
    label: color.label,
    value: color.value,
    hex: color.hex,

    // 点击事件
    onSelect: () => setPrimary(color.value),
  })),
])
</script>
