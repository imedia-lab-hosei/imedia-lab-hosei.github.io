<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-900/80 border-b border-white/10"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="shrink-0 flex items-center cursor-pointer">
          <span
            class="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Inm.Log
          </span>
        </div>

        <nav class="hidden md:flex gap-8 items-center">
          <a
            v-for="item in menuItems"
            :key="item.key"
            class="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer font-medium"
            @click="goToDetail(item)"
          >
            {{ item.label }}
          </a>
          <SubscribeButton />
        </nav>

        <div class="flex md:hidden">
          <button @click="drawerVisible = true" class="text-slate-300 hover:text-white p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <a-drawer
      placement="right"
      :closable="false"
      :open="drawerVisible"
      @close="drawerVisible = false"
      class="mobile-menu-drawer"
      :bodyStyle="{ padding: 0, backgroundColor: '#0f172a' }"
      width="280px"
    >
      <div class="flex flex-col h-full bg-slate-900 text-white p-6 space-y-6">
        <div class="flex justify-between items-center mb-4">
          <span
            class="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Menu</span
          >
          <button @click="drawerVisible = false" class="text-slate-400 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <a
          v-for="item in menuItems"
          :key="item.key"
          class="text-lg font-medium text-slate-300! hover:text-cyan-400! border-b border-slate-800 pb-2"
          @click="goToDetail(item)"
        >
          {{ item.label }}
        </a>
      </div>
    </a-drawer>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import SubscribeButton from './components/SubscribeButton.vue'

const router = useRouter()
const drawerVisible = ref(false)

interface btnInformation {
  key: string
  label: string
  name: string
}

const menuItems = [
  { key: 'home', label: '首页', name: 'home' },
  { key: 'articles', label: '文章', name: 'maintenance' },
  { key: 'projects', label: '项目', name: 'maintenance' },
  { key: 'about', label: '关于', name: 'maintenance' },
]

const handleResize = () => {
  // 768px 是 Tailwind 默认的 md 断点
  if (window.innerWidth >= 768 && drawerVisible.value) {
    drawerVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const goToDetail = (btn: btnInformation) => {
  // 编程式跳转
  router.push({
    name: btn.name, // 路由配置中的 name
  })
}
</script>
