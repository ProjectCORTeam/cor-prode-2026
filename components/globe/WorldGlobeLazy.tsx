"use client";

import dynamic from "next/dynamic";

// Three.js no soporta SSR: se importa dinámicamente solo en el cliente.
export const WorldGlobe = dynamic(
  () => import("@/components/globe/WorldGlobe").then((m) => m.WorldGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <span className="animate-pulse text-cor-lavender/30">Cargando globo…</span>
      </div>
    ),
  },
);
