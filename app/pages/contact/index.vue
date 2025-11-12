<script setup lang="ts">
definePageMeta({
  title: "Contact me",
  description: "Contact me page",
});
</script>

<template>
  <section>
    <h1>Contact me</h1>
    <p>Here you will list your projects.</p>
    <div class="bg-red-500 text-white p-4">
      Si veo este fondo rojo, Tailwind funciona
    </div>

    <NuxtLink to="/">Back to home</NuxtLink>
  </section>
</template>
