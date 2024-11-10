// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],

  routeRules: {
    "/": { prerender: true },
  },
  content: {
    navigation: {
      fields: ["created_at"],
    },
  },
  compatibilityDate: "2024-11-09",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
