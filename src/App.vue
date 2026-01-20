<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white">
    <main>
      <BaseLayout>
        <RouterView />
      </BaseLayout>
    </main>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<style scoped></style>
