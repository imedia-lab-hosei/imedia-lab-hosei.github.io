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
          <span
            class="w-4 h-4 rounded-full border shrink-0"
            :style="{ backgroundColor: item.hex }"
          ></span>
          <span :class="{ 'font-bold': primaryColor === item.value }">
            {{ item.label }}
          </span>
        </div>

        <UIcon
          v-if="primaryColor === item.value"
          name="i-heroicons-check"
          class="size-4 shrink-0"
          :class="`text-${item.value}-500`"
        />
      </div>
    </template>
  </UDropdownMenu>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// 1. 定义当前的主题色状态
const primaryColor = ref('green') // 默认值

// 2. 颜色列表 (包含 Hex 值用于显示圆点)
const colors = [
  { label: 'Green', value: 'green', hex: '#00c951' },
  { label: 'Teal', value: 'teal', hex: '#14b8a6' },
  { label: 'Cyan', value: 'cyan', hex: '#06b6d4' },
  { label: 'Sky', value: 'sky', hex: '#0ea5e9' },
  { label: 'Blue', value: 'blue', hex: '#3b82f6' },
  { label: 'Indigo', value: 'indigo', hex: '#6366f1' },
  { label: 'Violet', value: 'violet', hex: '#8b5cf6' },
  { label: 'Purple', value: 'purple', hex: '#a855f7' },
  { label: 'Fuchsia', value: 'fuchsia', hex: '#d946ef' },
  { label: 'Pink', value: 'pink', hex: '#ec4899' },
  { label: 'Red', value: 'red', hex: '#ef4444' },
  { label: 'Orange', value: 'orange', hex: '#f97316' },
  { label: 'Amber', value: 'amber', hex: '#f59e0b' },
  { label: 'Yellow', value: 'yellow', hex: '#eab308' },
  { label: 'Lime', value: 'lime', hex: '#84cc16' },
  { label: 'Gray', value: 'gray', hex: '#6b7280' },
]

// 3. 核心切换逻辑 (替换了 useAppConfig)
const setPrimary = (colorName: string) => {
  primaryColor.value = colorName

  // 保存到本地存储
  localStorage.setItem('nuxt-ui-primary', colorName)

  // 🔥 关键：修改 CSS 变量 --ui-primary
  // Nuxt UI / Tailwind v4 会自动生成 --color-{name}-500 变量
  // 我们让 --ui-primary 指向这个变量，即可全局变色
  const colorHex = colors.find((c) => c.value === colorName)?.hex
  document.documentElement.style.setProperty('--ui-primary', colorHex ? colorHex : '#00c951')
}

// 4. 初始化
onMounted(() => {
  const savedColor = localStorage.getItem('nuxt-ui-primary')
  // 检查保存的颜色是否在我们的列表里（防止脏数据）
  if (savedColor && colors.some((c) => c.value === savedColor)) {
    setPrimary(savedColor)
  }
})

// 5. 构建 Dropdown 需要的数据结构
const items = computed(() => [
  colors.map((color) => ({
    // 传递原始数据给插槽
    label: color.label,
    value: color.value,
    hex: color.hex,

    // 点击事件
    onSelect: () => setPrimary(color.value),
  })),
])
</script>
