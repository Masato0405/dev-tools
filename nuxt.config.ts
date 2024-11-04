// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  runtimeConfig: {
    public: {
      GA_ID: process.env.GA_ID || ''
    }
  },
  site: {
    url: 'https://dev-tools.click/',
    name: 'Dev Tools'
  }
})