// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    'nuxt-security',
    'nuxt-api-party',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      appTitle: 'Majmua',
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-GB.json',
      },
      {
        code: 'es',
        file: 'es-ES.json',
      },
      {
        code: 'fr',
        file: 'fr-FR.json',
      },
    ],
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
  },
  security: {},
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
