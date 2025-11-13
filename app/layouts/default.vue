<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-primary">
      <div class="flex flex-row justify-center">
        <nav
          class="sticky top-0 mx-auto items-center justify-center flex flex-row font-mono font-medium my-5 rounded-xl shadow-xl bg-neutral-900 text-white text-2xl p-4 gap-x-4"
        >
          <NuxtLink to="/" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              :class="isActive ? 'after:w-full' : ''"
            >
              Home
            </span>
          </NuxtLink>
          <div class="w-px h-9 bg-white opacity-70"></div>
          <NuxtLink to="/projects" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              :class="isActive ? 'after:w-full' : ''"
            >
              Projects
            </span>
          </NuxtLink>
          <ClientOnly>
            <AnimatedLogo />
          </ClientOnly>
          <NuxtLink to="/about_me" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              :class="isActive ? 'after:w-full' : ''"
            >
              About me
            </span>
          </NuxtLink>
          <div class="w-px h-9 bg-white opacity-70"></div>
          <NuxtLink to="/contact" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              :class="isActive ? 'after:w-full' : ''"
            >
              Contact
            </span>
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="bg-primary flex-1 p-4">
      <slot />
    </main>

    <footer class="bg-secondary text-center text-black p-10 mt-auto">
      <div class="grid grid-cols-3 gap-4">
        <p class="">© {{ new Date().getFullYear() }} Nicolás Carmona</p>
        <div class="flex justify-center">
          <p class="">Created by</p>
          <p class="">Nicolás</p>
          <p class="">Carmona</p>
        </div>
      </div>
    </footer>
  </div>
</template>
