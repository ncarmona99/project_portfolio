<script setup lang="ts">
definePageMeta({
  title: "Home",
  description: "Nicolás's portfolio",
});
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 md:pt-24 pt-16">
    <h1
      class="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      Hi!, Nicolás Carmona here
    </h1>

    <p
      class="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 max-w-xl transition-colors duration-300"
    >
      I'm a backend and frontend developer, passionate about technology,
      innovation projects and Beautiful UIs. You're cordially invited to explore
      my portfolio and get in touch with me!
    </p>

    <div class="flex gap-4 mt-8">
      <NuxtLink
        to="/projects"
        class="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Ver proyectos
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300"
      >
        Contacto
      </NuxtLink>
    </div>
  </section>
</template>
