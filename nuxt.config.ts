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
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
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

  runtimeConfig: {
    // Private keys (only available server-side)
    smtpHost: process.env.NUXT_SMTP_HOST || '',
    smtpPort: process.env.NUXT_SMTP_PORT || '587',
    smtpUser: process.env.NUXT_SMTP_USER || '',
    smtpPassword: process.env.NUXT_SMTP_PASSWORD || '',
    contactEmail: process.env.NUXT_CONTACT_EMAIL || '',
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY || '',
    
    // Public keys (available on both client and server)
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
    },
  },
});
