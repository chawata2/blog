// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/sitemap", "@nuxtjs/robots", "nuxt-gtag"],

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
  site: {
    url: "https://chawata2.github.io/",
    name: "chawata's blog",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
});
