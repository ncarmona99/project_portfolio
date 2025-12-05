<script setup lang="ts"></script>

<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300"
  >
    <header>
      <div class="flex flex-row justify-center">
        <nav
          class="sticky top-0 mx-auto items-center justify-center flex flex-row flex-wrap font-mono font-medium my-5 rounded-xl shadow-xl shadow-orange-300/50 dark:shadow-purple-500/30 bg-slate-900 dark:bg-slate-950 text-white text-base sm:text-lg md:text-2xl p-2 sm:p-3 md:p-4 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-2 transition-all duration-300"
        >
          <NuxtLink to="/" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              :class="isActive ? 'after:w-full' : ''"
            >
              Home
            </span>
          </NuxtLink>
          <div class="w-px h-9 bg-white opacity-70"></div>
          <NuxtLink to="/about_me" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
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
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              :class="isActive ? 'after:w-full' : ''"
            >
              Projects
            </span>
          </NuxtLink>
          <div class="w-px h-9 bg-white opacity-70"></div>
          <NuxtLink to="/contact" v-slot="{ isActive }">
            <span
              class="relative inline-block px-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              :class="isActive ? 'after:w-full' : ''"
            >
              Contact
            </span>
          </NuxtLink>
          <ClientOnly></ClientOnly>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer
      class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-3 sm:p-5 mt-auto transition-colors duration-300"
    >
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
              class="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 rounded-full px-2 whitespace-nowrap text-white transition-all duration-300"
            >
              Nicolás
            </p>
            <p
              class="bg-gradient-to-r from-orange-500 to-orange-400 dark:from-purple-500 dark:to-purple-400 px-2 whitespace-nowrap text-white transition-all duration-300"
            >
              Carmona
            </p>
          </div>
        </div>
        <div class="flex justify-center order-2 md:order-3">
          <div
            class="flex flex-row gap-3 md:gap-1 flex-wrap justify-center items-center"
          >
            <a
              href="https://github.com/ncarmona99"
              target="_blank"
              class="opacity-80 hover:opacity-100 transition-opacity"
            >
              <span
                ><svg
                  width="30"
                  height="30"
                  viewBox="0 0 201 201"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="dark:invert transition-all duration-300"
                >
                  <g clip-path="url(#clip0_106_2269)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M100.24 0.275146C44.9895 0.275146 0.239502 45.0251 0.239502 100.275C0.239502 144.525 28.8645 181.9 68.6145 195.15C73.6145 196.025 75.4895 193.025 75.4895 190.4C75.4895 188.025 75.3645 180.15 75.3645 171.775C50.2395 176.4 43.7395 165.65 41.7395 160.025C40.6145 157.15 35.7395 148.275 31.4895 145.9C27.9895 144.025 22.9895 139.4 31.3645 139.275C39.2395 139.15 44.8645 146.525 46.7395 149.525C55.7395 164.65 70.1145 160.4 75.8645 157.775C76.7395 151.275 79.3645 146.9 82.2395 144.4C59.9895 141.9 36.7395 133.275 36.7395 95.0251C36.7395 84.1501 40.6145 75.1501 46.9895 68.1501C45.9895 65.6501 42.4895 55.4001 47.9895 41.6501C47.9895 41.6501 56.3645 39.0251 75.4895 51.9001C83.4895 49.6501 91.9895 48.5251 100.49 48.5251C108.99 48.5251 117.49 49.6501 125.49 51.9001C144.615 38.9001 152.99 41.6501 152.99 41.6501C158.49 55.4001 154.99 65.6501 153.99 68.1501C160.365 75.1501 164.24 84.0251 164.24 95.0251C164.24 133.4 140.865 141.9 118.615 144.4C122.24 147.525 125.365 153.525 125.365 162.9C125.365 176.275 125.24 187.025 125.24 190.4C125.24 193.025 127.115 196.15 132.115 195.15C171.615 181.9 200.24 144.4 200.24 100.275C200.24 45.0251 155.49 0.275146 100.24 0.275146Z"
                      fill="#1B1F23"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_106_2269">
                      <rect
                        width="200"
                        height="200"
                        fill="white"
                        transform="translate(0.239502 0.275146)"
                      />
                    </clipPath>
                  </defs>
                </svg> </span
            ></a>
            <a
              href="https://wa.me/56951974512"
              target="_blank"
              class="opacity-80 hover:opacity-100 transition-opacity"
            >
              <span
                ><svg
                  width="30"
                  height="30"
                  viewBox="0 0 201 201"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="dark:invert transition-all duration-300"
                >
                  <path
                    d="M100.953 200.473H100.513C45.4953 200.473 0.733398 155.698 0.733398 100.664V100.224C0.733398 45.1893 45.4953 0.414307 100.513 0.414307H100.953C155.972 0.414307 200.733 45.1893 200.733 100.224V100.664C200.733 155.698 155.972 200.473 100.953 200.473ZM100.513 7.18609C49.2254 7.18609 7.50319 48.9205 7.50319 100.224V100.664C7.50319 151.967 49.2254 193.701 100.513 193.701H100.953C152.241 193.701 193.964 151.967 193.964 100.664V100.224C193.964 48.9205 152.241 7.18609 100.953 7.18609H100.513Z"
                    fill="#383D38"
                  />
                  <path
                    d="M119.57 128.713C94.8403 128.713 74.7204 108.58 74.7137 83.843C74.7204 77.5723 79.8249 72.4731 86.0802 72.4731C86.7233 72.4731 87.3596 72.5273 87.9689 72.6357C89.3093 72.8591 90.5821 73.3128 91.7532 73.9968C91.9225 74.0984 92.0376 74.261 92.0646 74.4506L94.6778 90.9263C94.7116 91.1226 94.6507 91.3123 94.5221 91.4545C93.0801 93.0526 91.2387 94.2039 89.1875 94.7795L88.1991 95.0571L88.5714 96.0119C91.9428 104.599 98.8074 111.458 107.398 114.844L108.353 115.224L108.63 114.235C109.206 112.183 110.357 110.341 111.954 108.899C112.069 108.79 112.225 108.736 112.381 108.736C112.415 108.736 112.449 108.736 112.489 108.743L128.96 111.357C129.156 111.391 129.319 111.499 129.42 111.668C130.097 112.84 130.551 114.12 130.781 115.46C130.889 116.056 130.937 116.686 130.937 117.343C130.937 123.607 125.839 128.706 119.57 128.713Z"
                    fill="#383D38"
                  />
                  <path
                    d="M163.425 95.0163C162.091 79.9423 155.186 65.9586 143.982 55.6452C132.711 45.2708 118.088 39.5554 102.795 39.5554C69.2301 39.5554 41.9208 66.8727 41.9208 100.447C41.9208 111.716 45.0281 122.693 50.911 132.254L37.7912 161.305L79.7978 156.829C87.1024 159.822 94.8335 161.339 102.788 161.339C104.88 161.339 107.026 161.231 109.179 161.007C111.074 160.804 112.99 160.506 114.872 160.127C142.98 154.446 163.499 129.491 163.662 100.772V100.447C163.662 98.6189 163.581 96.7905 163.418 95.0231L163.425 95.0163ZM81.4158 144.078L58.1751 146.556L65.1141 131.178L63.7263 129.315C63.6248 129.18 63.5232 129.045 63.4081 128.889C57.383 120.566 54.2012 110.734 54.2012 100.454C54.2012 73.6513 75.9999 51.8461 102.795 51.8461C127.897 51.8461 149.175 71.437 151.226 96.4452C151.334 97.786 151.395 99.1336 151.395 100.461C151.395 100.84 151.388 101.212 151.382 101.612C150.867 124.033 135.209 143.076 113.301 147.924C111.629 148.297 109.917 148.581 108.211 148.764C106.437 148.967 104.616 149.069 102.808 149.069C96.3702 149.069 90.1149 147.823 84.2049 145.358C83.5482 145.094 82.9051 144.809 82.3026 144.518L81.4225 144.091L81.4158 144.078Z"
                    fill="#383D38"
                  />
                </svg> </span
            ></a>
            <a
              href="https://www.linkedin.com/in/nicolas-carmona-rioseco/"
              target="_blank"
              class="opacity-80 hover:opacity-100 transition-opacity"
              ><span
                ><svg
                  width="30"
                  height="30"
                  viewBox="0 0 201 201"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="dark:invert transition-all duration-300"
                >
                  <path
                    d="M100.559 200.304H100.119C45.1008 200.304 0.338867 155.528 0.338867 100.494V100.054C0.338867 45.0197 45.1008 0.244629 100.119 0.244629H100.559C155.577 0.244629 200.339 45.0197 200.339 100.054V100.494C200.339 155.528 155.577 200.304 100.559 200.304ZM100.119 7.01641C48.831 7.01641 7.10866 48.751 7.10866 100.054V100.494C7.10866 151.797 48.831 193.532 100.119 193.532H100.559C151.847 193.532 193.569 151.797 193.569 100.494V100.054C193.569 48.751 151.847 7.01641 100.559 7.01641H100.119Z"
                    fill="#383D38"
                  />
                  <path
                    d="M49.8059 67.8746C47.2605 65.5112 45.9946 62.5858 45.9946 59.1051C45.9946 55.6244 47.2673 52.5703 49.8059 50.2001C52.3514 47.8368 55.628 46.6517 59.6425 46.6517C63.6569 46.6517 66.805 47.8368 69.3436 50.2001C71.8891 52.5635 73.1549 55.5364 73.1549 59.1051C73.1549 62.6739 71.8823 65.5112 69.3436 67.8746C66.7982 70.2379 63.5689 71.423 59.6425 71.423C55.716 71.423 52.3514 70.2379 49.8059 67.8746ZM71.0157 81.4317V153.89H48.127V81.4317H71.0157Z"
                    fill="#383D38"
                  />
                  <path
                    d="M147.21 88.5893C152.199 94.0067 154.69 101.442 154.69 110.909V152.61H132.953V113.848C132.953 109.074 131.714 105.363 129.243 102.722C126.772 100.081 123.441 98.7537 119.271 98.7537C115.101 98.7537 111.77 100.074 109.299 102.722C106.828 105.363 105.589 109.074 105.589 113.848V152.61H83.7227V81.2284H105.589V90.6954C107.803 87.5397 110.788 85.0477 114.539 83.2125C118.289 81.3774 122.507 80.4631 127.198 80.4631C135.552 80.4631 142.227 83.1718 147.21 88.5893Z"
                    fill="#383D38"
                  />
                </svg>
              </span>
            </a>
            <a
              href="mailto:contacto@ncarmona.cl"
              class="opacity-80 hover:opacity-100 transition-opacity"
              ><span>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 125 125"
                  class="dark:invert transition-all duration-300"
                >
                  <title>email-round-line-color</title>
                  <path
                    d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM33.29,38.65h56.3a3.65,3.65,0,0,1,3.64,3.64V81a3.57,3.57,0,0,1-.63,2,1.46,1.46,0,0,1-.34.52,1.51,1.51,0,0,1-.34.24,3.7,3.7,0,0,1-2.33.85H33.29a3.63,3.63,0,0,1-2.57-1.07A3.67,3.67,0,0,1,29.65,81V42.29a3.65,3.65,0,0,1,3.64-3.64Zm-.85,40.79L52.17,59.67,32.44,43.58V79.44Zm21.9-18L34,81.83H88.7L69.27,61.44,62.86,66.9h0a1.39,1.39,0,0,1-1.79,0l-6.73-5.48Zm17-1.81,19,20V43.41l-19,16.22ZM34.24,41.44,61.93,64,88.44,41.44Zm68-20.81a57.7,57.7,0,1,0,16.91,40.81,57.5,57.5,0,0,0-16.91-40.81Z"
                  />
                </svg> </span
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
