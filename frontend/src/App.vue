<template>
  <UApp>
    <BaseLayout>
      <RouterView />
    </BaseLayout>
  </UApp>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from '@/modules/showcase/layouts/BaseLayout.vue'
</script>
