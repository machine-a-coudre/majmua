<script setup lang="ts">
const { t } = useI18n()
const title = t('pages.title.quickstart')
const description = t('pages.description.quickstart')
defineI18nRoute({
  paths: {
    en: '/quickstart',
    es: '/quickstart',
    fr: '/guide-de-demarrage',
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
    <h1>{{ $t('pages.title.quickstart') }}</h1>
  </div>
</template>
