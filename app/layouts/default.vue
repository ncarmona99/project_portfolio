<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex flex-row justify-center">
      <nav
        class="sticky top-0 mx-auto items-center justify-center flex flex-row my-5 rounded-xl bg-slate-300 text-white text-2xl p-6 gap-x-4"
      >
        <NuxtLink
          to="/"
          class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >Home</NuxtLink
        >
        <div class="w-px h-9 bg-white opacity-70"></div>
        <NuxtLink
          to="/projects"
          class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >Projects</NuxtLink
        >
      </nav>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div>© {{ new Date().getFullYear() }} Nicolás Carmona</div>
  </footer>
</template>
