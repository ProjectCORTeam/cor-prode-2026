-- ============================================================
-- Prode Mundial 2026 — Supabase schema
-- Ejecutar en: Supabase Dashboard > SQL Editor
-- ============================================================

-- ── profiles ────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text unique,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Crear perfil automáticamente al registrarse
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1)));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── predictions ─────────────────────────────────────────────
create table if not exists public.predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  match_id text not null,
  home_score smallint not null check (home_score >= 0),
  away_score smallint not null check (away_score >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, match_id)
);

alter table public.predictions enable row level security;

create policy "Users can view their own predictions"
  on public.predictions for select
  using (auth.uid() = user_id);

create policy "Users can insert their own predictions"
  on public.predictions for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own predictions"
  on public.predictions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own predictions"
  on public.predictions for delete
  using (auth.uid() = user_id);

create index if not exists predictions_user_id_idx on public.predictions (user_id);
create index if not exists predictions_match_id_idx on public.predictions (match_id);

-- ── scores ──────────────────────────────────────────────────
create table if not exists public.scores (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  total_points integer not null default 0,
  exact_predictions integer not null default 0,
  correct_outcomes integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.scores enable row level security;

create policy "Scores are viewable by everyone"
  on public.scores for select
  using (true);

-- Solo el backend (service role) puede escribir scores:
-- no se crean policies de insert/update/delete para usuarios.

create index if not exists scores_total_points_idx on public.scores (total_points desc);

-- Realtime para el leaderboard
alter publication supabase_realtime add table public.scores;
