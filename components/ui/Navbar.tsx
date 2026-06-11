import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/ui/LogoutButton";

const links = [
  { href: "/grupos", label: "Grupos" },
  { href: "/prode/grupos", label: "Mi Prode" },
  { href: "/prode/eliminatorias", label: "Eliminatorias" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cor-black/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/cor-logo-white.png"
            alt="COR"
            width={88}
            height={30}
            priority
            className="h-7 w-auto"
          />
          <span className="hidden border-l border-white/20 pl-3 text-sm font-medium text-white/70 sm:inline">
            Prode Mundial 2026
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="hidden max-w-[160px] truncate text-sm text-white/60 sm:inline"
                title={user.email ?? undefined}
              >
                {user.email}
              </span>
              <span className="h-2 w-2 rounded-full bg-cor-green" aria-hidden />
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/auth"
              className="rounded-xl bg-cor-yellow px-3 py-1.5 text-sm font-semibold text-cor-black transition hover:bg-cor-yellow/85"
            >
              Entrar
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
