<template>
  <section class="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 text-center md:text-left space-y-6 z-10">
        <div
          class="inline-block px-3 py-1 rounded-full bg-muted border border-border text-primary text-sm"
        >
          {{ $t('heroSection.guest') }}
        </div>

        <div class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
          {{ $t('heroSection.welcome') }}
          <HyperText
            class="text-primary justify-center md:justify-start font-sans"
            :text="$t('heroSection.athour')"
            :duration="800"
            :animate-on-load="true"
          />

          {{ $t('heroSection.room') }}
        </div>
        <div class="h-8 md:h-16">
          <EncryptedText
            :text="$t('heroSection.desc')"
            encrypted-class="text-muted-foreground/60 text-base md:text-xl max-w-2xl mx-auto md:mx-0"
            revealed-class="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto md:mx-0"
            :reveal-delay-ms="revealDelayMs"
          />
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <UButton
            size="xl"
            class="px-8 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            @click="handleNavigate"
          >
            {{ $t('heroSection.readArticle') }}
          </UButton>

          <UButton
            variant="outline"
            size="xl"
            class="px-8 rounded-xl hover:border-primary hover:text-primary hover:scale-105 transition-transform"
            href="https://github.com/2446405787"
            target="_blank"
          >
            {{ $t('heroSection.github') }}
          </UButton>
        </div>
      </div>

      <div class="flex-1 relative w-full flex justify-center">
        <div
          class="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent blur-[80px] rounded-full animate-pulse -z-10"
        ></div>

        <div
          class="w-64 h-64 md:w-96 md:h-96 bg-card dark:bg-primary border border-border rounded-2xl shadow-2xl p-2 rotate-3 hover:rotate-0 transition-transform duration-300"
        >
          <img
            class="w-full h-full object-cover rounded-xl"
            src="/images/mmc.jpg"
            alt="Momocha Avatar"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// 如果需要逻辑可在此添加
import { useRouter } from 'vue-router'
import EncryptedText from '@/components/ui/encrypted-text/EncryptedText.vue'

const router = useRouter()

const handleNavigate = () => {
  // 这里可以写其他逻辑...

  // 使用 name 进行跳转
  router.push({ name: 'articles' })
}

const revealDelayMs = 50
</script>
