"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "loading" | "sent" | "error";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/prode/grupos`,
        },
      });
      if (error) throw error;
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "No se pudo enviar el enlace.",
      );
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-57px)] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="cor-card w-full max-w-md rounded-2xl p-8"
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/cor-logo-black.png"
            alt="COR"
            width={110}
            height={37}
            className="h-9 w-auto dark:hidden"
          />
          <Image
            src="/cor-logo-white.png"
            alt="COR"
            width={110}
            height={37}
            className="hidden h-9 w-auto dark:block"
          />
          <h1 className="mt-6 text-3xl font-semibold">
            Entrá al <span className="text-cor-action">Prode</span>
          </h1>
          <p className="mt-2 text-sm text-cor-muted">
            Te enviamos un enlace mágico a tu email de COR. Sin contraseñas.
          </p>
        </div>

        {status === "sent" ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-xl bg-cor-green/15 p-6 text-center"
          >
            <p className="text-2xl">📬</p>
            <p className="mt-2 font-semibold text-cor-green">¡Enlace enviado!</p>
            <p className="mt-1 text-sm text-cor-muted">
              Revisá tu bandeja de entrada en <strong>{email}</strong> y hacé
              clic en el enlace para entrar.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-cor-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vos@projectcor.com"
                className="w-full rounded-xl border border-cor-border bg-cor-bg px-4 py-3 outline-none transition placeholder:text-cor-muted/60 focus:border-cor-action"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-cor-error">{errorMessage}</p>
            )}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={status === "loading"}
              className="w-full rounded-xl bg-cor-action py-3 font-semibold text-cor-inverse transition hover:bg-cor-blue/90 disabled:opacity-50"
            >
              {status === "loading" ? "Enviando…" : "Enviarme el enlace mágico ✨"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
