// Debug utility for reCAPTCHA
export const checkRecaptchaStatus = () => {
  if (typeof window === 'undefined') {
    console.log('🔍 reCAPTCHA Status: Server-side rendering')
    return
  }

  console.log('🔍 reCAPTCHA Status Check:')
  console.log('  - grecaptcha object:', !!(window as any).grecaptcha ? '✅ Loaded' : '❌ Not loaded')
  console.log('  - grecaptcha.ready:', typeof (window as any).grecaptcha?.ready === 'function' ? '✅ Available' : '❌ Not available')
  console.log('  - grecaptcha.execute:', typeof (window as any).grecaptcha?.execute === 'function' ? '✅ Available' : '❌ Not available')
  
  const config = useRuntimeConfig()
  console.log('  - Site Key configured:', !!config.public.recaptchaSiteKey ? '✅ Yes' : '❌ No')
  
  // Check if script is in DOM
  const scripts = Array.from(document.querySelectorAll('script'))
  const recaptchaScript = scripts.find(s => s.src.includes('google.com/recaptcha'))
  console.log('  - Script in DOM:', recaptchaScript ? '✅ Yes' : '❌ No')
  
  if (recaptchaScript) {
    console.log('  - Script src:', recaptchaScript.src)
  }
}

// Make it available globally for easy debugging
if (typeof window !== 'undefined') {
  (window as any).checkRecaptchaStatus = checkRecaptchaStatus
}
