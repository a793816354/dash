/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  if (mat.length === 1) return mat[0];

  const length = mat[0].length;
  if (length > mat.length) {
    for (let index = 0; index < length - mat.length; index++) {
      mat.push(Array(length));
    }
  }

  let time = 0;
  let lastSum = 0;
  let result = [mat[0][0]];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < i; j++) {
      if (lastSum !== i + j) {
        time++;
      }
      lastSum = i + j;

      if (time % 2 === 0) {
        let rowIndex = i;
        let colIndex = j;
        while (
          rowIndex >= 0 &&
          colIndex < mat[rowIndex].length &&
          rowIndex + colIndex === time
        ) {
          result.push(mat[rowIndex][colIndex]);
          rowIndex--;
          colIndex++;
        }
      } else {
        let rowIndex = j;
        let colIndex = i;

        while (
          rowIndex < mat.length &&
          colIndex >= 0 &&
          rowIndex + colIndex === time
        ) {
          result.push(mat[rowIndex][colIndex]);
          rowIndex++;
          colIndex--;
        }
      }
    }

    // for (let j = i; j < mat[i].length; j++) {
    //   //   console.log(console.log(mat[i][j]));
    // }
  }

  const lastRow = mat[mat.length - 1];
  const formatResult = result.filter((item) => item !== undefined);

  if (
    lastRow[lastRow.length - 1] !== undefined &&
    lastRow[lastRow.length - 1] !== formatResult[formatResult.length - 1]
  ) {
    formatResult.push(lastRow[lastRow.length - 1]);
  }

  return formatResult;
};

// console.log(
//   findDiagonalOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// console.log(findDiagonalOrder([[3], [2]]));
// console.log(
//   findDiagonalOrder([
//     [2, 5],
//     [8, 4],
//     [0, -1],
//   ])
// );
// console.log(findDiagonalOrder([[7], [9], [6]]));

console.log(
  findDiagonalOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);
