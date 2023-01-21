import Cell from "./Cell";

describe("Given the constructor of the class Cell", () => {
  describe("When I instanciate an object with it", () => {
    test("Then is should return an object with property isALiveNextTurn: false", () => {
      const expectedisALiveNextTurnPropertyValue = false;

      const isALiveNextTurnPropertyValue = new Cell().isALiveNextTurn;

      expect(isALiveNextTurnPropertyValue).toBe(
        expectedisALiveNextTurnPropertyValue
      );
    });

    test("Then it should return an object with property isAlive: bolean", () => {
      const expectedIsAlivePropertyValue = "boolean";

      const isAlivePropertyValue = typeof new Cell().isAlive;

      expect(isAlivePropertyValue).toBe(expectedIsAlivePropertyValue);
    });

    test("Then it should return an object with property isAlive: bolean", () => {
      const expectednumberOfAliveNeighborsPropertyValue = 0;

      const numberOfAliveNeighborsPropertyValue = new Cell()
        .numberOfAliveNeighbors;

      expect(numberOfAliveNeighborsPropertyValue).toBe(
        expectednumberOfAliveNeighborsPropertyValue
      );
    });
  });
});
