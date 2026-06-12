import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/ui/LogoutButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b border-cor-border bg-cor-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/cor-logo-black.png"
            alt="COR"
            width={88}
            height={30}
            priority
            className="h-7 w-auto dark:hidden"
          />
          <Image
            src="/cor-logo-white.png"
            alt="COR"
            width={88}
            height={30}
            priority
            className="hidden h-7 w-auto dark:block"
          />
          <span className="hidden border-l border-cor-border pl-3 text-sm font-medium text-cor-muted sm:inline">
            Prode Mundial 2026
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-1.5 text-sm text-cor-muted transition hover:bg-cor-surface hover:text-cor-heading"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="hidden max-w-[160px] truncate text-sm text-cor-muted sm:inline"
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
              className="rounded-xl bg-cor-action px-3 py-1.5 text-sm font-semibold text-cor-inverse transition hover:bg-cor-blue/90"
            >
              Entrar
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
