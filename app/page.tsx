import Image from "next/image";
import Link from "next/link";
import { WorldGlobe } from "@/components/globe/WorldGlobeLazy";
import { Countdown, type Fixture } from "@/components/ui/Countdown";
import { MATCHES_BY_DATE } from "@/lib/data/matches";
import { getTeamById } from "@/lib/data/teams";

const FIXTURES: Fixture[] = MATCHES_BY_DATE.map((match) => {
  const home = match.homeTeamId ? getTeamById(match.homeTeamId) : null;
  const away = match.awayTeamId ? getTeamById(match.awayTeamId) : null;
  return {
    date: match.date,
    homeName: home?.name ?? match.homeSlot ?? "Por definir",
    homeFlag: home?.flag ?? "",
    awayName: away?.name ?? match.awaySlot ?? "Por definir",
    awayFlag: away?.flag ?? "",
    venue: match.venue,
    city: match.city,
  };
});

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-57px)] overflow-hidden">
      {/* Globo de fondo */}
      <div className="absolute inset-0">
        <WorldGlobe />
      </div>

      {/* Contenido del hero */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100vh-57px)] max-w-5xl flex-col items-center justify-center gap-10 px-4 py-16 text-center">
        <div className="space-y-5">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/cor-logo-white.png"
              alt="COR"
              width={110}
              height={37}
              priority
              className="h-9 w-auto"
            />
            <span className="rounded-full border border-cor-yellow/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cor-yellow">
              Prode interno
            </span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Prode <span className="text-cor-yellow">Mundial</span>
            <br />
            <span className="bg-gradient-to-r from-cor-aqua to-cor-blue bg-clip-text text-transparent">
              FIFA 2026
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-white/70">
            48 selecciones, 12 grupos, un solo campeón. Pronosticá cada partido
            y competí con todo el equipo de COR.
          </p>
        </div>

        <Countdown fixtures={FIXTURES} />

        <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row">
          <Link
            href="/prode/grupos"
            className="rounded-xl bg-cor-yellow px-8 py-3 text-lg font-semibold text-cor-black transition hover:scale-105 hover:bg-cor-yellow/85"
          >
            Hacer mi prode ⚽
          </Link>
          <Link
            href="/grupos"
            className="rounded-xl border border-white/25 bg-cor-navy/30 px-8 py-3 text-lg font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-cor-navy/50"
          >
            Ver grupos
          </Link>
        </div>
      </div>
    </div>
  );
}
