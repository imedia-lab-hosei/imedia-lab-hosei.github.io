<template>
  <span>{{ timeAgo }}</span>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useTimeAgo } from '@vueuse/core'
import type { UseTimeAgoMessages, UseTimeAgoOptions } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

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

const { t } = useI18n()

const messages = computed<UseTimeAgoMessages>(() => ({
  justNow: t('timeAgo.just_now'),
  invalid: t('timeAgo.invalid'),

  // past 和 future 你之前写的是对的 (用了 [n])
  past: (n) => (n.match(/\d/) ? t('timeAgo.past', [n]) : n),
  future: (n) => (n.match(/\d/) ? t('timeAgo.future', [n]) : n),

  // 👇 这里的 n 必须变成 [n] 才能匹配 JSON 中的 {0}
  second: (n) => t('timeAgo.second', [n]),
  minute: (n) => t('timeAgo.minute', [n]),
  hour: (n) => t('timeAgo.hour', [n]),

  // 👇 对于 day, week, month, year 也是同理
  day: (n, past) =>
    n === 1 ? (past ? t('timeAgo.yesterday') : t('timeAgo.tomorrow')) : t('timeAgo.day', [n]),

  week: (n, past) =>
    n === 1 ? (past ? t('timeAgo.last_week') : t('timeAgo.next_week')) : t('timeAgo.week', [n]),

  month: (n, past) =>
    n === 1 ? (past ? t('timeAgo.last_month') : t('timeAgo.next_month')) : t('timeAgo.month', [n]),

  year: (n, past) =>
    n === 1 ? (past ? t('timeAgo.last_year') : t('timeAgo.next_year')) : t('timeAgo.year', [n]),
}))

const options: UseTimeAgoOptions<false> = computed(() => ({ messages: messages.value })).value

const timeAgo = useTimeAgo(safeDate, options)
</script>
