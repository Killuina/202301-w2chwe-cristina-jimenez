const generateBoard = (columns, rows, elements) =>
  Array(columns)
    .fill(elements)
    .map(() => Array(rows).fill(elements));
export default generateBoard;
