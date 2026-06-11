"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Match } from "@/lib/data/matches";
import { getTeamById } from "@/lib/data/teams";
import { usePredictionsStore } from "@/lib/store/predictions";

function ScoreInput({
  value,
  onChange,
  teamName,
}: {
  value: number;
  onChange: (v: number) => void;
  teamName: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        aria-label={`Sumar gol a ${teamName}`}
        onClick={() => onChange(Math.min(20, value + 1))}
        className="flex h-7 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition hover:bg-cor-aqua/30 hover:text-white"
      >
        ▲
      </button>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="text-3xl font-semibold tabular-nums text-cor-yellow"
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <button
        type="button"
        aria-label={`Restar gol a ${teamName}`}
        onClick={() => onChange(Math.max(0, value - 1))}
        className="flex h-7 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition hover:bg-cor-aqua/30 hover:text-white"
      >
        ▼
      </button>
    </div>
  );
}

export function MatchPredictionCard({ match }: { match: Match }) {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);

  const saved = usePredictionsStore((s) => s.predictions[match.id]);
  const setPrediction = usePredictionsStore((s) => s.setPrediction);

  // El estado local solo guarda la edición en curso; si es null se muestra
  // lo persistido en el store (derivado, sin efectos de sincronización).
  const [draft, setDraft] = useState<{ home: number; away: number } | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  if (!home || !away) return null;

  const homeScore = draft?.home ?? saved?.homeScore ?? 0;
  const awayScore = draft?.away ?? saved?.awayScore ?? 0;

  const isDirty = !saved || saved.homeScore !== homeScore || saved.awayScore !== awayScore;

  const setHomeScore = (v: number) => setDraft({ home: v, away: awayScore });
  const setAwayScore = (v: number) => setDraft({ home: homeScore, away: v });

  const handleSave = () => {
    setPrediction(match.id, homeScore, awayScore);
    setDraft(null);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-cor-navy/25 p-5 backdrop-blur"
    >
      <p className="mb-4 text-center text-xs text-white/50">
        {format(new Date(match.date), "EEEE d 'de' MMMM, HH:mm", { locale: es })} ·{" "}
        <span className="text-white/70">{match.venue}</span>, {match.city}
      </p>

      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-1 flex-col items-center gap-1">
          <span className="text-4xl">{home.flag}</span>
          <span className="text-center text-sm font-semibold">{home.name}</span>
        </div>

        <ScoreInput value={homeScore} onChange={setHomeScore} teamName={home.name} />
        <span className="text-xl text-white/30">–</span>
        <ScoreInput value={awayScore} onChange={setAwayScore} teamName={away.name} />

        <div className="flex flex-1 flex-col items-center gap-1">
          <span className="text-4xl">{away.flag}</span>
          <span className="text-center text-sm font-semibold">{away.name}</span>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {justSaved ? (
            <motion.span
              key="saved"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="flex h-10 items-center gap-2 rounded-xl bg-cor-green/15 px-6 font-semibold text-cor-green"
            >
              ✓ Guardado
            </motion.span>
          ) : (
            <motion.button
              key="save"
              type="button"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              disabled={!isDirty}
              className="h-10 rounded-xl bg-cor-yellow px-6 font-semibold text-cor-black transition hover:bg-cor-yellow/85 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40"
            >
              {saved && !isDirty ? "✓ Guardado" : "Guardar pronóstico"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
