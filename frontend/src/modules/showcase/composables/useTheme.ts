import { ref, watchEffect } from 'vue'

// 定义 Theme 类型（可选，更严谨）
type ThemeType = 'light' | 'dark'

// 获取初始状态
const getInitialTheme = (): boolean => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme') as ThemeType | null
    if (saved) {
      return saved === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

// 使用全局单例状态
const isDark = ref<boolean>(getInitialTheme())

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // 监听状态变化
  watchEffect(() => {
    // 确保在浏览器环境执行
    if (typeof document !== 'undefined') {
      const html = document.documentElement

      if (isDark.value) {
        html.classList.add('dark')
        html.classList.remove('light')
        localStorage.setItem('theme', 'dark')
      } else {
        html.classList.remove('dark')
        html.classList.add('light')
        localStorage.setItem('theme', 'light')
      }
    }
  })

  return {
    isDark,
    toggleTheme,
  }
}
