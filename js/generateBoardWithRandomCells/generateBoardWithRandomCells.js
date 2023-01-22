import Cell from "../Cell/Cell";
import generateBoard from "../generateBoard/generateBoard";

const board = generateBoard(3, 3, null);

const generateRandomCells = () => {
  board.forEach((columns, position) => {
    board[position].forEach((rows, rowIndex) => {
      board[position][rowIndex] = new Cell();
    });
  });
};

export { generateRandomCells, board };
