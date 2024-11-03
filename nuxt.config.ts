// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  runtimeConfig: {
    public: {
      gtmId: process.env.GOOGLE_TAG_MANAGER_ID || 'GTM-XXXXXXX'
    }
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID || 'GTM-XXXXXXX',
    enabled: !!process.env.GOOGLE_TAG_MANAGER_ID
  }
})
