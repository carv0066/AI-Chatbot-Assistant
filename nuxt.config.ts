import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Disable SSR for GitHub Pages
  ssr: false,

  app: {
    baseURL: '/AI-Chatbot-Assistant/' 
  },

  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-10-24'
})