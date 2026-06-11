import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function resolveRedirectPath(next: string | null, origin: string): string {
  const fallback = "/prode/grupos";

  if (!next) {
    return fallback;
  }

  if (next.startsWith("/")) {
    return next;
  }

  try {
    const nextUrl = new URL(next);
    const originUrl = new URL(origin);

    if (nextUrl.origin !== originUrl.origin) {
      return fallback;
    }

    if (nextUrl.pathname === "/" && !nextUrl.search && !nextUrl.hash) {
      return fallback;
    }

    return `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
  } catch {
    return fallback;
  }
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = searchParams.get("next");
  const redirectPath = resolveRedirectPath(next, origin);

  if (tokenHash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type: type as "email" | "signup" | "invite" | "recovery" | "email_change",
      token_hash: tokenHash,
    });

    if (!error) {
      return NextResponse.redirect(`${origin}${redirectPath}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth?error=auth_callback_failed`);
}
