"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { differenceInSeconds } from "date-fns";

function subscribeToClock(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

function useNowSeconds(): number | null {
  return useSyncExternalStore(
    subscribeToClock,
    () => Math.floor(Date.now() / 1000),
    () => null,
  );
}

function Digit({
  value,
  label,
  variant,
}: {
  value: number;
  label: string;
  variant: "default" | "hero";
}) {
  const display = String(value).padStart(2, "0");
  const isHero = variant === "hero";

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl backdrop-blur sm:h-24 sm:w-24 ${
          isHero
            ? "border border-cor-blue/30 bg-cor-navy/25"
            : "border border-cor-border bg-cor-surface"
        }`}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -28, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`text-4xl font-semibold tabular-nums sm:text-5xl ${
              isHero ? "text-cor-blue" : "text-cor-action"
            }`}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className={`text-xs uppercase tracking-widest ${
          isHero ? "text-cor-lavender/60" : "text-cor-muted"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export interface Fixture {
  date: string;
  homeName: string;
  homeFlag: string;
  awayName: string;
  awayFlag: string;
  venue: string;
  city: string;
}

function formatKickoff(date: string): string {
  const formatted = new Date(date).toLocaleString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function Countdown({
  fixtures,
  variant = "default",
}: {
  fixtures: Fixture[];
  variant?: "default" | "hero";
}) {
  const now = useNowSeconds();
  const isHero = variant === "hero";

  if (now === null) {
    return <div className="h-40 sm:h-44" aria-hidden />;
  }

  const nowMs = now * 1000;
  const next = fixtures.find((f) => new Date(f.date).getTime() > nowMs) ?? null;

  if (!next) {
    return (
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl font-semibold text-cor-green"
      >
        ¡El Mundial está en marcha! ⚽
      </motion.p>
    );
  }

  const total = Math.max(0, differenceInSeconds(new Date(next.date), new Date(nowMs)));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return (
    <div className="flex flex-col items-center gap-5">
      <p
        className={`text-xs uppercase tracking-[0.2em] ${
          isHero ? "text-cor-teal/80" : "text-cor-action/80"
        }`}
      >
        Próximo partido
      </p>
      <div
        className="flex items-start gap-3 sm:gap-4"
        role="timer"
        aria-label="Cuenta regresiva al próximo partido del Mundial 2026"
      >
        <Digit value={days} label="Días" variant={variant} />
        <Digit value={hours} label="Horas" variant={variant} />
        <Digit value={minutes} label="Min" variant={variant} />
        <Digit value={seconds} label="Seg" variant={variant} />
      </div>
      <div className="space-y-1 text-center">
        <p
          className={`text-base font-semibold sm:text-lg ${
            isHero ? "text-cor-white" : "text-cor-heading"
          }`}
        >
          {next.homeFlag} {next.homeName} vs {next.awayName} {next.awayFlag}
        </p>
        <p className={`text-sm ${isHero ? "text-cor-lavender/50" : "text-cor-muted"}`}>
          {formatKickoff(next.date)} · {next.venue}, {next.city}
        </p>
      </div>
    </div>
  );
}
