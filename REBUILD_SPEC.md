# arsuaga.net Rebuild Spec

## Overview
Rebuild Ignacio Arsuaga's personal website. Complete redesign while keeping the same tech stack (Next.js + Tailwind + Vercel). The site must be a single page in two languages (ES/EN).

## Tech Stack
- Next.js (App Router)
- Tailwind CSS 
- TypeScript
- Resend for contact form emails
- Deploy to Vercel (already configured)

## Design Direction
Modern, clean, minimal. Dark background with warm accents. Think: rauchg.com meets franciscopolo.com. Professional but personal. NOT corporate. NOT flashy.

- Dark background: #0F172A (slate-900) or similar deep navy
- Accent color: #D4A853 (warm gold)  
- Text: white/warm white for headings, gray-300 for body
- Font: Inter (already loaded)
- Smooth scroll between sections
- Subtle animations (fade-in on scroll)
- Mobile-first, fully responsive

## Sections (single page, scroll)

### 1. Hero
- Full viewport height
- Large headline: "Ignacio Arsuaga" 
- Subtitle: "Founder. Entrepreneur. Activist." (ES: "Fundador. Emprendedor. Activista.")
- Photo on the right (use existing /public/ignacio-arsuaga.jpg)
- Subtle scroll indicator at bottom
- Language toggle (ES/EN) in top right corner

### 2. About / Bio
- NEW BIO — rewritten to sound personal, not like a CV:

**English version:**
"I believe ordinary people, when organized, can change the world. That conviction has driven everything I have built.

In 2001, I founded Hazte Oír to give citizens a voice in defense of life, family, and freedom. What started as a small civic project grew to over 600,000 engaged supporters in Spain.

In 2013, I took that model global and launched CitizenGO. Today it operates across 50 countries with more than 19 million supporters and a team of 120 people. Thousands of petition campaigns delivered to governments, parliaments, and international institutions across five continents.

Now I am building two new ventures. Copygen.ai is a startup factory where lean teams work alongside AI agents around the clock. And Civon is the first all in one mobilization and fundraising platform built for conservative and values aligned organizations. The infrastructure our movements need does not exist yet. We are building it.

I am a lawyer by training (Universidad Pontificia Comillas, ICADE; Fordham Law School, New York). I live in Madrid with my wife and five sons."

**Spanish version:**
"Creo que las personas corrientes, cuando se organizan, pueden cambiar el mundo. Esa convicción ha impulsado todo lo que he construido.

En 2001 fundé Hazte Oír para dar voz a los ciudadanos en defensa de la vida, la familia y la libertad. Lo que empezó como un pequeño proyecto cívico creció hasta superar los 600.000 seguidores activos en España.

En 2013 llevé ese modelo al mundo y lancé CitizenGO. Hoy opera en más de 50 países con más de 19 millones de seguidores y un equipo de 120 personas. Miles de campañas de peticiones entregadas a gobiernos, parlamentos e instituciones internacionales en los cinco continentes.

Ahora estoy construyendo dos nuevos proyectos. Copygen.ai es una fábrica de startups donde equipos pequeños trabajan junto a agentes de IA las 24 horas del día. Y Civon es la primera plataforma integral de movilización y recaudación de fondos diseñada para organizaciones conservadoras y alineadas con valores. La infraestructura que nuestros movimientos necesitan aún no existe. La estamos construyendo.

Soy abogado de formación (Universidad Pontificia Comillas, ICADE; Fordham Law School, Nueva York). Vivo en Madrid con mi mujer y mis cinco hijos."

### 3. Stats Bar
Horizontal bar with key numbers. Subtle animation counting up on scroll:
- 19M+ supporters (ES: seguidores)
- 50+ countries (ES: países)
- 120 team members (ES: personas en el equipo)
- 25 years (ES: años)

### 4. Projects / Ventures
Three cards side by side (stack on mobile):

**CitizenGO**
- Description: "Global civic petition platform. 19M+ supporters across 50 countries."
- ES: "Plataforma global de peticiones cívicas. Más de 19M de seguidores en 50 países."
- Link: https://citizengo.org
- Icon or subtle branding element

**Copygen.ai**  
- Description: "Startup factory. Lean teams powered by AI agents working 24/7."
- ES: "Fábrica de startups. Equipos lean potenciados por agentes de IA trabajando 24/7."
- Link: https://copygen.ai

**Civon**
- Description: "All in one mobilization and fundraising platform for values aligned organizations."
- ES: "Plataforma integral de movilización y recaudación para organizaciones alineadas con valores."
- Link: https://civon.org

### 5. Contact Form
- Simple form: Name, Email, Message
- Submit sends email via Resend API to ignacio@copygen.ai
- Auto-responder email to the sender: "Thanks for reaching out. I'll get back to you soon."
- Success state: "Message sent. Thank you!"
- Error state: "Something went wrong. Please try again or email me directly."

### 6. Footer
- Social links: Twitter/X (@iarsuaga), LinkedIn
- "© 2026 Ignacio Arsuaga"
- Small Civon and CitizenGO logos or text links

## i18n Implementation
- Use next-intl or a simple context-based approach
- Default language: ES (Spanish)
- Toggle in header: ES | EN
- URL structure: / (Spanish), /en (English)
- Keep the same structure as before

## Contact Form API Route
Create /app/api/contact/route.ts:
- Validate inputs (name, email, message required)
- Send email via Resend:
  - To: ignacio@copygen.ai
  - From: website@copygen.ai (or noreply@copygen.ai)
  - Subject: "New message from arsuaga.net: [name]"
  - Body: formatted HTML with name, email, message
- Send auto-reply to sender:
  - From: ignacio@copygen.ai (or noreply@copygen.ai)  
  - Subject: "Thanks for your message" / "Gracias por tu mensaje"
  - Body: brief acknowledgment

## Environment Variables Needed
- RESEND_API_KEY (for contact form)

## Important Notes
- Keep the existing /public/ignacio-arsuaga.jpg photo
- Keep existing favicon files
- The site is already deployed on Vercel project prj_1xEQV6ZxcB5QB9LqcowOkVsHT653
- Domain arsuaga.net is configured in Cloudflare
- DO NOT change git remote or Vercel config
- After building, commit and push to main. Vercel auto-deploys.
- No hyphens in any copy text
