export interface StackItem {
  name: string;
  icon: string;
  color: string;
}

export interface StackCategory {
  title: string;
  highlight?: boolean;
  items: StackItem[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    title: "Lenguajes",
    items: [
      {
        name: "TypeScript",
        color: "#3178c6",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="6" fill="#3178C6"/><path d="M74.5 73.3V78c1.3.7 2.9 1.2 4.6 1.5 1.7.3 3.5.5 5.3.5 1.8 0 3.5-.2 5.1-.5 1.6-.4 3-1 4.2-1.8 1.2-.8 2.1-1.9 2.8-3.2.7-1.3 1-2.9 1-4.8 0-1.4-.2-2.6-.6-3.6-.4-1-.9-2-1.7-2.8-.7-.8-1.6-1.6-2.6-2.2-1-.7-2.2-1.3-3.5-1.9-1-.4-1.8-.8-2.6-1.2-.7-.4-1.4-.8-1.9-1.2-.5-.4-.9-.9-1.1-1.4-.3-.5-.4-1.1-.4-1.8 0-.6.1-1.2.4-1.7.3-.5.6-.9 1.1-1.3.5-.4 1-.6 1.7-.8.6-.2 1.4-.3 2.1-.3.6 0 1.2.1 1.8.2.6.1 1.3.3 1.9.6.6.3 1.2.6 1.8 1 .6.4 1.1.9 1.5 1.4v-4.6c-1-.5-2.2-.9-3.4-1.1-1.2-.2-2.6-.4-4-.4-1.7 0-3.4.2-4.9.6-1.5.4-2.9 1-4 1.8-1.2.8-2.1 1.8-2.7 3-.7 1.2-1 2.7-1 4.4 0 2.2.6 4 1.8 5.5 1.2 1.5 3.1 2.7 5.6 3.7.9.4 1.8.8 2.7 1.1.9.3 1.7.7 2.3 1.1.7.4 1.2.9 1.6 1.4.4.5.6 1.1.6 1.9 0 .6-.1 1.2-.4 1.8-.3.5-.7 1-1.2 1.4-.5.4-1.1.7-1.8.9-.7.2-1.5.3-2.4.3-1.6 0-3.1-.3-4.6-1-1.4-.7-2.7-1.7-3.6-3zm-13.6-19.4H70V50H48v3.9h9.5V79H61V53.9z" fill="white"/></svg>`,
      },
      {
        name: "JavaScript",
        color: "#f7df1e",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" fill="#F7DF1E"/><path d="M116 96.7c0 11.5-6.7 16.8-16.5 16.8-8.6 0-13.6-4.5-16.1-9.9l8.7-5.3c1.7 3 3.2 5.5 6.8 5.5 3.5 0 5.7-1.4 5.7-6.7V60.1h11.4v36.6zm-35.8.7c0 9.5-5.5 15.8-13.6 15.8-7.3 0-11.5-3.8-13.7-8.4l8.7-5.1c1.6 2.9 3.1 5.3 6.7 5.3 3.4 0 5.5-1.7 5.5-8.2V60.1h10.4v37.3z" fill="#333"/></svg>`,
      },
      {
        name: "Python",
        color: "#3776ab",
        icon: `<svg viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg"><path fill="#3776AB" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H55.258S.001 64.486.001 128.268s48.945 55.699 48.945 55.699h29.225v-26.173S76.1 156.865 126.916 156.865c50.816 0 53.081-26.75 53.081-26.75V30.76S191.748.072 126.916.072zm-15.15 22.9a10.91 10.91 0 0110.91 10.91 10.91 10.91 0 01-10.91 10.911 10.91 10.91 0 01-10.911-10.91 10.91 10.91 0 0110.91-10.911z"/><path fill="#FFD43B" d="M129.072 254.928c64.832 0 60.784-28.115 60.784-28.115l-.072-29.128H127.916v-8.745h72.102s55.257-18.502 55.257-82.284-48.945-55.699-48.945-55.699h-29.225v26.173s2.097 27.346-48.719 27.346-53.081-26.75-53.081-26.75v100.142s-1.173 26.75 66.679 26.75zm15.15-22.9a10.91 10.91 0 01-10.91-10.911 10.91 10.91 0 0110.91-10.91 10.91 10.91 0 0110.911 10.91 10.91 10.91 0 01-10.91 10.911z"/></svg>`,
      },
      {
        name: "SQL",
        color: "#e38c00",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a1204"/><text x="64" y="80" font-family="monospace" font-weight="bold" font-size="38" fill="#E38C00" text-anchor="middle">SQL</text></svg>`,
      },
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      {
        name: "React",
        color: "#61dafb",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" stroke-width="5"><ellipse cx="64" cy="64" rx="56" ry="21"/><ellipse cx="64" cy="64" rx="56" ry="21" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="56" ry="21" transform="rotate(120 64 64)"/></g></svg>`,
      },
      {
        name: "Next.js",
        color: "#ffffff",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#000"/><path d="M106.3 99.3L51 24H40v80h9.7V37l50.6 68.2c2-1.9 4-4.1 6-5.9z" fill="white"/><rect x="79" y="24" width="10" height="80" fill="white"/></svg>`,
      },
      {
        name: "Tailwind CSS v4",
        color: "#38bdf8",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#38BDF8" d="M64 16c-18.2 0-29.6 9.1-33.9 27.3 6.8-9.1 14.7-12.5 23.8-10.2 5.2 1.3 8.9 5 12.9 9.2C73 49.2 79.9 56.5 96 56.5c18.2 0 29.6-9.1 33.9-27.3-6.8 9.1-14.7 12.5-23.8 10.2-5.2-1.3-8.9-5-12.9-9.2C86.9 23.3 79.9 16 64 16zm-32 34.2c-18.2 0-29.6 9.1-33.9 27.3C5 68.4 12.9 65 22 67.3c5.2 1.3 8.9 5 12.9 9.2 6.2 6.9 13.1 14.2 29.2 14.2 18.2 0 29.6-9.1 33.9-27.3-6.8 9.1-14.7 12.5-23.8 10.2-5.2-1.3-8.9-5-12.9-9.2C55 57.5 48.1 50.2 32 50.2z"/></svg>`,
      },
      {
        name: "Radix UI",
        color: "#8b5cf6",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0f0a1e"/><rect x="24" y="16" width="40" height="40" rx="4" fill="#8B5CF6"/><circle cx="88" cy="36" r="20" fill="#8B5CF6"/><path d="M64 64v48a24 24 0 0 1-1.04-47.98L64 64z" fill="#8B5CF6"/></svg>`,
      },
    ],
  },
  {
    title: "Backend — Node.js",
    items: [
      {
        name: "Node.js",
        color: "#339933",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#339933" d="M64 4.5L8.6 36.8v64.4L64 133.5l55.4-32.3V36.8L64 4.5zm0 10.8l44.6 26v52L64 119.3 19.4 93.3v-52L64 15.3z"/><path fill="#339933" d="M64 31.7L35.2 48.4v33.2L64 98.3l28.8-16.7V48.4L64 31.7zm0 8.7l20 11.6v23.2L64 86.8 44 75.2V52L64 40.4z"/></svg>`,
      },
      {
        name: "NestJS",
        color: "#e0234e",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#E0234E" d="M74.3 11.1c-1.3-.5-2.6-.6-3.8-.2 2.7 1.6 4 4.5 3.3 7.5L73 21.3c-1.3 5.2-3.8 10.1-7.1 14.3-3.4 4.3-7.4 7.4-11.9 9.4-3.4 1.5-7.1 2.3-10.8 2.3H41c-2.6 0-5.1.7-7.3 2-2 1.3-3.6 3.1-4.6 5.2l-.3.9c-1.6 4.5-.8 9.5 2.1 13.3 2.2 2.7 5.3 4.5 8.7 5l3.4.4c4.1.5 8.3.1 12.2-1.1 2.8-.9 5.5-2.3 7.8-4 0 .1.1.1.1.2-.2.2-.5.4-.7.6-3.2 2.9-5.8 6.4-7.6 10.3-1.5 3.3-2.2 6.8-2.2 10.4v.6c0 4 1.1 7.9 3.2 11.3 2.3 3.7 5.7 6.6 9.7 8.3 2.5 1 5.1 1.5 7.8 1.5 6.6 0 12.9-3 17.1-8.1 3.1-3.7 4.9-8.3 5.1-13.1v-1.6c0-1.1-.1-2.3-.3-3.4.9 1.6 1.7 3.3 2.3 5 1.5 4.4 2 9.1 1.3 13.7-.7 4.5-2.6 8.8-5.4 12.4-4 5-9.7 8.4-16 9.5-.9.2-1.8.3-2.7.3h-1c-5.9 0-11.7-2-16.4-5.7-3.2-2.5-5.8-5.8-7.5-9.5-1.3-2.9-1.9-6-1.9-9.1v-.4c0-4.9 1.5-9.7 4.2-13.7 2-2.9 4.7-5.4 7.8-7.2-.8-.3-1.5-.7-2.2-1.1-3.3-1.8-6.1-4.4-8.1-7.6-2.1-3.2-3.2-6.9-3.2-10.7v-.4c0-3.2.8-6.4 2.2-9.3 1.6-3.2 4-5.9 6.8-7.9 2.5-1.8 5.3-3 8.3-3.6.4-.1.9-.1 1.3-.2h2.2c3.1 0 6.1-.7 8.9-2 2.6-1.2 4.9-3 6.7-5.2 2.1-2.5 3.6-5.5 4.3-8.7l.8-3c.3-1.3.1-2.7-.6-3.8-.7-1.3-1.9-2.2-3.2-2.6z"/></svg>`,
      },
      {
        name: "Express.js",
        color: "#999999",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#999" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.29-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 4.86-4.84 9.2-3.51L97.5 61.84l29.17 36.6zM1.33 61.84c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.98 52 64 63c.03 10.35-2.99 21-10.32 27.54-13.38 12.03-34.35 10.72-44.61-2.8-3.96-5.1-5.51-11.5-7.74-17.9zm40.94 5.42c6.4-.06 11.3-5.1 11.21-11.41-.08-6.06-5.02-10.92-11.14-10.97-6.24-.05-11.33 5.1-11.33 11.44 0 6.37 5.01 11.43 11.26 11.94z"/></svg>`,
      },
      {
        name: "Prisma ORM",
        color: "#0C344B",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0C344B" d="M116.5 96.9L74.2 11.5c-1.4-2.8-3.9-4.5-6.7-4.5s-5.3 1.7-6.7 4.5L11.5 96.9c-1.3 2.6-1.1 5.6.4 8 1.6 2.4 4.2 3.8 7 3.8h90.2c2.8 0 5.4-1.4 7-3.8 1.5-2.4 1.7-5.4.4-8zm-49-60.6l23.8 47.5H45.1l22.4-47.5z"/></svg>`,
      },
      {
        name: "BullMQ",
        color: "#e53e3e",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a0505"/><path fill="#E53E3E" d="M64 24 C44 24 28 36 28 52 C28 60 32 64 36 68 C28 70 20 76 20 86 C20 98 34 106 64 106 C94 106 108 98 108 86 C108 76 100 70 92 68 C96 64 100 60 100 52 C100 36 84 24 64 24Z"/><ellipse cx="64" cy="52" rx="20" ry="14" fill="#1a0505"/><circle cx="52" cy="48" r="4" fill="#E53E3E"/><circle cx="76" cy="48" r="4" fill="#E53E3E"/><path d="M30 38 Q24 28 32 22" stroke="#E53E3E" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M98 38 Q104 28 96 22" stroke="#E53E3E" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      },
      {
        name: "WebSockets",
        color: "#8b5cf6",
        icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="12" fill="#1a1a2e"/><path d="M24 64c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40S24 86.1 24 64z" stroke="#8b5cf6" stroke-width="8" fill="none"/><path d="M44 64l20-20 20 20-20 20-20-20z" fill="#8b5cf6"/></svg>`,
      },
      {
        name: "Socket.io",
        color: "#ffffff",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#010101"/><path fill="white" d="M68.5 28.7L34.2 68.3h27.1L55.5 99.3l34.3-39.6H62.7z"/></svg>`,
      },
    ],
  },
  {
    title: "Backend — Python",
    items: [
      {
        name: "Python",
        color: "#3776ab",
        icon: `<svg viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg"><path fill="#3776AB" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H55.258S.001 64.486.001 128.268s48.945 55.699 48.945 55.699h29.225v-26.173S76.1 156.865 126.916 156.865c50.816 0 53.081-26.75 53.081-26.75V30.76S191.748.072 126.916.072zm-15.15 22.9a10.91 10.91 0 0110.91 10.91 10.91 10.91 0 01-10.91 10.911 10.91 10.91 0 01-10.911-10.91 10.91 10.91 0 0110.91-10.911z"/><path fill="#FFD43B" d="M129.072 254.928c64.832 0 60.784-28.115 60.784-28.115l-.072-29.128H127.916v-8.745h72.102s55.257-18.502 55.257-82.284-48.945-55.699-48.945-55.699h-29.225v26.173s2.097 27.346-48.719 27.346-53.081-26.75-53.081-26.75v100.142s-1.173 26.75 66.679 26.75zm15.15-22.9a10.91 10.91 0 01-10.91-10.911 10.91 10.91 0 0110.91-10.91 10.91 10.91 0 0110.911 10.91 10.91 10.91 0 01-10.91 10.911z"/></svg>`,
      },
      {
        name: "FastAPI",
        color: "#009688",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#009688"/><path fill="white" d="M44 84L68 44H52L84 12l-12 40h18L44 84z"/></svg>`,
      },
      {
        name: "SQLAlchemy",
        color: "#c72e29",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a1a1a"/><path fill="#C72E29" d="M64 28c-18 0-32 10-32 22 0 8 8 15 20 18v24c0 4 5.4 8 12 8s12-4 12-8V68c12-3 20-10 20-18 0-12-14-22-32-22z"/></svg>`,
      },
      {
        name: "Alembic",
        color: "#bdbb44",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#2d2a1e"/><path fill="#BDBB44" d="M64 24L36 52h16v40h24V52h16L64 24z"/></svg>`,
      },
      {
        name: "Celery",
        color: "#378953",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1e3d2a"/><circle cx="64" cy="64" r="30" fill="#378953"/><path stroke="#BCE0C8" stroke-width="6" stroke-linecap="round" d="M64 42v44M42 64h44"/></svg>`,
      },
      {
        name: "Pydantic",
        color: "#e92063",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a0a12"/><rect x="32" y="36" width="64" height="56" rx="6" fill="none" stroke="#E92063" stroke-width="6"/><path fill="#E92063" d="M48 52h32v8H48zm0 20h20v8H48z"/></svg>`,
      },
      {
        name: "RabbitMQ",
        color: "#ff6600",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a0f08"/><ellipse cx="64" cy="72" rx="36" ry="28" fill="#FF6600"/><circle cx="48" cy="48" r="10" fill="#FF6600"/><circle cx="80" cy="48" r="10" fill="#FF6600"/><path fill="#FF6600" d="M56 36c4-12 12-20 12-20s8 8 12 20"/></svg>`,
      },
    ],
  },
  {
    title: "Databases & Cache",
    items: [
      {
        name: "PostgreSQL",
        color: "#336791",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0f172a"/><ellipse cx="72" cy="68" rx="28" ry="24" fill="#336791"/><ellipse cx="80" cy="44" rx="18" ry="16" fill="#336791"/><ellipse cx="94" cy="38" rx="10" ry="13" fill="#4a90c4"/><path d="M64 58 Q52 68 54 84 Q56 90 60 87 Q58 75 68 64Z" fill="#336791"/><circle cx="84" cy="40" r="3" fill="white"/><path d="M66 72 Q72 78 78 72" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
      },
      {
        name: "Redis",
        color: "#d82c20",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S11.2 98 4.6 94.5c-3.3-1.8-3.4-3-.1-4.7l49-21.9c6.8-3 9.4-3.1 16.1-.1s44.7 19 47.8 21.3c2.9 2.2 1.9 3.2-5.6 4z"/><path fill="#D82C20" d="M121.8 80.3c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S11.2 85.2 4.6 81.7c-3.3-1.8-3.4-3-.1-4.7l49-21.9c6.8-3 9.4-3.1 16.1-.1s44.7 19 47.8 21.3c2.9 2.2 1.9 3.2-5.6 4z"/><path fill="#fff" d="M79.6 56.8L65.5 62.3l-15.7-5.2 14.1-5.6 15.7 5.3zm-17.9 14.8l-4.1-1.8 17.3-6.8 4.1 1.8-17.3 6.8z"/></svg>`,
      },
      {
        name: "Neon",
        color: "#3ecf8e",
        icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#000"/><path d="M24 96V32l72 64V32" stroke="#00E5A0" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        name: "MongoDB",
        color: "#47a248",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#599636" d="M90.491 57.282c-1.819-8.037-6.168-15.053-10.391-22.168C76.2 29.01 71.862 22.619 70.307 15c-.436 2.616-.763 4.384-1.854 6.783-3.608 7.938-9.788 13.613-15.434 19.777-9.337 10.073-16.645 21.423-17.35 35.512-.013.262-.024.522-.034.786 0 .025-.007.049-.007.073C35.579 89.481 48.57 104.61 66.01 108c.155.03.313.056.468.084l.518.092c1.562.236 3.149.35 4.758.35l2.037-.107c.244-.02.488-.04.73-.066C92.122 106.182 105 91.385 105 73.687c0-5.978-1.221-11.665-3.587-16.844l-10.922.439z"/><path fill="#6CAC48" d="M64.674 115.896c-.312-3.292-.94-6.575-2.027-9.728-.01-.03-.02-.06-.032-.092l-.015-.044c-1.178-3.286-2.901-6.34-4.731-9.342-1.806-2.966-3.679-5.904-5.243-8.993-.748-1.475-1.43-2.98-1.988-4.531-.64-1.765-1.07-3.6-1.188-5.476l-.019-.451h-3.32c.23 3.877.67 7.749 1.346 11.58.665 3.776 1.652 7.514 2.853 11.168.587 1.78 1.218 3.545 1.882 5.292.662 1.741 1.357 3.467 2.067 5.188.703 1.71 1.42 3.419 2.133 5.128.383.919.76 1.841 1.124 2.764 2.068-.554 4.083-1.282 6.025-2.175l.133-.288z"/><path fill="#C2BFBF" d="M70 107.499V21.5c-.574 0-1.128.04-1.678.107-1.007 5.826-3.624 10.914-6.77 15.749C56.044 45.798 48.1 53.61 45.015 63.923c-.802 2.69-1.21 5.499-1.21 8.331 0 14.674 10.405 27.066 24.596 29.837.196.038.393.074.59.108l1.01.163V107.499z"/></svg>`,
      },
      {
        name: "Firebase",
        color: "#ffca28",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FFA000" d="M20 92l22-70 22 28-44 42z"/><path fill="#F57C00" d="M84 54L64 20 42 54l22 38 20-38z"/><path fill="#FFCA28" d="M20 92l44-16 22-22-44 38-22 0z"/></svg>`,
      },
    ],
  },
  {
    title: "Testing & QA",
    highlight: true,
    items: [
      {
        name: "Vitest",
        color: "#6e9f18",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#6E9F18" d="M64 12L10 104h30l24-44 24 44h30L64 12z"/><path fill="#ACD268" d="M64 12L42 52h44L64 12z" opacity=".8"/></svg>`,
      },
      {
        name: "Playwright",
        color: "#2ead33",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="56" fill="#2EAD33" opacity=".2"/><path fill="#2EAD33" d="M46 36v56l46-28-46-28z"/></svg>`,
      },
      {
        name: "Testing Library",
        color: "#e33332",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="56" fill="#E33332" opacity=".15" stroke="#E33332" stroke-width="4"/><path fill="#E33332" d="M64 30c-7.7 0-14 6.3-14 14 0 5.3 2.9 9.9 7.2 12.4C43.8 59.7 36 68.9 36 80h8c0-11 9-20 20-20s20 9 20 20h8c0-11.1-7.8-20.3-21.2-23.6C75.1 53.9 78 49.3 78 44c0-7.7-6.3-14-14-14z"/></svg>`,
      },
      {
        name: "MSW",
        color: "#ff6a33",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a0a00"/><circle cx="64" cy="64" r="40" fill="none" stroke="#FF6A33" stroke-width="6"/><line x1="64" y1="24" x2="64" y2="104" stroke="#FF6A33" stroke-width="6" stroke-linecap="round"/><line x1="24" y1="64" x2="104" y2="64" stroke="#FF6A33" stroke-width="6" stroke-linecap="round"/><line x1="35" y1="35" x2="93" y2="93" stroke="#FF6A33" stroke-width="6" stroke-linecap="round"/><line x1="93" y1="35" x2="35" y2="93" stroke="#FF6A33" stroke-width="6" stroke-linecap="round"/></svg>`,
      },
      {
        name: "Pytest",
        color: "#0a9edc",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0a1628"/><path fill="#0A9EDC" d="M64 28L36 52h16v48h24V52h16L64 28z"/><path fill="#0fe874" d="M32 96h64v8H32z"/></svg>`,
      },
      {
        name: "Factory Boy",
        color: "#2a6ebb",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0f172a"/><rect x="36" y="40" width="56" height="48" rx="4" fill="none" stroke="#2A6EBB" stroke-width="5"/><path fill="#2A6EBB" d="M44 56h40v8H44zm0 16h24v8H44z"/></svg>`,
      },
      {
        name: "k6",
        color: "#7d64ff",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#7D64FF"/><path fill="white" d="M24 96V32h16v28l20-28h20L56 64l28 32H64L44 72v24H24z"/></svg>`,
      },
      {
        name: "Newman / Postman",
        color: "#ef5b25",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="56" fill="#EF5B25"/><path fill="white" d="M40 40h16l24 32V40h16v48H80L56 56v32H40V40z"/></svg>`,
      },
      {
        name: "mypy",
        color: "#2d72b9",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0f172a"/><rect x="20" y="36" width="88" height="56" rx="8" fill="none" stroke="#2D72B9" stroke-width="5"/><text x="64" y="76" font-family="monospace" font-weight="bold" font-size="32" fill="#2D72B9" text-anchor="middle">mypy</text></svg>`,
      },
      {
        name: "Ruff",
        color: "#d7ff64",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#000"/><path fill="#D7FF64" d="M96 24 L56 44 L40 36 L44 56 L24 64 L44 68 L36 96 L60 80 L64 104 L76 76 L100 84 L88 60 L108 48 L84 48 Z"/></svg>`,
      },
      {
        name: "Bandit",
        color: "#ffc107",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#1a1204"/><circle cx="64" cy="52" r="20" fill="none" stroke="#FFC107" stroke-width="6"/><path fill="#FFC107" d="M44 72h40l-6 28H50l-6-28z"/></svg>`,
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        name: "Git",
        color: "#f05032",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F05032" d="M124.74 57.6L70.4 3.26a11.14 11.14 0 00-15.75 0l-11.1 11.1 14.1 14.1a13.24 13.24 0 0116.76 16.89l13.58 13.58a13.26 13.26 0 1112.56 21.51 13.26 13.26 0 01-12.23-18.24L75.14 48.58v34.15a13.26 13.26 0 11-10.88-.38V47.41a13.24 13.24 0 01-7.19-17.38L43.03 16 3.26 55.78a11.14 11.14 0 000 15.75L57.6 125.88a11.14 11.14 0 0015.75 0l51.39-51.53a11.14 11.14 0 000-15.75z"/></svg>`,
      },
      {
        name: "GitHub",
        color: "#e0e0e0",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#e0e0e0" d="M64 5.1C32 5.1 5.9 31.2 5.9 63.2c0 25.6 16.6 47.4 39.6 55.1 2.9.5 4-1.3 4-2.8V104c-16.1 3.5-19.5-6.9-19.5-6.9-2.6-6.7-6.4-8.5-6.4-8.5-5.3-3.6.4-3.5.4-3.5 5.8.4 8.9 6 8.9 6 5.2 8.9 13.6 6.3 16.9 4.8.5-3.8 2-6.3 3.7-7.7-12.9-1.5-26.4-6.4-26.4-28.7 0-6.3 2.3-11.5 6-15.5-.6-1.5-2.6-7.4.6-15.3 0 0 4.9-1.6 15.9 5.9 4.6-1.3 9.5-1.9 14.4-1.9 4.9 0 9.8.7 14.4 1.9 11-7.5 15.9-5.9 15.9-5.9 3.2 8 1.2 13.8.6 15.3 3.7 4 6 9.2 6 15.5 0 22.3-13.6 27.2-26.5 28.6 2.1 1.8 3.9 5.3 3.9 10.7v15.9c0 1.5 1 3.3 4 2.8C105.5 110.6 122.1 88.8 122.1 63.2 122.1 31.2 96 5.1 64 5.1z"/></svg>`,
      },
      {
        name: "Husky",
        color: "#cb3837",
        icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="12" fill="#1a0a0a"/><path d="M24 96V60l16-28h48l16 28v36H24z" stroke="#CB3837" stroke-width="6" fill="none"/><path d="M44 96V76h40v20" stroke="#CB3837" stroke-width="6" stroke-linecap="round"/><path d="M64 48v20M52 56l12-8 12 8" stroke="#CB3837" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        name: "GitHub Actions",
        color: "#2088ff",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0f172a"/><circle cx="64" cy="28" r="12" fill="#2088FF"/><circle cx="28" cy="84" r="12" fill="#2088FF"/><circle cx="100" cy="84" r="12" fill="#2088FF"/><line x1="56" y1="38" x2="34" y2="72" stroke="#2088FF" stroke-width="4" stroke-linecap="round"/><line x1="72" y1="38" x2="94" y2="72" stroke="#2088FF" stroke-width="4" stroke-linecap="round"/><line x1="40" y1="84" x2="88" y2="84" stroke="#2088FF" stroke-width="4" stroke-linecap="round"/></svg>`,
      },
      {
        name: "Docker",
        color: "#2496ed",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#2496ED" d="M124.8 52.1c-2-1.4-6.6-1.9-10.2-.9-.4-3.9-2.9-7.3-7.2-10.3l-2.5-1.6-1.7 2.5c-2.1 3.1-2.8 8.3-2.5 12.3-1.8.9-3.5 2.3-4.8 3.9H4.3c0 .3-.1.6-.1.9 0 6 1.1 11.8 3.4 17.2 2.5 5.9 6.3 10.2 11.3 13 5.5 3 14.5 4.7 24.8 4.7 4.6 0 9.3-.4 13.8-1.3 6.3-1.2 12.4-3.5 17.6-7 4.5-3 8.4-7 11.7-12h1.1c6.8 0 11-2.8 13.3-5.2 1.5-1.6 2.6-3.5 3.3-5.4l.5-1.6-1.6-1zm-87.5-8.7h11.5v11H37.3V43.4zm14.7 0h11.5v11H52V43.4zm14.8 0h11.5v11H66.8V43.4zM37.3 30.1h11.5v11H37.3v-11zm14.7 0h11.5v11H52v-11zm14.8 0h11.5v11H66.8v-11zm14.8 13.3h11.5v11H81.6V43.4z"/></svg>`,
      },
      {
        name: "Kubernetes",
        color: "#326ce5",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0a1628"/><path fill="#326CE5" d="M64 20l36 18v36L64 92 28 74V38l36-18zm0 12L44 43v26l20 10 20-10V43L64 32zm0 16l12 6v12l-12 6-12-6V54l12-6z"/></svg>`,
      },
      {
        name: "AWS EC2",
        color: "#ff9900",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FF9900" d="M64 20L24 38v36l40 18 40-18V38L64 20zm0 10l28 14v28L64 86 36 72V44l28-14z"/><rect x="48" y="48" width="32" height="28" rx="3" fill="#232f3e"/></svg>`,
      },
      {
        name: "Amazon S3",
        color: "#ff9900",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FF9900" d="M64 24L28 40v16l36 16 36-16V40L64 24zm0 8l24 12v8L64 68 40 52v-8l24-12z"/><path fill="#569A31" d="M32 60v28l32 16 32-16V60L64 76 32 60z"/></svg>`,
      },
      {
        name: "Vercel",
        color: "#f0f0f0",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#f0f0f0" d="M64 10L10 118h108L64 10z"/></svg>`,
      },
      {
        name: "Cloudflare",
        color: "#f48120",
        icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#f6821f" d="M83.2 88.2l3.3-11.5c.4-1.3-.6-2.6-2-2.6H21.4c-1.1 0-2 .7-2.3 1.7l-3.1 11.5c-.4 1.3.6 2.6 2 2.6h62.9c1.1 0 2-.7 2.3-1.7z"/><path fill="#FBAD41" d="M93.6 62.5l4.4-15.3c.4-1.3-.5-2.7-1.9-2.7H28.4c-1.1 0-2 .7-2.4 1.7l-4.3 15.3c-.4 1.3.5 2.7 1.9 2.7h67.6c1.1 0 2-.7 2.4-1.7z"/><path fill="#fff" d="M68.4 40c2-7.1 9.4-11.9 16.9-10.7 7 1.1 11.8 7.3 11.1 14.4-.3 2.9-1.5 5.5-3.4 7.5 6.4.5 11.3 6 11 12.5-.3 6.7-5.9 11.8-12.6 11.8H42.5c-7.4 0-13.4-6-13.4-13.4 0-7.1 5.5-12.9 12.5-13.3 1.2-5.3 5.9-9.3 11.5-9.3 3.8 0 7.2 1.7 9.5 4.5l5.8-4z" opacity=".3"/></svg>`,
      },
      {
        name: "Railway",
        color: "#8b5cf6",
        icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0B0D0E"/><path d="M20 96l12-64h64l12 64H20zM36 64h56M28 80h72" stroke="#8B5CF6" stroke-width="6" stroke-linecap="round"/></svg>`,
      },
    ],
  },
];
