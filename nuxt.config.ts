import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  ssr: false,

  app: {
    baseURL: '/AI-Chatbot-Assistant/' 
  },

  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-10-24'
})