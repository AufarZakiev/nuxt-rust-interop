import Markdown from 'unplugin-vue-markdown/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxtjs/mdc', 'nuxt-quasar-ui'],
  compatibilityDate: "2024-10-20",
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      Markdown({
        include: /\.md(\?.+)?$/
      })
    ],
  },
  extensions: ['.md'],
  tailwindcss: {
    cssPath: ['~/assets/tailwind.css', { injectPosition: "first" }],
    configPath: ['~/assets/tailwind.config.css']
  }
})