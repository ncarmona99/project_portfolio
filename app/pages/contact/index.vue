<script setup lang="ts">
definePageMeta({
  title: "Contact me",
  description: "Contact me page",
});
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 md:pt-24 pt-16 pb-16">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1
        class="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        Contact Me
      </h1>
      <div
        class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
      ></div>
      <p
        class="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
      >
        [Mensaje de bienvenida. Ej: "¿Tienes alguna pregunta o proyecto en
        mente? ¡Me encantaría saber de ti!"]
      </p>
    </div>

    <!-- Contact Grid -->
    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <!-- Contact Form -->
      <div
        class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 transition-all duration-300"
      >
        <h2
          class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors duration-300"
        >
          Envíame un mensaje
        </h2>

        <form class="space-y-4">
          <!-- Name Field -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <!-- Subject Field -->
          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Asunto del mensaje"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <!-- Message Field -->
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none resize-none transition-all duration-300"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Enviar mensaje
          </button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-6">
        <!-- Email Card -->
        <div
          class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          >
            📧
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Email
          </h3>
          <a
            href="mailto:tu@email.com"
            class="text-orange-600 dark:text-purple-400 hover:underline transition-colors duration-300"
          >
            [tu@email.com]
          </a>
        </div>

        <!-- Phone Card -->
        <div
          class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          >
            📱
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Teléfono / WhatsApp
          </h3>
          <a
            href="tel:+56123456789"
            class="text-orange-600 dark:text-purple-400 hover:underline transition-colors duration-300"
          >
            [+56 9 1234 5678]
          </a>
        </div>

        <!-- Social Links Card -->
        <div
          class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-orange-500 dark:hover:border-purple-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
          >
            🌐
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors duration-300"
          >
            Redes Sociales
          </h3>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
