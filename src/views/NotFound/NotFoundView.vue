<template>
<UError
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.'
    }"
    :clear="{
      variant:'ghost',
      onClick: () => { $router.push({ name: 'home', params: { locale: locale } }) }
    }"

  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// 1. 获取当前语言状态
const { locale } = useI18n()



</script>

<style scoped></style>
