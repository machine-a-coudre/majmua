<script setup lang="ts">
const { t } = useI18n()
const title = t('pages.title.legalnotice')
const description = t('pages.description.legalnotice')
defineI18nRoute({
  paths: {
    en: '/legal-notice',
    es: '/legal-notice',
    fr: '/mentions-legales',
  },
})
useSeoMeta({
  title,
  ogTitle: title,
  description,
})
</script>

<template>
  <div>
    <h1>{{ $t('pages.title.legalnotice') }}</h1>
  </div>
</template>
