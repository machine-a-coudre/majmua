<script setup lang="ts">
const { t } = useI18n()
const title = t('pages.title.about')
const description = t('pages.description.about')
defineI18nRoute({
  paths: {
    en: '/about',
    fr: '/a-propos',
    es: '/sobre',
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
    <h1>{{ $t('pages.title.about') }}</h1>
  </div>
</template>
