import Cell from "./Cell";

describe("Given the constructor of the class Cell", () => {
  describe("When I instanciate an object with it", () => {
    test("Then is should return an object with property isALiveNextTurn: false", () => {
      const expectedisAliveNextTurnPropertyValue = false;

      const isAliveNextTurnPropertyValue = new Cell().isAliveNextTurn;

      expect(isAliveNextTurnPropertyValue).toBe(
        expectedisAliveNextTurnPropertyValue
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

describe("Given the die() method of the class Cell", () => {
  describe("When i call it on a cell object", () => {
    test("Then it changes its property isAlive value from true to false", () => {
      const expectedPreviousIsAlivePropertyValue = true;
      const expectedNewIsAlivePropertyValue = false;

      const instanciatedCell = new Cell();
      instanciatedCell.isAlive = true;

      const previousIsAlivePropertyValue = instanciatedCell.isAlive;

      expect(previousIsAlivePropertyValue).toBe(
        expectedPreviousIsAlivePropertyValue
      );

      instanciatedCell.die();
      const newIsAlivePropertyValue = instanciatedCell.isAlive;

      expect(newIsAlivePropertyValue).toBe(expectedNewIsAlivePropertyValue);
    });
  });
});

describe("Given the revive() method of the class Cell", () => {
  describe("When i call it on a cell object", () => {
    test("Then it changes its property isAlive value from false to true", () => {
      const expectedPreviousIsAlivePropertyValue = false;
      const expectedNewIsAlivePropertyValue = true;

      const instanciatedCell = new Cell();
      instanciatedCell.isAlive = false;

      const previousIsAlivePropertyValue = instanciatedCell.isAlive;

      expect(previousIsAlivePropertyValue).toBe(
        expectedPreviousIsAlivePropertyValue
      );

      instanciatedCell.revive();
      const newIsAlivePropertyValue = instanciatedCell.isAlive;

      expect(newIsAlivePropertyValue).toBe(expectedNewIsAlivePropertyValue);
    });
  });
});

describe("Given the nextGeneration() method of the class Cell", () => {
  describe("When i call it on a cell object", () => {
    test("Then it assings property isAlive value to isAliveNextTurn value", () => {
      const expectedPreviousIsAlivePropertyValue = true;
      const expectedNewIsAlivePropertyValue = false;

      const instanciatedCell = new Cell();
      instanciatedCell.isAlive = true;

      const previousIsAlivePropertyValue = instanciatedCell.isAlive;

      expect(previousIsAlivePropertyValue).toBe(
        expectedPreviousIsAlivePropertyValue
      );

      instanciatedCell.nextGeneration();
      const newIsAlivePropertyValue = instanciatedCell.isAlive;

      expect(newIsAlivePropertyValue).toBe(expectedNewIsAlivePropertyValue);
    });
  });
});
