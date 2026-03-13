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
        <p class="text-muted-foreground text-sm">
          {{ $t('footer.desc') }}
        </p>
      </UFooter>
    </UMain>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/modules/showcase/components/TheHeader/TheHeader.vue'
</script>

<style scoped></style>
