<script setup lang="ts">
const { t } = useI18n()
const title = t('pages.title.about')
const description = t('pages.description.about')
defineI18nRoute({
  paths: {
    en: '/datasets',
    fr: '/donnees',
    es: '/datasets',
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
    <h1>{{ $t('pages.title.datasets') }}</h1>
  </div>
</template>
