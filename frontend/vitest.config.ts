import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfigFn from './vite.config'

export default defineConfig((configEnv) => {
  // 1. 获取基础的 Vite 配置
  // 如果 viteConfig 是函数，则调用它并传入 configEnv；如果是对象则直接使用
  const baseConfig = typeof viteConfigFn === 'function'
    ? viteConfigFn(configEnv)
    : viteConfigFn

  // 2. 使用 mergeConfig 合并基础配置和测试配置
  return mergeConfig(
    baseConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    })
  )
})
