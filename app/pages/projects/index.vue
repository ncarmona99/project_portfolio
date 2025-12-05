<script setup lang="ts">
definePageMeta({
  title: "Projects",
  description: "Projects list",
});
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 md:pt-24 pt-16 pb-16">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1
        class="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        Projects
      </h1>
      <div
        class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
      ></div>
      <p
        class="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
      >
        [Descripción breve de tus proyectos. Ej: "Aquí encontrarás una selección
        de mis proyectos más destacados en desarrollo web y software."]
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <!-- Project Card 1 -->
      <div
        class="group rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
      >
        <!-- Project Image Placeholder -->
        <div
          class="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center transition-colors duration-300"
        >
          <span
            class="text-slate-400 dark:text-slate-500 text-sm transition-colors duration-300"
            >Imagen del proyecto</span
          >
        </div>

        <!-- Project Content -->
        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            [Nombre del Proyecto 1]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            [Descripción breve del proyecto. Qué hace, qué tecnologías usaste,
            etc.]
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 1]</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 2]</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 3]</span
            >
          </div>

          <!-- Links -->
          <div class="flex gap-3">
            <a
              href="#"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Ver Demo
            </a>
            <a
              href="#"
              class="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div
        class="group rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
      >
        <div
          class="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center transition-colors duration-300"
        >
          <span
            class="text-slate-400 dark:text-slate-500 text-sm transition-colors duration-300"
            >Imagen del proyecto</span
          >
        </div>

        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            [Nombre del Proyecto 2]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            [Descripción breve del proyecto. Qué hace, qué tecnologías usaste,
            etc.]
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 1]</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 2]</span
            >
          </div>

          <div class="flex gap-3">
            <a
              href="#"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Ver Demo
            </a>
            <a
              href="#"
              class="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Project Card 3 -->
      <div
        class="group rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
      >
        <div
          class="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center transition-colors duration-300"
        >
          <span
            class="text-slate-400 dark:text-slate-500 text-sm transition-colors duration-300"
            >Imagen del proyecto</span
          >
        </div>

        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            [Nombre del Proyecto 3]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            [Descripción breve del proyecto. Qué hace, qué tecnologías usaste,
            etc.]
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 1]</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 2]</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >[Tech 3]</span
            >
          </div>

          <div class="flex gap-3">
            <a
              href="#"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Ver Demo
            </a>
            <a
              href="#"
              class="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Puedes duplicar más tarjetas aquí -->
    </div>

    <!-- CTA Section -->
    <div
      class="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-orange-200 dark:border-purple-900/30 transition-all duration-300"
    >
      <h2
        class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        ¿Tienes un proyecto en mente?
      </h2>
      <p
        class="text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-300"
      >
        [Mensaje llamando a la acción para contactarte]
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Contáctame
      </NuxtLink>
    </div>
  </section>
</template>
