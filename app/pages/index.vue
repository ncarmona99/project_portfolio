<script setup lang="ts">
definePageMeta({
  title: "Home",
  description: "Nicolás's portfolio",
});
</script>
<template>
  <section class="max-w-6xl mx-auto px-4 md:pt-24 pt-16">
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
      Hi!, Nicolás Carmona here
    </h1>

    <p
      class="text-slate-600 dark:text-slate-600 text-lg md:text-xl mt-4 max-w-xl"
    >
      I'm a backend and frontend developer, passionate about technology,
      innovation projects and Beautiful UIs. You're cordially invited to explore
      my portfolio and get in touch with me!
    </p>

    <div class="flex gap-4 mt-8">
      <NuxtLink
        to="/projects"
        class="px-6 py-3 rounded-xl bg-button-light text-white font-medium transition-colors duration-300"
      >
        Ver proyectos
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        Contacto
      </NuxtLink>
    </div>
  </section>
</template>
