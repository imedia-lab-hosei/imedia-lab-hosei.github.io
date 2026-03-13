<template>
  <div class="relative min-h-[80vh] flex items-center justify-center">
    <div class="relative z-10 w-full max-w-2xl p-px shadow-2xl rounded-[23px]">
      <div class="bg-card/90 rounded-[23px] p-8 md:p-16 text-center backdrop-blur-xl">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
