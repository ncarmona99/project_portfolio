<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex flex-row justify-center">
      <nav
        class="sticky top-0 mx-auto items-center justify-center flex flex-row font-mono font-medium my-5 rounded-xl shadow-xl bg-neutral-800 text-white text-2xl p-4 gap-x-4"
      >
        <NuxtLink to="/" v-slot="{ isActive }">
          <span
            class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            :class="isActive ? 'after:w-full' : ''"
          >
            Home
          </span>
        </NuxtLink>
        <div class="w-px h-9 bg-white opacity-70"></div>
        <NuxtLink to="/projects" v-slot="{ isActive }">
          <span
            class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            :class="isActive ? 'after:w-full' : ''"
          >
            Projects
          </span>
        </NuxtLink>
        <div class="w-px h-9 bg-white opacity-70"></div>
        <NuxtLink to="/about_me" v-slot="{ isActive }">
          <span
            class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            :class="isActive ? 'after:w-full' : ''"
          >
            About me
          </span>
        </NuxtLink>
        <div class="w-px h-9 bg-white opacity-70"></div>
        <NuxtLink to="/contact" v-slot="{ isActive }">
          <span
            class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            :class="isActive ? 'after:w-full' : ''"
          >
            Contact
          </span>
        </NuxtLink>
      </nav>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div>
      <div>© {{ new Date().getFullYear() }} Nicolás Carmona</div>
    </div>
  </footer>
</template>
