


import { fileURLToPath, URL } from 'node:url'
// 1. 引入 loadEnv 用于加载 .env 文件中的变量
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import ui from '@nuxt/ui/vite'

// 2. 将 defineConfig 改为函数式写法
export default defineConfig(({ mode }) => {
  // 3. 加载当前模式下的环境变量 (如 .env.development 或 .env.production)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      tailwindcss(),
      ui({
        components: {
          dirs: [
            'src/components',
            'src/modules/**/components'
          ],
          dts: 'src/components.d.ts'
        }
        // ui: {
      //   colors: {
      //     primary: 'blue',
      //     secondary: 'purple',
      //     neutral: 'zinc',
      //   },
      // },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // 4. 配置开发服务器代理
    server: {
      proxy: {
        // 当你请求 /api 时，Vite 会帮你转发到远程服务器
        '/api': {
          // 从环境变量获取目标 IP 地址，如果没定义则默认本地
          target: env.VITE_API_BASE_URL || 'http://localhost:3000',
          changeOrigin: true,
          // 如果后端接口本身不带 /api 前缀，请取消下方注释
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'static',
      emptyOutDir: true,
    },
    base: '/',
  }
})
