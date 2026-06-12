"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/prode/grupos", label: "Fase de grupos" },
  { href: "/prode/eliminatorias", label: "Eliminatorias" },
] as const;

export function ProdeNav() {
  const pathname = usePathname();

  return (
    <div className="mb-8 flex justify-center gap-2">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              isActive
                ? "bg-cor-action text-cor-inverse"
                : "bg-cor-surface text-cor-muted hover:bg-cor-surface-alt hover:text-cor-heading"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
