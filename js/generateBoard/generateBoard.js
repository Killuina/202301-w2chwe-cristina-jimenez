const generateBoard = (columns, rows, element) =>
  Array(columns)
    .fill(element)
    .map(() => Array(rows).fill(element));
export default generateBoard;
