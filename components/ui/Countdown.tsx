"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { differenceInSeconds } from "date-fns";

function subscribeToClock(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

/** Segundos epoch actuales; null durante SSR/hidratación para evitar mismatch. */
function useNowSeconds(): number | null {
  return useSyncExternalStore(
    subscribeToClock,
    () => Math.floor(Date.now() / 1000),
    () => null,
  );
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-cor-yellow/30 bg-cor-navy/25 backdrop-blur sm:h-24 sm:w-24">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -28, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-4xl font-semibold tabular-nums text-cor-yellow sm:text-5xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs uppercase tracking-widest text-white/60">{label}</span>
    </div>
  );
}

export function Countdown({ target }: { target: string }) {
  const now = useNowSeconds();

  if (now === null) {
    return <div className="h-28 sm:h-32" aria-hidden />;
  }

  const total = Math.max(0, differenceInSeconds(new Date(target), new Date(now * 1000)));

  if (total === 0) {
    return (
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl font-semibold text-cor-green"
      >
        ¡El Mundial ya comenzó! ⚽
      </motion.p>
    );
  }

  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return (
    <div
      className="flex items-start gap-3 sm:gap-4"
      role="timer"
      aria-label="Cuenta regresiva al Mundial 2026"
    >
      <Digit value={days} label="Días" />
      <Digit value={hours} label="Horas" />
      <Digit value={minutes} label="Min" />
      <Digit value={seconds} label="Seg" />
    </div>
  );
}
