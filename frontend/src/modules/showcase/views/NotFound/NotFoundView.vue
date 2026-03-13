<template>
<UError
    :error="{
      statusCode: 404,
      statusMessage: $t('notFoundView.notFound'),
      message: $t('notFoundView.message')
    }"
    :clear="{
      onClick: () => { $router.push({ name: 'home', params: { locale: locale } }) },
      label: $t('notFoundView.goHome'),
      icon: 'line-md:arrow-left'
    }"

  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// 1. 获取当前语言状态
const { locale } = useI18n()



</script>

<style scoped></style>
