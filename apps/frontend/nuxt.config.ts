// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-04-03',
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],
})
