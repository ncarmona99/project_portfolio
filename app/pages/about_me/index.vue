<script setup lang="ts">
definePageMeta({
  title: "About me",
  description: "About me page",
});
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 md:pt-24 pt-16 pb-16">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1
        class="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        About Me
      </h1>
      <div
        class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
      ></div>
    </div>

    <!-- Profile Section -->
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
      <!-- Image Placeholder -->
      <div class="order-2 md:order-1">
        <div class="relative">
          <div
            class="absolute -inset-4 rounded-2xl opacity-20 bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          ></div>
          <div
            class="relative bg-slate-200 dark:bg-slate-700 rounded-2xl aspect-square flex items-center justify-center transition-colors duration-300"
          >
            <span
              class="text-slate-400 dark:text-slate-500 text-lg transition-colors duration-300"
              >Tu foto aquí</span
            >
          </div>
        </div>
      </div>

      <!-- Introduction -->
      <div class="order-1 md:order-2">
        <h2
          class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
        >
          [Tu nombre completo]
        </h2>
        <p
          class="text-xl mb-4 font-semibold text-orange-600 dark:text-purple-400 transition-colors duration-300"
        >
          [Tu título profesional]
        </p>
        <p
          class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4 transition-colors duration-300"
        >
          [Escribe aquí una breve introducción sobre ti, tu pasión por la
          tecnología y lo que te motiva en tu carrera profesional. 2-3 líneas.]
        </p>
        <p
          class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed transition-colors duration-300"
        >
          [Continúa con más detalles sobre tu trayectoria, experiencia o
          cualquier información relevante que quieras compartir. 2-3 líneas
          más.]
        </p>
      </div>
    </div>

    <!-- Skills & Expertise Section -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        Skills & Expertise
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Skill Card 1 -->
        <div
          class="p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          >
            💻
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            [Categoría 1]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 transition-colors duration-300"
          >
            [Descripción de tus habilidades en esta área. Ej: Frontend
            Development, Backend Development, etc.]
          </p>
        </div>

        <!-- Skill Card 2 -->
        <div
          class="p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          >
            🎨
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            [Categoría 2]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 transition-colors duration-300"
          >
            [Descripción de tus habilidades en esta área. Ej: UI/UX Design,
            Design Systems, etc.]
          </p>
        </div>

        <!-- Skill Card 3 -->
        <div
          class="p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          >
            🚀
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            [Categoría 3]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 transition-colors duration-300"
          >
            [Descripción de tus habilidades en esta área. Ej: DevOps, Cloud
            Services, etc.]
          </p>
        </div>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        Experience
      </h2>
      <div class="max-w-3xl mx-auto space-y-8">
        <!-- Timeline Item 1 -->
        <div
          class="relative pl-8 border-l-2 border-orange-500 dark:border-purple-500 transition-colors duration-300"
        >
          <div
            class="absolute w-4 h-4 rounded-full -left-[9px] top-0 bg-orange-600 dark:bg-purple-600 transition-colors duration-300"
          ></div>
          <div class="mb-1">
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
            >
              [Fecha inicio - Fecha fin]
            </span>
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2 transition-colors duration-300"
          >
            [Puesto]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
          >
            [Nombre de la empresa]
          </p>
          <p
            class="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300"
          >
            [Descripción de tus responsabilidades y logros en este puesto.]
          </p>
        </div>

        <!-- Timeline Item 2 -->
        <div
          class="relative pl-8 border-l-2 border-orange-500 dark:border-purple-500 transition-colors duration-300"
        >
          <div
            class="absolute w-4 h-4 rounded-full -left-[9px] top-0 bg-orange-600 dark:bg-purple-600 transition-colors duration-300"
          ></div>
          <div class="mb-1">
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
            >
              [Fecha inicio - Fecha fin]
            </span>
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2 transition-colors duration-300"
          >
            [Puesto]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
          >
            [Nombre de la empresa]
          </p>
          <p
            class="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300"
          >
            [Descripción de tus responsabilidades y logros en este puesto.]
          </p>
        </div>

        <!-- Timeline Item 3 -->
        <div
          class="relative pl-8 border-l-2 border-orange-500 dark:border-purple-500 transition-colors duration-300"
        >
          <div
            class="absolute w-4 h-4 rounded-full -left-[9px] top-0 bg-orange-600 dark:bg-purple-600 transition-colors duration-300"
          ></div>
          <div class="mb-1">
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
            >
              [Fecha inicio - Fecha fin]
            </span>
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2 transition-colors duration-300"
          >
            [Puesto]
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
          >
            [Nombre de la empresa]
          </p>
          <p
            class="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300"
          >
            [Descripción de tus responsabilidades y logros en este puesto.]
          </p>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        Education
      </h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- Education Card 1 -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border border-orange-100 dark:border-purple-900/50 transition-all duration-300"
        >
          <div class="text-3xl mb-3">🎓</div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 transition-colors duration-300"
          >
            [Título obtenido]
          </h3>
          <p
            class="font-medium mb-2 text-orange-600 dark:text-purple-400 transition-colors duration-300"
          >
            [Institución]
          </p>
          <p
            class="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-300"
          >
            [Año de graduación]
          </p>
        </div>

        <!-- Education Card 2 -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border border-orange-100 dark:border-purple-900/50 transition-all duration-300"
        >
          <div class="text-3xl mb-3">📚</div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 transition-colors duration-300"
          >
            [Título obtenido]
          </h3>
          <p
            class="font-medium mb-2 text-orange-600 dark:text-purple-400 transition-colors duration-300"
          >
            [Institución]
          </p>
          <p
            class="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-300"
          >
            [Año de graduación]
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
    >
      <h2 class="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
      <p class="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
        [Mensaje de llamada a la acción. Invita a las personas a contactarte o a
        ver tus proyectos.]
      </p>
      <div class="flex gap-4 justify-center flex-wrap">
        <NuxtLink
          to="/projects"
          class="px-8 py-3 rounded-xl bg-white text-orange-600 dark:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Ver Proyectos
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-8 py-3 rounded-xl border-2 border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-orange-600 dark:hover:text-purple-600 hover:scale-105"
        >
          Contactar
        </NuxtLink>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="mt-12 text-center">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-purple-400 transition-colors duration-300"
      >
        <span>←</span>
        <span>Back to home</span>
      </NuxtLink>
    </div>
  </section>
</template>
