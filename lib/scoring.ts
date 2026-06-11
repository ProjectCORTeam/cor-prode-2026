export interface ScoringResult {
  points: number;
  isExact: boolean;
  isCorrectOutcome: boolean;
}

/**
 * Calcula los puntos de una predicción:
 * - Resultado exacto: 3 puntos
 * - Ganador (o empate) correcto: 1 punto
 * - Incorrecto: 0 puntos
 */
export function calculatePoints(
  rH: number,
  rA: number,
  pH: number,
  pA: number,
): ScoringResult {
  if (rH === pH && rA === pA) {
    return { points: 3, isExact: true, isCorrectOutcome: true };
  }
  const correct = Math.sign(rH - rA) === Math.sign(pH - pA);
  return { points: correct ? 1 : 0, isExact: false, isCorrectOutcome: correct };
}
