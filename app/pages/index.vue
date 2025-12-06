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
            >fullstack developer</span
          >, passionate about technology, innovation projects and Beautiful UIs. You're
          cordially invited to explore my portfolio and get in touch with me!
        </p>

        <div class="flex flex-wrap gap-4">
          <NuxtLink
            to="/projects"
            class="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-colors duration-300 hover:scale-105 hover:shadow-lg"
          >
            See projects
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4 mt-8">
          <a
            href="https://github.com/ncarmona99"
            target="_blank"
            class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-600 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
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
            class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-600 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
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
            class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-600 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
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

      <!-- Image -->
      <div class="order-1 md:order-2">
        <div class="relative">
          <div
            class="dark:bg-[url('/img/logo_dark_mode.png')] bg-[url('/img/logo_light_mode.png')] h-120 w-full bg-cover dark:h-120 dark:w-full dark:bg-cover transition-all duration-300"
          ></div>
        </div>
      </div>
    </div>

    <!-- Stats Section
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
    -->

    <!-- Featured Skills -->
    <div class="mb-20">
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center transition-colors duration-300"
      >
        My specialties
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <svg
            class="mx-auto fill-primary dark:fill-primary-dark transition-colors duration-300"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            width="75px"
            height="75px"
            xml:space="preserve"
          >
            <g>
              <rect x="113.116" y="174.636" class="st0" width="285.768" height="31.752" />
              <rect x="113.116" y="238.14" class="st0" width="285.768" height="31.752" />
              <rect x="113.116" y="301.644" class="st0" width="150.822" height="31.752" />
              <polygon
                class="st0"
                points="444.558,379.387 315.535,305.612 331.232,461.675 361.512,425.038 418.729,512 461.581,483.799 
		404.372,396.837 	"
              />
              <path
                class="st0"
                d="M462.387,0H49.612C23.31,0,1.985,21.325,1.985,47.628v349.271c0,26.302,21.325,47.628,47.628,47.628h247.14
		l-4.116-39.69H49.612c-4.38,0-7.938-3.566-7.938-7.938V103.194h428.651v293.706c0,4.372-3.558,7.938-7.938,7.938h-24.527
		l26.333,39.597c25.458-0.954,45.822-21.846,45.822-47.535V47.628C510.015,21.325,488.69,0,462.387,0z M303.295,72.434
		c-10.411,0-18.853-8.442-18.853-18.853c0-10.41,8.442-18.852,18.853-18.852c10.41,0,18.852,8.442,18.852,18.852
		C322.147,63.992,313.705,72.434,303.295,72.434z M373.248,72.434c-10.41,0-18.853-8.442-18.853-18.853
		c0-10.41,8.442-18.852,18.853-18.852c10.411,0,18.853,8.442,18.853,18.852C392.101,63.992,383.659,72.434,373.248,72.434z
		 M443.201,72.434c-10.411,0-18.853-8.442-18.853-18.853c0-10.41,8.442-18.852,18.853-18.852c10.411,0,18.853,8.442,18.853,18.852
		C462.054,63.992,453.612,72.434,443.201,72.434z"
              />
            </g>
          </svg>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Frontend
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [Vue, Nuxt, Angular]
          </p>
        </div>

        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <svg
            class="mx-auto fill-primary dark:fill-primary-dark transition-colors duration-300"
            width="75px"
            height="75px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.4881 6.44591C13.8882 6.55311 14.1256 6.96437 14.0184 7.36447L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97624C12.6767 6.57614 13.088 6.3387 13.4881 6.44591ZM14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967L16.2387 8.67801C16.874 9.3133 17.4038 9.84308 17.7678 10.3202C18.1521 10.8238 18.4216 11.3559 18.4216 12C18.4216 12.6441 18.1521 13.1762 17.7678 13.6798C17.4038 14.1569 16.874 14.6867 16.2387 15.322L16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303C14.6768 15.2374 14.6768 14.7626 14.9697 14.4697L15.1412 14.2981C15.8229 13.6164 16.2797 13.1574 16.5753 12.7699C16.8577 12.3998 16.9216 12.1843 16.9216 12C16.9216 11.8157 16.8577 11.6002 16.5753 11.2301C16.2797 10.8426 15.8229 10.3836 15.1412 9.70191L14.9697 9.53033C14.6768 9.23744 14.6768 8.76257 14.9697 8.46967ZM7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76257 9.32341 9.23744 9.03052 9.53033L8.85894 9.70191C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12617 14.6867 6.59638 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59638 9.84308 7.12617 9.31331 7.76151 8.67801L7.96986 8.46967Z"
            />
          </svg>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Backend
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [Node.js, Python]
          </p>
        </div>

        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <svg
            class="mx-auto fill-primary dark:fill-primary-dark transition-colors duration-300"
            width="75px"
            height="75px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V13.974C4.50221 14.5906 5.21495 15.1029 6.00774 15.4992C7.58004 16.2854 9.69967 16.75 12 16.75C14.3003 16.75 16.42 16.2854 17.9923 15.4992C18.7851 15.1029 19.4978 14.5906 20 13.974V18Z"
            />
            <path
              d="M12 10.75C14.3003 10.75 16.42 10.2854 17.9923 9.49925C18.7851 9.10285 19.4978 8.59059 20 7.97397V12C20 12.5 18.2143 13.5911 17.3214 14.1576C15.9983 14.8192 14.118 15.25 12 15.25C9.88205 15.25 8.00168 14.8192 6.67856 14.1576C5.5 13.5683 4 12.5 4 12V7.97397C4.50221 8.59059 5.21495 9.10285 6.00774 9.49925C7.58004 10.2854 9.69967 10.75 12 10.75Z"
            />
            <path
              d="M17.3214 8.15761C15.9983 8.81917 14.118 9.25 12 9.25C9.88205 9.25 8.00168 8.81917 6.67856 8.15761C6.16384 7.95596 5.00637 7.31492 4.2015 6.27935C4.06454 6.10313 4.00576 5.87853 4.03988 5.65798C4.06283 5.50969 4.0948 5.35695 4.13578 5.26226C4.82815 3.40554 8.0858 2 12 2C15.9142 2 19.1718 3.40554 19.8642 5.26226C19.9052 5.35695 19.9372 5.50969 19.9601 5.65798C19.9942 5.87853 19.9355 6.10313 19.7985 6.27935C18.9936 7.31492 17.8362 7.95596 17.3214 8.15761Z"
            />
          </svg>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Databases
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [PostgreSQL, MySQL, Oracle]
          </p>
        </div>

        <div
          class="p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg text-center"
        >
          <svg
            class="mx-auto fill-primary dark:fill-primary-dark transition-colors duration-300"
            version="1.1"
            id="Uploaded to svgrepo.com"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="75px"
            height="75px"
            viewBox="0 0 32 32"
            xml:space="preserve"
          >
            <path
              class="blueprint_een"
              d="M8,9H4v3h4V9z M7,11H5v-1h2V11z M8,13H4v3h4V13z M7,15H5v-1h2V15z M6,17c-1.657,0-3,1.343-3,3
	s1.343,3,3,3s3-1.343,3-3S7.657,17,6,17z M6,22c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2s2,0.897,2,2C8,21.103,7.103,22,6,22z
	 M21.646,11.646l0.707,0.707l-2,2l-0.707-0.707L21.646,11.646z M31,4h-1.586l-1.707-1.707c-0.391-0.391-1.023-0.391-1.414,0
	L24.586,4H1C0.448,4,0,4.448,0,5v22c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1V5C32,4.448,31.552,4,31,4z M16,14v4h4l8-8v13H11V9
	h10L16,14z M17,14.707L19.293,17H17V14.707z M20.146,16.439l-2.586-2.586L27,4.414L29.586,7L20.146,16.439z M2,26V6h22l-2,2H10v16
	h19V9l1-1v18H2z"
            />
          </svg>
          <h3
            class="font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            UI/UX Design
          </h3>
          <p
            class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300"
          >
            [Figma, Tailwind, Bootstrap]
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="text-center p-12 rounded-2xl bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-orange-200 dark:border-purple-900/30 duration-300 transition-colors"
    >
      <h2
        class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        ¿Ready to work together?
      </h2>
      <p
        class="text-slate-600 dark:text-slate-300 mb-8 text-lg transition-colors duration-300"
      >
        I am available for new projects and collaborations
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Let's talk →
      </NuxtLink>
    </div>
  </section>
</template>
