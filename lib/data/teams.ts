export interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
  confederation: "UEFA" | "CONMEBOL" | "CONCACAF" | "CAF" | "AFC" | "OFC";
  fifaRank?: number;
}

export const TEAMS: Team[] = [
  // Grupo A
  { id: "mex", name: "México", flag: "🇲🇽", group: "A", confederation: "CONCACAF", fifaRank: 15 },
  { id: "kor", name: "Corea del Sur", flag: "🇰🇷", group: "A", confederation: "AFC", fifaRank: 23 },
  { id: "rsa", name: "Sudáfrica", flag: "🇿🇦", group: "A", confederation: "CAF", fifaRank: 61 },
  { id: "cze", name: "Chequia", flag: "🇨🇿", group: "A", confederation: "UEFA", fifaRank: 44 },
  // Grupo B
  { id: "can", name: "Canadá", flag: "🇨🇦", group: "B", confederation: "CONCACAF", fifaRank: 28 },
  { id: "bih", name: "Bosnia y Herzegovina", flag: "🇧🇦", group: "B", confederation: "UEFA", fifaRank: 70 },
  { id: "qat", name: "Qatar", flag: "🇶🇦", group: "B", confederation: "AFC", fifaRank: 52 },
  { id: "sui", name: "Suiza", flag: "🇨🇭", group: "B", confederation: "UEFA", fifaRank: 17 },
  // Grupo C
  { id: "bra", name: "Brasil", flag: "🇧🇷", group: "C", confederation: "CONMEBOL", fifaRank: 5 },
  { id: "mar", name: "Marruecos", flag: "🇲🇦", group: "C", confederation: "CAF", fifaRank: 11 },
  { id: "hai", name: "Haití", flag: "🇭🇹", group: "C", confederation: "CONCACAF", fifaRank: 89 },
  { id: "sco", name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C", confederation: "UEFA", fifaRank: 38 },
  // Grupo D
  { id: "usa", name: "Estados Unidos", flag: "🇺🇸", group: "D", confederation: "CONCACAF", fifaRank: 14 },
  { id: "par", name: "Paraguay", flag: "🇵🇾", group: "D", confederation: "CONMEBOL", fifaRank: 39 },
  { id: "aus", name: "Australia", flag: "🇦🇺", group: "D", confederation: "AFC", fifaRank: 26 },
  { id: "tur", name: "Turquía", flag: "🇹🇷", group: "D", confederation: "UEFA", fifaRank: 25 },
  // Grupo E
  { id: "ger", name: "Alemania", flag: "🇩🇪", group: "E", confederation: "UEFA", fifaRank: 9 },
  { id: "cuw", name: "Curazao", flag: "🇨🇼", group: "E", confederation: "CONCACAF", fifaRank: 82 },
  { id: "civ", name: "Costa de Marfil", flag: "🇨🇮", group: "E", confederation: "CAF", fifaRank: 42 },
  { id: "ecu", name: "Ecuador", flag: "🇪🇨", group: "E", confederation: "CONMEBOL", fifaRank: 23 },
  // Grupo F
  { id: "ned", name: "Países Bajos", flag: "🇳🇱", group: "F", confederation: "UEFA", fifaRank: 6 },
  { id: "jpn", name: "Japón", flag: "🇯🇵", group: "F", confederation: "AFC", fifaRank: 18 },
  { id: "swe", name: "Suecia", flag: "🇸🇪", group: "F", confederation: "UEFA", fifaRank: 43 },
  { id: "tun", name: "Túnez", flag: "🇹🇳", group: "F", confederation: "CAF", fifaRank: 40 },
  // Grupo G
  { id: "bel", name: "Bélgica", flag: "🇧🇪", group: "G", confederation: "UEFA", fifaRank: 8 },
  { id: "egy", name: "Egipto", flag: "🇪🇬", group: "G", confederation: "CAF", fifaRank: 34 },
  { id: "irn", name: "Irán", flag: "🇮🇷", group: "G", confederation: "AFC", fifaRank: 21 },
  { id: "nzl", name: "Nueva Zelanda", flag: "🇳🇿", group: "G", confederation: "OFC", fifaRank: 86 },
  // Grupo H
  { id: "esp", name: "España", flag: "🇪🇸", group: "H", confederation: "UEFA", fifaRank: 1 },
  { id: "cpv", name: "Cabo Verde", flag: "🇨🇻", group: "H", confederation: "CAF", fifaRank: 68 },
  { id: "ksa", name: "Arabia Saudita", flag: "🇸🇦", group: "H", confederation: "AFC", fifaRank: 60 },
  { id: "uru", name: "Uruguay", flag: "🇺🇾", group: "H", confederation: "CONMEBOL", fifaRank: 16 },
  // Grupo I
  { id: "fra", name: "Francia", flag: "🇫🇷", group: "I", confederation: "UEFA", fifaRank: 3 },
  { id: "sen", name: "Senegal", flag: "🇸🇳", group: "I", confederation: "CAF", fifaRank: 19 },
  { id: "irq", name: "Iraq", flag: "🇮🇶", group: "I", confederation: "AFC", fifaRank: 58 },
  { id: "nor", name: "Noruega", flag: "🇳🇴", group: "I", confederation: "UEFA", fifaRank: 29 },
  // Grupo J
  { id: "arg", name: "Argentina", flag: "🇦🇷", group: "J", confederation: "CONMEBOL", fifaRank: 2 },
  { id: "alg", name: "Argelia", flag: "🇩🇿", group: "J", confederation: "CAF", fifaRank: 35 },
  { id: "aut", name: "Austria", flag: "🇦🇹", group: "J", confederation: "UEFA", fifaRank: 22 },
  { id: "jor", name: "Jordania", flag: "🇯🇴", group: "J", confederation: "AFC", fifaRank: 64 },
  // Grupo K
  { id: "por", name: "Portugal", flag: "🇵🇹", group: "K", confederation: "UEFA", fifaRank: 7 },
  { id: "cod", name: "Rep. Dem. Congo", flag: "🇨🇩", group: "K", confederation: "CAF", fifaRank: 56 },
  { id: "uzb", name: "Uzbekistán", flag: "🇺🇿", group: "K", confederation: "AFC", fifaRank: 55 },
  { id: "col", name: "Colombia", flag: "🇨🇴", group: "K", confederation: "CONMEBOL", fifaRank: 13 },
  // Grupo L
  { id: "eng", name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L", confederation: "UEFA", fifaRank: 4 },
  { id: "cro", name: "Croacia", flag: "🇭🇷", group: "L", confederation: "UEFA", fifaRank: 10 },
  { id: "gha", name: "Ghana", flag: "🇬🇭", group: "L", confederation: "CAF", fifaRank: 72 },
  { id: "pan", name: "Panamá", flag: "🇵🇦", group: "L", confederation: "CONCACAF", fifaRank: 30 },
];

export const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"] as const;
export type Group = (typeof GROUPS)[number];

export const getTeamsByGroup = (g: string) => TEAMS.filter((t) => t.group === g);

export const getTeamById = (id: string) => TEAMS.find((t) => t.id === id);
