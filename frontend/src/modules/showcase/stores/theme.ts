// src/stores/theme.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  // 1. 初始化主题（读取本地存储或系统偏好）
  const initTheme = () => {
    // 优先读取本地存储
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // 如果没有本地存储，跟随系统设置
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = systemDark
    }

    // 应用到 DOM
    applyThemeToDom()
  }

  // 2. 切换主题
  const toggleTheme = () => {
    isDark.value = !isDark.value

    // 保存到本地存储
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')

    // 应用到 DOM
    applyThemeToDom()
  }

  // 3. 私有辅助函数：操作 HTML 标签的 class
  const applyThemeToDom = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme,
  }
})
