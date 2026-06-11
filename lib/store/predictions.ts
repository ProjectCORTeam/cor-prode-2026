import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Prediction {
  matchId: string;
  homeScore: number;
  awayScore: number;
  savedAt: string;
}

interface PredictionsState {
  predictions: Record<string, Prediction>;
  setPrediction: (matchId: string, homeScore: number, awayScore: number) => void;
  removePrediction: (matchId: string) => void;
  getPrediction: (matchId: string) => Prediction | undefined;
  predictedCount: () => number;
  clearAll: () => void;
}

export const usePredictionsStore = create<PredictionsState>()(
  persist(
    (set, get) => ({
      predictions: {},
      setPrediction: (matchId, homeScore, awayScore) =>
        set((state) => ({
          predictions: {
            ...state.predictions,
            [matchId]: {
              matchId,
              homeScore,
              awayScore,
              savedAt: new Date().toISOString(),
            },
          },
        })),
      removePrediction: (matchId) =>
        set((state) => {
          const rest = { ...state.predictions };
          delete rest[matchId];
          return { predictions: rest };
        }),
      getPrediction: (matchId) => get().predictions[matchId],
      predictedCount: () => Object.keys(get().predictions).length,
      clearAll: () => set({ predictions: {} }),
    }),
    {
      name: "prode-mundial-2026-predictions",
    },
  ),
);
