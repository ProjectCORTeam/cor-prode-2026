"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MatchPredictionCard } from "@/components/match/MatchPredictionCard";
import { getMatchesByGroup, TOTAL_GROUP_MATCHES } from "@/lib/data/matches";
import { GROUPS, type Group } from "@/lib/data/teams";
import { usePredictionsStore } from "@/lib/store/predictions";

export default function ProdeGruposPage() {
  const [activeGroup, setActiveGroup] = useState<Group>("A");
  const predictions = usePredictionsStore((s) => s.predictions);

  const predicted = Object.keys(predictions).length;
  const progress = (predicted / TOTAL_GROUP_MATCHES) * 100;
  const matches = getMatchesByGroup(activeGroup);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Mi <span className="text-cor-yellow">Prode</span>
        </h1>
        <p className="mt-3 text-white/60">
          Pronosticá los 36 partidos de la fase de grupos.
        </p>
      </div>

      {/* Barra de progreso */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-cor-navy/25 p-4 backdrop-blur">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-white/70">Progreso</span>
          <span className="font-semibold tabular-nums text-cor-yellow">
            {predicted} / {TOTAL_GROUP_MATCHES}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          {/* Gradiente oficial N1 de COR: claro → oscuro, izquierda → derecha */}
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cor-aqua to-cor-blue"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Tabs A-L */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {GROUPS.map((group) => {
          const groupMatches = getMatchesByGroup(group);
          const groupDone = groupMatches.every((m) => predictions[m.id]);
          const isActive = group === activeGroup;
          return (
            <button
              key={group}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={`relative flex h-11 w-11 items-center justify-center rounded-xl font-semibold transition ${
                isActive
                  ? "bg-cor-yellow text-cor-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {group}
              {groupDone && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cor-green text-[9px] text-cor-black">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Partidos del grupo activo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {matches.map((match) => (
            <MatchPredictionCard key={match.id} match={match} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
