# 🏆 Prode Mundial FIFA 2026 · COR

Prode interno de COR para el Mundial FIFA 2026 (Canadá · México · Estados Unidos).
48 selecciones, 12 grupos, un solo campeón. *Value your ideas.*

## Identidad visual

Sigue el **COR Visual Identity System** (Nov 2025):

- Base negro/blanco (`#20201F` / `#FFFFFF`), acento de firma amarillo `#FBDE3F`
- Paleta secundaria fría para acentos y data-viz (aqua `#48BCD0`, blue `#2F7EC9`, green `#03CC7A`, navy `#1A2442`)
- Gradiente oficial N1 (aqua → blue, horizontal claro → oscuro) en barra de progreso y títulos
- Tipografía **Poppins** (400/500/600) — única familia de marca
- Logos oficiales en `public/` (`cor-logo-white.png`, `cor-logo-black.png`, `cor-symbol.png`)
- Tokens definidos en `app/globals.css` (`--color-cor-*`)

## Stack

| Paquete | Versión |
|---|---|
| next | 16.2.x (Turbopack) |
| react / react-dom | 19.2.x |
| tailwindcss | 4.x (config en `globals.css`, sin `tailwind.config.js`) |
| motion | 12.x (`import from "motion/react"`) |
| three | 0.184.0 |
| @react-three/fiber | 9.6.1 |
| @react-three/drei | 10.7.7 |
| zustand | 5.0.14 |
| @supabase/ssr | 0.10.3 |

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar con credenciales de Supabase
npm run dev
```

Sin credenciales de Supabase la app funciona en modo demo: las predicciones se
guardan en localStorage (Zustand persist) y el leaderboard muestra datos de ejemplo.

## Supabase

Ejecutar `supabase/schema.sql` en el SQL Editor del Dashboard de Supabase.
Crea las tablas `profiles`, `predictions` y `scores` con RLS completo y
habilita Realtime para el leaderboard.

## Rutas

- `/` — Hero con globo 3D (Three.js) y countdown al 11 de junio de 2026
- `/grupos` — Los 12 grupos con sus 48 equipos
- `/prode/grupos` — Pronósticos de fase de grupos (protegida por middleware)
- `/auth` — Login con magic link
- `/leaderboard` — Top 20 en tiempo real (Supabase Realtime)

## Tests

```bash
npm test
```
