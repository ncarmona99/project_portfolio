import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
}

export const useContactForm = () => {
  const formData: ContactFormData = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const formState: ContactFormState = reactive({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  })

  const errors: Record<keyof ContactFormData, Ref<string>> = {
    name: ref(''),
    email: ref(''),
    subject: ref(''),
    message: ref('')
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (field: keyof ContactFormData): boolean => {
    errors[field].value = ''

    if (!formData[field] || formData[field].trim() === '') {
      errors[field].value = 'required'
      return false
    }

    if (field === 'email' && !validateEmail(formData[field])) {
      errors[field].value = 'invalid_email'
      return false
    }

    if (field === 'name' && formData[field].length < 2) {
      errors[field].value = 'name_too_short'
      return false
    }

    if (field === 'message' && formData[field].length < 10) {
      errors[field].value = 'message_too_short'
      return false
    }

    return true
  }

  const validateForm = (): boolean => {
    let isValid = true
    const fields: Array<keyof ContactFormData> = ['name', 'email', 'subject', 'message']
    
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false
      }
    })

    return isValid
  }

  const resetForm = () => {
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
    
    errors.name.value = ''
    errors.email.value = ''
    errors.subject.value = ''
    errors.message.value = ''
  }

  const resetState = () => {
    formState.isSuccess = false
    formState.isError = false
    formState.errorMessage = ''
  }

  const submitForm = async (): Promise<boolean> => {
    resetState()

    if (!validateForm()) {
      return false
    }

    formState.isSubmitting = true

    try {
      // Get reCAPTCHA token if available
      let recaptchaToken = ''
      
      if (typeof window !== 'undefined') {
        const config = useRuntimeConfig()
        const siteKey = config.public.recaptchaSiteKey
        
        if (siteKey) {
          console.log('🔐 Attempting to generate reCAPTCHA token...')
          
          if ((window as any).grecaptcha) {
            try {
              // Wait for grecaptcha to be ready and execute
              recaptchaToken = await new Promise((resolve) => {
                (window as any).grecaptcha.ready(async () => {
                  try {
                    const token = await (window as any).grecaptcha.execute(siteKey, { action: 'contact_form' })
                    console.log('✅ reCAPTCHA token generated successfully')
                    resolve(token)
                  } catch (error) {
                    console.error('❌ Failed to execute reCAPTCHA:', error)
                    resolve('')
                  }
                })
              })
            } catch (recaptchaError) {
              console.error('❌ reCAPTCHA error:', recaptchaError)
            }
          } else {
            console.warn('⚠️  grecaptcha not loaded yet. Continuing without token...')
          }
        } else {
          console.log('ℹ️  reCAPTCHA not configured (no site key)')
        }
      }

      console.log('📤 Sending form with token:', recaptchaToken ? `${recaptchaToken.substring(0, 20)}...` : 'No token')

      const response = await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recaptchaToken
        }
      })

      formState.isSuccess = true
      resetForm()
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        formState.isSuccess = false
      }, 5000)

      return true
    } catch (error: any) {
      formState.isError = true
      formState.errorMessage = error?.data?.message || 'unknown_error'
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        formState.isError = false
      }, 5000)

      return false
    } finally {
      formState.isSubmitting = false
    }
  }

  return {
    formData,
    formState,
    errors,
    validateField,
    submitForm,
    resetForm,
    resetState
  }
}
