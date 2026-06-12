import type { Metadata } from "next";
import { GroupTable } from "@/components/groups/GroupTable";
import { GROUPS } from "@/lib/data/teams";

export const metadata: Metadata = {
  title: "Grupos | Prode Mundial 2026 · COR",
  description: "Los 12 grupos del Mundial FIFA 2026 con sus 48 selecciones.",
};

export default function GruposPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Fase de <span className="text-cor-action">Grupos</span>
        </h1>
        <p className="mt-3 text-cor-muted">
          12 grupos · 48 selecciones · Los dos primeros de cada grupo y los 8
          mejores terceros avanzan a 32avos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GROUPS.map((group) => (
          <GroupTable key={group} group={group} />
        ))}
      </div>
    </div>
  );
}
