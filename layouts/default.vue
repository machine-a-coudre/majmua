<script setup lang="ts">
const config = useRuntimeConfig()
useHead({
  titleTemplate: (page) => {
    return page
      ? `${page} | ${config.public.appTitle}`
      : 'Site Title'
  },
})
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
