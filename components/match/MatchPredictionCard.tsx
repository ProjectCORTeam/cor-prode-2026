"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Match } from "@/lib/data/matches";
import { isMatchPredictable } from "@/lib/data/matches";
import { getTeamById } from "@/lib/data/teams";
import { usePredictionsStore } from "@/lib/store/predictions";

function ScoreInput({
  value,
  onChange,
  teamName,
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  teamName: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        aria-label={`Sumar gol a ${teamName}`}
        disabled={disabled}
        onClick={() => onChange(Math.min(20, value + 1))}
        className="flex h-7 w-10 items-center justify-center rounded-lg bg-cor-surface text-cor-muted transition hover:bg-cor-teal/30 hover:text-cor-heading disabled:cursor-not-allowed disabled:opacity-40"
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
          className="text-3xl font-semibold tabular-nums text-cor-action"
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <button
        type="button"
        aria-label={`Restar gol a ${teamName}`}
        disabled={disabled}
        onClick={() => onChange(Math.max(0, value - 1))}
        className="flex h-7 w-10 items-center justify-center rounded-lg bg-cor-surface text-cor-muted transition hover:bg-cor-teal/30 hover:text-cor-heading disabled:cursor-not-allowed disabled:opacity-40"
      >
        ▼
      </button>
    </div>
  );
}

function TeamSide({
  flag,
  name,
}: {
  flag: string;
  name: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <span className="text-4xl">{flag}</span>
      <span className="text-center text-sm font-semibold">{name}</span>
    </div>
  );
}

export function MatchPredictionCard({ match }: { match: Match }) {
  const predictable = isMatchPredictable(match);
  const home = match.homeTeamId ? getTeamById(match.homeTeamId) : null;
  const away = match.awayTeamId ? getTeamById(match.awayTeamId) : null;

  const saved = usePredictionsStore((s) => s.predictions[match.id]);
  const setPrediction = usePredictionsStore((s) => s.setPrediction);

  const [draft, setDraft] = useState<{ home: number; away: number } | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  const homeLabel = home?.name ?? match.homeSlot ?? "Por definir";
  const awayLabel = away?.name ?? match.awaySlot ?? "Por definir";
  const homeFlag = home?.flag ?? "❓";
  const awayFlag = away?.flag ?? "❓";

  const homeScore = draft?.home ?? saved?.homeScore ?? 0;
  const awayScore = draft?.away ?? saved?.awayScore ?? 0;

  const isDirty =
    predictable &&
    (!saved || saved.homeScore !== homeScore || saved.awayScore !== awayScore);

  const setHomeScore = (v: number) => setDraft({ home: v, away: awayScore });
  const setAwayScore = (v: number) => setDraft({ home: homeScore, away: v });

  const handleSave = () => {
    if (!predictable) return;
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
      className="cor-card rounded-2xl p-5"
    >
      <p className="mb-1 text-center text-xs text-cor-muted">
        Partido {match.matchNumber}
      </p>
      <p className="mb-4 text-center text-xs text-cor-muted">
        {format(new Date(match.date), "EEEE d 'de' MMMM, HH:mm", { locale: es })} ·{" "}
        <span className="text-cor-heading">{match.venue}</span>, {match.city}
      </p>

      <div className="flex items-center justify-between gap-2">
        <TeamSide flag={homeFlag} name={homeLabel} />

        <ScoreInput
          value={homeScore}
          onChange={setHomeScore}
          teamName={homeLabel}
          disabled={!predictable}
        />
        <span className="text-xl text-cor-muted">–</span>
        <ScoreInput
          value={awayScore}
          onChange={setAwayScore}
          teamName={awayLabel}
          disabled={!predictable}
        />

        <TeamSide flag={awayFlag} name={awayLabel} />
      </div>

      <div className="mt-5 flex justify-center">
        {!predictable ? (
          <span className="flex h-10 items-center rounded-xl bg-cor-surface px-6 text-sm text-cor-muted">
            Equipos por definir
          </span>
        ) : (
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
                className="h-10 rounded-xl bg-cor-action px-6 text-lg font-semibold text-cor-inverse transition hover:bg-cor-blue/90 disabled:cursor-not-allowed disabled:bg-cor-surface disabled:text-cor-muted"
              >
                {saved && !isDirty ? "✓ Guardado" : "Guardar pronóstico"}
              </motion.button>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
