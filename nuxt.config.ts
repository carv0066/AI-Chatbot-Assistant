import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false, // Disable SSR for GitHub Pages
  app: {
    baseURL: '/AI-Chatbot-Assistant/'
  },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})