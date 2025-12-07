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
        {{ $t("about.title") }}
      </h1>
      <div
        class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
      ></div>
    </div>

    <!-- Profile Section -->
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
      <!-- Image -->
      <div class="order-2 md:order-1">
        <div class="relative">
          <div
            class="dark:bg-[url('/img/profile_photo_dark.png')] bg-[url('/img/profile_photo_light.png')] h-134 w-full bg-cover flex items-center justify-center transition-colors duration-300"
          ></div>
        </div>
      </div>

      <!-- Introduction -->
      <div class="order-1 md:order-2">
        <h2
          class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
        >
          {{ $t("about.sub_title") }}
        </h2>
        <p
          class="text-xl mb-4 font-semibold text-orange-600 dark:text-purple-400 transition-colors duration-300"
        >
          {{ $t("about.sub_title2") }}
        </p>
        <p
          class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4 transition-colors duration-300"
        >
          {{ $t("about.description") }}
        </p>
        <p
          class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed transition-colors duration-300"
        >
          {{ $t("about.description2") }}
        </p>
      </div>
    </div>

    <!-- Skills & Expertise Section
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        Skills
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
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
          <p class="text-slate-600 dark:text-slate-300 transition-colors duration-300">
            [Descripción de tus habilidades en esta área. Ej: Frontend Development,
            Backend Development, etc.]
          </p>
        </div>

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
          <p class="text-slate-600 dark:text-slate-300 transition-colors duration-300">
            [Descripción de tus habilidades en esta área. Ej: UI/UX Design, Design
            Systems, etc.]
          </p>
        </div>

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
          <p class="text-slate-600 dark:text-slate-300 transition-colors duration-300">
            [Descripción de tus habilidades en esta área. Ej: DevOps, Cloud Services,
            etc.]
          </p>
        </div>
      </div>
    </div> -->

    <!-- Experience Timeline -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        {{ $t("about.sub_title3") }}
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
              {{ $t("about.date1") }}
            </span>
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2 transition-colors duration-300"
          >
            {{ $t("about.role1") }}
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
          >
            {{ $t("about.company1") }}
          </p>
          <p
            class="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300"
          >
            {{ $t("about.desc1") }}
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
              {{ $t("about.date2") }}
            </span>
          </div>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2 transition-colors duration-300"
          >
            {{ $t("about.role2") }}
          </h3>
          <p
            class="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300"
          >
            {{ $t("about.company2") }}
          </p>
          <p
            class="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300"
          >
            {{ $t("about.desc2") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        {{ $t("about.sub_title4") }}
      </h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- Education Card 1 -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border border-orange-100 dark:border-purple-900/50 transition-all duration-300"
        >
          <svg
            class="mx-auto fill-primary dark:fill-primary-dark transition-colors duration-300"
            fill="#000000"
            width="75px"
            height="75px"
            viewBox="0 -5 42 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>graduate</title>
            <path
              d="M32.639 17.561c0 0-4.592-4.682-10.92-4.682-6.183 0-12.295 4.682-12.295 4.682l-3.433-1.433v4.204c0.541 0.184 0.937 0.682 0.937 1.285 0 0.609-0.404 1.108-0.953 1.288l1.015 2.831h-2.996l1.024-2.855c-0.492-0.209-0.836-0.695-0.836-1.264 0-0.557 0.334-1.031 0.811-1.247v-4.659l-4.993-2.082 21.969-9.861 20.156 9.985-9.486 3.808zM21.469 15.251c6.366 0 9.486 3.37 9.486 3.37v6.99c0 0-3.245 2.621-9.985 2.621s-8.987-2.621-8.987-2.621v-6.99c0 0 3.12-3.37 9.486-3.37zM21.344 26.734c4.412 0 7.989-0.895 7.989-1.997s-3.577-1.997-7.989-1.997-7.988 0.895-7.988 1.997 3.576 1.997 7.988 1.997z"
            ></path>
          </svg>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 transition-colors duration-300"
          >
            {{ $t("about.degree1") }}
          </h3>
          <p
            class="font-medium mb-2 text-orange-600 dark:text-purple-400 transition-colors duration-300"
          >
            {{ $t("about.institution1") }}
          </p>
          <p
            class="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-300"
          >
            {{ $t("about.year1") }}
          </p>
        </div>

        <!-- Education Card 2 -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border border-orange-100 dark:border-purple-900/50 transition-all duration-300"
        >
          <svg
            class="mx-auto fill-primary dark:fill-primary-dark transition-colors duration-300"
            width="75px"
            height="75px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.9922 8.07411C18.7683 8.30212 18.5423 8.50328 18.3375 8.67188C18.1401 8.50899 17.9227 8.31226 17.7078 8.08774C16.9853 7.333 16.5 6.48786 16.5 5.6875C16.5 4.59138 17.3653 3.75 18.375 3.75C19.3847 3.75 20.25 4.59138 20.25 5.6875C20.25 6.46225 19.7514 7.30076 18.9922 8.07411ZM21.75 5.6875C21.75 8.4375 18.375 10.5 18.375 10.5C18.2063 10.5 15 8.4375 15 5.6875C15 3.78902 16.511 2.25 18.375 2.25C20.239 2.25 21.75 3.78902 21.75 5.6875ZM3.75 9C3.75 10.2426 4.75736 11.25 6 11.25H18C20.0711 11.25 21.75 12.9289 21.75 15C21.75 17.0711 20.0711 18.75 18 18.75H9.75V17.25H18C19.2426 17.25 20.25 16.2426 20.25 15C20.25 13.7574 19.2426 12.75 18 12.75H6C3.92893 12.75 2.25 11.0711 2.25 9C2.25 6.92893 3.92893 5.25 6 5.25L14.25 5.25V6.75L6 6.75C4.75736 6.75 3.75 7.75736 3.75 9ZM6.24215 19.3241C6.01829 19.5521 5.79234 19.7533 5.58752 19.9219C5.39011 19.759 5.1727 19.5623 4.95777 19.3377C4.23528 18.583 3.75 17.7379 3.75 16.9375C3.75 15.8414 4.61529 15 5.625 15C6.63471 15 7.5 15.8414 7.5 16.9375C7.5 17.7123 7.00145 18.5508 6.24215 19.3241ZM9 16.9375C9 19.6875 5.625 21.75 5.625 21.75C5.45625 21.75 2.25 19.6875 2.25 16.9375C2.25 15.039 3.76104 13.5 5.625 13.5C7.48896 13.5 9 15.039 9 16.9375ZM6.75 16.875C6.75 17.4963 6.24632 18 5.625 18C5.00368 18 4.5 17.4963 4.5 16.875C4.5 16.2537 5.00368 15.75 5.625 15.75C6.24632 15.75 6.75 16.2537 6.75 16.875ZM18.375 6.75C18.9963 6.75 19.5 6.24632 19.5 5.625C19.5 5.00368 18.9963 4.5 18.375 4.5C17.7537 4.5 17.25 5.00368 17.25 5.625C17.25 6.24632 17.7537 6.75 18.375 6.75Z"
            />
          </svg>
          <h3
            class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 transition-colors duration-300"
          >
            {{ $t("about.degree2") }}
          </h3>
          <p
            class="font-medium mb-2 text-orange-600 dark:text-purple-400 transition-colors duration-300"
          >
            {{ $t("about.institution2") }}
          </p>
          <p
            class="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-300"
          >
            {{ $t("about.year2") }}
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
    >
      <h2 class="text-3xl font-bold text-white mb-4">{{ $t("about.call_title") }}</h2>
      <p class="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
        {{ $t("about.call_subtitle") }}
      </p>
      <div class="flex gap-4 justify-center flex-wrap">
        <NuxtLink
          to="/projects"
          class="px-8 py-3 rounded-xl bg-white text-orange-600 dark:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          {{ $t("about.b_projects") }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-8 py-3 rounded-xl border-2 border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-orange-600 dark:hover:text-purple-600 hover:scale-105"
        >
          {{ $t("about.b_contact") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
