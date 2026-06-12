"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MatchPredictionCard } from "@/components/match/MatchPredictionCard";
import { ProdeNav } from "@/components/prode/ProdeNav";
import {
  KNOCKOUT_PHASES,
  getMatchesByPhase,
  isMatchPredictable,
  TOTAL_KNOCKOUT_MATCHES,
  type MatchPhase,
} from "@/lib/data/matches";
import { usePredictionsStore } from "@/lib/store/predictions";

export default function ProdeEliminatoriasPage() {
  const [activePhase, setActivePhase] = useState<MatchPhase>("r32");
  const predictions = usePredictionsStore((s) => s.predictions);

  const predictableMatches = KNOCKOUT_PHASES.flatMap(({ phase }) =>
    getMatchesByPhase(phase).filter(isMatchPredictable),
  );
  const predictableIds = new Set(predictableMatches.map((m) => m.id));

  const predicted = predictableIds.size
    ? Object.keys(predictions).filter((id) => predictableIds.has(id)).length
    : 0;
  const predictableTotal = predictableMatches.length;
  const progress =
    predictableTotal > 0 ? (predicted / predictableTotal) * 100 : 0;

  const matches = getMatchesByPhase(activePhase);
  const activeLabel =
    KNOCKOUT_PHASES.find((p) => p.phase === activePhase)?.label ?? activePhase;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Mi <span className="text-cor-action">Prode</span>
        </h1>
        <p className="mt-3 text-cor-muted">
          {TOTAL_KNOCKOUT_MATCHES} partidos de la fase eliminatoria. Los cruces
          se habilitan cuando se definan los equipos.
        </p>
      </div>

      <ProdeNav />

      <div className="cor-card mb-8 rounded-2xl p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-cor-muted">Progreso eliminatorias</span>
          <span className="font-semibold tabular-nums text-cor-action">
            {predicted} / {predictableTotal || "—"}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-cor-border">
          <motion.div
            className="cor-gradient-n1 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        {predictableTotal === 0 && (
          <p className="mt-2 text-center text-xs text-cor-muted">
            Todavía no hay equipos definidos para la fase eliminatoria.
          </p>
        )}
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {KNOCKOUT_PHASES.map(({ phase, label }) => {
          const phaseMatches = getMatchesByPhase(phase);
          const phaseDone = phaseMatches.every(
            (m) => !isMatchPredictable(m) || predictions[m.id],
          );
          const isActive = phase === activePhase;
          return (
            <button
              key={phase}
              type="button"
              onClick={() => setActivePhase(phase)}
              className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-cor-action text-cor-inverse"
                  : "bg-cor-surface text-cor-muted hover:bg-cor-surface-alt hover:text-cor-heading"
              }`}
            >
              {label}
              {phaseDone && phaseMatches.some(isMatchPredictable) && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cor-green text-[9px] text-cor-inverse">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="mb-5 text-center text-lg font-semibold text-cor-heading">
            {activeLabel}
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {matches.map((match) => (
              <MatchPredictionCard key={match.id} match={match} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
