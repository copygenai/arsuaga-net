import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const { name, email, message, lang } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Server config error' }, { status: 500 })
    }

    // Send notification to Ignacio
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'arsuaga.net <noreply@mail.copygen.ai>',
        replyTo: email,
        to: 'ignacio@copygen.ai',
        subject: `New message from arsuaga.net: ${name}`,
        html: `
          <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #1a1a1a; margin-bottom: 24px;">New message from arsuaga.net</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-top: 8px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">Sent from arsuaga.net contact form</p>
          </div>
        `,
      }),
    })

    // Send auto-reply
    const isSpanish = lang === 'es'
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ignacio Arsuaga <noreply@mail.copygen.ai>',
        to: email,
        subject: isSpanish ? 'Gracias por tu mensaje' : 'Thanks for your message',
        html: `
          <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #1a1a1a;">${isSpanish ? 'Gracias por escribirme' : 'Thanks for reaching out'}</h2>
            <p style="color: #333; line-height: 1.6;">
              ${isSpanish
                ? `Hola ${name}, he recibido tu mensaje y te responderé lo antes posible.`
                : `Hi ${name}, I received your message and will get back to you as soon as I can.`
              }
            </p>
            <p style="color: #333; line-height: 1.6;">
              ${isSpanish ? 'Un saludo,' : 'Best,'}
              <br>Ignacio Arsuaga
            </p>
            <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">arsuaga.net</p>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
