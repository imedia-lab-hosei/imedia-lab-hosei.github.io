// src/stores/theme.ts
import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // 1. 初始化状态：优先读取 localStorage，其次读取系统偏好
  const getInitialTheme = (): boolean => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }

  const isDark = ref<boolean>(getInitialTheme())

  // 2. 切换动作
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // src/stores/theme.ts
  // ... 保持不变
  watchEffect(() => {
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark') // 你的 CSS .dark 会生效，进而改变 --primary
    } else {
      html.classList.remove('dark')
    }
  })

  return {
    isDark,
    toggleTheme,
  }
})
