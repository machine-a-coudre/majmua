<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      Majmua
    </div>
    <div class="col-span-2 grid grid-cols-1 md:grid-cols-2 md:gap-10">
      <div>
        <h3 class="font-semibold">
          {{ t('footer.links.title.docs') }}
        </h3><ul
          role="list"
          class="text-gray-600 flex flex-col gap-2 py-4"
        >
          <li>
            <NuxtLink :to="localePath('/quickstart')">{{ t('pages.title.quickstart') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold">
          {{ t('footer.links.title.legal') }}
        </h3><ul
          role="list"
          class="text-gray-600 flex flex-col gap-2  py-4"
        >
          <li>
            <NuxtLink :to="localePath('/legal-notice')">{{ t('pages.title.legalnotice') }}</NuxtLink>
          </li><li>
            <NuxtLink :to="localePath('/privacy-policy')">{{ t('pages.title.privacypolicy') }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
