"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-xl border border-cor-border px-3 py-1.5 text-sm text-cor-muted transition hover:bg-cor-surface hover:text-cor-heading disabled:opacity-50"
    >
      {loading ? "Saliendo…" : "Salir"}
    </button>
  );
}
