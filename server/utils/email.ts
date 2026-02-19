import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

export interface EmailOptions {
  from: string
  to: string
  subject: string
  html: string
  replyTo?: string
}

// Singleton transporter
let transporter: Transporter | null = null

const getTransporter = (): Transporter => {
  if (transporter) {
    return transporter
  }

  const config = useRuntimeConfig()

  if (!config.smtpHost || !config.smtpPort || !config.smtpUser || !config.smtpPassword) {
    throw new Error('SMTP configuration is missing. Please check your .env file.')
  }

  const port = parseInt(config.smtpPort as string)
  
  transporter = nodemailer.createTransport({
    host: config.smtpHost as string,
    port: port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user: config.smtpUser as string,
      pass: config.smtpPassword as string,
    },
    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
    tls: {
      rejectUnauthorized: false
    }
  } as any)

  console.log('📧 SMTP transporter ready')
  return transporter
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  const currentTransporter = getTransporter()
  const maxAttempts = 2

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await currentTransporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        html: options.html,
        replyTo: options.replyTo || options.from,
      })
      
      console.log('✅ Email sent successfully')
      return true
    } catch (error: any) {
      console.error(`❌ Error sending email (attempt ${attempt}/${maxAttempts}):`, error.message)

      if (attempt < maxAttempts) {
        console.log('⏳ Retrying in 3 seconds...')
        await delay(3000)
      } else {
        throw error
      }
    }
  }

  return false
}

export const createContactEmailTemplate = (data: {
  name: string
  email: string
  subject: string
  message: string
}): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
          border-bottom: 3px solid #ea580c;
          padding-bottom: 16px;
          margin-bottom: 24px;
        }
        .header h1 {
          color: #ea580c;
          margin: 0;
          font-size: 24px;
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: 600;
          color: #555;
          margin-bottom: 4px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
          padding: 12px;
          background-color: #f8f9fa;
          border-radius: 6px;
          border-left: 3px solid #ea580c;
        }
        .message-box {
          background-color: #f8f9fa;
          border-left: 3px solid #ea580c;
          padding: 16px;
          border-radius: 6px;
          margin-top: 8px;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .footer {
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
          font-size: 13px;
          color: #6b7280;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Nuevo Mensaje de Contacto</h1>
        </div>
        
        <div class="field">
          <div class="field-label">De:</div>
          <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value">
            <a href="mailto:${data.email}" style="color: #ea580c; text-decoration: none;">
              ${data.email}
            </a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Asunto:</div>
          <div class="field-value">${data.subject}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Mensaje:</div>
          <div class="message-box">${data.message}</div>
        </div>
        
        <div class="footer">
          <p>Este mensaje fue enviado desde el formulario de contacto de ncarmona.cl</p>
          <p>Fecha: ${new Date().toLocaleString('es-CL', { 
            timeZone: 'America/Santiago',
            dateStyle: 'full',
            timeStyle: 'short'
          })}</p>
        </div>
      </div>
    </body>
    </html>
  `
}
