"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MatchPredictionCard } from "@/components/match/MatchPredictionCard";
import { ProdeNav } from "@/components/prode/ProdeNav";
import {
  getMatchesByGroup,
  GROUP_MATCH_IDS,
  TOTAL_GROUP_MATCHES,
} from "@/lib/data/matches";
import { GROUPS, type Group } from "@/lib/data/teams";
import { usePredictionsStore } from "@/lib/store/predictions";

export default function ProdeGruposPage() {
  const [activeGroup, setActiveGroup] = useState<Group>("A");
  const predictions = usePredictionsStore((s) => s.predictions);

  const predicted = Object.keys(predictions).filter((id) =>
    GROUP_MATCH_IDS.has(id),
  ).length;
  const progress = (predicted / TOTAL_GROUP_MATCHES) * 100;
  const matches = getMatchesByGroup(activeGroup);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Mi <span className="text-cor-action">Prode</span>
        </h1>
        <p className="mt-3 text-cor-muted">
          Pronosticá los 72 partidos de la fase de grupos.
        </p>
      </div>

      <ProdeNav />

      {/* Barra de progreso */}
      <div className="cor-card mb-8 rounded-2xl p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-cor-muted">Progreso fase de grupos</span>
          <span className="font-semibold tabular-nums text-cor-action">
            {predicted} / {TOTAL_GROUP_MATCHES}
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
                  ? "bg-cor-action text-cor-inverse"
                  : "bg-cor-surface text-cor-muted hover:bg-cor-surface-alt hover:text-cor-heading"
              }`}
            >
              {group}
              {groupDone && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cor-green text-[9px] text-cor-inverse">
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
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
        >
          {matches.map((match) => (
            <MatchPredictionCard key={match.id} match={match} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
