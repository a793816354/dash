/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [1];

  for (let i = 1; i < rowIndex + 1; i++) {
    const arr = [];
    for (let j = 0; j < Math.ceil((i + 1) / 2); j++) {
      arr[j] = (result[j - 1] || 0) + (result[j] || 0);
      arr[i - j] = arr[j];
    }
    result = arr;
  }
  return result;
};
console.log(getRow(3));
