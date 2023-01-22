import Cell from "../Cell/Cell.js";
import generateBoard from "../generateBoard/generateBoard.js";

const fillBoardWithRandomCells = () => {
  const board = generateBoard(3, 3, null);
  board.forEach((columns, position) => {
    board[position].forEach((rows, rowIndex) => {
      board[position][rowIndex] = new Cell();
    });
  });
  return board;
};

fillBoardWithRandomCells();

export { fillBoardWithRandomCells };
