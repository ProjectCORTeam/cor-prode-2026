"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { createClient } from "@/lib/supabase/client";

interface LeaderboardEntry {
  user_id: string;
  username: string;
  total_points: number;
  exact_predictions: number;
}

const DEMO_ENTRIES: LeaderboardEntry[] = [
  { user_id: "demo-1", username: "lionel10", total_points: 42, exact_predictions: 9 },
  { user_id: "demo-2", username: "el_dibu", total_points: 38, exact_predictions: 8 },
  { user_id: "demo-3", username: "futbolera_26", total_points: 35, exact_predictions: 7 },
  { user_id: "demo-4", username: "mundialista", total_points: 31, exact_predictions: 5 },
  { user_id: "demo-5", username: "la_scaloneta", total_points: 28, exact_predictions: 4 },
  { user_id: "demo-6", username: "golazo_mx", total_points: 24, exact_predictions: 4 },
  { user_id: "demo-7", username: "tri_corazon", total_points: 21, exact_predictions: 3 },
  { user_id: "demo-8", username: "canarinha_fan", total_points: 17, exact_predictions: 2 },
];

const HAS_SUPABASE = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

const PODIUM_STYLES = [
  { medal: "🥇", height: "h-36", color: "border-cor-blue/60 bg-cor-blue/10", order: "order-2" },
  { medal: "🥈", height: "h-28", color: "border-cor-border-strong bg-cor-surface", order: "order-1" },
  { medal: "🥉", height: "h-24", color: "border-cor-plum/50 bg-cor-plum/10", order: "order-3" },
];

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(
    HAS_SUPABASE ? [] : DEMO_ENTRIES,
  );
  const isDemo = !HAS_SUPABASE;

  useEffect(() => {
    if (!HAS_SUPABASE) return;

    const supabase = createClient();

    const fetchLeaderboard = async () => {
      const { data } = await supabase
        .from("scores")
        .select("user_id, total_points, exact_predictions, profiles ( username )")
        .order("total_points", { ascending: false })
        .limit(20);

      if (data) {
        setEntries(
          data.map((row) => ({
            user_id: row.user_id,
            total_points: row.total_points,
            exact_predictions: row.exact_predictions,
            username:
              (row.profiles as unknown as { username: string | null } | null)?.username ??
              "anónimo",
          })),
        );
      }
    };

    fetchLeaderboard();

    const channel = supabase
      .channel("leaderboard-scores")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "scores" },
        () => fetchLeaderboard(),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const podium = entries.slice(0, 3);
  const rest = entries.slice(3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          🏆 <span className="text-cor-action">Leaderboard</span>
        </h1>
        <p className="mt-3 text-cor-muted">
          Los 20 mejores pronosticadores de COR, en tiempo real.
        </p>
        {isDemo && (
          <p className="mt-2 text-xs text-cor-muted/70">
            Modo demo — conectá Supabase para ver el ranking real.
          </p>
        )}
      </div>

      {podium.length === 3 && (
        <div className="mb-10 flex items-end justify-center gap-4">
          {podium.map((entry, i) => {
            const style = PODIUM_STYLES[i];
            return (
              <motion.div
                key={entry.user_id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * (3 - i), duration: 0.5, type: "spring" }}
                className={`flex w-28 flex-col items-center gap-2 ${style.order}`}
              >
                <span className="text-3xl">{style.medal}</span>
                <span className="max-w-full truncate text-sm font-semibold">
                  {entry.username}
                </span>
                <div
                  className={`flex w-full flex-col items-center justify-center rounded-t-2xl border backdrop-blur ${style.height} ${style.color}`}
                >
                  <span className="text-2xl font-semibold tabular-nums text-cor-action">
                    {entry.total_points}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-cor-muted">
                    puntos
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="cor-card overflow-hidden rounded-2xl">
        {rest.map((entry, i) => (
          <motion.div
            key={entry.user_id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="flex items-center gap-4 border-b border-cor-border px-5 py-3 last:border-b-0"
          >
            <span className="w-6 text-center text-sm tabular-nums text-cor-muted">{i + 4}</span>
            <span className="flex-1 truncate font-medium">{entry.username}</span>
            <span className="text-xs text-cor-muted">{entry.exact_predictions} exactos</span>
            <span className="w-12 text-right font-semibold tabular-nums text-cor-teal">
              {entry.total_points}
            </span>
          </motion.div>
        ))}
        {entries.length === 0 && (
          <p className="px-5 py-10 text-center text-cor-muted">
            Todavía no hay puntajes. ¡Sé el primero en pronosticar!
          </p>
        )}
      </div>
    </div>
  );
}
