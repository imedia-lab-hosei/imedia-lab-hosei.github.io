<template>
  <span :title="safeDate?.toLocaleString()">{{ timeAgo }}</span>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useTimeAgo } from '@vueuse/core'
import type { UseTimeAgoMessages } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  date: {
    type: [String, Date, Number],
    default: '',
  },
})

const { date } = toRefs(props)
const { t } = useI18n()

// 1. 处理日期安全转换
const safeDate = computed(() => {
  const val = date.value
  if (!val) return new Date()
  if (typeof val === 'string') {
    // 兼容 iOS 的横杠日期格式
    return val.includes('-') ? new Date(val.replace(/-/g, '/')) : new Date(val)
  }
  return new Date(val)
})

// 2. 构建语言包映射
// 这里的 n 是 VueUse 传递的数值，[n] 对应 i18n JSON 中的 {0}
const messages = computed<UseTimeAgoMessages>(() => ({
  justNow: t('timeAgo.just_now'),
  invalid: t('timeAgo.invalid'),

  // 过去和未来的修饰词
  past: (n) => (n.match(/\d/) ? t('timeAgo.past', [n]) : n),
  future: (n) => (n.match(/\d/) ? t('timeAgo.future', [n]) : n),

  // 时间单位
  second: (n) => t('timeAgo.second', [n]),
  minute: (n) => t('timeAgo.minute', [n]),
  hour: (n) => t('timeAgo.hour', [n]),
  day: (n, past) =>
    n === 1 ? (past ? t('timeAgo.yesterday') : t('timeAgo.tomorrow')) : t('timeAgo.day', [n]),

  week: (n, past) =>
    n === 1 ? (past ? t('timeAgo.last_week') : t('timeAgo.next_week')) : t('timeAgo.week', [n]),

  month: (n, past) =>
    n === 1 ? (past ? t('timeAgo.last_month') : t('timeAgo.next_month')) : t('timeAgo.month', [n]),

  year: (n, past) =>
    n === 1 ? (past ? t('timeAgo.last_year') : t('timeAgo.next_year')) : t('timeAgo.year', [n]),
}))

// 3. 实例化 TimeAgo
// 注意：不要在外部定义 options.value，直接把 reactive 对象传进去
const timeAgo = useTimeAgo(safeDate, {
  messages: messages.value,
  // 每 1 分钟自动更新一次界面，确保“1小时前”能准时变“2小时前”
  updateInterval: 60000,
  // 如果你需要更精确的控制，可以取消注释下面的 units 自定义
  /*
  units: [
    { max: 60000, value: 1, unit: 'second' },
    { max: 3600000, value: 60000, unit: 'minute' },
    { max: 86400000, value: 3600000, unit: 'hour' }, // 24小时内识别为小时
    { max: 604800000, value: 86400000, unit: 'day' },
  ]
  */
})
</script>
