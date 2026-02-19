import { sendEmail, createContactEmailTemplate } from '../utils/email'
import { isRecaptchaValid } from '../utils/recaptcha'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Verify reCAPTCHA token
    const recaptchaResult = await isRecaptchaValid(body.recaptchaToken || '', 0.5)
    
    if (!recaptchaResult.valid) {
      console.error('❌ reCAPTCHA validation failed:', {
        error: recaptchaResult.error,
        score: recaptchaResult.score,
        hasToken: !!body.recaptchaToken
      })
      
      throw createError({
        statusCode: 403,
        statusMessage: 'Forbidden',
        message: 'recaptcha_failed'
      })
    }

    // Log the score for monitoring (optional)
    if (recaptchaResult.score !== undefined) {
      console.log('✅ reCAPTCHA score:', recaptchaResult.score)
    } else {
      console.log('⚠️  reCAPTCHA bypassed (not configured or no token)')
    }

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'missing_fields'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'invalid_email'
      })
    }

    // Validate field lengths
    if (body.name.length < 2) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'name_too_short'
      })
    }

    if (body.message.length < 10) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'message_too_short'
      })
    }

    // Sanitize input to prevent XSS
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .trim()
    }

    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      subject: sanitizeInput(body.subject),
      message: sanitizeInput(body.message)
    }

    const config = useRuntimeConfig()

    // Create email content
    const emailHtml = createContactEmailTemplate(sanitizedData)

    // Send email with retry logic
    try {
      await sendEmail({
        from: `"${sanitizedData.name}" <${config.smtpUser}>`,
        to: config.contactEmail || config.smtpUser,
        subject: `[Portfolio] ${sanitizedData.subject}`,
        html: emailHtml,
        replyTo: sanitizedData.email
      })

      console.log('📧 Contact form email sent successfully')
      
      return {
        success: true,
        message: 'email_sent'
      }
    } catch (emailError: any) {
      console.error('❌ Failed to send email after retries:', emailError.message)
      
      // Check for specific SMTP errors
      if (emailError.message?.includes('Too many concurrent') || 
          emailError.message?.includes('421')) {
        throw createError({
          statusCode: 503,
          statusMessage: 'Service Unavailable',
          message: 'smtp_rate_limit'
        })
      }
      
      if (emailError.message?.includes('authentication') || 
          emailError.message?.includes('Invalid login')) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Internal Server Error',
          message: 'smtp_auth_failed'
        })
      }
      
      // Generic email error
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'email_send_failed'
      })
    }
  } catch (error: any) {
    console.error('❌ Error in contact form:', error.message || error)

    // If it's already a createError, just throw it
    if (error.statusCode) {
      throw error
    }

    // Otherwise, throw a generic error
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'email_send_failed'
    })
  }
})
