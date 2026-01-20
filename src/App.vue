<template>
  <a-config-provider>
    <div class="min-h-screen">
      <main>
        <BaseLayout>
          <RouterView />
        </BaseLayout>
      </main>
    </div>
  </a-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'

const antConfig = {
  cssVar: true,
  hashed: false,
  token: {},
}
</script>

<style scoped></style>
