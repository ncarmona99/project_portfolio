<script setup lang="ts">
import { useContactForm } from '~/composables/useContactForm'

definePageMeta({
  title: "Contact me",
  description: "Contact me page",
});

const { formData, formState, errors, validateField, submitForm } = useContactForm()
const { t } = useI18n()

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  await submitForm()
}

const getErrorMessage = (field: 'name' | 'email' | 'subject' | 'message'): string => {
  if (!errors[field].value) return ''
  
  switch (errors[field].value) {
    case 'required':
      return t('contact.validation_required')
    case 'invalid_email':
      return t('contact.validation_invalid_email')
    case 'name_too_short':
      return t('contact.validation_name_too_short')
    case 'message_too_short':
      return t('contact.validation_message_too_short')
    default:
      return ''
  }
}

const getApiErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'missing_fields':
      return t('contact.error_missing_fields')
    case 'invalid_email':
      return t('contact.validation_invalid_email')
    case 'email_send_failed':
      return t('contact.error_email_send_failed')
    case 'recaptcha_failed':
      return t('contact.error_recaptcha_failed')
    case 'smtp_rate_limit':
      return t('contact.error_smtp_rate_limit')
    case 'smtp_auth_failed':
      return t('contact.error_smtp_auth_failed')
    default:
      return t('contact.error_unknown')
  }
}
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 md:pt-24 pt-16 pb-16">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1
        class="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300"
      >
        {{ $t("contact.title") }}
      </h1>
      <div
        class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 transition-all duration-300"
      ></div>
      <p
        class="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
      >
        {{ $t("contact.sub-title") }}
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
          {{ $t("contact.form_title") }}
        </h2>

        <!-- Success Message -->
        <div
          v-if="formState.isSuccess"
          class="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-500/50"
        >
          <div class="flex items-start">
            <svg
              class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 class="font-bold text-green-800 dark:text-green-300 mb-1">
                {{ $t("contact.success_title") }}
              </h3>
              <p class="text-green-700 dark:text-green-400 text-sm">
                {{ $t("contact.success_message") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <div
          v-if="formState.isError"
          class="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-500/50"
        >
          <div class="flex items-start">
            <svg
              class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 class="font-bold text-red-800 dark:text-red-300 mb-1">
                {{ $t("contact.error_title") }}
              </h3>
              <p class="text-red-700 dark:text-red-400 text-sm">
                {{ getApiErrorMessage(formState.errorMessage) }}
              </p>
            </div>
          </div>
        </div>

        <form @submit="handleSubmit" class="space-y-4">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              {{ $t("contact.form_name") }}
            </label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              @blur="validateField('name')"
              :placeholder="$t('contact.form_name_placeholder')"
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all duration-300',
                errors.name.value
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-slate-200 dark:border-slate-600 focus:border-orange-500 dark:focus:border-purple-500'
              ]"
            />
            <p v-if="errors.name.value" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ getErrorMessage('name') }}
            </p>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              {{ $t("contact.form_email") }}
            </label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              @blur="validateField('email')"
              :placeholder="$t('contact.form_email_placeholder')"
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all duration-300',
                errors.email.value
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-slate-200 dark:border-slate-600 focus:border-orange-500 dark:focus:border-purple-500'
              ]"
            />
            <p v-if="errors.email.value" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ getErrorMessage('email') }}
            </p>
          </div>

          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              {{ $t("contact.form_subject") }}
            </label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              @blur="validateField('subject')"
              :placeholder="$t('contact.form_subject_placeholder')"
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all duration-300',
                errors.subject.value
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-slate-200 dark:border-slate-600 focus:border-orange-500 dark:focus:border-purple-500'
              ]"
            />
            <p v-if="errors.subject.value" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ getErrorMessage('subject') }}
            </p>
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300"
            >
              {{ $t("contact.form_message") }}
            </label>
            <textarea
              id="message"
              rows="5"
              v-model="formData.message"
              @blur="validateField('message')"
              :placeholder="$t('contact.form_message_placeholder')"
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none resize-none transition-all duration-300',
                errors.message.value
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-slate-200 dark:border-slate-600 focus:border-orange-500 dark:focus:border-purple-500'
              ]"
            ></textarea>
            <p v-if="errors.message.value" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ getErrorMessage('message') }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="formState.isSubmitting"
            class="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 dark:from-purple-600 dark:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <svg
              v-if="formState.isSubmitting"
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {{ formState.isSubmitting ? $t("contact.form_button_sending") : $t("contact.form_button") }}
          </button>

          <!-- reCAPTCHA Notice -->
          <p class="mt-3 text-xs text-center text-slate-500 dark:text-slate-400">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="underline hover:text-orange-600 dark:hover:text-purple-400">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener" class="underline hover:text-orange-600 dark:hover:text-purple-400">Terms of Service</a> apply.
          </p>
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
            {{ $t("contact.email_card_title") }}
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
            {{ $t("contact.phone_card_title") }}
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
            {{ $t("contact.social_card_title") }}
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
