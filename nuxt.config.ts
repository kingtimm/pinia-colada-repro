// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/colada-nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    resetAsyncDataToUndefined: true,
  }
})