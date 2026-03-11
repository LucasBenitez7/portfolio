# lsbstack.com — Portfolio

Portfolio personal de Lucas Benítez, Full Stack Developer.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion**

## Setup local

```bash
pnpm install
pnpm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Subí este repo a GitHub: `github.com/LucasBenitez7/portfolio`
2. Importá el repo en [vercel.com](https://vercel.com)
3. En el dashboard de Vercel → Settings → Domains → agregá `lsbstack.com`
4. En Cloudflare (donde tenés el dominio): actualizá los nameservers a los de Vercel o agregá los registros DNS que te indica Vercel

No hay variables de entorno requeridas para el deploy básico.

## Estructura

```
app/
  globals.css     # Estilos globales, variables CSS, animaciones
  layout.tsx      # HTML shell, metadata SEO, fuentes Google
  page.tsx        # Toda la página (Hero, Projects, Stack, About, Contact)
public/
  photo.jpg       # Tu foto
  icon.svg        # Favicon
```
