export interface RecaptchaVerifyResponse {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

export const verifyRecaptcha = async (token: string): Promise<RecaptchaVerifyResponse> => {
  const config = useRuntimeConfig()

  if (!config.recaptchaSecretKey) {
    console.warn('reCAPTCHA secret key not configured')
    return { success: false, 'error-codes': ['missing-secret-key'] }
  }

  if (!token) {
    return { success: false, 'error-codes': ['missing-input-response'] }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: config.recaptchaSecretKey,
        response: token,
      }),
    })

    const data: RecaptchaVerifyResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error)
    return { success: false, 'error-codes': ['network-error'] }
  }
}

export const isRecaptchaValid = async (
  token: string,
  minScore: number = 0.5
): Promise<{ valid: boolean; score?: number; error?: string }> => {
  const config = useRuntimeConfig()

  // If reCAPTCHA is not configured, allow the request (graceful degradation)
  if (!config.recaptchaSecretKey) {
    console.warn('reCAPTCHA not configured - allowing request without verification')
    return { valid: true }
  }

  // If no token provided but reCAPTCHA is configured, allow it but log warning
  if (!token) {
    console.warn('reCAPTCHA configured but no token provided - allowing request (client may not have loaded reCAPTCHA yet)')
    return { valid: true }
  }

  const result = await verifyRecaptcha(token)

  if (!result.success) {
    const errorCode = result['error-codes']?.[0] || 'unknown-error'
    return {
      valid: false,
      error: errorCode,
    }
  }

  // Check score (reCAPTCHA v3 returns a score from 0.0 to 1.0)
  // Score 0.0 is very likely a bot, 1.0 is very likely a human
  if (result.score !== undefined && result.score < minScore) {
    return {
      valid: false,
      score: result.score,
      error: 'low-score',
    }
  }

  return {
    valid: true,
    score: result.score,
  }
}
