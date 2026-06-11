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
          Mi <span className="text-cor-yellow">Prode</span>
        </h1>
        <p className="mt-3 text-white/60">
          {TOTAL_KNOCKOUT_MATCHES} partidos de la fase eliminatoria. Los cruces
          se habilitan cuando se definan los equipos.
        </p>
      </div>

      <ProdeNav />

      <div className="mb-8 rounded-2xl border border-white/10 bg-cor-navy/25 p-4 backdrop-blur">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-white/70">Progreso eliminatorias</span>
          <span className="font-semibold tabular-nums text-cor-yellow">
            {predicted} / {predictableTotal || "—"}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cor-aqua to-cor-blue"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        {predictableTotal === 0 && (
          <p className="mt-2 text-center text-xs text-white/40">
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
                  ? "bg-cor-yellow text-cor-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
              {phaseDone && phaseMatches.some(isMatchPredictable) && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cor-green text-[9px] text-cor-black">
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
          <h2 className="mb-5 text-center text-lg font-semibold text-white/80">
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
