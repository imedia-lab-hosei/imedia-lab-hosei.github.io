<template>
  <BgCard>
    <template #content>
      <div>
        <div class="relative w-24 h-24 mx-auto mb-8">
          <div class="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
          <div
            class="absolute inset-0 rounded-full border border-primary/50 flex items-center justify-center bg-card"
          >
            <UIcon name="line-md:loading-loop" class="size-12" />
          </div>
        </div>

        <div class="space-y-6">
          <div>
            {{ $t('maintenanceView.mainInfor') }}
          </div>

          <div class="flex items-center justify-center gap-3 font-mono text-sm text-primary/90">
            <span class="px-2 py-1 border border-primary/30 rounded bg-primary/5"
              >STATUS: YAJYUSENBAI 0.19</span
            >
            <span class="animate-pulse text-primary">●</span>
            <span class="px-2 py-1 border border-primary/30 rounded bg-primary/5"
              >VER: 11.4.514</span
            >
          </div>

          <p class="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
            {{ $t('maintenanceView.desc') }}
          </p>
        </div>

        <div class="mt-10">
          <UButton
            ghost
            icon="line-md:arrow-left"
            @click="$router.push({ name: 'home', params: { locale: locale } })"
          >
            {{ $t('maintenanceView.back') }}
          </UButton>
        </div>
      </div>
    </template>
  </BgCard>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// 1. 获取当前语言状态
const { locale } = useI18n()
import BgCard from '@/modules/showcase/components/BgCard/BgCard.vue'
</script>

<style scoped></style>
