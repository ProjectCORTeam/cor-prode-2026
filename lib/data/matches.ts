export interface Match {
  id: string;
  phase: "group";
  group: string;
  homeTeamId: string;
  awayTeamId: string;
  /** ISO 8601 date with local UTC offset */
  date: string;
  venue: string;
  city: string;
}

export const MATCHES: Match[] = [
  // ── Grupo A ──
  { id: "a1", phase: "group", group: "A", homeTeamId: "mex", awayTeamId: "rsa", date: "2026-06-11T13:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "a2", phase: "group", group: "A", homeTeamId: "kor", awayTeamId: "cze", date: "2026-06-11T20:00:00-06:00", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "a3", phase: "group", group: "A", homeTeamId: "mex", awayTeamId: "kor", date: "2026-06-18T19:00:00-06:00", venue: "Estadio Akron", city: "Guadalajara" },
  // ── Grupo B ──
  { id: "b1", phase: "group", group: "B", homeTeamId: "can", awayTeamId: "qat", date: "2026-06-12T15:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "b2", phase: "group", group: "B", homeTeamId: "bih", awayTeamId: "sui", date: "2026-06-12T18:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "b3", phase: "group", group: "B", homeTeamId: "can", awayTeamId: "bih", date: "2026-06-19T16:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  // ── Grupo C ──
  { id: "c1", phase: "group", group: "C", homeTeamId: "bra", awayTeamId: "hai", date: "2026-06-13T15:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "c2", phase: "group", group: "C", homeTeamId: "mar", awayTeamId: "sco", date: "2026-06-13T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "c3", phase: "group", group: "C", homeTeamId: "bra", awayTeamId: "mar", date: "2026-06-19T18:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  // ── Grupo D ──
  { id: "d1", phase: "group", group: "D", homeTeamId: "usa", awayTeamId: "par", date: "2026-06-12T18:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "d2", phase: "group", group: "D", homeTeamId: "aus", awayTeamId: "tur", date: "2026-06-13T13:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "d3", phase: "group", group: "D", homeTeamId: "usa", awayTeamId: "aus", date: "2026-06-19T13:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  // ── Grupo E ──
  { id: "e1", phase: "group", group: "E", homeTeamId: "ger", awayTeamId: "civ", date: "2026-06-14T14:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "e2", phase: "group", group: "E", homeTeamId: "cuw", awayTeamId: "ecu", date: "2026-06-14T17:00:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "e3", phase: "group", group: "E", homeTeamId: "ger", awayTeamId: "cuw", date: "2026-06-20T14:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  // ── Grupo F ──
  { id: "f1", phase: "group", group: "F", homeTeamId: "ned", awayTeamId: "swe", date: "2026-06-14T20:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "f2", phase: "group", group: "F", homeTeamId: "jpn", awayTeamId: "tun", date: "2026-06-15T13:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "f3", phase: "group", group: "F", homeTeamId: "ned", awayTeamId: "jpn", date: "2026-06-20T20:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  // ── Grupo G ──
  { id: "g1", phase: "group", group: "G", homeTeamId: "bel", awayTeamId: "irn", date: "2026-06-15T16:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "g2", phase: "group", group: "G", homeTeamId: "egy", awayTeamId: "nzl", date: "2026-06-15T18:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  { id: "g3", phase: "group", group: "G", homeTeamId: "bel", awayTeamId: "egy", date: "2026-06-21T15:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  // ── Grupo H ──
  { id: "h1", phase: "group", group: "H", homeTeamId: "esp", awayTeamId: "ksa", date: "2026-06-16T19:00:00-06:00", venue: "Estadio BBVA", city: "Monterrey" },
  { id: "h2", phase: "group", group: "H", homeTeamId: "cpv", awayTeamId: "uru", date: "2026-06-16T16:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "h3", phase: "group", group: "H", homeTeamId: "esp", awayTeamId: "cpv", date: "2026-06-21T19:00:00-06:00", venue: "Estadio BBVA", city: "Monterrey" },
  // ── Grupo I ──
  { id: "i1", phase: "group", group: "I", homeTeamId: "fra", awayTeamId: "irq", date: "2026-06-16T18:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "i2", phase: "group", group: "I", homeTeamId: "sen", awayTeamId: "nor", date: "2026-06-17T15:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "i3", phase: "group", group: "I", homeTeamId: "fra", awayTeamId: "sen", date: "2026-06-22T18:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  // ── Grupo J ──
  { id: "j1", phase: "group", group: "J", homeTeamId: "arg", awayTeamId: "aut", date: "2026-06-17T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "j2", phase: "group", group: "J", homeTeamId: "alg", awayTeamId: "jor", date: "2026-06-17T17:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "j3", phase: "group", group: "J", homeTeamId: "arg", awayTeamId: "alg", date: "2026-06-22T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  // ── Grupo K ──
  { id: "k1", phase: "group", group: "K", homeTeamId: "por", awayTeamId: "uzb", date: "2026-06-18T15:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "k2", phase: "group", group: "K", homeTeamId: "cod", awayTeamId: "col", date: "2026-06-18T17:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "k3", phase: "group", group: "K", homeTeamId: "por", awayTeamId: "cod", date: "2026-06-23T17:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  // ── Grupo L ──
  { id: "l1", phase: "group", group: "L", homeTeamId: "eng", awayTeamId: "gha", date: "2026-06-18T13:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "l2", phase: "group", group: "L", homeTeamId: "cro", awayTeamId: "pan", date: "2026-06-18T16:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "l3", phase: "group", group: "L", homeTeamId: "eng", awayTeamId: "cro", date: "2026-06-23T15:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
];

export const getMatchesByGroup = (g: string) => MATCHES.filter((m) => m.group === g);

export const TOTAL_GROUP_MATCHES = MATCHES.length;

/** Partidos ordenados cronológicamente por fecha de inicio (ascendente). */
export const MATCHES_BY_DATE = [...MATCHES].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);

/** Primer partido cuyo kickoff todavía no ocurrió respecto a `now`. */
export const getNextMatch = (now: Date = new Date()): Match | null =>
  MATCHES_BY_DATE.find((m) => new Date(m.date).getTime() > now.getTime()) ?? null;

/** Inicio del torneo: México vs Sudáfrica, Estadio Azteca (13:00 hora de Ciudad de México, CDT) */
export const TOURNAMENT_START = "2026-06-11T13:00:00-06:00";
/** Final: MetLife Stadium, Nueva Jersey */
export const TOURNAMENT_FINAL = "2026-07-19T15:00:00-04:00";
