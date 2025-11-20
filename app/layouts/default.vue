<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-primary">
    <header>
      <div class="flex flex-row justify-center">
        <nav
          class="sticky top-0 mx-auto items-center justify-center flex flex-row flex-wrap font-mono font-medium my-5 rounded-xl shadow-xl bg-neutral-900 text-white text-base sm:text-lg md:text-2xl p-2 sm:p-3 md:p-4 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-2"
        >
          <NuxtLink to="/" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              :class="isActive ? 'after:w-full' : ''"
            >
              Home
            </span>
          </NuxtLink>
          <div class="w-px h-9 bg-white opacity-70"></div>
          <NuxtLink to="/about_me" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              :class="isActive ? 'after:w-full' : ''"
            >
              About me
            </span>
          </NuxtLink>
          <div class="block lg:hidden">
            <div class="w-px h-9 bg-white opacity-70"></div>
          </div>
          <ClientOnly>
            <div class="hidden lg:block"><AnimatedLogo /></div>
          </ClientOnly>
          <NuxtLink to="/projects" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              :class="isActive ? 'after:w-full' : ''"
            >
              Projects
            </span>
          </NuxtLink>
          <div class="w-px h-9 bg-white opacity-70"></div>
          <NuxtLink to="/contact" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
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

    <footer class="bg-secondary text-center text-black p-3 sm:p-5 mt-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-sm sm:text-base"
      >
        <p class="order-1">© {{ new Date().getFullYear() }} Nicolás Carmona</p>
        <div
          class="flex justify-center items-center flex-wrap gap-1 order-3 md:order-2"
        >
          <p class="whitespace-nowrap">Website created by</p>
          <div class="flex items-center gap-1">
            <p
              class="bg-logo-light-primary rounded-full px-2 whitespace-nowrap"
            >
              Nicolás
            </p>
            <p class="bg-logo-light-secondary px-2 whitespace-nowrap">
              Carmona
            </p>
          </div>
        </div>
        <div class="flex justify-center order-2 md:order-3">
          <div
            class="flex flex-row md:flex-col gap-3 md:gap-1 flex-wrap justify-center"
          >
            <div class="text-xs sm:text-sm">Mail contact</div>
            <div class="text-xs sm:text-sm">Github logo</div>
            <div class="text-xs sm:text-sm">LinkedIn logo</div>
            <div class="text-xs sm:text-sm">Whatsapp logo</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
