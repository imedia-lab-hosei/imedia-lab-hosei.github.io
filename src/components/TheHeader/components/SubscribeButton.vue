<template>
  <div class="relative inline-block">
    <a-button
      type="primary"
      shape="round"
      class="!bg-cyan-600 hover:!bg-cyan-500 !border-none !h-12 !px-8 shadow-lg shadow-cyan-900/20 active:scale-95 transition-all"
      @click="handleSubscribe"
    >
      <template #icon><heart-filled /></template>
      Subscribe
    </a-button>

    <transition-group name="float">
      <div
        v-for="effect in effects"
        :key="effect.id"
        class="absolute pointer-events-none flex items-center gap-1 text-cyan-400 font-bold"
        :style="{ left: effect.x + 'px', top: effect.y + 'px' }"
      >
        <like-outlined class="text-lg" />
        <span class="text-sm">+1</span>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HeartFilled, LikeOutlined } from '@ant-design/icons-vue'

interface ClickEffect {
  id: number
  x: number
  y: number
}

const effects = ref<ClickEffect[]>([])
let count = 0

const handleSubscribe = () => {
  // 1. 获取点击位置（相对于按钮内部）
  const id = count++
  const effect = {
    id,
    // 初始位置略微随机化，让动画更灵动
    x: 40 + (Math.random() * 50 - 10),
    y: 20,
  }

  // 2. 存入数组
  effects.value.push(effect)

  // 3. 1秒后自动移除，防止内存占用
  setTimeout(() => {
    effects.value = effects.value.filter((item) => item.id !== id)
  }, 500)
}
</script>

<style scoped>
/* 飘浮动画：向上移动并逐渐消失 */
.float-enter-active {
  transition: all 0.8s ease-out;
}

.float-enter-from {
  opacity: 1;
  transform: translateY(0);
}

.float-enter-to {
  opacity: 0;
  transform: translateY(60px) scale(1.2);
}

/* 确保移除时没有生硬的闪烁 */
.float-leave-active {
  position: absolute;
}
.text-cyan-400 {
  text-shadow: 0 0 8px rgba(6, 182, 212, 0.8);
}
</style>
