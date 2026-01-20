<template>
  <div class="relative inline-block">
    <a-button
      type="primary"
      shape="round"
      class="inline-flex items-center justify-center border-none"
      @click="handleSubscribe"
    >
      <div class="flex items-center justify-center gap-2 relative z-10">
        <heart-filled class="text-lg group-active:scale-125" />
        <span class="font-bold tracking-wide">Subscribe</span>
      </div>
    </a-button>

    <transition-group name="float">
      <div
        v-for="effect in effects"
        :key="effect.id"
        class="absolute pointer-events-none flex items-center gap-1 font-bold select-none z-20"
        :style="{ left: effect.x + 'px', top: effect.y + 'px' }"
      >
        <like-outlined class="text-lg text-primary" />
        <span class="text-sm text-primary neon-text">+1</span>
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
  const id = count++

  // 计算初始位置：尽量从按钮中心稍上方飘起
  // 按钮宽约 140px，高 48px
  const effect = {
    id,
    x: 40 + (Math.random() * 60 - 30), // x: 在按钮中间区域随机
    y: -20, // y: 从按钮顶部开始往上飘
  }

  effects.value.push(effect)

  setTimeout(() => {
    effects.value = effects.value.filter((item) => item.id !== id)
  }, 800) // 动画时间稍微延长一点，配合 CSS
}
</script>

<style scoped>
/* 飘浮动画定义
  translateY(-60px) 表示向上移动
*/
.float-enter-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.float-enter-from {
  opacity: 1;
  transform: translateY(10px) scale(0.5); /* 从稍微下方一点弹出 */
}

.float-enter-to {
  opacity: 0;
  transform: translateY(-60px) scale(1.5); /* 向上飘并放大 */
}

.float-leave-active {
  position: absolute;
}

/* 霓虹文字效果
  使用 CSS 变量做阴影颜色
*/
.neon-text {
  text-shadow: 0 0 8px var(--primary);
}
</style>
