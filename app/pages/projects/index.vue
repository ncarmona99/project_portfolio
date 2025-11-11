<script setup lang="ts">
definePageMeta({
  title: "Projects",
  description: "Projects list",
});
</script>

<template>
  <section>
    <h1>Projects</h1>
    <p>Here you will list your projects.</p>
    <div class="bg-red-500 text-white p-4">
      Si veo este fondo rojo, Tailwind funciona
    </div>

    <NuxtLink to="/">Back to home</NuxtLink>
  </section>
</template>
