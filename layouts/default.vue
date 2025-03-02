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
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
