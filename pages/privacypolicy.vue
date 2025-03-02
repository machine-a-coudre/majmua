<script setup lang="ts">
const { t } = useI18n()
const title = t('pages.title.privacypolicy')
const description = t('pages.description.privacypolicy')
defineI18nRoute({
  paths: {
    en: '/privacy-policy',
    fr: '/politique-de-confidentialite',
    es: '/politica-de-privacidad',
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
    <h1>{{ $t('pages.title.privacypolicy') }}</h1>
  </div>
</template>
