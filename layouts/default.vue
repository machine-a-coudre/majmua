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
  <div class="relative flex min-h-svh flex-col bg-background">
    <AppHeader />
    <mai class="container">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 min-h-svh">
        <slot />
      </div>
    </mai>
    <AppFooter />
  </div>
</template>
