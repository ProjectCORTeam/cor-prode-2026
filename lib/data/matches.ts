export type MatchPhase = "group" | "r32" | "r16" | "qf" | "sf" | "third" | "final";

export interface Match {
  id: string;
  matchNumber: number;
  phase: MatchPhase;
  group?: string;
  homeTeamId: string | null;
  awayTeamId: string | null;
  homeSlot?: string;
  awaySlot?: string;
  /** ISO 8601 date with local UTC offset */
  date: string;
  venue: string;
  city: string;
}

export const KNOCKOUT_PHASES = [
  { phase: "r32" as const, label: "16avos de final" },
  { phase: "r16" as const, label: "8vos de final" },
  { phase: "qf" as const, label: "4tos de final" },
  { phase: "sf" as const, label: "Semifinales" },
  { phase: "third" as const, label: "3er puesto" },
  { phase: "final" as const, label: "Final" },
] as const;

export const MATCHES: Match[] = [
  // ── Grupo A ──
  { id: "a1", matchNumber: 1, phase: "group", group: "A", homeTeamId: "mex", awayTeamId: "rsa", date: "2026-06-11T13:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "a2", matchNumber: 2, phase: "group", group: "A", homeTeamId: "kor", awayTeamId: "cze", date: "2026-06-11T20:00:00-06:00", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "a3", matchNumber: 25, phase: "group", group: "A", homeTeamId: "cze", awayTeamId: "rsa", date: "2026-06-18T12:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "a4", matchNumber: 28, phase: "group", group: "A", homeTeamId: "mex", awayTeamId: "kor", date: "2026-06-18T19:00:00-06:00", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "a5", matchNumber: 53, phase: "group", group: "A", homeTeamId: "cze", awayTeamId: "mex", date: "2026-06-24T19:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "a6", matchNumber: 54, phase: "group", group: "A", homeTeamId: "rsa", awayTeamId: "kor", date: "2026-06-24T19:00:00-06:00", venue: "Estadio BBVA", city: "Monterrey" },
  // ── Grupo B ──
  { id: "b1", matchNumber: 3, phase: "group", group: "B", homeTeamId: "can", awayTeamId: "bih", date: "2026-06-12T15:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "b2", matchNumber: 8, phase: "group", group: "B", homeTeamId: "qat", awayTeamId: "sui", date: "2026-06-13T12:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "b3", matchNumber: 26, phase: "group", group: "B", homeTeamId: "sui", awayTeamId: "bih", date: "2026-06-18T12:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "b4", matchNumber: 27, phase: "group", group: "B", homeTeamId: "can", awayTeamId: "qat", date: "2026-06-18T15:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "b5", matchNumber: 51, phase: "group", group: "B", homeTeamId: "sui", awayTeamId: "can", date: "2026-06-24T12:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "b6", matchNumber: 52, phase: "group", group: "B", homeTeamId: "bih", awayTeamId: "qat", date: "2026-06-24T12:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  // ── Grupo C ──
  { id: "c1", matchNumber: 7, phase: "group", group: "C", homeTeamId: "bra", awayTeamId: "mar", date: "2026-06-13T18:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "c2", matchNumber: 5, phase: "group", group: "C", homeTeamId: "hai", awayTeamId: "sco", date: "2026-06-13T21:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "c3", matchNumber: 29, phase: "group", group: "C", homeTeamId: "bra", awayTeamId: "hai", date: "2026-06-19T21:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  { id: "c4", matchNumber: 30, phase: "group", group: "C", homeTeamId: "sco", awayTeamId: "mar", date: "2026-06-19T18:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "c5", matchNumber: 49, phase: "group", group: "C", homeTeamId: "sco", awayTeamId: "bra", date: "2026-06-24T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "c6", matchNumber: 50, phase: "group", group: "C", homeTeamId: "mar", awayTeamId: "hai", date: "2026-06-24T18:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  // ── Grupo D ──
  { id: "d1", matchNumber: 4, phase: "group", group: "D", homeTeamId: "usa", awayTeamId: "par", date: "2026-06-12T18:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "d2", matchNumber: 6, phase: "group", group: "D", homeTeamId: "aus", awayTeamId: "tur", date: "2026-06-13T21:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "d3", matchNumber: 32, phase: "group", group: "D", homeTeamId: "usa", awayTeamId: "aus", date: "2026-06-19T12:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "d4", matchNumber: 31, phase: "group", group: "D", homeTeamId: "tur", awayTeamId: "par", date: "2026-06-19T20:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "d5", matchNumber: 59, phase: "group", group: "D", homeTeamId: "tur", awayTeamId: "usa", date: "2026-06-25T19:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "d6", matchNumber: 60, phase: "group", group: "D", homeTeamId: "par", awayTeamId: "aus", date: "2026-06-25T19:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  // ── Grupo E ──
  { id: "e1", matchNumber: 10, phase: "group", group: "E", homeTeamId: "ger", awayTeamId: "cuw", date: "2026-06-14T12:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "e2", matchNumber: 9, phase: "group", group: "E", homeTeamId: "civ", awayTeamId: "ecu", date: "2026-06-14T19:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  { id: "e3", matchNumber: 33, phase: "group", group: "E", homeTeamId: "ger", awayTeamId: "civ", date: "2026-06-20T16:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "e4", matchNumber: 34, phase: "group", group: "E", homeTeamId: "ecu", awayTeamId: "cuw", date: "2026-06-20T19:00:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "e5", matchNumber: 55, phase: "group", group: "E", homeTeamId: "cuw", awayTeamId: "civ", date: "2026-06-25T16:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  { id: "e6", matchNumber: 56, phase: "group", group: "E", homeTeamId: "ecu", awayTeamId: "ger", date: "2026-06-25T16:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  // ── Grupo F ──
  { id: "f1", matchNumber: 11, phase: "group", group: "F", homeTeamId: "ned", awayTeamId: "jpn", date: "2026-06-14T15:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "f2", matchNumber: 12, phase: "group", group: "F", homeTeamId: "swe", awayTeamId: "tun", date: "2026-06-14T20:00:00-06:00", venue: "Estadio BBVA", city: "Monterrey" },
  { id: "f3", matchNumber: 35, phase: "group", group: "F", homeTeamId: "ned", awayTeamId: "swe", date: "2026-06-20T12:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "f4", matchNumber: 36, phase: "group", group: "F", homeTeamId: "tun", awayTeamId: "jpn", date: "2026-06-20T22:00:00-06:00", venue: "Estadio BBVA", city: "Monterrey" },
  { id: "f5", matchNumber: 57, phase: "group", group: "F", homeTeamId: "jpn", awayTeamId: "swe", date: "2026-06-25T18:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "f6", matchNumber: 58, phase: "group", group: "F", homeTeamId: "tun", awayTeamId: "ned", date: "2026-06-25T18:00:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  // ── Grupo G ──
  { id: "g1", matchNumber: 16, phase: "group", group: "G", homeTeamId: "bel", awayTeamId: "egy", date: "2026-06-15T12:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "g2", matchNumber: 15, phase: "group", group: "G", homeTeamId: "irn", awayTeamId: "nzl", date: "2026-06-15T18:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "g3", matchNumber: 39, phase: "group", group: "G", homeTeamId: "bel", awayTeamId: "irn", date: "2026-06-21T12:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "g4", matchNumber: 40, phase: "group", group: "G", homeTeamId: "nzl", awayTeamId: "egy", date: "2026-06-21T18:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "g5", matchNumber: 63, phase: "group", group: "G", homeTeamId: "egy", awayTeamId: "irn", date: "2026-06-26T20:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "g6", matchNumber: 64, phase: "group", group: "G", homeTeamId: "nzl", awayTeamId: "bel", date: "2026-06-26T20:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  // ── Grupo H ──
  { id: "h1", matchNumber: 14, phase: "group", group: "H", homeTeamId: "esp", awayTeamId: "cpv", date: "2026-06-15T12:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "h2", matchNumber: 13, phase: "group", group: "H", homeTeamId: "ksa", awayTeamId: "uru", date: "2026-06-15T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "h3", matchNumber: 38, phase: "group", group: "H", homeTeamId: "esp", awayTeamId: "ksa", date: "2026-06-21T12:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "h4", matchNumber: 37, phase: "group", group: "H", homeTeamId: "uru", awayTeamId: "cpv", date: "2026-06-21T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "h5", matchNumber: 65, phase: "group", group: "H", homeTeamId: "cpv", awayTeamId: "ksa", date: "2026-06-26T19:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "h6", matchNumber: 66, phase: "group", group: "H", homeTeamId: "uru", awayTeamId: "esp", date: "2026-06-26T18:00:00-06:00", venue: "Estadio Akron", city: "Guadalajara" },
  // ── Grupo I ──
  { id: "i1", matchNumber: 17, phase: "group", group: "I", homeTeamId: "fra", awayTeamId: "sen", date: "2026-06-16T15:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "i2", matchNumber: 18, phase: "group", group: "I", homeTeamId: "irq", awayTeamId: "nor", date: "2026-06-16T18:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "i3", matchNumber: 42, phase: "group", group: "I", homeTeamId: "fra", awayTeamId: "irq", date: "2026-06-22T17:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  { id: "i4", matchNumber: 41, phase: "group", group: "I", homeTeamId: "nor", awayTeamId: "sen", date: "2026-06-22T20:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "i5", matchNumber: 61, phase: "group", group: "I", homeTeamId: "nor", awayTeamId: "fra", date: "2026-06-26T15:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "i6", matchNumber: 62, phase: "group", group: "I", homeTeamId: "sen", awayTeamId: "irq", date: "2026-06-26T15:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  // ── Grupo J ──
  { id: "j1", matchNumber: 19, phase: "group", group: "J", homeTeamId: "arg", awayTeamId: "alg", date: "2026-06-16T20:00:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "j2", matchNumber: 20, phase: "group", group: "J", homeTeamId: "aut", awayTeamId: "jor", date: "2026-06-16T21:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "j3", matchNumber: 43, phase: "group", group: "J", homeTeamId: "arg", awayTeamId: "aut", date: "2026-06-22T12:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "j4", matchNumber: 44, phase: "group", group: "J", homeTeamId: "jor", awayTeamId: "alg", date: "2026-06-22T20:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "j5", matchNumber: 69, phase: "group", group: "J", homeTeamId: "alg", awayTeamId: "aut", date: "2026-06-27T21:00:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "j6", matchNumber: 70, phase: "group", group: "J", homeTeamId: "jor", awayTeamId: "arg", date: "2026-06-27T21:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  // ── Grupo K ──
  { id: "k1", matchNumber: 23, phase: "group", group: "K", homeTeamId: "por", awayTeamId: "cod", date: "2026-06-17T12:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "k2", matchNumber: 24, phase: "group", group: "K", homeTeamId: "uzb", awayTeamId: "col", date: "2026-06-17T20:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "k3", matchNumber: 47, phase: "group", group: "K", homeTeamId: "por", awayTeamId: "uzb", date: "2026-06-23T12:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "k4", matchNumber: 48, phase: "group", group: "K", homeTeamId: "col", awayTeamId: "cod", date: "2026-06-23T20:00:00-06:00", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "k5", matchNumber: 71, phase: "group", group: "K", homeTeamId: "col", awayTeamId: "por", date: "2026-06-27T19:30:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "k6", matchNumber: 72, phase: "group", group: "K", homeTeamId: "cod", awayTeamId: "uzb", date: "2026-06-27T19:30:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  // ── Grupo L ──
  { id: "l1", matchNumber: 22, phase: "group", group: "L", homeTeamId: "eng", awayTeamId: "cro", date: "2026-06-17T15:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "l2", matchNumber: 21, phase: "group", group: "L", homeTeamId: "gha", awayTeamId: "pan", date: "2026-06-17T19:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "l3", matchNumber: 45, phase: "group", group: "L", homeTeamId: "eng", awayTeamId: "gha", date: "2026-06-23T16:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "l4", matchNumber: 46, phase: "group", group: "L", homeTeamId: "pan", awayTeamId: "cro", date: "2026-06-23T19:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "l5", matchNumber: 67, phase: "group", group: "L", homeTeamId: "pan", awayTeamId: "eng", date: "2026-06-27T17:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "l6", matchNumber: 68, phase: "group", group: "L", homeTeamId: "cro", awayTeamId: "gha", date: "2026-06-27T17:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  // ── Fase eliminatoria ──
  { id: "m73", matchNumber: 73, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "2° Grupo A", awaySlot: "2° Grupo B", date: "2026-06-28T12:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "m74", matchNumber: 74, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo E", awaySlot: "3° (A/B/C/D/F)", date: "2026-06-29T16:30:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "m75", matchNumber: 75, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo F", awaySlot: "2° Grupo C", date: "2026-06-29T19:00:00-06:00", venue: "Estadio BBVA", city: "Monterrey" },
  { id: "m76", matchNumber: 76, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo C", awaySlot: "2° Grupo F", date: "2026-06-29T12:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "m77", matchNumber: 77, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo I", awaySlot: "3° (C/D/F/G/H)", date: "2026-06-30T17:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "m78", matchNumber: 78, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "2° Grupo E", awaySlot: "2° Grupo I", date: "2026-06-30T12:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m79", matchNumber: 79, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo A", awaySlot: "3° (C/E/F/H/I)", date: "2026-06-30T19:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "m80", matchNumber: 80, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo L", awaySlot: "3° (E/H/I/J/K)", date: "2026-07-01T12:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "m81", matchNumber: 81, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo D", awaySlot: "3° (B/E/F/I/J)", date: "2026-07-01T17:00:00-07:00", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "m82", matchNumber: 82, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo G", awaySlot: "3° (A/E/H/I/J)", date: "2026-07-01T13:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "m83", matchNumber: 83, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "2° Grupo K", awaySlot: "2° Grupo L", date: "2026-07-02T19:00:00-04:00", venue: "BMO Field", city: "Toronto" },
  { id: "m84", matchNumber: 84, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo H", awaySlot: "2° Grupo J", date: "2026-07-02T12:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "m85", matchNumber: 85, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo B", awaySlot: "3° (E/F/G/I/J)", date: "2026-07-02T20:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "m86", matchNumber: 86, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo J", awaySlot: "2° Grupo H", date: "2026-07-03T18:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "m87", matchNumber: 87, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "1° Grupo K", awaySlot: "3° (D/E/I/J/L)", date: "2026-07-03T20:30:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "m88", matchNumber: 88, phase: "r32", homeTeamId: null, awayTeamId: null, homeSlot: "2° Grupo D", awaySlot: "2° Grupo G", date: "2026-07-03T13:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m89", matchNumber: 89, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 74", awaySlot: "Ganador 77", date: "2026-07-04T17:00:00-04:00", venue: "Lincoln Financial Field", city: "Filadelfia" },
  { id: "m90", matchNumber: 90, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 73", awaySlot: "Ganador 75", date: "2026-07-04T12:00:00-05:00", venue: "NRG Stadium", city: "Houston" },
  { id: "m91", matchNumber: 91, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 76", awaySlot: "Ganador 78", date: "2026-07-05T16:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
  { id: "m92", matchNumber: 92, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 79", awaySlot: "Ganador 80", date: "2026-07-05T19:00:00-06:00", venue: "Estadio Azteca", city: "Ciudad de México" },
  { id: "m93", matchNumber: 93, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 83", awaySlot: "Ganador 84", date: "2026-07-06T14:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m94", matchNumber: 94, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 81", awaySlot: "Ganador 82", date: "2026-07-06T17:00:00-07:00", venue: "Lumen Field", city: "Seattle" },
  { id: "m95", matchNumber: 95, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 86", awaySlot: "Ganador 88", date: "2026-07-07T12:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "m96", matchNumber: 96, phase: "r16", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 85", awaySlot: "Ganador 87", date: "2026-07-07T13:00:00-07:00", venue: "BC Place", city: "Vancouver" },
  { id: "m97", matchNumber: 97, phase: "qf", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 89", awaySlot: "Ganador 90", date: "2026-07-09T16:00:00-04:00", venue: "Gillette Stadium", city: "Boston" },
  { id: "m98", matchNumber: 98, phase: "qf", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 93", awaySlot: "Ganador 94", date: "2026-07-10T12:00:00-07:00", venue: "SoFi Stadium", city: "Los Ángeles" },
  { id: "m99", matchNumber: 99, phase: "qf", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 91", awaySlot: "Ganador 92", date: "2026-07-11T17:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "m100", matchNumber: 100, phase: "qf", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 95", awaySlot: "Ganador 96", date: "2026-07-11T20:00:00-05:00", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "m101", matchNumber: 101, phase: "sf", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 97", awaySlot: "Ganador 98", date: "2026-07-14T14:00:00-05:00", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m102", matchNumber: 102, phase: "sf", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 99", awaySlot: "Ganador 100", date: "2026-07-15T15:00:00-04:00", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "m103", matchNumber: 103, phase: "third", homeTeamId: null, awayTeamId: null, homeSlot: "Perdedor 101", awaySlot: "Perdedor 102", date: "2026-07-18T17:00:00-04:00", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "m104", matchNumber: 104, phase: "final", homeTeamId: null, awayTeamId: null, homeSlot: "Ganador 101", awaySlot: "Ganador 102", date: "2026-07-19T15:00:00-04:00", venue: "MetLife Stadium", city: "Nueva York / Nueva Jersey" },
];

export const getMatchesByGroup = (g: string) =>
  MATCHES.filter((m) => m.phase === "group" && m.group === g).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

export const getMatchesByPhase = (phase: MatchPhase) =>
  MATCHES.filter((m) => m.phase === phase).sort(
    (a, b) => a.matchNumber - b.matchNumber,
  );

export const GROUP_MATCHES = MATCHES.filter((m) => m.phase === "group");
export const KNOCKOUT_MATCHES = MATCHES.filter((m) => m.phase !== "group");

export const TOTAL_GROUP_MATCHES = GROUP_MATCHES.length;
export const TOTAL_KNOCKOUT_MATCHES = KNOCKOUT_MATCHES.length;
export const TOTAL_MATCHES = MATCHES.length;

export const MATCH_IDS = new Set(MATCHES.map((m) => m.id));
export const GROUP_MATCH_IDS = new Set(GROUP_MATCHES.map((m) => m.id));

export const isMatchPredictable = (match: Match): boolean =>
  match.homeTeamId !== null && match.awayTeamId !== null;

export const getPredictableKnockoutMatches = () =>
  KNOCKOUT_MATCHES.filter(isMatchPredictable);

/** Partidos con equipos definidos, ordenados cronológicamente. */
export const MATCHES_BY_DATE = [...MATCHES]
  .filter(isMatchPredictable)
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

/** Primer partido cuyo kickoff todavía no ocurrió respecto a `now`. */
export const getNextMatch = (now: Date = new Date()): Match | null =>
  MATCHES_BY_DATE.find((m) => new Date(m.date).getTime() > now.getTime()) ?? null;

/** Inicio del torneo: México vs Sudáfrica, Estadio Azteca */
export const TOURNAMENT_START = "2026-06-11T13:00:00-06:00";
/** Final: MetLife Stadium, Nueva Jersey */
export const TOURNAMENT_FINAL = "2026-07-19T15:00:00-04:00";
