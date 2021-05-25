// 分析:矩阵对角线互换：i全 ，j<i

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const arrItem = matrix[i];
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const arrItem = matrix[i];
    for (let j = 0; j < arrItem.length / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][arrItem.length - 1 - j];
      matrix[i][arrItem.length - 1 - j] = temp;
    }
  }
  return matrix;
};
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// rotate([
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11],
// ]);
