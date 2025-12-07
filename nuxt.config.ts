export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  srcDir: "app",
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Spanish', file: 'es.json' }
    ]
  },
  app: {
    head: {
      titleTemplate: "%s - Nicolás Carmona portfolio",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
});
