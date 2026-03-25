# lsbstack.com — Portfolio

Portfolio personal de Lucas Benítez, Full Stack Developer.

**[lsbstack.com](https://lsbstack.com)**

-----

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion**

-----

## Setup local

```bash
pnpm install
pnpm run dev
```

Abre http://localhost:3000

No hay variables de entorno requeridas.

-----

## Estructura

```
app/
  globals.css              # Estilos globales y variables CSS
  layout.tsx               # HTML shell, metadata SEO, fuentes
  page.tsx                 # Entrada principal
  components/
    sections/              # Hero, About, Projects, Stack, Contact
    layout/                # Nav, Footer
  data/
    projects/              # Datos y tipos de proyectos
    stack/                 # Categorías y tecnologías del stack
  hooks/                   # useReveal, useCounter, useTypewriter
```

-----

## Proyectos incluidos

- **Acme Commerce** — [shop.lsbstack.com](https://shop.lsbstack.com)
- **BookingAPI** — [booking.lsbstack.com/docs](https://booking.lsbstack.com/docs)
- **TicketMaster API** — [ticket.lsbstack.com/api/docs](https://ticket.lsbstack.com/api/docs)