import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    ui({
      // ui: {
      //   colors: {
      //     primary: 'blue',
      //     secondary: 'purple',
      //     neutral: 'zinc',
      //   },
      // },
      components: {
        dirs: [
          'src/components',
          'src/modules/**/components' // 核心：让 Nuxt UI 帮我们扫描模块目录
        ],
        dts: 'src/components.d.ts'     // 重新生成声明文件
      }
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // outDir: '../dist',
    outDir: 'dist',
    assetsDir: 'static',
    emptyOutDir: true,
  },
  base: '/',
  // Components plugin moved into the plugins array above

})
