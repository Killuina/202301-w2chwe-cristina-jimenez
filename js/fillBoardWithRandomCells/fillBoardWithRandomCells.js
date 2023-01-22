import Cell from "../Cell/Cell.js";
import generateBoard from "../generateBoard/generateBoard.js";

const board = generateBoard(3, 3, null);

const fillBoardWithRandomCells = () => {
  board.forEach((columns, position) => {
    board[position].forEach((rows, rowIndex) => {
      board[position][rowIndex] = new Cell();
    });
  });
};

fillBoardWithRandomCells();

export { fillBoardWithRandomCells, board };
