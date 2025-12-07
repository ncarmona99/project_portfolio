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
        Let’s bring your ideas to life — get in touch with me and I guarantee a friendly
        experience and real results.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <!-- Contact Form -->
      <div
        class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 transition-all duration-300"
      >
        <h2
          class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors duration-300"
        >
          Send me a message
        </h2>

        <form class="space-y-4">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>

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
              placeholder="your@email.com"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject of the message"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-orange-500 dark:focus:border-purple-500 focus:outline-none resize-none transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-colors duration-300 hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      <div class="space-y-6">
        <!-- Email Card -->
        <div
          class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-orange-500 dark:hover:border-purple-500 transition-colors duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-colors duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-primary dark:fill-primary-dark transition-colors duration-300"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Email
          </h3>
          <a
            href="mailto:contacto@ncarmona.cl"
            class="text-orange-600 dark:text-purple-400 hover:underline transition-colors duration-300"
          >
            contacto@ncarmona.cl
          </a>
        </div>

        <!-- Phone Card -->
        <div
          class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-orange-500 dark:hover:border-purple-500 transition-colors duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-colors duration-300"
          >
            <svg
              class="fill-primary dark:fill-primary-dark transition-colors duration-300"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              id="phone_number"
              data-name="phone number"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="24"
                height="24"
                fill="none"
              />
              <path
                id="Shape"
                d="M7.02,15.976,5.746,13.381a.7.7,0,0,0-.579-.407l-1.032-.056a.662.662,0,0,1-.579-.437,9.327,9.327,0,0,1,0-6.5.662.662,0,0,1,.579-.437l1.032-.109a.7.7,0,0,0,.589-.394L7.03,2.446l.331-.662a.708.708,0,0,0,.07-.308.692.692,0,0,0-.179-.467A3,3,0,0,0,4.693.017l-.235.03L4.336.063A1.556,1.556,0,0,0,4.17.089l-.162.04C1.857.679.165,4.207,0,8.585V9.83c.165,4.372,1.857,7.9,4,8.483l.162.04a1.556,1.556,0,0,0,.165.026l.122.017.235.03a3,3,0,0,0,2.558-.993.692.692,0,0,0,.179-.467.708.708,0,0,0-.07-.308Z"
                transform="translate(4.393 6.587) rotate(-30)"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300"
          >
            Phone / WhatsApp
          </h3>
          <a
            href="tel:+56951974512"
            class="text-orange-600 dark:text-purple-400 hover:underline transition-colors duration-300"
          >
            +56 9 5197 4512
          </a>
        </div>

        <!-- Social Links Card -->
        <div
          class="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-orange-500 dark:hover:border-purple-500 transition-colors duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-colors duration-300"
          >
            <svg
              class="fill-primary dark:fill-primary-dark transition-colors duration-300"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.02958 19.4012C5.97501 19.9508 6.3763 20.4405 6.92589 20.4951C7.47547 20.5497 7.96523 20.1484 8.01979 19.5988L6.02958 19.4012ZM15.9802 19.5988C16.0348 20.1484 16.5245 20.5497 17.0741 20.4951C17.6237 20.4405 18.025 19.9508 17.9704 19.4012L15.9802 19.5988ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM13 10C13 10.5523 12.5523 11 12 11V13C13.6569 13 15 11.6569 15 10H13ZM12 11C11.4477 11 11 10.5523 11 10H9C9 11.6569 10.3431 13 12 13V11ZM11 10C11 9.44772 11.4477 9 12 9V7C10.3431 7 9 8.34315 9 10H11ZM12 9C12.5523 9 13 9.44772 13 10H15C15 8.34315 13.6569 7 12 7V9ZM8.01979 19.5988C8.22038 17.5785 9.92646 16 12 16V14C8.88819 14 6.33072 16.3681 6.02958 19.4012L8.01979 19.5988ZM12 16C14.0735 16 15.7796 17.5785 15.9802 19.5988L17.9704 19.4012C17.6693 16.3681 15.1118 14 12 14V16Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors duration-300"
          >
            Social media
          </h3>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-600 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-600 flex items-center justify-center hover:bg-orange-500 dark:hover:bg-purple-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
