import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY

  try {
    // Send to Ignacio
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'arsuaga.net <noreply@arsuaga.net>',
        to: ['ignacio@copygen.ai'],
        subject: `Nuevo mensaje de ${name} — arsuaga.net`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0f1e; color: #e8eaf0;">
            <h2 style="color: #d4a843; margin-bottom: 24px;">Nuevo mensaje desde arsuaga.net</h2>
            <p><strong style="color: #d4a843;">Nombre:</strong> ${name}</p>
            <p><strong style="color: #d4a843;">Email:</strong> ${email}</p>
            <p><strong style="color: #d4a843;">Mensaje:</strong></p>
            <p style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    })

    // Autoresponder to sender
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ignacio Arsuaga <noreply@arsuaga.net>',
        to: [email],
        subject: 'Gracias por escribirme / Thanks for reaching out',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0f1e; color: #e8eaf0;">
            <h2 style="color: #d4a843;">Gracias, ${name}.</h2>
            <p style="color: rgba(232,234,240,0.7); line-height: 1.7;">
              He recibido tu mensaje y te responderé en cuanto pueda.
            </p>
            <p style="color: rgba(232,234,240,0.5); line-height: 1.7;">
              Thank you for your message. I will get back to you as soon as I can.
            </p>
            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 32px 0;">
            <p style="color: rgba(232,234,240,0.3); font-size: 12px;">
              Ignacio Arsuaga · <a href="https://arsuaga.net" style="color: #d4a843;">arsuaga.net</a>
            </p>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
