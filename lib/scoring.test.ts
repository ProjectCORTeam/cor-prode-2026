import { describe, expect, it } from "vitest";
import { calculatePoints } from "./scoring";

describe("calculatePoints", () => {
  it("resultado exacto = 3 puntos", () => {
    expect(calculatePoints(2, 1, 2, 1)).toEqual({
      points: 3,
      isExact: true,
      isCorrectOutcome: true,
    });
  });

  it("empate exacto = 3 puntos", () => {
    expect(calculatePoints(0, 0, 0, 0)).toEqual({
      points: 3,
      isExact: true,
      isCorrectOutcome: true,
    });
  });

  it("ganador correcto con marcador distinto = 1 punto", () => {
    expect(calculatePoints(3, 0, 1, 0)).toEqual({
      points: 1,
      isExact: false,
      isCorrectOutcome: true,
    });
    expect(calculatePoints(0, 2, 1, 3)).toEqual({
      points: 1,
      isExact: false,
      isCorrectOutcome: true,
    });
  });

  it("empate correcto con marcador distinto = 1 punto", () => {
    expect(calculatePoints(1, 1, 2, 2)).toEqual({
      points: 1,
      isExact: false,
      isCorrectOutcome: true,
    });
  });

  it("resultado incorrecto = 0 puntos", () => {
    expect(calculatePoints(2, 0, 0, 2)).toEqual({
      points: 0,
      isExact: false,
      isCorrectOutcome: false,
    });
    expect(calculatePoints(1, 1, 2, 1)).toEqual({
      points: 0,
      isExact: false,
      isCorrectOutcome: false,
    });
    expect(calculatePoints(2, 1, 1, 1)).toEqual({
      points: 0,
      isExact: false,
      isCorrectOutcome: false,
    });
  });
});
