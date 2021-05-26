/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const arr = [];
    for (let j = 0; j < Math.ceil((i + 1) / 2); j++) {
      arr[j] = (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0);
      arr[i - j] = arr[j];
    }
    result[result.length] = arr;
  }
  return result;
};
console.log(generate(5));
