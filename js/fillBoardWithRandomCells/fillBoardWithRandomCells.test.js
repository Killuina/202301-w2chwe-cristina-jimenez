import { fillBoardWithRandomCells } from "./fillBoardWithRandomCells.js";

describe("Given the fillBoardWithRandomCells function", () => {
  describe("When I call it", () => {
    test("Then it should return a bidimensional array with cell objects with random (either true or false) isAlive property", () => {
      const expectedIsAlivePropertyValue = "boolean";

      const isAlivePropertyValue =
        typeof fillBoardWithRandomCells()[0][0].isAlive;

      expect(expectedIsAlivePropertyValue).toBe(isAlivePropertyValue);
    });
  });
});
