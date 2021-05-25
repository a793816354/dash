/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowSet = new Set();
  const colSet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    const rowArr = matrix[i];
    for (let j = 0; j < rowArr.length; j++) {
      const col = rowArr[j];

      if (col === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  const zeroRows = [...rowSet.values()];
  for (let i = 0; i < zeroRows.length; i++) {
    const rowArr = matrix[zeroRows[i]];
    for (let j = 0; j < rowArr.length; j++) {
      rowArr[j] = 0;
    }
  }

  const zeroCols = [...colSet.values()];
  for (let i = 0; i < matrix.length; i++) {
    const rowArr = matrix[i];
    for (let j = 0; j < zeroCols.length; j++) {
      rowArr[zeroCols[j]] = 0;
    }
  }

  return matrix;
};

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
