"use client";

import { motion } from "motion/react";
import { getTeamsByGroup } from "@/lib/data/teams";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const row = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export function GroupTable({ group }: { group: string }) {
  const teams = getTeamsByGroup(group);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="cor-card overflow-hidden rounded-2xl"
    >
      <div className="flex items-center justify-between border-b border-cor-border px-4 py-3">
        <h3 className="text-lg font-semibold">
          Grupo <span className="text-cor-action">{group}</span>
        </h3>
        <span className="text-xs uppercase tracking-widest text-cor-muted">FIFA 2026</span>
      </div>
      <ul>
        {teams.map((team, i) => (
          <motion.li
            key={team.id}
            variants={row}
            className="flex items-center gap-3 border-b border-cor-border px-4 py-3 last:border-b-0 hover:bg-cor-surface-alt/50"
          >
            <span className="w-5 text-center text-sm tabular-nums text-cor-muted">{i + 1}</span>
            <span className="text-2xl leading-none">{team.flag}</span>
            <span className="flex-1 truncate font-medium">{team.name}</span>
            <span className="rounded-full bg-cor-surface px-2 py-0.5 text-[10px] uppercase tracking-wider text-cor-muted">
              {team.confederation}
            </span>
            {team.fifaRank && (
              <span className="w-8 text-right text-xs tabular-nums text-cor-teal">
                #{team.fifaRank}
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
