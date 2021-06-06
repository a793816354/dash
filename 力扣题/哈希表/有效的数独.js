/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const colObj = {};
  const nineCellObj = {};
  for (let i = 0; i < board.length; i++) {
    const arr = board[i];
    const rowSet = new Set();
    for (let j = 0; j < arr.length; j++) {
      //行
      const ele = arr[j];
      if (ele !== ".") {
        if (rowSet.has(ele)) {
          return false;
        }
        rowSet.add(ele);

        //列
        if (colObj[j]) {
          if (colObj[j].has(ele)) {
            return false;
          }
        } else {
          colObj[j] = new Set();
        }
        colObj[j].add(ele);
      }

      //九宫格
      const indexStr = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

      if (
        ele !== "." &&
        nineCellObj[indexStr] &&
        nineCellObj[indexStr].has(ele)
      ) {
        return false;
      }

      if (i % 3 === 0 && j % 3 === 0) {
        const nineCellSet = new Set();
        nineCellSet.add(ele);
        nineCellObj[indexStr] = nineCellSet;
      } else {
        nineCellObj[indexStr].add(ele);
      }
    }
  }
  return true;
};
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
