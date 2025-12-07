<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>

<template>
  <div
    class="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 rounded-lg p-1 shadow-md"
  >
    <button
      @click="setLocale('en')"
      :class="[
        'px-3 py-2 rounded font-mono font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1 whitespace-nowrap',
        locale === 'en'
          ? 'bg-primary text-white shadow-lg dark:bg-primary-dark transition-colors transition-duration-300'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200',
      ]"
      aria-label="Switch to English"
    >
      <span>🇺🇸</span>
      <span class="hidden sm:inline">EN</span>
    </button>

    <button
      @click="setLocale('es')"
      :class="[
        'px-3 py-2 rounded font-mono font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1 whitespace-nowrap',
        locale === 'es'
          ? 'bg-primary text-white shadow-lg dark:bg-primary-dark transition-colors transition-duration-300'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200',
      ]"
      aria-label="Switch to Spanish"
    >
      <span>🇪🇸</span>
      <span class="hidden sm:inline">ES</span>
    </button>
  </div>
</template>
