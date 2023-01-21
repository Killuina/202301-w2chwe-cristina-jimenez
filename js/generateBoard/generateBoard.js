const generateBoard = (columns, rows, cells) =>
  Array(columns)
    .fill(cells)
    .map(() => Array(rows).fill(cells));
export default generateBoard;
