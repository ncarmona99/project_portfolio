export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  if (config.public.recaptchaSiteKey) {
    // Load reCAPTCHA v3 script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${config.public.recaptchaSiteKey}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)
    
    console.log('reCAPTCHA v3 script loaded')
  } else {
    console.warn('reCAPTCHA site key not configured - form will work without anti-spam protection')
  }
})
