import generateBoard from "./generateBoard";

describe("Given the generateBoard function", () => {
  describe("When it receives 3 and 3 and 'potatoes'", () => {
    test("Then it should return a bidimensional array with 3 'potatoes'", () => {
      const boardColumns = 3;
      const boardRows = 3;
      const boardElements = "potatoes";
      const expectedBidimensionalArray = [
        ["potatoes", "potatoes", "potatoes"],
        ["potatoes", "potatoes", "potatoes"],
        ["potatoes", "potatoes", "potatoes"],
      ];

      const bidimensionalArray = generateBoard(
        boardColumns,
        boardRows,
        boardElements
      );

      expect(bidimensionalArray).toStrictEqual(expectedBidimensionalArray);
    });
  });
});
