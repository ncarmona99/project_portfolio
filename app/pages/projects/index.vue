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
        These are my projects currently deployed in
        <span
          class="text-primary dark:text-primary-dark font-bold transition-colors duration-300"
          >production</span
        >
        environments. You can explore them freely.
      </p>
    </div>

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
            WMSECO
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            WMS module project for order consolidation in packaging, featuring barcode
            detection and integrated use of a handheld scanner. Built and developed with
            Vue.js; PostgreSQL and MySQL databases; Node.js backend; deployed on a local
            Linux CentOS server.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >VueJS</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >PostgreSQL</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >NodeJS</span
            >
          </div>

          <!-- Links -->
          <div class="flex gap-3">
            <a
              href="#"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/ncarmona99/wmseco"
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
            ><div class="bg-[url('/img/cat-la-paloma.png')] h-48 w-120 bg-cover"></div
          ></span>
        </div>

        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Catalog for Librería La Paloma
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            Self-managed catalog created for the company “Librería La Paloma.” It includes
            user management, product linking with the sales system's database, and a
            general admin panel. Developed in Vue.js with a PostgreSQL database and a
            Node.js backend.
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >VueJS</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >NodeJS</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >PostgreSQL</span
            >
          </div>

          <div class="flex gap-3">
            <a
              href="#"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/ncarmona99/frontend_catalogo_la_paloma"
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
            ><div class="bg-[url('/img/benevalpo.png')] h-48 w-96 bg-cover"></div
          ></span>
        </div>

        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Website for Benevalpo
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            Website for Benevalpo, a project that involved creating a responsive and
            user-friendly website using PHP and PHPMailer for contact form functionality.
            Also, this project modernized the old members registration form.
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >PHP</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >PHPMailer</span
            >
          </div>

          <div class="flex gap-3">
            <a
              href="www.benevalpo.cl"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Website
            </a>
            <a
              href="https://github.com/ncarmona99/benevalpo"
              class="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Project Card 4 -->
      <div
        class="group rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
      >
        <div
          class="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center transition-colors duration-300"
        >
          <span
            class="text-slate-400 dark:text-slate-500 text-sm transition-colors duration-300"
            ><div class="bg-[url('/img/ecosa.png')] h-48 w-96 bg-cover"></div
          ></span>
        </div>

        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Website for Importadora Eco S.A.
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            Website for EcoSA, a project that involved creating a responsive and
            user-friendly website using PHP and PHPMailer for contact form functionality.
            This replaced their old static HTML site with a modern design.
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >PHP</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >PHPMailer</span
            >
          </div>

          <div class="flex gap-3">
            <a
              href="www.ecosa.cl"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Website
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
      <!-- Project Card 5 -->
      <div
        class="group rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-orange-500 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
      >
        <div
          class="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center transition-colors duration-300"
        >
          <span
            class="text-slate-400 dark:text-slate-500 text-sm transition-colors duration-300"
            ><div class="bg-[url('/img/ncarmona.png')] h-48 w-96 bg-cover"></div
          ></span>
        </div>

        <div class="p-6">
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Nicolás Carmona Web Portfolio
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300"
          >
            My own web portfolio built with Nuxt.js and Tailwind CSS, showcasing my
            skills, projects, and experience as a web developer. It features a dark mode
            toggle, responsive design, and smooth animations.
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >NuxtJS</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >Tailwind CSS</span
            >
            <span
              class="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-purple-300 transition-colors duration-300"
              >NodeJS</span
            >
          </div>

          <div class="flex gap-3">
            <a
              href="www.ncarmona.cl"
              class="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Website
            </a>
            <a
              href="https://github.com/ncarmona99/project_portfolio"
              class="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-orange-200 dark:border-purple-900/30 transition-all duration-300"
    >
      <h2
        class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        Do you have a project in mind? Let's work together!
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-300">
        I'm always available to talk about your ideas and help bring them to life.
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Contact Me
      </NuxtLink>
    </div>
  </section>
</template>
