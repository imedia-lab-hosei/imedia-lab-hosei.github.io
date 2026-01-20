<template>
  <span>{{ timeAgo }}</span>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useTimeAgo } from '@vueuse/core'

const props = defineProps({
  date: {
    type: [String, Date, Number],
    default: '',
  },
})

const { date } = toRefs(props)

// 中间层：处理所有可能的脏数据
const safeDate = computed(() => {
  const val = date.value
  // 1. 如果是空的，返回当前时间（显示为"刚刚"），或者抛出 null
  if (!val) return new Date()
  // 2. 如果是字符串，安全地处理 iOS 兼容性
  if (typeof val === 'string') {
    // 只有确实包含 '-' 才去 replace，避免对非标准字符串操作
    return val.includes('-') ? val.replace(/-/g, '/') : val
  }
  return val
})

const timeAgo = useTimeAgo(safeDate)
</script>
