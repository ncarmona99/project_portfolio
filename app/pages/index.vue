<script setup lang="ts">
definePageMeta({
  title: "Home",
  description: "Nicolás's portfolio",
});
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 md:pt-24 pt-16 pb-16">
    <!-- Hero Section -->
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
      <!-- Text Content -->
      <div class="order-2 md:order-1">
        <div
          class="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 text-sm font-medium mb-4 transition-colors duration-300"
        >
          👋 Bienvenido a mi portfolio
        </div>

        <h1
          class="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 transition-colors duration-300"
        >
          Hi!, Nicolás Carmona here
        </h1>

        <p
          class="text-slate-600 dark:text-slate-300 text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300"
        >
          I'm a
          <span class="font-semibold text-orange-600 dark:text-purple-400"
            >backend and frontend developer</span
          >, passionate about technology, innovation projects and Beautiful UIs.
          You're cordially invited to explore my portfolio and get in touch with
          me!
        </p>

        <div class="flex flex-wrap gap-4">
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

        <!-- Social Links -->
        <div class="flex gap-4 mt-8">
          <a
            href="https://github.com/ncarmona99"
            target="_blank"
            class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-carmona-rioseco/"
            target="_blank"
            class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="mailto:contacto@ncarmona.cl"
            class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <!-- Image Placeholder -->
      <div class="order-1 md:order-2">
        <div class="relative">
          <div
            class="absolute -inset-4 rounded-2xl opacity-20 bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl aspect-square flex items-center justify-center border-2 border-orange-200 dark:border-purple-900/30 transition-all duration-300"
          >
            <span
              class="text-slate-400 dark:text-slate-500 text-lg transition-colors duration-300"
              >[Tu foto o ilustración aquí]</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="grid md:grid-cols-3 gap-8 mb-20">
      <div
        class="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
      >
        <div
          class="text-4xl font-bold text-orange-600 dark:text-purple-400 mb-2 transition-colors duration-300"
        >
          [X+]
        </div>
        <div
          class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
        >
          Proyectos Completados
        </div>
      </div>

      <div
        class="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
      >
        <div
          class="text-4xl font-bold text-orange-600 dark:text-purple-400 mb-2 transition-colors duration-300"
        >
          [X+]
        </div>
        <div
          class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
        >
          Años de Experiencia
        </div>
      </div>

      <div
        class="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
      >
        <div
          class="text-4xl font-bold text-orange-600 dark:text-purple-400 mb-2 transition-colors duration-300"
        >
          [X+]
        </div>
        <div
          class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
        >
          Tecnologías Dominadas
        </div>
      </div>
    </div>

    <!-- Featured Skills -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        Mis Especialidades
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <div class="text-4xl mb-3">💻</div>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Frontend
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [Vue, Nuxt, React, etc.]
          </p>
        </div>

        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <div class="text-4xl mb-3">⚙️</div>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Backend
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [Node.js, Python, etc.]
          </p>
        </div>

        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <div class="text-4xl mb-3">🗄️</div>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Bases de Datos
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [PostgreSQL, MongoDB, etc.]
          </p>
        </div>

        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <div class="text-4xl mb-3">🎨</div>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            UI/UX Design
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [Figma, Tailwind, etc.]
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="text-center p-12 rounded-2xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-orange-200 dark:border-purple-900/30 transition-all duration-300"
    >
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        ¿Listo para trabajar juntos?
      </h2>
      <p
        class="text-slate-600 dark:text-slate-300 mb-8 text-lg transition-colors duration-300"
      >
        Estoy disponible para nuevos proyectos y colaboraciones
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Hablemos →
      </NuxtLink>
    </div>
  </section>
</template>
