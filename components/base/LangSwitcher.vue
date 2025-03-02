<script setup lang="ts">
const { t, setLocale } = useI18n()
</script>

<template>
  <ClientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger>{{ t('Change language') }}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem @click="setLocale('en')">
          en
        </DropdownMenuItem>
        <DropdownMenuItem @click="setLocale('es')">
          es
        </DropdownMenuItem>
        <DropdownMenuItem @click="setLocale('fr')">
          fr
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ClientOnly>
</template>
