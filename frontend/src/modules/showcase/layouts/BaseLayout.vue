<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <TheHeader class="h-12" />

    <div
      class="absolute inset-0 z-0 opacity-40 pointer-events-none"
      style="
        background-image:
          linear-gradient(var(--color-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
      "
    ></div>

    <UMain class="grow overflow-y-auto custom-scrollbar flex flex-col">
      <UContainer class="relative z-10 flex-1 w-full py-8">
        <slot />
      </UContainer>

      <UFooter
        class="border-t border-border bg-muted/30 backdrop-blur-sm md:py-12 text-center shrink-0"
      >
        <!-- <p class="text-muted-foreground text-sm">
          {{ $t('footer.desc') }}
        </p> -->
        <div
          class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <div class="text-sm md:text-base font-light tracking-wide opacity-90">
            <span class="font-semibold mr-1"> {{ $t('footer.address') }}:</span>
            {{ $t('footer.address_desc') }}
          </div>

          <div class="hidden md:block h-12 w-[1px] bg-border/40 dark:bg-white/20"></div>
          <div class="flex flex-col gap-1 text-sm md:text-base font-light opacity-90">
            <div>
              <span class="font-semibold mr-1">{{ $t('footer.tel') }}:</span>
              + 042 387 6188
            </div>
            <!-- <div>
              <span class="font-semibold mr-1">{{ $t('footer.email') }}:</span>
              zhou@hosei.ac.jp
            </div> -->
          </div>
        </div>
      </UFooter>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/modules/showcase/components/TheHeader/TheHeader.vue'
</script>

<style scoped></style>
