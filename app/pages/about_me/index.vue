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
        class="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4"
      >
        About Me
      </h1>
      <div
        class="w-24 h-1 mx-auto rounded-full"
        style="background: linear-gradient(90deg, #ff6d00, #ff9100)"
      ></div>
    </div>

    <!-- Profile Section -->
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
      <!-- Image Placeholder -->
      <div class="order-2 md:order-1">
        <div class="relative">
          <div
            class="absolute -inset-4 rounded-2xl opacity-20"
            style="background: linear-gradient(135deg, #ff6d00, #ff9100)"
          ></div>
          <div
            class="relative bg-gray-200 rounded-2xl aspect-square flex items-center justify-center"
          >
            <span class="text-gray-400 text-lg">Tu foto aquí</span>
          </div>
        </div>
      </div>

      <!-- Introduction -->
      <div class="order-1 md:order-2">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">
          [Tu nombre completo]
        </h2>
        <p class="text-xl mb-4" style="color: #ff6d00; font-weight: 600">
          [Tu título profesional]
        </p>
        <p class="text-slate-600 text-lg leading-relaxed mb-4">
          [Escribe aquí una breve introducción sobre ti, tu pasión por la
          tecnología y lo que te motiva en tu carrera profesional. 2-3 líneas.]
        </p>
        <p class="text-slate-600 text-lg leading-relaxed">
          [Continúa con más detalles sobre tu trayectoria, experiencia o
          cualquier información relevante que quieras compartir. 2-3 líneas
          más.]
        </p>
      </div>
    </div>

    <!-- Skills & Expertise Section -->
    <div class="mb-20">
      <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">
        Skills & Expertise
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Skill Card 1 -->
        <div
          class="p-6 rounded-xl border-2 border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
          style="hover:border-color: #ff9100;"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl"
            style="background: linear-gradient(135deg, #ff6d00, #ff9100)"
          >
            💻
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">[Categoría 1]</h3>
          <p class="text-slate-600">
            [Descripción de tus habilidades en esta área. Ej: Frontend
            Development, Backend Development, etc.]
          </p>
        </div>

        <!-- Skill Card 2 -->
        <div
          class="p-6 rounded-xl border-2 border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl"
            style="background: linear-gradient(135deg, #ff6d00, #ff9100)"
          >
            🎨
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">[Categoría 2]</h3>
          <p class="text-slate-600">
            [Descripción de tus habilidades en esta área. Ej: UI/UX Design,
            Design Systems, etc.]
          </p>
        </div>

        <!-- Skill Card 3 -->
        <div
          class="p-6 rounded-xl border-2 border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl"
            style="background: linear-gradient(135deg, #ff6d00, #ff9100)"
          >
            🚀
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">[Categoría 3]</h3>
          <p class="text-slate-600">
            [Descripción de tus habilidades en esta área. Ej: DevOps, Cloud
            Services, etc.]
          </p>
        </div>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="mb-20">
      <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">
        Experience
      </h2>
      <div class="max-w-3xl mx-auto space-y-8">
        <!-- Timeline Item 1 -->
        <div class="relative pl-8 border-l-2" style="border-color: #ff9100">
          <div
            class="absolute w-4 h-4 rounded-full -left-[9px] top-0"
            style="background: #ff6d00"
          ></div>
          <div class="mb-1">
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full text-white"
              style="background: linear-gradient(90deg, #ff6d00, #ff9100)"
            >
              [Fecha inicio - Fecha fin]
            </span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mt-2">[Puesto]</h3>
          <p class="text-slate-600 font-medium">[Nombre de la empresa]</p>
          <p class="text-slate-600 mt-2">
            [Descripción de tus responsabilidades y logros en este puesto.]
          </p>
        </div>

        <!-- Timeline Item 2 -->
        <div class="relative pl-8 border-l-2" style="border-color: #ff9100">
          <div
            class="absolute w-4 h-4 rounded-full -left-[9px] top-0"
            style="background: #ff6d00"
          ></div>
          <div class="mb-1">
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full text-white"
              style="background: linear-gradient(90deg, #ff6d00, #ff9100)"
            >
              [Fecha inicio - Fecha fin]
            </span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mt-2">[Puesto]</h3>
          <p class="text-slate-600 font-medium">[Nombre de la empresa]</p>
          <p class="text-slate-600 mt-2">
            [Descripción de tus responsabilidades y logros en este puesto.]
          </p>
        </div>

        <!-- Timeline Item 3 -->
        <div class="relative pl-8 border-l-2" style="border-color: #ff9100">
          <div
            class="absolute w-4 h-4 rounded-full -left-[9px] top-0"
            style="background: #ff6d00"
          ></div>
          <div class="mb-1">
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full text-white"
              style="background: linear-gradient(90deg, #ff6d00, #ff9100)"
            >
              [Fecha inicio - Fecha fin]
            </span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mt-2">[Puesto]</h3>
          <p class="text-slate-600 font-medium">[Nombre de la empresa]</p>
          <p class="text-slate-600 mt-2">
            [Descripción de tus responsabilidades y logros en este puesto.]
          </p>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="mb-20">
      <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">
        Education
      </h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- Education Card 1 -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100"
        >
          <div class="text-3xl mb-3">🎓</div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">
            [Título obtenido]
          </h3>
          <p class="font-medium mb-2" style="color: #ff6d00">[Institución]</p>
          <p class="text-slate-600 text-sm">[Año de graduación]</p>
        </div>

        <!-- Education Card 2 -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100"
        >
          <div class="text-3xl mb-3">📚</div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">
            [Título obtenido]
          </h3>
          <p class="font-medium mb-2" style="color: #ff6d00">[Institución]</p>
          <p class="text-slate-600 text-sm">[Año de graduación]</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="text-center py-12 px-6 rounded-2xl"
      style="background: linear-gradient(135deg, #ff6d00, #ff9100)"
    >
      <h2 class="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
      <p class="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
        [Mensaje de llamada a la acción. Invita a las personas a contactarte o a
        ver tus proyectos.]
      </p>
      <div class="flex gap-4 justify-center flex-wrap">
        <NuxtLink
          to="/projects"
          class="px-8 py-3 rounded-xl bg-white font-medium transition-transform duration-300 hover:scale-105"
          style="color: #ff6d00"
        >
          Ver Proyectos
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-8 py-3 rounded-xl border-2 border-white text-white font-medium transition-all duration-300 hover:bg-white hover:scale-105"
          style="hover:color: #ff6d00;"
        >
          Contactar
        </NuxtLink>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="mt-12 text-center">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
      >
        <span>←</span>
        <span>Back to home</span>
      </NuxtLink>
    </div>
  </section>
</template>
