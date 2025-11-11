<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <nav class="flex flex-row bg-sky-500 text-white p-4 space-x-4">
        <NuxtLink
          to="/"
          class="flex flex-row rounded-xl bg-sky-300 text-white p-4 space-x-4 transition-all hover:bg-sky-700"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/projects"
          class="flex flex-row rounded-xl bg-sky-300 text-white p-4 space-x-4 transition-all hover:bg-sky-700"
          >Projects</NuxtLink
        >
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>© {{ new Date().getFullYear() }} Nicolás Carmona</footer>
  </div>
</template>
